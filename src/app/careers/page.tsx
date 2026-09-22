import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { values } from "@/data/values";
import { jobs } from "@/data/jobs";
import { CareersBoard } from "@/components/careers/careers-board";

export const metadata: Metadata = {
  title: "Careers",
  description: "Work on AI that makes it into production.",
};

export default function CareersPage() {
  return (
    <>
      <Section spacing="compact" tone="light">
        <Container className="max-w-[var(--width-longform)]">
          <Reveal>
            <Eyebrow>Careers</Eyebrow>
            <h1 className="mt-4 text-display-l font-medium text-text">
              Work on AI that makes it into production.
            </h1>
            <p className="mt-5 text-body-l text-text-muted">
              We bring together engineers, researchers, and builders to solve difficult AI and
              machine-learning problems.
            </p>
          </Reveal>
        </Container>
      </Section>

      <Section spacing="compact" tone="soft" border>
        <Container>
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 0.06}>
                <div className="border-t border-border-strong pt-5 transition-colors duration-300 hover:border-accent">
                  <h2 className="text-h4 font-medium text-text">{value.title}</h2>
                  <p className="mt-3 text-body text-text-muted">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="default" tone="light" border>
        <Container>
          <Eyebrow>Open roles</Eyebrow>
          <div className="mt-8">
            <CareersBoard jobs={jobs} />
          </div>
        </Container>
      </Section>
    </>
  );
}
