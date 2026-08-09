"use client";

import { usePortfolioPage } from "@/hooks/use-portfolio-page";
import {
  PortfolioDivider,
  PortfolioPageShell,
  PortfolioSerifHeading,
} from "./portfolio-page-shell";
import { Reveal, StaggerItem, StaggerReveal } from "./reveal";

function CameraIcon() {
  return (
    <svg
      viewBox="0 0 64 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-10 w-14 text-[#8A7B58] sm:h-12 sm:w-16"
      aria-hidden
    >
      <rect x="4" y="14" width="56" height="30" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M22 14L26 8H38L42 14" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="32" cy="29" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="48" cy="20" r="2" fill="currentColor" />
    </svg>
  );
}

export function InvestmentGuideSection() {
  const { investment } = usePortfolioPage();

  return (
    <PortfolioPageShell id="investment">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-0">
        <div className="flex flex-col justify-between lg:pr-12">
          <Reveal>
            <PortfolioSerifHeading
              as="h2"
              className="whitespace-pre-line text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.08] uppercase"
            >
              {investment.heading}
            </PortfolioSerifHeading>
          </Reveal>

          <Reveal delay={0.12} className="mt-12 max-w-sm lg:mt-auto lg:pt-20">
            <p className="text-[15px] leading-[1.85] font-light text-[#6B6348] sm:text-base">
              {investment.intro}
            </p>
          </Reveal>
        </div>

        <div className="lg:border-l lg:border-[#8A7B58]/25 lg:pl-12">
          <Reveal className="mb-8 flex justify-end">
            <CameraIcon />
          </Reveal>

          <StaggerReveal className="space-y-0">
            {investment.packages.map((pkg, index) => (
              <StaggerItem key={pkg.title}>
                <div className="grid gap-4 py-5 sm:grid-cols-[0.95fr_1.05fr] sm:gap-8">
                  <p className="text-[11px] font-semibold tracking-[0.22em] text-[#8A7B58] uppercase">
                    {pkg.title}
                  </p>
                  <div className="space-y-1.5 text-right">
                    {pkg.features.map((feature) => (
                      <p
                        key={feature}
                        className="font-[family-name:var(--font-portfolio-serif)] text-[15px] leading-relaxed text-[#6B6348] sm:text-base"
                      >
                        {feature}
                      </p>
                    ))}
                  </div>
                </div>
                {index < investment.packages.length - 1 && (
                  <PortfolioDivider />
                )}
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </div>
    </PortfolioPageShell>
  );
}
