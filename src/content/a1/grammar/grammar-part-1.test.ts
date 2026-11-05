import { a1Topics } from "@/content/a1";
import { findTopic } from "@/content/registry";
import { parseTopic, type Question } from "@/content/schema";
import { matchesGap } from "@/lib/gap-match";
import { haveGot } from "./have-got";
import { possessiveAdjectivesAndS } from "./possessive-adjectives-and-s";
import { presentSimple } from "./present-simple";

const orderedSlugs = [
  "verb-to-be",
  "nouns-singular-and-plural",
  "personal-pronouns",
  "have-got",
  "articles-a-an",
  "this-that-these-those",
  "possessive-adjectives-and-s",
  "present-simple",
];

function gap(questions: Question[], stemPart: string) {
  const q = questions.find((x) => x.kind === "gap" && x.stem.includes(stemPart));
  if (q?.kind !== "gap") throw new Error(`gap containing "${stemPart}" missing`);
  return q.answers;
}

describe("A1 grammar, part 1", () => {
  it("registers orders 1-8 in sequence, each passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("a1", "grammar", slug);
      expect(found?.order).toBe(i + 1);
      expect(() => parseTopic(found)).not.toThrow();
    });
  });

  it("writes every wordbank scrambled, so the chips do not show the answer", () => {
    for (const t of a1Topics) {
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" ")).not.toBe(q.answer);
      }
    }
  });

  it("accepts full and short forms in the have got gaps", () => {
    const has = gap(haveGot.quiz, "blue eyes");
    for (const typed of ["has", "'s", "’s"]) expect(matchesGap(typed, has)).toBe(true);
    expect(matchesGap("have", has)).toBe(false);
    const neg = gap(haveGot.quiz, "have + not");
    for (const typed of ["haven't", "have not", "'ve not", "HAVEN’T"]) expect(matchesGap(typed, neg)).toBe(true);
    expect(matchesGap("hasn't", neg)).toBe(false);
  });

  it("accepts its but not it's, and the 's form with either apostrophe", () => {
    const its = gap(possessiveAdjectivesAndS.quiz, "hotel");
    expect(matchesGap("its", its)).toBe(true);
    expect(matchesGap("it's", its)).toBe(false);
    const sisters = gap(possessiveAdjectivesAndS.quiz, "sister");
    expect(matchesGap("sister’s", sisters)).toBe(true);
    expect(matchesGap("sisters", sisters)).toBe(false);
  });

  it("accepts both negative forms and no -s after doesn't", () => {
    const neg = gap(presentSimple.quiz, "like + not");
    for (const typed of ["doesn't like", "does not like", "Doesn’t  like"]) expect(matchesGap(typed, neg)).toBe(true);
    expect(matchesGap("doesn't likes", neg)).toBe(false);
  });
});
