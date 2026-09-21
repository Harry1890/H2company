import type { Capability } from "@/types";

export function CapabilityRow({ title, description, meta }: Capability) {
  return (
    <div className="flex flex-col gap-2 border-t border-border py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
      <h3 className="text-h4 font-medium text-text sm:w-64 sm:shrink-0">{title}</h3>
      <p className="text-body text-text-muted">{description}</p>
      {meta ? (
        <span className="font-mono text-meta uppercase tracking-[0.04em] text-text-soft sm:shrink-0">
          {meta}
        </span>
      ) : null}
    </div>
  );
}
