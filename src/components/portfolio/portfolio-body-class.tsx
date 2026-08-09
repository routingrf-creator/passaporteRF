"use client";

import { useEffect } from "react";

export function PortfolioBodyClass() {
  useEffect(() => {
    document.body.classList.add("portfolio-page");
    return () => document.body.classList.remove("portfolio-page");
  }, []);

  return null;
}
