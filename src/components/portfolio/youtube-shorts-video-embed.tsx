"use client";

import { useEffect, useMemo, useState } from "react";
import { Loader2, Play, Video, X } from "lucide-react";
import type { PortfolioYoutubeVideoItem } from "@/content/portfolio";
import { resolvePortfolioMedia } from "@/content/portfolio";
import { usePortfolioPage } from "@/hooks/use-portfolio-page";
import {
  getYoutubeEmbedUrl,
  parseYoutubeVideoId,
} from "@/lib/youtube-shorts-embed";

type YoutubeShortsVideoEmbedProps = {
  item: PortfolioYoutubeVideoItem;
  priority?: boolean;
  className?: string;
  isActive: boolean;
  onPlay: () => void;
  onStop: () => void;
};

export function YoutubeShortsVideoEmbed({
  item,
  priority,
  className,
  isActive,
  onPlay,
  onStop,
}: YoutubeShortsVideoEmbedProps) {
  const { portfolioVideo } = usePortfolioPage();
  const [isLoading, setIsLoading] = useState(false);
  const [loadError, setLoadError] = useState(false);

  const poster = resolvePortfolioMedia(item.poster);
  const videoId = parseYoutubeVideoId(item.url);
  const isValid = Boolean(videoId);
  const videoTitle = `${item.title} — ${item.subtitle}`;

  const embedUrl = useMemo(() => {
    if (!isActive) return null;
    const origin =
      typeof window !== "undefined" ? window.location.origin : undefined;
    return getYoutubeEmbedUrl(item.url, { autoplay: true, origin });
  }, [isActive, item.url]);

  useEffect(() => {
    if (!isActive) {
      setIsLoading(false);
      setLoadError(false);
    }
  }, [isActive, item.url]);

  useEffect(() => {
    if (!isActive || !embedUrl) return;

    setIsLoading(true);
    setLoadError(false);

    const timeout = window.setTimeout(() => {
      setIsLoading(false);
    }, 12000);

    return () => window.clearTimeout(timeout);
  }, [isActive, embedUrl]);

  if (!isValid) {
    return (
      <div
        className={`flex aspect-[4/5] items-center justify-center bg-[#DDD8CF] p-6 text-center ${className ?? ""}`}
      >
        <p className="text-sm text-[#6B6348]">{portfolioVideo.invalidLink}</p>
      </div>
    );
  }

  return (
    <div
      className={`portfolio-video-player relative aspect-[4/5] overflow-hidden bg-[#1a1a1a] ${className ?? ""}`}
    >
      {isActive ? (
        <>
          {embedUrl ? (
            <iframe
              key={embedUrl}
              src={embedUrl}
              title={videoTitle}
              className="absolute inset-0 h-full w-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setLoadError(true);
                setIsLoading(false);
              }}
            />
          ) : null}

          {isLoading && !loadError ? (
            <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/45 p-6 text-center">
              <Loader2
                className="size-8 animate-spin text-white/90"
                strokeWidth={1.75}
                aria-hidden
              />
              <p className="text-xs font-medium tracking-[0.14em] text-white/80 uppercase">
                {portfolioVideo.loading}
              </p>
            </div>
          ) : null}

          {loadError ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black/70 p-6 text-center">
              <p className="text-sm text-white/90">{portfolioVideo.loadError}</p>
            </div>
          ) : null}

          <button
            type="button"
            onClick={onStop}
            className="absolute top-3 right-3 z-10 flex size-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            aria-label={`${portfolioVideo.close} — ${item.title}`}
          >
            <X className="size-4" />
          </button>
        </>
      ) : (
        <button
          type="button"
          onClick={onPlay}
          className="group relative h-full w-full cursor-pointer"
          aria-label={`${portfolioVideo.play} — ${item.title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={videoTitle}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/30" />
          <span className="absolute top-3 left-3 flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[10px] font-medium tracking-[0.12em] text-white uppercase backdrop-blur-sm">
            <Video className="size-3.5" />
            {portfolioVideo.label}
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
