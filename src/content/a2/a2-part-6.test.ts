import { adjacentTopics, findTopic, topicsByLevel } from "@/content/registry";
import { parseTopic, type Topic } from "@/content/schema";
import { a2Topics } from ".";
import { subjectQuestions } from "./grammar/subject-questions";
import { choiceAnswer, distractors, expectGap, gap, ids, mistakes, plain, quizLengths, wordbankAnswers } from "@/content/test-helpers";

const byOrder = (order: number): Topic => {
  const found = topicsByLevel("a2").find((t) => t.order === order);
  if (!found) throw new Error(`A2 order ${order} missing`);
  return found;
};

describe("A2 grammar, part 6: subject questions (order 22)", () => {
  it("registers subject-questions at order 22, a grammar rule topic passing the schema", () => {
    const found = findTopic("a2", "grammar", "subject-questions");
    expect(found?.order).toBe(22);
    expect(found?.shape).toBe("rule");
    expect(found?.level).toBe("a2");
    expect(() => parseTopic(found)).not.toThrow();
    expect(a2Topics.slice(21, 22).map((t) => t.slug)).toEqual(["subject-questions"]);
    expect(subjectQuestions.summary.length).toBeLessThanOrEqual(155);
    expect(subjectQuestions.examples.length).toBeGreaterThanOrEqual(3);
  });

  it("pins the quiz length", () => {
    expect(quizLengths([subjectQuestions])).toEqual({ "subject-questions": 7 });
  });

  it("keeps A2 orders continuous, 1-28", () => {
    expect(topicsByLevel("a2").map((t) => t.order)).toEqual(Array.from({ length: 28 }, (_, i) => i + 1));
  });

  it("sits between the last A2 grammar topic and the first vocabulary topic", () => {
    expect(adjacentTopics(byOrder(21)).next?.slug).toBe("subject-questions");
    expect(adjacentTopics(byOrder(23)).prev?.slug).toBe("subject-questions");
    expect(adjacentTopics(byOrder(22)).prev?.slug).toBe("verb-plus-gerund-or-infinitive");
    expect(adjacentTopics(byOrder(22)).next?.slug).toBe("holidays-and-outdoor-activities");
  });

  it("joins the question-forms family between A1 question words and B1 question tags, before B2 declarative and rhetorical questions", () => {
    expect(subjectQuestions.family).toBe("question-forms");
    expect(ids("a1", "grammar", "question-words")).toContain("a2/subject-questions");
    expect(ids("a1", "grammar", "question-words")).toEqual(["a2/subject-questions", "b1/question-tags", "b2/declarative-and-rhetorical-questions"]);
    expect(ids("a2", "grammar", "subject-questions")).toEqual(["a1/question-words", "b1/question-tags", "b2/declarative-and-rhetorical-questions"]);
  });

  it("agrees with A1 question words: Who lives here? has no do, and A1 still promises a later level", () => {
    const a1 = findTopic("a1", "grammar", "question-words");
    expect(a1?.explanation).toContain("Who lives here? This question has no do. You will learn more about questions like this at a later level.");
    const text = plain(subjectQuestions.explanation);
    expect(text).toContain("who lives here?");
    expect(subjectQuestions.explanation).toContain("Remember: the subject is the person or thing that the sentence is about.");
    expect(subjectQuestions.explanation).toContain("Remember: the object is the person or thing that the action goes to.");
  });

  it("hedges the no-do rule and the singular verb with usually", () => {
    const text = plain(subjectQuestions.explanation);
    expect(text).toContain("we don't usually use do, does or did");
    expect(text).toContain("we usually use the -s form even when the answer is more than one person");
  });

  it("uses Who did call you? as a distractor, never as a right answer", () => {
    expect(distractors(subjectQuestions)).toContain("Who did call you?");
    expect(choiceAnswer(subjectQuestions.quiz, "Someone called me")).toBe("Who called you?");
    expect(choiceAnswer(subjectQuestions.quiz, "Ana called Tom")).toBe("Who did Ana call?");
  });

  it("pins every gap, accepting only the defensible forms", () => {
    const wants = gap(subjectQuestions.quiz, "more cake");
    expect(wants).toEqual(["wants"]);
    expectGap(wants, ["wants", "Wants"], ["want", "does want", "do want", "wanted"]);
    const did = gap(subjectQuestions.quiz, "you see at the party");
    expect(did).toEqual(["did"]);
    expectGap(did, ["did", "Did"], ["do", "does", "saw", "didn't"]);
  });

  it("pins the wordbank: a subject question whose chips have no did", () => {
    expect(wordbankAnswers(subjectQuestions.quiz)).toEqual(["Who told you about the party?"]);
    for (const q of subjectQuestions.quiz) {
      if (q.kind !== "wordbank") continue;
      expect(q.words.join(" ")).not.toBe(q.answer);
      expect(q.words.map((w) => w.toLowerCase())).not.toContain("did");
      expect([...q.words].sort()).toEqual(q.answer.split(" ").sort());
    }
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(mistakes(subjectQuestions.quiz)).toEqual([
      ["live", "lives"],
      ["saw", "see"],
    ]);
  });
});
