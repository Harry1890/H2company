import type { TechnologyGroup } from "@/types";

export const technologyGroups: TechnologyGroup[] = [
  { category: "Models", items: ["OpenAI", "Anthropic", "Google", "Meta"] },
  {
    category: "Infrastructure",
    items: ["AWS", "Azure", "Google Cloud", "Kubernetes", "Ray"],
  },
  { category: "AI / ML", items: ["PyTorch", "LangGraph", "MLflow", "Databricks"] },
  {
    category: "Data",
    items: ["PostgreSQL", "Snowflake", "Elasticsearch", "Pinecone", "Redis"],
  },
];
