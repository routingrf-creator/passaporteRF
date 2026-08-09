"use client";

import { SiteLink } from "@/components/site-link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  Music2,
  Mail,
  MapPin,
} from "lucide-react";
import { useT } from "@/contexts/language-context";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/passaporterf", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com/@passaporterf", icon: Youtube },
  { label: "TikTok", href: "https://tiktok.com/@passaporterf", icon: Music2 },
] as const;

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const colAnim = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function Footer() {
  const t = useT();
  const pathname = usePathname();

  if (pathname.startsWith("/portfolio")) {
    return null;
  }

  const siteLinks = [
    { label: t.nav.destinos, href: "/destinos" },
    { label: t.nav.roteiros, href: "/roteiros" },
    { label: t.nav.sobre, href: "/sobre" },
    { label: t.nav.portfolio, href: "/portfolio" },
    { label: t.nav.parcerias, href: "/parcerias" },
    { label: t.nav.contato, href: "/contato" },
  ] as const;

  return (
    <footer className="bg-passport-dark text-white" role="contentinfo">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-40px" }}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* Brand */}
          <motion.div variants={colAnim} className="sm:col-span-2 lg:col-span-1">
            <SiteLink
              href="/"
              className="group inline-block"
              aria-label="PassaporteRF"
            >
              <Image
                src="/logo.png"
                alt="PassaporteRF"
                width={140}
                height={40}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </SiteLink>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              {t.footer.desc}
            </p>
          </motion.div>

          {/* Links */}
          <motion.div variants={colAnim}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-passport-yellow">
              {t.footer.links}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  >
                    <SiteLink
                      href={link.href}
                      className="text-sm text-white/70 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </SiteLink>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Redes sociais */}
          <motion.div variants={colAnim}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-passport-yellow">
              {t.footer.redes}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social flex items-center gap-2 text-sm text-white/70 transition-colors duration-200 hover:text-white"
                    aria-label={`${t.footer.seguirNo} ${link.label}`}
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 380, damping: 22 }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 8 }}
                      transition={{ type: "spring", stiffness: 380, damping: 14 }}
                    >
                      <link.icon className="size-4" />
                    </motion.span>
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contato */}
          <motion.div variants={colAnim}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-passport-yellow">
              {t.footer.contato}
            </h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <motion.a
                  href="mailto:passaporterf@gmail.com"
                  className="flex items-center gap-2 text-sm text-white/70 transition-colors duration-200 hover:text-white"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 380, damping: 22 }}
                >
                  <Mail className="size-4" />
                  passaporterf@gmail.com
                </motion.a>
              </li>
              <li className="flex items-center gap-2 text-sm text-white/70">
                <MapPin className="size-4 shrink-0" />
                Irlanda
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-white/50"
        >
          &copy;{" "}
          <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
          PassaporteRF. {t.footer.direitos}
        </motion.div>
      </div>
    </footer>
  );
}
