"use client";

import { useMemo } from "react";
import type { PortfolioGalleryItem } from "@/content/portfolio";
import { resolvePortfolioMedia } from "@/content/portfolio";

type PortfolioMediaProps = {
  item: Exclude<PortfolioGalleryItem, { type: "youtube" }>;
  className?: string;
  priority?: boolean;
  grayscale?: boolean;
};

export function PortfolioMedia({
  item,
  className,
  priority,
  grayscale,
}: PortfolioMediaProps) {
  const src = useMemo(() => resolvePortfolioMedia(item.media), [item.media]);
  const poster =
    item.type === "video" && item.poster
      ? resolvePortfolioMedia(item.poster)
      : undefined;

  if (item.type === "video") {
    return (
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload={priority ? "auto" : "metadata"}
        className={className}
      />
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${item.title} — ${item.subtitle}`}
      loading={priority ? "eager" : "lazy"}
      className={className}
      style={grayscale ? { filter: "grayscale(100%)" } : undefined}
    />
  );
}

export function PortfolioImage({
  src,
  alt,
  className,
  priority,
  grayscale,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  grayscale?: boolean;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      className={className}
      style={grayscale ? { filter: "grayscale(100%)" } : undefined}
    />
  );
}
