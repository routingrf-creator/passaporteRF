"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
};

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article";
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const Component = motion[as];

  return (
    <Component
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </Component>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
};

export function StaggerReveal({
  children,
  className,
  stagger = 0.08,
}: StaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-8% 0px -8% 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={fadeUp} className={cn(className)}>
      {children}
    </motion.div>
  );
}
