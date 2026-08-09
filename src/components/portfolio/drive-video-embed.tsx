"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Play, Video, X } from "lucide-react";
import type { PortfolioDriveVideoItem } from "@/content/portfolio";
import { resolvePortfolioMedia } from "@/content/portfolio";
import { useIsMobile } from "@/hooks/use-is-mobile";
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

type MobileVideoOverlayProps = {
  previewUrl: string;
  title: string;
  closeLabel: string;
  onClose: () => void;
};

function MobileVideoOverlay({
  previewUrl,
  title,
  closeLabel,
  onClose,
}: MobileVideoOverlayProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[200] flex flex-col bg-black"
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        className="flex shrink-0 justify-end p-3"
        style={{ paddingTop: "max(0.75rem, env(safe-area-inset-top))" }}
      >
        <button
          type="button"
          onClick={onClose}
          className="flex size-10 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
          aria-label={closeLabel}
        >
          <X className="size-5" />
        </button>
      </div>

      <div className="relative min-h-0 flex-1 pb-[env(safe-area-inset-bottom)]">
        <iframe
          key={previewUrl}
          src={previewUrl}
          title={title}
          className="absolute inset-0 h-full w-full border-0"
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>,
    document.body
  );
}

export function DriveVideoEmbed({
  item,
  priority,
  className,
  isActive,
  onPlay,
  onStop,
}: DriveVideoEmbedProps) {
  const { driveVideo } = usePortfolioPage();
  const isMobile = useIsMobile();
  const poster = resolvePortfolioMedia(item.poster);
  const previewUrl = getGoogleDrivePreviewUrl(item.url, { autoplay: true });
  const isValid = Boolean(parseGoogleDriveFileId(item.url));
  const videoTitle = `${item.title} — ${item.subtitle}`;
  const useFullscreenPlayer = isActive && isMobile && previewUrl;
  const useInlinePlayer = isActive && !isMobile && previewUrl;

  if (!isValid) {
    return (
      <div
        className={`flex aspect-[4/5] items-center justify-center bg-[#DDD8CF] p-6 text-center ${className ?? ""}`}
      >
        <p className="text-sm text-[#6B6348]">{driveVideo.invalidLink}</p>
      </div>
    );
  }

  return (
    <>
      {useFullscreenPlayer ? (
        <MobileVideoOverlay
          previewUrl={previewUrl}
          title={videoTitle}
          closeLabel={`${driveVideo.close} — ${item.title}`}
          onClose={onStop}
        />
      ) : null}

      <div
        className={`relative aspect-[4/5] overflow-hidden bg-[#1a1a1a] ${className ?? ""}`}
      >
        {useInlinePlayer ? (
          <>
            <iframe
              key={previewUrl}
              src={previewUrl}
              title={videoTitle}
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
            aria-pressed={isActive && isMobile}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={poster}
              alt={videoTitle}
              loading={priority ? "eager" : "lazy"}
              className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] ${
                isActive && isMobile ? "brightness-75" : ""
              }`}
            />
            <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
            <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-white uppercase backdrop-blur-sm">
              <Video className="size-3.5" />
              {driveVideo.label}
            </span>
            {!(isActive && isMobile) ? (
              <span className="absolute inset-0 flex items-center justify-center">
                <span className="flex size-14 items-center justify-center rounded-full bg-white/90 text-[#8A7B58] shadow-lg transition-transform group-hover:scale-105">
                  <Play className="size-6 fill-current" />
                </span>
              </span>
            ) : null}
          </button>
        )}
      </div>
    </>
  );
}
