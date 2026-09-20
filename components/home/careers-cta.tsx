import Link from "next/link";
import { Container } from "@/components/layout/container";
import { JobRow } from "@/components/careers/job-row";
import { seedJobs } from "@/content/jobs";

export function CareersCta() {
  const featured = seedJobs.filter((job) => job.featured);

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <Container>
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="text-h2 font-medium tracking-tight text-text-primary">
            Come build difficult things.
          </h2>
          <Link
            href="/careers"
            className="hidden shrink-0 text-sm font-medium text-text-secondary transition-colors hover:text-text-primary sm:block"
          >
            All open roles →
          </Link>
        </div>

        <div className="mt-12 border-t border-border">
          {featured.map((job) => (
            <JobRow key={job.slug} job={job} />
          ))}
        </div>

        <Link
          href="/careers"
          className="mt-8 inline-block text-sm font-medium text-text-secondary transition-colors hover:text-text-primary sm:hidden"
        >
          All open roles →
        </Link>
      </Container>
    </section>
  );
}
