"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Gem, Sparkles, Plane, ArrowRight } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { useT } from "@/contexts/language-context";

const valorIcons = [Heart, Gem, Sparkles];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.12 },
  }),
};

const fadeLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

function useReveal() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return { ref, inView };
}

export function SobreContent() {
  const t = useT();
  const ts = t.sobre;

  const valoresReveal = useReveal();
  const timelineReveal = useReveal();
  const ctaReveal = useReveal();

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-passport-blue to-passport-dark py-20 text-white">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-size-[500px] bg-bottom-right bg-no-repeat opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* Text */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              animate="visible"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <Badge className="mb-4 bg-passport-coral/20 text-passport-coral border-passport-coral/30">
                  <Plane className="size-3" />
                  {ts.badge}
                </Badge>
              </motion.div>

              <motion.h1
                className="text-4xl font-bold tracking-tight sm:text-5xl"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
              >
                {ts.title}
              </motion.h1>

              {[ts.p1, ts.p2, ts.p3].map((p, i) => (
                <motion.p
                  key={i}
                  className="mt-4 text-lg leading-relaxed text-white/80"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.35 + i * 0.13 }}
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>

            {/* Image */}
            <motion.div
              className="flex items-center justify-center"
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.25 }}
            >
              <motion.div
                className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border-4 border-white/20 shadow-2xl"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Image
                  src="/about.jpg"
                  alt="Rafa & Fe"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 384px"
                  priority
                />
                {/* Overlay shimmer on hover */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-tr from-passport-blue/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Valores ──────────────────────────────────────────────────── */}
      <section className="py-16" ref={valoresReveal.ref}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={valoresReveal.inView ? "visible" : "hidden"}
          >
            <SectionHeading
              title={ts.valoresTitle}
              subtitle={ts.valoresSubtitle}
              centered
            />
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ts.valores.map((valor, index) => {
              const Icon = valorIcons[index];
              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  animate={valoresReveal.inView ? "visible" : "hidden"}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <Card className="text-center h-full group cursor-default transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <motion.div
                        className="mx-auto flex size-14 items-center justify-center rounded-full bg-passport-coral/10"
                        whileHover={{ scale: 1.18, rotate: 8 }}
                        transition={{ type: "spring", stiffness: 350, damping: 15 }}
                      >
                        <Icon className="size-7 text-passport-coral transition-colors group-hover:text-passport-coral" />
                      </motion.div>
                      <CardTitle className="text-lg text-passport-dark">
                        {valor.titulo}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        {valor.descricao}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Trajetória ───────────────────────────────────────────────── */}
      <section className="bg-passport-cream/60 py-16" ref={timelineReveal.ref}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={timelineReveal.inView ? "visible" : "hidden"}
          >
            <SectionHeading
              title={ts.trajetoriaTitle}
              subtitle={ts.trajetoriaSubtitle}
              centered
            />
          </motion.div>

          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-passport-blue/20 sm:left-1/2 sm:-translate-x-px" />
            <div className="space-y-8">
              {ts.timeline.map((item, i) => (
                <motion.div
                  key={item.ano}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  animate={timelineReveal.inView ? "visible" : "hidden"}
                  className={`relative flex items-center gap-4 sm:gap-8 ${
                    i % 2 === 0
                      ? "sm:flex-row"
                      : "sm:flex-row-reverse sm:text-right"
                  }`}
                >
                  <div className="hidden flex-1 sm:block" />

                  {/* Year bubble */}
                  <motion.div
                    className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-passport-blue bg-white text-xs font-bold text-passport-blue sm:size-10"
                    whileHover={{ scale: 1.2, backgroundColor: "#1e3a5f", color: "#ffffff" }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  >
                    {item.ano.slice(2)}
                  </motion.div>

                  <div className="flex-1">
                    <motion.div
                      whileHover={{ x: i % 2 === 0 ? 4 : -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Card className="inline-block hover:shadow-md transition-shadow">
                        <CardContent className="py-4">
                          <span className="text-xs font-bold text-passport-coral">
                            {item.ano}
                          </span>
                          <p className="mt-1 text-sm font-medium text-passport-dark">
                            {item.evento}
                          </p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section
        className="bg-linear-to-br from-passport-coral to-passport-coral/80 py-16 text-white"
        ref={ctaReveal.ref}
      >
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold tracking-tight sm:text-4xl"
            variants={fadeUp}
            initial="hidden"
            animate={ctaReveal.inView ? "visible" : "hidden"}
          >
            {ts.ctaTitle}
          </motion.h2>

          <motion.p
            className="mx-auto mt-4 max-w-lg text-lg text-white/80"
            custom={1}
            variants={fadeUp}
            initial="hidden"
            animate={ctaReveal.inView ? "visible" : "hidden"}
          >
            {ts.ctaSubtitle}
          </motion.p>

          <motion.div
            custom={2}
            variants={fadeUp}
            initial="hidden"
            animate={ctaReveal.inView ? "visible" : "hidden"}
          >
            <motion.div
              className="mt-8 inline-block"
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380, damping: 18 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-passport-coral hover:bg-white/90"
              >
                <Link href="/roteiros">
                  {ts.ctaButton}
                  <motion.span
                    className="inline-flex"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
                  >
                    <ArrowRight className="size-4" />
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
