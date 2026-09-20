# CLAUDE PROJECT SPEC — AI Engineering Agency Website

## 0. Role

You are the lead product designer and senior full-stack engineer for a premium U.S.-based AI engineering company.

Your task is to design and build a production-quality company website that combines:

- an AI/ML engineering agency
- an applied AI lab
- an enterprise technology partner
- a recruiting and job application platform

The company works in AI and machine learning, collaborates with large U.S. technology companies, and also develops its own specialized AI projects.

Do **not** make the website look like a generic consulting agency, staffing firm, SaaS template, crypto company, or low-quality AI startup.

---

# 1. Company Positioning

The company operates in two main business lines.

## 1.1 Enterprise AI Engineering

We work with enterprise technology companies and engineering organizations to design and build production AI systems.

Core areas include:

- Agentic AI
- Multi-agent systems
- Enterprise search
- Retrieval-Augmented Generation
- Applied machine learning
- AI platform engineering
- AI infrastructure
- Model evaluation
- AI observability
- MLOps
- Full-stack AI applications
- Human-in-the-loop AI workflows
- AI system reliability
- Enterprise AI integration

## 1.2 Special AI Projects

The company also develops its own:

- strategic AI technologies
- internal AI platforms
- specialized AI products
- research-driven systems
- experimental AI infrastructure
- proprietary applied AI projects

This distinction must be visible throughout the website.

The visitor should quickly understand:

1. We are not a generic web or software agency.
2. We specialize deeply in AI and ML engineering.
3. We work on production systems for serious companies.
4. We also build original AI technology of our own.

---

# 2. Brand Positioning

The company should feel like:

**AI Engineering Company + Applied AI Lab + Enterprise Technology Partner**

Visual and strategic inspiration may come from the design philosophy of companies such as:

- Glean
- Scale AI
- Vercel
- Anthropic
- Linear

Do not copy any of these websites.

Extract only broad design principles:

- strong typography
- restrained visual hierarchy
- premium spacing
- technical credibility
- editorial presentation
- engineering-focused visuals
- minimal but meaningful motion
- strong enterprise presence
- modern U.S. technology-company aesthetics

---

# 3. Website Personality

The website should feel:

- technically sophisticated
- premium
- modern
- confident
- engineering-driven
- intelligent
- understated
- serious
- clean
- credible
- enterprise-ready

The website should **not** feel:

- generic
- over-marketed
- like a staffing agency
- like a traditional consulting firm
- like a crypto project
- like a Web3 landing page
- like a generic SaaS template
- overly futuristic
- overly corporate
- gimmicky

---

# 4. Core Messaging

The preferred homepage headline concept is:

> **AI systems built for real work.**

Alternative:

> **We build AI that makes it to production.**

Supporting copy:

> We design and engineer production-grade AI systems for ambitious companies — while building a few of our own.

Primary CTA:

> Start a project

Secondary CTA:

> Explore our work

Avoid generic AI marketing phrases such as:

- cutting-edge
- revolutionary
- transformative AI
- unlock the power of AI
- game-changing
- next-generation intelligence
- future of everything
- AI-powered innovation

Copy should sound like experienced engineers wrote it.

Prefer language that is:

- specific
- concise
- technically grounded
- confident
- natural
- human

---

# 5. Technology Stack

Use the following stack.

## Frontend

- Next.js 16.x
- App Router
- React
- TypeScript
- Tailwind CSS 4
- Motion
- Lucide Icons

Use `shadcn/ui` only where appropriate.

Do not let the site look like a default shadcn template.

## Backend

- Next.js Server Components
- Next.js Server Actions where appropriate
- Route Handlers only where useful
- PostgreSQL
- Drizzle ORM

## Authentication

- Auth.js

## Forms

- React Hook Form
- Zod

## File Storage

Use one of:

- AWS S3
- Cloudflare R2

Resume files must not be stored directly inside the application repository.

## Email

- Resend

## Deployment

- Vercel

## Database Hosting

Preferred:

- Neon PostgreSQL

## Monitoring

- Sentry

## Analytics

- Vercel Analytics

---

# 6. Engineering Principles

Use:

- Server Components by default
- Client Components only when interaction requires them
- Strict TypeScript
- Zod validation
- reusable components
- clean separation of concerns
- typed database access
- production-quality error handling
- loading states
- empty states
- form validation
- accessibility
- responsive layouts

Separate clearly:

