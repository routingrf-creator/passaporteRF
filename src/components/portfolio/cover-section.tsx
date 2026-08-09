"use client";

import { usePortfolioPage } from "@/hooks/use-portfolio-page";
import { PortfolioImage } from "./portfolio-media";
import { PortfolioPageShell } from "./portfolio-page-shell";
import { Reveal } from "./reveal";

export function CoverSection() {
  const { cover, assets } = usePortfolioPage();

  return (
    <PortfolioPageShell id="cover" variant="split-cover" flush>
      <div className="grid min-h-svh lg:grid-cols-[42%_58%]">
        <Reveal className="relative min-h-[42vh] lg:min-h-svh">
          <PortfolioImage
            src={assets.coverPhoto}
            alt="Rafa and Fê"
            priority
            className="absolute inset-0 h-full w-full object-cover"
          />
        </Reveal>

        <div className="flex min-h-[58vh] flex-col justify-between bg-[#EBE8E1] px-8 py-10 sm:px-12 sm:py-14 lg:min-h-svh lg:px-14 lg:py-16">
          <Reveal className="flex items-start justify-between gap-6">
            <p className="text-[10px] font-medium tracking-[0.34em] text-[#8A7B58] uppercase sm:text-[11px]">
              {cover.eyebrow}
            </p>
            <p className="text-right text-[10px] font-medium tracking-[0.34em] text-[#8A7B58] uppercase sm:text-[11px]">
              {cover.category}
            </p>
          </Reveal>

          <Reveal delay={0.08} className="my-auto py-10 text-center lg:py-16">
            <p className="font-[family-name:var(--font-portfolio-serif)] text-[clamp(1.25rem,2.5vw,1.75rem)] italic text-[#8A7B58]">
              {cover.tagline}
            </p>

            <div className="my-8 h-px bg-[#8A7B58]/35 sm:my-10" />

            <h1 className="font-[family-name:var(--font-portfolio-serif)] text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-[0.14em] text-[#8A7B58] uppercase">
              {cover.brand}
            </h1>

            <div className="my-8 h-px bg-[#8A7B58]/35 sm:my-10" />
          </Reveal>

          <Reveal delay={0.14} className="flex items-end justify-between gap-6">
            <p className="font-[family-name:var(--font-portfolio-serif)] text-[clamp(1.5rem,3vw,2.25rem)] text-[#8A7B58]">
              {cover.title}
            </p>
            <p className="font-[family-name:var(--font-portfolio-serif)] text-[clamp(1.5rem,3vw,2.25rem)] text-[#8A7B58]">
              {cover.year}
            </p>
          </Reveal>
        </div>
      </div>
    </PortfolioPageShell>
  );
}
