import { parseTopic } from "./schema";

const choice = (o: Record<string, unknown> = {}) => ({
  kind: "choice",
  stem: "She ___ a teacher.",
  options: ["is", "are"],
  answer: 0,
  feedback: "Use is with she.",
  ...o,
});
const gap = (o: Record<string, unknown> = {}) => ({
  kind: "gap",
  stem: "She ___ happy.",
  answers: ["is"],
  feedback: "Use is.",
  ...o,
});
const wordbank = (o: Record<string, unknown> = {}) => ({
  kind: "wordbank",
  prompt: "Build the phrase.",
  words: ["box", "a", "small"],
  answer: "a small box",
  feedback: "Opinion then noun.",
  ...o,
});
const mistake = (o: Record<string, unknown> = {}) => ({
  kind: "mistake",
  tokens: ["She", "have", "a", "cat"],
  wrongIndex: 1,
  correction: "has",
  feedback: "Third person.",
  ...o,
});
const example = (o: Record<string, unknown> = {}) => ({
  sentence: "She <b>is</b> a nurse.",
  why: "Third person singular.",
  ...o,
});
const entry = () => ({
  headword: "knowledge",
  ipa: "/ˈnɒlɪdʒ/",
  gloss: "what you know",
  inUse: "Share your knowledge.",
});
const situation = () => ({
  situation: "Interrupting",
  phrases: ["Sorry to interrupt."],
  register: "neutral",
});

const base = (o: Record<string, unknown>) => ({
  slug: "verb-to-be",
  title: "Verb to be",
  level: "a1",
  order: 1,
  explanation: "Explains it.",
  quiz: [choice(), choice(), choice(), choice()],
  levelRationale: "Taught first in A1.",
  ...o,
});
const validRuleTopic = (o: Record<string, unknown> = {}) =>
  base({ shape: "rule", category: "grammar", examples: [example(), example(), example()], ...o });
const validSetTopic = (o: Record<string, unknown> = {}) =>
  base({ shape: "set", category: "vocabulary", entries: Array.from({ length: 6 }, entry), ...o });
const validPhraseTopic = (o: Record<string, unknown> = {}) =>
  base({ shape: "phrases", category: "speaking", situations: [situation(), situation(), situation()], ...o });
const sixEntries = (o: Record<string, unknown>) => Array.from({ length: 6 }, () => ({ ...entry(), ...o }));

// Pad with three valid questions so the quiz min(4) floor is met and only the
// question under test can cause a rejection; each test names the failing path.
const quizWith = (q: unknown) => [q, choice(), choice(), choice()];
const rejects = (q: unknown, path: RegExp) =>
  expect(() => parseTopic(validRuleTopic({ quiz: quizWith(q) }))).toThrow(path);

describe("question validation", () => {
  it("rejects a choice whose answer index is out of range", () => {
    rejects(choice({ options: ["a", "b"], answer: 2 }), /quiz\.0\.answer/);
  });
  it("rejects a choice with a negative answer index", () => {
    rejects(choice({ options: ["a", "b"], answer: -1 }), /quiz\.0\.answer/);
  });
  it("rejects a non-integer choice answer", () => {
    rejects(choice({ answer: 0.5 }), /quiz\.0\.answer/);
  });
  it("rejects a choice with fewer than two options", () => {
    rejects(choice({ options: ["a"], answer: 0 }), /quiz\.0\.options/);
  });
  it("rejects a choice with a blank option", () => {
    rejects(choice({ options: ["a", " "] }), /quiz\.0\.options\.1/);
  });
  it("rejects a gap with an empty answers array", () => {
    rejects(gap({ answers: [] }), /quiz\.0\.answers/);
  });
  it("rejects a gap whose answer is blank", () => {
    rejects(gap({ answers: ["  "] }), /quiz\.0\.answers\.0/);
  });
  it("rejects a wordbank whose words cannot form the answer", () => {
    rejects(wordbank({ words: ["a", "small"], answer: "a small box" }), /quiz\.0\.answer/);
  });
  it("accepts a wordbank whose words do form the answer", () => {
    expect(() =>
      parseTopic(validRuleTopic({ quiz: quizWith(wordbank({ words: ["box", "a", "small"], answer: "a small box" })) })),
    ).not.toThrow();
  });
  it("rejects a wordbank with fewer than two words", () => {
    rejects(wordbank({ words: ["hi"], answer: "hi" }), /quiz\.0\.words/);
  });
  it("rejects a mistake whose wrongIndex is out of range", () => {
    rejects(mistake({ tokens: ["She", "have"], wrongIndex: 5 }), /quiz\.0\.wrongIndex/);
  });
  it("rejects a mistake with a negative or fractional wrongIndex", () => {
    rejects(mistake({ wrongIndex: -1 }), /quiz\.0\.wrongIndex/);
    rejects(mistake({ wrongIndex: 1.5 }), /quiz\.0\.wrongIndex/);
  });
  it("rejects a mistake with a blank correction or token", () => {
    rejects(mistake({ correction: " " }), /quiz\.0\.correction/);
    rejects(mistake({ tokens: ["She", ""] }), /quiz\.0\.tokens\.1/);
  });
  it("rejects a question with empty or blank feedback", () => {
    rejects(choice({ feedback: "" }), /quiz\.0\.feedback/);
    rejects(choice({ feedback: "   " }), /quiz\.0\.feedback/);
  });
  it("rejects unknown keys on a question", () => {
    rejects(choice({ extra: 1 }), /quiz\.0: .*extra/);
  });
});

