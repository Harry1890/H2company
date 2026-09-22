import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import { WorkGrid } from "@/components/work/work-grid";

export const metadata: Metadata = {
  title: "Work",
  description: "Systems we've helped bring to life.",
};

export default function WorkPage() {
  return (
    <Section spacing="compact" tone="light">
      <Container>
        <Reveal>
          <Eyebrow>Work</Eyebrow>
          <h1 className="mt-4 max-w-[var(--width-longform)] text-display-l font-medium text-text">
            Systems we&apos;ve helped bring to life.
          </h1>
        </Reveal>
        <div className="mt-12">
          <WorkGrid projects={projects} />
        </div>
      </Container>
    </Section>
  );
}
