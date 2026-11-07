import { findTopic } from "@/content/registry";
import { parseTopic } from "@/content/schema";
import { b1Topics } from ".";
import { futureContinuousAndFuturePerfect } from "./grammar/future-continuous-and-future-perfect";
import { pastPerfectAndNarrativeTenses } from "./grammar/past-perfect-and-narrative-tenses";
import { secondConditional } from "./grammar/second-conditional";
import { timeClauses } from "./grammar/time-clauses";
import { wishAndIfOnly } from "./grammar/wish-and-if-only";
import { choiceAnswer, expectGap, gap, ids, quizLengths, wordbankAnswer, wrongToken } from "@/content/test-helpers";

const orderedSlugs = [
  "past-perfect-and-narrative-tenses",
  "time-clauses",
  "future-continuous-and-future-perfect",
  "second-conditional",
  "wish-and-if-only",
];

const topics = [pastPerfectAndNarrativeTenses, timeClauses, futureContinuousAndFuturePerfect, secondConditional, wishAndIfOnly];

describe("B1 grammar, part 2 (narrative and future)", () => {
  it("registers orders 6-10 in sequence, each a grammar rule topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("b1", "grammar", slug);
      expect(found?.order, slug).toBe(i + 6);
      expect(found?.shape).toBe("rule");
      expect(found?.level).toBe("b1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b1Topics.slice(5, 10).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "past-perfect-and-narrative-tenses": 6,
      "time-clauses": 6,
      "future-continuous-and-future-perfect": 6,
      "second-conditional": 7,
      "wish-and-if-only": 7,
    });
  });

  it("pins the families: none for orders 6-7, future-forms, conditionals and wish for orders 8-10", () => {
    expect(pastPerfectAndNarrativeTenses.family).toBeUndefined();
    expect(timeClauses.family).toBeUndefined();
    expect(futureContinuousAndFuturePerfect.family).toBe("future-forms");
    expect(secondConditional.family).toBe("conditionals");
    expect(wishAndIfOnly.family).toBe("wish");
  });

  it("links the future-forms and conditionals chains A2 <-> B1 both ways, and gives the rest no siblings", () => {
    expect(ids("a2", "grammar", "will")).toEqual(["b1/future-continuous-and-future-perfect"]);
    expect(ids("b1", "grammar", "future-continuous-and-future-perfect")).toEqual(["a2/will"]);
    expect(ids("a2", "grammar", "first-conditional")).toEqual(["b1/second-conditional"]);
    expect(ids("b1", "grammar", "second-conditional")).toEqual(["a2/first-conditional"]);
    expect(ids("b1", "grammar", "wish-and-if-only")).toEqual([]);
    expect(ids("b1", "grammar", "past-perfect-and-narrative-tenses")).toEqual([]);
    expect(ids("b1", "grammar", "time-clauses")).toEqual([]);
  });

  it("gives each topic about five questions, at least 3 examples, a summary, and scrambles every wordbank", () => {
    for (const t of topics) {
      expect(t.quiz.length, t.slug).toBeGreaterThanOrEqual(5);
      expect(t.examples.length, t.slug).toBeGreaterThanOrEqual(3);
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" ")).not.toBe(q.answer);
      }
    }
  });

  it("pins the narrative tense choices and gaps, accepting the optional past perfect after after", () => {
    expect(choiceAnswer(pastPerfectAndNarrativeTenses.quiz, "the train ___")).toBe("had left");
    expect(choiceAnswer(pastPerfectAndNarrativeTenses.quiz, "started before Tom arrived")).toBe(
      "When Tom arrived, the film had started.",
    );
    const flown = gap(pastPerfectAndNarrativeTenses.quiz, "on the plane");
    expect(flown).toEqual(["had never flown", "'d never flown"]);
    expectGap(flown, ["had never flown", "’d never flown", "Had never flown."], ["have never flown", "never flew", "had never flew", "had never fly"]);
    const finished = gap(pastPerfectAndNarrativeTenses.quiz, "her homework");
    expect(finished).toEqual(["finished", "had finished", "'d finished"]);
    expectGap(finished, ["finished", "had finished", "’d finished"], ["has finished", "finish", "was finishing", "had finish"]);
  });

  it("pins the time clause choices and gaps: a present tense, not will, for the future", () => {
    expect(choiceAnswer(timeClauses.quiz, "at the hotel")).toBe("arrive");
    expect(choiceAnswer(timeClauses.quiz, "Which sentence is correct?")).toBe("I'll wait until you come back.");
    const is = gap(timeClauses.quiz, "until everyone");
    expect(is).toEqual(["is", "'s"]);
    expectGap(is, ["is", "’s", "IS"], ["will be", "'ll be", "was", "be"]);
    const are = gap(timeClauses.quiz, "your cat");
    expect(are).toEqual(["are", "'re"]);
    expectGap(are, ["are", "’re"], ["will be", "were", "be", "'ll be"]);
  });

  it("pins the future continuous and future perfect gaps, with contractions and British shall", () => {
    expect(choiceAnswer(futureContinuousAndFuturePerfect.quiz, "at eight tonight")).toBe("I'll be watching");
    expect(choiceAnswer(futureContinuousAndFuturePerfect.quiz, "before 5 pm")).toBe("By 5 pm, I'll have finished the work.");
    const finished = gap(futureContinuousAndFuturePerfect.quiz, "all my exams");
    expect(finished).toEqual(["will have finished", "'ll have finished", "shall have finished"]);
    expectGap(finished, ["will have finished", "’ll have finished", "shall have finished"], ["will finish", "will have finish", "will be finishing", "have finished"]);
    const lying = gap(futureContinuousAndFuturePerfect.quiz, "beach in Greece");
    expect(lying).toEqual(["will be lying", "'ll be lying", "shall be lying"]);
    expectGap(lying, ["will be lying", "’ll be lying", "Shall be lying"], ["will lie", "will be lieing", "will be lie", "will have lain"]);
  });

  it("pins the second conditional gaps, accepting were and was", () => {
    expect(choiceAnswer(secondConditional.quiz, "more free time")).toBe("had");
    expect(choiceAnswer(secondConditional.quiz, "unlikely or not true")).toBe("If I were taller, I'd play basketball.");
    const were = gap(secondConditional.quiz, "take the job");
    expect(were).toEqual(["were", "was"]);
    expectGap(were, ["were", "was", "Were"], ["am", "'m", "would be", "will be"]);
    const go = gap(secondConditional.quiz, "near the sea");
    expect(go).toEqual(["would go", "'d go"]);
    expectGap(go, ["would go", "’d go"], ["will go", "went", "would went", "would going"]);
    const knew = gap(secondConditional.quiz, "the answer if");
    expect(knew).toEqual(["knew"]);
    expectGap(knew, ["knew", "Knew."], ["know", "would know", "knowed", "will know"]);
  });

  it("pins the wish and if only gaps: were or was, could, and would for complaints", () => {
    expect(choiceAnswer(wishAndIfOnly.quiz, "have a car")).toBe("had");
    expect(choiceAnswer(wishAndIfOnly.quiz, "exam tomorrow")).toBe("I hope you pass your exam.");
    const were = gap(wishAndIfOnly.quiz, "quite short");
    expect(were).toEqual(["were", "was", "could be"]);
    expectGap(were, ["were", "was", "could be"], ["am", "'m", "would be", "will be", "can be"]);
    const could = gap(wishAndIfOnly.quiz, "can't swim");
    expect(could).toEqual(["could", "was able to", "were able to"]);
    expectGap(could, ["could", "was able to"], ["can", "would", "could to", "am able to"]);
    const take = gap(wishAndIfOnly.quiz, "takes my things");
    expect(take).toEqual(["wouldn't take", "would not take", "'d not take"]);
    expectGap(take, ["wouldn't take", "would not take", "’d not take"], ["won't take", "doesn't take", "wouldn't took", "wouldn't taking"]);
  });

  it("pins every wordbank answer", () => {
    expect(wordbankAnswer(pastPerfectAndNarrativeTenses.quiz)).toBe("Why had she left so early?");
    expect(wordbankAnswer(timeClauses.quiz)).toBe("as soon as I get home.");
    expect(wordbankAnswer(futureContinuousAndFuturePerfect.quiz)).toBe("Will you be using the car tonight?");
    expect(wordbankAnswer(secondConditional.quiz)).toBe("What would you do if you lost your phone?");
    expect(wordbankAnswer(wishAndIfOnly.quiz)).toBe("my neighbours wouldn't play music so loudly.");
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(wrongToken(pastPerfectAndNarrativeTenses.quiz)).toEqual(["have", "had"]);
    expect(wrongToken(timeClauses.quiz)).toEqual(["got", "get"]);
    expect(wrongToken(futureContinuousAndFuturePerfect.quiz)).toEqual(["live", "lived"]);
    expect(wrongToken(secondConditional.quiz)).toEqual(["am", "were"]);
    expect(wrongToken(wishAndIfOnly.quiz)).toEqual(["is", "were"]);
  });

  it("hedges where Swan allows exceptions", () => {
    expect(pastPerfectAndNarrativeTenses.explanation).toContain("both are correct");
    expect(timeClauses.explanation).toContain("first conditional");
    expect(secondConditional.explanation).toContain("don't usually use would");
    expect(secondConditional.explanation).toContain("informal");
    expect(wishAndIfOnly.explanation).toContain("I wish I would");
  });
});
