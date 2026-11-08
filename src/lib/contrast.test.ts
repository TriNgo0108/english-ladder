import { contrastRatio } from "@/lib/contrast";

describe("contrastRatio", () => {
  it("returns 21 for black on white", () => {
    expect(contrastRatio("#000000", "#FFFFFF")).toBeCloseTo(21, 1);
  });
  it("returns 1 for a colour against itself", () => {
    expect(contrastRatio("#1B1F2A", "#1B1F2A")).toBeCloseTo(1, 2);
  });
});
