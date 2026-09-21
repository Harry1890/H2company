import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { Eyebrow } from "@/components/ui/eyebrow";
import { companyConfig } from "@/data/company";
import { workStages } from "@/data/how-we-work";
import { values } from "@/data/values";
import { CareersCta } from "@/components/home/careers-cta";

export const metadata: Metadata = {
  title: "Company",
  description: "Built for the era where software learns, reasons, and acts.",
};

export default function CompanyPage() {
  return (
    <>
      <Section spacing="compact" tone="light">
        <Container className="max-w-[var(--width-longform)]">
          <Eyebrow>Company</Eyebrow>
          <h1 className="mt-4 text-display-l font-medium text-text">
            Built for the era where software learns, reasons, and acts.
          </h1>
        </Container>
      </Section>

      <Section spacing="default" tone="light" border>
        <Container>
          <SectionHeader
            eyebrow="Who we are"
            title="An AI engineering firm, an applied AI lab, and an enterprise delivery partner."
            description={`${companyConfig.name} builds production AI, machine learning, and agentic systems for enterprise technology partners, alongside our own applied AI research.`}
          />
        </Container>
      </Section>

      <Section spacing="default" tone="soft" border>
        <Container>
          <SectionHeader eyebrow="How we work" title="Understand. Architect. Build. Operate." align="stacked" />
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {workStages.map((stage) => (
              <div key={stage.index} className="border-t border-border-strong pt-5">
                <span className="font-mono text-meta text-text-soft">{stage.index}</span>
                <h3 className="mt-2 text-h4 font-medium text-text">{stage.title}</h3>
                <p className="mt-3 text-body text-text-muted">{stage.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="default" tone="light" border>
        <Container>
          <SectionHeader eyebrow="Engineering philosophy" title="What guides how we build." align="stacked" />
          <div className="mt-12 grid gap-x-8 gap-y-10 md:grid-cols-2">
            {values.map((value) => (
              <div key={value.title} className="border-t border-border pt-5">
                <h3 className="text-h4 font-medium text-text">{value.title}</h3>
                <p className="mt-3 text-body text-text-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {companyConfig.locations.length > 0 ? (
        <Section spacing="compact" tone="soft" border>
          <Container>
            <Eyebrow>Locations</Eyebrow>
            <p className="mt-4 text-h4 font-medium text-text">
              {companyConfig.locations.join(" · ")}
            </p>
          </Container>
        </Section>
      ) : null}

      <CareersCta />
    </>
  );
}
