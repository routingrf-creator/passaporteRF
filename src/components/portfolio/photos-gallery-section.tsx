"use client";

import type { PhotosPortfolioItem } from "@/content/portfolio";
import { usePortfolioPage } from "@/hooks/use-portfolio-page";
import { PortfolioMedia } from "./portfolio-media";
import {
  PortfolioPageShell,
  PortfolioScriptLabel,
  PortfolioSerifHeading,
} from "./portfolio-page-shell";
import { Reveal, StaggerItem, StaggerReveal } from "./reveal";

const slotClasses: Record<PhotosPortfolioItem["gridSlot"], string> = {
  left: "md:col-start-1 md:row-span-2",
  "mid-top-left": "md:col-start-2 md:row-start-1",
  "mid-top-right": "md:col-start-3 md:row-start-1",
  "mid-bottom": "md:col-span-2 md:col-start-2 md:row-start-2",
  right: "md:col-start-4 md:row-span-2",
};

export function PhotosGallerySection({
  items,
}: {
  items: PhotosPortfolioItem[];
}) {
  const { sections } = usePortfolioPage();

  return (
    <PortfolioPageShell id="portfolio-photos" compact>
      <Reveal className="mb-6 flex items-end justify-between gap-6 sm:mb-8">
        <PortfolioSerifHeading
          as="h2"
          className="text-[clamp(2rem,4.5vw,3.5rem)] uppercase"
        >
          {sections.heading}
        </PortfolioSerifHeading>
        <PortfolioScriptLabel>{sections.photos}</PortfolioScriptLabel>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2 md:gap-5 md:[grid-auto-rows:minmax(180px,1fr)]">
        {items.map((item, index) => (
          <StaggerItem
            key={`${item.title}-${item.media}`}
            className={slotClasses[item.gridSlot]}
          >
            <div className="relative h-full min-h-[220px] overflow-hidden bg-[#DDD8CF] md:min-h-[180px]">
              <PortfolioMedia
                item={item}
                priority={index < 2}
                className="h-full w-full object-cover"
              />
            </div>
          </StaggerItem>
        ))}
      </StaggerReveal>
    </PortfolioPageShell>
  );
}
