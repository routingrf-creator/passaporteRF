#!/usr/bin/env node

/**
 * Compress portfolio MP4s for faster web playback.
 *
 * Usage:
 *   npm run compress:videos
 *   npm run compress:videos -- --dry-run
 *
 * Env overrides:
 *   VIDEO_CRF=28 VIDEO_MAX_WIDTH=1280 VIDEO_PRESET=slow
 *
 * Requires ffmpeg: https://ffmpeg.org/download.html
 */

import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, "..");
const VIDEOS_DIR = path.join(ROOT, "public", "portfolio", "videos");
const BACKUP_DIR = path.join(VIDEOS_DIR, "_originals");

const CRF = process.env.VIDEO_CRF ?? "28";
const MAX_WIDTH = process.env.VIDEO_MAX_WIDTH ?? "1280";
const PRESET = process.env.VIDEO_PRESET ?? "slow";
const AUDIO_BITRATE = process.env.VIDEO_AUDIO_BITRATE ?? "128k";

const dryRun = process.argv.includes("--dry-run");

function formatSize(bytes) {
  if (bytes >= 1024 * 1024) {
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  }

  return `${(bytes / 1024).toFixed(1)} KB`;
}

function ensureFfmpeg() {
  const result = spawnSync("ffmpeg", ["-version"], {
    encoding: "utf8",
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    console.error(
      "ffmpeg was not found. Install it first: https://ffmpeg.org/download.html"
    );
    process.exit(1);
  }
}

function findMp4Files(dir) {
  if (!fs.existsSync(dir)) return [];

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      if (entry.name === "_originals") continue;
      files.push(...findMp4Files(fullPath));
      continue;
    }

    if (
      entry.isFile() &&
      entry.name.toLowerCase().endsWith(".mp4") &&
      !entry.name.endsWith(".tmp.mp4")
    ) {
      files.push(fullPath);
    }
  }

  return files.sort();
}

function backupOriginal(inputPath) {
  const relativePath = path.relative(VIDEOS_DIR, inputPath);
  const backupPath = path.join(BACKUP_DIR, relativePath);

  fs.mkdirSync(path.dirname(backupPath), { recursive: true });

  if (fs.existsSync(backupPath)) {
    return backupPath;
  }

  fs.copyFileSync(inputPath, backupPath);
  return backupPath;
}

function compressFile(inputPath) {
  const relativePath = path.relative(VIDEOS_DIR, inputPath);
  const tempPath = `${inputPath}.tmp.mp4`;
  const beforeSize = fs.statSync(inputPath).size;

  if (fs.existsSync(tempPath)) {
    fs.unlinkSync(tempPath);
  }

  const args = [
    "-hide_banner",
    "-loglevel",
    "error",
    "-stats",
    "-y",
    "-i",
    inputPath,
    "-c:v",
    "libx264",
    "-crf",
    CRF,
    "-preset",
    PRESET,
    "-vf",
    `scale='min(${MAX_WIDTH},iw)':-2`,
    "-c:a",
    "aac",
    "-b:a",
    AUDIO_BITRATE,
    "-movflags",
    "+faststart",
    tempPath,
  ];

  const result = spawnSync("ffmpeg", args, {
    stdio: "inherit",
    shell: process.platform === "win32",
  });

  if (result.status !== 0) {
    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
    throw new Error(`ffmpeg failed for ${relativePath}`);
  }

  fs.renameSync(tempPath, inputPath);

  const afterSize = fs.statSync(inputPath).size;
  const savings =
    beforeSize > 0
      ? `${(((beforeSize - afterSize) / beforeSize) * 100).toFixed(1)}%`
      : "0%";

  return { relativePath, beforeSize, afterSize, savings };
}

function main() {
  if (!fs.existsSync(VIDEOS_DIR)) {
    console.error(`Video folder not found: ${VIDEOS_DIR}`);
    process.exit(1);
  }

  const files = findMp4Files(VIDEOS_DIR);

  if (!files.length) {
    console.log("No MP4 files found in public/portfolio/videos/");
    return;
  }

  console.log("Portfolio video compression");
  console.log(`Source: ${VIDEOS_DIR}`);
  console.log(
    `Settings: crf=${CRF}, maxWidth=${MAX_WIDTH}, preset=${PRESET}, audio=${AUDIO_BITRATE}`
  );
  console.log(`Files: ${files.length}`);
  console.log("");

  if (dryRun) {
    for (const file of files) {
      console.log(`- ${path.relative(VIDEOS_DIR, file)} (${formatSize(fs.statSync(file).size)})`);
    }
    console.log("\nDry run only. Re-run without --dry-run to compress.");
    return;
  }

  ensureFfmpeg();

  const results = [];

  for (const file of files) {
    const relativePath = path.relative(VIDEOS_DIR, file);
    console.log(`\nCompressing ${relativePath}...`);

    const backupPath = backupOriginal(file);
    console.log(`Backup: ${path.relative(ROOT, backupPath)}`);

    try {
      results.push(compressFile(file));
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
      process.exitCode = 1;
    }
  }

  if (!results.length) return;

  console.log("\nDone.");
  console.log("Originals kept in public/portfolio/videos/_originals/");
  console.log("");

  for (const result of results) {
    console.log(
      `${result.relativePath}: ${formatSize(result.beforeSize)} -> ${formatSize(result.afterSize)} (${result.savings} smaller)`
    );
  }
}

main();
