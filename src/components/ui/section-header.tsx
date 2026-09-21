import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";

export function SectionHeader({
  eyebrow,
  title,
  description,
  inverse = false,
  align = "split",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  inverse?: boolean;
  align?: "split" | "stacked";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "split" && "lg:flex-row lg:items-end lg:justify-between lg:gap-12",
        className,
      )}
    >
      <div className="max-w-[var(--width-longform)]">
        {eyebrow ? <Eyebrow inverse={inverse}>{eyebrow}</Eyebrow> : null}
        <h2
          className={cn(
            "mt-3 text-h2 font-medium text-balance",
            inverse ? "text-text-inverse" : "text-text",
          )}
        >
          {title}
        </h2>
      </div>
      {description ? (
        <p
          className={cn(
            "max-w-[var(--width-text)] text-body-l",
            inverse ? "text-text-inverse-muted" : "text-text-muted",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
