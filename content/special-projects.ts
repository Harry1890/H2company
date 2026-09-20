/**
 * Development placeholder content mirroring the `special_projects` table
 * shape (see docs/DATABASE_SCHEMA.md). Names and descriptions here are
 * generic placeholders — not real company products — per Section 12/46 of
 * the project spec. Replace with real projects once approved.
 */
export type ProjectStatus =
  | "RESEARCH"
  | "ACTIVE_DEVELOPMENT"
  | "PRIVATE_BETA"
  | "LIVE"
  | "PAUSED"
  | "ARCHIVED";

export type SpecialProject = {
  slug: string;
  name: string;
  shortDescription: string;
  status: ProjectStatus;
  technologies: string[];
  featured: boolean;
  isPlaceholder: true;
};

export const specialProjects: SpecialProject[] = [
  {
    slug: "project-alpha",
    name: "Project Alpha",
    shortDescription:
      "An internal retrieval engine for reasoning over long-lived, high-churn technical documentation.",
    status: "ACTIVE_DEVELOPMENT",
    technologies: ["Retrieval", "Embeddings", "Evaluation"],
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: "project-beta",
    name: "Project Beta",
    shortDescription:
      "A lightweight runtime for coordinating long-running, stateful agent workflows.",
    status: "PRIVATE_BETA",
    technologies: ["Agents", "Orchestration", "State management"],
    featured: true,
    isPlaceholder: true,
  },
  {
    slug: "project-gamma",
    name: "Project Gamma",
    shortDescription:
      "Research into evaluation methods for multi-agent systems under partial observability.",
    status: "RESEARCH",
    technologies: ["Evaluation", "Multi-agent systems"],
    featured: true,
    isPlaceholder: true,
  },
];
