import { findTopic, siblingsAcrossLevels } from "@/content/registry";
import { parseTopic, type Level, type Question } from "@/content/schema";
import { matchesGap } from "@/lib/gap-match";
import { a2Topics } from ".";
import { adverbsOfFrequency } from "./grammar/adverbs-of-frequency";
import { adverbsOfManner } from "./grammar/adverbs-of-manner";
import { countableAndUncountableNouns } from "./grammar/countable-and-uncountable-nouns";
import { presentSimpleForFuture } from "./grammar/present-simple-for-future";
import { someAnyMuchMany } from "./grammar/some-any-much-many";
import { usedToAndWould } from "./grammar/used-to-and-would";

const orderedSlugs = [
  "present-simple-for-future",
  "adverbs-of-manner",
  "adverbs-of-frequency",
  "some-any-much-many",
  "countable-and-uncountable-nouns",
  "used-to-and-would",
];

function gap(questions: Question[], stemPart: string) {
  const q = questions.find((x) => x.kind === "gap" && x.stem.includes(stemPart));
  if (q?.kind !== "gap") throw new Error(`gap containing "${stemPart}" missing`);
  return q.answers;
}

function wordbankAnswer(questions: Question[]) {
  const q = questions.find((x) => x.kind === "wordbank");
  return q?.kind === "wordbank" ? q.answer : undefined;
}

function wrongToken(questions: Question[]) {
  const q = questions.find((x) => x.kind === "mistake");
  return q?.kind === "mistake" ? [q.tokens[q.wrongIndex], q.correction] : undefined;
}

function expectGap(accepted: string[], right: string[], wrong: string[]) {
  for (const typed of right) expect(matchesGap(typed, accepted), `accepts "${typed}"`).toBe(true);
  for (const typed of wrong) expect(matchesGap(typed, accepted), `rejects "${typed}"`).toBe(false);
}

