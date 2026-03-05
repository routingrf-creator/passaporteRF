"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Map } from "lucide-react";
import { Button } from "@/components/ui/button";

const floatingVariants = {
  animate: {
    y: [0, -12, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  },
};

const floatingDelayed = {
  animate: {
    y: [0, 10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const,
      delay: 1,
    },
  },
};

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-passport-blue via-passport-blue to-passport-dark py-24 sm:py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute left-[10%] top-[15%] size-64 rounded-full bg-white/5 blur-3xl"
        />
        <motion.div
          variants={floatingDelayed}
          animate="animate"
          className="absolute bottom-[10%] right-[8%] size-48 rounded-full bg-passport-coral/10 blur-3xl"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute right-[20%] top-[30%] size-3 rounded-full bg-passport-yellow/60"
        />
        <motion.div
          variants={floatingDelayed}
          animate="animate"
          className="absolute bottom-[25%] left-[15%] size-2 rounded-full bg-white/40"
        />
        <motion.div
          variants={floatingVariants}
          animate="animate"
          className="absolute left-[45%] top-[12%] size-4 rounded-full bg-passport-coral/40"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/90 backdrop-blur-sm"
          >
            <Compass className="size-4" />
            Roteiros personalizados por Rafa & Fe
          </motion.div>

          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Transforme sonhos em roteiros{" "}
            <span className="text-passport-yellow">inesqueciveis</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">
            Nos somos Rafa & Fe e ajudamos voce a viver viagens unicas, com
            roteiros 100% personalizados.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white"
            >
              <Link href="/destinos">
                <Map className="size-4" />
                Explorar destinos
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-passport-coral text-white hover:bg-passport-coral/90"
            >
              <Link href="/roteiros">Criar meu roteiro</Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
