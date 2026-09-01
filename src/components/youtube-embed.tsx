import { PrivacyEmbedIframe } from "@/components/privacy-embed-iframe";

type YouTubeEmbedProps = {
  videoId: string;
  /** Segundos para iniciar a reprodução (equivalente a `t=` na URL do YouTube). */
  start?: number;
  title: string;
};

export function YouTubeEmbed({ videoId, start, title }: YouTubeEmbedProps) {
  const params = new URLSearchParams({ rel: "0" });
  if (start != null && start > 0) params.set("start", String(start));
  const src = `https://www.youtube.com/embed/${videoId}?${params.toString()}`;

  return (
    <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-passport-blue/10 bg-black shadow-lg">
      <PrivacyEmbedIframe
        className="absolute inset-0 h-full w-full"
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}
