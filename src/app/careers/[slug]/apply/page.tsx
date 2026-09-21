import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { jobs } from "@/data/jobs";
import { ApplyForm } from "@/components/careers/apply-form";

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata(
  props: PageProps<"/careers/[slug]/apply">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) return {};
  return { title: `Apply — ${job.title}` };
}

export default async function ApplyPage(props: PageProps<"/careers/[slug]/apply">) {
  const { slug } = await props.params;
  const job = jobs.find((j) => j.slug === slug);
  if (!job) notFound();

  return (
    <Section spacing="default" tone="light">
      <Container className="max-w-[var(--width-longform)]">
        <Link
          href={`/careers/${job.slug}`}
          className="inline-flex items-center gap-1.5 text-small font-medium text-text-muted hover:text-text"
        >
          <ArrowLeft className="size-3.5" aria-hidden />
          {job.title}
        </Link>

        <h1 className="mt-6 text-h1 font-medium text-text">Apply for {job.title}</h1>
        <p className="mt-3 text-body text-text-muted">
          {job.location} · {job.department} · {job.employmentType}
        </p>

        <div className="mt-12">
          <ApplyForm jobTitle={job.title} />
        </div>
      </Container>
    </Section>
  );
}
