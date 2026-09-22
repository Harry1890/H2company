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
export const NOTIFY_TO = process.env.NOTIFY_EMAIL ?? "";
