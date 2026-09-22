import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description: "AI engineering from architecture to production.",
};

export default function ServicesPage() {
  return (
    <>
      <Section spacing="compact" tone="light">
        <Container className="max-w-[var(--width-longform)]">
          <Reveal>
            <Eyebrow>What We Do</Eyebrow>
            <h1 className="mt-4 text-display-l font-medium text-text">
              AI engineering from architecture to production.
            </h1>
          </Reveal>
        </Container>
      </Section>

      {services.map((service, index) => (
        <Section
          key={service.slug}
          tone={index % 2 === 0 ? "light" : "soft"}
          spacing="default"
          border
        >
          <Container>
            <Reveal className="grid gap-10 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <span className="font-mono text-meta text-text-soft">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 text-h2 font-medium text-text">{service.title}</h2>
                <p className="mt-4 text-body-l text-text-muted">{service.summary}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full border border-border-strong px-3 py-1 font-mono text-meta text-text-soft transition-colors duration-200 hover:border-text hover:text-text"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-8 sm:grid-cols-3 lg:col-span-8">
                <div>
                  <p className="font-mono text-meta uppercase tracking-[0.06em] text-text-soft">
                    Business problems
                  </p>
                  <ul className="mt-4 flex flex-col gap-3 text-body text-text-muted">
                    {service.problems.map((problem) => (
                      <li key={problem} className="border-t border-border pt-3">
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-meta uppercase tracking-[0.06em] text-text-soft">
                    Capabilities
                  </p>
                  <ul className="mt-4 flex flex-col gap-3 text-body text-text-muted">
                    {service.capabilities.map((capability) => (
                      <li key={capability} className="border-t border-border pt-3">
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-meta uppercase tracking-[0.06em] text-text-soft">
                    Example outcomes
                  </p>
                  <ul className="mt-4 flex flex-col gap-3 text-body text-text-muted">
                    {service.outcomes.map((outcome) => (
                      <li key={outcome} className="border-t border-border pt-3">
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          </Container>
        </Section>
      ))}
    </>
  );
}
