import { Resend } from "resend";

let client: Resend | null = null;

// Constructed lazily — the Resend SDK throws if the API key is missing,
// which would otherwise break the build/boot when RESEND_API_KEY isn't set.
export function getResend() {
  if (!client) {
    client = new Resend(process.env.RESEND_API_KEY);
  }
  return client;
}

export const NOTIFY_FROM = "Wide <onboarding@resend.dev>";

// Each form notifies its own inbox. Falls back to NOTIFY_EMAIL if the
// specific one isn't set, so a single-address setup still works.
export const NOTIFY_CONTACT_EMAIL =
  process.env.NOTIFY_CONTACT_EMAIL || process.env.NOTIFY_EMAIL || "";
export const NOTIFY_JOBS_EMAIL =
  process.env.NOTIFY_JOBS_EMAIL || process.env.NOTIFY_EMAIL || "";
