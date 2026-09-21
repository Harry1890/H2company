import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "enterprise-knowledge-agent",
    title: "Enterprise Knowledge Agent",
    client: "Fortune 100 Technology Company",
    tags: ["Enterprise AI", "Agentic AI", "Retrieval"],
    category: "Agentic AI",
    summary:
      "A stateful agent architecture connecting enterprise knowledge, tools, and approval workflows.",
    description:
      "Designed and built a persistent agent system that reasons over internal documentation, invokes internal tools under permission constraints, and routes high-risk actions through human approval before executing.",
  },
  {
    slug: "intelligent-document-platform",
    title: "Intelligent Document Platform",
    client: "Global Enterprise Software Company",
    tags: ["Document AI", "ML", "LLM"],
    category: "Machine Learning",
    summary:
      "A production document-understanding pipeline spanning extraction, classification, and review.",
    description:
      "Built a model pipeline that extracts structured data from unstructured enterprise documents, with human-in-the-loop review queues and continuous evaluation against production traffic.",
  },
  {
    slug: "ai-operations-platform",
    title: "AI Operations Platform",
    client: "Leading Financial Platform",
    tags: ["AI Platform", "Evaluation", "Observability"],
    category: "AI Infrastructure",
    summary:
      "Shared infrastructure for model access, evaluation, and observability across internal AI systems.",
    description:
      "Delivered a model gateway and evaluation platform giving internal teams a single point of access to models, traces, and quality metrics across every production AI system.",
  },
  {
    slug: "adaptive-support-copilot",
    title: "Adaptive Support Copilot",
    client: "Enterprise SaaS Platform",
    tags: ["Applications", "Enterprise AI", "LLM"],
    category: "Applications",
    summary:
      "A support copilot grounded in product documentation, account context, and prior resolutions.",
    description:
      "Shipped a customer-facing copilot that grounds responses in live account data and documentation, with escalation paths back to human agents for low-confidence cases.",
  },
];
