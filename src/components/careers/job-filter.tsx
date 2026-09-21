"use client";

import { cn } from "@/lib/utils";

function FilterGroup({
  label,
  options,
  active,
  onChange,
}: {
  label: string;
  options: string[];
  active: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="font-mono text-meta uppercase tracking-[0.06em] text-text-soft">{label}</p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((option) => {
          const isActive = option === active;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(option)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-small font-medium transition-colors",
                isActive
                  ? "border-text bg-text text-text-inverse"
                  : "border-border-strong text-text-muted hover:text-text",
              )}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function JobFilter({
  departments,
  department,
  onDepartmentChange,
  locations,
  location,
  onLocationChange,
  employmentTypes,
  employment,
  onEmploymentChange,
}: {
  departments: string[];
  department: string;
  onDepartmentChange: (value: string) => void;
  locations: string[];
  location: string;
  onLocationChange: (value: string) => void;
  employmentTypes: string[];
  employment: string;
  onEmploymentChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-6">
      <FilterGroup label="Department" options={departments} active={department} onChange={onDepartmentChange} />
      <FilterGroup label="Location" options={locations} active={location} onChange={onLocationChange} />
      <FilterGroup label="Employment" options={employmentTypes} active={employment} onChange={onEmploymentChange} />
    </div>
  );
}
