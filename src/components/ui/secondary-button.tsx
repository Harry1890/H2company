import Link from "next/link";
import { cn } from "@/lib/utils";

type CommonProps = {
  children: React.ReactNode;
  className?: string;
  inverse?: boolean;
};

type ButtonAsLink = CommonProps & { href: string; type?: never };
type ButtonAsButton = CommonProps & {
  href?: never;
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: () => void;
};

export function SecondaryButton(props: ButtonAsLink | ButtonAsButton) {
  const { children, className, inverse = false } = props;
  const base = cn(
    "inline-flex h-12 items-center justify-center rounded-btn border px-6 text-body font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60",
    inverse
      ? "border-border-dark text-text-inverse hover:bg-white/5"
      : "border-border-strong text-text hover:bg-bg-soft",
    className,
  );

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={base}>
        {children}
      </Link>
    );
  }

  const { type = "button", disabled, onClick } = props as ButtonAsButton;
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={base}>
      {children}
    </button>
  );
}
