# Site Map

```text
/                           Homepage
/capabilities               Deep-dive on the 6 technical domains
/work                       Case study index (editorial)
/work/[slug]                Case study detail
/projects                   Special Projects index
/projects/[slug]            Special Project detail
/company                    Company page
/careers                    Job listing index + filters
/careers/[slug]             Job detail
/careers/[slug]/apply       Application form
/contact                    Contact form
/privacy                    Privacy policy
/terms                      Terms of service

/admin                      Dashboard overview (auth-gated)
/admin/jobs                 Job management list
/admin/jobs/new             Job editor (create)
/admin/jobs/[id]            Job editor (edit)
/admin/applications         Application list + filters
/admin/applications/[id]    Applicant profile + status/notes

/api/uploads/resume         Route handler: presigned resume upload
/api/webhooks/*             Route handlers for external webhooks (email, etc.)

/sitemap.xml                Generated via Next.js Metadata API
/robots.txt                 Generated via Next.js Metadata API
```

## Route Groups

- `(marketing)` — all public pages above `/admin`. Shares header/footer.
- `admin` — separate layout, no public header/footer, auth-gated at the
  layout level (redirects to a sign-in screen if unauthenticated).

## Data Dependencies by Route

| Route | Reads | Writes |
|---|---|---|
| `/` | config, capabilities, featured case studies, featured projects, featured jobs | — |
| `/capabilities` | capabilities content | — |
| `/work`, `/work/[slug]` | case studies (respecting `customerVisibility`) | — |
| `/projects`, `/projects/[slug]` | special projects | — |
| `/careers`, `/careers/[slug]` | jobs where `status = PUBLISHED` | — |
| `/careers/[slug]/apply` | job (for context) | application, resume upload |
| `/contact` | — | contact submission → Resend |
| `/admin/*` | jobs, applications (all statuses) | job CRUD, application status/notes |
