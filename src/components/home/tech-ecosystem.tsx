import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { technologyGroups } from "@/data/technologies";

export function TechEcosystem() {
  return (
    <Section spacing="default" tone="light">
      <Container>
        <SectionHeader eyebrow="07 / Technology Ecosystem" title="Platforms we build on." align="stacked" />
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {technologyGroups.map((group) => (
            <div key={group.category}>
              <p className="font-mono text-meta uppercase tracking-[0.08em] text-text-soft">
                {group.category}
              </p>
              <ul className="mt-4 flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="text-body text-text">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
