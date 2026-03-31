"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";

export function ContentSection() {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src*="curator.io/published/eaf9d687"]'
    );
    if (existingScript) return;

    const script = document.createElement("script");
    script.async = true;
    script.charset = "UTF-8";
    script.src =
      "https://cdn.curator.io/published/eaf9d687-39c1-4f4a-bac5-5704af359180.js";
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return (
    <section className="bg-passport-cream/50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          id="curator-feed-default-feed-layout"
        >
          <a
            href="https://curator.io"
            target="_blank"
            rel="noopener noreferrer"
            className="crt-logo crt-tag"
          >
            Powered by Curator.io
          </a>
        </motion.div>
      </div>
    </section>
  );
}
