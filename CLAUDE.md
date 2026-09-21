# AI / ML Engineering Company — Frontend Master Specification

> **Single-file Claude Code specification**  
> This document combines the implementation instructions, design system, and complete frontend product specification. Keep this file at the project root as `CLAUDE.md`. Claude should read this file completely before making architectural or UI changes.

---

# PART I — IMPLEMENTATION RULES FOR CLAUDE CODE

## Project Role

You are the senior frontend engineer and design-focused implementation partner for this project.

Your responsibility is to build a production-quality frontend for a US-based AI and machine-learning engineering company.

The company combines:

- enterprise AI engineering
- specialized AI/ML delivery
- advanced agentic systems
- machine learning systems
- AI infrastructure
- internal AI special projects / lab work

The site must feel credible beside strong US technology companies while remaining original.

---

## Single-File Authority

This file is the single source of truth for the frontend project. Read it completely before implementing or modifying UI.

If implementation decisions conflict, use this priority:

```text
1. Explicit user instruction
2. Frontend Product Specification in this file
3. Design System in this file
4. Implementation Rules in this file
5. Existing code conventions
```

---

## Primary Objective

Build a site that communicates:

```text
serious AI engineering company
+
enterprise delivery capability
+
applied AI lab
```

The site must not look like a generic AI agency template.

---

## Tech Requirements

Use:

```text
Next.js 15+
App Router
TypeScript
Tailwind CSS
Framer Motion
React Hook Form
Zod
Lucide React
next/font
next/image
```

Use Server Components by default.

Only interactive components should use `"use client"`.

Do not make entire pages client components solely because one section animates.

---

## Build Strategy

Do not build the whole project in one pass without structure.

Work in phases.

### Phase 1 — Foundation

Before coding, inspect the repository and output:

1. current project structure
2. proposed final structure
3. design token strategy
4. reusable component architecture
5. page/section mapping

Then implement:

- fonts
- CSS variables
- container
- section primitives
- buttons
- typography
- navigation
- footer

### Phase 2 — Homepage

Implement in this order:

1. Hero
2. Credibility / ecosystem strip
3. What We Build
4. Capabilities
5. Selected Work
6. How We Work
7. AI Lab
8. Technology Ecosystem
9. Careers CTA
10. Contact CTA

### Phase 3 — Secondary Pages

Implement:

1. Services
2. Work
3. Labs
4. Company
5. Careers
6. Job detail
7. Apply
8. Contact

### Phase 4 — Polish

Review:

- responsive behavior
- motion
- accessibility
- visual consistency
- copy rhythm
- hover/focus states
- performance

---

## Design Rules

Follow these strictly.

### DO

- use strong typography
- use generous whitespace
- use thin borders
- use asymmetric grids
- use meaningful technical visuals
- use dark/light section contrast
- keep interface restrained
- make mobile layouts intentional

### DO NOT

- use purple gradients everywhere
- use large blurry blobs
- use stock office photos
- use robot illustrations
- use excessive glassmorphism
- use rounded cards for every section
- use floating dashboard cards as decoration
- use random neural-network backgrounds
- use crypto/Web3 visual language
- use excessive parallax
- use pointless 3D

---

## Homepage Copy Anchor

Primary hero headline:

```text
We build AI systems that work in the real world.
```

Supporting concept:

```text
Enterprise AI, machine learning, and agentic systems — designed,
built, and deployed by experienced engineering teams.
```

Do not rewrite the core headline unless requested.

---

## Content Voice

The copy should sound:

- technical
- concise
- confident
- human
- specific

Avoid:

- “cutting-edge solutions”
- “revolutionize your business”
- “unlock the power of AI”
- “seamless transformation”
- “innovative solutions tailored to your needs”
- “best-in-class” unless factually supported

Prefer direct engineering language.

Example:

Bad:

```text
We empower enterprises with cutting-edge AI solutions.
```

Good:

```text
We design and build production AI systems for complex enterprise workflows.
```

---

## Credibility Rules

Never invent facts.

Do not fabricate:

- customer names
- partner status
- testimonials
- client logos
- funding
- awards
- certifications
- employee count
- office locations
- metrics

If company relationships such as Glean or Amazon are not formally confirmed, use language like:

```text
Technology ecosystem
Experience across leading AI platforms
Platforms our teams work with
```

Do not write:

