import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { StatusBadge } from "@/components/ui/status-badge";
import { ArchitectureDiagram } from "@/components/visuals/architecture-diagram";
import { labProjects } from "@/data/labs";

export const metadata: Metadata = {
  title: "AI Lab",
  description: "Special projects for the next generation of AI systems.",
};

export default function LabsPage() {
  return (
    <Section spacing="large" tone="dark">
      <Container>
        <Eyebrow inverse>AI Lab</Eyebrow>
        <h1 className="mt-4 max-w-[var(--width-longform)] text-display-l font-medium text-text-inverse">
          Special projects for the next generation of AI systems.
        </h1>
        <p className="mt-5 max-w-[var(--width-text)] text-body-l text-text-inverse-muted">
          Alongside client work, our teams build experimental systems around autonomous agents,
          long-running AI workflows, machine reasoning, and next-generation AI infrastructure.
          Research notes and deeper technical write-ups are on the way.
        </p>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <div className="grid gap-6 lg:col-span-7">
            {labProjects.map((project) => (
              <div
                key={project.slug}
                className="border-t border-border-dark pt-6 first:border-t-0 first:pt-0"
              >
                <div className="flex items-center justify-between gap-4">
                  <h2 className="text-h3 font-medium text-text-inverse">{project.title}</h2>
                  <StatusBadge status={project.status} />
                </div>
                <p className="mt-3 max-w-[var(--width-text)] text-body text-text-inverse-muted">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
          <div className="lg:col-span-5">
            <ArchitectureDiagram inverse />
          </div>
        </div>
      </Container>
    </Section>
  );
}
