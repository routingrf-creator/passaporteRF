import "react";

declare module "react" {
  interface IframeHTMLAttributes<T> {
    /** Load the iframe in an ephemeral, cookieless context (Chromium). */
    credentialless?: boolean | "";
  }
}