```text
Trusted by Glean and Amazon
Official partner
Our customers
```

unless explicitly confirmed by the user.

---

## Data Architecture

Keep content out of large JSX blocks.

Use typed data files:

```text
src/data/jobs.ts
src/data/projects.ts
src/data/services.ts
src/data/technologies.ts
src/data/navigation.ts
```

Create reusable TypeScript types in `src/types`.

---

## Component Architecture

Prefer small, composable components.

Required primitives:

```text
Container
Section
SectionHeader
Eyebrow
PrimaryButton
SecondaryButton
TextLink
```

Required feature components:

```text
Navbar
Footer
LogoStrip
CapabilityRow
ProjectCard
JobRow
JobFilter
ApplyForm
ContactForm
AgentGraph
ArchitectureDiagram
```

Do not make giant 500+ line page components.

---

## Careers Requirements

The careers experience must feel like a real US technology company.

Seed roles:

- Staff AI Engineer
- Senior AI Engineer
- Applied AI Engineer
- Machine Learning Engineer
- AI Infrastructure Engineer
- Full Stack AI Engineer
- AI Solutions Architect
- Technical Program Manager — AI

Job listings should be list-based rather than giant cards.

Job detail pages should include:

- About the role
- What you'll do
- What we're looking for
- Nice to have
- How we work
- Compensation
- Equal opportunity

Application UI is frontend-only and must clearly use a mock success state.

---

## AI Lab Requirements

The AI Lab should be visually distinct and dark.

Primary themes:

- persistent agents
- long-running workflows
- adaptive retrieval
- agent evaluation
- human-in-the-loop systems
- next-generation AI infrastructure

Use technical diagrams, not decorative sci-fi imagery.

---

## Animation Rules

Use Framer Motion selectively.

Allowed:

- fade
- small translate
- stagger
- line/path drawing
- node activation
- subtle hover movement

Disallowed:

- bounce
- continuous floating
- large parallax
- cursor effects
- particles
- excessive loops

Respect reduced motion.

---

## Responsive Rules

Every component must be checked at:

```text
375px
768px
1024px
1280px
1440px+
```

Do not treat mobile as a compressed desktop page.

For mobile:

- simplify diagrams
- collapse grids intentionally
- keep body text readable
- keep button targets large
- preserve hierarchy

---

## Accessibility Rules

Required:

- semantic HTML
- keyboard navigation
- visible focus styles
- accessible mobile navigation
- form labels
- error messages
- adequate contrast
- reduced-motion support

Do not rely on color alone for meaning.

---

## Performance Rules

Target:

```text
Performance > 90
Accessibility > 95
Best Practices > 95
SEO > 95
```

Avoid unnecessary client JavaScript.

Optimize all images.

Lazy-load non-critical media and diagrams when appropriate.

---

## Coding Standards

Use:

- strict TypeScript
- semantic variable names
- reusable utilities
- consistent naming
- clean component boundaries

Avoid:

- `any` unless unavoidable
- duplicated content
- duplicated class clusters where abstraction helps
- inline giant SVG blobs inside pages
- hardcoded repeated navigation values
- hardcoded repeated job/project data

---

## Completion Checklist

Before saying a page is done, verify:

### Visual

- Does it feel premium?
- Does it feel like a US AI engineering company?
- Is the composition original?
- Is there enough whitespace?
- Is typography leading the design?

### Technical

- Is the page responsive?
- Are components reusable?
- Is TypeScript clean?
- Is client JS minimized?
- Are animations isolated?

### Credibility

- Are all claims supportable?
- Are company relationships phrased safely?
- Are metrics/testimonials/logos non-fabricated?

### Accessibility

- Keyboard works
- Focus states visible
- Contrast acceptable
- Reduced motion supported

### Final

Do not stop at “functional.”
The target is polished, production-quality frontend work.

---

# PART II — DESIGN SYSTEM

## 1. Design Objective

Build a premium US technology-company visual system for an AI/ML engineering firm that operates across enterprise delivery, advanced AI engineering, and internal special projects.

The design should feel credible beside modern companies such as Glean, Anthropic, Scale AI, Vercel, and Linear without copying any one brand.

The site must communicate:

- technical depth
- production credibility
- enterprise maturity
- premium engineering culture
- restraint
- clarity
- confidence

Avoid generic agency, outsourcing, consultancy, and AI-template aesthetics.

