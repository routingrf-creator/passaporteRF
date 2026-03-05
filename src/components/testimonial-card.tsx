import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/data/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  const { name, avatar, destination, text, rating } = testimonial;

  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-2xl border bg-card p-6 text-card-foreground shadow-sm",
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className="relative size-12 shrink-0 overflow-hidden rounded-full border-2 border-passport-yellow/50">
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="48px"
            className="object-cover"
            loading="lazy"
          />
        </div>
        <div>
          <p className="text-sm font-semibold text-passport-ink">{name}</p>
          <p className="text-xs text-muted-foreground">{destination}</p>
        </div>
      </div>

      <div
        className="flex gap-0.5"
        aria-label={`Avaliacao: ${rating} de 5 estrelas`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "size-4",
              i < rating
                ? "fill-passport-yellow text-passport-yellow"
                : "fill-muted text-muted"
            )}
          />
        ))}
      </div>

      <blockquote className="flex-1 text-sm italic leading-relaxed text-muted-foreground">
        &ldquo;{text}&rdquo;
      </blockquote>
    </div>
  );
}
