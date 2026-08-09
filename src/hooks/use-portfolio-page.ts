"use client";

import { useMemo } from "react";
import { useLanguage } from "@/contexts/language-context";
import { getT } from "@/lib/translations";
import {
  contactContent,
  lifestylePortfolio,
  photosPortfolio,
  portfolioAssets,
  travelPortfolio,
} from "@/content/portfolio";

export function usePortfolioPage() {
  const { locale } = useLanguage();
  const p = getT(locale).portfolio;

  return useMemo(
    () => ({
      locale,
      meta: p.meta,
      cover: {
        brand: "PASSAPORTERF" as const,
        year: "2026" as const,
        ...p.cover,
      },
      whoWeAre: p.whoWeAre,
      whyPartner: p.whyPartner,
      services: p.services,
      sections: p.sections,
      investment: p.investment,
      process: p.process,
      contact: {
        ...p.contact,
        email: contactContent.email,
        href: contactContent.href,
        social: contactContent.social,
      },
      driveVideo: p.driveVideo,
      mediaKitDownload: p.mediaKitDownload,
      assets: portfolioAssets,
      lifestylePortfolio: lifestylePortfolio.map((item, index) => ({
        ...item,
        ...p.lifestyleItems[index],
      })),
      travelPortfolio: travelPortfolio.map((item, index) => ({
        ...item,
        ...p.travelItems[index],
      })),
      photosPortfolio: photosPortfolio.map((item, index) => ({
        ...item,
        ...p.photosItems[index],
      })),
    }),
    [locale, p]
  );
}
