import { findTopic } from "@/content/registry";
import { parseTopic, type RuleTopic } from "@/content/schema";
import { b1Topics } from ".";
import { abbreviations } from "./mechanics/abbreviations";
import { colonsAndSemicolons } from "./mechanics/colons-and-semicolons";
import { commas } from "./mechanics/commas";
import { questionIntonation } from "./mechanics/question-intonation";
import { questionTags } from "./grammar/question-tags";
import { choiceAnswer, distractors, expectGap, gap, ids, mistakes, quizLengths, stringsIn } from "@/content/test-helpers";

/** U+2197 (north east arrow) or U+2198 (south east arrow). A screen reader reads them by those names, so each must be named in words. */
const ARROW = /[\u2197\u2198]/;

function unnamedArrows(strings: Array<[string, string]>) {
  return strings.filter(([, s]) => ARROW.test(s) && !/rising|falling/i.test(s)).map(([path]) => path);
}

describe("B1 Mechanics, orders 41-43 (commas, colons and semicolons, abbreviations)", () => {
  const orderedSlugs = ["commas", "colons-and-semicolons", "abbreviations"];
  const topics: RuleTopic[] = [commas, colonsAndSemicolons, abbreviations];

  it("registers orders 41-43 in sequence, each a mechanics rule topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("b1", "mechanics", slug);
      expect(found?.order, slug).toBe(i + 41);
      expect(found?.shape).toBe("rule");
      expect(found?.level).toBe("b1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b1Topics.slice(40, 43).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths([...topics, questionIntonation])).toEqual({
      "commas": 5,
      "colons-and-semicolons": 5,
      "abbreviations": 5,
      "question-intonation": 7,
    });
  });

  it("pins the families: punctuation for commas, none for the other two", () => {
    expect(commas.family).toBe("punctuation");
    expect(colonsAndSemicolons.family).toBeUndefined();
    expect(abbreviations.family).toBeUndefined();
  });

  it("links the punctuation chain A1 <-> B1 both ways, and gives the other two no siblings", () => {
    expect(ids("a1", "mechanics", "capital-letters-and-full-stops")).toEqual(["b1/commas"]);
    expect(ids("b1", "mechanics", "commas")).toEqual(["a1/capital-letters-and-full-stops"]);
    expect(ids("b1", "mechanics", "colons-and-semicolons")).toEqual([]);
    expect(ids("b1", "mechanics", "abbreviations")).toEqual([]);
  });

  it("gives each topic about five questions, at least 3 examples and a short summary", () => {
    for (const t of topics) {
      expect(t.quiz.length, t.slug).toBeGreaterThanOrEqual(5);
      expect(t.examples.length, t.slug).toBeGreaterThanOrEqual(3);
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
    }
  });

  it("tests punctuation and abbreviations only with choice and mistake items, never a typed gap or wordbank", () => {
    for (const t of topics) {
      for (const q of t.quiz) expect(["choice", "mistake"], t.slug).toContain(q.kind);
    }
  });

  it("never marks the Oxford comma wrong", () => {
    for (const t of topics) {
      for (const option of distractors(t)) expect(option, t.slug).not.toMatch(/, (and|or) /);
    }
    expect(commas.explanation).toContain("Oxford comma");
  });

  it("states the comma rules with the same hedges as orders 7, 9 and 25, and reuses the clause wording", () => {
    expect(commas.explanation).toContain("a clause is a group of words with a subject and a verb");
    expect(commas.explanation).toContain("we usually put a comma after it");
    expect(commas.explanation).toContain("<b>However,</b>");
    expect(commas.explanation.replace(/<\/?b>/g, "")).toMatch(/never put a single comma between the subject and its verb/i);
    expect(commas.explanation).toContain("A pair of commas around extra information is fine");
    expect(commas.form).toContain("never one comma alone: subject, verb");
  });

  it("writes British Mr, Mrs, Ms, Dr and St with no full stop, and names the US difference in one sentence", () => {
    const us = abbreviations.explanation.match(/In American English[^:]*: Mr\. [^]*?Dr\. Lee\./g);
    expect(us).toHaveLength(1);
    expect(abbreviations.explanation.match(/American/g)).toHaveLength(1);
    const rest = JSON.stringify({ ...abbreviations, explanation: abbreviations.explanation.replace(us?.[0] ?? "", "") });
    expect(rest).not.toMatch(/\b(Mr|Mrs|Ms|Dr|St)\./);
  });

  it("pins the comma choices", () => {
    expect(choiceAnswer(commas.quiz, "Which sentence", "bread")).toBe("I bought bread, cheese and apples.");
    expect(choiceAnswer(commas.quiz, "Which sentence", "raining")).toBe("It was raining, so we stayed at home.");
    expect(choiceAnswer(commas.quiz, "Which sentence", "Paris")).toBe("Paris, the capital of France, is beautiful in spring.");
  });

  it("pins the colon and semicolon choices", () => {
    expect(choiceAnswer(colonsAndSemicolons.quiz, "colon", "ruler")).toBe("You will need three things: a pen, a ruler and a calculator.");
    expect(choiceAnswer(colonsAndSemicolons.quiz, "Which sentence", "tonight")).toBe("I can't come tonight; I have to work late.");
    expect(choiceAnswer(colonsAndSemicolons.quiz, "commas inside", "Lisbon")).toBe(
      "This summer we're visiting Lisbon, Portugal; Lyon, France; and Turin, Italy.",
    );
  });

  it("pins the abbreviation choices: e.g. for some examples, i.e. for the exact meaning, the full words when formal", () => {
    expect(choiceAnswer(abbreviations.quiz, "citrus")).toBe("e.g.");
    expect(choiceAnswer(abbreviations.quiz, "weekend")).toBe("i.e.");
    expect(choiceAnswer(abbreviations.quiz, "most formal")).toBe("Please reply as soon as possible.");
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(mistakes(commas.quiz)).toEqual([
      ["language,", "language"],
      ["However", "However,"],
    ]);
    expect(mistakes(colonsAndSemicolons.quiz)).toEqual([
      ["includes:", "includes"],
      ["city,", "city;"],
    ]);
    expect(mistakes(abbreviations.quiz)).toEqual([
      ["FYI.", "ASAP."],
      ["etc..", "etc."],
    ]);
  });
});

