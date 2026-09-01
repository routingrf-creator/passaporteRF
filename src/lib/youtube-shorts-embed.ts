export function parseYoutubeVideoId(urlOrId: string): string | null {
  const trimmed = urlOrId.trim();
  if (!trimmed || /REPLACE_/i.test(trimmed)) return null;

  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;

  try {
    const parsed = new URL(
      trimmed.startsWith("http") ? trimmed : `https://${trimmed}`
    );
    const host = parsed.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id ?? null;
    }

    if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "music.youtube.com"
    ) {
      const shortsMatch = parsed.pathname.match(/\/shorts\/([^/?#]+)/);
      if (shortsMatch) return shortsMatch[1];

      const embedMatch = parsed.pathname.match(/\/embed\/([^/?#]+)/);
      if (embedMatch) return embedMatch[1];

      const watchId = parsed.searchParams.get("v");
      if (watchId) return watchId;
    }

    return null;
  } catch {
    return null;
  }
}

/** YouTube embed for Shorts and standard videos. */
export function getYoutubeEmbedUrl(
  urlOrId: string,
  {
    autoplay = false,
    origin,
  }: { autoplay?: boolean; origin?: string } = {}
): string | null {
  const videoId = parseYoutubeVideoId(urlOrId);
  if (!videoId) return null;

  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
  });
  if (autoplay) params.set("autoplay", "1");
  if (origin) params.set("origin", origin);

  // Note: Chrome on Windows may log a harmless DevTools warning from YouTube's
  // player about WebGPU powerPreference (crbug.com/369219127). It cannot be
  // suppressed from this site and does not affect playback or production users.

  return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
}