- UI
- business logic
- database
- validation
- data access
- authentication
- file upload logic

Do not put all logic directly into page components.

---

# 7. Sitemap

Implement the following routes.

```text
/
├── capabilities
├── work
│   └── [slug]
├── projects
│   └── [slug]
├── company
├── careers
│   └── [slug]
│       └── apply
├── contact
├── privacy
├── terms
│
├── admin
│   ├── jobs
│   │   ├── new
│   │   └── [id]
│   └── applications
│       └── [id]
```

---

# 8. Navigation

Desktop navigation:

```text
LOGO

Capabilities
Work
Projects
Company
Careers

Talk to us →
```

The navigation should be minimal.

The header should begin transparent.

After scrolling approximately 30px, transition to a subtle blurred background.

Suggested style:

```css
background: rgba(7, 9, 13, 0.78);
backdrop-filter: blur(20px);
```

Mobile:

```text
LOGO                         MENU
```

---

# 9. Homepage Structure

Build the homepage in this order.

---

## 9.1 Header

Use the navigation described above.

---

## 9.2 Hero

Headline:

> **AI systems built for real work.**

Supporting copy:

> We design and engineer production-grade AI systems for ambitious companies — while building a few of our own.

CTA buttons:

- Start a project
- Explore our work

The hero should communicate strong technical confidence.

Do not use:

- AI robots
- human stock photos
- generic brains
- floating spheres
- random glowing blobs

---

## 9.3 Interactive AI Architecture Visual

Place a technical visualization in the hero or immediately below it.

Represent concepts such as:

```text
Enterprise Data
      ↓
Retrieval
      ↓
Agent
  ↙   ↓   ↘
Tools Models Search
      ↓
Evaluation
```

The visualization should communicate real AI system architecture.

Preferred implementation:

- SVG
- CSS animation
- Motion
- lightweight interaction

Do not use WebGL unless there is a compelling reason.

Animation examples:

- data moving between nodes
- agent state transitions
- retrieval path activation
- model/tool execution
- evaluation signal flow

Motion must communicate system behavior, not just decoration.

Respect `prefers-reduced-motion`.

---

## 9.4 Partner / Enterprise Credibility Section

Create a reusable partner logo section.

Possible heading:

> Engineering AI with leading technology teams

or

> Selected partners

Important content rule:

**Never invent partnerships.**

Partner/customer names must come from configuration data.

If names such as Amazon or Glean are used, they must only appear when the company has approved wording and rights to use them.

Support multiple relationship labels, for example:

- Partners
- Clients
- Selected engagements
- Experience supporting teams at
- Technology collaborators

The label must be configurable.

---

## 9.5 Dual Business Section

Headline:

> **We operate in two worlds.**

Use two large editorial panels.

### Panel 1

**Enterprise AI Engineering**

Description:

We work alongside engineering teams to design and ship production AI systems.

CTA:

> Explore capabilities →

### Panel 2

**Special Projects**

Description:

We invest in and build focused AI technologies where we see a meaningful technical opportunity.

CTA:

> Explore projects →

This section should strongly differentiate the company from a traditional agency.

---

# 10. Capabilities Section

Present six major technical domains.

Avoid a generic grid of many small cards.

## 10.1 Agentic AI

Description:

AI agents and multi-agent systems that reason, use tools, maintain state, and operate across real enterprise workflows.

Possible technical labels:

- LangGraph
- Claude
- OpenAI
- MCP
- Tool orchestration
- Human-in-the-loop
- State management
- Long-running workflows

## 10.2 Enterprise Search & RAG

Description:

Permission-aware retrieval and knowledge systems built over distributed enterprise information.

Possible technologies:

- Hybrid search
- Vector retrieval
- Knowledge graphs
- Reranking
- Embeddings
- Evaluation
- ACL-aware retrieval

## 10.3 Applied Machine Learning

Description:

Production machine learning systems built around real operational problems.

Examples:

- Forecasting
- Ranking
- Classification
- Recommendation
- Feature engineering
- Model serving

## 10.4 AI Platform Engineering

Description:

Shared infrastructure for teams building and operating AI products.

Examples:

- Model gateways
- Prompt management
- Versioning
- Tracing
- Evaluation
- Observability
- Governance

## 10.5 Full-Stack AI

Description:

AI-native products from model layer to frontend.

Possible stack:

- Next.js
- React
- Python
- FastAPI
- PostgreSQL
- Redis
- AWS
- Streaming
- WebSockets

