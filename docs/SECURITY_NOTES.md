# Security Notes

## Resume Upload

- Accept `application/pdf` only; validate both the reported MIME type and
  the file extension (client-reported MIME is not trusted alone).
- Enforce a maximum file size (e.g. 10MB) at the route handler, before any
  upload to storage.
- Generate a randomized storage key (`crypto.randomUUID()` + `.pdf`) server
  side; never use the client-supplied filename as a storage path.
- Store the sanitized original filename (display-only) separately in
  `applications.resumeOriginalName`; strip path separators and control
  characters from it before persisting.
- Upload via a short-lived presigned URL/POST policy scoped to the exact
  key and content type, so the app server never proxies large binary
  payloads and storage credentials are never exposed to the client.
- Reject uploads whose actual content doesn't match a PDF signature
  (`%PDF-` header check) server-side, to prevent extension spoofing /
  executable smuggling.

## Admin Auth

- `/admin/*` is gated in the route group's layout via an Auth.js session
  check; unauthenticated requests redirect to sign-in rather than each page
  re-implementing the check.
- Admin session cookies: `httpOnly`, `secure` in production, `sameSite=lax`.
- No client-side-only gating — the check happens in a Server Component/
  middleware so it can't be bypassed by disabling JS.

## Forms & Input

- Every form (contact, application, job editor) is validated with a shared
  Zod schema on both client (react-hook-form resolver) and server (Server
  Action re-validates — never trust client validation alone).
- Contact form includes a honeypot field and a minimum time-to-submit check
  as basic anti-spam; rate-limit submissions per IP.

## Secrets

- No secret is ever exposed via `NEXT_PUBLIC_*`.
- Storage, database, email, and Sentry credentials are read only in server
  code (Server Actions, route handlers, `lib/*`), never in Client Components.

## Data Exposure

- `case_studies` with `customerVisibility = PRIVATE` are excluded from every
  public query at the data-access layer (`lib/db/queries`), not filtered in
  the UI, so a private case study can never leak via a mis-rendered page.
- Admin-only fields (`internalNotes`, applicant contact info) are only
  selected in admin queries, not in the shared query functions used by
  public routes.
