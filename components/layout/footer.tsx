import Link from "next/link";
import { Container } from "@/components/layout/container";
import { companyConfig } from "@/config/company";
import { footerNav, siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();
  const { linkedin, github } = companyConfig.social;

  return (
    <footer className="border-t border-border">
      <Container className="py-16 sm:py-20">
        <Link
          href={siteConfig.contactCtaHref}
          className="group flex flex-col gap-4 border-b border-border pb-16 sm:flex-row sm:items-end sm:justify-between"
        >
          <h2 className="text-h2 font-medium tracking-tight text-text-primary">
            Have something difficult to build?
            <br />
            Let&apos;s talk.
          </h2>
          <span
            aria-hidden
            className="text-2xl text-text-primary transition-transform group-hover:translate-x-2"
          >
            →
          </span>
        </Link>

        <div className="grid gap-12 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-mono text-sm text-text-primary">
              {companyConfig.name}
            </p>
            {companyConfig.headquarters && (
              <p className="mt-2 text-sm text-text-secondary">
                {companyConfig.headquarters}
              </p>
            )}
          </div>

          <FooterColumn title="Practice" items={footerNav.practice} />
          <FooterColumn title="Company" items={footerNav.company} />

          {(linkedin || github) && (
            <div>
              <p className="text-meta uppercase tracking-wider text-text-secondary">
                Follow
              </p>
              <ul className="mt-4 space-y-3">
                {linkedin && (
                  <li>
                    <a
                      href={linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      LinkedIn
                    </a>
                  </li>
                )}
                {github && (
                  <li>
                    <a
                      href={github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                    >
                      GitHub
                    </a>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-border pt-8 text-sm text-text-secondary sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {companyConfig.name}
          </p>
          <div className="flex gap-6">
            {footerNav.legal.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-text-primary"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="text-meta uppercase tracking-wider text-text-secondary">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