describe("B1 Mechanics, order 44 (question intonation)", () => {
  const t = questionIntonation;
  const all = JSON.stringify(t);

  it("registers order 44 as the last B1 topic, a mechanics rule topic passing the schema", () => {
    const found = findTopic("b1", "mechanics", "question-intonation");
    expect(found?.order).toBe(44);
    expect(found?.shape).toBe("rule");
    expect(found?.level).toBe("b1");
    expect(() => parseTopic(found)).not.toThrow();
    expect(b1Topics).toHaveLength(44);
    expect(b1Topics[43].slug).toBe("question-intonation");
    expect(b1Topics.map((x) => x.order)).toEqual(Array.from({ length: 44 }, (_, i) => i + 1));
  });

  it("pins the intonation family key, with no sibling at any level", () => {
    expect(t.family).toBe("intonation");
    expect(ids("b1", "mechanics", "question-intonation")).toEqual([]);
  });

  it("gives the topic about five questions, at least 3 examples and a short summary", () => {
    expect(t.quiz.length).toBeGreaterThanOrEqual(5);
    expect(t.examples.length).toBeGreaterThanOrEqual(3);
    expect(t.summary.length).toBeLessThanOrEqual(155);
  });

  it("hedges every rule with usually, and teaches tag intonation that order 19 leaves out", () => {
    const text = t.explanation.replace(/<\/?b>/g, "");
    expect(text).toMatch(/yes\/no question[^.]*usually goes up/);
    expect(text).toMatch(/wh- question[^.]*usually goes down/);
    expect(text).toContain("many exceptions");
    expect(t.explanation).toContain("order 19");
    expect(questionTags.levelRationale).toContain("taught in order 44");
    expect(t.form?.split("\n").filter((l) => l.includes("usually")).length).toBeGreaterThanOrEqual(4);
  });

  it("writes rising and falling as words, with no arrow glyphs, because the served fonts have no U+2197 or U+2198", () => {
    expect(all).not.toMatch(ARROW);
    for (const ex of t.examples) expect(ex.sentence, ex.sentence).toMatch(/\((rising|falling)\)$/);
    for (const ex of t.examples) expect(ex.why, ex.sentence).toMatch(/ris|fall|goes (up|down)/i);
  });

  it("pins the choice answers: rise for a real question, fall for checking, fall for a wh- question", () => {
    expect(choiceAnswer(t.quiz, "Is there a bank near here?")).toBe("It usually goes up (rising).");
    expect(choiceAnswer(t.quiz, "really want to know")).toBe("Rising");
    expect(choiceAnswer(t.quiz, "want your friend to agree")).toBe("Falling");
    expect(choiceAnswer(t.quiz, "usually has falling")).toBe("What time do you finish work?");
    expect(choiceAnswer(t.quiz, "You've sold your car?")).toBe("Her voice rises at the end.");
    expect(choiceAnswer(t.quiz, "aren't you? (falling)")).toBe("He is almost sure, and he expects you to agree.");
  });

  it("pins the gap: falling for wh- questions", () => {
    const accepted = gap(t.quiz, "Write rising or falling");
    expect(accepted).toEqual(["falling"]);
    expectGap(accepted, ["falling", "Falling", " falling. "], ["rising", "fall", "down"]);
  });

  it("tests only the rule, never a sound: no mistake or wordbank items, and nothing asks the learner to listen", () => {
    expect(t.quiz.some((q) => q.kind === "mistake" || q.kind === "wordbank")).toBe(false);
    expect(all).not.toMatch(/\b(listen|audio|recording|play the)\b/i);
  });
});

describe("B1 arrows corpus (Review Focus 5)", () => {
  it("names every rising or falling arrow in words in the same string, in every field of every B1 topic", () => {
    const strings = b1Topics.flatMap((topic) => stringsIn(topic, topic.slug));
    expect(strings.length).toBeGreaterThan(1000);
    expect(unnamedArrows(strings)).toEqual([]);
  });

  it("walks nested fields, so an unnamed arrow in a quiz option would be caught and a named one would not", () => {
    const fake = { quiz: [{ options: ["fine", "Ready \u2197", "Ready? rising \u2197"] }] };
    expect(unnamedArrows(stringsIn(fake, "fake"))).toEqual(["fake.quiz[0].options[1]"]);
  });
});
