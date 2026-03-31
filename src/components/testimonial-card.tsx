"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
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
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={cn(
        "group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-white/40 bg-white/50 p-6 text-card-foreground shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-shadow duration-500 hover:border-white/60 hover:bg-white/65 hover:shadow-[0_16px_48px_rgba(30,111,175,0.13)]",
        className
      )}
    >
      <Quote className="absolute -right-2 -top-2 size-20 text-passport-blue/5 transition-colors duration-500 group-hover:text-passport-blue/10" />

      <div className="flex items-center gap-3">
        <motion.div
          className="relative size-12 shrink-0 overflow-hidden rounded-full border-2 border-white/60 shadow-[0_0_16px_rgba(246,185,59,0.2)]"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 380, damping: 18 }}
        >
          <Image
            src={avatar}
            alt={name}
            fill
            sizes="48px"
            className="object-cover"
            loading="lazy"
          />
        </motion.div>
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
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.4 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 * i, type: "spring", stiffness: 400, damping: 16 }}
          >
            <Star
              className={cn(
                "size-4",
                i < rating
                  ? "fill-passport-yellow text-passport-yellow"
                  : "fill-muted text-muted"
              )}
            />
          </motion.span>
        ))}
      </div>

      <blockquote className="relative flex-1 text-sm italic leading-relaxed text-muted-foreground">
        &ldquo;{text}&rdquo;
      </blockquote>
    </motion.div>
  );
}
