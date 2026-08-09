export function parseGoogleDriveFileId(urlOrId: string): string | null {
  const trimmed = urlOrId.trim();
  if (!trimmed || /REPLACE_/i.test(trimmed)) return null;

  if (/^[\w-]{20,}$/.test(trimmed) && !trimmed.includes("/")) {
    return trimmed;
  }

  try {
    const parsed = new URL(
      trimmed.startsWith("http") ? trimmed : `https://${trimmed}`
    );
    const host = parsed.hostname.replace(/^www\./, "");
    if (host !== "drive.google.com" && host !== "docs.google.com") return null;

    const fileMatch = parsed.pathname.match(/\/file\/d\/([^/]+)/);
    if (fileMatch) return fileMatch[1];

    const idParam = parsed.searchParams.get("id");
    if (idParam) return idParam;

    return null;
  } catch {
    return null;
  }
}

/** Google Drive preview embed — reliable cross-origin playback for shared files. */
export function getGoogleDrivePreviewUrl(
  urlOrId: string,
  { autoplay = false }: { autoplay?: boolean } = {}
): string | null {
  const fileId = parseGoogleDriveFileId(urlOrId);
  if (!fileId) return null;

  const params = new URLSearchParams();
  if (autoplay) params.set("autoplay", "1");
  params.set("embedded", "true");
  const query = params.toString();

  return `https://drive.google.com/file/d/${fileId}/preview${
    query ? `?${query}` : ""
  }`;
}
