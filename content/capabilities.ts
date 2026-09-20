export type Capability = {
  slug: string;
  name: string;
  description: string;
  technologies: string[];
};

export const capabilities: Capability[] = [
  {
    slug: "agentic-ai",
    name: "Agentic AI",
    description:
      "AI agents and multi-agent systems that reason, use tools, maintain state, and operate across real enterprise workflows.",
    technologies: [
      "LangGraph",
      "Claude",
      "OpenAI",
      "MCP",
      "Tool orchestration",
      "Human-in-the-loop",
      "State management",
      "Long-running workflows",
    ],
  },
  {
    slug: "enterprise-search-rag",
    name: "Enterprise Search & RAG",
    description:
      "Permission-aware retrieval and knowledge systems built over distributed enterprise information.",
    technologies: [
      "Hybrid search",
      "Vector retrieval",
      "Knowledge graphs",
      "Reranking",
      "Embeddings",
      "Evaluation",
      "ACL-aware retrieval",
    ],
  },
  {
    slug: "applied-machine-learning",
    name: "Applied Machine Learning",
    description:
      "Production machine learning systems built around real operational problems.",
    technologies: [
      "Forecasting",
      "Ranking",
      "Classification",
      "Recommendation",
      "Feature engineering",
      "Model serving",
    ],
  },
  {
    slug: "ai-platform-engineering",
    name: "AI Platform Engineering",
    description:
      "Shared infrastructure for teams building and operating AI products.",
    technologies: [
      "Model gateways",
      "Prompt management",
      "Versioning",
      "Tracing",
      "Evaluation",
      "Observability",
      "Governance",
    ],
  },
  {
    slug: "full-stack-ai",
    name: "Full-Stack AI",
    description: "AI-native products from model layer to frontend.",
    technologies: [
      "Next.js",
      "React",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Streaming",
      "WebSockets",
    ],
  },
  {
    slug: "model-evaluation-reliability",
    name: "Model Evaluation & Reliability",
    description:
      "Making probabilistic systems measurable, testable, and dependable.",
    technologies: [
      "Offline evaluation",
      "Online evaluation",
      "LLM-as-judge",
      "Human evaluation",
      "Regression testing",
      "Guardrails",
      "Reliability monitoring",
    ],
  },
];
