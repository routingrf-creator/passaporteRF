import type { Metadata } from "next";
import Link from "next/link";
import {
  Heart,
  Gem,
  Sparkles,
  Plane,
  Instagram,
  Youtube,
  MapPin,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
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

export const metadata: Metadata = {
  title: "Sobre Nos | PassaporteRF",
};

const valores = [
  {
    icon: Heart,
    titulo: "Autenticidade",
    descricao:
      "So recomendamos o que ja testamos e vivemos pessoalmente. Nada de dica generica.",
  },
  {
    icon: Gem,
    titulo: "Qualidade",
    descricao:
      "Cada detalhe importa. Do hotel ao restaurante, tudo e pensado com carinho.",
  },
  {
    icon: Sparkles,
    titulo: "Experiencia",
    descricao:
      "Viagens que criam memorias. O nosso foco e transformar cada trip em algo inesquecivel.",
  },
];

const timeline = [
  { ano: "2019", evento: "Primeira viagem internacional juntos" },
  { ano: "2020", evento: "Criacao do @passaporterf no Instagram" },
  { ano: "2021", evento: "Canal no YouTube" },
  { ano: "2022", evento: "Primeiro roteiro personalizado vendido" },
  { ano: "2023", evento: "1 milhao de seguidores" },
  { ano: "2024", evento: "+500 roteiros entregues" },
];

export default function SobrePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-passport-blue to-passport-dark py-20 text-white">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-size-[500px] bg-bottom-right bg-no-repeat opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Badge className="mb-4 bg-passport-coral/20 text-passport-coral border-passport-coral/30">
                <Plane className="size-3" />
                Nossa historia
              </Badge>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Somos Rafa & Fe
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                Tudo comecou com duas mochilas, muita curiosidade e a vontade de
                conhecer o mundo juntos. O que era paixao por viagem virou
                missao: ajudar outras pessoas a viverem experiencias tao
                incriveis quanto as nossas.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Depois de dezenas de paises visitados e centenas de dicas
                compartilhadas, criamos o PassaporteRF para reunir tudo o que
                aprendemos em roteiros personalizados, conteudos autenticos e
                uma comunidade de viajantes apaixonados.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-white/80">
                Hoje, a gente vive de viajar e de fazer com que a sua proxima
                viagem seja a melhor de todas.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-2xl border-4 border-white/20 bg-white/10 backdrop-blur-sm">
                <div className="flex h-full flex-col items-center justify-center gap-3 text-white/60">
                  <Users className="size-16" />
                  <span className="text-sm font-medium">Rafa & Fe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nossos valores"
            subtitle="O que guia cada roteiro e cada recomendacao"
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {valores.map((valor) => (
              <Card key={valor.titulo} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-passport-coral/10">
                    <valor.icon className="size-7 text-passport-coral" />
                  </div>
                  <CardTitle className="text-lg text-passport-dark">
                    {valor.titulo}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {valor.descricao}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-passport-cream/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nossa trajetoria"
            subtitle="Marcos que fizeram do PassaporteRF o que somos hoje"
            centered
          />
          <div className="relative mx-auto max-w-2xl">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-passport-blue/20 sm:left-1/2 sm:-translate-x-px" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.ano}
                  className={`relative flex items-center gap-4 sm:gap-8 ${
                    i % 2 === 0
                      ? "sm:flex-row"
                      : "sm:flex-row-reverse sm:text-right"
                  }`}
                >
                  <div className="hidden flex-1 sm:block" />
                  <div className="relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full border-2 border-passport-blue bg-white text-xs font-bold text-passport-blue sm:size-10">
                    {item.ano.slice(2)}
                  </div>
                  <div className="flex-1">
                    <Card className="inline-block">
                      <CardContent className="py-4">
                        <span className="text-xs font-bold text-passport-coral">
                          {item.ano}
                        </span>
                        <p className="mt-1 text-sm font-medium text-passport-dark">
                          {item.evento}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-linear-to-br from-passport-coral to-passport-coral/80 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Quer viajar com a gente?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-white/80">
            Deixa a gente montar o roteiro perfeito pra voce. E so contar pra
            onde quer ir!
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-white text-passport-coral hover:bg-white/90"
          >
            <Link href="/roteiros">
              Criar meu roteiro
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
