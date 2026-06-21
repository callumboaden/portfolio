"use client";

import { useActionState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";

const budgetOptions = [
  { value: "", label: "Select a budget range" },
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000 – $10,000" },
  { value: "10k-20k", label: "$10,000 – $20,000" },
  { value: "20k-50k", label: "$20,000 – $50,000" },
  { value: "50k-plus", label: "$50,000+" },
  { value: "not-sure", label: "Not sure yet — let's talk" },
];

const initialState: ContactFormState = { status: "idle", message: "" };

export default function Contact() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-slate-700 bg-slate-800/60 text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 transition-all duration-200 text-sm";

  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Accent glow */}
      <div className="accent-orb absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-900/20" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — copy */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4"
            >
              Get in Touch
            </motion.span>
            <motion.h2
              id="contact-heading"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-100 tracking-tight mb-6"
            >
              Let&apos;s Build Something{" "}
              <span className="gradient-text">Extraordinary</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.14 }}
              className="text-slate-400 leading-relaxed mb-8"
            >
              Ready to elevate your digital presence? Tell me about your project
              and I&apos;ll get back to you within 24 hours to schedule a free
              30-minute strategy call.
            </motion.p>

            {/* Contact details */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4"
            >
              {[
                { label: "Email", value: "hello@callumboaden.com.au" },
                { label: "Location", value: "Sydney, NSW, Australia" },
                { label: "Availability", value: "Currently accepting projects" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-slate-500 text-sm w-24 shrink-0">
                    {item.label}
                  </span>
                  <span className="text-slate-300 text-sm">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {state.status === "success" ? (
                /* Success state */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-indigo-500/30 bg-indigo-500/5"
                  role="status"
                  aria-live="polite"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.15, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle size={56} className="text-indigo-400 mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-3">
                    Message Sent!
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    {state.message}
                  </p>
                </motion.div>
              ) : (
                /* Form */
                <motion.form
                  key="form"
                  action={formAction}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col gap-4 p-8 rounded-2xl border border-slate-800 bg-slate-900/60 backdrop-blur-sm"
                  noValidate
                  aria-label="Project enquiry form"
                >
                  {/* Error banner */}
                  <AnimatePresence>
                    {state.status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="flex items-start gap-2 px-4 py-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm"
                        role="alert"
                      >
                        <AlertCircle size={16} className="mt-0.5 shrink-0" />
                        {state.message}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Row: Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                      >
                        Full Name <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Jane Smith"
                        className={inputClass}
                        disabled={isPending}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-300 mb-1.5"
                      >
                        Email Address <span className="text-indigo-400">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="jane@company.com"
                        className={inputClass}
                        disabled={isPending}
                      />
                    </div>
                  </div>

                  {/* Business Name */}
                  <div>
                    <label
                      htmlFor="business"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
                    >
                      Business Name <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      id="business"
                      name="business"
                      type="text"
                      autoComplete="organization"
                      required
                      placeholder="Acme Corporation"
                      className={inputClass}
                      disabled={isPending}
                    />
                  </div>

                  {/* Budget */}
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
                    >
                      Project Budget <span className="text-indigo-400">*</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      className={`${inputClass} cursor-pointer`}
                      disabled={isPending}
                      defaultValue=""
                    >
                      {budgetOptions.map((opt) => (
                        <option
                          key={opt.value}
                          value={opt.value}
                          disabled={opt.value === ""}
                        >
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Project details */}
                  <div>
                    <label
                      htmlFor="details"
                      className="block text-sm font-medium text-slate-300 mb-1.5"
                    >
                      Project Details <span className="text-indigo-400">*</span>
                    </label>
                    <textarea
                      id="details"
                      name="details"
                      required
                      rows={4}
                      placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                      className={`${inputClass} resize-none`}
                      disabled={isPending}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    id="contact-form-submit"
                    type="submit"
                    disabled={isPending}
                    className="mt-2 w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-indigo-500 hover:bg-indigo-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-400/30 hover:scale-[1.01] active:scale-[0.99]"
                  >
                    {isPending ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Enquiry
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-slate-500 mt-1">
                    No spam — ever. I typically respond within 24 hours.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
