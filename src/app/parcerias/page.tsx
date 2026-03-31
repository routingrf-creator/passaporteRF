import type { Metadata } from "next";
import { ParceriasContent } from "./parcerias-content";

export const metadata: Metadata = {
  title: "Parcerias",
  description:
    "Trabalhe com o PassaporteRF. Descubra como fazer parcerias, solicite nosso midia kit e conheca marcas que ja confiam no nosso trabalho.",
};

export default function ParceriasPage() {
  return <ParceriasContent />;
}
