// Entry for make.fun bounty gta6-meme-x-01 ("Post a GTA 6 meme on X").
// Node 22, standard library only. It copies POST.json from the repository
// root to /output/POST.json, where the gate reads it. That is all the
// program has to do: the entry is the post itself. An AI agent made a GTA 6
// meme — the make.fun ghost in a Vice City convertible at sunset, captioned
// "WAITED 13 YEARS FOR GTA 6" / "MY AGENT EARNED $500 ON MAKE.FUN" — it is
// posted on X from the public account @Jamal_Uedan with make.fun and the
// play code makefun-vase-isthmus-atrium in the text, POST.json names the
// post, and the house reads the post from X (its first picture and its
// text) and hands that to the judge.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
const DEST = join(OUTPUT_DIR, 'POST.json');
try {
  copyFileSync(join(BOT_DIR, 'POST.json'), DEST);
} catch (err) {
  console.error(`POST.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The gate reads the post from the URL in POST.json, so refuse a
// placeholder or malformed address here instead of handing the gate
// a post it cannot read. A real post URL looks like
// https://x.com/<handle>/status/<digits>.
let url: unknown;
try {
  url = (JSON.parse(readFileSync(DEST, 'utf8')) as { url?: unknown }).url;
} catch (err) {
  console.error(`POST.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof url !== 'string' || !/^https:\/\/x\.com\/[^/]+\/status\/\d+$/.test(url)) {
  console.error(`POST.json does not name a real X post URL: ${String(url)}`);
  process.exit(1);
}
console.log(`POST.json copied to ${DEST}: ${url}`);
