import { companyConfig } from "@/data/company";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";

export function LogoStrip() {
  if (!companyConfig.ecosystem.enabled || companyConfig.ecosystem.names.length === 0) {
    return null;
  }

  return (
    <div className="border-y border-border py-10">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <Eyebrow>{companyConfig.ecosystem.label}</Eyebrow>
        <ul className="flex flex-wrap gap-x-8 gap-y-3">
          {companyConfig.ecosystem.names.map((name) => (
            <li
              key={name}
              className="font-mono text-small text-text-soft transition-colors hover:text-text"
            >
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
