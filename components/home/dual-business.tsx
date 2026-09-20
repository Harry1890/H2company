import Link from "next/link";
import { Container } from "@/components/layout/container";

const PANELS = [
  {
    title: "Enterprise AI Engineering",
    description:
      "We work alongside engineering teams to design and ship production AI systems.",
    cta: "Explore capabilities",
    href: "/capabilities",
  },
  {
    title: "Special Projects",
    description:
      "We invest in and build focused AI technologies where we see a meaningful technical opportunity.",
    cta: "Explore projects",
    href: "/projects",
  },
];

export function DualBusiness() {
  return (
    <section className="border-t border-border py-24 sm:py-32">
      <Container>
        <h2 className="max-w-2xl text-h2 font-medium tracking-tight text-text-primary">
          We operate in two worlds.
        </h2>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
          {PANELS.map((panel) => (
            <div
              key={panel.title}
              className="flex flex-col justify-between bg-surface p-8 sm:p-10"
            >
              <div>
                <h3 className="text-h3 font-medium tracking-tight text-text-primary">
                  {panel.title}
                </h3>
                <p className="mt-4 max-w-sm text-text-secondary">
                  {panel.description}
                </p>
              </div>
              <Link
                href={panel.href}
                className="group mt-10 flex w-fit items-center gap-2 text-sm font-medium text-text-primary"
              >
                {panel.cta}
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