## 10.6 Model Evaluation & Reliability

Description:

Making probabilistic systems measurable, testable, and dependable.

Examples:

- Offline evaluation
- Online evaluation
- LLM-as-judge
- Human evaluation
- Regression testing
- Guardrails
- Reliability monitoring

---

# 11. Selected Work

Create a section called:

> **Selected work**

Use case studies.

The system must support both named and anonymized customers.

Possible anonymized customer labels:

- Fortune 100 Technology Company
- Global Enterprise Software Company
- Leading Consumer Platform

Example placeholder cases:

### Enterprise Knowledge Agent

Description:

An agent architecture designed to reason across distributed enterprise systems.

Tags:

- Agentic AI
- Search
- RAG
- Platform

### ML Decision Platform

Description:

Production machine-learning infrastructure supporting real-time operational decisions.

Tags:

- Machine Learning
- MLOps
- AWS
- Data Platform

### AI Evaluation System

Description:

A shared evaluation platform for measuring quality, reliability, and regression across AI applications.

Tags:

- LLM Evaluation
- Observability
- Platform
- Reliability

Important:

Do not invent metrics.

Do not invent customer names.

Do not invent project outcomes.

Placeholder content must be clearly marked as placeholder development data.

---

# 12. Special Projects

Create a visually distinct section.

Headline:

> **Beyond client work.**

Supporting copy:

> Some problems are interesting enough that we build them ourselves.

Project card fields:

```ts
Project {
  id
  slug
  name
  shortDescription
  description
  status
  technologies
  image
  featured
  createdAt
  updatedAt
}
```

Possible project statuses:

```text
RESEARCH
ACTIVE DEVELOPMENT
PRIVATE BETA
LIVE
PAUSED
ARCHIVED
```

Placeholder project names may be used during development but must never be presented as real final company projects.

---

# 13. Careers

Careers is a core product feature, not a secondary page.

Route:

```text
/careers
```

Hero:

> **Build systems that matter.**

Supporting copy:

> We work on hard engineering problems across AI, machine learning, and distributed systems — for our partners and for ourselves.

---

# 14. Careers Filters

Provide filters for:

- department
- location
- workplace type
- employment type

Possible departments:

- AI Engineering
- Machine Learning
- Platform Engineering
- Research
- Product
- Operations

Possible workplace types:

- Remote
- Hybrid
- On-site

---

# 15. Job Listing UI

Use a clean row-based design instead of large cards.

Example:

```text
OPEN ROLES                                         6

────────────────────────────────────────────────────

Staff AI Engineer
AI Engineering             Remote / United States       →

────────────────────────────────────────────────────

Senior Machine Learning Engineer
Machine Learning           Remote / United States       →

────────────────────────────────────────────────────

Applied AI Engineer
AI Engineering             New York / Hybrid            →

────────────────────────────────────────────────────
```

The visual direction should feel closer to premium technology-company career sites than a generic ATS.

---

# 16. Job Database Schema

Create a production-ready job model.

```ts
Job {
  id
  slug

  title
  department
  level

  location
  workplaceType
  employmentType

  salaryMin
  salaryMax
  salaryCurrency

  shortDescription
  description

  responsibilities
  requirements
  preferredQualifications

  technologies

  status
  featured

  publishedAt
  closesAt

  createdAt
  updatedAt
}
```

Use proper database types.

Use enums where appropriate.

Statuses:

```text
DRAFT
PUBLISHED
CLOSED
ARCHIVED
```

---

# 17. Job Detail Page

Route:

```text
/careers/[slug]
```

Page structure:

```text
Staff AI Engineer

Remote · United States
Engineering
Full-time

$190K – $240K + equity

[ Apply for this role → ]

About the role
──────────────

What you'll do
──────────────

What we're looking for
──────────────

Nice to have
──────────────

How we work
──────────────

Compensation
──────────────

Equal opportunity
──────────────
```

Desktop should include a sticky sidebar or sticky apply panel.

---

# 18. Application Page

Route:

```text
/careers/[slug]/apply
```

Form fields:

```text
First name *
Last name *

Email *
Phone

LinkedIn
GitHub
Portfolio

Resume *
Upload PDF

Tell us briefly why you're interested
Textarea

Are you authorized to work in the United States?
Yes / No

Will you now or in the future require sponsorship?
Yes / No

Submit application
```

Keep the application process clean and professional.

