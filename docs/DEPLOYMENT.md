# Deployment

## Target

Vercel, with Neon PostgreSQL as the database.

## Environment Variables

```text
DATABASE_URL=

AUTH_SECRET=
AUTH_URL=

RESEND_API_KEY=

S3_BUCKET=
S3_REGION=
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=
# or, if using Cloudflare R2 instead of S3:
R2_ACCOUNT_ID=
R2_BUCKET=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=

NEXT_PUBLIC_SITE_URL=

SENTRY_DSN=
NEXT_PUBLIC_SENTRY_DSN=
```

None of these are set in the repository. A `.env.example` documents them;
local development without them should degrade gracefully (e.g. resume
upload and email sending are stubbed/no-op with a console warning when
credentials are absent, rather than crashing the app).

## Database Migrations

Drizzle Kit manages migrations (`drizzle/` directory). Run
`drizzle-kit generate` after schema changes and `drizzle-kit migrate` against
`DATABASE_URL` as part of the deploy step.

## Build Gate

Every deploy must pass, in order:

1. `npm run lint`
2. `npm run typecheck`
3. `npm run build`

## Monitoring

- Sentry for error tracking (server + client), DSN via env var only.
- Vercel Analytics for traffic/performance, no additional configuration
  needed beyond enabling it on the Vercel project.

## Rollout Notes

- Seed data (placeholder jobs/case studies/projects) must not be run against
  the production database; it's a local/dev-only script
  (`npm run db:seed`, gated behind `NODE_ENV !== 'production'`).
- The admin account for local development is created by the seed script
  only in non-production environments.
