# Mailing list (Resend): setup

Sign-ups come from the **footer form** on every page and from the **unticked opt-in box** on the
Contact/Register and Pre-register forms. They go to `/api/subscribe` (`api/subscribe.ts` →
`server/subscribe.ts`), which adds the address to Resend. New subscribers also fire the event
`maple_key.mailing_list.joined`, which sends the welcome email. The site stores nothing.

**Account:** runs on Matt's own Resend account (decided Nov 21, 2026). That team may still hold Duke
Street Turnaround's list until the band moves to its own account. Until then, don't invite Maple
Key staff into it, because they would see the other list.

## 1. Domain
- [ ] Resend → Domains → Add `maplekeymusic.ca`. DNS is at **Porkbun**. Add the records Resend
      shows. In the Host field, enter only the part before the domain:
  - TXT `resend._domainkey` (DKIM)
  - MX `send` → `feedback-smtp.<region>.amazonses.com`, priority 10
  - TXT `send` → `v=spf1 include:amazonses.com ~all`
  - Optional: TXT `_dmarc` → `v=DMARC1; p=none;`
- [ ] Click **Verify** and wait for "Verified".
- If the Cloudflare Pages move (`docs/CLOUDFLARE_PAGES_MIGRATION.md`) has moved DNS to Cloudflare,
  add these records there instead, and make sure they're copied across during the move.

## 2. List and key
- [ ] Audience → Segments → Create **"Maple Key mailing list"** and copy its ID.
- [ ] API Keys → Create, Permission **Full access** (a Sending-access key can't add contacts).
      Copy the whole `re_…` key from the pop-up, because it's shown only once.

## 3. Hosting env vars (Production + Preview)
Vercel today, or Cloudflare Pages after the move (as Secrets). Never prefix them `VITE_`.
- [ ] `RESEND_API_KEY`
- [ ] `RESEND_SEGMENT_ID`
- [ ] Redeploy.

## 4. Welcome email
- [ ] Resend → Templates → Upload HTML: `emails/welcome.html` (kept out of git; ask Matt for it).
  - From: `Maple Key Music Academy <news@maplekeymusic.ca>`
  - Reply-To: `maplekeymusic.academy@gmail.com`
  - Subject: "Welcome to Maple Key Music Academy!"
  - Check the **Unsubscribe** link survived the upload, then **Publish**.
- [ ] Resend → Automations → Create: trigger **Custom event** `maple_key.mailing_list.joined` →
      **Send email** with that template. No "Add to segment" step is needed. Turn it on.

## 5. Test
- [ ] Sign up in the footer with a plus address (`you+mk1@gmail.com`). The contact appears in the
      segment, a run shows under Automations → Runs, and the welcome email arrives.
- [ ] Send the contact form with the box ticked: the message arrives (EmailJS) **and** the contact
      is added.
- [ ] Quick live check that adds nobody: a POST to `/api/subscribe` with `{"email":"bad"}` returns 400.

## 6. Sending newsletters
Resend → Broadcasts → Create → From `news@maplekeymusic.ca` → To segment "Maple Key mailing list" →
send yourself a test → send or schedule. Resend handles unsubscribes.

CASL: only email people who opted in. Every email names Maple Key and has a working unsubscribe link.
