import type { Metadata } from "next";
import { DestinosContent } from "./destinos-content";

export const metadata: Metadata = {
  title: "Destinos | PassaporteRF",
  description:
    "Explore nossos destinos incriveis pelo mundo. Filtre por continente, tipo de viagem e encontre o destino perfeito para voce.",
};

export default function DestinosPage() {
  return <DestinosContent />;
}
