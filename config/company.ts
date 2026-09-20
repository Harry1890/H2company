/**
 * Factual company data. Nothing here is invented — fields we don't have
 * real values for stay empty, and components must render nothing for an
 * empty field rather than a placeholder UI.
 */
export const companyConfig = {
  // PLACEHOLDER — replace with the real company name before launch.
  name: "Nexora",
  legalName: "",
  description: "",
  headquarters: "",

  social: {
    linkedin: "",
    github: "",
  },

  partnerSection: {
    enabled: false,
    label: "Selected partners",
    companies: [] as { name: string; logo: string }[],
  },
} as const;
