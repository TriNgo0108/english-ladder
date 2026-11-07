import { findTopic, siblingsAcrossLevels } from "@/content/registry";
import { parseTopic } from "@/content/schema";
import { b1Topics } from ".";
import { alreadyYetAndJust } from "./grammar/already-yet-and-just";
import { presentPerfectAndPastSimple } from "./grammar/present-perfect-and-past-simple";
import { presentPerfectContinuous } from "./grammar/present-perfect-continuous";
import { sinceAndFor } from "./grammar/since-and-for";
import { stativeVerbs } from "./grammar/stative-verbs";
import { expectGap, gap, mistakeSentence, quizLengths, wordbankAnswer, wrongToken } from "@/content/test-helpers";

const orderedSlugs = [
  "present-perfect-and-past-simple",
  "since-and-for",
  "already-yet-and-just",
  "stative-verbs",
  "present-perfect-continuous",
];

const topics = [presentPerfectAndPastSimple, sinceAndFor, alreadyYetAndJust, stativeVerbs, presentPerfectContinuous];

describe("B1 grammar, part 1 (the present perfect group)", () => {
  it("registers orders 1-5 in sequence, each a grammar rule topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("b1", "grammar", slug);
      expect(found?.order, slug).toBe(i + 1);
      expect(found?.shape).toBe("rule");
      expect(found?.level).toBe("b1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b1Topics.slice(0, 5).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "present-perfect-and-past-simple": 7,
      "since-and-for": 6,
      "already-yet-and-just": 6,
      "stative-verbs": 6,
      "present-perfect-continuous": 6,
    });
  });

  it("pins the families: past-simple for order 1, none for orders 2-5", () => {
    expect(presentPerfectAndPastSimple.family).toBe("past-simple");
    expect(sinceAndFor.family).toBeUndefined();
    expect(alreadyYetAndJust.family).toBeUndefined();
    expect(stativeVerbs.family).toBeUndefined();
    expect(presentPerfectContinuous.family).toBeUndefined();
  });

  it("links the past-simple chain A1 -> A2 -> B1 in CEFR order on every page", () => {
    const ids = (level: "a1" | "a2" | "b1", slug: string) => {
      const found = findTopic(level, "grammar", slug);
      if (!found) throw new Error(`${level}/${slug} missing`);
      return siblingsAcrossLevels(found).map((t) => `${t.level}/${t.slug}`);
    };
    expect(ids("a1", "was-were")).toEqual(["a2/past-simple-regular-and-irregular", "b1/present-perfect-and-past-simple"]);
    expect(ids("a2", "past-simple-regular-and-irregular")).toEqual(["a1/was-were", "b1/present-perfect-and-past-simple"]);
    expect(ids("b1", "present-perfect-and-past-simple")).toEqual(["a1/was-were", "a2/past-simple-regular-and-irregular"]);
    for (const slug of orderedSlugs.slice(1)) expect(ids("b1", slug), slug).toEqual([]);
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

  it("sets the classic 'I have seen him yesterday' trap as a distractor", () => {
    const q = presentPerfectAndPastSimple.quiz.find((x) => x.kind === "choice" && x.stem.includes("yesterday"));
    if (q?.kind !== "choice") throw new Error("yesterday choice missing");
    expect(q.options[q.answer]).toBe("saw");
    expect(q.options).toContain("have seen");
    expect(presentPerfectAndPastSimple.pitfall?.wrong).toBe("I have seen him yesterday.");
  });

  it("pins the present perfect vs past simple gaps", () => {
    const lost = gap(presentPerfectAndPastSimple.quiz, "on the bus last week");
    expect(lost).toEqual(["lost"]);
    expectGap(lost, ["lost", "Lost."], ["have lost", "'ve lost", "losed", "has lost"]);
    const been = gap(presentPerfectAndPastSimple.quiz, "Australia three times");
    expect(been).toEqual(["has been", "'s been"]);
    expectGap(been, ["has been", "’s been", "HAS BEEN"], ["was", "has gone", "have been", "is been"]);
    const had = gap(presentPerfectAndPastSimple.quiz, "so far today");
    expect(had).toEqual(["have had", "'ve had"]);
    expectGap(had, ["have had", "’ve had"], ["had", "have have", "has had", "have been having"]);
  });

  it("pins the since and for gaps", () => {
    const since = gap(sinceAndFor.quiz, "2020");
    expect(since).toEqual(["since", "ever since"]);
    expectGap(since, ["since", "Since", "ever since"], ["for", "from", "in"]);
    const known = gap(sinceAndFor.quiz, "still good friends");
    expect(known).toEqual(["have known", "'ve known"]);
    expectGap(known, ["have known", "’ve known"], ["know", "knew", "are knowing", "have been knowing", "had known"]);
  });

  it("pins the already, yet and just gaps, with the US past simple accepted", () => {
    const yet = gap(alreadyYetAndJust.quiz, "the report");
    expect(yet).toEqual(["yet"]);
    expectGap(yet, ["yet", "Yet."], ["already", "just", "still"]);
    const started = gap(alreadyYetAndJust.quiz, "The film");
    expect(started).toEqual(["has just started", "'s just started", "just started"]);
    expectGap(started, ["has just started", "’s just started", "just started"], ["has started just", "just has started", "is just started", "has just start"]);
    const seen = gap(alreadyYetAndJust.quiz, "I saw it last week");
    expect(seen).toEqual(["have already seen", "'ve already seen", "already saw"]);
    expectGap(seen, ["have already seen", "’ve already seen", "already saw"], ["already have seen", "have seen already", "have already saw", "already seen"]);
  });

  it("pins the stative verb gaps, including both meanings of think and have", () => {
    const thinking = stativeVerbs.quiz.find((x) => x.kind === "choice" && x.stem.includes("about my answer"));
    if (thinking?.kind !== "choice") throw new Error("think-about choice missing");
    expect(thinking.options[thinking.answer]).toBe("am thinking");
    const having = gap(stativeVerbs.quiz, "dinner right now");
    expect(having).toEqual(["are having", "'re having"]);
    expectGap(having, ["are having", "’re having"], ["have", "are have", "having"]);
    const think = gap(stativeVerbs.quiz, "too expensive");
    expect(think).toEqual(["think"]);
    expectGap(think, ["think", "Think"], ["am thinking", "'m thinking", "thinks", "don't think"]);
  });

  it("pins the present perfect continuous gaps", () => {
    const written = gap(presentPerfectContinuous.quiz, "six emails");
    expect(written).toEqual(["have written", "'ve written"]);
    expectGap(written, ["have written", "’ve written"], ["have been writing", "wrote", "have wrote", "'ve been writing"]);
    const raining = gap(presentPerfectContinuous.quiz, "since this morning");
    expect(raining).toEqual(["has been raining", "'s been raining"]);
    expectGap(raining, ["has been raining", "’s been raining"], ["has raining", "is raining", "has rained", "have been raining"]);
  });

  it("pins every wordbank answer", () => {
    expect(wordbankAnswer(presentPerfectAndPastSimple.quiz)).toBe("Have you ever been to Japan?");
    expect(wordbankAnswer(sinceAndFor.quiz)).toBe("How long have you lived here?");
    expect(wordbankAnswer(alreadyYetAndJust.quiz)).toBe("Has the taxi arrived yet?");
    expect(wordbankAnswer(stativeVerbs.quiz)).toBe("What do you think of my new haircut?");
    expect(wordbankAnswer(presentPerfectContinuous.quiz)).toBe("How long have you been learning English?");
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(wrongToken(presentPerfectAndPastSimple.quiz)).toEqual(["saw", "seen"]);
    expect(wrongToken(sinceAndFor.quiz)).toEqual(["since", "for"]);
    expect(wrongToken(alreadyYetAndJust.quiz)).toEqual(["yet.", "already"]);
    expect(mistakeSentence(alreadyYetAndJust.quiz)).toBe("The client is happy. We've finished the project yet.");
    expect(wrongToken(stativeVerbs.quiz)).toBeUndefined();
    expect(wrongToken(presentPerfectContinuous.quiz)).toEqual(["live", "living"]);
  });

  it("hedges where Swan allows exceptions, and names the US past simple once", () => {
    expect(alreadyYetAndJust.explanation).toContain("American English");
    expect(alreadyYetAndJust.explanation).toContain("usually goes at the end");
    expect(stativeVerbs.explanation).toContain("not usually");
    expect(presentPerfectContinuous.explanation).toContain("both are often correct");
  });
});
