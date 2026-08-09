"use client";

import { Instagram, Youtube, Mail, Globe, Music2 } from "lucide-react";
import { usePortfolioPage } from "@/hooks/use-portfolio-page";
import { PortfolioImage } from "./portfolio-media";
import { PortfolioPageShell } from "./portfolio-page-shell";
import { Reveal } from "./reveal";

const iconMap = {
  Instagram,
  TikTok: Music2,
  YouTube: Youtube,
  Email: Mail,
  Website: Globe,
} as const;

export function ContactSection() {
  const { contact, assets } = usePortfolioPage();

  return (
    <PortfolioPageShell id="contact">
      <div className="grid min-h-[75svh] grid-cols-1 items-center sm:grid-cols-[minmax(0,240px)_minmax(0,1fr)_minmax(0,240px)] sm:gap-6 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)_minmax(0,260px)] lg:gap-10">
        <Reveal className="hidden sm:block sm:self-start">
          <div className="aspect-square w-full max-w-[260px] overflow-hidden">
            <PortfolioImage
              src={assets.contactPhotoTopLeft}
              alt="Rafa and Fê"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="flex flex-col items-center justify-center px-4 py-10 text-center sm:min-w-0 sm:px-2">
          <Reveal>
            <p className="text-[10px] font-medium tracking-[0.34em] text-[#8A7B58] uppercase sm:text-[11px]">
              {contact.subheading}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-8 max-w-3xl">
            <h2 className="font-[family-name:var(--font-portfolio-serif)] text-[clamp(2rem,5vw,3.75rem)] leading-[1.15] tracking-[0.04em] text-[#8A7B58] uppercase">
              {contact.heading}
            </h2>
          </Reveal>

          <Reveal delay={0.14} className="mt-12">
            <p className="text-[10px] font-medium tracking-[0.34em] text-[#8A7B58] uppercase sm:text-[11px]">
              {contact.label}
            </p>
            <a
              href={contact.href}
              className="mt-4 inline-block text-[13px] font-semibold tracking-[0.24em] text-[#8A7B58] uppercase transition-opacity hover:opacity-70 sm:text-sm"
            >
              {contact.email}
            </a>
          </Reveal>

          <Reveal delay={0.2} className="mt-14 flex items-center gap-4 sm:gap-5">
            {contact.social.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap] ?? Globe;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.label === "Email" ? undefined : "_blank"}
                  rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={link.label}
                  className="flex size-10 items-center justify-center rounded-full border border-[#8A7B58]/30 text-[#8A7B58] transition-colors hover:bg-[#8A7B58]/8"
                >
                  <Icon className="size-4" strokeWidth={1.5} />
                </a>
              );
            })}
          </Reveal>
        </div>

        <Reveal className="hidden sm:block sm:justify-self-end sm:self-end">
          <div className="aspect-square w-full max-w-[260px] overflow-hidden">
            <PortfolioImage
              src={assets.contactPhotoBottomRight}
              alt="Rafa and Fê"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </PortfolioPageShell>
  );
}
