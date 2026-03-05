"use client";

import { useState } from "react";
import Link from "next/link";
import { Plane, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Destinos", href: "/destinos" },
  { label: "Roteiros", href: "/roteiros" },
  { label: "Sobre", href: "/sobre" },
  { label: "Parcerias", href: "/parcerias" },
  { label: "Contato", href: "/contato" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-passport-cream/80 backdrop-blur-lg"
      role="banner"
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Navegacao principal"
      >
        <Link
          href="/"
          className="flex items-center gap-2 text-passport-dark"
          aria-label="PassaporteRF - Pagina inicial"
        >
          <Plane className="size-6 text-passport-coral" />
          <span className="text-xl font-bold tracking-tight">
            PassaporteRF
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="rounded-md px-3 py-2 text-sm font-medium text-passport-ink/80 transition-colors hover:text-passport-blue"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Button asChild className="bg-passport-coral hover:bg-passport-coral/90 text-white">
            <Link href="/roteiros">Criar meu roteiro</Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Abrir menu de navegacao"
            >
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2">
                <Plane className="size-5 text-passport-coral" />
                PassaporteRF
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Menu mobile">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-passport-ink/80 transition-colors hover:bg-passport-blue/10 hover:text-passport-blue"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-4">
                <Button
                  asChild
                  className="w-full bg-passport-coral hover:bg-passport-coral/90 text-white"
                >
                  <Link href="/roteiros" onClick={() => setOpen(false)}>
                    Criar meu roteiro
                  </Link>
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