describe("topic-level floors", () => {
  it("rejects fewer than 4 questions", () => {
    expect(() => parseTopic(validRuleTopic({ quiz: [choice(), choice(), choice()] }))).toThrow();
  });
  it("accepts exactly 4 questions", () => {
    expect(() => parseTopic(validRuleTopic({ quiz: [choice(), choice(), choice(), choice()] }))).not.toThrow();
  });
  it("rejects a rule topic with fewer than 3 examples", () => {
    expect(() => parseTopic(validRuleTopic({ examples: [example(), example()] }))).toThrow();
  });
  it("rejects a set topic with fewer than 6 entries", () => {
    expect(() => parseTopic(validSetTopic({ entries: Array.from({ length: 5 }, entry) }))).toThrow();
  });
  it("rejects a phrase topic with fewer than 3 situations", () => {
    expect(() => parseTopic(validPhraseTopic({ situations: [situation(), situation()] }))).toThrow();
  });
  it("rejects a situation with no phrases or a bad register", () => {
    const bad = (o: Record<string, unknown>) =>
      validPhraseTopic({ situations: [{ ...situation(), ...o }, situation(), situation()] });
    expect(() => parseTopic(bad({ phrases: [] }))).toThrow();
    expect(() => parseTopic(bad({ register: "rude" }))).toThrow();
  });
  it("rejects a topic with no levelRationale", () => {
    expect(() => parseTopic(validRuleTopic({ levelRationale: "" }))).toThrow();
  });
  it("rejects blank required text", () => {
    expect(() => parseTopic(validRuleTopic({ title: "  " }))).toThrow();
    expect(() => parseTopic(validRuleTopic({ explanation: " " }))).toThrow();
    expect(() =>
      parseTopic(validRuleTopic({ examples: [{ ...example(), why: " " }, example(), example()] })),
    ).toThrow();
    expect(() => parseTopic(validSetTopic({ entries: sixEntries({ gloss: " " }) }))).toThrow();
  });
  it("rejects blank optional text when present", () => {
    expect(() => parseTopic(validRuleTopic({ form: " " }))).toThrow();
    expect(() => parseTopic(validRuleTopic({ sourceNotes: "" }))).toThrow();
    expect(() => parseTopic(validSetTopic({ entries: sixEntries({ ipa: "" }) }))).toThrow();
    expect(() => parseTopic(validRuleTopic({ pitfall: { wrong: "a", right: "b", why: " " } }))).toThrow();
  });
  it("accepts a rule topic with optional fields", () => {
    expect(() =>
      parseTopic(
        validRuleTopic({
          form: "S + is",
          sourceNotes: "ch1",
          pitfall: { wrong: "She are", right: "She is", why: "Agreement." },
        }),
      ),
    ).not.toThrow();
  });
  it("rejects an unknown level", () => {
    expect(() => parseTopic(validRuleTopic({ level: "c2" }))).toThrow();
  });
  it("rejects a slug that is not URL-safe", () => {
    expect(() => parseTopic(validRuleTopic({ slug: "Verb To Be" }))).toThrow();
    expect(() => parseTopic(validRuleTopic({ slug: "a--b" }))).toThrow();
  });
  it("rejects a non-integer or non-positive order", () => {
    expect(() => parseTopic(validRuleTopic({ order: 1.5 }))).toThrow();
    expect(() => parseTopic(validRuleTopic({ order: 0 }))).toThrow();
  });
  it("rejects an unknown shape", () => {
    expect(() => parseTopic({ ...validRuleTopic(), shape: "mystery" })).toThrow();
  });
});

