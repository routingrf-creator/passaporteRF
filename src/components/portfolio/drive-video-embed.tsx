"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Loader2, Maximize, Minimize, Pause, Play, Video, X } from "lucide-react";
import type { PortfolioDriveVideoItem } from "@/content/portfolio";
import { resolvePortfolioMedia } from "@/content/portfolio";
import { usePortfolioPage } from "@/hooks/use-portfolio-page";
import { parseGoogleDriveFileId } from "@/lib/google-drive-embed";
import {
  playWhenReady,
  prefetchPortfolioVideo,
} from "@/lib/portfolio-video-prefetch";

type DriveVideoEmbedProps = {
  item: PortfolioDriveVideoItem;
  priority?: boolean;
  className?: string;
  isActive: boolean;
  onPlay: () => void;
  onStop: () => void;
};

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";

  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, "0")}`;
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
  const playerRef = useRef<HTMLDivElement>(null);
  const posterRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loadError, setLoadError] = useState(false);

  const poster = resolvePortfolioMedia(item.poster);
  const videoSrc = item.video ? resolvePortfolioMedia(item.video) : null;
  const isValid = Boolean(parseGoogleDriveFileId(item.url));
  const videoTitle = `${item.title} — ${item.subtitle}`;

  const prefetchVideo = useCallback(() => {
    if (videoSrc) prefetchPortfolioVideo(videoSrc);
  }, [videoSrc]);

  useEffect(() => {
    const onFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === playerRef.current);
    };

    document.addEventListener("fullscreenchange", onFullscreenChange);
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange);
  }, []);

  useEffect(() => {
    if (!isActive && document.fullscreenElement === playerRef.current) {
      void document.exitFullscreen();
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive || !videoSrc) return;

    const posterButton = posterRef.current;
    if (!posterButton) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) prefetchVideo();
      },
      { rootMargin: "120px", threshold: 0.2 }
    );

    observer.observe(posterButton);
    return () => observer.disconnect();
  }, [isActive, videoSrc, prefetchVideo]);

  useEffect(() => {
    if (priority && videoSrc) prefetchVideo();
  }, [priority, videoSrc, prefetchVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isActive || !videoSrc) return;

    let cancelled = false;

    setLoadError(false);
    setCurrentTime(0);
    setDuration(0);
    setIsPlaying(false);
    setIsLoading(true);

    void playWhenReady(video)
      .then(() => {
        if (!cancelled) {
          setIsPlaying(true);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setIsPlaying(false);
          setIsLoading(false);
          setLoadError(true);
        }
      });

    return () => {
      cancelled = true;
      video.pause();
    };
  }, [isActive, videoSrc]);

  const togglePlayback = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      setIsLoading(true);
      void playWhenReady(video)
        .then(() => {
          setIsPlaying(true);
          setIsLoading(false);
        })
        .catch(() => {
          setIsPlaying(false);
          setIsLoading(false);
        });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleSeek = useCallback(
    (value: number) => {
      const video = videoRef.current;
      if (!video || !Number.isFinite(duration)) return;

      video.currentTime = value;
      setCurrentTime(value);
    },
    [duration]
  );

  const toggleFullscreen = useCallback(async () => {
    const player = playerRef.current;
    const video = videoRef.current;
    if (!player || !video) return;

    try {
      if (document.fullscreenElement === player) {
        await document.exitFullscreen();
        return;
      }

      const webkitVideo = video as HTMLVideoElement & {
        webkitEnterFullscreen?: () => void;
      };

      if (typeof webkitVideo.webkitEnterFullscreen === "function") {
        webkitVideo.webkitEnterFullscreen();
        return;
      }

      if (player.requestFullscreen) {
        await player.requestFullscreen();
      }
    } catch {
      // Ignore unsupported fullscreen requests.
    }
  }, []);

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
    <div
      ref={playerRef}
      className={`portfolio-video-player relative aspect-[4/5] overflow-hidden bg-[#1a1a1a] ${className ?? ""}`}
    >
      {isActive ? (
        <>
          {videoSrc ? (
            <>
              <video
                ref={videoRef}
                src={videoSrc}
                poster={poster}
                playsInline
                preload="auto"
                className="absolute inset-0 h-full w-full object-contain"
                onClick={togglePlayback}
                onLoadedMetadata={(event) => {
                  setDuration(event.currentTarget.duration || 0);
                  setLoadError(false);
                }}
                onTimeUpdate={(event) => {
                  setCurrentTime(event.currentTarget.currentTime);
                }}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onWaiting={() => setIsLoading(true)}
                onPlaying={() => setIsLoading(false)}
                onCanPlay={() => setIsLoading(false)}
                onEnded={() => setIsPlaying(false)}
                onError={() => {
                  setIsLoading(false);
                  setLoadError(true);
                }}
              />

              {isLoading && !loadError ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-black/45 p-6 text-center">
                  <Loader2
                    className="size-8 animate-spin text-white/90"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <p className="text-xs font-medium tracking-[0.14em] text-white/80 uppercase">
                    {driveVideo.loading}
                  </p>
                </div>
              ) : null}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent pt-10 pb-3">
                <div className="pointer-events-auto flex items-center gap-3 px-3">
                  <button
                    type="button"
                    onClick={togglePlayback}
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                    aria-label={
                      isPlaying ? driveVideo.pause : driveVideo.play
                    }
                  >
                    {isPlaying ? (
                      <Pause className="size-4" />
                    ) : (
                      <Play className="size-4 fill-current" />
                    )}
                  </button>

                  <input
                    type="range"
                    min={0}
                    max={duration || 0}
                    step={0.1}
                    value={Math.min(currentTime, duration || 0)}
                    onChange={(event) =>
                      handleSeek(Number(event.target.value))
                    }
                    className="portfolio-video-scrubber h-1.5 flex-1 cursor-pointer appearance-none rounded-full bg-white/25 accent-[#EBE8E1]"
                    aria-label={driveVideo.timeline}
                    style={{
                      background: `linear-gradient(to right, #EBE8E1 ${
                        duration ? (currentTime / duration) * 100 : 0
                      }%, rgba(255,255,255,0.25) ${
                        duration ? (currentTime / duration) * 100 : 0
                      }%)`,
                    }}
                  />

                  <span className="w-10 shrink-0 text-right text-[10px] font-medium tracking-wide text-white/80 tabular-nums">
                    {formatTime(currentTime)}
                  </span>

                  <button
                    type="button"
                    onClick={() => void toggleFullscreen()}
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition-colors hover:bg-white/25"
                    aria-label={
                      isFullscreen
                        ? driveVideo.exitFullscreen
                        : driveVideo.fullscreen
                    }
                  >
                    {isFullscreen ? (
                      <Minimize className="size-4" />
                    ) : (
                      <Maximize className="size-4" />
                    )}
                  </button>
                </div>
              </div>

              {loadError ? (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 p-6 text-center">
                  <p className="text-sm text-white/90">{driveVideo.loadError}</p>
                </div>
              ) : null}
            </>
          ) : (
            <div className="flex h-full items-center justify-center bg-[#DDD8CF] p-6 text-center">
              <p className="text-sm text-[#6B6348]">{driveVideo.missingFile}</p>
            </div>
          )}

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
          ref={posterRef}
          type="button"
          onClick={onPlay}
          onPointerEnter={prefetchVideo}
          onFocus={prefetchVideo}
          className="group relative h-full w-full cursor-pointer"
          aria-label={`${driveVideo.play} — ${item.title}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={poster}
            alt={videoTitle}
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
