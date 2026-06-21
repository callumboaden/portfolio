"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid-bg"
      aria-label="Hero section"
    >
      {/* Accent orbs */}
      <div
        className="accent-orb absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20"
        aria-hidden="true"
      />
      <div
        className="accent-orb absolute -bottom-20 -right-20 w-80 h-80 bg-indigo-500/15"
        aria-hidden="true"
      />
      <div
        className="accent-orb absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-900/20"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center gap-6"
        >
          {/* Badge */}
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs font-medium tracking-wide uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              Available for new projects
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-100 max-w-4xl leading-[1.1]"
          >
            High-Performance Websites{" "}
            <span className="gradient-text">Engineered to Scale</span> Your
            Business.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed"
          >
            Boutique web design and full-stack development for ambitious brands.
            Combining creative strategy with modern code — built to convert and
            built to last.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-2"
          >
            <button
              id="hero-cta-work"
              onClick={() => scrollTo("work")}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-400/40 hover:scale-[1.02] active:scale-[0.98]"
            >
              View My Work
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </button>
            <button
              id="hero-cta-contact"
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-slate-100 font-semibold transition-all duration-200 hover:bg-slate-800/50 active:scale-[0.98]"
            >
              <MessageCircle size={18} />
              Let&apos;s Talk
            </button>
          </motion.div>

          {/* Social proof row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 mt-6 text-slate-500 text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1">
                {["N", "A", "V", "H"].map((initial, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-slate-700 border-2 border-slate-950 flex items-center justify-center text-xs font-semibold text-slate-300"
                  >
                    {initial}
                  </div>
                ))}
              </div>
              <span>20+ happy clients</span>
            </div>
            <span className="w-px h-4 bg-slate-700" aria-hidden="true" />
            <span>Based in Australia · Working globally</span>
            <span className="w-px h-4 bg-slate-700" aria-hidden="true" />
            <span>Next.js · Vercel · Figma</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent pointer-events-none"
        aria-hidden="true"
      />
    </section>
  );
}
