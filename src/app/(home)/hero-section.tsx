"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/contexts/language-context";

const HERO_MEDIA: {
  src: string;
  type: "photo" | "video";
  pos: string;
}[] = [
  // First 6: visible on mobile (3×2) and desktop (first row of 6×2)
  { src: "/hero/IMG_5393.mp4", type: "video", pos: "center 50%" },
  { src: "/hero/IMG_3479_Original.JPG", type: "photo", pos: "center 20%" },
  { src: "/hero/IMG_0169.mp4", type: "video", pos: "center 10%" },
  { src: "/hero/IMG_0233.JPG", type: "photo", pos: "center 0%" },
  { src: "/hero/IMG_5768.jpg", type: "photo", pos: "center 50%" },
  { src: "/hero/IMG_6882.JPG", type: "photo", pos: "center 20%" },
  // Last 6: hidden on mobile, desktop second row
  { src: "/hero/IMG_1917.jpg", type: "photo", pos: "center 20%" },
  { src: "/hero/IMG_4064.jpg", type: "photo", pos: "center 40%" },
  { src: "/hero/IMG_3364.mp4", type: "video", pos: "center 20%" },
  { src: "/hero/IMG_6358.jpg", type: "photo", pos: "center 50%" },
  { src: "/hero/IMG_0147.mp4", type: "video", pos: "center 20%" },
  { src: "/hero/IMG_3566_Original.JPG", type: "photo", pos: "center 90%" },
];

export function HeroSection() {
  const t = useT();

  return (
    <section className="relative h-[100svh] overflow-hidden bg-passport-dark">
      {/* Media grid — 3×2 mobile, 6×2 desktop */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-2 sm:grid-cols-6 sm:grid-rows-2">
        {HERO_MEDIA.map((item, i) => (
          <div
            key={i}
            className={`relative overflow-hidden ${i >= 6 ? "hidden sm:block" : ""}`}
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
                suppressHydrationWarning
                className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: item.pos }}
              />
            ) : (
              <img
                src={item.src}
                alt=""
                className="absolute inset-0 h-full w-full object-cover"
                style={{ objectPosition: item.pos }}
                loading="eager"
              />
            )}
          </div>
        ))}
      </div>

      {/* Dark overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 55%, rgba(13,59,102,0.75) 0%, rgba(13,59,102,0.45) 50%, transparent 100%)",
        }}
      />

      {/* Content */}
      <div className="pointer-events-none relative z-20 flex h-[100svh] items-end pb-16 sm:items-center sm:pb-0">
        <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center sm:text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-white/90 backdrop-blur-md sm:mb-6 sm:px-4 sm:py-1.5 sm:text-sm"
            >
              <Compass className="size-3.5 sm:size-4" />
              {t.hero.badge}
            </motion.div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              {t.hero.title}{" "}
              <span className="text-passport-yellow drop-shadow-md">
                {t.hero.titleHighlight}
              </span>
            </h1>

            <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-white/85 drop-shadow-sm sm:mt-6 sm:max-w-xl sm:text-lg">
              {t.hero.subtitle}
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
            >
              <Button
                asChild
                variant="outline"
                size="lg"
                className="pointer-events-auto w-full border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white sm:w-auto"
              >
                <Link href="/destinos">
                  <Map className="size-4" />
                  {t.hero.explorar}
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="pointer-events-auto w-full bg-passport-coral text-white shadow-lg hover:bg-passport-coral/90 sm:w-auto"
              >
                <Link href="/roteiros">{t.hero.criar}</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        aria-label="Rolar para baixo"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        className="pointer-events-auto absolute bottom-8 left-1/2 z-30 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors duration-300"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <motion.div
          className="relative flex h-9 w-5 items-start justify-center rounded-full border-2 border-current pt-1.5"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 380 }}
        >
          <motion.span
            className="h-1.5 w-0.5 rounded-full bg-current"
            animate={{ y: [0, 8, 0], opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div className="flex flex-col items-center -space-y-1.5">
          {[0, 1].map((i) => (
            <motion.svg
              key={i}
              width="16"
              height="10"
              viewBox="0 0 16 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{ opacity: [0.3, 1, 0.3], y: [0, 3, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: "easeInOut",
                delay: i * 0.22,
              }}
            >
              <path
                d="M1 1L8 8L15 1"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          ))}
        </motion.div>
      </motion.button>
    </section>
  );
}
