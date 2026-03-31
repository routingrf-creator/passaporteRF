import type { Metadata } from "next";
import { RoteirosContent } from "./roteiros-content";

export const metadata: Metadata = {
  title: "Roteiros Personalizados",
  description:
    "Solicite seu roteiro de viagem 100% personalizado. Escolha destino, datas e estilo — nos montamos o plano perfeito para voce.",
};

export default function RoteirosPage() {
  return <RoteirosContent />;
}

