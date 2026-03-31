"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useT } from "@/contexts/language-context";
import type { Destination } from "@/data/types";

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

export function DestinationCard({ destination, className }: DestinationCardProps) {
  const { slug, city, country, tags, shortDescription, image } = destination;
  const t = useT();

  return (
    <Link
      href={`/destinos/${slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-3xl border border-white/40 bg-white/50 text-card-foreground shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-500 hover:scale-[1.02] hover:border-white/60 hover:bg-white/65 hover:shadow-[0_16px_48px_rgba(30,111,175,0.12)]",
        className
      )}
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={`${city}, ${country}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-passport-blue">
            {country}
          </p>
          <h3 className="mt-1 text-lg font-bold text-passport-ink">{city}</h3>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="border border-white/50 bg-white/60 text-[11px] backdrop-blur-sm"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {shortDescription}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-passport-coral transition-colors group-hover:text-passport-coral/80">
          {t.destinationCard.verMais}
          <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
