import { FAMILY_KEYS } from "@/content/families";
import { allTopics, findTopic, siblingsAcrossLevels, topicsByLevel } from "@/content/registry";
import type { Topic } from "@/content/schema";

const key = (t: Topic) => t.family ?? t.slug;
const id = (t: Topic) => `${t.level}/${t.category}/${t.slug}`;

const a1 = topicsByLevel("a1");
const a2 = topicsByLevel("a2");
const b1 = topicsByLevel("b1");
const a2WithFamily = a2.filter((t) => t.family !== undefined);
const a1Counterpart = (t: Topic) => a1.find((x) => key(x) === key(t));

describe("cross-level family links between A1 and A2", () => {
  it("finds A1 counterparts for exactly the families A1 and A2 share", () => {
    const shared = a2WithFamily.filter((t) => a1Counterpart(t) !== undefined).map(key).sort();
    expect(shared).toEqual(
      ["articles", "nouns", "past-simple", "polite-requests", "present-continuous", "present-simple", "question-forms"].sort(),
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

  it("pins the articles chain A1 articles-a-an -> A2 articles-the-and-zero-article -> B2 articles with abstract and general nouns, in CEFR order", () => {
    const a1Articles = findTopic("a1", "grammar", "articles-a-an");
    const a2Articles = findTopic("a2", "grammar", "articles-the-and-zero-article");
    const b2Articles = findTopic("b2", "grammar", "articles-with-abstract-and-general-nouns");
    if (!a1Articles || !a2Articles || !b2Articles) throw new Error("articles topics missing");
    expect(key(a1Articles)).toBe("articles");
    expect(key(a2Articles)).toBe("articles");
    expect(siblingsAcrossLevels(a1Articles)).toEqual([a2Articles, b2Articles]);
    expect(siblingsAcrossLevels(a2Articles)).toEqual([a1Articles, b2Articles]);
    expect(siblingsAcrossLevels(b2Articles)).toEqual([a1Articles, a2Articles]);
  });

  it("pins Would you like…?, asking for things politely and B1 indirect questions as one polite-requests chain, in CEFR order", () => {
    const offers = findTopic("a1", "speaking", "would-you-like");
    const requests = findTopic("a2", "speaking", "asking-for-things-politely");
    const indirect = findTopic("b1", "speaking", "indirect-and-polite-questions");
    if (!offers || !requests || !indirect) throw new Error("polite-requests topics missing");
    expect(siblingsAcrossLevels(offers)).toEqual([requests, indirect]);
    expect(siblingsAcrossLevels(requests)).toEqual([offers, indirect]);
    expect(siblingsAcrossLevels(indirect)).toEqual([offers, requests]);
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

describe("cross-level family links from B1 to A1 and A2", () => {
  const b1WithFamily = b1.filter((t) => t.family !== undefined);
  const lowerSiblings = (t: Topic) => [...a1, ...a2].filter((x) => key(x) === key(t));
  const get = (level: "a1" | "a2" | "b1", category: Topic["category"], slug: string) => {
    const found = findTopic(level, category, slug);
    if (!found) throw new Error(`${level}/${slug} missing`);
    return found;
  };

  it("links every B1 topic with a family to every A1 and A2 topic sharing its key, and each of those back", () => {
    for (const t of b1WithFamily) {
      const below = siblingsAcrossLevels(t).filter((s) => s.level === "a1" || s.level === "a2");
      expect(below.map(id), id(t)).toEqual(lowerSiblings(t).map(id));
      for (const s of below) expect(siblingsAcrossLevels(s).map(id), id(s)).toContain(id(t));
    }
  });

  it("shares exactly these families with A1 and A2", () => {
    const shared = b1WithFamily.filter((t) => lowerSiblings(t).length > 0).map(key).sort();
    expect(shared).toEqual(
      [
        "past-simple",
        "future-forms",
        "conditionals",
        "used-to",
        "gerunds-and-infinitives",
        "question-forms",
        "determiners",
        "adjective-order",
        "linking-words",
        "prepositions-of-place",
        "prepositions-of-time",
        "emails",
        "polite-requests",
        "introductions",
        "punctuation",
      ].sort(),
    );
  });

  it("pins the past-simple chain A1 was-were -> A2 past simple -> B1 present perfect vs past simple, in CEFR order", () => {
    const wasWere = get("a1", "grammar", "was-were");
    const pastSimple = get("a2", "grammar", "past-simple-regular-and-irregular");
    const b1Past = get("b1", "grammar", "present-perfect-and-past-simple");
    expect(siblingsAcrossLevels(pastSimple)).toEqual([wasWere, b1Past]);
    expect(siblingsAcrossLevels(b1Past)).toEqual([wasWere, pastSimple]);
    expect(siblingsAcrossLevels(wasWere)).toEqual([pastSimple, b1Past]);
  });

  it("pins A2 used-to-and-would and B1 be-used-to-and-get-used-to as siblings both ways", () => {
    const usedTo = get("a2", "grammar", "used-to-and-would");
    const beUsedTo = get("b1", "grammar", "be-used-to-and-get-used-to");
    expect(siblingsAcrossLevels(usedTo)).toEqual([beUsedTo]);
    expect(siblingsAcrossLevels(beUsedTo)).toEqual([usedTo]);
  });

  it("keeps every B1 family in FAMILY_KEYS, and gives B1 topics without a family no siblings", () => {
    for (const t of b1WithFamily) expect(FAMILY_KEYS as readonly string[], t.slug).toContain(t.family);
    for (const t of b1.filter((x) => x.family === undefined)) {
      expect(FAMILY_KEYS as readonly string[], t.slug).not.toContain(t.slug);
      expect(siblingsAcrossLevels(t), id(t)).toEqual([]);
    }
  });

  it("has at most one topic per family in B1", () => {
    const keys = b1.map(key);
    expect(new Set(keys).size).toBe(keys.length);
  });
});

describe("cross-level family links from B2 to A1, A2 and B1", () => {
  const b2 = topicsByLevel("b2");
  const b2WithFamily = b2.filter((t) => t.family !== undefined);
  const lowerSiblings = (t: Topic) => [...a1, ...a2, ...b1].filter((x) => key(x) === key(t));
  const chain = (level: "a1" | "a2" | "b1" | "b2", category: Topic["category"], slug: string) => {
    const found = findTopic(level, category, slug);
    if (!found) throw new Error(`${level}/${slug} missing`);
    return siblingsAcrossLevels(found).map((t) => `${t.level}/${t.slug}`);
  };

  it("links every B2 topic with a family to every A1, A2 and B1 topic sharing its key, and each of those back", () => {
    for (const t of b2WithFamily) {
      const below = siblingsAcrossLevels(t).filter((s) => s.level !== "b2" && s.level !== "c1");
      expect(below.map(id), id(t)).toEqual(lowerSiblings(t).map(id));
      for (const s of below) expect(siblingsAcrossLevels(s).map(id), id(s)).toContain(id(t));
    }
  });

  it("shares exactly these families with A1, A2 and B1, and inversion has no earlier sibling", () => {
    const shared = b2WithFamily.filter((t) => lowerSiblings(t).length > 0).map(key).sort();
    expect(shared).toEqual(
      [
        "conditionals",
        "wish",
        "modal-deduction",
        "modal-obligation",
        "modal-ability",
        "future-forms",
        "passive",
        "reported-speech",
        "relative-clauses",
        "gerunds-and-infinitives",
        "articles",
        "linking-words",
        "question-forms",
        "phrasal-verbs",
        "collocations",
        "letters",
        "emails",
      ].sort(),
    );
    const inversion = b2.find((t) => t.family === "inversion");
    if (!inversion) throw new Error("inversion topic missing");
    expect(siblingsAcrossLevels(inversion)).toEqual([]);
  });

  it("pins the four-level question-forms chain in CEFR order on every page", () => {
    expect(chain("a1", "grammar", "question-words")).toEqual(["a2/subject-questions", "b1/question-tags", "b2/declarative-and-rhetorical-questions"]);
    expect(chain("a2", "grammar", "subject-questions")).toEqual(["a1/question-words", "b1/question-tags", "b2/declarative-and-rhetorical-questions"]);
    expect(chain("b1", "grammar", "question-tags")).toEqual(["a1/question-words", "a2/subject-questions", "b2/declarative-and-rhetorical-questions"]);
    expect(chain("b2", "grammar", "declarative-and-rhetorical-questions")).toEqual(["a1/question-words", "a2/subject-questions", "b1/question-tags"]);
  });

  it("pins the conditionals chain A2 -> B1 -> B2 in CEFR order", () => {
    expect(chain("a2", "grammar", "first-conditional")).toEqual(["b1/second-conditional", "b2/third-conditional"]);
    expect(chain("b1", "grammar", "second-conditional")).toEqual(["a2/first-conditional", "b2/third-conditional"]);
    expect(chain("b2", "grammar", "third-conditional")).toEqual(["a2/first-conditional", "b1/second-conditional"]);
  });

  it("pins the emails chain A2 -> B1 -> B2 in CEFR order", () => {
    expect(chain("a2", "writing", "an-informal-email")).toEqual(["b1/a-professional-email", "b2/follow-up-emails"]);
    expect(chain("b1", "writing", "a-professional-email")).toEqual(["a2/an-informal-email", "b2/follow-up-emails"]);
    expect(chain("b2", "writing", "follow-up-emails")).toEqual(["a2/an-informal-email", "b1/a-professional-email"]);
  });

  it("keeps every B2 family in FAMILY_KEYS, gives B2 topics without a family no siblings, and has one topic per family", () => {
    for (const t of b2WithFamily) expect(FAMILY_KEYS as readonly string[], t.slug).toContain(t.family);
    for (const t of b2.filter((x) => x.family === undefined)) {
      expect(FAMILY_KEYS as readonly string[], t.slug).not.toContain(t.slug);
      expect(siblingsAcrossLevels(t), id(t)).toEqual([]);
    }
    const keys = b2.map(key);
    expect(new Set(keys).size).toBe(keys.length);
  });
});
