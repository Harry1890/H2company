import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
  inverse = false,
}: {
  children: React.ReactNode;
  className?: string;
  inverse?: boolean;
}) {
  return (
    <p
      className={cn(
        "font-mono text-meta tracking-[0.08em] uppercase",
        inverse ? "text-text-inverse-muted" : "text-text-muted",
        className,
      )}
    >
      {children}
    </p>
  );
}
