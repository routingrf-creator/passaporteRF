"use client";

import { useLanguage, type Locale } from "@/contexts/language-context";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

function BrazilFlag({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      className={className}
    >
      <rect width="640" height="480" fill="#009B3A" />
      <polygon points="320,52 608,240 320,428 32,240" fill="#FEDF00" />
      <circle cx="320" cy="240" r="96" fill="#002776" />
      <path
        d="M196 240a124 124 0 0 0 248 0"
        fill="none"
        stroke="#FFF"
        strokeWidth="12"
        transform="rotate(-10 320 240)"
      />
    </svg>
  );
}

function USAFlag({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      className={className}
    >
      <rect width="640" height="480" fill="#FFF" />
      <g fill="#B22234">
        <rect width="640" height="37" />
        <rect y="73" width="640" height="37" />
        <rect y="147" width="640" height="37" />
        <rect y="220" width="640" height="37" />
        <rect y="294" width="640" height="37" />
        <rect y="368" width="640" height="37" />
        <rect y="442" width="640" height="37" />
      </g>
      <rect width="260" height="258" fill="#3C3B6E" />
      <g fill="#FFF">
        {[...Array(5)].map((_, row) =>
          [...Array(6)].map((_, col) => (
            <circle
              key={`a-${row}-${col}`}
              cx={22 + col * 43}
              cy={18 + row * 52}
              r="8"
            />
          ))
        )}
        {[...Array(4)].map((_, row) =>
          [...Array(5)].map((_, col) => (
            <circle
              key={`b-${row}-${col}`}
              cx={43 + col * 43}
              cy={44 + row * 52}
              r="8"
            />
          ))
        )}
      </g>
    </svg>
  );
}

function SpainFlag({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      className={className}
    >
      <rect width="640" height="480" fill="#AA151B" />
      <rect y="120" width="640" height="240" fill="#F1BF00" />
    </svg>
  );
}

function FranceFlag({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      className={className}
    >
      <rect width="640" height="480" fill="#ED2939" />
      <rect width="427" height="480" fill="#fff" />
      <rect width="213" height="480" fill="#002395" />
    </svg>
  );
}

function GermanyFlag({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      className={className}
    >
      <rect width="640" height="480" fill="#FFCE00" />
      <rect width="640" height="320" fill="#D00" />
      <rect width="640" height="160" fill="#000" />
    </svg>
  );
}

const languages: { code: Locale; label: string; Flag: React.FC<{ className?: string }> }[] = [
  { code: "pt", label: "Português", Flag: BrazilFlag },
  { code: "en", label: "English", Flag: USAFlag },
  { code: "es", label: "Español", Flag: SpainFlag },
  { code: "fr", label: "Français", Flag: FranceFlag },
  { code: "de", label: "Deutsch", Flag: GermanyFlag },
];

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const current = languages.find((l) => l.code === locale) ?? languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="gap-1.5 px-2 text-passport-ink/70 hover:text-passport-blue focus-visible:ring-1 focus-visible:ring-passport-blue/30"
        >
          <current.Flag className="size-5 shrink-0 rounded-sm shadow-sm ring-1 ring-black/10" />
          <span className="text-xs font-medium uppercase tracking-wide">
            {current.code}
          </span>
          <ChevronDown className="size-3 opacity-50" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        {languages.map(({ code, label, Flag }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => setLocale(code)}
            className={`gap-2.5 ${
              code === locale
                ? "bg-passport-blue/5 text-passport-blue font-medium"
                : ""
            }`}
          >
            <Flag className="size-5 shrink-0 rounded-sm shadow-sm ring-1 ring-black/10" />
            <span className="flex-1">{label}</span>
            {code === locale && (
              <span className="size-1.5 rounded-full bg-passport-blue" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
