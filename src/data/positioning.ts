export interface PositioningPillar {
  title: string;
  description: string;
  items: string[];
}

export const positioningPillars: PositioningPillar[] = [
  {
    title: "Agentic Systems",
    description:
      "Autonomous and human-in-the-loop systems that reason, use tools, maintain state, and complete multi-step work.",
    items: ["Agent orchestration", "Tool use", "Planning", "State management", "Human approvals", "Persistent workflows"],
  },
  {
    title: "Enterprise AI",
    description:
      "AI systems grounded in enterprise context, permissions, workflows, and business knowledge.",
    items: ["RAG", "Enterprise search", "Knowledge systems", "Permissions-aware retrieval", "Enterprise integrations"],
  },
  {
    title: "Machine Learning",
    description:
      "Production ML systems spanning data, modeling, inference, deployment, and evaluation.",
    items: ["Model development", "Inference", "MLOps", "Feature pipelines", "Evaluation"],
  },
  {
    title: "AI Platforms",
    description:
      "Shared infrastructure for model access, retrieval, orchestration, observability, and governance.",
    items: ["Model gateways", "Orchestration", "Observability", "Evaluation", "Security", "Platform APIs"],
  },
];