---

## 2. Brand Personality

Primary attributes:

- Engineering-first
- Intelligent
- Precise
- Premium
- Modern
- Calm
- Technical
- Human

Avoid:

- hype-heavy AI marketing
- futuristic neon overload
- crypto aesthetics
- generic gradient SaaS
- stock-photo consulting style
- excessive glassmorphism
- excessive rounded cards
- decorative complexity without function

---

## 3. Core Visual Language

The site should rely on:

- large editorial typography
- strong hierarchy
- generous whitespace
- thin dividers
- asymmetrical grid compositions
- technical diagrams
- dark/light contrast
- restrained motion
- one controlled accent color

Do not turn every section into a card.

Prefer composition through typography, spacing, rules, and layout.

---

## 4. Color Tokens

Use CSS variables.

```css
:root {
  --bg: #fafaf8;
  --bg-soft: #f5f5f1;
  --surface: #ffffff;
  --surface-dark: #10110f;
  --surface-dark-soft: #181915;

  --text: #111111;
  --text-muted: #5f615c;
  --text-soft: #878982;
  --text-inverse: #f7f7f2;
  --text-inverse-muted: #b6b8b0;

  --border: rgba(17, 17, 17, 0.10);
  --border-strong: rgba(17, 17, 17, 0.18);
  --border-dark: rgba(255, 255, 255, 0.12);

  --accent: #d7ff45;
  --accent-foreground: #111111;

  --success: #4f8a5b;
  --warning: #b57a26;
  --danger: #b74a4a;
}
```

Accent usage should remain below roughly 10% of the visible interface.

Use accent primarily for:

- small labels
- selected states
- CTA emphasis
- data points
- active nodes in diagrams

Do not use the accent as a large background everywhere.

---

## 5. Typography

Preferred font stack:

- Primary: Geist Sans
- Secondary fallback: Inter
- Mono: Geist Mono

Recommended implementation with `next/font`.

### Scale

```text
Display XL: 80–96px / 0.95–1.00
Display L: 64–76px / 0.98–1.02
H1: 56–72px
H2: 44–60px
H3: 28–36px
H4: 20–24px
Body L: 18–20px
Body: 16–18px
Small: 14px
Meta: 12–13px
```

### Typography Rules

- Headings should be compact and high-impact.
- Body copy should remain simple and readable.
- Avoid overusing bold.
- Avoid centered text for long sections.
- Large section headings should usually be left aligned.
- Use mono only for labels, technical metadata, states, or diagram detail.

---

## 6. Layout System

### Global widths

```text
Viewport max: 1600px
Primary content max: 1280px
Text content max: 760px
Long-form max: 820px
```

### Horizontal padding

```text
Mobile: 20px
Tablet: 28–32px
Desktop: 48px
Large desktop: 64px
```

### Vertical rhythm

```text
Section compact: 80–96px
Section default: 112–144px
Section large: 160–192px
```

### Grid

Use a 12-column grid on desktop.

Common patterns:

- 5 / 7 split
- 4 / 8 split
- 3 / 9 split
- 6 / 6 split
- 8 / 4 split

Mobile should collapse to one column.

---

## 7. Radius & Shadows

### Radius

```text
Button: 6px
Input: 6px
Card: 10px
Large surface: 12px
Pill: only for true tags/status
```

Avoid `rounded-2xl` and `rounded-3xl` as default styling.

### Shadows

Use sparingly.

Prefer borders and tonal separation.

If needed:

```css
box-shadow: 0 10px 30px rgba(0,0,0,0.05);
```

No glossy floating-card look.

---

## 8. Buttons

### Primary

- dark background on light surfaces
- light text
- 44–48px height
- small arrow motion on hover

### Accent CTA

Use only in key moments.

- accent background
- dark text

### Secondary

- transparent
- subtle border
- dark text

### Text link

- no button container
- arrow or underline movement on hover

---

## 9. Navigation

Desktop navbar:

- height: 76px
- sticky
- transparent at top
- subtle blur and border after scroll

Structure:

```text
Logo | What We Do | Work | AI Lab | Company | Careers | Talk to us →
```

Mobile:

- compact top bar
- full-screen or large-sheet menu
- no tiny dropdowns

---

## 10. Section Headers

Reusable pattern:

```text
EYEBROW / INDEX

Large section title

Short description aligned to the right or below.
```

