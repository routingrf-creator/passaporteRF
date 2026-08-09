"use client";

import { Download } from "lucide-react";
import { usePortfolioPage } from "@/hooks/use-portfolio-page";

const MEDIA_KIT_PDF = "/portfolio/PassaporteRF-Portfolio-2026.pdf";
const MEDIA_KIT_FILENAME = "PassaporteRF Portfolio 2026.pdf";

export function PortfolioMediaKitDownload() {
  const { mediaKitDownload } = usePortfolioPage();

  return (
    <a
      href={MEDIA_KIT_PDF}
      download={MEDIA_KIT_FILENAME}
      aria-label={mediaKitDownload}
      className="group fixed right-5 bottom-5 z-50 flex items-center gap-0 overflow-hidden rounded-full border border-[#8A7B58]/25 bg-[#8A7B58] py-3.5 pr-3.5 pl-3.5 text-[#EBE8E1] shadow-[0_8px_32px_rgba(109,109,82,0.28)] transition-all duration-300 hover:gap-2.5 hover:pr-5 hover:shadow-[0_12px_40px_rgba(109,109,82,0.36)] sm:right-6 sm:bottom-6"
    >
      <Download className="size-5 shrink-0" strokeWidth={1.75} aria-hidden />
      <span className="max-w-0 overflow-hidden text-[11px] font-medium tracking-[0.18em] whitespace-nowrap uppercase opacity-0 transition-all duration-300 group-hover:max-w-48 group-hover:opacity-100">
        {mediaKitDownload}
      </span>
    </a>
  );
}
