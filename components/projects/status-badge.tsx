import type { ProjectStatus } from "@/content/special-projects";
import { cn } from "@/lib/utils/cn";

const STATUS_LABEL: Record<ProjectStatus, string> = {
  RESEARCH: "Research",
  ACTIVE_DEVELOPMENT: "Active development",
  PRIVATE_BETA: "Private beta",
  LIVE: "Live",
  PAUSED: "Paused",
  ARCHIVED: "Archived",
};

const STATUS_COLOR: Record<ProjectStatus, string> = {
  RESEARCH: "text-accent-cyan border-accent-cyan/30",
  ACTIVE_DEVELOPMENT: "text-accent-blue border-accent-blue/30",
  PRIVATE_BETA: "text-accent-indigo border-accent-indigo/30",
  LIVE: "text-accent-cyan border-accent-cyan/30",
  PAUSED: "text-text-secondary border-border",
  ARCHIVED: "text-text-secondary border-border",
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 font-mono text-meta",
        STATUS_COLOR[status],
      )}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-current" />
      {STATUS_LABEL[status]}
    </span>
  );
}