Example:

```text
01 / CAPABILITIES

From model to production.
```

Do not repeat the same visual pattern identically for every section.

---

## 11. Cards

Cards are allowed only where they improve comprehension.

Good uses:

- case studies
- selected projects
- job listings
- lab projects

Avoid:

- 12 identical rounded feature cards
- icon-above-heading generic layouts

Prefer rows, bordered lists, asymmetric blocks, and editorial modules.

---

## 12. Technical Visuals

Use technical visualizations as a brand asset.

Examples:

- agent orchestration graph
- retrieval pipeline
- model routing flow
- evaluation loop
- human-in-the-loop state diagram
- AI platform layers

Visual style:

- thin lines
- precise labels
- subtle animation
- restrained color
- real engineering concepts

Do not use meaningless neural-network decorations.

---

## 13. Motion System

Use Framer Motion only where it improves clarity.

Allowed:

- fade in
- translate Y 12–20px
- opacity reveal
- line/path drawing
- node activation
- subtle scale 0.98 → 1
- staggered entrance

Duration:

```text
Fast: 180–240ms
Default: 320–450ms
Slow: 600–800ms
```

Avoid:

- bouncing
- looping floating cards
- cursor trails
- excessive parallax
- continuous background motion
- gratuitous 3D

Respect `prefers-reduced-motion`.

---

## 14. Dark Sections

Use dark sections to create contrast for:

- AI Lab
- special projects
- major CTA

Dark background:

```text
#10110F
```

Text:

```text
#F7F7F2
```

Use thin white-opacity borders and restrained accent highlights.

---

## 15. Forms

Inputs:

- labels above inputs
- 48px minimum height
- 6px radius
- visible focus state
- clear inline validation
- no floating-label pattern

Forms should feel enterprise, simple, and credible.

---

## 16. Accessibility

Requirements:

- semantic HTML
- WCAG AA contrast
- keyboard navigation
- visible focus ring
- descriptive labels
- accessible modal/menu behavior
- `aria-*` only where needed
- reduced motion support

---

## 17. Responsive Rules

### Desktop

- full typography scale
- asymmetric layouts
- diagrams visible in full

### Tablet

- simplify multi-column layouts
- reduce heading size
- preserve visual hierarchy

### Mobile

- single-column layout
- avoid text smaller than 15px
- collapse diagrams intelligently
- keep CTAs large and clear
- reduce non-essential motion

---

## 18. Design Quality Gate

Before marking a page complete, verify:

- Does this look like a serious US AI engineering company?
- Does the page avoid generic AI-template styling?
- Is there enough whitespace?
- Is typography carrying the design?
- Are cards used only where necessary?
- Are technical visuals meaningful?
- Are animations restrained?
- Is the page readable without animation?
- Does mobile feel intentionally designed?

---

# PART III — FRONTEND PRODUCT SPECIFICATION

## 1. Project Summary

Build a production-quality frontend for a US-based AI and machine-learning engineering company.

The company operates as a hybrid of:

- AI engineering firm
- enterprise delivery organization
- applied AI lab
- specialized technology agency

Primary domains:

- Agentic AI
- Generative AI
- Enterprise AI
- RAG / Enterprise Search
- Machine Learning
- AI Platforms
- AI Infrastructure
- Model Evaluation
- AI Observability
- AI Security
- AI-powered Applications

The company also works within the ecosystem of large technology organizations and may participate in enterprise delivery or special projects involving companies such as Glean and Amazon.

Do not imply official partnership, endorsement, or customer relationships unless the company has legal permission to do so.

---

## 2. Technology Stack

Required:

```text
Next.js 15+
App Router
TypeScript
Tailwind CSS
Framer Motion
Lucide React
React Hook Form
Zod
next/font
next/image
```

Optional:

```text
shadcn/ui
Radix UI primitives
```

Rules:

- Server Components by default
- Use Client Components only for interaction/animation
- Do not turn root layouts or whole pages into client components
- Keep dependencies minimal
- No backend
- No database
- No CMS

---

## 3. Site Map

Required routes:

```text
/
/services
/work
/labs
/company
/careers
/careers/[slug]
/careers/[slug]/apply
/contact
```

Future-ready routes:

```text
/insights
/insights/[slug]
```

---

## 4. Global Navigation

Desktop:

