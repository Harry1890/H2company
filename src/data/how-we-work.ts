export interface WorkStage {
  index: string;
  title: string;
  description: string;
}

export const workStages: WorkStage[] = [
  {
    index: "01",
    title: "Understand",
    description:
      "Identify the business problem, system constraints, data environment, and measurable outcome.",
  },
  {
    index: "02",
    title: "Architect",
    description:
      "Define system boundaries, model strategy, retrieval design, data architecture, and production constraints.",
  },
  {
    index: "03",
    title: "Build",
    description: "Implement production systems directly with client product and engineering teams.",
  },
  {
    index: "04",
    title: "Operate",
    description: "Evaluate, observe, improve, and harden systems after launch.",
  },
];
