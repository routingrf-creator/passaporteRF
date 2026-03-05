import type { Metadata } from "next";
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
import { Badge } from "@/components/ui/badge";
import { SectionHeading } from "@/components/section-heading";
import { ContatoForm } from "@/components/contato-form";
import { faqs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Contato | PassaporteRF",
};

const canais = [
  {
    icon: Mail,
    label: "Email",
    valor: "passaporterf@gmail.com",
    href: "mailto:passaporterf@gmail.com",
  },
  {
    icon: Instagram,
    label: "Instagram",
    valor: "@passaporterf",
    href: "https://instagram.com/passaporterf",
  },
];

export default function ContatoPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-passport-blue to-passport-dark py-20 text-white">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-size-[500px] bg-bottom-right bg-no-repeat opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Fale com a gente
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Duvidas, sugestoes ou quer falar sobre parcerias? Estamos aqui
              para ajudar. Escolha o canal que preferir.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <ContatoForm />

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-passport-dark">
                    Nossos canais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {canais.map((canal) => (
                    <a
                      key={canal.label}
                      href={canal.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 rounded-lg p-3 transition-colors hover:bg-passport-blue/5"
                    >
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-passport-blue/10">
                        <canal.icon className="size-5 text-passport-blue" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-passport-dark">
                          {canal.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {canal.valor}
                        </p>
                      </div>
                    </a>
                  ))}
                  <div className="flex items-center gap-3 rounded-lg bg-passport-yellow/10 p-3">
                    <Clock className="size-5 shrink-0 text-passport-yellow" />
                    <p className="text-sm text-passport-dark">
                      Resposta em ate <strong>48h</strong>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-passport-dark">
                    Perguntas frequentes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`faq-${i}`}>
                        <AccordionTrigger>{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
