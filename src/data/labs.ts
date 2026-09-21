import type { LabProject } from "@/types";

export const labProjects: LabProject[] = [
  {
    slug: "persistent-agents",
    title: "Persistent Agents",
    description:
      "Agents that maintain progress and state across long-running workflows, restarts, and human approvals.",
    status: "Prototype",
  },
  {
    slug: "adaptive-retrieval",
    title: "Adaptive Retrieval",
    description:
      "Retrieval systems that dynamically select context based on user, task, and model behavior.",
    status: "Research",
  },
  {
    slug: "agent-evaluation",
    title: "Agent Evaluation",
    description:
      "Infrastructure for measuring tool use, reliability, trajectory quality, and long-horizon completion.",
    status: "Active",
  },
  {
    slug: "workflow-memory",
    title: "Workflow Memory",
    description:
      "Shared memory structures that let long-running workflows resume cleanly after days or weeks of inactivity.",
    status: "Research",
  },
];
