# Database Schema

PostgreSQL via Drizzle ORM. Enums used where the spec defines closed sets.

```ts
// lib/db/schema.ts (shape — see actual file for Drizzle syntax)

enum JobStatus { DRAFT, PUBLISHED, CLOSED, ARCHIVED }
enum EmploymentType { FULL_TIME, PART_TIME, CONTRACT, INTERN }
enum WorkplaceType { REMOTE, HYBRID, ON_SITE }
enum ApplicationStatus {
  NEW, REVIEWING, SCREEN, INTERVIEW, OFFER, HIRED, REJECTED, WITHDRAWN
}
enum WorkAuthorization { YES, NO }
enum CustomerVisibility { PUBLIC, ANONYMIZED, PRIVATE }
enum ProjectStatus {
  RESEARCH, ACTIVE_DEVELOPMENT, PRIVATE_BETA, LIVE, PAUSED, ARCHIVED
}

table jobs {
  id                    uuid PK default gen_random_uuid()
  slug                  text unique not null
  title                 text not null
  department            text not null
  level                 text
  location              text
  workplaceType         enum WorkplaceType not null
  employmentType        enum EmploymentType not null
  salaryMin             integer
  salaryMax             integer
  salaryCurrency        text default 'USD'
  shortDescription      text not null
  description           text not null            -- rich text / markdown
  responsibilities      text[] not null default '{}'
  requirements          text[] not null default '{}'
  preferredQualifications text[] not null default '{}'
  technologies          text[] not null default '{}'
  status                enum JobStatus not null default 'DRAFT'
  featured              boolean not null default false
  publishedAt           timestamptz
  closesAt              timestamptz
  createdAt             timestamptz not null default now()
  updatedAt             timestamptz not null default now()
}

table applications {
  id                    uuid PK default gen_random_uuid()
  jobId                 uuid FK -> jobs.id not null
  firstName             text not null
  lastName              text not null
  email                 text not null
  phone                 text
  linkedinUrl           text
  githubUrl             text
  portfolioUrl          text
  resumeUrl             text not null          -- storage key, not raw filename
  resumeOriginalName    text                    -- sanitized, display-only
  coverNote             text
  workAuthorization     enum WorkAuthorization
  sponsorshipRequired   enum WorkAuthorization
  status                enum ApplicationStatus not null default 'NEW'
  source                text default 'website'
  internalNotes         text                    -- admin-only
  createdAt             timestamptz not null default now()
  updatedAt             timestamptz not null default now()

  index on (jobId)
  index on (status)
}

table case_studies {
  id                    uuid PK default gen_random_uuid()
  slug                  text unique not null
  title                 text not null
  customerName          text                    -- null when anonymized
  customerVisibility    enum CustomerVisibility not null default 'ANONYMIZED'
  customerType          text                    -- e.g. "Fortune 100 Technology Company"
  shortDescription      text not null
  challenge             text
  approach              text
  architecture          text                    -- diagram description / markdown
  technologies          text[] not null default '{}'
  results               text[]                  -- only real, supplied results; never invented
  featured              boolean not null default false
  isPlaceholder         boolean not null default true   -- dev-only flag
  publishedAt           timestamptz
  createdAt             timestamptz not null default now()
  updatedAt             timestamptz not null default now()
}

table special_projects {
  id                    uuid PK default gen_random_uuid()
  slug                  text unique not null
  name                  text not null
  shortDescription      text not null
  description           text not null
  status                enum ProjectStatus not null default 'RESEARCH'
  technologies          text[] not null default '{}'
  image                 text
  featured              boolean not null default false
  isPlaceholder         boolean not null default true
  createdAt             timestamptz not null default now()
  updatedAt             timestamptz not null default now()
}

table contact_submissions {
  id                    uuid PK default gen_random_uuid()
  name                  text not null
  workEmail             text not null
  company               text not null
  role                  text
  projectType           text
  projectDescription    text not null
  estimatedTimeline     text
  budgetRange           text
  createdAt             timestamptz not null default now()
}

table admin_users {
  id                    uuid PK default gen_random_uuid()
  email                 text unique not null
  name                  text
  createdAt             timestamptz not null default now()
}
```

## Notes

- `isPlaceholder` on `case_studies` and `special_projects` lets seed/dev
  content be filtered out of any production listing query by default,
  satisfying "do not let placeholder content appear in production by
  accident" (Section 46).
- `resumeUrl` stores an object-storage key generated server-side
  (`crypto.randomUUID()`-based), never the client-supplied filename.
- No demographic fields are collected on `applications`, per Section 18.
- `admin_users` is minimal; Auth.js session + this table is enough to gate
  `/admin` without a full RBAC system the spec didn't ask for.
