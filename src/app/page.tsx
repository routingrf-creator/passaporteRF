import type { Metadata } from "next";
import { HeroSection } from "./(home)/hero-section";
import { HighlightsSection } from "./(home)/highlights-section";
import { TrendingDestinations } from "./(home)/trending-destinations";
import { HowItWorks } from "./(home)/how-it-works";
import { ConsultoriaSection } from "./(home)/consultoria-section";
import { EbooksSection } from "./(home)/ebooks-section";
import { ContentSection } from "./(home)/content-section";
import { MetricsStrip } from "@/components/metrics-strip";

export const metadata: Metadata = {
  title: "PassaporteRF | Roteiros de Viagem Personalizados",
  description:
    "Rafa e Fê ajudam voce a viver viagens unicas com roteiros 100% personalizados. Descubra destinos incriveis, consultoria express e e-books de viagem.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <MetricsStrip />
      <HighlightsSection />
      <TrendingDestinations />
      <HowItWorks />
      <ConsultoriaSection />
      <EbooksSection />
      <ContentSection />
    </>
  );
}
