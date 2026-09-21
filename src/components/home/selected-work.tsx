import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { TextLink } from "@/components/ui/text-link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/work/project-card";

export function SelectedWork() {
  return (
    <Section spacing="default" tone="light">
      <Container>
        <SectionHeader
          eyebrow="04 / Selected Work"
          title="Selected work"
          description={<TextLink href="/work">View all work</TextLink>}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.slice(0, 4).map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
