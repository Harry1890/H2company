import Link from "next/link";
import Image from "next/image";
import { companyConfig } from "@/data/company";
import { cn } from "@/lib/utils";

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 text-h4 font-bold tracking-tight",
        inverse ? "text-text-inverse" : "text-(--logo-wordmark)",
      )}
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={92}
        height={36}
        priority
        className="h-6 w-auto shrink-0"
      />
      {companyConfig.name}
    </Link>
  );
}
