# Content Model

## Configuration-Driven Facts

All factual claims about the company live in `config/`, not hard-coded in
components, so they can be corrected without touching UI code.

```ts
// config/company.ts
export const companyConfig = {
  name: "Nexora",            // PLACEHOLDER — replace with real name
  legalName: "",
  description: "",
  headquarters: "",
  social: { linkedin: "", github: "" },
  partnerSection: {
    enabled: false,           // stays false until real, cleared names exist
    label: "Selected partners",
    companies: [] as { name: string; logo: string }[],
  },
};
```

Rendering rule: any component reading an empty string/array/false flag
renders nothing for that piece — no "coming soon" placeholders in
production UI.

## Placeholder vs. Real Content

Two kinds of placeholder content exist during development:

1. **Structural placeholders** (lorem-ipsum-free but fictional) — case
   studies, special projects, and jobs used to build and test the UI. These
   carry `isPlaceholder: true` in the database and are excluded from
   production queries by default.
2. **Empty factual fields** — things like founding date or headcount that
   are simply not populated. These never get an invented value; the UI omits
   them entirely.

## Content Integrity Rules (hard constraints)

Never invent: customers, partnerships, partner status, project results,
revenue, headcount, funding, testimonials, certifications, awards, office
locations, customer logos, metrics, or success percentages. This applies to
seed data (must be clearly fictional/generic, e.g. "Fortune 100 Technology
Company") and to all UI copy.

## Anonymization Model (`case_studies.customerVisibility`)

- `PUBLIC` — `customerName` shown as-is (only with approved rights).
- `ANONYMIZED` — `customerName` is null; `customerType` (e.g. "Global
  Enterprise Software Company") is shown instead.
- `PRIVATE` — not rendered on any public route at all.

## Job Content

Jobs are real product data (not marketing copy) and should read like an
actual engineering job posting: concrete responsibilities, concrete
requirements, real compensation ranges when available. Seed jobs are
labeled as development seed data in a code comment, not in user-facing copy
(a real posting UI shouldn't show "seed" badges).
