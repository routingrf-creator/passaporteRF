"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import { getT } from "@/lib/translations";

export type Locale = "pt" | "en" | "es" | "fr" | "de";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(
  undefined
);

const STORAGE_KEY = "passaporterf-locale";

function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return "pt";

  const lang = navigator.language?.toLowerCase() ?? "";

  if (lang.startsWith("de")) return "de";
  if (lang.startsWith("fr")) return "fr";
  if (lang.startsWith("es")) return "es";
  if (lang.startsWith("en")) return "en";
  return "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
    const initial = stored ?? detectBrowserLocale();
    setLocaleState(initial);
  }, []);

  function setLocale(next: Locale) {
    setLocaleState(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    return { locale: "pt" as Locale, setLocale: () => {} };
  }
  return ctx;
}

export function useT() {
  const { locale } = useLanguage();
  return getT(locale);
}
