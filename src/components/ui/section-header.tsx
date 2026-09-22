import { cn } from "@/lib/utils";
import { Eyebrow } from "./eyebrow";
import { Reveal } from "./reveal";

export function SectionHeader({
  eyebrow,
  title,
  description,
  inverse = false,
  align = "split",
  index,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  inverse?: boolean;
  align?: "split" | "stacked";
  index?: string;
  className?: string;
}) {
  return (
    <div className={cn("relative", className)}>
      {index ? (
        <span
          aria-hidden
          className={cn(
            "pointer-events-none absolute -top-10 right-0 hidden select-none text-[9rem] leading-none font-semibold lg:block xl:text-[11rem]",
            inverse ? "text-text-inverse/8" : "text-brand-blue-mid/8",
          )}
        >
          {index}
        </span>
      ) : null}
      <Reveal
        className={cn(
          "relative flex flex-col gap-6",
          align === "split" && "lg:flex-row lg:items-end lg:justify-between lg:gap-12",
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
      </Reveal>
    </div>
  );
}
