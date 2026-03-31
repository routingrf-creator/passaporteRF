"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagicCardProps {
  children: React.ReactNode;
  className?: string;
}

export function MagicCard({ children, className }: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn("group relative overflow-hidden rounded-3xl", className)}
    >
      {/* Animated gradient border glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl"
        style={{
          background: isHovered
            ? `radial-gradient(500px circle at ${mousePos.x}px ${mousePos.y}px, rgba(242,125,125,0.25) 0%, rgba(246,185,59,0.15) 40%, transparent 70%)`
            : "none",
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Specular highlight that follows cursor */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl"
        style={{
          background: isHovered
            ? `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15) 0%, transparent 60%)`
            : "none",
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Glass card content */}
      <div className="relative z-10 rounded-3xl border border-white/40 bg-white/50 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)] backdrop-blur-xl transition-all duration-500 group-hover:border-white/60 group-hover:bg-white/65 group-hover:shadow-[0_12px_48px_rgba(30,111,175,0.12)]">
        {children}
      </div>
    </motion.div>
  );
}
