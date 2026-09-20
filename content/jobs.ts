/**
 * Development seed data mirroring the `jobs` table shape (see
 * docs/DATABASE_SCHEMA.md). Used for the homepage careers teaser until
 * the careers module (Phase 4) reads from the database. Not real open
 * roles — replace before launch.
 */
export type SeedJob = {
  slug: string;
  title: string;
  department: string;
  location: string;
  workplaceType: "Remote" | "Hybrid" | "On-site";
  featured: boolean;
};

export const seedJobs: SeedJob[] = [
  {
    slug: "staff-ai-engineer",
    title: "Staff AI Engineer",
    department: "AI Engineering",
    location: "United States",
    workplaceType: "Remote",
    featured: true,
  },
  {
    slug: "senior-machine-learning-engineer",
    title: "Senior Machine Learning Engineer",
    department: "Machine Learning",
    location: "United States",
    workplaceType: "Remote",
    featured: true,
  },
  {
    slug: "applied-ai-engineer",
    title: "Applied AI Engineer",
    department: "AI Engineering",
    location: "New York",
    workplaceType: "Hybrid",
    featured: true,
  },
];
