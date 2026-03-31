"use client";

import { motion } from "framer-motion";
import { Check, X, MapPin, Star, Clock, MessageCircle } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { RoteiroForm } from "@/components/roteiro-form";
import { useT } from "@/contexts/language-context";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

const fadeRight = {
  hidden: { opacity: 0, x: 24 },
  show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export function RoteirosContent() {
  const t = useT();
  const tr = t.roteiros;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-passport-blue to-passport-dark py-20 text-white">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-size-[600px] bg-bottom-right bg-no-repeat opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Badge className="mb-4 bg-passport-coral/20 text-passport-coral border-passport-coral/30">
                <Star className="size-3" />
                {tr.badge}
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              {tr.title}
            </motion.h1>
            <motion.p
              className="mt-4 text-lg leading-relaxed text-white/80"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
            >
              {tr.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Serviços ─────────────────────────────────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={tr.servicosTitle}
            subtitle={tr.servicosSubtitle}
            centered
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {tr.servicos.map((servico, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Card
                  className={
                    index === 0
                      ? "relative h-full border-2 border-passport-coral shadow-lg transition-shadow hover:shadow-xl"
                      : "h-full border transition-shadow hover:shadow-md"
                  }
                >
                  <CardHeader>
                    {servico.badge && (
                      <Badge className="absolute -top-3 left-4 bg-passport-coral text-white">
                        {servico.badge}
                      </Badge>
                    )}
                    <CardTitle className="text-lg text-passport-dark">
                      {servico.titulo}
                    </CardTitle>
                    <CardDescription>{servico.descricao}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <motion.span
                      className="text-xl font-bold text-passport-blue"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + index * 0.1, type: "spring", stiffness: 260 }}
                    >
                      {servico.preco}
                    </motion.span>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Inclusos / Não Inclusos ───────────────────────────── */}
      <section className="bg-passport-cream/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Inclusos */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              <motion.h3
                variants={fadeLeft}
                className="mb-6 flex items-center gap-2 text-xl font-bold text-passport-dark"
              >
                <Check className="size-5 text-green-600" />
                {tr.inclusosTitle}
              </motion.h3>
              <ul className="space-y-3">
                {tr.incluso.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeLeft}
                    className="flex items-center gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Check className="size-4" />
                    </span>
                    <span className="text-sm text-passport-ink/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Não Inclusos */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              <motion.h3
                variants={fadeRight}
                className="mb-6 flex items-center gap-2 text-xl font-bold text-passport-dark"
              >
                <X className="size-5 text-red-500" />
                {tr.naoInclusosTitle}
              </motion.h3>
              <ul className="space-y-3">
                {tr.naoIncluso.map((item, i) => (
                  <motion.li
                    key={i}
                    variants={fadeRight}
                    className="flex items-center gap-3"
                    whileHover={{ x: -4 }}
                    transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  >
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                      <X className="size-4" />
                    </span>
                    <span className="text-sm text-passport-ink/80">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Formulário ───────────────────────────────────────── */}
      <section className="py-16" id="formulario">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={tr.formTitle}
            subtitle={tr.formSubtitle}
            centered
          />
          <RoteiroForm />
        </div>
      </section>

      {/* ── Stats bar ────────────────────────────────────────── */}
      <section className="bg-passport-dark py-12">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8"
        >
          <div className="flex flex-wrap justify-center gap-8 text-white/70">
            {[
              { Icon: MapPin, text: tr.stats[0] },
              { Icon: Clock, text: tr.stats[1] },
              { Icon: MessageCircle, text: tr.stats[2] },
            ].map(({ Icon, text }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.07, color: "#ffffff" }}
                className="flex items-center gap-2"
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  whileHover={{ rotate: 15, scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Icon className="size-5 text-passport-coral" />
                </motion.div>
                <span className="text-sm">{text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
}
