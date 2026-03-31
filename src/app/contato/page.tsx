import type { Metadata } from "next";
import { ContatoContent } from "./contato-content";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o PassaporteRF. Tire duvidas sobre roteiros, parcerias ou envie sugestoes. Estamos prontos para ajudar na sua proxima viagem.",
};

export default function ContatoPage() {
  return <ContatoContent />;
}

