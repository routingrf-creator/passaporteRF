import type { Metadata } from "next";
import {
  Hotel,
  UtensilsCrossed,
  ShoppingBag,
  Instagram,
  Youtube,
  Users,
  Eye,
  Globe,
  TrendingUp,
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

export const metadata: Metadata = {
  title: "Parcerias | PassaporteRF",
};

const formatos = [
  {
    icon: Hotel,
    titulo: "Hoteis e Hospedagens",
    descricao: "Estadias, reviews e conteudo exclusivo",
  },
  {
    icon: UtensilsCrossed,
    titulo: "Restaurantes e Experiencias",
    descricao: "Degustacoes, passeios e cobertura completa",
  },
  {
    icon: ShoppingBag,
    titulo: "Marcas e Produtos",
    descricao: "Publi, unboxing e campanhas criativas",
  },
];

const metricas = [
  {
    icon: Instagram,
    valor: "+350K",
    label: "seguidores no Instagram",
  },
  {
    icon: Youtube,
    valor: "+120K",
    label: "inscritos no YouTube",
  },
  {
    icon: TrendingUp,
    valor: "+80K",
    label: "seguidores no TikTok",
  },
  {
    icon: Eye,
    valor: "2.8M",
    label: "visualizacoes mensais",
  },
  {
    icon: Users,
    valor: "70%",
    label: "feminino, 25-40 anos",
  },
  {
    icon: Globe,
    valor: "Alcance",
    label: "Brasil, Portugal, Europa",
  },
];

export default function ParceriasPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-passport-blue to-passport-dark py-20 text-white">
        <div className="absolute inset-0 bg-[url('/globe.svg')] bg-size-[500px] bg-bottom-right bg-no-repeat opacity-5" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <Badge className="mb-4 bg-passport-yellow/20 text-passport-yellow border-passport-yellow/30">
              Colabore conosco
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Vamos trabalhar juntos?
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-white/80">
              Conectamos marcas incriveis com uma audiencia apaixonada por
              viagens. Se voce quer alcance real e conteudo autentico, vamos
              conversar.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Formatos de parceria"
            subtitle="Diferentes formas de trabalhar juntos"
            centered
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {formatos.map((formato) => (
              <Card
                key={formato.titulo}
                className="text-center transition-shadow hover:shadow-lg"
              >
                <CardHeader>
                  <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-passport-blue/10">
                    <formato.icon className="size-7 text-passport-blue" />
                  </div>
                  <CardTitle className="text-lg text-passport-dark">
                    {formato.titulo}
                  </CardTitle>
                  <CardDescription>{formato.descricao}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-passport-cream/60 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Numeros e publico"
            subtitle="Dados reais de alcance e engajamento"
            centered
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {metricas.map((m) => (
              <Card key={m.label}>
                <CardContent className="flex items-center gap-4 py-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-passport-blue/10">
                    <m.icon className="size-6 text-passport-blue" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-passport-dark">
                      {m.valor}
                    </p>
                    <p className="text-sm text-muted-foreground">{m.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-passport-dark sm:text-3xl">
            Quer saber mais?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Solicite nosso midia kit e receba todos os dados, cases e formatos
            de parceria disponiveis.
          </p>
          <div className="mt-8">
            <ParceriaDialog />
          </div>
        </div>
      </section>
    </>
  );
}
