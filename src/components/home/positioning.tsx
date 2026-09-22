import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Reveal } from "@/components/ui/reveal";
import { positioningPillars } from "@/data/positioning";

export function Positioning() {
  return (
    <Section spacing="default" tone="light">
      <Container>
        <SectionHeader
          index="02"
          eyebrow="Positioning"
          title="We work where AI meets real engineering."
          align="stacked"
        />
        <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {positioningPillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.06}>
              <div className="group border-t border-border pt-6 transition-colors duration-300 hover:border-accent">
                <h3 className="text-h4 font-medium text-text">{pillar.title}</h3>
                <p className="mt-3 max-w-[var(--width-text)] text-body text-text-muted">
                  {pillar.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                  {pillar.items.map((item) => (
                    <li key={item} className="font-mono text-meta uppercase tracking-[0.04em] text-text-soft">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