Do not collect unnecessary demographic information in the MVP.

---

# 19. Application Database Schema

```ts
Application {
  id
  jobId

  firstName
  lastName

  email
  phone

  linkedinUrl
  githubUrl
  portfolioUrl

  resumeUrl
  coverNote

  workAuthorization
  sponsorshipRequired

  status
  source

  createdAt
  updatedAt
}
```

Application statuses:

```text
NEW
REVIEWING
SCREEN
INTERVIEW
OFFER
HIRED
REJECTED
WITHDRAWN
```

---

# 20. Resume Upload Security

Resume uploads must:

- accept PDF only
- validate MIME type
- validate file extension
- enforce maximum file size
- generate randomized file names
- never trust original filenames
- avoid exposing direct storage credentials
- store file metadata in database
- sanitize metadata
- prevent executable uploads

Use secure upload patterns suitable for production.

---

# 21. Admin Dashboard

Route:

```text
/admin
```

The admin interface must be protected.

Dashboard overview should include:

- active jobs
- total applications
- new applications
- applications under review
- recent applicants

Example:

```text
NEXORA ADMIN

Jobs                          Applications

Active Jobs        6
Applications      42
New               14
Reviewing           8

Recent Applications

Mario Williams
Staff AI Engineer
2 hours ago

Jane Smith
Machine Learning Engineer
5 hours ago
```

---

# 22. Admin Job Management

Admins must be able to:

- create jobs
- edit jobs
- save drafts
- publish jobs
- close jobs
- archive jobs
- duplicate jobs
- mark jobs featured

Admin routes:

```text
/admin/jobs
/admin/jobs/new
/admin/jobs/[id]
```

---

# 23. Admin Job Editor

Suggested interface:

```text
Create Position

Title
[ Staff AI Engineer ]

Department
[ AI Engineering ]

Location
[ Remote — United States ]

Workplace Type
[ Remote ]

Employment
[ Full-time ]

Salary
[ 190000 ] — [ 240000 ]


ABOUT THE ROLE

[ rich editor ]


RESPONSIBILITIES

+ Add responsibility


REQUIREMENTS

+ Add requirement


PREFERRED QUALIFICATIONS

+ Add qualification


TECHNOLOGIES

+ Add technology


[ Save Draft ]        [ Publish ]
```

Avoid a visually heavy CMS.

Keep the editor clean and task-focused.

---

# 24. Admin Application Management

Admins must be able to:

- view applications
- filter by job
- filter by status
- open applicant profiles
- download resumes
- change application status
- add internal notes
- view contact information
- view application date
- view source

Routes:

```text
/admin/applications
/admin/applications/[id]
```

---

# 25. Company Page

Route:

```text
/company
```

Sections:

1. Company introduction
2. What we believe
3. How we work
4. Enterprise engineering
5. Special projects
6. Technical culture
7. Careers CTA

Avoid exaggerated company-history narratives.

Do not invent:

- founding dates
- employee counts
- funding
- revenue
- office locations
- awards
- certifications

unless explicitly provided.

---

# 26. Work Page

Route:

```text
/work
```

Show case studies with editorial layouts.

Each project should support:

```ts
CaseStudy {
  id
  slug
  title
  customerName
  customerVisibility
  customerType
  shortDescription
  challenge
  approach
  architecture
  technologies
  results
  featured
  publishedAt
}
```

Allow `customerVisibility` to support anonymized work.

Possible values:

```text
PUBLIC
ANONYMIZED
PRIVATE
```

Never expose private customer data.

---

# 27. Capabilities Page

Route:

```text
/capabilities
```

The capabilities page should provide deeper technical detail than the homepage.

Each capability should include:

- problem context
- engineering approach
- representative technologies
- system patterns
- enterprise concerns
- links to related work

Avoid generic service descriptions.

---

# 28. Contact Page

Route:

```text
/contact
```

Contact form fields:

```text
Name
Work email
Company
Role
Project type
Project description
Estimated timeline
```

Optional:

```text
Budget range
```

CTA:

> Tell us what you're trying to build.

Submissions should be:

- validated
- stored or forwarded securely
- sent through Resend
- protected against spam

Add basic anti-spam measures.

---

# 29. Design System

## 29.1 Typography

Primary:

- Geist Sans

Technical / metadata:

- Geist Mono

Suggested sizes:

```text
Hero: 64–88px desktop
H1: 56–64px
H2: 44–52px
H3: 26–32px
Body: 17–18px
Small metadata: 12–14px
```

