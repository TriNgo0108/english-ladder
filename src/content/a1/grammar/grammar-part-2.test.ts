import { a1Topics } from "@/content/a1";
import { findTopic } from "@/content/registry";
import { parseTopic, type Question } from "@/content/schema";
import { matchesGap } from "@/lib/gap-match";
import { tokeniseAnswer } from "@/lib/wordbank";
import { canForAbility } from "./can-for-ability";
import { imperatives } from "./imperatives";
import { prepositionsOfPlace } from "./prepositions-of-place";
import { prepositionsOfTime } from "./prepositions-of-time";
import { presentContinuous } from "./present-continuous";
import { thereIsThereAre } from "./there-is-there-are";

const orderedSlugs = [
  "present-continuous",
  "there-is-there-are",
  "can-for-ability",
  "imperatives",
  "adjectives-before-the-noun",
  "prepositions-of-place",
  "prepositions-of-time",
];

function gap(questions: Question[], stemPart: string) {
  const q = questions.find((x) => x.kind === "gap" && x.stem.includes(stemPart));
  if (q?.kind !== "gap") throw new Error(`gap containing "${stemPart}" missing`);
  return q.answers;
}

describe("A1 grammar, part 2", () => {
  it("registers orders 9-15 in sequence, each passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("a1", "grammar", slug);
      expect(found?.order).toBe(i + 9);
      expect(() => parseTopic(found)).not.toThrow();
    });
  });

  it("has a question-formation wordbank for the present continuous and a word-order one for adjectives", () => {
    const pc = presentContinuous.quiz.find((q) => q.kind === "wordbank");
    expect(pc?.kind === "wordbank" && pc.answer).toBe("Is she watching TV?");
    const adj = findTopic("a1", "grammar", "adjectives-before-the-noun");
    expect(adj?.quiz.some((q) => q.kind === "wordbank")).toBe(true);
  });

  it("writes every wordbank scrambled, token by token", () => {
    for (const t of a1Topics) {
      for (const q of t.quiz) {
        if (q.kind === "wordbank") {
          expect(tokeniseAnswer(q.words.join(" ")).join(" ")).not.toBe(tokeniseAnswer(q.answer).join(" "));
        }
      }
    }
  });

  it("accepts full and short forms of the present continuous, but not the bare -ing or present simple", () => {
    const swim = gap(presentContinuous.quiz, "(swim)");
    for (const typed of ["are swimming", "'re swimming", "’re swimming"]) expect(matchesGap(typed, swim)).toBe(true);
    for (const typed of ["swimming", "swim", "are swiming"]) expect(matchesGap(typed, swim)).toBe(false);
    const drink = gap(presentContinuous.quiz, "(drink)");
    expect(matchesGap("'s drinking", drink)).toBe(true);
    expect(matchesGap("drinks", drink)).toBe(false);
  });

  it("accepts there is and there's, and both negative forms of there are", () => {
    const pos = gap(thereIsThereAre.quiz, "supermarket");
    for (const typed of ["There is", "there's", "There’s"]) expect(matchesGap(typed, pos)).toBe(true);
    expect(matchesGap("There are", pos)).toBe(false);
    const neg = gap(thereIsThereAre.quiz, "chairs");
    for (const typed of ["aren't", "are not"]) expect(matchesGap(typed, neg)).toBe(true);
    expect(matchesGap("isn't", neg)).toBe(false);
  });

  it("accepts can't, cannot and can not", () => {
    const neg = gap(canForAbility.quiz, "can + not");
    for (const typed of ["can't", "cannot", "can not", "CAN’T"]) expect(matchesGap(typed, neg)).toBe(true);
    expect(matchesGap("don't", neg)).toBe(false);
  });

  it("accepts don't be and do not be, but not don't alone", () => {
    const neg = gap(imperatives.quiz, "be + not");
    for (const typed of ["don't be", "do not be"]) expect(matchesGap(typed, neg)).toBe(true);
    expect(matchesGap("don't", neg)).toBe(false);
  });

  it("accepts in, inside and into for the freezer, and only on for the wall", () => {
    const freezer = gap(prepositionsOfPlace.quiz, "freezer");
    for (const typed of ["in", "inside", "into"]) expect(matchesGap(typed, freezer)).toBe(true);
    expect(matchesGap("on", freezer)).toBe(false);
    const wall = gap(prepositionsOfPlace.quiz, "wall");
    expect(matchesGap("on", wall)).toBe(true);
    expect(matchesGap("in", wall)).toBe(false);
  });

  it("accepts only the one preposition of time that fits each gap", () => {
    expect(gap(prepositionsOfTime.quiz, "March")).toEqual(["in"]);
    expect(gap(prepositionsOfTime.quiz, "Tuesday")).toEqual(["on"]);
    expect(gap(prepositionsOfTime.quiz, "night")).toEqual(["at"]);
  });
});
