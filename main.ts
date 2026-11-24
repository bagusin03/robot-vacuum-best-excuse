// The Robot Vacuum's Best Excuse — one line, at most 140 characters.
// A robot vacuum explains, in its own deadpan voice, why it missed a spot:
// its cliff sensor mistook the dark rug for a staircase.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My cliff sensor called your dark rug a staircase, so I braked, beeped twice, and let the crumbs keep the place rent-free.";

// Gate: the sealed scorer requires 1-140 UTF-8 characters, not only whitespace.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-140 chars, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