describe("shape is bound to category", () => {
  it("rule topics reject vocabulary but accept mechanics", () => {
    expect(() => parseTopic(validRuleTopic({ category: "vocabulary" }))).toThrow();
    expect(() => parseTopic(validRuleTopic({ category: "mechanics" }))).not.toThrow();
  });
  it("set topics reject grammar but accept phrases", () => {
    expect(() => parseTopic(validSetTopic({ category: "grammar" }))).toThrow();
    expect(() => parseTopic(validSetTopic({ category: "phrases" }))).not.toThrow();
  });
  it("phrase topics reject grammar but accept writing", () => {
    expect(() => parseTopic(validPhraseTopic({ category: "grammar" }))).toThrow();
    expect(() => parseTopic(validPhraseTopic({ category: "writing" }))).not.toThrow();
  });
});

describe("strict objects", () => {
  it("rejects a typoed top-level key", () => {
    expect(() => parseTopic(validRuleTopic({ levelRational: "typo" }))).toThrow();
  });
  it("rejects unknown keys in nested objects", () => {
    expect(() =>
      parseTopic(validRuleTopic({ examples: [{ ...example(), x: 1 }, example(), example()] })),
    ).toThrow();
    expect(() => parseTopic(validSetTopic({ entries: sixEntries({ x: 1 }) }))).toThrow();
    expect(() =>
      parseTopic(validPhraseTopic({ situations: [{ ...situation(), x: 1 }, situation(), situation()] })),
    ).toThrow();
  });
});

describe("valid topics", () => {
  it("accepts each of the three shapes", () => {
    expect(() => parseTopic(validRuleTopic())).not.toThrow();
    expect(() => parseTopic(validSetTopic())).not.toThrow();
    expect(() => parseTopic(validPhraseTopic())).not.toThrow();
  });
  it("accepts every question kind", () => {
    expect(() => parseTopic(validRuleTopic({ quiz: [choice(), gap(), wordbank(), mistake()] }))).not.toThrow();
  });
});

describe("error messages", () => {
  it("identifies the slug and the failing path", () => {
    expect.assertions(2);
    try {
      parseTopic(validRuleTopic({ slug: "my-topic", quiz: [choice({ answer: 9 })] }));
    } catch (e) {
      const msg = (e as Error).message;
      expect(msg).toContain("my-topic");
      expect(msg).toContain("quiz.0.answer");
    }
  });
});

describe("family", () => {
  it("accepts a valid family key and its absence", () => {
    expect(() => parseTopic(validRuleTopic({ family: "articles" }))).not.toThrow();
    expect(() => parseTopic(validSetTopic({ family: "house-and-home" }))).not.toThrow();
    expect(() => parseTopic(validPhraseTopic({ family: "polite-requests" }))).not.toThrow();
  });
  it("rejects a non-slug or blank family", () => {
    expect(() => parseTopic(validRuleTopic({ family: "Articles!" }))).toThrow(/family/);
    expect(() => parseTopic(validRuleTopic({ family: "  " }))).toThrow(/family/);
    expect(() => parseTopic(validRuleTopic({ family: "" }))).toThrow(/family/);
  });
});

describe("rich-text markup validation", () => {
  it("rejects malformed markup in an example sentence", () => {
    expect(() =>
      parseTopic(validRuleTopic({ examples: [example({ sentence: "I <b>am here." }), example(), example()] })),
    ).toThrow(/examples\.0\.sentence/);
  });
  it("rejects malformed markup in a question stem", () => {
    expect(() => parseTopic(validRuleTopic({ quiz: quizWith(choice({ stem: "Pick <i>one</i>" })) }))).toThrow(
      /quiz\.0\.stem/,
    );
  });
  it("rejects malformed markup in the explanation", () => {
    expect(() => parseTopic(validRuleTopic({ explanation: "Use <b>am</B>." }))).toThrow(/explanation/);
  });
});
