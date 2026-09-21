import { cn } from "@/lib/utils";

type SectionSpacing = "compact" | "default" | "large";
type SectionTone = "light" | "soft" | "dark";

const spacingClasses: Record<SectionSpacing, string> = {
  compact: "py-[var(--spacing-section-compact)]",
  default: "py-[var(--spacing-section)]",
  large: "py-[var(--spacing-section-lg)]",
};

const toneClasses: Record<SectionTone, string> = {
  light: "bg-bg text-text",
  soft: "bg-bg-soft text-text",
  dark: "bg-surface-dark text-text-inverse",
};

export function Section({
  id,
  spacing = "default",
  tone = "light",
  border = false,
  className,
  children,
}: {
  id?: string;
  spacing?: SectionSpacing;
  tone?: SectionTone;
  border?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        spacingClasses[spacing],
        toneClasses[tone],
        border && "border-t",
        tone === "dark" ? "border-border-dark" : "border-border",
        className,
      )}
    >
      {children}
    </section>
  );
}
