import { Playfair_Display, Montserrat } from "next/font/google";
import { PortfolioBodyClass } from "@/components/portfolio/portfolio-body-class";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-portfolio-serif",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-portfolio-sans",
  display: "swap",
});

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${playfair.variable} ${montserrat.variable} bg-[#EBE8E1] font-[family-name:var(--font-portfolio-sans)] text-[#8A7B58] antialiased`}
    >
      <PortfolioBodyClass />
      {children}
    </div>
  );
}
