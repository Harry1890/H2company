import Link from "next/link";
import { companyConfig } from "@/data/company";
import { cn } from "@/lib/utils";
import { LogoMark } from "./logo-mark";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2.5 text-h4 font-semibold tracking-tight",
        inverse ? "text-text-inverse" : "text-text",
      )}
    >
      <LogoMark className="size-6 shrink-0" />
      {companyConfig.name}
    </Link>
  );
}
