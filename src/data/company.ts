/**
 * Factual company data. Nothing here is invented — fields without a
 * confirmed real value stay empty, and components must render nothing
 * for an empty field rather than a placeholder UI. See CLAUDE.md §22.
 */
export const companyConfig = {
  name: "Wide",
  legalName: "",
  tagline: "Independent AI Engineering",
  description:
    "Production AI, machine learning, and agentic systems built for real-world use.",

  locations: ["Remote — France"] as string[],

  social: {
    linkedin: "",
    github: "",
  },

  email: "",

  ecosystem: {
    enabled: true,
    label: "Platforms our teams work with",
    names: ["OpenAI", "Anthropic", "Google Cloud", "AWS", "Microsoft Azure"] as string[],
  },
} as const;
