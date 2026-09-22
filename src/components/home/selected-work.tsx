import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { TextLink } from "@/components/ui/text-link";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/work/project-card";

export function SelectedWork() {
  return (
    <Section spacing="default" tone="light">
      <Container>
        <SectionHeader
          index="04"
          eyebrow="Selected Work"
          title="Selected work"
          description={<TextLink href="/work">View all work</TextLink>}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project, i) => (
            <Reveal key={project.slug} delay={i * 0.06}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
