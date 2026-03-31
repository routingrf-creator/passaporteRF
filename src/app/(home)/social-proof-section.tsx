"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { MetricsStrip } from "@/components/metrics-strip";
import { testimonials } from "@/data/testimonials";
import { useT } from "@/contexts/language-context";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export function SocialProofSection() {
  const t = useT();
  const featured = testimonials.slice(0, 3);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.socialProof.title}
          subtitle={t.socialProof.subtitle}
          centered
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((testimonial) => (
            <motion.div key={testimonial.name} variants={cardAnim}>
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12">
          <MetricsStrip />
        </div>
      </div>
    </section>
  );
}
