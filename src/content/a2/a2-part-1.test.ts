import { findTopic, siblingsAcrossLevels } from "@/content/registry";
import { parseTopic } from "@/content/schema";
import { a2Topics } from ".";
import { comparativesAndSuperlatives } from "./grammar/comparatives-and-superlatives";
import { goingTo } from "./grammar/going-to";
import { pastContinuous } from "./grammar/past-continuous";
import { pastSimpleRegularAndIrregular } from "./grammar/past-simple-regular-and-irregular";
import { presentContinuousForFuture } from "./grammar/present-continuous-for-future";
import { will } from "./grammar/will";
import { expectGap, gap, quizLengths, wordbankAnswer, wrongToken } from "@/content/test-helpers";

const orderedSlugs = [
  "past-simple-regular-and-irregular",
  "past-continuous",
  "comparatives-and-superlatives",
  "going-to",
  "will",
  "present-continuous-for-future",
];

describe("A2 grammar, part 1", () => {
  it("registers orders 1-6 in sequence, each passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("a2", "grammar", slug);
      expect(found?.order).toBe(i + 1);
      expect(found?.shape).toBe("rule");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(a2Topics.slice(0, 6).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths([pastSimpleRegularAndIrregular, pastContinuous, comparativesAndSuperlatives, goingTo, will, presentContinuousForFuture])).toEqual({
      "past-simple-regular-and-irregular": 6,
      "past-continuous": 6,
      "comparatives-and-superlatives": 6,
      "going-to": 6,
      "will": 6,
      "present-continuous-for-future": 6,
    });
  });

  it("pins the families, and leaves past continuous and going to without one", () => {
    expect(pastSimpleRegularAndIrregular.family).toBe("past-simple");
    expect(pastContinuous.family).toBeUndefined();
    expect(comparativesAndSuperlatives.family).toBe("comparison");
    expect(goingTo.family).toBeUndefined();
    expect(will.family).toBe("future-forms");
    expect(presentContinuousForFuture.family).toBe("present-continuous");
  });

  it("links the past simple and present continuous topics to their A1 siblings", () => {
    const siblings = (slug: string) => {
      const found = findTopic("a2", "grammar", slug);
      if (!found) throw new Error(`${slug} missing`);
      return siblingsAcrossLevels(found).map((t) => `${t.level}/${t.slug}`);
    };
    expect(siblings("past-simple-regular-and-irregular")).toEqual(["a1/was-were", "b1/present-perfect-and-past-simple"]);
    expect(siblings("present-continuous-for-future")).toEqual(["a1/present-continuous"]);
    const wasWere = findTopic("a1", "grammar", "was-were");
    expect(wasWere && siblingsAcrossLevels(wasWere).map((t) => t.slug)).toEqual([
      "past-simple-regular-and-irregular",
      "present-perfect-and-past-simple",
    ]);
  });

  it("gives each topic about five questions, and scrambles every wordbank", () => {
    for (const t of a2Topics.slice(0, 6)) {
      expect(t.quiz.length).toBeGreaterThanOrEqual(5);
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" ")).not.toBe(q.answer);
      }
    }
  });

  it("pins the past simple gaps", () => {
    const studied = gap(pastSimpleRegularAndIrregular.quiz, "English at university");
    expect(studied).toEqual(["studied"]);
    expectGap(studied, ["studied", "Studied."], ["studyed", "studies", "was studying"]);
    const liked = gap(pastSimpleRegularAndIrregular.quiz, "like + not");
    expect(liked).toEqual(["didn't like", "did not like"]);
    expectGap(liked, ["didn't like", "did not like", "didn’t like"], ["didn't liked", "don't like", "not liked"]);
  });

  it("pins the past continuous gaps", () => {
    const playing = gap(pastContinuous.quiz, "in the garden");
    expect(playing).toEqual(["were playing"]);
    expectGap(playing, ["were playing"], ["was playing", "played", "were play"]);
    const watching = gap(pastContinuous.quiz, "watch + not");
    expect(watching).toEqual(["weren't watching", "were not watching"]);
    expectGap(watching, ["weren't watching", "were not watching", "weren’t watching"], ["wasn't watching", "didn't watch"]);
  });

  it("pins the comparative and superlative gaps", () => {
    const expensive = gap(comparativesAndSuperlatives.quiz, "My new phone");
    expect(expensive).toEqual(["more expensive"]);
    expectGap(expensive, ["more expensive", "MORE EXPENSIVE"], ["expensiver", "most expensive", "less expensive", "more expensiver", "much more expensive"]);
    const easiest = gap(comparativesAndSuperlatives.quiz, "question 1");
    expect(easiest).toEqual(["easiest"]);
    expectGap(easiest, ["easiest"], ["easyest", "most easy", "easier"]);
  });

  it("pins the going to gaps, with full and short forms", () => {
    const buy = gap(goingTo.quiz, "a new car");
    expect(buy).toEqual(["are going to buy", "'re going to buy"]);
    expectGap(buy, ["are going to buy", "’re going to buy"], ["going to buy", "is going to buy", "are going to buying"]);
    const watch = gap(goingTo.quiz, "watch + not");
    expect(watch).toEqual(["am not going to watch", "'m not going to watch"]);
    expectGap(watch, ["am not going to watch", "'m not going to watch"], ["amn't going to watch", "not going to watch", "won't watch"]);
  });

  it("pins the will gaps, with won't and will not", () => {
    const tell = gap(will.quiz, "your secret");
    expect(tell).toEqual(["won't tell", "will not tell", "'ll not tell"]);
    expectGap(tell, ["won't tell", "will not tell", "won’t tell"], ["willn't tell", "won't to tell", "don't tell"]);
    const pass = gap(will.quiz, "your exam");
    expect(pass).toEqual(["will pass", "'ll pass"]);
    expectGap(pass, ["will pass", "'ll pass"], ["will to pass", "will passes", "pass"]);
  });

  it("pins the present continuous for future gaps", () => {
    const meet = gap(presentContinuousForFuture.quiz, "at the cinema");
    expect(meet).toEqual(["am meeting", "'m meeting"]);
    expectGap(meet, ["am meeting", "'m meeting"], ["meet", "am meet", "will meet"]);
    const work = gap(presentContinuousForFuture.quiz, "work + not");
    expect(work).toEqual(["am not working", "'m not working"]);
    expectGap(work, ["am not working", "'m not working"], ["amn't working", "don't work", "not working"]);
  });

  it("pins every wordbank answer", () => {
    expect(wordbankAnswer(pastSimpleRegularAndIrregular.quiz)).toBe("Where did your parents meet?");
    expect(wordbankAnswer(pastContinuous.quiz)).toBe("What was your brother doing?");
    expect(wordbankAnswer(comparativesAndSuperlatives.quiz)).toBeUndefined();
    expect(wordbankAnswer(goingTo.quiz)).toBe("Where are you going to stay?");
    expect(wordbankAnswer(will.quiz)).toBe("When will you be home?");
    expect(wordbankAnswer(presentContinuousForFuture.quiz)).toBe("Where are you having the party?");
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(wrongToken(pastSimpleRegularAndIrregular.quiz)).toEqual(["buyed", "bought"]);
    expect(wrongToken(pastContinuous.quiz)).toEqual(["walk", "walking"]);
    expect(wrongToken(comparativesAndSuperlatives.quiz)).toEqual(["hotest", "hottest"]);
    expect(wrongToken(goingTo.quiz)).toEqual(["studies", "study"]);
    expect(wrongToken(will.quiz)).toEqual(["rains", "rain"]);
    expect(wrongToken(presentContinuousForFuture.quiz)).toEqual(["haveing", "having"]);
  });

  it("hedges the future-form contrast instead of stating a hard rule", () => {
    expect(will.explanation).toContain("both are often correct");
    expect(presentContinuousForFuture.explanation).toContain("Often both are correct");
    expect(presentContinuousForFuture.explanation).toContain("We do not usually use <b>will</b> for an arrangement");
  });
});
