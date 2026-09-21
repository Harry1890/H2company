import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PrimaryButton } from "@/components/ui/primary-button";

export function CareersCta() {
  return (
    <Section spacing="default" tone="soft" border>
      <Container className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-[var(--width-longform)]">
          <Eyebrow>Careers</Eyebrow>
          <h2 className="mt-3 text-h2 font-medium text-text">Build what&apos;s next.</h2>
          <p className="mt-4 max-w-[var(--width-text)] text-body-l text-text-muted">
            We&apos;re looking for engineers who want to work on difficult AI problems that
            matter in production.
          </p>
          <p className="mt-4 font-mono text-meta uppercase tracking-[0.04em] text-text-soft">
            Remote-first / United States / Engineering-driven
          </p>
        </div>
        <PrimaryButton href="/careers">View open roles</PrimaryButton>
      </Container>
    </Section>
  );
}
