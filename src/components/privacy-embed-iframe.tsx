"use client";

import { useRef, type IframeHTMLAttributes } from "react";

type PrivacyEmbedIframeProps = IframeHTMLAttributes<HTMLIFrameElement> & {
  src: string;
  /** When true, loads the iframe without cross-site credentials (Chromium only). */
  credentialless?: boolean;
};

/** Optional privacy wrapper for third-party embeds. */
export function PrivacyEmbedIframe({
  src,
  credentialless = false,
  referrerPolicy = "strict-origin-when-cross-origin",
  onLoad,
  onError,
  ...props
}: PrivacyEmbedIframeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <iframe
      ref={iframeRef}
      src={src}
      referrerPolicy={referrerPolicy}
      onLoad={onLoad}
      onError={onError}
      {...(credentialless ? { credentialless: "" } : {})}
      {...props}
    />
  );
}
