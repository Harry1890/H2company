/**
 * Development placeholder content, mirroring the `case_studies` table shape
 * (see docs/DATABASE_SCHEMA.md). These three cases are the illustrative
 * examples from the project spec itself, not real engagements — every
 * card carries `isPlaceholder: true` and the UI must label it as such.
 * Real case studies replace this file once the database is wired up.
 */
export type CaseStudy = {
  slug: string;
  title: string;
  customerType: string;
  shortDescription: string;
  tags: string[];
  featured: boolean;
  isPlaceholder: true;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "enterprise-knowledge-agent",
    title: "Enterprise Knowledge Agent",
    customerType: "Fortune 100 Technology Company",
    shortDescription:
      "An agent architecture designed to reason across distributed enterprise systems.",
    tags: ["Agentic AI", "Search", "RAG", "Platform"],
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: "ml-decision-platform",
    title: "ML Decision Platform",
    customerType: "Global Enterprise Software Company",
    shortDescription:
      "Production machine-learning infrastructure supporting real-time operational decisions.",
    tags: ["Machine Learning", "MLOps", "AWS", "Data Platform"],
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: "ai-evaluation-system",
    title: "AI Evaluation System",
    customerType: "Leading Consumer Platform",
    shortDescription:
      "A shared evaluation platform for measuring quality, reliability, and regression across AI applications.",
    tags: ["LLM Evaluation", "Observability", "Platform", "Reliability"],
    featured: true,
    isPlaceholder: true,
  },
];
