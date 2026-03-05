import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "PassaporteRF | Roteiros de Viagem Personalizados",
  description:
    "Rafa & Fe ajudam voce a viver viagens unicas com roteiros 100% personalizados. Descubra destinos incriveis, dicas praticas e experiencias autenticas.",
  openGraph: {
    title: "PassaporteRF | Roteiros de Viagem Personalizados",
    description:
      "Rafa & Fe ajudam voce a viver viagens unicas com roteiros 100% personalizados. Descubra destinos incriveis, dicas praticas e experiencias autenticas.",
    type: "website",
    locale: "pt_BR",
    siteName: "PassaporteRF",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
