import type { Metadata } from "next";
import { PortfolioContent } from "./portfolio-content";

export const metadata: Metadata = {
  title: "Portfolio 2026",
  description:
    "PassaporteRF portfolio — premium travel and lifestyle UGC creators. Explore our work, services, and partnership opportunities.",
};

export default function PortfolioPage() {
  return <PortfolioContent />;
}