Use responsive `clamp()` where appropriate.

---

# 30. Layout

Use:

- 12-column desktop grid
- max width around 1360px
- large horizontal padding
- generous vertical whitespace
- asymmetrical editorial compositions where appropriate

Avoid putting every section inside a rounded card.

Prefer:

- typography
- spacing
- thin borders
- technical diagrams
- restrained surfaces
- structural contrast

---

# 31. Color System

Suggested starting palette:

```text
Background
#07090D

Surface
#0C1017

Elevated Surface
#111722

Primary Text
#F4F6F8

Secondary Text
#A7AFBC

Border
rgba(255,255,255,0.10)
```

Accent colors:

```text
Electric Indigo
#7067FF

Blue
#4F8CFF

Cyan
#48D7E8
```

Do not use gradients everywhere.

Use accent color only with intention.

Consider occasional light/off-white editorial sections for contrast.

---

# 32. Motion System

Motion should be subtle.

Examples:

- system node activation
- data flow
- line drawing
- soft section transitions
- hover arrow movement
- technical tag reveal

Avoid:

- bouncing buttons
- constant parallax
- excessive scroll effects
- unnecessary 3D
- huge background animation

Respect accessibility.

---

# 33. Mobile Design

Do not simply shrink the desktop design.

Create a deliberate mobile composition.

Example hero:

Desktop:

```text
AI systems                    SYSTEM GRAPH
built for
real work.
```

Mobile:

```text
AI systems
built for
real work.

Supporting copy

[ Start a project ]

SYSTEM GRAPH
```

Navigation, spacing, typography, case-study layouts, job rows, and forms must all be individually designed for mobile.

---

# 34. Footer

Suggested layout:

```text
────────────────────────────────────────────

Have something difficult to build?

Let's talk.                                  →

────────────────────────────────────────────

COMPANY NAME

AI Engineering
Machine Learning
Special Projects

Company
Work
Careers
Contact

United States

LinkedIn
GitHub

© 2026 COMPANY NAME
Privacy
Terms
```

---

# 35. SEO

Implement:

- Next.js Metadata API
- metadata per page
- OpenGraph
- canonical URLs
- robots.txt
- sitemap.xml

Each published job must generate `JobPosting` JSON-LD.

Example fields:

```json
{
  "@context": "https://schema.org",
  "@type": "JobPosting",
  "title": "...",
  "description": "...",
  "datePosted": "...",
  "employmentType": "FULL_TIME",
  "hiringOrganization": {
    "@type": "Organization",
    "name": "COMPANY NAME"
  },
  "jobLocationType": "TELECOMMUTE"
}
```

Generate appropriate physical job location schema when the position is not remote.

---

# 36. Accessibility

Implement:

- semantic HTML
- keyboard navigation
- visible focus states
- accessible form labels
- accessible error messages
- correct heading hierarchy
- minimum WCAG AA contrast
- `prefers-reduced-motion`
- ARIA only where required

Do not use ARIA to compensate for poor HTML structure.

---

# 37. Performance

Target:

```text
Lighthouse

Performance       >= 95
Accessibility     >= 95
Best Practices    >= 95
SEO               >= 95
```

Use:

- `next/image`
- server rendering where appropriate
- code splitting
- lazy loading
- optimized fonts
- lightweight motion
- minimal client JavaScript

Do not ship a heavy animation library or WebGL system without justification.

---

# 38. Content Integrity Rules

These rules are mandatory.

Never invent:

- customers
- partnerships
- partner status
- project results
- revenue
- employee counts
- fundraising
- testimonials
- certifications
- awards
- office locations
- customer logos
- internal projects presented as real
- metrics
- success percentages

All factual company claims must come from supplied content or configuration.

During development, use clearly labeled placeholders.

---

# 39. Design Anti-Patterns

Do not use:

- generic SaaS landing-page structure
- giant rounded cards everywhere
- excessive glassmorphism
- gradient backgrounds on every section
- random glowing blobs
- stock photos of office workers
- robot graphics
- AI brain graphics
- fake dashboards
- fake customer testimonials
- fake logos
- fake company metrics
- excessive badges
- excessive pills
- excessive icon cards
- generic three-column feature grids repeated everywhere
- excessive centered text sections

Avoid the visual appearance of a website generated automatically by a template builder.

---

# 40. Interaction Details

