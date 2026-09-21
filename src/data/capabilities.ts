import type { Capability } from "@/types";

export const capabilities: Capability[] = [
  {
    title: "Agent Architecture",
    description: "Multi-step agents with defined planning, tool use, and approval boundaries.",
  },
  {
    title: "RAG & Enterprise Search",
    description: "Retrieval grounded in internal knowledge and enforced at the permissions layer.",
  },
  {
    title: "LLM Applications",
    description: "Production interfaces to language models, built for real usage patterns.",
  },
  {
    title: "Model Evaluation",
    description: "Evaluation harnesses that gate releases on measured output quality.",
  },
  {
    title: "ML Engineering",
    description: "Model development and inference systems built to run in production.",
  },
  {
    title: "AI Infrastructure",
    description: "Shared platform infrastructure for model access, routing, and scaling.",
  },
  {
    title: "Data & Retrieval",
    description: "Data and indexing pipelines that keep retrieval accurate as content changes.",
  },
  {
    title: "MLOps",
    description: "Deployment, monitoring, and versioning for models running in production.",
  },
  {
    title: "AI Observability",
    description: "Tracing and monitoring across every model call, agent step, and tool use.",
  },
  {
    title: "Multimodal AI",
    description: "Systems that reason across text, images, and structured data together.",
  },
  {
    title: "Enterprise Integrations",
    description: "AI systems connected directly into the tools a business already runs on.",
  },
  {
    title: "AI Security",
    description: "Security review and controls built for systems that take autonomous action.",
  },
];
