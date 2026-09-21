import type { Project } from "@/types";
import { ProjectMeta } from "./project-meta";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="flex flex-col gap-5 border border-border p-6 rounded-card lg:p-8">
      <ProjectMeta project={project} />
      <h3 className="text-h3 font-medium text-text">{project.title}</h3>
      <p className="text-body text-text-muted">{project.summary}</p>
    </article>
  );
}
