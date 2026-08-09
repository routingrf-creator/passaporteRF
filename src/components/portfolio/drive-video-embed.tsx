"use client";

import { Play, Video, X } from "lucide-react";
import type { PortfolioDriveVideoItem } from "@/content/portfolio";
import { resolvePortfolioMedia } from "@/content/portfolio";
import { usePortfolioPage } from "@/hooks/use-portfolio-page";
import {
  getGoogleDrivePreviewUrl,
  parseGoogleDriveFileId,
} from "@/lib/google-drive-embed";

type DriveVideoEmbedProps = {
  item: PortfolioDriveVideoItem;
  priority?: boolean;
  className?: string;
  isActive: boolean;
  onPlay: () => void;
  onStop: () => void;
};

export function DriveVideoEmbed({
  item,
  priority,
  className,
  isActive,
  onPlay,
  onStop,
}: DriveVideoEmbedProps) {
  const { driveVideo } = usePortfolioPage();
  const poster = resolvePortfolioMedia(item.poster);
  const previewUrl = getGoogleDrivePreviewUrl(item.url, { autoplay: true });
  const isValid = Boolean(parseGoogleDriveFileId(item.url));

  if (!isValid) {
    return (
      <div
        className={`flex aspect-[4/5] items-center justify-center bg-[#DDD8CF] p-6 text-center ${className ?? ""}`}
      >
        <p className="text-sm text-[#6B6348]">{driveVideo.invalidLink}</p>      </div>
    );
  }

  return (
    <div
      className={`relative aspect-[4/5] overflow-hidden bg-[#1a1a1a] ${className ?? ""}`}
    >
      {isActive ? (
        <>
          <iframe
            key={previewUrl}
            src={previewUrl!}
            title={`${item.title} — ${item.subtitle}`}
            className="absolute inset-0 h-full w-full border-0"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowFullScreen
          />
          <button
            type="button"
            onClick={onStop}
            className="absolute top-3 right-3 z-10 flex size-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            aria-label={`${driveVideo.close} — ${item.title}`}
          >
            <X className="size-4" />
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={onPlay}
          className="group relative h-full w-full cursor-pointer"
          aria-label={`${driveVideo.play} — ${item.title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={`${item.title} — ${item.subtitle}`}
            loading={priority ? "eager" : "lazy"}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
          <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-white uppercase backdrop-blur-sm">
            <Video className="size-3.5" />
            {driveVideo.label}
          </span>
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-[#8A7B58] shadow-lg transition-transform group-hover:scale-105">
              <Play className="size-6 fill-current" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