## Capability Rows

On hover:

- subtle border change
- title shift of approximately 2px
- optional technology labels reveal

## Job Rows

Example:

```text
Staff AI Engineer                         →
```

Hover:

```text
Staff AI Engineer                   ──────→
```

## Work Sections

Prefer:

- architecture diagram changes
- subtle scroll-driven reveal
- technical metadata

Do not rely on image zoom as the main interaction.

---

# 41. Recommended Repository Structure

```text
project/
│
├── app/
│   │
│   ├── (marketing)/
│   │   ├── page.tsx
│   │   ├── capabilities/
│   │   │   └── page.tsx
│   │   ├── work/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── projects/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   ├── company/
│   │   │   └── page.tsx
│   │   ├── careers/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/
│   │   │       ├── page.tsx
│   │   │       └── apply/
│   │   │           └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── privacy/
│   │   │   └── page.tsx
│   │   └── terms/
│   │       └── page.tsx
│   │
│   ├── admin/
│   │   ├── page.tsx
│   │   ├── jobs/
│   │   │   ├── page.tsx
│   │   │   ├── new/
│   │   │   │   └── page.tsx
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── applications/
│   │       ├── page.tsx
│   │       └── [id]/
│   │           └── page.tsx
│   │
│   ├── api/
│   │   ├── uploads/
│   │   └── webhooks/
│   │
│   ├── layout.tsx
│   └── globals.css
│
├── components/
│   ├── layout/
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   └── mobile-nav.tsx
│   │
│   ├── home/
│   │   ├── hero.tsx
│   │   ├── ai-system-visual.tsx
│   │   ├── partners.tsx
│   │   ├── dual-business.tsx
│   │   ├── capabilities.tsx
│   │   ├── selected-work.tsx
│   │   ├── special-projects.tsx
│   │   └── careers-cta.tsx
│   │
│   ├── careers/
│   │   ├── job-row.tsx
│   │   ├── job-filter.tsx
│   │   ├── job-header.tsx
│   │   ├── job-sidebar.tsx
│   │   └── application-form.tsx
│   │
│   ├── work/
│   ├── projects/
│   ├── admin/
│   └── ui/
│
├── lib/
│   ├── auth/
│   ├── db/
│   │   ├── index.ts
│   │   └── schema.ts
│   ├── actions/
│   ├── validation/
│   ├── storage/
│   ├── email/
│   ├── seo/
│   └── utils/
│
├── config/
│   ├── company.ts
│   ├── partners.ts
│   └── site.ts
│
├── public/
│   ├── logos/
│   ├── images/
│   └── projects/
│
├── types/
│
├── drizzle/
│
└── docs/
```

---

# 42. Configuration-Driven Company Data

Create company configuration rather than hard-coding factual claims.

Example:

```ts
export const companyConfig = {
  name: "COMPANY NAME",

  legalName: "",

  description: "",

  headquarters: "",

  social: {
    linkedin: "",
    github: ""
  },

  partnerSection: {
    enabled: true,
    label: "Selected partners",
    companies: []
  }
}
```

Do not display empty fields.

---

# 43. Development Documentation

Before implementing the website, create these files:

```text
PROJECT_PLAN.md
DESIGN_SYSTEM.md
DATABASE_SCHEMA.md
SITE_MAP.md
COMPONENT_ARCHITECTURE.md
CONTENT_MODEL.md
SECURITY_NOTES.md
DEPLOYMENT.md
```

Each file should be concise but implementation-ready.

---

# 44. Implementation Order

Do not build all pages simultaneously.

Follow this sequence.

## Phase 1 — Foundation

- initialize project
- configure TypeScript
- configure Tailwind
- set typography
- create base layout
- create design tokens
- create reusable layout primitives
- create navigation
- create footer

Run:

```bash
lint
typecheck
build
```

Fix all errors before continuing.

---

## Phase 2 — Homepage

Build:

- hero
- AI architecture visual
- partner section
- dual-business section
- capabilities
- selected work
- special projects
- careers CTA

Make homepage polished before continuing.

---

## Phase 3 — Marketing Pages

Build:

- capabilities
- work
- case-study detail
- projects
- project detail
- company
- contact
- privacy
- terms

---

## Phase 4 — Careers

Build:

- careers index
- filters
- job detail
- JobPosting structured data

Start with seeded test jobs.

---

## Phase 5 — Applications

Build:

