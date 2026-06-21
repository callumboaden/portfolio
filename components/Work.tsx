"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55 },
  },
};

// Consistent placeholder gradients per project
const gradients = [
  "from-indigo-900/60 via-slate-900 to-slate-900",
  "from-violet-900/50 via-slate-900 to-slate-900",
  "from-blue-900/50 via-slate-900 to-slate-900",
  "from-indigo-800/40 via-slate-900 to-slate-900",
  "from-purple-900/50 via-slate-900 to-slate-900",
  "from-sky-900/40 via-slate-900 to-slate-900",
];

export default function Work() {
  return (
    <section
      id="work"
      className="py-24 lg:py-32 relative"
      aria-labelledby="work-heading"
    >
      {/* Subtle separator line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-slate-700/50" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Selected Work
            </motion.span>
            <motion.h2
              id="work-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight"
            >
              Projects That{" "}
              <span className="gradient-text">Drive Results</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="text-slate-400 max-w-sm md:text-right"
          >
            A selection of recent client work across industries.
          </motion.p>
        </div>

        {/* Project grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              variants={cardVariants}
              className="group relative flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/30"
              aria-label={project.title}
            >
              {/* Placeholder image area */}
              <div
                className={`relative h-48 bg-gradient-to-br ${gradients[i % gradients.length]} flex items-center justify-center overflow-hidden`}
              >
                {/* Grid lines decoration */}
                <div className="absolute inset-0 dot-grid-bg opacity-30" aria-hidden="true" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-slate-600 font-bold text-5xl tracking-tighter select-none">
                    {project.title.split(" ").map(w => w[0]).join("").slice(0, 3)}
                  </span>
                </div>
                {/* Industry badge overlay */}
                <div className="absolute bottom-3 left-3">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950/70 backdrop-blur-sm border border-slate-700/50 text-slate-300 text-xs font-medium">
                    {project.industry}
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="flex flex-col flex-1 p-6">
                <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-indigo-300 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {/* Tech stack badges */}
                <div className="flex flex-wrap gap-2 mb-5" role="list" aria-label="Technologies used">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      role="listitem"
                      className="px-2.5 py-1 rounded-md bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <a
                  href={project.caseStudyUrl ?? "#"}
                  className="group/btn inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors duration-200 self-start"
                  aria-label={`View case study for ${project.title}`}
                >
                  View Case Study
                  <ArrowUpRight
                    size={16}
                    className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200"
                  />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
