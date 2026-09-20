import Link from "next/link";
import type { SeedJob } from "@/content/jobs";

export function JobRow({ job }: { job: SeedJob }) {
  return (
    <Link
      href={`/careers/${job.slug}`}
      className="group flex items-center justify-between border-b border-border py-6 transition-colors hover:border-accent-blue/40"
    >
      <div>
        <h3 className="font-medium tracking-tight text-text-primary transition-transform duration-200 group-hover:translate-x-0.5">
          {job.title}
        </h3>
        <p className="mt-1 text-sm text-text-secondary">
          {job.department} · {job.workplaceType} / {job.location}
        </p>
      </div>
      <span
        aria-hidden
        className="flex items-center text-text-primary transition-all duration-200 group-hover:gap-2"
      >
        <span className="w-0 overflow-hidden border-t border-current transition-all duration-200 group-hover:w-6" />
        →
      </span>
    </Link>
  );
}
