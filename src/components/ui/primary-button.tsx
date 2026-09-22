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
  "group inline-flex h-12 items-center justify-center gap-2 rounded-btn px-6 text-body font-semibold transition-all duration-300 ease-out hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0";

const variantClasses = {
  dark: "bg-[length:180%_100%] bg-[position:0%_50%] bg-(image:--gradient-brand) text-white shadow-[0_10px_28px_-10px_rgba(0,76,198,0.55)] hover:bg-[position:100%_50%] hover:shadow-[0_18px_36px_-10px_rgba(34,147,252,0.6)]",
  accent:
    "bg-brand-blue-mid text-white shadow-[0_10px_24px_-10px_rgba(34,147,252,0.5)] hover:bg-brand-blue hover:shadow-[0_16px_32px_-10px_rgba(34,147,252,0.6)]",
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
