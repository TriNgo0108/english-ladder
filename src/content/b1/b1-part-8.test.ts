import { findTopic, siblingsAcrossLevels } from "@/content/registry";
import { parseTopic, type CategorySlug, type Level, type Question, type RuleTopic } from "@/content/schema";
import { b1Topics } from ".";
import { abbreviations } from "./mechanics/abbreviations";
import { colonsAndSemicolons } from "./mechanics/colons-and-semicolons";
import { commas } from "./mechanics/commas";

function mistakes(questions: Question[]) {
  return questions.flatMap((x) => (x.kind === "mistake" ? [[x.tokens[x.wrongIndex], x.correction]] : []));
}

function choiceAnswer(questions: Question[], stemPart: string, optionPart?: string) {
  const q = questions.find(
    (x) => x.kind === "choice" && x.stem.includes(stemPart) && (optionPart === undefined || x.options.some((o) => o.includes(optionPart))),
  );
  if (q?.kind !== "choice") throw new Error(`choice containing "${stemPart}" missing`);
  return q.options[q.answer];
}

function distractors(t: { quiz: Question[] }) {
  return t.quiz.flatMap((x) => (x.kind === "choice" ? x.options.filter((_, i) => i !== x.answer) : []));
}

const ids = (level: Level, category: CategorySlug, slug: string) => {
  const found = findTopic(level, category, slug);
  if (!found) throw new Error(`${level}/${slug} missing`);
  return siblingsAcrossLevels(found).map((t) => `${t.level}/${t.slug}`);
};

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
