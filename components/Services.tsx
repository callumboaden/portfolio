"use client";

import { motion, type Variants } from "framer-motion";
import { Palette, Code2, TrendingUp, Check } from "lucide-react";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Palette,
  Code2,
  TrendingUp,
};

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="services-heading"
    >
      {/* Section label */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4"
          >
            What I Do
          </motion.span>

          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight"
          >
            End-to-End Digital{" "}
            <span className="gradient-text">Expertise</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-4 text-slate-400 text-lg max-w-2xl mx-auto"
          >
            From initial strategy to final deployment — every aspect of your
            digital presence handled with precision and care.
          </motion.p>
        </div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {services.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <motion.article
                key={service.id}
                variants={cardVariants}
                className="group relative flex flex-col p-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm hover:border-indigo-500/40 transition-all duration-300 hover:bg-slate-900/80"
                aria-label={service.title}
              >
                {/* Gradient top line on hover */}
                <div className="absolute inset-x-0 top-0 h-px rounded-t-2xl bg-gradient-to-r from-transparent via-indigo-500/0 to-transparent group-hover:via-indigo-500/60 transition-all duration-500" />

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 group-hover:bg-indigo-500/20 group-hover:border-indigo-500/40 transition-all duration-300">
                  {Icon && (
                    <Icon
                      size={22}
                      className="text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300"
                    />
                  )}
                </div>

                {/* Number badge */}
                <span className="absolute top-8 right-8 text-slate-700 font-bold text-3xl font-mono select-none group-hover:text-slate-600 transition-colors duration-300">
                  0{index + 1}
                </span>

                <h3 className="text-xl font-bold text-slate-100 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Feature list */}
                <ul className="mt-auto flex flex-col gap-2.5" role="list">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-400"
                    >
                      <Check
                        size={15}
                        className="text-indigo-400 mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
