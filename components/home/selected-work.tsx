import Link from "next/link";
import { Container } from "@/components/layout/container";
import { caseStudies } from "@/content/case-studies";

export function SelectedWork() {
  const featured = caseStudies.filter((c) => c.featured);

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <Container>
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-h2 font-medium tracking-tight text-text-primary">
            Selected work
          </h2>
          <Link
            href="/work"
            className="hidden shrink-0 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary sm:block"
          >
            View all →
          </Link>
        </div>
        <p className="mt-3 font-mono text-meta text-text-secondary">
          Placeholder development data — real case studies replace these
          entries at launch.
        </p>

        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">
          {featured.map((study) => (
            <Link
              key={study.slug}
              href={`/work/${study.slug}`}
              className="group flex flex-col justify-between bg-surface p-8"
            >
              <div>
                <p className="font-mono text-meta text-text-secondary">
                  {study.customerType}
                </p>
                <h3 className="mt-4 text-lg font-medium tracking-tight text-text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm text-text-secondary">
                  {study.shortDescription}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-meta text-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
