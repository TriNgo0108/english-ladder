import { contrastRatio } from "@/lib/contrast";

describe("contrastRatio", () => {
  it("returns 21 for black on white", () => {
    expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 1);
  });
  it("returns 1 for a colour against itself", () => {
    expect(contrastRatio("#1B1F2A", "#1B1F2A")).toBeCloseTo(1, 2);
  });
});

describe("spec palette meets WCAG AA", () => {
  const light = { ground: "#FCFCFD", surface: "#FFFFFF", text: "#1B1F2A", muted: "#5A6173", accent: "#1D4ED8" };
  const dark = { ground: "#0E1117", surface: "#161923", text: "#E6E9F0", muted: "#8B93A5", accent: "#60A5FA" };

  it.each([
    ["light text on ground", light.text, light.ground],
    ["light text on surface", light.text, light.surface],
    ["light muted on ground", light.muted, light.ground],
    ["light accent on ground", light.accent, light.ground],
    ["dark text on ground", dark.text, dark.ground],
    ["dark text on surface", dark.text, dark.surface],
    ["dark muted on ground", dark.muted, dark.ground],
    ["dark accent on ground", dark.accent, dark.ground],
  ])("%s is at least 4.5:1", (_label, fg, bg) => {
    expect(contrastRatio(fg, bg)).toBeGreaterThanOrEqual(4.5);
  });

  // A single hex cannot reach 4.5:1 on both a near-white and a near-black ground
  // (it would need luminance >= 0.202 and <= 0.179), so feedback colours are themed.
  const feedback = {
    light: { correct: "#15803D", incorrect: "#DC2626" },
    dark: { correct: "#16A34A", incorrect: "#F87171" },
  };

  it.each([
    ["light correct", feedback.light.correct, light.ground],
    ["light incorrect", feedback.light.incorrect, light.ground],
    ["dark correct", feedback.dark.correct, dark.ground],
    ["dark incorrect", feedback.dark.incorrect, dark.ground],
  ])("%s feedback colour is at least 4.5:1 on its own ground", (_label, hex, bg) => {
    expect(contrastRatio(hex, bg)).toBeGreaterThanOrEqual(4.5);
  });
});
