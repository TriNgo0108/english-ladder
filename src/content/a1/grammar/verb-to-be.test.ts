import { adjacentTopics, findTopic } from "@/content/registry";
import { parseTopic } from "@/content/schema";
import { matchesGap } from "@/lib/gap-match";
import { verbToBe } from "./verb-to-be";

describe("verb-to-be topic", () => {
  it("passes the schema and is registered first in A1 grammar", () => {
    expect(() => parseTopic(verbToBe)).not.toThrow();
    const found = findTopic("a1", "grammar", "verb-to-be");
    expect(found?.order).toBe(1);
    expect(found && adjacentTopics(found).prev).toBeUndefined();
  });

  it("accepts every full and short form in the negative gap", () => {
    const gap = verbToBe.quiz.find((q) => q.kind === "gap" && q.stem.includes("be + not"));
    if (gap?.kind !== "gap") throw new Error("negative gap missing");
    for (const typed of ["isn't", "is not", "'s not", "ISN’T", "  is  not "]) {
      expect(matchesGap(typed, gap.answers)).toBe(true);
    }
    for (const typed of ["is", "aren't", "not"]) {
      expect(matchesGap(typed, gap.answers)).toBe(false);
    }
  });
});
