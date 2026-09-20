import Link from "next/link";
import { companyConfig } from "@/config/company";

export function Logo() {
  return (
    <Link
      href="/"
      className="font-mono text-sm font-medium tracking-tight text-text-primary"
    >
      {companyConfig.name}
    </Link>
  );
}
