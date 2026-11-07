import type { Question, Topic } from "@/content/schema";
import { answerSentences, distractors, gap, mistakes, quizLengths, wrongToken } from "@/content/test-helpers";

const quiz = [
  { kind: "gap", stem: "She ___ home. (go)", answers: ["went", "has gone"] },
  { kind: "choice", stem: "Pick one", options: ["a", "b", "c"], answer: 1 },
  { kind: "wordbank", answer: "I like tea", words: ["tea", "I", "like"] },
  { kind: "mistake", tokens: ["He", "go", "home"], wrongIndex: 1, correction: "goes" },
] as unknown as Question[];

const t = { slug: "demo", quiz } as unknown as Topic;

describe("test helpers", () => {
  it("gap throws when the stem is absent", () => {
    expect(gap(quiz, "She")).toEqual(["went", "has gone"]);
    expect(() => gap(quiz, "zzz")).toThrow('gap containing "zzz" missing');
  });

  it("wrongToken and mistakes return the same first pair", () => {
    expect(wrongToken(quiz)).toEqual(["go", "goes"]);
    expect(mistakes(quiz)).toEqual([["go", "goes"]]);
  });

  it("distractors excludes the answer", () => {
    expect(distractors(t)).toEqual(["a", "c"]);
  });

  it("answerSentences fills the gap with the first answer, strips the hint, and corrects mistakes", () => {
    expect(answerSentences(t)).toEqual(["She went home.", "I like tea", "He goes home"]);
  });

  it("quizLengths maps slug to quiz length", () => {
    expect(quizLengths([t])).toEqual({ [t.slug]: t.quiz.length });
  });
});
