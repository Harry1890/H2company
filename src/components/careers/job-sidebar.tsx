import type { Job } from "@/types";
import { PrimaryButton } from "@/components/ui/primary-button";

function formatSalary(job: Job) {
  if (!job.salary) return null;
  const { min, max } = job.salary;
  return `€${Math.round(min / 1000)}K–€${Math.round(max / 1000)}K`;
}

export function JobSidebar({ job }: { job: Job }) {
  const salary = formatSalary(job);

  return (
    <div className="border border-border p-6 rounded-card lg:sticky lg:top-28">
      <dl className="flex flex-col gap-4">
        <div>
          <dt className="font-mono text-meta uppercase tracking-[0.06em] text-text-soft">
            Location
          </dt>
          <dd className="mt-1 text-body text-text">{job.location}</dd>
        </div>
        <div>
          <dt className="font-mono text-meta uppercase tracking-[0.06em] text-text-soft">
            Department
          </dt>
          <dd className="mt-1 text-body text-text">{job.department}</dd>
        </div>
        <div>
          <dt className="font-mono text-meta uppercase tracking-[0.06em] text-text-soft">
            Employment
          </dt>
          <dd className="mt-1 text-body text-text">{job.employmentType}</dd>
        </div>
        {salary ? (
          <div>
            <dt className="font-mono text-meta uppercase tracking-[0.06em] text-text-soft">
              Compensation
            </dt>
            <dd className="mt-1 text-body text-text">{salary}</dd>
          </div>
        ) : null}
      </dl>
      <PrimaryButton href={`/careers/${job.slug}/apply`} className="mt-6 w-full">
        Apply for this role
      </PrimaryButton>
    </div>
  );
}
