# Project Plan

## Understanding

We are building a production-grade marketing + recruiting website for an AI
engineering company that:

1. Does contract/partner engineering work for enterprise technology companies
   (agentic AI, RAG, applied ML, AI platform engineering, evaluation).
2. Builds its own "Special Projects" — proprietary applied AI products.
3. Runs its own careers platform (job listings + application intake), not a
   third-party ATS embed.
4. Has a lightweight internal admin dashboard to manage jobs and applications.

The site must read as an engineering-led AI lab, not a staffing agency, a
generic SaaS template, or a crypto/web3 project. Content integrity is a hard
requirement: no invented customers, partners, metrics, headcount, funding, or
testimonials. Anything factual that hasn't been supplied ships as an empty,
config-driven field (hidden when empty) or an explicitly labeled placeholder.

## Technical Assumptions

Since no infrastructure accounts or real company facts were supplied, the
following assumptions are in effect until corrected:

- **Company name**: placeholder `Nexora` (taken from the spec's own admin
  dashboard mockup) used everywhere a name is needed. Trivial to swap — it's
  a single value in `config/company.ts`.
- **Legal name, HQ, founding date, headcount, funding, social links**: left
  blank in `config/company.ts` and not rendered (per the "don't display empty
  fields" rule).
- **Partners/clients**: `partnerSection.enabled = false`, `companies = []`
  until real, rights-cleared names are provided.
- **Case studies / special projects**: seeded with placeholder content
  explicitly labeled as development data, per Section 46 of the spec.
- **Infrastructure accounts** (Neon Postgres, S3/R2, Resend, Sentry, Auth.js
  provider, Vercel project): not provisioned. The app is built against these
  interfaces with typed clients and `.env.example`, but actually connecting
  them requires credentials only the company can supply.
- **Auth.js provider for admin**: assumed to be email magic-link (via Resend)
  or credentials-based single admin account for MVP, since no SSO/IdP was
  specified. Easy to swap for Google/Okta later.
- **Next.js 16 / Tailwind CSS 4**: current stable majors as of build time are
  targeted; exact patch versions are whatever `npm install` resolves at
  scaffold time.

## Information Architecture

See [SITE_MAP.md](./SITE_MAP.md).

## Component Architecture

See [COMPONENT_ARCHITECTURE.md](./COMPONENT_ARCHITECTURE.md).

## Database Schema

See [DATABASE_SCHEMA.md](./DATABASE_SCHEMA.md).

## Design System

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md).

## Content Model

See [CONTENT_MODEL.md](./CONTENT_MODEL.md).

## Security

See [SECURITY_NOTES.md](./SECURITY_NOTES.md).

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md).

## Implementation Phases

1. **Foundation** — project init, Tailwind/typography tokens, base layout,
   header/footer, config-driven company data.
2. **Homepage** — hero, architecture visual, partner section (disabled by
   default), dual-business section, capabilities, selected work, special
   projects, careers CTA.
3. **Marketing pages** — capabilities, work + case study detail, projects +
   detail, company, contact, privacy, terms.
4. **Careers (read path)** — index, filters, job detail, JobPosting JSON-LD.
   Backed by seed data before a real database is wired up.
5. **Applications (write path)** — apply form, Zod validation, resume upload
   (stubbed storage adapter until S3/R2 credentials exist), DB persistence,
   confirmation email (stubbed until Resend key exists).
6. **Admin** — auth-gated dashboard, job CRUD, application review/status.
7. **SEO / accessibility / performance** — metadata, sitemap, robots,
   JSON-LD, OpenGraph, audits.
8. **Production QA** — full route/device/auth/error-state pass.

Each phase ends with lint, typecheck, and build passing before moving on.

## Missing Factual Information (tracked, not blocking)

- Real company name / legal name / HQ location
- Real partner or client names + usage rights
- Real case study content, architectures, and results
- Real special-project names and status
- Actual job openings (using realistic seed data until provided)
- Social links (LinkedIn/GitHub)
- Infrastructure credentials (Neon, S3/R2, Resend, Sentry, Auth.js provider)
- Legal copy for Privacy/Terms (placeholder boilerplate will be marked as such)
