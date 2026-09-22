import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Job } from "@/types";

function formatSalary(job: Job) {
  if (!job.salary) return null;
  const { min, max } = job.salary;
  return `$${Math.round(min / 1000)}K–$${Math.round(max / 1000)}K`;
}

export function JobRow({ job }: { job: Job }) {
  const salary = formatSalary(job);

  return (
    <Link
      href={`/careers/${job.slug}`}
      className="group flex flex-col gap-2 border-t border-border py-6 transition-all duration-300 hover:bg-bg-soft sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-2 sm:hover:px-4"
    >
      <div>
        <h3 className="text-h4 font-medium text-text">{job.title}</h3>
        <p className="mt-1 font-mono text-meta uppercase tracking-[0.04em] text-text-soft">
          {job.department} · {job.location}
        </p>
      </div>
      <div className="flex items-center gap-4">
        {salary ? <span className="text-small text-text-muted">{salary}</span> : null}
        <ArrowRight
          className="size-4 text-text-soft transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-text"
          aria-hidden
        />
      </div>
    </Link>
  );
}
