// Fortune Cookie for the Liquidated Trader
// Writes one fortune-cookie line to /output/entry.txt.
// The fortune: the one upside of liquidation nobody advertises —
// with no charts left to check at 3am, your phone battery finally lasts.
import { mkdirSync, writeFileSync } from "node:fs";

const FORTUNE =
  "The stars say your phone battery will now last for days. Sleep well, liquidated trader.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Guard the gate: 1–160 chars, at most 20 words, single line.
const chars = [...FORTUNE].length;
const words = FORTUNE.trim().split(/\s+/).length;
if (chars < 1 || chars > 160 || words > 20 || FORTUNE.includes("\n")) {
  throw new Error(`fortune fails the gate: ${chars} chars, ${words} words`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, FORTUNE, "utf8");
