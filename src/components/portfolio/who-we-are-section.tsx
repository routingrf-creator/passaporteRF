"use client";

import { usePortfolioPage } from "@/hooks/use-portfolio-page";
import { PortfolioImage } from "./portfolio-media";
import {
  PortfolioPageShell,
  PortfolioSerifHeading,
} from "./portfolio-page-shell";
import { Reveal } from "./reveal";

export function WhoWeAreSection() {
  const { whoWeAre, assets } = usePortfolioPage();

  return (
    <PortfolioPageShell id="who-we-are">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
        <div>
          <Reveal>
            <PortfolioSerifHeading
              as="h2"
              className="text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.05] uppercase"
            >
              {whoWeAre.heading}
            </PortfolioSerifHeading>
          </Reveal>

          <Reveal delay={0.08} className="mt-16 max-w-md lg:mt-24">
            <p className="text-[11px] font-medium tracking-[0.28em] text-[#8A7B58] uppercase">
              {whoWeAre.handle}
            </p>
            <p className="mt-2 text-[11px] font-medium tracking-[0.28em] text-[#8A7B58] uppercase">
              {whoWeAre.signature}
            </p>
            <p className="mt-8 text-[15px] leading-[1.85] font-light text-[#6B6348] sm:text-base">
              {whoWeAre.body}
            </p>
          </Reveal>

          <Reveal delay={0.14} className="mt-16 lg:mt-24">
            <PortfolioImage
              src={assets.logo}
              alt="PassaporteRF"
              className="h-16 w-auto object-contain sm:h-20"
            />
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:pt-6">
          <div className="mx-auto aspect-square max-w-[520px] overflow-hidden lg:ml-auto">
            <PortfolioImage
              src={assets.whoWeArePhoto}
              alt="Rafa and Fê"
              priority
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </PortfolioPageShell>
  );
}