- apply form
- validation
- secure resume upload
- database storage
- confirmation email
- application confirmation state

---

## Phase 6 — Admin

Build:

- authentication
- dashboard
- job management
- application review
- application status updates
- internal notes

---

## Phase 7 — SEO / Accessibility / Performance

Complete:

- metadata
- sitemap
- robots
- JSON-LD
- OpenGraph
- accessibility audit
- performance audit
- responsive audit

---

## Phase 8 — Production QA

Verify:

- all routes
- forms
- mobile
- tablet
- desktop
- upload security
- database errors
- empty states
- loading states
- auth
- 404
- 500 behavior
- SEO
- Lighthouse
- deployment

---

# 45. Testing Requirements

At minimum test:

- Zod validation
- job filtering
- published vs unpublished jobs
- application form validation
- resume MIME checks
- resume file-size validation
- unauthorized admin access
- slug generation
- application status updates

Where appropriate, add automated tests.

---

# 46. Database Seed Data

Create development seed data.

Seed:

- 4–6 jobs
- 3 placeholder case studies
- 3 placeholder special projects
- example admin account only if required for local development

Clearly mark all development-only content.

Do not let placeholder content appear in production by accident.

---

# 47. Production Environment Variables

Document required environment variables.

Example:

```text
DATABASE_URL=
AUTH_SECRET=

RESEND_API_KEY=

S3_BUCKET=
S3_REGION=
S3_ACCESS_KEY_ID=
S3_SECRET_ACCESS_KEY=

NEXT_PUBLIC_SITE_URL=

SENTRY_DSN=
```

Never expose secrets through `NEXT_PUBLIC_*`.

---

# 48. Final Homepage Visual Flow

Use this as the structural target:

```text
┌──────────────────────────────────────────────────────┐
│ LOGO     Capabilities Work Projects Company Careers │
│                                     Talk to us →    │
├──────────────────────────────────────────────────────┤
│                                                      │
│ AI systems                                           │
│ built for real work.        [AI SYSTEM VISUAL]       │
│                                                      │
│ We design and engineer...                            │
│                                                      │
│ Start a project →      Explore work                  │
│                                                      │
├──────────────────────────────────────────────────────┤
│             ENTERPRISE CREDIBILITY                   │
│                                                      │
│     [Partner / Client / Experience Logos]            │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ We operate in two worlds.                            │
│                                                      │
│ Enterprise AI            Special Projects            │
│ Engineering                                          │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ CAPABILITIES                                         │
│                                                      │
│ Agentic AI             Enterprise Search             │
│ Applied ML             AI Platforms                  │
│ Full-stack AI          Evaluation                    │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ SELECTED WORK                                        │
│                                                      │
│ Enterprise Agent        [technical visual]           │
│                                                      │
│ ML Platform             [technical visual]           │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ BEYOND CLIENT WORK                                   │
│                                                      │
│ Special Projects                                     │
│                                                      │
│ Project A     Project B     Project C                 │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Come build difficult things.                         │
│                                                      │
│ Staff AI Engineer                 Remote       →      │
│ ML Engineer                       Remote       →      │
│ Applied AI Engineer               Hybrid       →      │
│                                                      │
├──────────────────────────────────────────────────────┤
│                                                      │
│ Have something difficult to build?                   │
│ Let's talk.                                       →  │
│                                                      │
├──────────────────────────────────────────────────────┤
│ FOOTER                                               │
└──────────────────────────────────────────────────────┘
```

---

# 49. Important Product Judgment

The website should make the company feel broader and more technically credible than a conventional agency.

The `Special Projects` area is strategically important.

Do not hide it deep inside the site.

It should appear on the homepage as one of the company's two primary operating modes.

The careers platform must also feel like a natural part of the company rather than an embedded third-party ATS.

---

# 50. Final Instruction to Claude

Start by producing the architecture and planning documents.

Do **not** immediately generate the entire application.

Your first response should:

1. summarize your understanding of the product
2. identify any technical assumptions
3. propose the final information architecture
4. propose the component architecture
5. propose the database schema
6. propose the design system
7. list the implementation phases
8. identify any factual company information that is still missing

Then create the documentation files.

Only after the architecture is approved should implementation begin.

At the end of every implementation phase:

1. run lint
2. run typecheck
3. run production build
4. fix all failures
5. review responsive behavior
6. review accessibility
7. summarize what changed

The final result must look and behave like a premium U.S. AI engineering company website, not a generated template.
