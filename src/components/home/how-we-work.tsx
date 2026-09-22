import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { workStages } from "@/data/how-we-work";

export function HowWeWork() {
  return (
    <Section spacing="default" tone="soft">
      <Container>
        <SectionHeader
          index="05"
          eyebrow="How We Work"
          title="Built like an engineering team, not a consultancy."
          align="stacked"
        />
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {workStages.map((stage, i) => (
            <Reveal key={stage.index} delay={i * 0.08}>
              <div className="group border-t border-border-strong pt-5 transition-colors duration-300 hover:border-accent">
                <span className="font-mono text-meta text-text-soft transition-colors duration-300 group-hover:text-text">
                  {stage.index}
                </span>
                <h3 className="mt-2 text-h4 font-medium text-text">{stage.title}</h3>
                <p className="mt-3 text-body text-text-muted">{stage.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