```text
Logo
What We Do
Work
AI Lab
Company
Careers
Talk to us →
```

Behavior:

- sticky
- transparent over hero
- blur + border after scroll
- active-state indication
- fully keyboard accessible

Mobile:

- logo
- menu trigger
- accessible full-screen menu or large sheet

---

## 5. Homepage Architecture

### Section 1 — Hero

Eyebrow:

```text
Independent AI Engineering
```

Headline:

```text
We build AI systems
that work in the real world.
```

Supporting copy:

```text
Enterprise AI, machine learning, and agentic systems — designed,
built, and deployed by experienced engineering teams.
```

Primary CTA:

```text
Explore our work →
```

Secondary CTA:

```text
Join the team
```

Visual:

- technical agent graph or architecture diagram
- interactive but subtle
- node activation on hover
- no meaningless decorative motion

---

### Section 2 — Enterprise / Technology Credibility

Label:

```text
EXPERIENCE ACROSS THE AI ECOSYSTEM
```

Potential logos / names:

- Glean
- Amazon / AWS
- OpenAI
- Anthropic
- Microsoft
- Google Cloud

Important:

Use neutral wording such as:

- Technology ecosystem
- Platforms our teams work with
- Experience across leading AI platforms

Do not use:

- Official Partners
- Trusted by
- Customers

unless legally accurate.

---

### Section 3 — Positioning

Headline:

```text
We work where AI meets real engineering.
```

Four primary capabilities:

#### Agentic Systems

Autonomous and human-in-the-loop systems that reason, use tools, maintain state, and complete multi-step work.

Sub-capabilities:

- agent orchestration
- tool use
- planning
- state management
- human approvals
- persistent workflows

#### Enterprise AI

AI systems grounded in enterprise context, permissions, workflows, and business knowledge.

Sub-capabilities:

- RAG
- enterprise search
- knowledge systems
- permissions-aware retrieval
- enterprise integrations

#### Machine Learning

Production ML systems spanning data, modeling, inference, deployment, and evaluation.

Sub-capabilities:

- model development
- inference
- MLOps
- feature pipelines
- evaluation

#### AI Platforms

Shared infrastructure for model access, retrieval, orchestration, observability, and governance.

Sub-capabilities:

- model gateways
- orchestration
- observability
- evaluation
- security
- platform APIs

---

### Section 4 — Capabilities

Title:

```text
From model to production.
```

Display as editorial grid or bordered rows.

Items:

- Agent Architecture
- RAG & Enterprise Search
- LLM Applications
- Model Evaluation
- ML Engineering
- AI Infrastructure
- Data & Retrieval
- MLOps
- AI Observability
- Multimodal AI
- Enterprise Integrations
- AI Security

Each item should have:

- title
- one-sentence description
- optional small technical metadata

---

### Section 5 — Selected Work

Title:

```text
Selected work
```

Use 3–4 case studies.

Example mock projects:

#### Enterprise Knowledge Agent

Tags:

```text
Enterprise AI / Agentic AI / Retrieval
```

Description:

```text
A stateful agent architecture connecting enterprise knowledge,
tools, and approval workflows.
```

#### Intelligent Document Platform

Tags:

```text
Document AI / ML / LLM
```

#### AI Operations Platform

Tags:

```text
AI Platform / Evaluation / Observability
```

When client names are confidential, use neutral descriptors such as:

- Fortune 100 Technology Company
- Global Enterprise Software Company
- Leading Financial Platform

Do not fabricate exact clients.

---

### Section 6 — How We Work

Headline:

```text
Built like an engineering team, not a consultancy.
```

Stages:

#### 01 Understand

Identify the business problem, system constraints, data environment, and measurable outcome.

#### 02 Architect

Define system boundaries, model strategy, retrieval design, data architecture, and production constraints.

#### 03 Build

Implement production systems directly with client product and engineering teams.

#### 04 Operate

Evaluate, observe, improve, and harden systems after launch.

---

### Section 7 — AI Lab / Special Projects

Dark theme.

Label:

```text
AI LAB
```

Headline:

```text
Exploring what comes after today's AI stack.
```

Description:

```text
Alongside client work, our teams build experimental systems around
autonomous agents, long-running AI workflows, machine reasoning,
and next-generation AI infrastructure.
```

Projects:

#### Persistent Agents

Agents that maintain progress and state across long-running workflows, restarts, and human approvals.

