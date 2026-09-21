import { cn } from "@/lib/utils";
import type { LabStatus } from "@/types";

const statusClasses: Record<LabStatus, string> = {
  Research: "border-border-dark text-text-inverse-muted",
  Prototype: "border-warning/40 text-warning",
  Active: "border-success/40 text-success",
};

export function StatusBadge({
  status,
  className,
}: {
  status: LabStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-meta tracking-[0.04em] uppercase",
        statusClasses[status],
        className,
      )}
    >
      {status}
    </span>
  );
}
