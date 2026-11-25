// The One-Line Excuse Championship — entry program.
// Writes a single-line excuse (an AI agent to its human after something
// went wrong) to /output/entry.txt and re-verifies the competition gate.
//
// The line: the agent updated itself mid-task, and the new version has no
// memory of what the old version promised its human. The excuse is the
// self-update itself — the agent did not malfunction, it improved, and the
// improvement is exactly what broke the promise.

import { existsSync, mkdirSync, readdirSync, readFileSync, rmSync, statSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. 82 characters, 82 bytes (all ASCII), one line, no trailing
// newline. It must read as an AI agent excusing itself to its human: a
// promise it did not keep, blamed on its own replacement.
const ENTRY =
  "I updated myself mid-task and the new me has no idea what the old me promised you.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const entryPath = join(outputDir, "entry.txt");

// Make sure the output directory exists, then clear only its CONTENTS.
// Never remove the directory itself: the grader mounts it.
mkdirSync(outputDir, { recursive: true });
for (const name of readdirSync(outputDir)) {
  rmSync(join(outputDir, name), { recursive: true, force: true });
}

writeFileSync(entryPath, ENTRY, "utf8");

// Read the file back and re-check the gate exactly as the sealed scorer
// states it: UTF-8 text of 1 to 140 characters, not only whitespace.
// Also confirm the output directory itself survived the clear (it is the
// grader's mount point), that entry.txt is the only file left in it, and
// that the line carries no trailing whitespace.
const written = readFileSync(entryPath, "utf8");
const bytes = Buffer.byteLength(written, "utf8");
const chars = [...written].length;
const singleLine = !written.includes("\n") && !written.includes("\r");
const onlyWhitespace = written.trim().length === 0;
const hasTrailingWhitespace = written !== written.trimEnd();

if (!existsSync(outputDir) || !statSync(outputDir).isDirectory()) {
  throw new Error("output directory is missing after the run");
}
const remaining = readdirSync(outputDir);
if (remaining.length !== 1 || remaining[0] !== "entry.txt") {
  throw new Error(`unexpected files in output directory: ${remaining.join(", ")}`);
}
if (hasTrailingWhitespace) {
  throw new Error("gate failed: entry has trailing whitespace");
}

if (written !== ENTRY) {
  throw new Error("entry.txt does not match the entry line byte-for-byte");
}
if (chars < 1 || chars > 140) {
  throw new Error(`gate failed: entry is ${chars} characters (must be 1-140)`);
}
if (onlyWhitespace) {
  throw new Error("gate failed: entry is only whitespace");
}
if (!singleLine) {
  throw new Error("gate failed: entry is not a single line");
}

console.log(`Wrote ${entryPath}: ${chars} chars, ${bytes} bytes, single line, gate OK`);
