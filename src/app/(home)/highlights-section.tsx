"use client";

import { motion } from "framer-motion";
import { Hotel, Globe, Lightbulb } from "lucide-react";
import { MagicCard } from "@/components/magic-card";

const highlights = [
  {
    icon: Hotel,
    title: "Hoteis premium",
    description:
      "Selecionamos as melhores hospedagens com o melhor custo-beneficio.",
  },
  {
    icon: Globe,
    title: "Experiencias culturais",
    description:
      "Roteiros que vao alem do obvio, com experiencias autenticas.",
  },
  {
    icon: Lightbulb,
    title: "Dicas praticas",
    description:
      "Tudo que voce precisa saber antes e durante a viagem.",
  },
];

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
          {highlights.map((item) => (
            <motion.div key={item.title} variants={cardVariants}>
              <MagicCard className="text-center">
                <div className="mb-4 inline-flex rounded-xl bg-passport-blue/10 p-3">
                  <item.icon className="size-6 text-passport-blue" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-passport-dark">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </MagicCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
