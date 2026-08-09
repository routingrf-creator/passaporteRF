"use client";

import { usePortfolioPage } from "@/hooks/use-portfolio-page";
import { PortfolioPageShell } from "./portfolio-page-shell";
import { Reveal } from "./reveal";

export function WhyPartnerSection() {
  const { whyPartner } = usePortfolioPage();

  return (
    <PortfolioPageShell id="why-partner" variant="olive">
      <div className="flex min-h-[70svh] flex-col items-center justify-center px-4 text-center">
        <Reveal>
          <p className="text-[10px] font-medium tracking-[0.34em] text-[#EBE8E1]/80 uppercase sm:text-[11px]">
            {whyPartner.heading}
          </p>
        </Reveal>

        <Reveal delay={0.08} className="my-10 max-w-4xl sm:my-14">
          <p className="font-[family-name:var(--font-portfolio-serif)] text-[clamp(1.75rem,4.2vw,3.25rem)] leading-[1.35] text-[#F3F0EA]">
            {whyPartner.statement}
          </p>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="text-[10px] font-medium tracking-[0.34em] text-[#EBE8E1]/80 uppercase sm:text-[11px]">
            {whyPartner.signature}
          </p>
        </Reveal>
      </div>
    </PortfolioPageShell>
  );
}
