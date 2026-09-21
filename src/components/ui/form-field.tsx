import { cn } from "@/lib/utils";

export function FormField({
  label,
  htmlFor,
  error,
  optional = false,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label htmlFor={htmlFor} className="text-small font-medium text-text">
        {label}
        {optional ? <span className="ml-1 text-text-soft">(optional)</span> : null}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-small text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export const inputClasses =
  "h-12 w-full rounded-input border border-border-strong bg-surface px-4 text-body text-text placeholder:text-text-soft focus-visible:border-text";

export const textareaClasses =
  "w-full rounded-input border border-border-strong bg-surface px-4 py-3 text-body text-text placeholder:text-text-soft focus-visible:border-text";
