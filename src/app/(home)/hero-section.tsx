"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Compass, Map } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useT } from "@/contexts/language-context";

const HERO_MEDIA: {
  src: string;
  type: "photo" | "video";
  area: string;
  span: number;
  pos: string;
}[] = [
  // area = row-start / col-start / row-end / col-end
  // span = mobile row-span
  // pos = object-position (ex: "center 20%", "center top", "center center")

  // c1: V1 tall (r1-2) + P1 tall (r3-4) + P2 sm (r5)
  { src: "/hero/IMG_5393.mp4", type: "video", area: "1/1/3/2", span: 3, pos: "center 50%" },
  { src: "/hero/IMG_1917.jpg", type: "photo", area: "3/1/5/2", span: 2, pos: "center 20%" },
  { src: "/hero/IMG_8719.jpg", type: "photo", area: "5/1/6/2", span: 1, pos: "center 20%" },

  // c2: P3 tall (r1-2) + P4 tall (r3-4) + P5 sm (r5)
  { src: "/hero/IMG_3479_Original.JPG", type: "photo", area: "1/2/3/3", span: 2, pos: "center 20%" },
  { src: "/hero/IMG_4064.jpg", type: "photo", area: "3/2/5/3", span: 2, pos: "center 40%" },
  { src: "/hero/761AAA04-36F2-4514-A9A2-D1C999F46912.jpg", type: "photo", area: "5/2/6/3", span: 1, pos: "center 20%" },

  // c3: V2 tall (r1-2) + P6 tall (r3-4) + P7 sm (r5)
  { src: "/hero/IMG_0169.mp4", type: "video", area: "1/3/3/4", span: 3, pos: "center 10%" },
  { src: "/hero/IMG_6358.jpg", type: "photo", area: "3/3/5/4", span: 2, pos: "center 50%" },
  { src: "/hero/1bee1154-11ea-4d47-8975-502ac50c40ee.jpg", type: "photo", area: "5/3/6/4", span: 1, pos: "center 20%" },

  // c4: P8 sm (r1) + V3 tall (r2-3) + P9 tall (r4-5)
  { src: "/hero/IMG_0233.JPG", type: "photo", area: "1/4/2/5", span: 1, pos: "center 0%" },
  { src: "/hero/IMG_3364.mp4", type: "video", area: "2/4/4/5", span: 2, pos: "center 20%" },
  { src: "/hero/IMG_3633_Original.JPG", type: "photo", area: "4/4/6/5", span: 2, pos: "center 40%" },

  // c5: P10 tall (r1-2) + V4 tall (r3-4) + P11 sm (r5)
  { src: "/hero/IMG_5768.jpg", type: "photo", area: "1/5/3/6", span: 2, pos: "center 50%" },
  { src: "/hero/IMG_0147.mp4", type: "video", area: "3/5/5/6", span: 2, pos: "center 20%" },
  { src: "/hero/dd8a8f85-5a6c-4c30-860a-581d493adf8a.jpg", type: "photo", area: "5/5/6/6", span: 1, pos: "center 20%" },

  // c6: P12 tall (r1-2) + P13 tall (r3-4) + Pdup sm (r5)
  { src: "/hero/IMG_6882.JPG", type: "photo", area: "1/6/3/7", span: 2, pos: "center 20%" },
  { src: "/hero/IMG_3566_Original.JPG", type: "photo", area: "3/6/5/7", span: 2, pos: "center 90%" },
  { src: "/hero/761AAA04-36F2-4514-A9A2-D1C999F46912.jpg", type: "photo", area: "5/6/6/7", span: 1, pos: "center 20%" },
];

const SPAN_CLASS: Record<number, string> = {
  1: "",
  2: "row-span-2",
  3: "row-span-3",
};

export function HeroSection() {
  const t = useT();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-passport-dark sm:min-h-[90vh]">
      {/* Bento media grid */}
      <div
        className="hero-grid absolute grid grid-cols-3 auto-rows-[16vh] gap-0.5 grid-flow-dense"
        style={{ inset: "-12px" }}
      >
        {HERO_MEDIA.map((item, i) => (
          <div
            key={i}
            className={`relative overflow-hidden rounded-sm ${SPAN_CLASS[item.span]}`}
            style={{ "--area": item.area } as React.CSSProperties}
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                autoPlay
                muted
                loop
                playsInline
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
      <div className="pointer-events-none relative z-20 flex min-h-[100svh] items-end pb-16 sm:min-h-[90vh] sm:items-center sm:pb-0">
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
