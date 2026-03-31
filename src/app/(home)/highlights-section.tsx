"use client";

import { motion } from "framer-motion";
import { Hotel, Globe, Lightbulb } from "lucide-react";
import { MagicCard } from "@/components/magic-card";
import { useT } from "@/contexts/language-context";

const icons = [Hotel, Globe, Lightbulb];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function HighlightsSection() {
  const t = useT();

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {t.highlights.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <motion.div key={index} variants={cardVariants}>
                <MagicCard className="text-center">
                  <div className="mx-auto mb-4 inline-flex rounded-2xl border border-passport-blue/10 bg-passport-blue/5 p-4 shadow-[inset_0_1px_1px_rgba(255,255,255,0.6)] backdrop-blur-sm">
                    <Icon className="size-7 text-passport-blue" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-passport-dark">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </MagicCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
