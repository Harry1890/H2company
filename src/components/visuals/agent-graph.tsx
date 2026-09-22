"use client";

import { useId, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
};

const nodes: Node[] = [
  { id: "agent", label: "Agent", x: 260, y: 170 },
  { id: "planner", label: "Planner", x: 80, y: 60 },
  { id: "tools", label: "Tool Use", x: 440, y: 60 },
  { id: "memory", label: "State", x: 440, y: 280 },
  { id: "retrieval", label: "Retrieval", x: 80, y: 280 },
  { id: "approval", label: "Human Approval", x: 260, y: 340 },
];

const edges: [string, string][] = [
  ["agent", "planner"],
  ["agent", "tools"],
  ["agent", "memory"],
  ["agent", "retrieval"],
  ["agent", "approval"],
];

function findNode(id: string) {
  return nodes.find((n) => n.id === id)!;
}

export function AgentGraph({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const gradientId = useId();
  const agent = findNode("agent");

  return (
    <svg
      viewBox="0 0 520 400"
      className={cn("h-auto w-full text-border-strong", className)}
      role="img"
      aria-label="Diagram of an agent architecture: a central agent node connected to planning, tool use, state, retrieval, and human-approval nodes."
    >
      <defs>
        <radialGradient id={gradientId} cx="50%" cy="45%" r="65%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.16" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="520" height="400" fill={`url(#${gradientId})`} />

      <text x="16" y="24" className="fill-text-soft font-mono text-[10px] uppercase tracking-[0.08em]">
        system / agent_graph
      </text>

      {edges.map(([from, to], i) => {
        const a = findNode(from);
        const b = findNode(to);
        const isActive = active === from || active === to;
        return (
          <motion.line
            key={`${from}-${to}`}
            x1={a.x}
            y1={a.y}
            x2={b.x}
            y2={b.y}
            stroke={isActive ? "var(--accent)" : "currentColor"}
            strokeWidth={isActive ? 1.5 : 1}
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: "easeOut" }}
          />
        );
      })}

      {/* one-time focus pulse behind the agent node */}
      <motion.circle
        cx={agent.x}
        cy={agent.y}
        r={8}
        fill="none"
        stroke="var(--accent)"
        strokeWidth={1}
        initial={{ scale: 1, opacity: 0.6 }}
        whileInView={{ scale: 3.2, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, delay: 0.5, ease: "easeOut" }}
      />
      <circle
        cx={agent.x}
        cy={agent.y}
        r={16}
        fill="none"
        stroke="currentColor"
        strokeOpacity={0.3}
        strokeDasharray="2 4"
      />

      {nodes.map((node) => {
        const isActive = active === node.id;
        const isAgent = node.id === "agent";
        return (
          <g
            key={node.id}
            onPointerEnter={() => setActive(node.id)}
            onPointerLeave={() => setActive(null)}
            className="cursor-default"
          >
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={isAgent ? 8 : 5.5}
              fill={isActive || isAgent ? "var(--accent)" : "var(--surface)"}
              stroke={isActive || isAgent ? "var(--accent)" : "currentColor"}
              strokeWidth={1}
              animate={{ scale: isActive ? 1.15 : 1 }}
              transition={{ duration: 0.2 }}
            />
            <text
              x={node.x}
              y={node.y + (node.y > 200 ? 22 : -14)}
              textAnchor="middle"
              className={cn(
                "font-mono text-[11px] uppercase tracking-[0.04em] transition-[fill] duration-200",
                isActive ? "fill-text" : "fill-text-muted",
              )}
            >
              {node.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
