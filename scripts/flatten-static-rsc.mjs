#!/usr/bin/env node

/**
 * Flatten nested Next.js 16 static-export RSC segment files.
 *
 * Build output stores payloads at paths like:
 *   roteiros/__next.roteiros/__PAGE__.txt
 *
 * The client requests:
 *   roteiros/__next.roteiros.__PAGE__.txt
 *
 * This script copies nested segment .txt files to the dot-separated paths
 * expected by the App Router on static hosts (Firebase, GitHub Pages, etc.).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.join(__dirname, "..", "out");

const SKIP_DIRS = new Set(["assets", "videos", "_next"]);

function flattenSegmentTree(routeDir, segmentDir, prefix) {
  let created = 0;

  for (const entry of fs.readdirSync(segmentDir, { withFileTypes: true })) {
    const entryPath = path.join(segmentDir, entry.name);

    if (entry.isDirectory()) {
      created += flattenSegmentTree(routeDir, entryPath, `${prefix}.${entry.name}`);
      continue;
    }

    if (!entry.isFile() || !entry.name.endsWith(".txt")) continue;

    const flatName = `${prefix}.${entry.name}`;
    const destination = path.join(routeDir, flatName);

    fs.copyFileSync(entryPath, destination);
    created += 1;
  }

  return created;
}

function walkRouteDir(dir) {
  let created = 0;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isDirectory() || SKIP_DIRS.has(entry.name)) continue;

    if (entry.name.startsWith("__next.")) {
      created += flattenSegmentTree(dir, path.join(dir, entry.name), entry.name);
      continue;
    }

    created += walkRouteDir(path.join(dir, entry.name));
  }

  return created;
}

function main() {
  if (!fs.existsSync(OUT_DIR)) {
    console.error(`Export folder not found: ${OUT_DIR}`);
    process.exit(1);
  }

  const created = walkRouteDir(OUT_DIR);
  console.log(`Flattened ${created} static RSC segment file(s) in ${OUT_DIR}`);
}

main();
