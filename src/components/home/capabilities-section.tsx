import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeader } from "@/components/ui/section-header";
import { capabilities } from "@/data/capabilities";
import { CapabilityRow } from "./capability-row";

export function CapabilitiesSection() {
  return (
    <Section spacing="default" tone="soft">
      <Container>
        <SectionHeader eyebrow="03 / Capabilities" title="From model to production." />
        <div className="mt-12 border-b border-border">
          {capabilities.map((capability) => (
            <CapabilityRow key={capability.title} {...capability} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
