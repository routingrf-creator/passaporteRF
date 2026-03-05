import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  DollarSign,
  CheckCircle2,
  ArrowLeft,
  MapPin,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { destinations } from "@/data/destinations";

const tagLabels: Record<string, string> = {
  romantico: "Romantico",
  aventura: "Aventura",
  cultura: "Cultura",
  praia: "Praia",
  luxo: "Luxo",
  economico: "Economico",
  gastronomia: "Gastronomia",
  compras: "Compras",
  natureza: "Natureza",
};

export async function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    return { title: "Destino nao encontrado | PassaporteRF" };
  }

  return {
    title: `${destination.city}, ${destination.country} | PassaporteRF`,
    description: destination.shortDescription,
  };
}

export default async function DestinoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = destinations.find((d) => d.slug === slug);

  if (!destination) {
    notFound();
  }

  const infoCards = [
    {
      icon: Calendar,
      label: "Melhor epoca",
      value: destination.bestTime,
    },
    {
      icon: Clock,
      label: "Tempo ideal",
      value: `${destination.avgDays} dias`,
    },
    {
      icon: DollarSign,
      label: "Faixa de preco",
      value: destination.priceRange,
    },
  ];

  return (
    <main className="min-h-screen">
      <section className="relative h-[50vh] min-h-[400px] w-full sm:h-[60vh]">
        <Image
          src={destination.image}
          alt={`${destination.city}, ${destination.country}`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-black/10" />

        <div className="absolute top-6 left-6 z-10">
          <Button
            asChild
            variant="ghost"
            className="text-white hover:bg-white/20 hover:text-white"
          >
            <Link href="/destinos">
              <ArrowLeft className="size-4" />
              Voltar
            </Link>
          </Button>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-10 px-4 pb-10 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="flex flex-wrap gap-2 mb-4">
              {destination.tags.map((tag) => (
                <Badge
                  key={tag}
                  className="bg-white/20 text-white backdrop-blur-sm border-white/30 text-sm"
                >
                  {tagLabels[tag] || tag}
                </Badge>
              ))}
            </div>
            <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
              {destination.city}
            </h1>
            <div className="mt-2 flex items-center gap-2 text-white/80">
              <MapPin className="size-5" />
              <span className="text-lg">{destination.country}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold text-passport-dark">
            Sobre o destino
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-passport-ink/80">
            {destination.description}
          </p>
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {infoCards.map((info) => (
            <Card
              key={info.label}
              className="border-0 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <CardContent className="flex items-start gap-4 py-6">
                <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-passport-blue/10">
                  <info.icon className="size-6 text-passport-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    {info.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-passport-dark">
                    {info.value}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {destination.gallery.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-passport-dark">
            Galeria
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {destination.gallery.map((img, idx) => (
              <div
                key={idx}
                className="relative aspect-4/3 overflow-hidden rounded-xl"
              >
                <Image
                  src={img}
                  alt={`${destination.city} - foto ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {destination.tips.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-2xl font-bold text-passport-dark">
            Dicas de viagem
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {destination.tips.map((tip, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm"
              >
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-passport-blue" />
                <p className="text-passport-ink/80">{tip}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-passport-dark px-6 py-12 text-center sm:px-12 sm:py-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Quer um roteiro personalizado para {destination.city}?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Criamos roteiros sob medida com as melhores dicas, restaurantes e
            experiencias para a sua viagem.
          </p>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-passport-coral hover:bg-passport-coral/90 text-white text-base px-8"
          >
            <Link href="/roteiros">Quero meu roteiro</Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
