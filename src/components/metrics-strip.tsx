"use client";

import { motion } from "framer-motion";
import { Eye, Heart, Users, Plane, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useT } from "@/contexts/language-context";

const icons = [Eye, Heart, Users, Plane, Globe] as const;
const metricValues = ["+3M", "+100mil", "+1.2M", "Italia", "30+"] as const;
const metricKeys = [
  "visualizacoes",
  "interacoes",
  "alcancadas",
  "proximoDestino",
  "destinosVisitados",
] as const;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const colClasses = [
  "col-span-2 lg:col-span-1 lg:col-start-auto",
  "col-span-2 lg:col-span-1 lg:col-start-auto",
  "col-span-2 lg:col-span-1 lg:col-start-auto",
  "col-span-2 col-start-2 lg:col-span-1 lg:col-start-auto",
  "col-span-2 lg:col-span-1 lg:col-start-auto",
] as const;

interface MetricsStripProps {
  className?: string;
}

export function MetricsStrip({ className }: MetricsStripProps) {
  const t = useT();

  return (
    <section
      className={cn(
        "bg-linear-to-r from-passport-blue to-passport-dark py-12",
        className
      )}
      aria-label="Metrics"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
        className="mx-auto grid max-w-6xl grid-cols-6 gap-4 px-4 sm:gap-5 lg:grid-cols-5"
      >
        {metricKeys.map((key, index) => {
          const Icon = icons[index];
          return (
            <motion.div
              key={key}
              variants={itemVariants}
              whileHover={{ scale: 1.06, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={cn(
                "flex flex-col items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-6 text-center text-white backdrop-blur-md transition-colors duration-300 hover:border-white/25 hover:bg-white/15 sm:px-6",
                colClasses[index]
              )}
            >
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="size-6 text-passport-yellow" />
              </motion.div>
              <span className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {metricValues[index]}
              </span>
              <span className="text-sm text-white/80">{t.metrics[key]}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
