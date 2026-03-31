"use client";

import { motion } from "framer-motion";
import { Mail, Instagram, Clock } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContatoForm } from "@/components/contato-form";
import { useT } from "@/contexts/language-context";

const canalIcons = [Mail, Instagram];
const canalHrefs = [
  "mailto:passaporterf@gmail.com",
  "https://instagram.com/passaporterf",
];
const canalValores = ["passaporterf@gmail.com", "@passaporterf"];
const canalLabels = ["Email", "Instagram"];

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
};

export function ContatoContent() {
  const t = useT();
  const tc = t.contato;

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-linear-to-br from-passport-blue to-passport-dark py-20 text-white">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-size-[500px] bg-bottom-right bg-no-repeat opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-5xl"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {tc.title}
            </motion.h1>
            <motion.p
              className="mt-4 text-lg leading-relaxed text-white/80"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
            >
              {tc.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Conteúdo ─────────────────────────────────────────── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut" }}
            >
              <ContatoForm />
            </motion.div>

            {/* Sidebar */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.1 }}
            >
              {/* Canais */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle className="text-xl text-passport-dark">
                    {tc.canaisTitle}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <motion.div
                    variants={stagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                  >
                    {canalLabels.map((label, i) => {
                      const Icon = canalIcons[i];
                      return (
                        <motion.a
                          key={label}
                          href={canalHrefs[i]}
                          target="_blank"
                          rel="noopener noreferrer"
                          variants={fadeUp}
                          whileHover={{ x: 5, backgroundColor: "rgba(30,111,175,0.06)" }}
                          transition={{ type: "spring", stiffness: 350, damping: 22 }}
                          className="flex items-center gap-4 rounded-lg p-3"
                        >
                          <motion.div
                            className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-passport-blue/10"
                            whileHover={{ scale: 1.15, rotate: 8 }}
                            transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          >
                            <Icon className="size-5 text-passport-blue" />
                          </motion.div>
                          <div>
                            <p className="text-sm font-medium text-passport-dark">
                              {label}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {canalValores[i]}
                            </p>
                          </div>
                        </motion.a>
                      );
                    })}
                  </motion.div>

                  {/* Tempo de resposta */}
                  <motion.div
                    className="flex items-center gap-3 rounded-lg bg-passport-yellow/10 p-3"
                    animate={{ scale: [1, 1.015, 1] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    <Clock className="size-5 shrink-0 text-passport-yellow" />
                    <p className="text-sm text-passport-dark">
                      {tc.resposta} <strong>{tc.respostaStrong}</strong>
                    </p>
                  </motion.div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-passport-dark">
                      {tc.faqTitle}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {tc.faqs.map((faq, i) => (
                        <AccordionItem key={i} value={`faq-${i}`}>
                          <AccordionTrigger className="transition-colors hover:text-passport-blue">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
