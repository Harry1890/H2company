import { Hero } from "@/components/home/hero";
import { LogoStrip } from "@/components/home/logo-strip";
import { Positioning } from "@/components/home/positioning";
import { CapabilitiesSection } from "@/components/home/capabilities-section";
import { SelectedWork } from "@/components/home/selected-work";
import { HowWeWork } from "@/components/home/how-we-work";
import { AiLabTeaser } from "@/components/home/ai-lab-teaser";
import { TechEcosystem } from "@/components/home/tech-ecosystem";
import { CareersCta } from "@/components/home/careers-cta";
import { ContactCta } from "@/components/home/contact-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <Positioning />
      <CapabilitiesSection />
      <SelectedWork />
      <HowWeWork />
      <AiLabTeaser />
      <TechEcosystem />
      <CareersCta />
      <ContactCta />
    </>
  );
}
