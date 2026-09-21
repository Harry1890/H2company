"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const layers = [
  { label: "Interfaces", detail: "Applications / APIs / Agents" },
  { label: "Orchestration", detail: "Routing / Planning / Tool Use" },
  { label: "Retrieval & Data", detail: "Enterprise Search / Context" },
  { label: "Models", detail: "Gateways / Evaluation / Inference" },
  { label: "Observability", detail: "Tracing / Evaluation / Governance" },
];

export function ArchitectureDiagram({
  className,
  inverse = false,
}: {
  className?: string;
  inverse?: boolean;
}) {
  return (
    <div
      className={cn("flex flex-col", className)}
      role="img"
      aria-label="Layered AI platform architecture diagram, from interfaces down through orchestration, retrieval and data, models, and observability."
    >
      {layers.map((layer, index) => (
        <motion.div
          key={layer.label}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
          className={cn(
            "flex items-center justify-between border-x border-t px-5 py-4 last:border-b",
            inverse ? "border-border-dark" : "border-border",
          )}
        >
          <span
            className={cn(
              "text-small font-medium",
              inverse ? "text-text-inverse" : "text-text",
            )}
          >
            {layer.label}
          </span>
          <span
            className={cn(
              "font-mono text-meta uppercase tracking-[0.04em]",
              inverse ? "text-text-inverse-muted" : "text-text-soft",
            )}
          >
            {layer.detail}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
