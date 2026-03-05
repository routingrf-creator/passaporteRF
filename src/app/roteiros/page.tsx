import type { Metadata } from "next";
import {
  Check,
  X,
  MapPin,
  Star,
  Clock,
  MessageCircle,
} from "lucide-react";
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

export const metadata: Metadata = {
  title: "Roteiros Personalizados | PassaporteRF",
};

const servicos = [
  {
    titulo: "Roteiro Personalizado",
    descricao: "Roteiro completo e exclusivo para sua viagem",
    preco: "A partir de R$ 297",
    destaque: true,
    badge: "Mais vendido",
  },
  {
    titulo: "Consultoria Express",
    descricao: "30 minutos de call com dicas personalizadas",
    preco: "R$ 147",
    destaque: false,
    badge: null,
  },
  {
    titulo: "Revisao de Roteiro",
    descricao: "Ja tem roteiro? A gente melhora pra voce",
    preco: "R$ 97",
    destaque: false,
    badge: null,
  },
];

const incluso = [
  "Roteiro dia a dia",
  "Indicacoes de hoteis e restaurantes",
  "Dicas de transporte",
  "Mapa interativo",
  "2 rodadas de ajustes",
  "Suporte por WhatsApp",
];

const naoIncluso = [
  "Reservas de hotel ou voo",
  "Seguro viagem",
  "Transfers e transporte local",
];

export default function RoteirosPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-passport-blue to-passport-dark py-20 text-white">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-size-[600px] bg-bottom-right bg-no-repeat opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-passport-coral/20 text-passport-coral border-passport-coral/30">
              <Star className="size-3" />
              +500 roteiros entregues
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Seu roteiro, do seu jeito
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Cada viagem e unica e o seu roteiro tambem deveria ser. A gente
              monta um plano completo, personalizado e cheio de dicas para voce
              aproveitar cada momento.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Escolha o servico ideal"
            subtitle="Opcoes para cada momento da sua viagem"
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {servicos.map((servico) => (
              <Card
                key={servico.titulo}
                className={
                  servico.destaque
                    ? "relative border-2 border-passport-coral shadow-lg"
                    : "border"
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
                  <span className="text-xl font-bold text-passport-blue">
                    {servico.preco}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-passport-cream/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-passport-dark">
                <Check className="size-5 text-green-600" />
                O que esta incluso
              </h3>
              <ul className="space-y-3">
                {incluso.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600">
                      <Check className="size-4" />
                    </span>
                    <span className="text-sm text-passport-ink/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-6 flex items-center gap-2 text-xl font-bold text-passport-dark">
                <X className="size-5 text-red-500" />
                O que nao esta incluso
              </h3>
              <ul className="space-y-3">
                {naoIncluso.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-500">
                      <X className="size-4" />
                    </span>
                    <span className="text-sm text-passport-ink/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16" id="formulario">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Monte seu roteiro"
            subtitle="Preencha o formulario e receba uma proposta personalizada"
            centered
          />
          <RoteiroForm />
        </div>
      </section>

      <section className="bg-passport-dark py-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 text-center sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 text-white/70">
            <div className="flex items-center gap-2">
              <MapPin className="size-5 text-passport-coral" />
              <span className="text-sm">+30 destinos</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="size-5 text-passport-coral" />
              <span className="text-sm">Entrega em ate 7 dias</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="size-5 text-passport-coral" />
              <span className="text-sm">Suporte por WhatsApp</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
