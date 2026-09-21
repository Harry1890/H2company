import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function TextLink({
  href,
  children,
  className,
  showArrow = true,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex items-center gap-1.5 text-body font-medium text-text underline decoration-border-strong decoration-1 underline-offset-4 transition-colors hover:decoration-text",
        className,
      )}
    >
      {children}
      {showArrow ? (
        <ArrowRight
          className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden
        />
      ) : null}
    </Link>
  );
}
