import fs from "node:fs";
import path from "node:path";
import { contrastRatio } from "@/lib/contrast";

const css = fs.readFileSync(path.resolve(__dirname, "globals.css"), "utf8");

/** The `{ … }` body that follows the first occurrence of `opener`, matching nested braces. */
function blockAfter(source: string, opener: string): string {
  const start = source.indexOf(opener);
  if (start === -1) throw new Error(`globals.css: no block for ${opener}`);
  let i = source.indexOf("{", start) + 1;
  const bodyStart = i;
  for (let depth = 1; depth > 0; i++) {
    if (source[i] === "{") depth++;
    else if (source[i] === "}") depth--;
  }
  return source.slice(bodyStart, i - 1);
}

function tokens(body: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const m of body.matchAll(/--color-([a-z-]+):\s*(#[0-9a-fA-F]{6})\s*;/g)) out[m[1]] = m[2];
  return out;
}

const light = tokens(blockAfter(css, ":root {"));
const osDark = tokens(
  // Top-level media block only: the `dark` custom variant also mentions this media query.
  blockAfter(blockAfter(css, "\n@media (prefers-color-scheme: dark)"), ':root:not([data-theme="light"])'),
);
const dark = tokens(blockAfter(css, ':root[data-theme="dark"]'));

const REQUIRED = [
  "ground", "surface", "subtle", "border", "control", "text", "muted", "accent", "on-accent", "correct", "incorrect",
];
const FOREGROUNDS = ["text", "muted", "accent", "correct", "incorrect"];
const BACKGROUNDS = ["ground", "surface", "subtle"];

describe("globals.css palette", () => {
  it("defines every token in all three theme states", () => {
    for (const set of [light, osDark, dark]) {
      expect(Object.keys(set).sort()).toEqual([...REQUIRED].sort());
    }
  });

  it("repeats the explicit dark palette exactly for OS dark", () => {
    expect(osDark).toEqual(dark);
  });

  const pairs = (["light", "dark"] as const).flatMap((theme) =>
    FOREGROUNDS.flatMap((fg) => BACKGROUNDS.map((bg) => [theme, fg, bg] as const)),
  );
  it.each(pairs)("%s %s on %s is at least 4.5:1", (theme, fg, bg) => {
    const set = theme === "light" ? light : dark;
    expect(contrastRatio(set[fg], set[bg])).toBeGreaterThanOrEqual(4.5);
  });

  // WCAG 1.4.11: the edge of a form control or button must reach 3:1 against what is around it.
  const controlPairs = (["light", "dark"] as const).flatMap((theme) =>
    BACKGROUNDS.map((bg) => [theme, bg] as const),
  );
  it.each(controlPairs)("%s control border on %s is at least 3:1", (theme, bg) => {
    const set = theme === "light" ? light : dark;
    expect(contrastRatio(set.control, set[bg])).toBeGreaterThanOrEqual(3);
  });

  it("keeps on-accent text readable on the accent", () => {
    expect(contrastRatio(light["on-accent"], light.accent)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(dark["on-accent"], dark.accent)).toBeGreaterThanOrEqual(4.5);
  });
});
