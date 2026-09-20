import Link from "next/link";
import { Container } from "@/components/layout/container";
import { capabilities } from "@/content/capabilities";

export function Capabilities() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <Container>
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-h2 font-medium tracking-tight text-text-primary">
            Capabilities
          </h2>
          <Link
            href="/capabilities"
            className="hidden shrink-0 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary sm:block"
          >
            View all →
          </Link>
        </div>

        <div className="mt-12 border-t border-border">
          {capabilities.map((capability) => (
            <Link
              key={capability.slug}
              href={`/capabilities#${capability.slug}`}
              className="group block border-b border-border py-8 transition-colors hover:border-accent-blue/40"
            >
              <div className="grid gap-3 sm:grid-cols-12 sm:items-baseline sm:gap-6">
                <h3 className="text-h3 font-medium tracking-tight text-text-primary transition-transform duration-200 group-hover:translate-x-0.5 sm:col-span-4">
                  {capability.name}
                </h3>
                <p className="text-text-secondary sm:col-span-8">
                  {capability.description}
                </p>

                <div className="flex max-h-0 flex-wrap gap-2 overflow-hidden opacity-0 transition-all duration-300 group-hover:max-h-20 group-hover:opacity-100 sm:col-start-5 sm:col-span-8">
                  {capability.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border px-3 py-1 font-mono text-meta text-text-secondary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
