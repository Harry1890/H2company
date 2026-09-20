import Image from "next/image";
import { Container } from "@/components/layout/container";
import { companyConfig } from "@/config/company";

export function Partners() {
  const { enabled, label, companies } = companyConfig.partnerSection;

  if (!enabled || companies.length === 0) {
    return null;
  }

  return (
    <section className="border-t border-border py-16 sm:py-20">
      <Container>
        <p className="text-center text-meta uppercase tracking-wider text-text-secondary">
          {label}
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-80">
          {companies.map((company) => (
            <Image
              key={company.name}
              src={company.logo}
              alt={company.name}
              width={120}
              height={32}
              className="h-8 w-auto grayscale"
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
