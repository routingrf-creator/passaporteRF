import { SectionHeading } from "@/components/section-heading";
import { TestimonialCard } from "@/components/testimonial-card";
import { MetricsStrip } from "@/components/metrics-strip";
import { testimonials } from "@/data/testimonials";

export function SocialProofSection() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="O que dizem nossos viajantes"
          subtitle="Experiencias reais de quem viajou com a gente"
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
            />
          ))}
        </div>

        <div className="mt-12">
          <MetricsStrip />
        </div>
      </div>
    </section>
  );
}