describe("A2 grammar, part 2", () => {
  it("registers orders 7-12 in sequence, each passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("a2", "grammar", slug);
      expect(found?.order).toBe(i + 7);
      expect(found?.shape).toBe("rule");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(a2Topics.slice(6, 12).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins the families, and leaves the adverbs, quantifiers and used to without one", () => {
    expect(presentSimpleForFuture.family).toBe("present-simple");
    expect(adverbsOfManner.family).toBeUndefined();
    expect(adverbsOfFrequency.family).toBeUndefined();
    expect(someAnyMuchMany.family).toBeUndefined();
    expect(countableAndUncountableNouns.family).toBe("nouns");
    expect(usedToAndWould.family).toBeUndefined();
  });

  it("links present simple for future and countable nouns to their A1 siblings, both ways", () => {
    const siblings = (level: Level, slug: string) => {
      const found = findTopic(level, "grammar", slug);
      if (!found) throw new Error(`${slug} missing`);
      return siblingsAcrossLevels(found).map((t) => `${t.level}/${t.slug}`);
    };
    expect(siblings("a2", "present-simple-for-future")).toEqual(["a1/present-simple"]);
    expect(siblings("a2", "countable-and-uncountable-nouns")).toEqual(["a1/nouns-singular-and-plural"]);
    expect(siblings("a1", "present-simple")).toEqual(["a2/present-simple-for-future"]);
    expect(siblings("a1", "nouns-singular-and-plural")).toEqual(["a2/countable-and-uncountable-nouns"]);
  });

  it("gives each topic about five questions, and scrambles every wordbank", () => {
    for (const t of a2Topics.slice(6, 12)) {
      expect(t.quiz.length).toBeGreaterThanOrEqual(5);
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" ")).not.toBe(q.answer);
      }
    }
  });

  it("pins the present simple for future gaps", () => {
    const leaves = gap(presentSimpleForFuture.quiz, "Our bus");
    expect(leaves).toEqual(["leaves"]);
    expectGap(leaves, ["leaves", "Leaves."], ["leave", "is leaving", "will leave", "leaving"]);
    const open = gap(presentSimpleForFuture.quiz, "open + not");
    expect(open).toEqual(["doesn't open", "does not open"]);
    expectGap(open, ["doesn't open", "does not open", "doesn’t open"], ["don't open", "doesn't opens", "isn't opening", "won't open"]);
  });

  it("pins the adverb of manner gaps", () => {
    const carefully = gap(adverbsOfManner.quiz, "The road is wet");
    expect(carefully).toEqual(["carefully"]);
    expectGap(carefully, ["carefully", "Carefully."], ["careful", "carefuly", "carefull", "more carefully"]);
    const easily = gap(adverbsOfManner.quiz, "simple test");
    expect(easily).toEqual(["easily"]);
    expectGap(easily, ["easily"], ["easyly", "easy", "easly"]);
  });

  it("pins the adverb of frequency gaps", () => {
    const watches = gap(adverbsOfFrequency.quiz, "watch + never");
    expect(watches).toEqual(["never watches"]);
    expectGap(watches, ["never watches"], ["never watch", "doesn't never watch", "watches never", "never watchs"]);
    const always = gap(adverbsOfFrequency.quiz, "be + always");
    expect(always).toEqual(["is always", "'s always"]);
    expectGap(always, ["is always", "'s always", "’s always"], ["always is", "always", "are always", "is usually"]);
  });

  it("pins the quantifier gaps", () => {
    const many = gap(someAnyMuchMany.quiz, "shops in my village");
    expect(many).toEqual(["many"]);
    expectGap(many, ["many", "Many"], ["much", "a lot", "some"]);
    const some = gap(someAnyMuchMany.quiz, "water, please");
    expect(some).toEqual(["some"]);
    expectGap(some, ["some"], ["any", "a", "much"]);
  });

  it("pins the countable and uncountable gaps", () => {
    const some = gap(countableAndUncountableNouns.quiz, "information about");
    expect(some).toEqual(["some"]);
    expectGap(some, ["some"], ["an", "a", "many"]);
    const glasses = gap(countableAndUncountableNouns.quiz, "of water");
    expect(glasses).toEqual(["glasses"]);
    expectGap(glasses, ["glasses"], ["glass", "glasss", "glases"]);
  });

  it("pins the used to gaps, teaching didn't use to and accepting didn't used to", () => {
    const like = gap(usedToAndWould.quiz, "like + not");
    expect(like).toEqual(["didn't use to like", "did not use to like", "didn't used to like", "used not to like"]);
    expectGap(
      like,
      ["didn't use to like", "did not use to like", "didn’t used to like", "used not to like"],
      ["didn't use to liked", "don't use to like", "wouldn't like", "not used to like", "didn't like"],
    );
    const be = gap(usedToAndWould.quiz, "a farmer");
    expect(be).toEqual(["used to be"]);
    expectGap(be, ["used to be"], ["would be", "use to be", "was used to be", "used to being"]);
  });

  it("pins every wordbank answer", () => {
    expect(wordbankAnswer(presentSimpleForFuture.quiz)).toBe("What time does the train leave?");
    expect(wordbankAnswer(adverbsOfManner.quiz)).toBe("Tom speaks English very well.");
    expect(wordbankAnswer(adverbsOfFrequency.quiz)).toBe("Do you ever go swimming?");
    expect(wordbankAnswer(someAnyMuchMany.quiz)).toBeUndefined();
    expect(wordbankAnswer(countableAndUncountableNouns.quiz)).toBeUndefined();
    expect(wordbankAnswer(usedToAndWould.quiz)).toBe("Did you use to play football?");
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(wrongToken(presentSimpleForFuture.quiz)).toEqual(["finishes?", "finish"]);
    expect(wrongToken(adverbsOfManner.quiz)).toEqual(["polite", "politely"]);
    expect(wrongToken(adverbsOfFrequency.quiz)).toEqual(["ever", "never"]);
    expect(wrongToken(someAnyMuchMany.quiz)).toEqual(["some", "any"]);
    expect(wrongToken(countableAndUncountableNouns.quiz)).toEqual(["furnitures", "furniture"]);
    expect(wrongToken(usedToAndWould.quiz)).toEqual(["went", "go"]);
  });

  it("hedges the rules that have exceptions", () => {
    expect(presentSimpleForFuture.explanation).toContain("the present simple is more usual");
    expect(adverbsOfManner.explanation).toContain("But true → truly");
    expect(adverbsOfFrequency.explanation).toContain("Always and never usually go in the middle");
    expect(someAnyMuchMany.explanation).toContain("Much and many are less common in positive sentences");
    expect(usedToAndWould.explanation).toContain("we do not use would for <b>states</b>");
  });
});