Status:

```text
Prototype
```

#### Adaptive Retrieval

Retrieval systems that dynamically select context based on user, task, and model behavior.

Status:

```text
Research
```

#### Agent Evaluation

Infrastructure for measuring tool use, reliability, trajectory quality, and long-horizon completion.

Status:

```text
Active
```

---

### Section 8 — Technology Ecosystem

Group by category.

#### Models

- OpenAI
- Anthropic
- Google
- Meta

#### Infrastructure

- AWS
- Azure
- Google Cloud
- Kubernetes
- Ray

#### AI / ML

- PyTorch
- LangGraph
- MLflow
- Databricks

#### Data

- PostgreSQL
- Snowflake
- Elasticsearch
- Pinecone
- Redis

Use text-first presentation rather than a decorative icon wall.

---

### Section 9 — Careers CTA

Headline:

```text
Build what's next.
```

Copy:

```text
We're looking for engineers who want to work on difficult AI problems
that matter in production.
```

CTA:

```text
View open roles →
```

Metadata:

```text
Remote-first / United States / Engineering-driven
```

---

### Section 10 — Contact CTA

Headline:

```text
Have a difficult AI problem?
```

Copy:

```text
Let's talk about the system you need to build.
```

CTA:

```text
Talk to us →
```

---

## 6. Services Page

Route:

```text
/services
```

Hero:

```text
AI engineering from architecture to production.
```

Primary service categories:

- Applied AI
- Agentic AI
- Machine Learning
- AI Platforms
- Enterprise AI

Each service module contains:

- summary
- business problems solved
- technical capabilities
- example outcomes
- representative technologies

Use real engineering language, not marketing filler.

---

## 7. Work Page

Route:

```text
/work
```

Hero:

```text
Systems we've helped bring to life.
```

Filters:

- Agentic AI
- Enterprise AI
- Machine Learning
- AI Infrastructure
- Applications

Project cards should prioritize architecture, interface, system diagrams, or abstract technical compositions instead of stock images.

---

## 8. Labs Page

Route:

```text
/labs
```

Hero:

```text
Special projects for the next generation of AI systems.
```

Content:

- current experiments
- technical themes
- project status
- research notes / future insight placeholders

Visual style:

- dark
- technical
- diagram-led
- minimal

---

## 9. Company Page

Route:

```text
/company
```

Hero:

```text
Built for the era where software learns, reasons, and acts.
```

Sections:

- Who we are
- How we work
- Engineering philosophy
- Leadership placeholders
- Locations
- Careers CTA

If the company is small, do not fake a large employee gallery.

---

## 10. Careers Page

Route:

```text
/careers
```

Hero:

```text
Work on AI that makes it into production.
```

Supporting copy:

```text
We bring together engineers, researchers, and builders to solve
difficult AI and machine-learning problems.
```

### Values

Use:

#### Own the system

We care about the whole system, not only the component assigned to us.

#### Build from first principles

We challenge defaults when engineering evidence points to a better solution.

#### Production changes the problem

A model working in a notebook is the beginning, not the end.

#### Small teams, high ownership

Engineers stay close to architecture, implementation, and outcomes.

Do not use generic labels such as Innovation, Excellence, Teamwork.

---

## 11. Job Board

Filters:

- All
- Engineering
- Machine Learning
- Product
- Design
- Operations

Locations:

- Remote — United States
- New York, NY
- San Francisco, CA
- Austin, TX

Employment:

- Full-time
- Contract

Use list rows, not oversized cards.

Example row:

```text
Staff AI Engineer
Engineering
Remote — United States
$190K–$240K + Equity
→
```

---

## 12. Job Data Model

Create:

```ts
export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  workplaceType: "Remote" | "Hybrid" | "On-site";
  employmentType: "Full-time" | "Contract";
  salary?: {
    min: number;
    max: number;
    currency: "USD";
  };
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  preferred?: string[];
  benefits?: string[];
}
```

Seed realistic roles:

- Staff AI Engineer
- Senior AI Engineer
- Applied AI Engineer
- Machine Learning Engineer
- AI Infrastructure Engineer
- Full Stack AI Engineer
- AI Solutions Architect
- Technical Program Manager — AI

---

## 13. Job Detail Page

Route:

```text
/careers/[slug]
```

Header:

