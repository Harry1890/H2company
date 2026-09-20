import { cn } from "@/lib/utils/cn";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1360px] px-5 sm:px-8 lg:px-16",
        className,
      )}
    >
      {children}
    </div>
  );
}
