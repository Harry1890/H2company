import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { StatusBadge } from "@/components/ui/status-badge";
import { Reveal } from "@/components/ui/reveal";
import { labProjects } from "@/data/labs";

export function AiLabTeaser() {
  return (
    <Section spacing="default" tone="dark">
      <Container>
        <SectionHeader
          index="06"
          eyebrow="AI Lab"
          title="Exploring what comes after today's AI stack."
          description="Alongside client work, our teams build experimental systems around autonomous agents, long-running AI workflows, machine reasoning, and next-generation AI infrastructure."
          inverse
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {labProjects.slice(0, 3).map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.08}>
              <div className="h-full border border-border-dark p-6 rounded-card transition-all duration-300 hover:-translate-y-1 hover:border-white/25">
                <StatusBadge status={project.status} />
                <h3 className="mt-4 text-h4 font-medium text-text-inverse">{project.title}</h3>
                <p className="mt-3 text-body text-text-inverse-muted">{project.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <SecondaryButton href="/labs" inverse>
            Visit the AI Lab
          </SecondaryButton>
        </div>
      </Container>
    </Section>
  );
}
