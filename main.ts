// news-image-20261124 entry: copies the front-page image beside this file
// to /output/entry.png (JPEG bytes under the entry.png name, as the rules allow).
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), dest);
console.log('entry.png written to', dest, `(${statSync(dest).size} bytes)`);
