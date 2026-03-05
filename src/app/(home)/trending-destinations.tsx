import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import { DestinationCard } from "@/components/destination-card";
import { destinations } from "@/data/destinations";

export function TrendingDestinations() {
  const featured = destinations.slice(0, 4);

  return (
    <section className="bg-passport-cream/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Destinos em alta"
          subtitle="Os lugares que estao no radar dos viajantes"
          centered
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((destination) => (
            <DestinationCard key={destination.slug} destination={destination} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/destinos">
              Ver todos os destinos
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
