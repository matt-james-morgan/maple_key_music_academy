import { handleSubscribe } from "../server/subscribe.js";

/** POST /api/subscribe — body `{ email, source?, website }`. Vercel wrapper; logic is in server/. */
export function POST(request: Request): Promise<Response> {
  return handleSubscribe(request, {
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_SEGMENT_ID: process.env.RESEND_SEGMENT_ID,
  });
}
