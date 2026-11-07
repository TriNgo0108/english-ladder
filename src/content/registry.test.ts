import {
  allTopics,
  createRegistry,
  findTopic,
  loadCorpus,
  validateCorpus,
} from "./registry";
import { FAMILY_KEYS } from "./families";
import { a2Topics } from "./a2";
import { b1Topics } from "./b1";
import { b2Topics } from "./b2";
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

function raw(o: { slug: string; order: number; level?: Level; category?: CategorySlug; family?: string }) {
  const category = o.category ?? "grammar";
  const shape = shapeFor[category];
  return {
    slug: o.slug,
    title: o.slug,
    summary: `About ${o.slug}.`,
    level: o.level ?? "a1",
    category,
    order: o.order,
    explanation: "Explains it.",
    quiz: [quizItem, quizItem, quizItem, quizItem],
    levelRationale: "Because.",
    shape,
    ...extras[shape],
    ...(o.family === undefined ? {} : { family: o.family }),
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

describe("topic families", () => {
  const a1 = topic({ slug: "articles-a-an", family: "articles", level: "a1", order: 1 });
  const a2 = topic({ slug: "the-and-zero-article", family: "articles", level: "a2", order: 1 });
  const b2 = topic({ slug: "abstract-nouns", family: "articles", level: "b2", order: 1 });

  it("links same-family topics with different slugs, in level order, excluding self", () => {
    const reg = createRegistry([b2, a1, a2]);
    expect(reg.siblingsAcrossLevels(a1)).toEqual([a2, b2]);
    expect(reg.siblingsAcrossLevels(a2)).toEqual([a1, b2]);
    expect(reg.siblingsAcrossLevels(b2)).toEqual([a1, a2]);
  });
  it("falls back to the slug when there is no family", () => {
    const x = topic({ slug: "modals", level: "a1", order: 1 });
    const y = topic({ slug: "modals", level: "b1", order: 1 });
    const reg = createRegistry([y, x]);
    expect(reg.siblingsAcrossLevels(x)).toEqual([y]);
  });
  it("lets family override slug equality", () => {
    const x = topic({ slug: "articles", family: "determiners", level: "a1", order: 1 });
    const y = topic({ slug: "articles", level: "a2", order: 1 });
    const reg = createRegistry([x, y]);
    expect(reg.siblingsAcrossLevels(x)).toEqual([]);
    expect(reg.siblingsAcrossLevels(y)).toEqual([]);
  });
  it("rejects a slug-fallback topic whose slug equals another topic's family key", () => {
    const x = topic({ slug: "articles-a-an", family: "articles", level: "a1", order: 1 });
    const y = topic({ slug: "articles", level: "a2", order: 1, category: "vocabulary" });
    const message = captureError(() => validateCorpus([x, y]));
    expect(message).toContain('"articles"');
    expect(message).toMatch(/set family explicitly/i);
  });
  it("allows a topic to declare family equal to its own slug", () => {
    const x = topic({ slug: "articles", family: "articles", level: "a1", order: 1 });
    const y = topic({ slug: "articles", level: "a2", order: 1 });
    expect(() => validateCorpus([x, y])).not.toThrow();
  });
  it("uses only family keys from the shared vocabulary in the A1 corpus", () => {
    for (const t of allTopics) {
      if (t.family !== undefined) expect(FAMILY_KEYS).toContain(t.family);
    }
  });
  it("rejects a duplicate family within a level", () => {
    const one = topic({ slug: "one", family: "fam", order: 1 });
    const two = topic({ slug: "two", family: "fam", order: 2 });
    expect(captureError(() => validateCorpus([one, two]))).toContain("duplicate family 'fam' at a1: one, two");
  });
  it("rejects a family colliding with another topic's slug in the same level", () => {
    const one = topic({ slug: "one", order: 1 });
    const two = topic({ slug: "two", family: "one", order: 2 });
    expect(captureError(() => validateCorpus([one, two]))).toContain("duplicate family 'one' at a1: one, two");
  });
  it("accepts the same family across levels", () => {
    expect(() => validateCorpus([a1, a2, b2])).not.toThrow();
  });
  it("reports family problems alongside other problems", () => {
    const message = captureError(() =>
      validateCorpus([
        topic({ slug: "one", family: "fam", order: 1 }),
        topic({ slug: "two", family: "fam", order: 3 }),
      ]),
    );
    expect(message).toMatch(/duplicate family 'fam' at a1/);
    expect(message).toMatch(/gap/i);
  });
});

describe("A2 barrel and family keys", () => {
  it("loads A2 topics into the corpus", () => {
    expect(Array.isArray(a2Topics)).toBe(true);
    for (const t of a2Topics) expect(allTopics).toContainEqual(t);
  });
  it("links an A2 topic to its A1 sibling both ways through a shared family", () => {
    const a1 = topic({ slug: "articles-a-an", family: "articles", level: "a1", order: 1 });
    const a2 = topic({ slug: "the-and-zero-article", family: "articles", level: "a2", order: 1 });
    const reg = createRegistry([a2, a1]);
    expect(reg.siblingsAcrossLevels(a1)).toEqual([a2]);
    expect(reg.siblingsAcrossLevels(a2)).toEqual([a1]);
  });
  it("has only unique, slug-pattern family keys", () => {
    expect(new Set(FAMILY_KEYS).size).toBe(FAMILY_KEYS.length);
    for (const key of FAMILY_KEYS) expect(key).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });
  it("includes the A2-first family keys", () => {
    for (const key of ["conditionals", "gerunds-and-infinitives", "linking-words", "comparison", "future-forms", "emails"]) {
      expect(FAMILY_KEYS).toContain(key);
    }
  });
});

describe("real corpus summaries", () => {
  it("gives every real topic a distinct summary", () => {
    const summaries = allTopics.map((t) => t.summary);
    expect(new Set(summaries).size).toBe(summaries.length);
  });
});

describe("B1 barrel and family keys", () => {
  it("gives A2 used-to-and-would the used-to family", () => {
    expect(findTopic("a2", "grammar", "used-to-and-would")?.family).toBe("used-to");
  });
  it("loads B1 topics into the corpus", () => {
    const a2 = topic({ slug: "used-to-and-would", family: "used-to", level: "a2", order: 1 });
    const b1 = topic({ slug: "be-used-to-and-get-used-to", family: "used-to", level: "b1", order: 1 });
    const reg = createRegistry([b1, a2]);
    expect(reg.siblingsAcrossLevels(a2)).toEqual([b1]);
    expect(reg.siblingsAcrossLevels(b1)).toEqual([a2]);
    expect(Array.isArray(b1Topics)).toBe(true);
    for (const t of b1Topics) expect(allTopics).toContainEqual(t);
  });
  it("lists the new B1 family keys", () => {
    for (const key of ["used-to", "wish", "passive", "reported-speech", "relative-clauses", "collocations", "idioms", "register", "agreeing-and-disagreeing", "intonation"]) {
      expect(FAMILY_KEYS).toContain(key);
    }
    expect(new Set(FAMILY_KEYS).size).toBe(FAMILY_KEYS.length);
  });
});

describe("B2 barrel and family keys", () => {
  it("gives B1 phrasal-verbs-inseparable and letter-structure their families", () => {
    expect(findTopic("b1", "phrases", "phrasal-verbs-inseparable")?.family).toBe("phrasal-verbs");
    expect(findTopic("b1", "writing", "letter-structure")?.family).toBe("letters");
  });
  it("loads B2 topics into the corpus", () => {
    const b1 = topic({ slug: "phrasal-verbs-inseparable", family: "phrasal-verbs", level: "b1", category: "phrases", order: 1 });
    const b2 = topic({ slug: "advanced-phrasal-verbs", family: "phrasal-verbs", level: "b2", category: "phrases", order: 1 });
    const reg = createRegistry([b1, b2]);
    expect(reg.siblingsAcrossLevels(b1)).toEqual([b2]);
    expect(reg.siblingsAcrossLevels(b2)).toEqual([b1]);
    expect(Array.isArray(b2Topics)).toBe(true);
    for (const t of b2Topics) expect(allTopics).toContainEqual(t);
  });
  it("lists the new B2 family keys", () => {
    for (const key of ["phrasal-verbs", "letters", "inversion"]) expect(FAMILY_KEYS).toContain(key);
    expect(new Set(FAMILY_KEYS).size).toBe(FAMILY_KEYS.length);
  });
});
