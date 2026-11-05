import {
  allTopics,
  createRegistry,
  loadCorpus,
  validateCorpus,
} from "./registry";
import type { CategorySlug, Level, Topic } from "./schema";

const quizItem = {
  kind: "choice",
  stem: "She ___ a teacher.",
  options: ["is", "are"],
  answer: 0,
  feedback: "Use is with she.",
};
const shapeFor: Record<CategorySlug, string> = {
  grammar: "rule",
  mechanics: "rule",
  vocabulary: "set",
  phrases: "set",
  writing: "phrases",
  speaking: "phrases",
};
const extras: Record<string, Record<string, unknown>> = {
  rule: {
    examples: Array.from({ length: 3 }, () => ({ sentence: "She <b>is</b> a nurse.", why: "Third person." })),
  },
  set: {
    entries: Array.from({ length: 6 }, () => ({ headword: "word", gloss: "a word", inUse: "Use a word." })),
  },
  phrases: {
    situations: Array.from({ length: 3 }, () => ({ situation: "Interrupting", phrases: ["Sorry."], register: "neutral" })),
  },
};

function raw(o: { slug: string; order: number; level?: Level; category?: CategorySlug }) {
  const category = o.category ?? "grammar";
  const shape = shapeFor[category];
  return {
    slug: o.slug,
    title: o.slug,
    level: o.level ?? "a1",
    category,
    order: o.order,
    explanation: "Explains it.",
    quiz: [quizItem, quizItem, quizItem, quizItem],
    levelRationale: "Because.",
    shape,
    ...extras[shape],
  };
}
const topic = (o: Parameters<typeof raw>[0]) => raw(o) as unknown as Topic;

function captureError(fn: () => void): string {
  try {
    fn();
  } catch (e) {
    return (e as Error).message;
  }
  throw new Error("expected function to throw");
}

describe("validateCorpus", () => {
  it("accepts a well-formed corpus", () => {
    expect(() => validateCorpus([topic({ slug: "a", order: 1 }), topic({ slug: "b", order: 2 })])).not.toThrow();
  });
  it("accepts an empty corpus", () => {
    expect(() => validateCorpus([])).not.toThrow();
  });
  it("accepts a level with zero topics", () => {
    expect(() => validateCorpus([topic({ slug: "a", level: "a2", order: 1 })])).not.toThrow();
  });
  it("rejects a duplicate slug within a level", () => {
    expect(() => validateCorpus([topic({ slug: "a", order: 1 }), topic({ slug: "a", order: 2 })])).toThrow(/duplicate slug/i);
  });
  it("allows the same slug at different levels", () => {
    expect(() =>
      validateCorpus([
        topic({ slug: "articles", level: "a1", order: 1 }),
        topic({ slug: "articles", level: "a2", order: 1 }),
      ]),
    ).not.toThrow();
  });
  it("rejects a duplicate order within a level", () => {
    expect(() => validateCorpus([topic({ slug: "a", order: 1 }), topic({ slug: "b", order: 1 })])).toThrow(/duplicate order/i);
  });
  it("rejects a gap in the order sequence", () => {
    expect(() => validateCorpus([topic({ slug: "a", order: 1 }), topic({ slug: "b", order: 3 })])).toThrow(/gap/i);
  });
  it("requires order to start at 1", () => {
    expect(() => validateCorpus([topic({ slug: "a", order: 2 })])).toThrow(/start at 1/i);
  });
  it("reports every problem, not only the first", () => {
    const message = captureError(() =>
      validateCorpus([topic({ slug: "a", order: 1 }), topic({ slug: "a", order: 1 }), topic({ slug: "c", order: 9 })]),
    );
    expect(message).toMatch(/duplicate slug/i);
    expect(message).toMatch(/duplicate order/i);
  });
  it("names the level and the offending slug or order", () => {
    const message = captureError(() =>
      validateCorpus([topic({ slug: "dup", level: "a2", order: 1 }), topic({ slug: "dup", level: "a2", order: 4 })]),
    );
    expect(message).toMatch(/a2/);
    expect(message).toMatch(/dup/);
    expect(message).toMatch(/4/);
  });
});

