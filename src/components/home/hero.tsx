"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { AgentGraph } from "@/components/visuals/agent-graph";

const easing = [0.22, 1, 0.36, 1] as const;

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: easing } },
};

export function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
        <motion.div
          className="absolute -top-40 -left-32 size-140 rounded-full opacity-40 blur-[110px]"
          style={{ background: "var(--brand-blue-mid)" }}
          animate={{ x: [0, 40, -20, 0], y: [0, 30, -10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -top-20 right-[-10%] size-130 rounded-full opacity-30 blur-[120px]"
          style={{ background: "var(--brand-cyan)" }}
          animate={{ x: [0, -30, 20, 0], y: [0, 20, -20, 0] }}
          transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--bg)_72%)]" />
      </div>

      <Container className="grid gap-12 pt-16 pb-20 lg:grid-cols-12 lg:items-center lg:pt-24 lg:pb-28">
        <motion.div variants={container} initial="hidden" animate="show" className="lg:col-span-7">
          <motion.div variants={item}>
            <Eyebrow>Independent AI Engineering</Eyebrow>
          </motion.div>
          <h1 className="mt-5 text-display-xl font-medium text-text">
            <motion.span variants={item} className="block overflow-hidden">
              We build AI systems
            </motion.span>
            <motion.span variants={item} className="block overflow-hidden">
              that work in the{" "}
              <span className="bg-(image:--gradient-brand) bg-clip-text text-transparent">
                real world.
              </span>
            </motion.span>
          </h1>
          <motion.p variants={item} className="mt-6 max-w-[var(--width-text)] text-body-l text-text-muted">
            Enterprise AI, machine learning, and agentic systems — designed, built, and deployed by
            experienced engineering teams.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton href="/work">Explore our work</PrimaryButton>
            <SecondaryButton href="/careers">Join the team</SecondaryButton>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3, ease: easing }}
          className="lg:col-span-5"
        >
          <AgentGraph />
        </motion.div>
      </Container>
    </div>
  );
}
