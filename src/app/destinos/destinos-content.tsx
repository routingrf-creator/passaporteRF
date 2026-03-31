"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { useT } from "@/contexts/language-context";

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const cardAnim = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" as const } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.22 } },
};

export function DestinosContent() {
  const [search, setSearch] = useState("");
  const [continent, setContinent] = useState("Todos");
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const t = useT();
  const td = t.destinos;

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
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="bg-passport-dark py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {td.title}
            </motion.h1>
            <motion.p
              className="mx-auto mt-4 max-w-2xl text-lg text-white/70"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18, ease: "easeOut" }}
            >
              {td.subtitle}
            </motion.p>
          </div>
        </div>
      </section>

      {/* ── Filtros ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.25 }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder={td.buscar}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-white transition-shadow duration-200 focus:shadow-[0_0_0_3px_rgba(30,111,175,0.15)]"
              />
            </div>

            {/* Continent select */}
            <div className="flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 12 }}
                transition={{ type: "spring", stiffness: 350 }}
              >
                <SlidersHorizontal className="size-4 text-muted-foreground" />
              </motion.div>
              <Select value={continent} onValueChange={setContinent}>
                <SelectTrigger className="w-[180px] bg-white">
                  <SelectValue placeholder={td.continents[0].label} />
                </SelectTrigger>
                <SelectContent>
                  {td.continents.map((c) => (
                    <SelectItem key={c.value} value={c.value}>
                      {c.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground mr-1">
              {td.tipo}
            </span>
            {td.tags.map((tag) => {
              const isActive = activeTags.includes(tag.value);
              return (
                <motion.button
                  key={tag.value}
                  onClick={() => toggleTag(tag.value)}
                  className="focus:outline-none"
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Badge
                    variant={isActive ? "default" : "outline"}
                    className={cn(
                      "cursor-pointer transition-all duration-200 text-sm px-3 py-1",
                      isActive
                        ? "bg-passport-blue text-white hover:bg-passport-blue/90 shadow-sm"
                        : "hover:bg-passport-blue/10 hover:text-passport-blue"
                    )}
                  >
                    {tag.label}
                  </Badge>
                </motion.button>
              );
            })}
            <AnimatePresence>
              {activeTags.length > 0 && (
                <motion.button
                  key="clear"
                  onClick={() => setActiveTags([])}
                  className="ml-1 text-xs text-passport-coral underline underline-offset-2 hover:text-passport-coral/80"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.18 }}
                >
                  {td.limpar}
                </motion.button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Count */}
        <motion.div
          className="mt-4 text-sm text-muted-foreground"
          key={filtered.length}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.25 }}
        >
          {filtered.length}{" "}
          {filtered.length === 1 ? td.encontrado : td.encontrados}
        </motion.div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key="grid"
              variants={stagger}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filtered.map((destination) => (
                <motion.div key={destination.slug} variants={cardAnim} layout>
                  <DestinationCard destination={destination} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              className="mt-16 flex flex-col items-center justify-center gap-4 text-center"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.4 }}
            >
              <motion.div
                className="flex size-16 items-center justify-center rounded-full bg-passport-blue/10"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              >
                <Search className="size-7 text-passport-blue" />
              </motion.div>
              <h3 className="text-xl font-semibold text-passport-dark">
                {td.nenhum}
              </h3>
              <p className="max-w-md text-muted-foreground">{td.nenhumDesc}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
