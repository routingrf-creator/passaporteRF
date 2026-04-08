import type { Metadata } from "next";
import { SobreContent } from "./sobre-content";

export const metadata: Metadata = {
  title: "Sobre Nos",
  description:
    "Conheca Rafa e Fê, o casal por tras do PassaporteRF. Nossa historia, valores e missao de transformar sonhos de viagem em roteiros personalizados.",
};

export default function SobrePage() {
  return <SobreContent />;
}

