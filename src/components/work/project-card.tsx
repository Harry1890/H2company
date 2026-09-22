import type { Project } from "@/types";
import { ProjectMeta } from "./project-meta";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex h-full flex-col gap-5 border border-border p-6 rounded-card transition-all duration-300 hover:-translate-y-1 hover:border-border-strong hover:shadow-[0_10px_30px_rgba(0,0,0,0.05)] lg:p-8">
      <ProjectMeta project={project} />
      <h3 className="text-h3 font-medium text-text">{project.title}</h3>
      <p className="text-body text-text-muted">{project.summary}</p>
    </article>
  );
}
