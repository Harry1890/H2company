import type { Project } from "@/types";

export function ProjectMeta({ project }: { project: Pick<Project, "tags" | "client"> }) {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-mono text-meta uppercase tracking-[0.04em] text-text-soft">
        {project.tags.join(" / ")}
      </p>
      <p className="text-small text-text-muted">{project.client}</p>
    </div>
  );
}
