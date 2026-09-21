"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types";
import { ProjectCard } from "./project-card";

const filters: ("All" | ProjectCategory)[] = [
  "All",
  "Agentic AI",
  "Enterprise AI",
  "Machine Learning",
  "AI Infrastructure",
  "Applications",
];

export function WorkGrid({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div
        className="flex flex-wrap gap-2"
        role="group"
        aria-label="Filter work by category"
      >
        {filters.map((filter) => {
          const isActive = filter === active;
          return (
            <button
              key={filter}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(filter)}
              className={cn(
                "rounded-full border px-4 py-2 text-small font-medium transition-colors",
                isActive
                  ? "border-text bg-text text-text-inverse"
                  : "border-border-strong text-text-muted hover:text-text",
              )}
            >
              {filter}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {visible.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
        {visible.length === 0 ? (
          <p className="text-body text-text-muted">No projects in this category yet.</p>
        ) : null}
      </div>
    </div>
  );
}
