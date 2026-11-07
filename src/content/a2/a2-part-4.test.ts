import { findTopic, siblingsAcrossLevels } from "@/content/registry";
import { parseTopic, type Level } from "@/content/schema";
import { a2Topics } from ".";
import { andButSoBecause } from "./grammar/and-but-so-because";
import { edAndIngAdjectives } from "./grammar/ed-and-ing-adjectives";
import { firstConditional } from "./grammar/first-conditional";
import { verbPlusGerundOrInfinitive } from "./grammar/verb-plus-gerund-or-infinitive";
import { expectGap, gap, quizLengths, wordbankAnswer, wrongToken } from "@/content/test-helpers";

const orderedSlugs = [
  "and-but-so-because",
  "first-conditional",
  "ed-and-ing-adjectives",
  "verb-plus-gerund-or-infinitive",
];

describe("A2 grammar, part 4", () => {
  it("registers orders 18-21 in sequence, each passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("a2", "grammar", slug);
      expect(found?.order).toBe(i + 18);
      expect(found?.shape).toBe("rule");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(a2Topics.slice(17, 21).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths([andButSoBecause, edAndIngAdjectives, firstConditional, verbPlusGerundOrInfinitive])).toEqual({
      "and-but-so-because": 7,
      "ed-and-ing-adjectives": 6,
      "first-conditional": 7,
      "verb-plus-gerund-or-infinitive": 6,
    });
  });

  it("pins the families, and leaves -ed and -ing adjectives without one", () => {
    expect(andButSoBecause.family).toBe("linking-words");
    expect(firstConditional.family).toBe("conditionals");
    expect(edAndIngAdjectives.family).toBeUndefined();
    expect(verbPlusGerundOrInfinitive.family).toBe("gerunds-and-infinitives");
  });

  it("has no A1 siblings for the A2-first families, and links first conditional, verb + gerund or infinitive, and and-but-so-because to B1", () => {
    const siblings = (level: Level, slug: string) => {
      const found = findTopic(level, "grammar", slug);
      if (!found) throw new Error(`${slug} missing`);
      return siblingsAcrossLevels(found).map((t) => `${t.level}/${t.slug}`);
    };
    expect(siblings("a2", "first-conditional")).toEqual(["b1/second-conditional"]);
    expect(siblings("a2", "verb-plus-gerund-or-infinitive")).toEqual(["b1/gerunds-vs-infinitives"]);
    expect(siblings("a2", "and-but-so-because")).toEqual(["b1/linking-words"]);
    const linked = ["first-conditional", "verb-plus-gerund-or-infinitive", "and-but-so-because"];
    for (const slug of orderedSlugs.filter((s) => !linked.includes(s))) {
      expect(siblings("a2", slug)).toEqual([]);
    }
  });

  it("gives each topic about five questions, and scrambles every wordbank", () => {
    for (const t of a2Topics.slice(17, 21)) {
      expect(t.quiz.length).toBeGreaterThanOrEqual(5);
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" ")).not.toBe(q.answer);
      }
    }
  });

  it("pins the and, but, so and because gaps", () => {
    const so = gap(andButSoBecause.quiz, "bus didn't come");
    expect(so).toEqual(["so"]);
    expectGap(so, ["so", "So"], ["because", "and", "but", "so that"]);
    const because = gap(andButSoBecause.quiz, "open the window");
    expect(because).toEqual(["because"]);
    expectGap(because, ["because", "Because"], ["so", "and", "because of", "becuase"]);
  });

  it("pins the first conditional gaps, accepting short and full forms", () => {
    const is = gap(firstConditional.quiz, "Ana ___ late");
    expect(is).toEqual(["is", "'s"]);
    expectGap(is, ["is", "’s"], ["will be", "'ll be", "be", "was", "are"]);
    const miss = gap(firstConditional.quiz, "miss, will");
    expect(miss).toEqual(["will miss", "'ll miss"]);
    expectGap(miss, ["'ll miss", "’ll miss", "will miss"], ["miss", "missed", "will missed", "will to miss", "won't miss"]);
    const go = gap(firstConditional.quiz, "go + not, will");
    expect(go).toEqual(["won't go", "will not go"]);
    expectGap(go, ["won't go", "won’t go", "will not go"], ["don't go", "not go", "won't going", "will not to go", "willn't go"]);
  });

  it("pins the -ed and -ing adjective gaps", () => {
    const surprised = gap(edAndIngAdjectives.quiz, "opened the door");
    expect(surprised).toEqual(["surprised"]);
    expectGap(surprised, ["surprised"], ["surprising", "surprise", "surprized"]);
    const tiring = gap(edAndIngAdjectives.quiz, "twenty kilometres");
    expect(tiring).toEqual(["tiring"]);
    expectGap(tiring, ["tiring"], ["tired", "tireing", "tire"]);
  });

  it("pins the gerund and infinitive gaps, accepting both forms after start", () => {
    const rent = gap(verbPlusGerundOrInfinitive.quiz, "near the station");
    expect(rent).toEqual(["to rent"]);
    expectGap(rent, ["to rent"], ["renting", "rent", "rented", "to rented", "to renting"]);
    const rain = gap(verbPlusGerundOrInfinitive.quiz, "left the house");
    expect(rain).toEqual(["raining", "to rain"]);
    expectGap(rain, ["raining", "to rain"], ["rain", "rained", "to raining", "rainning"]);
    const paint = gap(verbPlusGerundOrInfinitive.quiz, "the kitchen at midnight");
    expect(paint).toEqual(["painting"]);
    expectGap(paint, ["painting"], ["to paint", "paint", "painted", "paintting"]);
  });

  it("pins every wordbank answer", () => {
    expect(wordbankAnswer(andButSoBecause.quiz)).toBe("The café was full, so we sat outside.");
    expect(wordbankAnswer(firstConditional.quiz)).toBe("if the weather is good.");
    expect(wordbankAnswer(edAndIngAdjectives.quiz)).toBeUndefined();
    expect(wordbankAnswer(verbPlusGerundOrInfinitive.quiz)).toBeUndefined();
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(wrongToken(andButSoBecause.quiz)).toEqual(["So", "Because"]);
    expect(wrongToken(firstConditional.quiz)).toEqual(["snow", "snows"]);
    expect(wrongToken(edAndIngAdjectives.quiz)).toEqual(["interesting", "interested"]);
    expect(wrongToken(verbPlusGerundOrInfinitive.quiz)).toEqual(["seeing", "see"]);
  });

  it("hedges the rules that are tendencies", () => {
    expect(andButSoBecause.explanation).toContain("We don't usually put a comma before because");
    expect(firstConditional.explanation).toContain("We don't usually use will in the if part");
    expect(firstConditional.explanation).toContain("we usually put a comma after it");
    expect(edAndIngAdjectives.explanation).toContain("I'm <b>boring</b> means that other people feel bored with me");
    expect(verbPlusGerundOrInfinitive.explanation).toContain("usually with little or no difference in meaning");
  });

  it("reuses the A2 definition of the infinitive word for word", () => {
    const definition = "To and the base form together, like to buy or to see, are called the <b>infinitive</b>.";
    const purpose = findTopic("a2", "grammar", "infinitive-of-purpose");
    expect(purpose?.explanation).toContain(definition);
    expect(verbPlusGerundOrInfinitive.explanation).toContain(definition);
  });
});
