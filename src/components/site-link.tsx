import type { AnchorHTMLAttributes, ReactNode } from "react";

type SiteLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

/** Normalize internal paths for static export (`trailingSlash: true`). */
export function normalizeSiteHref(href: string) {
  if (
    href.startsWith("http://") ||
    href.startsWith("https://") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    href.startsWith("#")
  ) {
    return href;
  }

  if (href === "/") return "/";
  return href.endsWith("/") ? href : `${href}/`;
}

/**
 * Static-site friendly link. Uses native anchors so Firebase-hosted exports
 * do not request missing Next.js RSC payloads (`__next.*.txt?_rsc=...`).
 */
export function SiteLink({ href, children, ...rest }: SiteLinkProps) {
  return (
    <a href={normalizeSiteHref(href)} {...rest}>
      {children}
    </a>
  );
}
