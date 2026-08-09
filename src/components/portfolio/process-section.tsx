"use client";

import { usePortfolioPage } from "@/hooks/use-portfolio-page";
import { PortfolioImage } from "./portfolio-media";
import {
  PortfolioPageShell,
  PortfolioSerifHeading,
} from "./portfolio-page-shell";
import { Reveal, StaggerItem, StaggerReveal } from "./reveal";

export function ProcessSection() {
  const { process, assets } = usePortfolioPage();

  return (
    <PortfolioPageShell id="process">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <Reveal>
            <PortfolioSerifHeading
              as="h2"
              className="text-[clamp(2.5rem,5vw,4rem)] uppercase"
            >
              {process.heading}
            </PortfolioSerifHeading>
          </Reveal>

          <StaggerReveal className="mt-12 space-y-5 sm:mt-16 sm:space-y-6">
            {process.steps.map((step) => (
              <StaggerItem key={step}>
                <div className="flex items-center gap-4">
                  <span className="size-2 shrink-0 rounded-full bg-[#8A7B58]" />
                  <p className="font-[family-name:var(--font-portfolio-serif)] text-[clamp(1.35rem,2.8vw,2rem)] text-[#8A7B58]">
                    {step}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>

        <Reveal delay={0.1} className="w-full lg:justify-self-end">
          <div className="mx-auto aspect-[4/5] w-full max-w-[min(100%,520px)] overflow-hidden lg:ml-auto">
            <PortfolioImage
              src={assets.processPhoto}
              alt="Rafa and Fê"
              grayscale
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>
      </div>
    </PortfolioPageShell>
  );
}
