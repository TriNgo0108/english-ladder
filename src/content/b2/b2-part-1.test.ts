import { findTopic } from "@/content/registry";
import { parseTopic } from "@/content/schema";
import { b2Topics } from ".";
import { couldWasAbleToAndCouldHave } from "./grammar/could-was-able-to-and-could-have";
import { describingCertaintyInThePast } from "./grammar/describing-certainty-in-the-past";
import { mixedConditionals } from "./grammar/mixed-conditionals";
import { needntHaveAndDidntNeedTo } from "./grammar/neednt-have-and-didnt-need-to";
import { thirdConditional } from "./grammar/third-conditional";
import { wishForPastRegrets } from "./grammar/wish-for-past-regrets";
import { choiceAnswer, expectGap, gap, ids, mistakes, quizLengths, wordbankAnswer, wordbankAnswers } from "@/content/test-helpers";

const orderedSlugs = [
  "third-conditional",
  "mixed-conditionals",
  "wish-for-past-regrets",
  "describing-certainty-in-the-past",
  "neednt-have-and-didnt-need-to",
  "could-was-able-to-and-could-have",
];

const topics = [
  thirdConditional,
  mixedConditionals,
  wishForPastRegrets,
  describingCertaintyInThePast,
  needntHaveAndDidntNeedTo,
  couldWasAbleToAndCouldHave,
];

