"use client";

import { motion } from "framer-motion";
import { ClipboardList, PenTool, MessageCircle, Plane } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";

const steps = [
  {
    icon: ClipboardList,
    title: "Preencha o formulario",
    description: "Conte pra gente seu destino, datas e estilo de viagem.",
  },
  {
    icon: PenTool,
    title: "Montamos seu roteiro",
    description:
      "Criamos um plano exclusivo com dicas, hoteis e experiencias.",
  },
  {
    icon: MessageCircle,
    title: "Ajustamos juntos",
    description: "Voce revisa e nos ajustamos ate ficar perfeito.",
  },
  {
    icon: Plane,
    title: "Embarque tranquilo",
    description: "Viaje com tudo planejado e aproveite cada momento.",
  },
];

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
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Como funciona" centered />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={itemVariants}
              className="relative text-center"
            >
              {index < steps.length - 1 && (
                <div className="pointer-events-none absolute left-[60%] top-8 hidden h-px w-[calc(100%-20%)] bg-border lg:block" />
              )}
              <div className="relative mx-auto mb-4 inline-flex size-16 items-center justify-center rounded-2xl bg-passport-blue/10">
                <step.icon className="size-7 text-passport-blue" />
                <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-passport-coral text-xs font-bold text-white">
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}
