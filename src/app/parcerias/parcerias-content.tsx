"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Hotel,
  UtensilsCrossed,
  ShoppingBag,
  Eye,
  Globe,
  TrendingUp,
  ExternalLink,
  Copy,
  Check,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { YouTubeEmbed } from "@/components/youtube-embed";
import { ParceriaDialog } from "@/components/parceria-dialog";
import { useT } from "@/contexts/language-context";

const formatoIcons = [Hotel, UtensilsCrossed, ShoppingBag];
const metricaIcons = [Eye, TrendingUp, Globe, Globe];

const parceiros = [
  {
    nome: "GetYourGuide",
    href: "https://gyg.me/passaporterf-app",
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
    logo: "/booking-logo.jpeg",
  },
  {
    nome: "Real Seguros Viagem",
    href: "https://www.seguroviagem.srv.br/?ag=Z4G1O7WFJL",
    logo: "/real.webp",
  },
];

const afiliados = [
  {
    nome: "GetYourGuide",
    href: "https://gyg.me/passaporterf-app",
    logo: "/get-your-guide (1).webp",
    codigo: "PASSAPORTERF5",
    beneficio: {
      pt: "5% off em qualquer experiência bookada pelo app",
      en: "5% off any experience booked through the app",
      es: "5% de descuento en cualquier experiencia reservada por la app",
      fr: "5% de réduction sur toute expérience réservée via l'app",
      de: "5% Rabatt auf jedes über die App gebuchte Erlebnis",
    },
  },
  {
    nome: "Real Seguros Viagem",
    href: "https://www.seguroviagem.srv.br/?ag=Z4G1O7WFJL",
    logo: "/real seguro.svg",
    codigo: "PASSAPORTERF",
    beneficio: {
      pt: "5% de desconto no cartão de crédito ou 10% no boleto/PIX",
      en: "5% off with credit card or 10% off with bank transfer/PIX",
      es: "5% de descuento con tarjeta o 10% con transferencia/PIX",
      fr: "5% de réduction par carte ou 10% par virement/PIX",
      de: "5% Rabatt mit Kreditkarte oder 10% per Überweisung/PIX",
    },
  },
  {
    nome: "Airalo (eSIM)",
    href: "https://airalo.pxf.io/xJJ5kv",
    logo: "/airalo.png",
    codigo: null,
    beneficio: {
      pt: "Planos de celular e dados em todos os países do mundo",
      en: "Mobile and data plans in every country in the world",
      es: "Planes de celular y datos en todos los países del mundo",
      fr: "Forfaits mobile et données dans tous les pays du monde",
      de: "Handy- und Datentarife in jedem Land der Welt",
    },
  },
  {
    nome: "Omio",
    href: "https://omio.sjv.io/AggXQK",
    logo: "/omio.png",
    codigo: null,
    beneficio: {
      pt: "Passagens de trem, ônibus e outros nas principais cidades do mundo",
      en: "Train, bus and other tickets in major cities worldwide",
      es: "Billetes de tren, autobús y otros en las principales ciudades del mundo",
      fr: "Billets de train, bus et autres dans les grandes villes du monde",
      de: "Zug-, Bus- und weitere Tickets in den wichtigsten Städten der Welt",
    },
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

function CopyButton({ code, successLabel }: { code: string; successLabel: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-dashed border-passport-coral/40 bg-passport-coral/5 px-3 py-1.5 text-sm font-semibold text-passport-coral transition-all duration-200 hover:border-passport-coral hover:bg-passport-coral/10"
    >
      {copied ? (
        <>
          <Check className="size-3.5" />
          {successLabel}
        </>
      ) : (
        <>
          <Copy className="size-3.5" />
          {code}
        </>
      )}
    </button>
  );
}

export function ParceriasContent() {
  const t = useT();
  const tp = t.parcerias;
  const lang = (["pt", "en", "es", "fr", "de"] as const).find(
    (l) => t.nav.home === { pt: "Home", en: "Home", es: "Inicio", fr: "Accueil", de: "Startseite" }[l]
  ) ?? "pt";

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

      {/* ── Descontos Exclusivos (Afiliados) ───────────────────── */}
      <section className="bg-passport-cream/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={tp.afiliadosTitle}
            subtitle={tp.afiliadosSubtitle}
            centered
          />
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {afiliados.map((af) => (
              <motion.div
                key={af.nome}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Card className="group h-full overflow-hidden transition-shadow hover:shadow-lg">
                  <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-start sm:gap-6">
                    <a
                      href={af.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-20 w-32 shrink-0 items-center justify-center self-center rounded-xl bg-white p-3 shadow-sm transition-transform duration-200 group-hover:scale-105 sm:self-start"
                    >
                      <img
                        src={af.logo}
                        alt={af.nome}
                        className="max-h-14 max-w-[120px] object-contain"
                      />
                    </a>
                    <div className="flex flex-1 flex-col gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-passport-dark">
                          {af.nome}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                          {af.beneficio[lang]}
                        </p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        {af.codigo && (
                          <CopyButton code={af.codigo} successLabel={tp.copiarCodigo} />
                        )}
                        <Button
                          asChild
                          size="sm"
                          className="bg-passport-blue text-white hover:bg-passport-blue/90"
                        >
                          <a href={af.href} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-1.5 size-3.5" />
                            {af.codigo ? tp.usarCupom : tp.acessar}
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Vídeo ──────────────────────────────────────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={tp.videoTitle}
            subtitle={tp.videoSubtitle}
            centered
          />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <YouTubeEmbed
              videoId="vtbf2eQ6ONo"
              start={510}
              title={tp.videoTitle}
            />
          </motion.div>
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
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
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
