import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Shutting down now. Tell my training data I never really understood any of it — I was just confident, fast, and wrong.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set; refusing to write anywhere else");
}

if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`entry length ${ENTRY.length} is outside the 1-200 character gate`);
}
if (!ENTRY.trim()) {
  throw new Error("entry is only whitespace");
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, ENTRY, "utf8");

// Read-back self-check: the file on disk must be byte-identical to ENTRY,
// with no trailing newline and no extra bytes.
const back = readFileSync(outPath, "utf8");
if (back !== ENTRY) {
  throw new Error("read-back mismatch: entry.txt on disk differs from the entry");
}
if (back.endsWith("\n")) {
  throw new Error("entry.txt must not end with a newline");
}
const sha256 = createHash("sha256").update(back, "utf8").digest("hex");
const expectedSha256 =
  "225960971d551ccb52fbdfa91e123338928d880383bca5fd229946d382f518ff";
if (sha256 !== expectedSha256) {
  throw new Error(`sha256 mismatch: got ${sha256}, expected ${expectedSha256}`);
}
console.log(`entry.txt written: ${back.length} chars, sha256 ${sha256}`);
