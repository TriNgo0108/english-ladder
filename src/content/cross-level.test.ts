import { FAMILY_KEYS } from "@/content/families";
import { allTopics, findTopic, siblingsAcrossLevels, topicsByLevel } from "@/content/registry";
import type { Topic } from "@/content/schema";

const key = (t: Topic) => t.family ?? t.slug;
const id = (t: Topic) => `${t.level}/${t.category}/${t.slug}`;

const a1 = topicsByLevel("a1");
const a2 = topicsByLevel("a2");
const a2WithFamily = a2.filter((t) => t.family !== undefined);
const a1Counterpart = (t: Topic) => a1.find((x) => key(x) === key(t));

describe("cross-level family links between A1 and A2", () => {
  it("finds A1 counterparts for exactly the families A1 and A2 share", () => {
    const shared = a2WithFamily.filter((t) => a1Counterpart(t) !== undefined).map(key).sort();
    expect(shared).toEqual(
      ["articles", "nouns", "past-simple", "polite-requests", "present-continuous", "present-simple"].sort(),
    );
  });

  it("links every shared-family A2 topic to its A1 counterpart, and the reverse", () => {
    for (const t of a2WithFamily) {
      const counterpart = a1Counterpart(t);
      if (!counterpart) continue;
      expect(siblingsAcrossLevels(t).map(id), id(t)).toContain(id(counterpart));
      expect(siblingsAcrossLevels(counterpart).map(id), id(counterpart)).toContain(id(t));
    }
  });

  it("pins A1 articles-a-an and A2 articles-the-and-zero-article as siblings both ways", () => {
    const a1Articles = findTopic("a1", "grammar", "articles-a-an");
    const a2Articles = findTopic("a2", "grammar", "articles-the-and-zero-article");
    if (!a1Articles || !a2Articles) throw new Error("articles topics missing");
    expect(key(a1Articles)).toBe("articles");
    expect(key(a2Articles)).toBe("articles");
    expect(siblingsAcrossLevels(a1Articles)).toEqual([a2Articles]);
    expect(siblingsAcrossLevels(a2Articles)).toEqual([a1Articles]);
  });

  it("pins Would you like…? and asking for things politely as siblings both ways", () => {
    const offers = findTopic("a1", "speaking", "would-you-like");
    const requests = findTopic("a2", "speaking", "asking-for-things-politely");
    if (!offers || !requests) throw new Error("polite-requests topics missing");
    expect(siblingsAcrossLevels(offers)).toEqual([requests]);
    expect(siblingsAcrossLevels(requests)).toEqual([offers]);
  });

  it("keeps every A2 family in FAMILY_KEYS, and gives A2-first families no A1 sibling yet", () => {
    const a2First: string[] = [];
    for (const t of a2WithFamily) {
      expect(FAMILY_KEYS as readonly string[], t.slug).toContain(t.family);
      if (a1Counterpart(t)) continue;
      a2First.push(key(t));
      expect(siblingsAcrossLevels(t).filter((s) => s.level === "a1"), id(t)).toEqual([]);
    }
    expect(a2First.sort()).toEqual(
      [
        "comparison",
        "conditionals",
        "emails",
        "future-forms",
        "gerunds-and-infinitives",
        "linking-words",
        "modal-obligation",
        "used-to",
      ].sort(),
    );
  });

  it("gives A2 topics without a family no cross-level siblings, and no slug equal to a family key", () => {
    for (const t of a2.filter((x) => x.family === undefined)) {
      expect(FAMILY_KEYS as readonly string[], t.slug).not.toContain(t.slug);
      expect(siblingsAcrossLevels(t), id(t)).toEqual([]);
    }
  });

  it("has at most one topic per family at each level", () => {
    for (const level of ["a1", "a2"] as const) {
      const keys = allTopics.filter((t) => t.level === level).map(key);
      expect(new Set(keys).size, level).toBe(keys.length);
    }
  });
});
