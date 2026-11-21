/**
 * Maple Key mailing-list sign-up. Runtime-neutral (web Request/Response, no imports): use it from a
 * Vercel function (api/subscribe.ts) or a Cloudflare Pages Function (functions/api/subscribe.ts).
 *
 * POST body: { email, source?, website }. `website` is a honeypot and must be empty.
 * Adds the address as a Resend contact (in RESEND_SEGMENT_ID when set). For a brand-new contact it
 * also fires EVENT_NAME, which a Resend Automation turns into the welcome email.
 *
 * Env: RESEND_API_KEY (Full access; Sending access can't write contacts), RESEND_SEGMENT_ID (optional).
 * Docs: https://resend.com/docs/api-reference/contacts/create-contact
 */

// ── Per-client settings ─────────────────────────────────────────────────────
/** Namespaced: Automations match event names across the whole Resend account. */
const EVENT_NAME = "maple_key.mailing_list.joined";
/** Where sign-ups come from. Logged and sent with the event, never the address. */
const SOURCES = ["footer", "contact", "preregister"] as const;
const USER_AGENT = "maple-key-site"; // Resend rejects requests without a User-Agent (403)
// ────────────────────────────────────────────────────────────────────────────

export interface SubscribeEnv {
  RESEND_API_KEY?: string;
  RESEND_SEGMENT_ID?: string;
}

type Source = (typeof SOURCES)[number];

// Stricter than type="email", which accepts "name@gmail". Use the same pattern in the form.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function normalizeEmail(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const email = value.trim().toLowerCase();
  return email.length <= 320 && EMAIL_RE.test(email) ? email : null;
}

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

// Swap for the repo's logger if it has one (e.g. a Loki/Grafana `log`). Never log the address.
const log = (level: "info" | "warn" | "error", event: string, fields: Record<string, unknown> = {}) =>
  console[level === "info" ? "log" : level](JSON.stringify({ level, event, ...fields }));

const UNAVAILABLE = "Sign-up isn't available right now. Please try again later.";

export async function handleSubscribe(request: Request, env: SubscribeEnv): Promise<Response> {
  const body = (await request.json().catch(() => ({}))) as { email?: unknown; website?: unknown; source?: unknown };

  // Honeypot: people never see the field, bots fill it. Pretend it worked so they don't adapt.
  if (typeof body.website === "string" && body.website !== "") {
    log("warn", "subscribe.honeypot");
    return json({ ok: true });
  }
  const email = normalizeEmail(body.email);
  if (!email) return json({ error: "Please enter a valid email address." }, 400);
  const source: Source = SOURCES.includes(body.source as Source) ? (body.source as Source) : SOURCES[0];

  const apiKey = env.RESEND_API_KEY?.trim();
  if (!apiKey) {
    log("error", "subscribe.failed", { source, message: "RESEND_API_KEY is not set" });
    return json({ error: UNAVAILABLE }, 503);
  }
  const segmentId = env.RESEND_SEGMENT_ID?.trim() || undefined;

  try {
    await addToMailingList(apiKey, email, segmentId, source);
    log("info", "subscribe.ok", { source });
    return json({ ok: true });
  } catch (err) {
    log("error", "subscribe.failed", { source, message: err instanceof Error ? err.message : String(err) });
    return json({ error: UNAVAILABLE }, 502);
  }
}

function resend(apiKey: string, path: string, body?: unknown): Promise<Response> {
  return fetch(`https://api.resend.com${path}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json", "User-Agent": USER_AGENT },
    body: body === undefined ? undefined : JSON.stringify(body),
    signal: AbortSignal.timeout(8000),
  });
}

/**
 * Safe to repeat for the same person. Resend doesn't document what creating an existing contact
 * returns, so on a non-auth 4xx we add the existing contact to the segment. Only a brand-new contact
 * fires the welcome event, so signing up twice doesn't send a second welcome.
 * Exported so a checkout webhook can reuse it.
 */
export async function addToMailingList(apiKey: string, email: string, segmentId: string | undefined, source: string): Promise<void> {
  const created = await resend(apiKey, "/contacts", {
    email,
    unsubscribed: false,
    ...(segmentId && { segments: [{ id: segmentId }] }),
  });
  if (created.ok) {
    await sendJoinedEvent(apiKey, email, source);
    return;
  }
  const { status } = created;
  if (status >= 400 && status < 500 && status !== 401 && status !== 403) {
    if (!segmentId) return;
    const added = await resend(apiKey, `/contacts/${encodeURIComponent(email)}/segments/${segmentId}`);
    if (added.ok) return;
    throw new Error(`Resend add-to-segment failed (${added.status}): ${await added.text().catch(() => "")}`);
  }
  throw new Error(`Resend create contact failed (${status}): ${await created.text().catch(() => "")}`);
}

/** Best effort: the person is already on the list, so a failure here only skips the welcome. */
async function sendJoinedEvent(apiKey: string, email: string, source: string): Promise<void> {
  try {
    const res = await resend(apiKey, "/events/send", { event: EVENT_NAME, email, payload: { source } });
    if (!res.ok) log("warn", "welcome.event_failed", { status: res.status, message: await res.text().catch(() => "") });
  } catch (err) {
    log("warn", "welcome.event_failed", { message: err instanceof Error ? err.message : String(err) });
  }
}
