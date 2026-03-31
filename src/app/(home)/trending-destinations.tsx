"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { DestinationCard } from "@/components/destination-card";
import { destinations } from "@/data/destinations";
import { useT } from "@/contexts/language-context";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function TrendingDestinations() {
  const t = useT();
  const featured = destinations.slice(0, 4);

  return (
    <section className="bg-passport-cream/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.trendingDestinations.title}
          subtitle={t.trendingDestinations.subtitle}
          centered
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featured.map((destination) => (
            <motion.div key={destination.slug} variants={cardVariants}>
              <DestinationCard destination={destination} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="mt-10 text-center"
        >
          <Button
            asChild
            variant="outline"
            size="lg"
            className="group transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
          >
            <Link href="/destinos">
              {t.trendingDestinations.verTodos}
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
