import Link from "next/link";
import { Container } from "@/components/layout/container";
import { StatusBadge } from "@/components/projects/status-badge";
import { specialProjects } from "@/content/special-projects";

export function SpecialProjects() {
  const featured = specialProjects.filter((p) => p.featured);

  return (
    <section className="border-t border-border bg-surface py-24 sm:py-32">
      <Container>
        <div className="grid gap-8 sm:grid-cols-12 sm:items-end">
          <div className="sm:col-span-8">
            <h2 className="text-h2 font-medium tracking-tight text-text-primary">
              Beyond client work.
            </h2>
            <p className="mt-4 max-w-md text-text-secondary">
              Some problems are interesting enough that we build them
              ourselves.
            </p>
          </div>
          <div className="sm:col-span-4 sm:text-right">
            <Link
              href="/projects"
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              Explore projects →
            </Link>
          </div>
        </div>

        <p className="mt-6 font-mono text-meta text-text-secondary">
          Placeholder development data — project names and status are
          illustrative, not final.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {featured.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-border p-8 transition-colors hover:border-accent-indigo/40"
            >
              <div>
                <StatusBadge status={project.status} />
                <h3 className="mt-4 text-lg font-medium tracking-tight text-text-primary transition-transform duration-200 group-hover:translate-x-0.5">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm text-text-secondary">
                  {project.shortDescription}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border px-2.5 py-1 font-mono text-meta text-text-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
