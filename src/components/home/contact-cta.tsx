import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PrimaryButton } from "@/components/ui/primary-button";

export function ContactCta() {
  return (
    <Section spacing="large" tone="light">
      <Container className="max-w-[var(--width-longform)]">
        <Eyebrow>Contact</Eyebrow>
        <h2 className="mt-3 text-h2 font-medium text-text">Have a difficult AI problem?</h2>
        <p className="mt-4 text-body-l text-text-muted">
          Let&apos;s talk about the system you need to build.
        </p>
        <div className="mt-8">
          <PrimaryButton href="/contact">Talk to us</PrimaryButton>
        </div>
      </Container>
    </Section>
  );
}