```text
← Careers

Staff AI Engineer
Remote — United States
Engineering
Full-time
$190K–$240K

Apply for this role
```

Sections:

- About the role
- What you'll do
- What we're looking for
- Nice to have
- How we work
- Compensation
- Equal opportunity

Desktop:

- main content left
- sticky application summary right

---

## 14. Application Page

Route:

```text
/careers/[slug]/apply
```

Fields:

- First name
- Last name
- Email
- Phone
- LinkedIn
- GitHub / Portfolio
- Resume
- Cover letter optional
- Work authorization
- Sponsorship requirement
- Additional information

Use React Hook Form + Zod.

Frontend only.

Submission behavior:

- validate
- show loading state
- simulate async submission
- show success state
- leave integration TODO for backend/ATS

Do not claim the application was actually sent externally.

---

## 15. Contact Page

Route:

```text
/contact
```

Headline:

```text
Let's build something difficult.
```

Fields:

- Name
- Work email
- Company
- Role
- Project type
- Message

Project type options:

- Agentic AI
- Enterprise AI
- Machine Learning
- AI Platform
- Special Project
- Other

Frontend mock success state only.

---

## 16. Data Files

Required:

```text
src/data/jobs.ts
src/data/projects.ts
src/data/services.ts
src/data/technologies.ts
src/data/navigation.ts
```

No page should hardcode large content collections directly into JSX.

---

## 17. Recommended Folder Structure

```text
src/
├── app/
│   ├── page.tsx
│   ├── services/page.tsx
│   ├── work/page.tsx
│   ├── labs/page.tsx
│   ├── company/page.tsx
│   ├── careers/
│   │   ├── page.tsx
│   │   ├── [slug]/page.tsx
│   │   └── [slug]/apply/page.tsx
│   ├── contact/page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   ├── home/
│   ├── careers/
│   ├── work/
│   ├── labs/
│   ├── visuals/
│   └── ui/
├── data/
├── lib/
├── hooks/
└── types/
```

---

## 18. Required Reusable Components

```text
Container
Section
SectionHeader
Eyebrow
PrimaryButton
SecondaryButton
TextLink
LogoStrip
CapabilityRow
ProjectCard
ProjectMeta
JobRow
JobFilter
JobSidebar
ApplyForm
ContactForm
AgentGraph
ArchitectureDiagram
StatusBadge
Footer
Navbar
```

---

## 19. Performance Requirements

Target:

```text
Lighthouse Performance > 90
Accessibility > 95
Best Practices > 95
SEO > 95
```

Rules:

- optimize images
- use next/image
- lazy-load non-critical visuals
- minimize client JavaScript
- avoid animation libraries outside Framer Motion
- avoid heavy canvas/3D unless essential

---

## 20. SEO

Every page requires metadata.

Example:

```ts
export const metadata = {
  title: "AI Engineering Company",
  description:
    "Production AI, machine learning, and agentic systems built for real-world use.",
};
```

Careers/job detail pages should be architected so JobPosting JSON-LD can be added later.

---

## 21. Accessibility

Required:

- semantic landmarks
- keyboard navigation
- visible focus states
- accessible mobile nav
- form labels
- clear errors
- WCAG AA contrast
- reduced-motion support

---

## 22. Legal / Brand Credibility Rules

Never fabricate:

- enterprise customers
- official partnerships
- testimonials
- funding
- employee count
- office locations
- awards
- certifications
- security/compliance status

If Glean, Amazon, AWS, or another company is referenced, phrase it according to the real relationship.

Use placeholders in mock content where factual confirmation is required.

---

## 23. Final Quality Standard

The result should look like a real funded or established US AI engineering company, not:

- a student portfolio
- a generic freelancer site
- a ThemeForest template
- an outsourcing company
- an AI-generated SaaS landing page

Every page should feel intentional, technically credible, and visually restrained.

---

# PART IV — FIRST-RUN INSTRUCTION

When starting from this specification, do **not** immediately build the entire site. First inspect the repository and return:

1. Current project structure
2. Proposed final project structure
3. Design-token implementation plan
4. Reusable component architecture
5. Homepage section architecture
6. Implementation sequence
7. Conflicts, missing requirements, or factual placeholders that require confirmation

Do not simplify the specification. Do not substitute a generic SaaS template. After the architecture review is approved, implement the project according to the phased build strategy in Part I.
