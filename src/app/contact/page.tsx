import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Eyebrow } from "@/components/ui/eyebrow";
import { ContactForm } from "@/components/contact/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Let's build something difficult.",
};

export default function ContactPage() {
  return (
    <Section spacing="default" tone="light">
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Eyebrow>Contact</Eyebrow>
          <h1 className="mt-4 text-display-l font-medium text-text">
            Let&apos;s build something difficult.
          </h1>
          <p className="mt-5 max-w-[var(--width-text)] text-body-l text-text-muted">
            Tell us about the system you need to build. We&apos;ll follow up to talk through
            scope, architecture, and fit.
          </p>
        </div>
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </Container>
    </Section>
  );
}
