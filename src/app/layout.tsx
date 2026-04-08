import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import { LanguageProvider } from "@/contexts/language-context";

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
  title: {
    default: "PassaporteRF | Roteiros de Viagem Personalizados",
    template: "%s | PassaporteRF",
  },
  description:
    "Rafa e Fê ajudam voce a viver viagens unicas com roteiros 100% personalizados. Descubra destinos incriveis, dicas praticas e experiencias autenticas.",
  keywords: [
    "roteiros de viagem",
    "viagem personalizada",
    "travel influencer",
    "dicas de viagem",
    "PassaporteRF",
    "Rafa e Fê",
    "consultoria de viagem",
    "roteiro europa",
    "roteiro asia",
    "e-books viagem",
  ],
  authors: [{ name: "PassaporteRF", url: "https://passaporterf.com" }],
  creator: "PassaporteRF",
  metadataBase: new URL("https://passaporterf.com"),
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "PassaporteRF | Roteiros de Viagem Personalizados",
    description:
      "Rafa e Fê ajudam voce a viver viagens unicas com roteiros 100% personalizados. Descubra destinos incriveis, dicas praticas e experiencias autenticas.",
    url: "https://passaporterf.com",
    siteName: "PassaporteRF",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "PassaporteRF - Roteiros de Viagem Personalizados",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PassaporteRF | Roteiros de Viagem Personalizados",
    description:
      "Rafa e Fê ajudam voce a viver viagens unicas com roteiros 100% personalizados.",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "impact-site-verification": "650495f9-8e86-499e-9aa2-f8b4b81f0f8a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
