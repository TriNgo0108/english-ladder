import { contrastRatio } from "@/lib/contrast";
import { LEVELS, levelMeta } from "./levels";
import { CATEGORIES, categoryMeta } from "./categories";

describe("LEVELS", () => {
  it("lists the five levels in CEFR order", () => {
    expect(LEVELS.map((l) => l.slug)).toEqual(["a1", "a2", "b1", "b2", "c1"]);
  });
  it("does not include C2", () => {
    expect(LEVELS.map((l) => l.slug)).not.toContain("c2");
  });
  it("uses the spec ramp, deepening A1 to C1", () => {
    expect(LEVELS.map((l) => l.ramp)).toEqual(["#DBEAFE", "#BFDBFE", "#93C5FD", "#60A5FA", "#2563EB"]);
  });
  it("gives every level a learner-facing blurb", () => {
    for (const l of LEVELS) expect(l.blurb.length).toBeGreaterThan(0);
  });
  it("shows labels in display form", () => {
    expect(LEVELS.map((l) => l.label)).toEqual(["A1", "A2", "B1", "B2", "C1"]);
  });
  it("keeps badge text at 4.5:1 against its own ramp colour", () => {
    for (const l of LEVELS) expect(contrastRatio(l.fg, l.ramp)).toBeGreaterThanOrEqual(4.5);
  });
  it("looks levels up by slug", () => {
    expect(levelMeta("b2").label).toBe("B2");
  });
});

describe("CATEGORIES", () => {
  it("lists the six spec categories", () => {
    expect(CATEGORIES.map((c) => c.slug)).toEqual([
      "grammar", "vocabulary", "phrases", "writing", "speaking", "mechanics",
    ]);
  });
  it("uses the spec display names", () => {
    expect(CATEGORIES.map((c) => c.label)).toEqual([
      "Grammar", "Vocabulary", "Phrases & Expressions", "Writing", "Speaking & Communication", "Mechanics",
    ]);
    expect(categoryMeta("phrases").label).toBe("Phrases & Expressions");
  });
});
