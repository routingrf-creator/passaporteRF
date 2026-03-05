"use client";

import { Play, Image as ImageIcon, Film } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

function PlaceholderCard({
  type,
}: {
  type: "youtube" | "instagram" | "tiktok";
}) {
  const aspectClass =
    type === "tiktok" ? "aspect-[9/16]" : type === "instagram" ? "aspect-square" : "aspect-video";

  const bgClass =
    type === "youtube"
      ? "from-red-500/20 to-red-600/10"
      : type === "instagram"
        ? "from-purple-500/20 to-pink-500/10"
        : "from-cyan-500/20 to-black/10";

  return (
    <div
      className={`${aspectClass} relative overflow-hidden rounded-xl bg-linear-to-br ${bgClass} border border-border/30`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-muted-foreground">
        {type === "youtube" && (
          <div className="flex size-12 items-center justify-center rounded-full bg-red-500/90 text-white">
            <Play className="ml-0.5 size-5" fill="currentColor" />
          </div>
        )}
        {type === "instagram" && <ImageIcon className="size-8 text-purple-400" />}
        {type === "tiktok" && <Film className="size-8 text-cyan-400" />}
        <span className="text-xs">
          {type === "youtube" && "Video no YouTube"}
          {type === "instagram" && "Post no Instagram"}
          {type === "tiktok" && "Video no TikTok"}
        </span>
      </div>
    </div>
  );
}

export function ContentSection() {
  return (
    <section className="bg-passport-cream/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Nosso conteudo"
          subtitle="Acompanhe nossas dicas e inspiracoes nas redes"
          centered
        />

        <Tabs defaultValue="youtube" className="mx-auto max-w-3xl">
          <TabsList className="mx-auto mb-8 w-fit">
            <TabsTrigger value="youtube">YouTube</TabsTrigger>
            <TabsTrigger value="instagram">Instagram</TabsTrigger>
            <TabsTrigger value="tiktok">TikTok</TabsTrigger>
          </TabsList>

          <TabsContent value="youtube">
            <div className="grid gap-4 sm:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <PlaceholderCard key={i} type="youtube" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="instagram">
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <PlaceholderCard key={i} type="instagram" />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="tiktok">
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3].map((i) => (
                <PlaceholderCard key={i} type="tiktok" />
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