describe("B2 grammar, part 1 (conditionals, regrets and past modals)", () => {
  it("registers orders 1-6 in sequence, each a grammar rule topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("b2", "grammar", slug);
      expect(found?.order, slug).toBe(i + 1);
      expect(found?.shape).toBe("rule");
      expect(found?.level).toBe("b2");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b2Topics.slice(0, 6).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "third-conditional": 7,
      "mixed-conditionals": 6,
      "wish-for-past-regrets": 7,
      "describing-certainty-in-the-past": 7,
      "neednt-have-and-didnt-need-to": 6,
      "could-was-able-to-and-could-have": 7,
    });
  });

  it("pins the families, and leaves mixed conditionals without one", () => {
    expect(thirdConditional.family).toBe("conditionals");
    expect(mixedConditionals.family).toBeUndefined();
    expect(wishForPastRegrets.family).toBe("wish");
    expect(describingCertaintyInThePast.family).toBe("modal-deduction");
    expect(needntHaveAndDidntNeedTo.family).toBe("modal-obligation");
    expect(couldWasAbleToAndCouldHave.family).toBe("modal-ability");
  });

  it("links each B2 topic to exactly its lower-level siblings in CEFR order, and each of those back", () => {
    expect(ids("b2", "grammar", "third-conditional")).toEqual(["a2/first-conditional", "b1/second-conditional"]);
    expect(ids("a2", "grammar", "first-conditional")).toEqual(["b1/second-conditional", "b2/third-conditional"]);
    expect(ids("b1", "grammar", "second-conditional")).toEqual(["a2/first-conditional", "b2/third-conditional"]);
    expect(ids("b2", "grammar", "mixed-conditionals")).toEqual([]);
    expect(ids("b2", "grammar", "wish-for-past-regrets")).toEqual(["b1/wish-and-if-only"]);
    expect(ids("b1", "grammar", "wish-and-if-only")).toEqual(["b2/wish-for-past-regrets"]);
    expect(ids("b2", "grammar", "describing-certainty-in-the-past")).toEqual(["b1/modals-of-possibility-and-deduction"]);
    expect(ids("b1", "grammar", "modals-of-possibility-and-deduction")).toEqual(["b2/describing-certainty-in-the-past"]);
    expect(ids("b2", "grammar", "neednt-have-and-didnt-need-to")).toEqual(["a2/should-and-must"]);
    expect(ids("a2", "grammar", "should-and-must")).toEqual(["b2/neednt-have-and-didnt-need-to"]);
    expect(ids("b2", "grammar", "could-was-able-to-and-could-have")).toEqual(["a1/can-for-ability"]);
    expect(ids("a1", "grammar", "can-for-ability")).toEqual(["b2/could-was-able-to-and-could-have"]);
  });

  it("gives each topic 5-8 questions with at least 2 mistake items, 3+ examples, a short summary, and scrambled wordbanks", () => {
    for (const t of topics) {
      expect(t.quiz.length, t.slug).toBeGreaterThanOrEqual(5);
      expect(t.quiz.length, t.slug).toBeLessThanOrEqual(8);
      expect(t.quiz.filter((q) => q.kind === "mistake").length, t.slug).toBeGreaterThanOrEqual(2);
      expect(t.examples.length, t.slug).toBeGreaterThanOrEqual(3);
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" ")).not.toBe(q.answer);
      }
    }
  });

  it("pins the third conditional: had in the if clause, would have, 'd have and would've in the result", () => {
    expect(choiceAnswer(thirdConditional.quiz, "imagines a different past")).toBe("If I'd had more money, I'd have bought a car.");
    const gone = gap(thirdConditional.quiz, "last Saturday");
    expect(gone).toEqual(["would have gone", "'d have gone", "would've gone"]);
    expectGap(gone, ["would have gone", "’d have gone", "would’ve gone", "Would have gone."], ["would go", "would have went", "will have gone", "had gone", "would of gone"]);
    const missed = gap(thirdConditional.quiz, "the last train");
    expect(missed).toEqual(["wouldn't have missed", "would not have missed", "'d not have missed"]);
    expectGap(missed, ["wouldn't have missed", "would not have missed", "’d not have missed"], ["won't have missed", "wouldn't miss", "hadn't missed", "wouldn't have miss"]);
    const studied = gap(thirdConditional.quiz, "passed the exam");
    expect(studied).toEqual(["had studied", "'d studied", "had been studying", "'d been studying"]);
    expectGap(studied, ["had studied", "’d studied", "had been studying", "’d been studying"], ["studied", "would have studied", "has studied", "had study"]);
  });

  it("pins the mixed conditionals: now and today force the present result", () => {
    expect(choiceAnswer(mixedConditionals.quiz, "so tired now")).toBe("wouldn't be");
    expect(choiceAnswer(mixedConditionals.quiz, "not a brave person")).toBe("If I were braver, I would have said something.");
    const playing = gap(mixedConditionals.quiz, "broken his leg");
    expect(playing).toEqual(["would be playing", "'d be playing", "would play", "'d play"]);
    expectGap(playing, ["would be playing", "’d be playing", "would play", "’d play"], ["would have played", "will play", "had played", "would have been playing"]);
  });

  it("pins the wish for past regrets gaps: had + past participle, and could have", () => {
    expect(choiceAnswer(wishForPastRegrets.quiz, "what I said")).toBe("hadn't said");
    const eaten = gap(wishForPastRegrets.quiz, "so much cake");
    expect(eaten).toEqual(["hadn't eaten", "had not eaten", "'d not eaten"]);
    expectGap(eaten, ["hadn't eaten", "had not eaten", "’d not eaten"], ["didn't eat", "wouldn't eat", "haven't eaten", "hadn't ate"]);
    const brought = gap(wishForPastRegrets.quiz, "my umbrella");
    expect(brought).toEqual(["had brought", "'d brought"]);
    expectGap(brought, ["had brought", "’d brought"], ["brought", "had bringed", "would bring", "have brought"]);
    const come = gap(wishForPastRegrets.quiz, "your wedding");
    expect(come).toEqual(["could have come", "could've come", "had been able to come", "'d been able to come"]);
    expectGap(come, ["could have come", "could’ve come", "had been able to come", "’d been able to come"], ["could come", "can have come", "could have came", "would have come"]);
  });

  it("pins the past deduction choices and gaps, accepting may, might and could have and their short forms", () => {
    expect(choiceAnswer(describingCertaintyInThePast.quiz, "puddles everywhere")).toBe("must have");
    expect(choiceAnswer(describingCertaintyInThePast.quiz, "switched off all day")).toBe("can't have read");
    const missed = gap(describingCertaintyInThePast.quiz, "why Tom is late");
    expect(missed).toEqual(["might have missed", "may have missed", "could have missed", "might've missed", "may've missed", "could've missed"]);
    expectGap(
      missed,
      ["might have missed", "may have missed", "could have missed", "might’ve missed", "could’ve missed"],
      ["must have missed", "can't have missed", "might missed", "might have miss", "might of missed"],
    );
    const read = gap(describingCertaintyInThePast.quiz, "got my message");
    expect(read).toEqual(["might not have read", "may not have read", "mightn't have read"]);
    expectGap(read, ["might not have read", "may not have read", "mightn’t have read"], ["couldn't have read", "can't have read", "might not read", "mustn't have read"]);
  });

  it("pins the needn't have and didn't need to choices and gaps", () => {
    expect(choiceAnswer(needntHaveAndDidntNeedTo.quiz, "didn't rain at all")).toBe("needn't have taken");
    expect(choiceAnswer(needntHaveAndDidntNeedTo.quiz, "booked a table")).toBe("We needn't have booked a table.");
    const pay = gap(needntHaveAndDidntNeedTo.quiz, "museum was free");
    expect(pay).toEqual(["didn't need to pay", "did not need to pay", "didn't have to pay", "did not have to pay"]);
    expectGap(pay, ["didn't need to pay", "did not need to pay", "didn’t have to pay"], ["needn't have paid", "didn't need pay", "didn't needed to pay", "mustn't pay"]);
    const got = gap(needntHaveAndDidntNeedTo.quiz, "so early this morning");
    expect(got).toEqual([
      "needn't have got up",
      "need not have got up",
      "needn't have gotten up",
      "need not have gotten up",
      "didn't need to get up",
      "did not need to get up",
      "didn't have to get up",
      "did not have to get up",
    ]);
    expectGap(
      got,
      ["needn't have got up", "need not have got up", "needn’t have gotten up", "didn’t need to get up", "did not need to get up", "didn’t have to get up", "did not have to get up"],
      ["needn't get up", "needn't have get up", "mustn't have got up", "needn't to have got up", "didn't need get up"],
    );
  });

  it("pins the reworked mistake sentences: a past fact in the needn't item, a stated fact in the mixed item", () => {
    const sentences = (quiz: typeof mixedConditionals.quiz) => quiz.flatMap((q) => (q.kind === "mistake" ? [q.tokens.join(" ")] : []));
    expect(sentences(needntHaveAndDidntNeedTo.quiz)).toContain(
      "You needn't have buy me such an expensive present for my birthday last week.",
    );
    expect(sentences(mixedConditionals.quiz)).toContain(
      "Maria is very shy. If she isn't so shy, she would have spoken to him at the party yesterday.",
    );
  });

  it("pins the could, was able to and could have gaps: general, single success and a chance not taken", () => {
    expect(choiceAnswer(couldWasAbleToAndCouldHave.quiz, "When I was a child")).toBe("could");
    expect(choiceAnswer(couldWasAbleToAndCouldHave.quiz, "everyone ___ get out")).toBe("was able to");
    const found = gap(couldWasAbleToAndCouldHave.quiz, "under the sofa");
    expect(found).toEqual(["was able to find"]);
    expectGap(found, ["was able to find", "Was able to find."], ["could find", "can find", "was able find", "was able to found"]);
    const open = gap(couldWasAbleToAndCouldHave.quiz, "the jar");
    expect(open).toEqual(["couldn't open", "could not open", "wasn't able to open", "was not able to open"]);
    expectGap(open, ["couldn't open", "could not open", "wasn’t able to open"], ["can't open", "couldn't opened", "wasn't able open", "couldn't have opened"]);
    const taken = gap(couldWasAbleToAndCouldHave.quiz, "the job in Rome");
    expect(taken).toEqual(["could have taken", "could've taken"]);
    expectGap(taken, ["could have taken", "could’ve taken"], ["could take", "could have took", "can have taken", "could of taken"]);
  });

  it("pins every wordbank answer", () => {
    expect(wordbankAnswer(thirdConditional.quiz)).toBe("What would you have done if you had missed the flight?");
    expect(wordbankAnswer(mixedConditionals.quiz)).toBe("I would have understood the guide.");
    expect(wordbankAnswer(wishForPastRegrets.quiz)).toBe("I'd known about the meeting.");
    expect(wordbankAnswer(describingCertaintyInThePast.quiz)).toBe("She must have been working late.");
    expect(wordbankAnswers(needntHaveAndDidntNeedTo.quiz)).toEqual([]);
    expect(wordbankAnswers(couldWasAbleToAndCouldHave.quiz)).toEqual([]);
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(mistakes(thirdConditional.quiz)).toEqual([
      ["have", "had"],
      ["will", "would"],
    ]);
    expect(mistakes(mixedConditionals.quiz)).toEqual([
      ["will", "would"],
      ["isn't", "weren't"],
    ]);
    expect(mistakes(wishForPastRegrets.quiz)).toEqual([
      ["went", "gone"],
      ["have", "had"],
    ]);
    expect(mistakes(describingCertaintyInThePast.quiz)).toEqual([
      ["mustn't", "can't"],
      ["went", "gone"],
    ]);
    expect(mistakes(needntHaveAndDidntNeedTo.quiz)).toEqual([
      ["buy", "bought"],
      ["mustn't", "needn't"],
    ]);
    expect(mistakes(couldWasAbleToAndCouldHave.quiz)).toEqual([
      ["could", "were able to"],
      ["can", "could"],
    ]);
  });

  it("hedges where Swan allows alternatives, and records the note corrections", () => {
    expect(thirdConditional.explanation).toContain("could have");
    expect(thirdConditional.explanation).toContain("don't usually use would");
    expect(mixedConditionals.explanation).toContain("both are correct");
    expect(describingCertaintyInThePast.explanation).toContain("not mustn't have");
    expect(describingCertaintyInThePast.sourceNotes).toContain("unlikely");
    expect(needntHaveAndDidntNeedTo.explanation).toContain("whether or not");
    expect(couldWasAbleToAndCouldHave.explanation).toContain("couldn't is fine");
    expect(couldWasAbleToAndCouldHave.sourceNotes).toContain("ability half");
  });
});
