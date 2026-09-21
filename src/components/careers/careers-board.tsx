"use client";

import { useMemo, useState } from "react";
import type { Job } from "@/types";
import { JobFilter } from "./job-filter";
import { JobRow } from "./job-row";

const ALL = "All";

export function CareersBoard({ jobs }: { jobs: Job[] }) {
  const departments = useMemo(() => [ALL, ...new Set(jobs.map((j) => j.department))], [jobs]);
  const locations = useMemo(() => [ALL, ...new Set(jobs.map((j) => j.location))], [jobs]);
  const employmentTypes = useMemo(
    () => [ALL, ...new Set(jobs.map((j) => j.employmentType))],
    [jobs],
  );

  const [department, setDepartment] = useState(ALL);
  const [location, setLocation] = useState(ALL);
  const [employment, setEmployment] = useState(ALL);

  const visible = jobs.filter(
    (job) =>
      (department === ALL || job.department === department) &&
      (location === ALL || job.location === location) &&
      (employment === ALL || job.employmentType === employment),
  );

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <div className="lg:col-span-3">
        <JobFilter
          departments={departments}
          department={department}
          onDepartmentChange={setDepartment}
          locations={locations}
          location={location}
          onLocationChange={setLocation}
          employmentTypes={employmentTypes}
          employment={employment}
          onEmploymentChange={setEmployment}
        />
      </div>
      <div className="lg:col-span-9">
        {visible.length > 0 ? (
          <div className="border-b border-border">
            {visible.map((job) => (
              <JobRow key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <p className="text-body text-text-muted">No open roles match these filters right now.</p>
        )}
      </div>
    </div>
  );
}
