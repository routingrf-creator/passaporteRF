import { HeroSection } from "./(home)/hero-section";
import { HighlightsSection } from "./(home)/highlights-section";
import { TrendingDestinations } from "./(home)/trending-destinations";
import { HowItWorks } from "./(home)/how-it-works";
import { ContentSection } from "./(home)/content-section";
import { SocialProofSection } from "./(home)/social-proof-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <TrendingDestinations />
      <HowItWorks />
      <ContentSection />
      <SocialProofSection />
    </>
  );
}
