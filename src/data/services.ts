import type { ServiceCategory } from "@/types";

export const services: ServiceCategory[] = [
  {
    slug: "applied-ai",
    title: "Applied AI",
    summary:
      "End-to-end AI product development, from prototype to a system real users depend on.",
    problems: [
      "A prototype works in a demo but breaks under real usage and edge cases.",
      "Internal teams don't have the bandwidth to take an AI feature from idea to shipped product.",
      "Point solutions don't generalize past the first use case they were built for.",
    ],
    capabilities: [
      "LLM application design",
      "Prompt and context engineering",
      "Multimodal AI",
      "Production hardening",
      "Human-in-the-loop UX",
    ],
    outcomes: [
      "A production-grade AI feature shipped to real users",
      "An internal prototype hardened into a supportable system",
    ],
    technologies: ["OpenAI", "Anthropic", "LangGraph", "Next.js"],
  },
  {
    slug: "agentic-ai",
    title: "Agentic AI",
    summary:
      "Autonomous and human-in-the-loop systems that reason, use tools, maintain state, and complete multi-step work.",
    problems: [
      "A single-turn model call can't complete work that spans multiple steps and tools.",
      "Long-running tasks need to survive restarts, failures, and human review without losing progress.",
      "Autonomy without oversight is a liability in regulated or high-stakes workflows.",
    ],
    capabilities: [
      "Agent orchestration",
      "Tool use",
      "Planning",
      "State management",
      "Human approvals",
      "Persistent workflows",
    ],
    outcomes: [
      "A multi-step agent that completes real work with defined approval gates",
      "Workflow infrastructure that resumes cleanly after failure",
    ],
    technologies: ["LangGraph", "Anthropic", "OpenAI", "PostgreSQL"],
  },
  {
    slug: "machine-learning",
    title: "Machine Learning",
    summary:
      "Production ML systems spanning data, modeling, inference, deployment, and evaluation.",
    problems: [
      "A model that performs well offline doesn't hold up once it's serving production traffic.",
      "Feature and data pipelines break silently, and nobody notices until output quality drops.",
      "There's no reliable way to evaluate model changes before they ship.",
    ],
    capabilities: [
      "Model development",
      "Inference",
      "MLOps",
      "Feature pipelines",
      "Evaluation",
    ],
    outcomes: [
      "A model pipeline with monitored inputs, outputs, and drift",
      "An evaluation harness that gates releases on measured quality",
    ],
    technologies: ["PyTorch", "MLflow", "Databricks", "Ray"],
  },
  {
    slug: "ai-platforms",
    title: "AI Platforms",
    summary:
      "Shared infrastructure for model access, retrieval, orchestration, observability, and governance.",
    problems: [
      "Every team is building its own model access layer, retries, and logging from scratch.",
      "There's no shared visibility into cost, latency, or failure across AI systems.",
      "Governance and security review can't keep pace with how many systems now call a model.",
    ],
    capabilities: [
      "Model gateways",
      "Orchestration",
      "Observability",
      "Evaluation",
      "Security",
      "Platform APIs",
    ],
    outcomes: [
      "A single model gateway used across every internal AI system",
      "Shared tracing and evaluation infrastructure with per-team visibility",
    ],
    technologies: ["Kubernetes", "AWS", "Google Cloud", "Azure"],
  },
  {
    slug: "enterprise-ai",
    title: "Enterprise AI",
    summary:
      "AI systems grounded in enterprise context, permissions, workflows, and business knowledge.",
    problems: [
      "Answers need to be grounded in internal knowledge, not general model training data.",
      "Retrieval has to respect the same permissions as the underlying systems it reads from.",
      "AI features need to integrate with the tools the business already runs on.",
    ],
    capabilities: [
      "RAG",
      "Enterprise search",
      "Knowledge systems",
      "Permissions-aware retrieval",
      "Enterprise integrations",
    ],
    outcomes: [
      "A knowledge assistant grounded in live internal documentation",
      "Permissions-aware retrieval enforced at the query layer",
    ],
    technologies: ["Elasticsearch", "Pinecone", "PostgreSQL", "Snowflake"],
  },
];
