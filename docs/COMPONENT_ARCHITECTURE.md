# Component Architecture

## Principles

- Server Components by default. `"use client"` only where interaction, state,
  or browser APIs are required (nav scroll state, forms, the architecture
  visual's hover/animation logic, admin editors).
- Page components (`app/**/page.tsx`) stay thin: fetch/compose data, render
  section components. No business logic, no inline DB queries.
- Data access lives in `lib/db/queries/*`, never inline in components.
- Mutations go through Server Actions in `lib/actions/*`, validated with Zod
  schemas from `lib/validation/*`.

## Directory Layout

```text
app/
  (marketing)/
    layout.tsx            # header + footer shell
    page.tsx               # homepage composition
    capabilities/page.tsx
    work/page.tsx
    work/[slug]/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    company/page.tsx
    careers/page.tsx
    careers/[slug]/page.tsx
    careers/[slug]/apply/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
  admin/
    layout.tsx             # auth check + admin shell
    page.tsx
    jobs/page.tsx
    jobs/new/page.tsx
    jobs/[id]/page.tsx
    applications/page.tsx
    applications/[id]/page.tsx
  api/
    uploads/resume/route.ts
    webhooks/.../route.ts
  layout.tsx
  globals.css

components/
  layout/
    header.tsx             # client: scroll-based background transition
    footer.tsx
    mobile-nav.tsx          # client
  home/
    hero.tsx
    ai-system-visual.tsx    # client: motion/SVG diagram
    partners.tsx            # server, config-driven, renders null if disabled
    dual-business.tsx
    capabilities.tsx
    selected-work.tsx
    special-projects.tsx
    careers-cta.tsx
  careers/
    job-row.tsx
    job-filter.tsx          # client: filter state in URL search params
    job-header.tsx
    job-sidebar.tsx
    application-form.tsx    # client: react-hook-form + zod
  work/
    case-study-card.tsx
    case-study-body.tsx
  projects/
    project-card.tsx
    status-badge.tsx
  admin/
    dashboard-stats.tsx
    job-editor-form.tsx     # client
    application-table.tsx
    application-detail.tsx
    status-select.tsx       # client
  ui/                       # shadcn primitives, used sparingly and restyled

lib/
  auth/                     # Auth.js config, session helpers
  db/
    index.ts                # drizzle client
    schema.ts               # drizzle schema
    queries/                # typed read functions
  actions/                  # server actions (mutations)
  validation/               # zod schemas
  storage/                  # S3/R2 adapter, presigned URL helper
  email/                    # Resend client + templates
  seo/                      # metadata + JSON-LD builders
  utils/

config/
  company.ts                # factual company data (empty until supplied)
  partners.ts                # partner/client config, disabled by default
  site.ts                    # nav items, site URL, feature flags
```

## Key Component Contracts

- `partners.tsx` reads `companyConfig.partnerSection`; if `enabled` is false
  or `companies` is empty, the section renders nothing (no empty-state UI on
  a page — the section simply doesn't exist).
- `ai-system-visual.tsx` is the only heavy client animation on the homepage;
  it checks `prefers-reduced-motion` and falls back to a static diagram.
- `job-row.tsx` and `application-form.tsx` are shared between the public
  careers pages and are not admin-only, distinguishing them from
  `admin/application-table.tsx`.
- Admin components never fetch data client-side on mount; the parent Server
  Component page fetches and passes props, keeping the client bundle small.
