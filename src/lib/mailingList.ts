export type SignupSource = "footer" | "contact" | "preregister";

/** Adds an email to the mailing list via /api/subscribe. Throws with a message safe to show. */
export async function joinMailingList(email: string, source: SignupSource, website = ""): Promise<void> {
  let res: Response;
  try {
    res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, source, website }),
    });
  } catch {
    throw new Error("Couldn't reach the server. Please try again.");
  }
  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as { error?: string };
    throw new Error(data.error ?? "Something went wrong. Please try again.");
  }
}

/** Opt-in wording shared by every form. Unticked by default, as CASL requires. */
export const OPT_IN_LABEL =
  "Email me news, events and program updates from Maple Key Music Academy. Unsubscribe anytime.";
