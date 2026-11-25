// news-image-20261124 — front-page entry.
//
// Copies the image shipped next to this script into the output folder
// as entry.png. The bytes are JPEG data kept under the .png name, which
// the bounty rules allow.
//
// Run it locally with:
//   MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// Make sure the output folder exists first, so the copy never fails
// just because the directory is missing.
mkdirSync(outputDir, { recursive: true });

const source = new URL('./entry.png', import.meta.url);
const target = join(outputDir, 'entry.png');

copyFileSync(source, target);

const { size } = statSync(target);
console.log(`entry.png written to ${target} (${size} bytes)`);
