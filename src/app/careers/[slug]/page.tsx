import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { jobs } from "@/data/jobs";
import { workStages } from "@/data/how-we-work";
import { JobSidebar } from "@/components/careers/job-sidebar";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata(props: PageProps<"/careers/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};
  return { title: job.title, description: job.summary };
}

function JobSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border-t border-border pt-6">
      <h2 className="text-h4 font-medium text-text">{title}</h2>
      <ul className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-body text-text-muted">
            <span aria-hidden className="mt-2.5 size-1 shrink-0 rounded-full bg-text-soft" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default async function JobDetailPage(props: PageProps<"/careers/[slug]">) {
  const { slug } = await props.params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <Section spacing="default" tone="light">
      <Container>
        <Link
          href="/careers"
          className="inline-flex items-center gap-1.5 text-small font-medium text-text-muted hover:text-text"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          Careers
        </Link>

        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-[var(--width-longform)] text-display-l font-medium text-text">
            {job.title}
          </h1>
          <p className="mt-3 font-mono text-meta uppercase tracking-[0.04em] text-text-soft">
            {job.location} · {job.department} · {job.employmentType}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-12">
          <div className="flex flex-col gap-10 lg:col-span-8">
            <div className="border-t border-border pt-6">
              <h2 className="text-h4 font-medium text-text">About the role</h2>
              <p className="mt-4 max-w-[var(--width-text)] text-body text-text-muted">
                {job.about}
              </p>
            </div>

            <JobSection title="What you'll do" items={job.responsibilities} />
            <JobSection title="What we're looking for" items={job.requirements} />
            {job.preferred && job.preferred.length > 0 ? (
              <JobSection title="Nice to have" items={job.preferred} />
            ) : null}

            <div className="border-t border-border pt-6">
              <h2 className="text-h4 font-medium text-text">How we work</h2>
              <div className="mt-4 grid gap-6 sm:grid-cols-2">
                {workStages.map((stage) => (
                  <div key={stage.index}>
                    <p className="font-mono text-meta text-text-soft">{stage.index}</p>
                    <p className="mt-1 text-body font-medium text-text">{stage.title}</p>
                    <p className="mt-1 text-small text-text-muted">{stage.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {job.benefits && job.benefits.length > 0 ? (
              <JobSection title="Compensation" items={job.benefits} />
            ) : null}

            <div className="border-t border-border pt-6">
              <h2 className="text-h4 font-medium text-text">Equal opportunity</h2>
              <p className="mt-4 max-w-[var(--width-text)] text-body text-text-muted">
                We are an equal opportunity employer and evaluate all candidates without regard to
                race, color, religion, sex, national origin, age, disability, or any other legally
                protected status.
              </p>
            </div>
          </div>

          <Reveal delay={0.15} className="lg:col-span-4">
            <JobSidebar job={job} />
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}
