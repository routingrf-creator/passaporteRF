import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Destination } from "@/data/types";

interface DestinationCardProps {
  destination: Destination;
  className?: string;
}

export function DestinationCard({ destination, className }: DestinationCardProps) {
  const { slug, city, country, tags, shortDescription, image } = destination;

  return (
    <Link
      href={`/destinos/${slug}`}
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border bg-card text-card-foreground shadow-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg",
        className
      )}
    >
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={image}
          alt={`${city}, ${country}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
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
              <Badge key={tag} variant="secondary" className="text-[11px]">
                {tag}
              </Badge>
            ))}
          </div>
        )}

        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {shortDescription}
        </p>

        <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-passport-coral transition-colors group-hover:text-passport-coral/80">
          Ver roteiro
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
