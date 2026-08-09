"use client";

import { useState } from "react";
import { usePortfolioPage } from "@/hooks/use-portfolio-page";
import { CoverSection } from "@/components/portfolio/cover-section";
import { WhoWeAreSection } from "@/components/portfolio/who-we-are-section";
import { WhyPartnerSection } from "@/components/portfolio/why-partner-section";
import { ServicesExpertiseSection } from "@/components/portfolio/services-expertise-section";
import { PortfolioGallerySection } from "@/components/portfolio/portfolio-gallery-section";
import { PhotosGallerySection } from "@/components/portfolio/photos-gallery-section";
import { InvestmentGuideSection } from "@/components/portfolio/investment-guide-section";
import { ProcessSection } from "@/components/portfolio/process-section";
import { ContactSection } from "@/components/portfolio/contact-section";
import { PortfolioMediaKitDownload } from "@/components/portfolio/portfolio-media-kit-download";

export function PortfolioContent() {
  const { lifestylePortfolio, travelPortfolio, photosPortfolio, sections, locale } =
    usePortfolioPage();
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);

  return (
    <>
      <div key={locale} className="portfolio-editorial">
        <CoverSection />
        <WhoWeAreSection />
        <WhyPartnerSection />
        <ServicesExpertiseSection />
        <PortfolioGallerySection
          id="portfolio-lifestyle"
          title={sections.lifestyle}
          items={lifestylePortfolio}
          activeVideoUrl={activeVideoUrl}
          onPlayVideo={setActiveVideoUrl}
          onStopVideo={() => setActiveVideoUrl(null)}
        />
        <PortfolioGallerySection
          id="portfolio-travel"
          title={sections.travel}
          items={travelPortfolio}
          activeVideoUrl={activeVideoUrl}
          onPlayVideo={setActiveVideoUrl}
          onStopVideo={() => setActiveVideoUrl(null)}
        />
        <PhotosGallerySection items={photosPortfolio} />
        <InvestmentGuideSection />
        <ProcessSection />
        <ContactSection />
      </div>
      <PortfolioMediaKitDownload />
    </>
  );
}
