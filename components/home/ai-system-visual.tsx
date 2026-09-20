"use client";

import { motion, useReducedMotion } from "motion/react";

type Node = {
  id: string;
  label: string;
  x: number;
  y: number;
  w: number;
  emphasis?: boolean;
};

type Edge = {
  from: string;
  to: string;
  delay: number;
};

const NODES: Node[] = [
  { id: "data", label: "Enterprise Data", x: 180, y: 32, w: 148 },
  { id: "retrieval", label: "Retrieval", x: 180, y: 112, w: 108 },
  { id: "agent", label: "Agent", x: 180, y: 208, w: 96, emphasis: true },
  { id: "tools", label: "Tools", x: 66, y: 304, w: 88 },
  { id: "models", label: "Models", x: 180, y: 304, w: 96 },
  { id: "search", label: "Search", x: 294, y: 304, w: 92 },
  { id: "evaluation", label: "Evaluation", x: 180, y: 392, w: 120 },
];

const EDGES: Edge[] = [
  { from: "data", to: "retrieval", delay: 0 },
  { from: "retrieval", to: "agent", delay: 0.25 },
  { from: "agent", to: "tools", delay: 0.5 },
  { from: "agent", to: "models", delay: 0.5 },
  { from: "agent", to: "search", delay: 0.5 },
  { from: "tools", to: "evaluation", delay: 0.9 },
  { from: "models", to: "evaluation", delay: 0.9 },
  { from: "search", to: "evaluation", delay: 0.9 },
];

const nodeByid = Object.fromEntries(NODES.map((n) => [n.id, n]));

function edgePath(edge: Edge) {
  const from = nodeByid[edge.from];
  const to = nodeByid[edge.to];
  const y1 = from.y + 16;
  const y2 = to.y - 16;
  return `M ${from.x} ${y1} L ${to.x} ${y2}`;
}

export function AiSystemVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      role="img"
      aria-label="Diagram: enterprise data flows through retrieval into an agent, which dispatches to tools, models, and search, converging on an evaluation stage."
      className="w-full max-w-[380px] select-none"
    >
      <svg
        viewBox="0 0 360 430"
        fill="none"
        className="w-full overflow-visible"
      >
        {EDGES.map((edge) => (
          <path
            key={`${edge.from}-${edge.to}`}
            d={edgePath(edge)}
            stroke="var(--color-border)"
            strokeWidth={1}
          />
        ))}

        {!reduceMotion &&
          EDGES.map((edge) => (
            <motion.path
              key={`flow-${edge.from}-${edge.to}`}
              d={edgePath(edge)}
              stroke="var(--color-accent-cyan)"
              strokeWidth={1.5}
              strokeDasharray="6 46"
              initial={{ strokeDashoffset: 0, opacity: 0 }}
              animate={{ strokeDashoffset: -52, opacity: [0, 1, 1, 0] }}
              transition={{
                duration: 1.6,
                delay: edge.delay,
                repeat: Infinity,
                repeatDelay: 1.2,
                ease: "linear",
              }}
            />
          ))}

        {NODES.map((node) => (
          <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
            <motion.rect
              x={-node.w / 2}
              y={-16}
              width={node.w}
              height={32}
              rx={8}
              fill={
                node.emphasis
                  ? "var(--color-accent-indigo)"
                  : "var(--color-surface-elevated)"
              }
              stroke="var(--color-border)"
              strokeWidth={1}
              initial={false}
              animate={
                reduceMotion
                  ? {}
                  : {
                      opacity: [0.75, 1, 0.75],
                    }
              }
              transition={{
                duration: 2.4,
                repeat: Infinity,
                delay: NODES.indexOf(node) * 0.15,
                ease: "easeInOut",
              }}
            />
            <text
              textAnchor="middle"
              dominantBaseline="central"
              className="font-mono"
              fontSize={11}
              fill={
                node.emphasis
                  ? "var(--color-text-primary)"
                  : "var(--color-text-secondary)"
              }
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
