"use client";

import { motion } from "framer-motion";
import { Lightbulb, PenTool, Rocket } from "lucide-react";
import { techItems, processSteps } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Lightbulb,
  PenTool,
  Rocket,
};

export default function TechStack() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="techstack-heading"
    >
      {/* Faint accent */}
      <div className="accent-orb absolute top-1/2 right-0 w-96 h-96 bg-indigo-900/15 -translate-y-1/2 translate-x-1/2" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* ── Header ── */}
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            Stack & Process
          </motion.span>
          <motion.h2
            id="techstack-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight"
          >
            Modern Tools,{" "}
            <span className="gradient-text">Proven Process</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto"
          >
            I work with industry-leading tools and follow a structured, collaborative process that keeps you in the loop at every stage.
          </motion.p>
        </div>

        {/* ── Tech grid ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h3 className="text-center text-slate-500 text-sm font-semibold tracking-widest uppercase mb-8">
            My Technology Stack
          </h3>
          <div
            className="flex flex-wrap justify-center gap-3"
            role="list"
            aria-label="Technology stack"
          >
            {techItems.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                role="listitem"
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-slate-800 bg-slate-900/80 hover:border-indigo-500/40 hover:bg-slate-800/60 transition-all duration-200 cursor-default"
              >
                <span
                  className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-xs font-bold text-indigo-400 group-hover:border-indigo-500/40 transition-colors duration-200 select-none"
                  aria-hidden="true"
                >
                  {tech.icon}
                </span>
                <span className="text-sm font-medium text-slate-300 group-hover:text-slate-100 transition-colors duration-200">
                  {tech.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Process timeline ── */}
        <div>
          <h3 className="text-center text-slate-500 text-sm font-semibold tracking-widest uppercase mb-14">
            How We Work Together
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
            {/* Connecting line (desktop) */}
            <div
              className="hidden lg:block absolute top-14 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent"
              aria-hidden="true"
            />

            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: i * 0.12 }}
                  className="relative flex flex-col items-center text-center px-4"
                >
                  {/* Step number ring */}
                  <div className="relative mb-6">
                    <div className="w-28 h-28 rounded-full border border-indigo-500/20 bg-slate-900/80 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border border-indigo-500/30 bg-indigo-500/10 flex items-center justify-center">
                        {Icon && (
                          <Icon size={28} className="text-indigo-400" />
                        )}
                      </div>
                    </div>
                    {/* Step badge */}
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center justify-center border-2 border-slate-950">
                      {step.step}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-slate-100 mb-3">
                    {step.title}
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