describe("loadCorpus", () => {
  it("parses raw topics and returns them", () => {
    const result = loadCorpus([raw({ slug: "a", order: 1 })]);
    expect(result).toHaveLength(1);
    expect(result[0].slug).toBe("a");
  });
  it("reports parse failures and corpus problems together", () => {
    const bad = { ...raw({ slug: "broken", order: 1 }), quiz: [] };
    const message = captureError(() => loadCorpus([bad, raw({ slug: "x", order: 5 })]));
    expect(message).toMatch(/broken/);
    expect(message).toMatch(/start at 1/i);
  });
});

describe("lookups", () => {
  const g1 = topic({ slug: "verb-to-be", order: 1, category: "grammar" });
  const v2 = topic({ slug: "colours", order: 2, category: "vocabulary" });
  const g3 = topic({ slug: "articles", order: 3, category: "grammar" });
  const a2articles = topic({ slug: "articles", level: "a2", order: 1, category: "grammar" });
  // Deliberately shuffled input to prove sorting.
  const reg = createRegistry([g3, a2articles, g1, v2]);

  it("orders topicsByLevel by order", () => {
    expect(reg.topicsByLevel("a1").map((t) => t.order)).toEqual([1, 2, 3]);
  });
  it("returns an empty array for a level with no topics", () => {
    expect(reg.topicsByLevel("c1")).toEqual([]);
  });
  it("orders topicsByLevelAndCategory by order", () => {
    const result = reg.topicsByLevelAndCategory("a1", "grammar");
    expect(result).toEqual([g1, g3]);
    expect(result[0]).toBe(g1);
  });
  it("finds a topic by level, category and slug", () => {
    const first = reg.topicsByLevel("a1")[0];
    expect(reg.findTopic("a1", first.category, first.slug)).toBe(first);
  });
  it("returns undefined for an unknown slug", () => {
    expect(reg.findTopic("a1", "grammar", "no-such-topic")).toBeUndefined();
  });
  it("returns undefined when the topic exists under a different category", () => {
    const t = reg.topicsByLevel("a1").find((x) => x.category === "grammar")!;
    expect(reg.findTopic("a1", "vocabulary", t.slug)).toBeUndefined();
  });
  it("gives no prev for the first topic and no next for the last", () => {
    const ordered = reg.topicsByLevel("a1");
    expect(reg.adjacentTopics(ordered[0]).prev).toBeUndefined();
    expect(reg.adjacentTopics(ordered[ordered.length - 1]).next).toBeUndefined();
  });
  it("links consecutive topics in both directions", () => {
    const ordered = reg.topicsByLevel("a1");
    expect(reg.adjacentTopics(ordered[0]).next).toBe(ordered[1]);
    expect(reg.adjacentTopics(ordered[1]).prev).toBe(ordered[0]);
  });
  it("walks the level-wide order, crossing categories", () => {
    const { prev, next } = reg.adjacentTopics(v2);
    expect(prev).toBe(g1);
    expect(next).toBe(g3);
  });
  it("excludes the topic itself from its cross-level siblings", () => {
    expect(reg.siblingsAcrossLevels(g3)).not.toContain(g3);
  });
  it("includes the same-slug topics from other levels", () => {
    const siblings = reg.siblingsAcrossLevels(g3);
    expect(siblings).toHaveLength(1);
    expect(siblings[0]).toBe(a2articles);
    expect(reg.siblingsAcrossLevels(a2articles)[0]).toBe(g3);
    expect(reg.siblingsAcrossLevels(g1)).toEqual([]);
  });
});

describe("populatedCategoryPairs", () => {
  it("lists only populated pairs, by level then category order", () => {
    const reg = createRegistry([
      topic({ slug: "w", level: "a2", order: 1, category: "writing" }),
      topic({ slug: "s", level: "a1", order: 2, category: "speaking" }),
      topic({ slug: "g", level: "a1", order: 1, category: "grammar" }),
      topic({ slug: "g2", level: "a1", order: 3, category: "grammar" }),
    ]);
    expect(reg.populatedCategoryPairs()).toEqual([
      { level: "a1", category: "grammar" },
      { level: "a1", category: "speaking" },
      { level: "a2", category: "writing" },
    ]);
  });
  it("omits an empty category", () => {
    const reg = createRegistry([topic({ slug: "g", order: 1, category: "grammar" })]);
    expect(reg.populatedCategoryPairs().some((p) => p.category === "vocabulary")).toBe(false);
  });
});

describe("the real corpus", () => {
  it("passes validation", () => {
    expect(() => validateCorpus(allTopics)).not.toThrow();
  });
});
