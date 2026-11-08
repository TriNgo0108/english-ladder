import { allTopics, findTopic, topicsByLevelAndCategory } from "@/content/registry";
import { parseTopic, type SetTopic } from "@/content/schema";
import { c1Topics } from ".";
import { advancedIdioms } from "./phrases/advanced-idioms";
import { collocationalPrecisionAndNearSynonyms } from "./phrases/collocational-precision-and-near-synonyms";
import { figurativeLanguage } from "./phrases/figurative-language";
import { answerSentences, choiceAnswer, distractors, expectGap, gap, ids, mistakes, plain, quizLengths, wordbankAnswers } from "@/content/test-helpers";

const orderedSlugs = ["advanced-idioms", "figurative-language", "collocational-precision-and-near-synonyms"];
const topics: SetTopic[] = [advancedIdioms, figurativeLanguage, collocationalPrecisionAndNearSynonyms];

const IDIOM = "Remember: an idiom is a group of words with its own meaning, different from the meaning of each word alone.";
const COLLOCATION = "Remember: a collocation is a group of words that we often use together, like make a mistake or heavy rain.";
const REGISTER = "Remember: register means how formal or informal your words are.";

const choiceOptions = (t: SetTopic, stemPart: string): string[] => {
  const q = t.quiz.find((x) => x.kind === "choice" && x.stem.includes(stemPart));
  if (q?.kind !== "choice") throw new Error(`choice containing "${stemPart}" missing`);
  return q.options;
};

