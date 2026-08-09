"use client";

import type { PortfolioGalleryItem } from "@/content/portfolio";
import { isDriveVideoItem } from "@/content/portfolio";
import { usePortfolioPage } from "@/hooks/use-portfolio-page";
import { PortfolioMedia } from "./portfolio-media";
import { DriveVideoEmbed } from "./drive-video-embed";
import {
  PortfolioDivider,
  PortfolioPageShell,
  PortfolioScriptLabel,
  PortfolioSerifHeading,
} from "./portfolio-page-shell";
import { Reveal, StaggerItem, StaggerReveal } from "./reveal";

type PortfolioGallerySectionProps = {
  id: string;
  title: string;
  items: PortfolioGalleryItem[];
  activeVideoUrl: string | null;
  onPlayVideo: (url: string) => void;
  onStopVideo: () => void;
};

function ShowcaseCard({
  item,
  index,
  activeVideoUrl,
  onPlayVideo,
  onStopVideo,
}: {
  item: PortfolioGalleryItem;
  index: number;
  activeVideoUrl: string | null;
  onPlayVideo: (url: string) => void;
  onStopVideo: () => void;
}) {
  return (
    <StaggerItem>
      <article>
        {isDriveVideoItem(item) ? (
          <DriveVideoEmbed
            item={item}
            priority={index < 2}
            isActive={activeVideoUrl === item.url}
            onPlay={() => onPlayVideo(item.url)}
            onStop={onStopVideo}
          />
        ) : (
          <div className="relative aspect-[4/5] overflow-hidden bg-[#DDD8CF]">
            <PortfolioMedia
              item={item}
              priority={index < 2}
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="mt-4 flex items-start justify-between gap-3">
          <p className="text-[11px] font-semibold tracking-[0.22em] text-[#8A7B58] uppercase">
            {item.category}
          </p>
          <p className="text-right font-[family-name:var(--font-portfolio-serif)] text-[15px] text-[#8A7B58] sm:text-base">
            {item.title}
          </p>
        </div>

        <PortfolioDivider className="mt-3" />

        <p className="mt-3 text-[14px] font-light text-[#6B6348]">
          {item.subtitle}
        </p>
      </article>
    </StaggerItem>
  );
}

export function PortfolioGallerySection({
  id,
  title,
  items,
  activeVideoUrl,
  onPlayVideo,
  onStopVideo,
}: PortfolioGallerySectionProps) {
  const { sections } = usePortfolioPage();

  return (
    <PortfolioPageShell id={id} compact>
      <Reveal className="mb-6 flex items-end justify-between gap-6 sm:mb-8">
        <PortfolioSerifHeading
          as="h2"
          className="text-[clamp(2rem,4.5vw,3.5rem)] uppercase"
        >
          {sections.heading}
        </PortfolioSerifHeading>
        <PortfolioScriptLabel>{title}</PortfolioScriptLabel>
      </Reveal>

      <StaggerReveal className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
        {items.map((item, index) => (
          <ShowcaseCard
            key={`${item.title}-${isDriveVideoItem(item) ? item.url : "media" in item ? item.media : index}`}
            item={item}
            index={index}
            activeVideoUrl={activeVideoUrl}
            onPlayVideo={onPlayVideo}
            onStopVideo={onStopVideo}
          />
        ))}
      </StaggerReveal>
    </PortfolioPageShell>
  );
}
