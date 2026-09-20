import { Container } from "@/components/layout/container";

export default function Home() {
  return (
    <Container className="flex min-h-[calc(100vh-4rem)] flex-col justify-center pt-16">
      <p className="font-mono text-sm text-text-secondary">
        Foundation phase — homepage sections land in Phase 2.
      </p>
      <h1 className="mt-4 max-w-3xl text-hero font-medium leading-[1.05] tracking-tight text-text-primary">
        AI systems built for real work.
      </h1>
      <p className="mt-6 max-w-xl text-lg text-text-secondary">
        We design and engineer production-grade AI systems for ambitious
        companies — while building a few of our own.
      </p>
    </Container>
  );
}
