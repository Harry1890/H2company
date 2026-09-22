export interface NavLink {
  label: string;
  href: string;
}

export type ProjectCategory =
  | "Agentic AI"
  | "Enterprise AI"
  | "Machine Learning"
  | "AI Infrastructure"
  | "Applications";

export interface Project {
  slug: string;
  title: string;
  client: string;
  tags: string[];
  category: ProjectCategory;
  summary: string;
  description: string;
}

export type LabStatus = "Research" | "Prototype" | "Active";

export interface LabProject {
  slug: string;
  title: string;
  description: string;
  status: LabStatus;
}

export interface Capability {
  title: string;
  description: string;
  meta?: string;
}

export interface ServiceCategory {
  slug: string;
  title: string;
  summary: string;
  problems: string[];
  capabilities: string[];
  outcomes: string[];
  technologies: string[];
}

export interface TechnologyGroup {
  category: string;
  items: string[];
}

export type WorkplaceType = "Remote" | "Hybrid" | "On-site";
export type EmploymentType = "Full-time" | "Contract";
export type JobDepartment =
  | "Engineering"
  | "Machine Learning"
  | "Product"
  | "Design"
  | "Operations";

export interface Job {
  id: string;
  slug: string;
  title: string;
  department: JobDepartment;
  location: string;
  workplaceType: WorkplaceType;
  employmentType: EmploymentType;
  salary?: {
    min: number;
    max: number;
    currency: "EUR";
  };
  summary: string;
  about: string;
  responsibilities: string[];
  requirements: string[];
  preferred?: string[];
  benefits?: string[];
}