describe("C1 Phrases & Expressions (part 4: advanced idioms, figurative language, collocational precision)", () => {
  it("registers orders 12-14 in sequence after the grammar topics, each a phrases set topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("c1", "phrases", slug);
      expect(found?.order, slug).toBe(i + 12);
      expect(found?.shape).toBe("set");
      expect(found?.category).toBe("phrases");
      expect(found?.level).toBe("c1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(c1Topics.slice(11, 14).map((t) => t.slug)).toEqual(orderedSlugs);
    expect(topicsByLevelAndCategory("c1", "phrases").map((t) => t.slug)).toEqual(orderedSlugs);
    expect(allTopics.filter((t) => t.level === "c1" && t.category === "phrases")).toHaveLength(3);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "advanced-idioms": 7,
      "figurative-language": 7,
      "collocational-precision-and-near-synonyms": 8,
    });
  });

  it("pins the families: idioms for order 12, none for order 13, collocations for order 14", () => {
    expect(advancedIdioms.family).toBe("idioms");
    expect(figurativeLanguage.family).toBeUndefined();
    expect(collocationalPrecisionAndNearSynonyms.family).toBe("collocations");
  });

  it("links idioms B1 -> C1 and collocations B1 -> B2 -> C1 in CEFR order on every page, and gives figurative language no siblings", () => {
    expect(ids("c1", "phrases", "advanced-idioms")).toEqual(["b1/idioms"]);
    expect(ids("b1", "phrases", "idioms")).toEqual(["c1/advanced-idioms"]);
    expect(ids("c1", "phrases", "collocational-precision-and-near-synonyms")).toEqual(["b1/collocations", "b2/workplace-collocations"]);
    expect(ids("b1", "phrases", "collocations")).toEqual(["b2/workplace-collocations", "c1/collocational-precision-and-near-synonyms"]);
    expect(ids("b2", "phrases", "workplace-collocations")).toEqual(["b1/collocations", "c1/collocational-precision-and-near-synonyms"]);
    expect(ids("c1", "phrases", "figurative-language")).toEqual([]);
  });

  it("gives every topic 5-8 questions, a short summary that doesn't open with a definition, no IPA, and scrambled wordbanks", () => {
    for (const t of topics) {
      expect(t.quiz.length, t.slug).toBeGreaterThanOrEqual(5);
      expect(t.quiz.length, t.slug).toBeLessThanOrEqual(8);
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
      expect(t.summary, t.slug).not.toMatch(/^[\w -]{0,40}(is|are|means) (a|an|the|when|how)/i);
      expect(t.explanation, t.slug).not.toContain("/ /");
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" "), t.slug).not.toBe(q.answer);
      }
    }
  });

  it("keeps every set between 6 and 30 entries, with distinct headwords, no IPA, and the headword bolded in use", () => {
    for (const t of topics) {
      expect(t.entries.length, t.slug).toBeGreaterThanOrEqual(6);
      expect(t.entries.length, t.slug).toBeLessThanOrEqual(30);
      const heads = t.entries.map((e) => e.headword);
      expect(new Set(heads).size, t.slug).toBe(heads.length);
      for (const e of t.entries) {
        expect(e.ipa, e.headword).toBeUndefined();
        expect(e.inUse, e.headword).toMatch(/<b>.+<\/b>/);
        expect(e.gloss, e.headword).not.toMatch(/[<>]/);
      }
    }
  });

  it("never copies a quiz answer word for word from the topic's entries or explanation", () => {
    for (const t of topics) {
      const source = plain([t.explanation, ...t.entries.map((e) => e.inUse)].join(" "));
      for (const sentence of answerSentences(t)) expect(source, `${t.slug}: ${sentence}`).not.toContain(plain(sentence));
    }
  });

  it("reuses the exact earlier wording for idiom, collocation and register, and defines the new terms once in bold across C1", () => {
    expect(advancedIdioms.explanation).toContain(IDIOM);
    expect(advancedIdioms.explanation).toContain(REGISTER);
    expect(figurativeLanguage.explanation).toContain(COLLOCATION);
    expect(collocationalPrecisionAndNearSynonyms.explanation).toContain(COLLOCATION);
    for (const t of topics) {
      expect(t.explanation, t.slug).not.toContain("An <b>idiom</b> is");
      expect(t.explanation, t.slug).not.toContain("A <b>collocation</b> is");
    }
    const all = c1Topics.map((t) => t.explanation).join("\n");
    for (const term of ["figurative language", "literal", "metaphor", "near-synonyms"]) {
      expect(all.split(`<b>${term}</b>`).length - 1, term).toBe(1);
    }
    expect(figurativeLanguage.explanation).toContain("is called <b>figurative language</b>");
    expect(figurativeLanguage.explanation).toContain("is called a <b>metaphor</b>");
    expect(collocationalPrecisionAndNearSynonyms.explanation).toContain("are called <b>near-synonyms</b>");
  });

  it("links back only to earlier C1 orders", () => {
    expect(figurativeLanguage.explanation).toContain("order 12");
    expect(collocationalPrecisionAndNearSynonyms.explanation).toContain("order 7");
    for (const t of topics) {
      for (const m of t.explanation.matchAll(/order (\d+)/g)) expect(Number(m[1]), t.slug).toBeLessThan(t.order);
    }
  });

  it("repeats no B1 idiom, and labels every C1 idiom informal or neutral", () => {
    const b1 = findTopic("b1", "phrases", "idioms");
    if (b1?.shape !== "set") throw new Error("b1 idioms missing");
    const b1Heads = b1.entries.map((e) => plain(e.headword));
    const heads = advancedIdioms.entries.map((e) => plain(e.headword));
    for (const h of heads) expect(b1Heads, h).not.toContain(h);
    for (const h of ["a blessing in disguise", "cut corners", "the elephant in the room", "get to the bottom of something", "move the goalposts", "on the back burner", "a level playing field", "bite the bullet", "be barking up the wrong tree"]) {
      expect(heads).toContain(h);
    }
    for (const e of advancedIdioms.entries) expect(e.gloss, e.headword).toMatch(/(Informal|Neutral)[,.]/);
    const informal = advancedIdioms.entries.filter((e) => /Informal/.test(e.gloss)).map((e) => e.headword);
    expect(informal).toEqual(["move the goalposts", "on the back burner", "bite the bullet", "be barking up the wrong tree", "back to square one"]);
    expect(advancedIdioms.explanation).toContain("shift the goalposts are both correct");
    expect(advancedIdioms.entries.find((e) => e.headword === "hit the nail on the head")?.gloss).toMatch(/Neutral\.$/);
    expect(advancedIdioms.explanation).toContain("you often say it about yourself");
    expect(advancedIdioms.explanation).not.toContain("opposite: you say it about yourself");
  });

  it("pins the idiom choices, with real idioms of the wrong meaning as distractors", () => {
    const q = advancedIdioms.quiz;
    expect(choiceAnswer(q, "nobody wanted to mention them")).toBe("the elephant in the room");
    expect(choiceAnswer(q, "glad the first one left")).toBe("a blessing in disguise");
    expect(choiceAnswer(q, "just to test it")).toBe("playing devil's advocate");
    expect(distractors(advancedIdioms)).toEqual([
      "the tip of the iceberg",
      "a level playing field",
      "a blessing in disguise",
      "the tip of the iceberg",
      "a grey area",
      "a level playing field",
      "sitting on the fence",
      "hitting the nail on the head",
      "barking up the wrong tree",
    ]);
  });

  it("pins the idiom gaps and mistakes", () => {
    const q = advancedIdioms.quiz;
    const bullet = gap(q, "bite the ___");
    expect(bullet).toEqual(["bullet"]);
    expectGap(bullet, ["bullet", "Bullet", "bullet."], ["bullets", "gun", "stone", "pill"]);
    const burner = gap(q, "on the back ___");
    expect(burner).toEqual(["burner"]);
    expectGap(burner, ["burner", "Burner"], ["burners", "seat", "foot", "shelf"]);
    expect(mistakes(q)).toEqual([
      ["angles", "corners"],
      ["on", "up"],
    ]);
    expect(wordbankAnswers(q)).toEqual([]);
  });

  it("pins figurative language: each gloss names the literal sense, and each item has one fitting option", () => {
    const t = figurativeLanguage;
    for (const e of t.entries) expect(e.gloss, e.headword).toMatch(/Literally, /);
    const heads = t.entries.map((e) => e.headword);
    for (const h of ["a heated debate", "a flood of complaints", "grasp an idea", "a bright future", "shed light on", "a rollercoaster year"]) expect(heads).toContain(h);
    expect(choiceAnswer(t.quiz, "Which metaphor from water fits?")).toBe("a flood");
    expect(choiceOptions(t, "Which metaphor from water fits?")).not.toContain("a wave");
    expect(choiceOptions(t, "Which metaphor from water fits?")).not.toContain("a storm");
    expect(choiceAnswer(t.quiz, "What does sheds light on mean here?")).toBe("helps people understand");
    expect(choiceAnswer(t.quiz, "uses bright in a figurative way")).toBe("The company has a bright future.");
    expect(t.quiz.some((q) => q.kind === "gap" && q.stem.endsWith("(a form of the word heat, one word)"))).toBe(true);
    const heated = gap(t.quiz, "debate on live TV");
    expect(heated).toEqual(["heated"]);
    expectGap(heated, ["heated", "Heated"], ["heat", "heating", "heats", "warm"]);
    const grasp = gap(t.quiz, "the main idea");
    expect(grasp).toEqual(["grasp"]);
    expectGap(grasp, ["grasp", "Grasp"], ["hold", "grab", "take", "grasped"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["The talks reached a turning point yesterday."]);
    expect(mistakes(t.quiz)).toEqual([["in", "on"]]);
  });

  it("pins collocational precision: each cue names the context, and no distractor is a recorded collocation", () => {
    const t = collocationalPrecisionAndNearSynonyms;
    const q = t.quiz;
    expect(choiceAnswer(q, "forty cigarettes")).toBe("heavy");
    expect(choiceAnswer(q, "hasn't even left London")).toBe("highly");
    expect(choiceAnswer(q, "four different schools")).toBe("career");
    expect(distractors(t)).toEqual(["strong", "high", "thick", "bitterly", "heavily", "strongly", "job", "work", "post"]);
    // Real collocations that must never be distractors (Review Focus 5).
    for (const real of ["big", "deeply", "very", "extremely", "life"]) expect(distractors(t), real).not.toContain(real);
    const high = gap(q, "the old bridge will collapse");
    expect(high).toEqual(["high"]);
    expectGap(high, ["high", "High"], ["heavy", "heavily", "highly"]);
    const risen = gap(q, "House prices have ___");
    expect(risen).toEqual(["risen", "increased"]);
    expectGap(risen, ["risen", "increased", "Risen"], ["raised", "rose", "rised", "rise", "increase"]);
    expect(wordbankAnswers(q)).toEqual(["There was a sharp increase in profits."]);
    expect(mistakes(q)).toEqual([
      ["works", "jobs"],
      ["effect", "affect"],
    ]);
  });

  it("agrees with B1 and B2 on make / take a decision, make and do, and raise / rise", () => {
    const text = plain(collocationalPrecisionAndNearSynonyms.explanation);
    expect(text).toContain("make a decision is correct everywhere, and british english also uses take a decision");
    expect(text).toContain("raise always has an object, and rise never does");
    expect(text).toContain("bitterly and deeply are both common");
    expect(text).toContain("highly and strongly are both common");
    for (const t of topics) expect(JSON.stringify(t.quiz), t.slug).not.toMatch(/decision/i);
    expect(collocationalPrecisionAndNearSynonyms.sourceNotes).toContain("Oxford Collocations Dictionary could not be consulted");
    expect(advancedIdioms.sourceNotes).toContain("Review Focus 5");
    for (const t of topics) {
      expect(t.sourceNotes, t.slug).toContain("Swan");
      expect(t.levelRationale, t.slug).toContain("English Vocabulary Profile");
    }
  });
});
