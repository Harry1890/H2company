import Link from "next/link";
import { Container } from "@/components/layout/container";
import { AiSystemVisual } from "@/components/home/ai-system-visual";

export function Hero() {
  return (
    <Container className="pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <h1 className="max-w-2xl text-hero font-medium leading-[1.05] tracking-tight text-text-primary">
            AI systems built for real work.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-text-secondary">
            We design and engineer production-grade AI systems for ambitious
            companies — while building a few of our own.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <Link
              href="/contact"
              className="rounded-full bg-text-primary px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Start a project
            </Link>
            <Link
              href="/work"
              className="group flex items-center gap-2 text-sm font-medium text-text-primary"
            >
              Explore our work
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="flex justify-center lg:col-span-5 lg:justify-end">
          <AiSystemVisual />
        </div>
      </div>
    </Container>
  );
}
