"use client";

import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { PrimaryButton } from "@/components/ui/primary-button";
import { SecondaryButton } from "@/components/ui/secondary-button";
import { AgentGraph } from "@/components/visuals/agent-graph";

export function Hero() {
  return (
    <Container className="grid gap-12 pt-16 pb-20 lg:grid-cols-12 lg:items-center lg:pt-24 lg:pb-28">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="lg:col-span-7"
      >
        <Eyebrow>Independent AI Engineering</Eyebrow>
        <h1 className="mt-5 text-display-xl font-medium text-text">
          We build AI systems
          <br />
          that work in the real world.
        </h1>
        <p className="mt-6 max-w-[var(--width-text)] text-body-l text-text-muted">
          Enterprise AI, machine learning, and agentic systems — designed, built, and deployed by
          experienced engineering teams.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <PrimaryButton href="/work">Explore our work</PrimaryButton>
          <SecondaryButton href="/careers">Join the team</SecondaryButton>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        className="lg:col-span-5"
      >
        <AgentGraph />
      </motion.div>
    </Container>
  );
}
