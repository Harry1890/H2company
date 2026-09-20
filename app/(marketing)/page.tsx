import { Hero } from "@/components/home/hero";
import { Partners } from "@/components/home/partners";
import { DualBusiness } from "@/components/home/dual-business";
import { Capabilities } from "@/components/home/capabilities";
import { SelectedWork } from "@/components/home/selected-work";
import { SpecialProjects } from "@/components/home/special-projects";
import { CareersCta } from "@/components/home/careers-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <DualBusiness />
      <Capabilities />
      <SelectedWork />
      <SpecialProjects />
      <CareersCta />
    </>
  );
}
