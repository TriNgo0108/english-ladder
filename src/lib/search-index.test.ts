import type { Topic } from "@/content/schema";
import { buildSearchIndex, searchTopics } from "@/lib/search-index";

const t = (over: Record<string, unknown>) =>
  ({
    slug: "x",
    title: "X",
    level: "a1",
    category: "grammar",
    shape: "rule",
    order: 1,
    explanation: "",
    examples: [],
    ...over,
  }) as unknown as Topic;

const topics: Topic[] = [
  t({ slug: "articles", title: "Articles", explanation: "Use <b>a</b> before a consonant sound.", order: 1 }),
  t({
    slug: "verb-to-be",
    title: "The verb be",
    explanation: "Articles are not needed here.",
    form: "I am",
    examples: [{ sentence: "She <b>is</b> tall.", why: "w" }],
    order: 2,
  }),
  t({ slug: "articles", title: "Articles", level: "a2", explanation: "More on a and the.", order: 1 }),
  t({
    slug: "food",
    title: "Food",
    shape: "set",
    category: "vocabulary",
    explanation: "Words.",
    entries: [{ headword: "Bread", gloss: "baked food", inUse: "I eat bread." }],
    order: 3,
  }),
  t({
    slug: "cafe",
    title: "At a cafe",
    shape: "phrases",
    category: "phrases",
    explanation: "Ordering.",
    situations: [{ situation: "Paying", phrases: ["The bill, please"] }],
    order: 4,
  }),
];
const index = buildSearchIndex(topics);

describe("buildSearchIndex", () => {
  it("builds hrefs without basePath and a lowercase tag-free haystack", () => {
    expect(index[0].href).toBe("/a1/grammar/articles/");
    expect(index[0].haystack).toContain("use a before");
    expect(index[0].haystack).not.toContain("<b>");
    expect(index[1].haystack).toContain("she is tall.");
  });
});

describe("searchTopics", () => {
  it("matches on a title substring, case-insensitively", () => {
    expect(searchTopics(index, "VERB BE").map((e) => e.slug)).toEqual(["verb-to-be"]);
  });
  it("matches on explanation text, not just the title", () => {
    expect(searchTopics(index, "consonant").map((e) => e.slug)).toEqual(["articles"]);
  });
  it("matches set entries and phrases", () => {
    expect(searchTopics(index, "baked").map((e) => e.slug)).toEqual(["food"]);
    expect(searchTopics(index, "bill, please").map((e) => e.slug)).toEqual(["cafe"]);
  });
  it("returns an empty array for a blank or whitespace query", () => {
    expect(searchTopics(index, "")).toEqual([]);
    expect(searchTopics(index, "   ")).toEqual([]);
  });
  it("returns no results rather than everything for an unmatched query", () => {
    expect(searchTopics(index, "zzzzqq")).toEqual([]);
  });
  it("ranks a title match above a body-only match", () => {
    const r = searchTopics(index, "articles");
    expect(r.map((e) => `${e.level}:${e.slug}`)).toEqual(["a1:articles", "a2:articles", "a1:verb-to-be"]);
  });
  it("includes the level in each result so duplicates across levels are distinguishable", () => {
    const r = searchTopics(index, "articles");
    expect(r[0].level).toBe("a1");
    expect(r[1].level).toBe("a2");
  });
  it("caps results at 10", () => {
    const many = buildSearchIndex(
      Array.from({ length: 15 }, (_, i) => t({ slug: `s${i}`, title: `Topic ${i}`, order: i })),
    );
    expect(searchTopics(many, "topic")).toHaveLength(10);
  });
});
