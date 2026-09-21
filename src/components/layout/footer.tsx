import Link from "next/link";
import { footerNav } from "@/data/navigation";
import { companyConfig } from "@/data/company";
import { Container } from "@/components/ui/container";
import { Logo } from "./logo";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-bg">
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-small text-text-muted">{companyConfig.description}</p>
            {companyConfig.locations.length > 0 ? (
              <p className="mt-4 font-mono text-meta text-text-soft">
                {companyConfig.locations.join(" / ")}
              </p>
            ) : null}
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {footerNav.map((group) => (
              <div key={group.title}>
                <p className="font-mono text-meta uppercase tracking-[0.08em] text-text-soft">
                  {group.title}
                </p>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-small text-text-muted transition-colors hover:text-text"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-meta text-text-soft sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {companyConfig.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
