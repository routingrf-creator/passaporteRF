"use client";

import { usePortfolioPage } from "@/hooks/use-portfolio-page";
import { PortfolioImage } from "./portfolio-media";
import {
  PortfolioDivider,
  PortfolioLabel,
  PortfolioPageShell,
  PortfolioSerifHeading,
} from "./portfolio-page-shell";
import { Reveal, StaggerItem, StaggerReveal } from "./reveal";

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <StaggerReveal className="space-y-3">
      {items.map((item) => (
        <StaggerItem key={item}>
          <div className="flex items-start gap-3">
            <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#8A7B58]" />
            <p className="text-[14px] leading-relaxed font-light text-[#6B6348] sm:text-[15px]">
              {item}
            </p>
          </div>
        </StaggerItem>
      ))}
    </StaggerReveal>
  );
}

export function ServicesExpertiseSection() {
  const { services, assets } = usePortfolioPage();

  return (
    <PortfolioPageShell id="services">
      <div className="grid min-h-[70svh] gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-0">
        <div className="flex flex-col justify-between lg:pr-12">
          <Reveal>
            <PortfolioSerifHeading
              as="h2"
              className="max-w-sm whitespace-pre-line text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.08] uppercase"
            >
              {services.leftHeading}
            </PortfolioSerifHeading>
          </Reveal>

          <Reveal delay={0.12} className="mt-auto w-full pt-10 lg:pt-16">
            <div className="aspect-[4/5] w-full max-w-[min(100%,520px)] overflow-hidden">
              <PortfolioImage
                src={assets.servicesPhoto}
                alt="Rafa and Fê"
                grayscale
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="grid lg:border-l lg:border-[#8A7B58]/25 lg:pl-12">
          <div className="pb-10 lg:pb-12 lg:min-h-[50%]">
            <Reveal>
              <PortfolioLabel>{services.servicesHeading}</PortfolioLabel>
            </Reveal>
            <div className="mt-6">
              <BulletList items={services.services} />
            </div>
          </div>

          <PortfolioDivider className="hidden lg:block" />

          <div className="pt-10 lg:pt-12 lg:min-h-[50%]">
            <Reveal>
              <PortfolioLabel>{services.expertiseHeading}</PortfolioLabel>
            </Reveal>
            <div className="mt-6">
              <BulletList items={services.expertise} />
            </div>
          </div>
        </div>
      </div>
    </PortfolioPageShell>
  );
}
