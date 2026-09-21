import Link from "next/link";
import { companyConfig } from "@/data/company";
import { cn } from "@/lib/utils";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "text-h4 font-semibold tracking-tight",
        inverse ? "text-text-inverse" : "text-text",
      )}
    >
      {companyConfig.name}
    </Link>
  );
}
