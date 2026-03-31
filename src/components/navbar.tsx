"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, Instagram, Youtube, Music2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-switcher";
import { useT } from "@/contexts/language-context";

const navHrefs = [
  "/destinos",
  "/roteiros",
  "/sobre",
  "/parcerias",
  "/contato",
] as const;

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/passaporterf",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://youtube.com/@passaporterf",
    icon: Youtube,
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@passaporterf",
    icon: Music2,
  },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useT();

  const navLinks = [
    { label: t.nav.destinos, href: "/destinos" },
    { label: t.nav.roteiros, href: "/roteiros" },
    { label: t.nav.sobre, href: "/sobre" },
    { label: t.nav.parcerias, href: "/parcerias" },
    { label: t.nav.contato, href: "/contato" },
  ] as const;

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full border-b border-white/40 bg-white/50 shadow-[0_4px_24px_rgba(0,0,0,0.04)] backdrop-blur-2xl"
      role="banner"
    >
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label={t.nav.destinos}
      >
        {/* Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2"
          aria-label="PassaporteRF"
        >
          <Image
            src="/logo.png"
            alt="PassaporteRF"
            width={140}
            height={40}
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`relative rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-passport-blue"
                      : "text-passport-ink/80 hover:text-passport-blue"
                  }`}
                >
                  {link.label}
                  {/* Animated underline */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-passport-coral"
                      transition={{ type: "spring", stiffness: 380, damping: 28 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <div className="flex items-center gap-1">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex size-8 items-center justify-center rounded-full text-passport-ink/50 transition-colors duration-200 hover:bg-passport-blue/10 hover:text-passport-blue"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <social.icon className="size-4" />
              </motion.a>
            ))}
          </div>
          <div className="mx-1 h-6 w-px bg-border/60" />
          <LanguageSwitcher />
          <div className="mx-1 h-6 w-px bg-border/60" />
          <motion.div
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 380, damping: 18 }}
          >
            <Button
              asChild
              className="bg-passport-coral text-white shadow-sm transition-colors duration-200 hover:bg-passport-coral/90 hover:shadow-md"
            >
              <Link href="/roteiros">{t.nav.criarRoteiro}</Link>
            </Button>
          </motion.div>
        </div>

        {/* Mobile sheet */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <motion.div whileTap={{ scale: 0.88 }}>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Menu"
              >
                <motion.div
                  animate={open ? { rotate: 90 } : { rotate: 0 }}
                  transition={{ duration: 0.22 }}
                >
                  <Menu className="size-5" />
                </motion.div>
              </Button>
            </motion.div>
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetHeader>
              <SheetTitle>
                <Image
                  src="/logo.png"
                  alt="PassaporteRF"
                  width={120}
                  height={34}
                  className="h-8 w-auto"
                />
              </SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4" aria-label="Menu mobile">
              {navLinks.map((link, i) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.25 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-passport-blue/10 text-passport-blue"
                          : "text-passport-ink/80 hover:bg-passport-blue/10 hover:text-passport-blue"
                      }`}
                    >
                      {link.label}
                      {isActive && (
                        <span className="size-1.5 rounded-full bg-passport-coral" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}

              <div className="mt-4 flex items-center justify-between px-3">
                <div className="flex items-center gap-2">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex size-9 items-center justify-center rounded-full border border-border/50 text-passport-ink/60 transition-colors hover:bg-passport-blue/10 hover:text-passport-blue"
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.88 }}
                      transition={{ type: "spring", stiffness: 380 }}
                    >
                      <social.icon className="size-4" />
                    </motion.a>
                  ))}
                </div>
                <LanguageSwitcher />
              </div>

              <div className="mt-4">
                <motion.div
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 380 }}
                >
                  <Button
                    asChild
                    className="w-full bg-passport-coral text-white hover:bg-passport-coral/90"
                  >
                    <Link href="/roteiros" onClick={() => setOpen(false)}>
                      {t.nav.criarRoteiro}
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
