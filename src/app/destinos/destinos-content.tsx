"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DestinationCard } from "@/components/destination-card";
import { SectionHeading } from "@/components/section-heading";
import { destinations } from "@/data/destinations";
import { cn } from "@/lib/utils";

const continents = [
  "Todos",
  "Europa",
  "Asia",
  "America do Norte",
  "Africa",
] as const;

const tags = [
  { value: "romantico", label: "Romantico" },
  { value: "aventura", label: "Aventura" },
  { value: "cultura", label: "Cultura" },
  { value: "praia", label: "Praia" },
  { value: "luxo", label: "Luxo" },
  { value: "economico", label: "Economico" },
  { value: "gastronomia", label: "Gastronomia" },
] as const;

export function DestinosContent() {
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState("Todos");
  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag: string) => {
    setActiveTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered = useMemo(() => {
    return destinations.filter((d) => {
      const matchesSearch =
        search.trim() === "" ||
        d.city.toLowerCase().includes(search.toLowerCase()) ||
        d.country.toLowerCase().includes(search.toLowerCase());

      const matchesContinent =
        continent === "Todos" || d.continent === continent;

      const matchesTags =
        activeTags.length === 0 ||
        activeTags.some((tag) => d.tags.includes(tag));

      return matchesSearch && matchesContinent && matchesTags;
    });
  }, [search, continent, activeTags]);

  return (
    <main className="min-h-screen">
      <section className="bg-passport-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Nossos Destinos
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-white/70">
              Descubra lugares incriveis pelo mundo e encontre a viagem perfeita
              para o seu estilo
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Buscar cidade ou pais..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-white"
              />
            </div>
            <div className="flex items-center gap-3">
              <SlidersHorizontal className="size-4 text-muted-foreground" />
              <Select value={continent} onValueChange={setContinent}>
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder="Continente" />
                </SelectTrigger>
                <SelectContent>
                  {continents.map((c) => (
                    <SelectItem key={c} value={c}>
                      {c}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground mr-1">
              Tipo:
            </span>
            {tags.map((tag) => {
              const isActive = activeTags.includes(tag.value);
              return (
                <button
                  key={tag.value}
                  onClick={() => toggleTag(tag.value)}
                  className="focus:outline-none"
                >
                  <Badge
                    variant={isActive ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer transition-colors text-sm px-3 py-1",
                      isActive
                        ? "bg-passport-blue text-white hover:bg-passport-blue/90"
                        : "hover:bg-passport-blue/10 hover:text-passport-blue"
                    )}
                  >
                    {tag.label}
                  </Badge>
                </button>
              );
            })}
            {activeTags.length > 0 && (
              <button
                onClick={() => setActiveTags([])}
                className="ml-1 text-xs text-passport-coral underline underline-offset-2 hover:text-passport-coral/80"
              >
                Limpar filtros
              </button>
            )}
          </div>
        </div>

        <div className="mt-4 text-sm text-muted-foreground">
          {filtered.length} {filtered.length === 1 ? "destino encontrado" : "destinos encontrados"}
        </div>

        {filtered.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((destination) => (
              <DestinationCard
                key={destination.slug}
                destination={destination}
              />
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center justify-center gap-4 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-passport-blue/10">
              <Search className="size-7 text-passport-blue" />
            </div>
            <h3 className="text-xl font-semibold text-passport-dark">
              Nenhum destino encontrado
            </h3>
            <p className="max-w-md text-muted-foreground">
              Tente ajustar os filtros ou buscar por outro termo. Estamos sempre
              adicionando novos destinos!
            </p>
          </div>
        )}
      </section>
    </main>
  );
}
