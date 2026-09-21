import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "accent";
  showArrow?: boolean;
};

type ButtonAsLink = CommonProps & {
  href: string;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

const base =
  "group inline-flex h-12 items-center justify-center gap-2 rounded-btn px-6 text-body font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variantClasses = {
  dark: "bg-text text-text-inverse hover:bg-text/90",
  accent: "bg-accent text-accent-foreground hover:bg-accent/90",
};

export function PrimaryButton(props: ButtonAsLink | ButtonAsButton) {
  const { children, className, variant = "dark", showArrow = true } = props;
  const content = (
    <>
      {children}
      {showArrow ? (
        <ArrowRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden
        />
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={cn(base, variantClasses[variant], className)}>
        {content}
      </Link>
    );
  }

  const { type = "button", disabled, onClick } = props as ButtonAsButton;
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(base, variantClasses[variant], className)}
    >
      {content}
    </button>
  );
}
