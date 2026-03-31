"use client";

import { motion } from "framer-motion";
import { ClipboardList, PenTool, MessageCircle, Plane } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useT } from "@/contexts/language-context";

const icons = [ClipboardList, PenTool, MessageCircle, Plane];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function HowItWorks() {
  const t = useT();

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.howItWorks.title} centered />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {t.howItWorks.steps.map((step, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative text-center"
              >
                {index < t.howItWorks.steps.length - 1 && (
                  <div className="pointer-events-none absolute left-[60%] top-10 hidden h-px w-[calc(100%-20%)] bg-gradient-to-r from-passport-blue/20 to-transparent lg:block" />
                )}
                <div className="relative mx-auto mb-5 inline-flex size-20 items-center justify-center rounded-3xl border border-white/50 bg-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.06),inset_0_1px_1px_rgba(255,255,255,0.8)] backdrop-blur-xl transition-all duration-500 group-hover:border-white/70 group-hover:bg-white/70 group-hover:shadow-[0_12px_40px_rgba(30,111,175,0.12)]">
                  <Icon className="size-8 text-passport-blue" />
                  <span className="absolute -right-1 -top-1 flex size-7 items-center justify-center rounded-full border border-white/50 bg-passport-coral text-xs font-bold text-white shadow-lg">
                    {index + 1}
                  </span>
                </div>
                <h3 className="mb-2 text-base font-semibold text-passport-dark">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
