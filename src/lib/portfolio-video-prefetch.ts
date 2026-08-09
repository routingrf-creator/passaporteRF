const prefetchedVideos = new Set<string>();

export function prefetchPortfolioVideo(src: string) {
  if (!src || prefetchedVideos.has(src)) return;

  prefetchedVideos.add(src);

  const link = document.createElement("link");
  link.rel = "prefetch";
  link.as = "video";
  link.href = src;
  document.head.appendChild(link);
}

export function canPlayVideo(video: HTMLVideoElement) {
  return video.readyState >= HTMLMediaElement.HAVE_FUTURE_DATA;
}

export async function playWhenReady(video: HTMLVideoElement) {
  if (canPlayVideo(video)) {
    await video.play();
    return;
  }

  await new Promise<void>((resolve, reject) => {
    const onReady = () => {
      cleanup();
      resolve();
    };
    const onError = () => {
      cleanup();
      reject(new Error("Video failed to load"));
    };
    const cleanup = () => {
      video.removeEventListener("canplay", onReady);
      video.removeEventListener("error", onError);
    };

    video.addEventListener("canplay", onReady, { once: true });
    video.addEventListener("error", onError, { once: true });
  });

  await video.play();
}
