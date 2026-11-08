import { a1Topics } from "@/content/a1";
import { findTopic } from "@/content/registry";
import { parseTopic, type Question } from "@/content/schema";
import { matchesGap } from "@/lib/gap-match";
import { gap } from "@/content/test-helpers";
import { objectAndPossessivePronouns } from "./object-and-possessive-pronouns";
import { questionWords } from "./question-words";
import { wasWere } from "./was-were";
import { yesNoQuestionsAndShortAnswers } from "./yes-no-questions-and-short-answers";

const orderedSlugs = [
  "question-words",
  "yes-no-questions-and-short-answers",
  "was-were",
  "object-and-possessive-pronouns",
];

function wordbankAnswer(questions: Question[]) {
  const q = questions.find((x) => x.kind === "wordbank");
  return q?.kind === "wordbank" ? q.answer : undefined;
}

describe("A1 grammar, part 3", () => {
  it("registers orders 16-19 in sequence, each passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("a1", "grammar", slug);
      expect(found?.order).toBe(i + 16);
      expect(() => parseTopic(found)).not.toThrow();
    });
  });

  it("completes A1 grammar at 19 topics, numbered 1-19", () => {
    const grammar = a1Topics.filter((t) => t.category === "grammar");
    expect(grammar.map((t) => t.order)).toEqual(Array.from({ length: 19 }, (_, i) => i + 1));
  });

  it("has a question-formation wordbank for question words and for yes/no questions", () => {
    expect(wordbankAnswer(questionWords.quiz)).toBe("Where does your sister live?");
    expect(wordbankAnswer(yesNoQuestionsAndShortAnswers.quiz)).toBe("Can your mother drive?");
    expect(wordbankAnswer(wasWere.quiz)).toBe("Where were you born?");
  });

  it("states the short-answer rule word for word as the earlier topics do", () => {
    const rule = "In yes answers, do not use a short form at the end: Yes, I am, not Yes, I'm.";
    expect(yesNoQuestionsAndShortAnswers.explanation).toContain(rule);
    const continuous = findTopic("a1", "grammar", "present-continuous");
    expect(continuous?.explanation).toContain(rule);
  });

  it("accepts only the one question word each gap allows", () => {
    expect(gap(questionWords.quiz, "old is your daughter")).toEqual(["How"]);
    expect(gap(questionWords.quiz, "that girl")).toEqual(["Who"]);
    const many = gap(questionWords.quiz, "brothers and sisters");
    for (const typed of ["How many", "how  many", "HOW MANY"]) expect(matchesGap(typed, many)).toBe(true);
    for (const typed of ["How", "How much", "What"]) expect(matchesGap(typed, many)).toBe(false);
  });

  it("accepts do for the parents and both forms of hasn't, but not does or got", () => {
    const start = gap(yesNoQuestionsAndShortAnswers.quiz, "your parents speak");
    expect(matchesGap("do", start)).toBe(true);
    for (const typed of ["Does", "Can", "Are"]) expect(matchesGap(typed, start)).toBe(false);
    const neg = gap(yesNoQuestionsAndShortAnswers.quiz, "No, he ___");
    for (const typed of ["hasn't", "has not", "hasn’t"]) expect(matchesGap(typed, neg)).toBe(true);
    for (const typed of ["hasn't got", "doesn't", "haven't"]) expect(matchesGap(typed, neg)).toBe(false);
  });

  it("accepts were for you and for plurals, and both forms of wasn't for I", () => {
    expect(gap(wasWere.quiz, "My keys")).toEqual(["were"]);
    const you = gap(wasWere.quiz, "Tom, you");
    expect(matchesGap("were", you)).toBe(true);
    expect(matchesGap("was", you)).toBe(false);
    const neg = gap(wasWere.quiz, "No, I ___");
    for (const typed of ["wasn't", "was not", "wasn’t"]) expect(matchesGap(typed, neg)).toBe(true);
    expect(matchesGap("weren't", neg)).toBe(false);
  });

  it("accepts only them for Ben and Lisa, and only hers for Maria", () => {
    const them = gap(objectAndPossessivePronouns.quiz, "Ben and Lisa");
    expect(them).toEqual(["them"]);
    expect(matchesGap("they", them)).toBe(false);
    const hers = gap(objectAndPossessivePronouns.quiz, "Maria's coat");
    expect(hers).toEqual(["hers"]);
    for (const typed of ["her", "her's", "mine"]) expect(matchesGap(typed, hers)).toBe(false);
  });
});
