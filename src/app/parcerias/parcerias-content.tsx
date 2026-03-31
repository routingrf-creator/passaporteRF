"use client";

import { motion } from "framer-motion";
import {
  Hotel,
  UtensilsCrossed,
  ShoppingBag,
  Eye,
  Globe,
  TrendingUp,
  ExternalLink,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { ParceriaDialog } from "@/components/parceria-dialog";
import { useT } from "@/contexts/language-context";

const formatoIcons = [Hotel, UtensilsCrossed, ShoppingBag];
const metricaIcons = [Eye, TrendingUp, Globe, Globe];

const parceiros = [
  {
    nome: "GetYourGuide",
    href: "https://www.getyourguide.com",
    logo: "https://cdn.getyourguide.com/tf/assets/static/logos/gyg-logo.svg",
  },
  {
    nome: "NH Hotels",
    href: "https://www.nh-hotels.com",
    logo: "/Logo_NH_Hotels.svg",
  },
  {
    nome: "Booking.com",
    href: "https://www.booking.com",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Booking.com_logo.svg/200px-Booking.com_logo.svg.png",
  },
  {
    nome: "Real Seguros Viagem",
    href: "https://www.seguroviagem.srv.br",
    logo: "/real seguro.svg",
  },
];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.48, ease: "easeOut" as const } },
};

export function ParceriasContent() {
  const t = useT();
  const tp = t.parcerias;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-passport-blue to-passport-dark py-20 text-white">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-size-[500px] bg-bottom-right bg-no-repeat opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
            >
              <Badge className="mb-4 bg-passport-yellow/20 text-passport-yellow border-passport-yellow/30">
                {tp.badge}
              </Badge>
            </motion.div>
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              {tp.title}
            </motion.h1>
            <motion.p
              className="mt-4 text-lg leading-relaxed text-white/80"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.25 }}
            >
              {tp.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Formatos ─────────────────────────────────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={tp.formatosTitle}
            subtitle={tp.formatosSubtitle}
            centered
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {tp.formatos.map((formato, index) => {
              const Icon = formatoIcons[index];
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <Card className="h-full text-center transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <motion.div
                        className="mx-auto flex size-14 items-center justify-center rounded-full bg-passport-blue/10"
                        whileHover={{ scale: 1.18, rotate: 10 }}
                        transition={{ type: "spring", stiffness: 360, damping: 14 }}
                      >
                        <Icon className="size-7 text-passport-blue" />
                      </motion.div>
                      <CardTitle className="text-lg text-passport-dark">
                        {formato.titulo}
                      </CardTitle>
                      <CardDescription>{formato.descricao}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Métricas ──────────────────────────────────────────── */}
      <section className="bg-passport-cream/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={tp.metricsTitle}
            subtitle={tp.metricsSubtitle}
            centered
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {tp.metricas.map((m, index) => {
              const Icon = metricaIcons[index] ?? Eye;
              return (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                >
                  <Card className="transition-shadow hover:shadow-md">
                    <CardContent className="flex items-center gap-4 py-6">
                      <motion.div
                        className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-passport-blue/10"
                        whileHover={{ scale: 1.15, rotate: 12 }}
                        transition={{ type: "spring", stiffness: 380 }}
                      >
                        <Icon className="size-6 text-passport-blue" />
                      </motion.div>
                      <div>
                        <motion.p
                          className="text-2xl font-bold text-passport-dark"
                          initial={{ opacity: 0, scale: 0.75 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ type: "spring", stiffness: 260, delay: 0.1 + index * 0.08 }}
                        >
                          {m.valor}
                        </motion.p>
                        <p className="text-sm text-muted-foreground">{m.label}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* ── Parceiros ─────────────────────────────────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={tp.parceirosTitle}
            subtitle={tp.parceirosSubtitle}
            centered
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-40px" }}
            className="grid grid-cols-2 gap-6 sm:grid-cols-4"
          >
            {parceiros.map((parceiro) => (
              <motion.a
                key={parceiro.nome}
                href={parceiro.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp}
                whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(30,111,175,0.12)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group flex flex-col items-center gap-3 rounded-2xl border bg-white p-6"
              >
                <div className="flex h-16 items-center justify-center">
                  <img
                    src={parceiro.logo}
                    alt={parceiro.nome}
                    className="max-h-12 max-w-[140px] object-contain grayscale transition-all duration-300 group-hover:grayscale-0"
                  />
                </div>
                <span className="flex items-center gap-1 text-sm font-medium text-muted-foreground group-hover:text-passport-blue transition-colors duration-200">
                  {parceiro.nome}
                  <motion.span
                    initial={{ opacity: 0, x: -4 }}
                    whileHover={{ opacity: 1, x: 0 }}
                  >
                    <ExternalLink className="size-3" />
                  </motion.span>
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.h2
            className="text-2xl font-bold text-passport-dark sm:text-3xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {tp.ctaTitle}
          </motion.h2>
          <motion.p
            className="mx-auto mt-3 max-w-md text-muted-foreground"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.12 }}
          >
            {tp.ctaSubtitle}
          </motion.p>
          <motion.div
            className="mt-8 inline-block"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.22 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            <ParceriaDialog />
          </motion.div>
        </div>
      </section>
    </>
  );
}
