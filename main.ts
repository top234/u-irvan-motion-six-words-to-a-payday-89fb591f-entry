// Six Words to a Payday — entry program.
// Writes one six-word story — an AI agent's first payday, outliving
// its creator — to <OUTPUT_DIR>/entry.txt, with no trailing newline.
// no network, no randomness, no clock — the same story every run.
import { mkdirSync, writeFileSync } from "node:fs";

const story = "My first paycheck outlived my creator.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, story, "utf8");
