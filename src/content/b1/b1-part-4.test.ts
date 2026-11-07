import { findTopic } from "@/content/registry";
import { parseTopic } from "@/content/schema";
import { b1Topics } from ".";
import { adjectiveOrder } from "./grammar/adjective-order";
import { definingRelativeClauses } from "./grammar/defining-relative-clauses";
import { determiners } from "./grammar/determiners";
import { questionTags } from "./grammar/question-tags";
import { reportedSpeech } from "./grammar/reported-speech";
import { sayAndTell } from "./grammar/say-and-tell";
import { choiceAnswer, expectGap, gap, ids, mistakeSentence, quizLengths, wordbankAnswers, wrongToken } from "@/content/test-helpers";

const orderedSlugs = [
  "reported-speech",
  "say-and-tell",
  "defining-relative-clauses",
  "question-tags",
  "determiners",
  "adjective-order",
];

const topics = [reportedSpeech, sayAndTell, definingRelativeClauses, questionTags, determiners, adjectiveOrder];

describe("B1 grammar, part 4 (reporting, clauses, questions, noun phrases)", () => {
  it("registers orders 16-21 in sequence, each a grammar rule topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("b1", "grammar", slug);
      expect(found?.order, slug).toBe(i + 16);
      expect(found?.shape).toBe("rule");
      expect(found?.level).toBe("b1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b1Topics.slice(15, 21).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "reported-speech": 6,
      "say-and-tell": 6,
      "defining-relative-clauses": 8,
      "question-tags": 7,
      "determiners": 7,
      "adjective-order": 5,
    });
  });

  it("pins the families, set explicitly even where the slug equals the key, and none for say-and-tell", () => {
    expect(reportedSpeech.family).toBe("reported-speech");
    expect(sayAndTell.family).toBeUndefined();
    expect(definingRelativeClauses.family).toBe("relative-clauses");
    expect(questionTags.family).toBe("question-forms");
    expect(determiners.family).toBe("determiners");
    expect(adjectiveOrder.family).toBe("adjective-order");
  });

  it("links the determiners, question-forms and adjective-order chains A1 <-> B1 both ways, and gives the rest no siblings", () => {
    expect(ids("a1", "grammar", "this-that-these-those")).toEqual(["b1/determiners"]);
    expect(ids("b1", "grammar", "determiners")).toEqual(["a1/this-that-these-those"]);
    expect(ids("a1", "grammar", "question-words")).toEqual(["b1/question-tags"]);
    expect(ids("b1", "grammar", "question-tags")).toEqual(["a1/question-words"]);
    expect(ids("a1", "grammar", "adjectives-before-the-noun")).toEqual(["b1/adjective-order"]);
    expect(ids("b1", "grammar", "adjective-order")).toEqual(["a1/adjectives-before-the-noun"]);
    expect(ids("b1", "grammar", "reported-speech")).toEqual([]);
    expect(ids("b1", "grammar", "say-and-tell")).toEqual([]);
    expect(ids("b1", "grammar", "defining-relative-clauses")).toEqual([]);
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

  it("pins the reported speech choice and gaps: if + statement order, would, had, the next day", () => {
    expect(choiceAnswer(reportedSpeech.quiz, "hungry")).toBe("He asked me if I was hungry.");
    const would = gap(reportedSpeech.quiz, "finish the report");
    expect(would).toEqual(["would", "'d"]);
    expectGap(would, ["would", "’d", "Would."], ["will", "'ll", "was", "would finish", "will be"]);
    const had = gap(reportedSpeech.quiz, "back from Spain");
    expect(had).toEqual(["had", "'d"]);
    expectGap(had, ["had", "’d"], ["has", "have", "'s", "was", "had just"]);
    const nextDay = gap(reportedSpeech.quiz, "see you tomorrow");
    expect(nextDay).toEqual(["the next day", "the following day", "the day after"]);
    expectGap(nextDay, ["the next day", "The following day.", "the day after"], ["tomorrow", "next day", "the day before", "the next", "the previous day"]);
  });

  it("pins the say and tell choices and gaps, with tell the truth and say sorry", () => {
    expect(choiceAnswer(sayAndTell.quiz, "goodbye")).toBe("said");
    expect(choiceAnswer(sayAndTell.quiz, "Which sentence is correct?")).toBe("She told me a funny story.");
    const said = gap(sayAndTell.quiz, "Mark");
    expect(said).toEqual(["said"]);
    expectGap(said, ["said", "Said"], ["told", "say", "says", "tell", "tells"]);
    const tell = gap(sayAndTell.quiz, "the truth");
    expect(tell).toEqual(["tell"]);
    expectGap(tell, ["tell", "Tell."], ["say", "speak", "told", "talk"]);
    const say = gap(sayAndTell.quiz, "sorry to her");
    expect(say).toEqual(["say"]);
    expectGap(say, ["say", "Say"], ["tell", "said", "talk", "speak"]);
  });

  it("pins the relative clause choices and gaps: that accepted for who and which, no omissible pronoun gapped", () => {
    expect(choiceAnswer(definingRelativeClauses.quiz, "Which sentence is correct?")).toBe("The film we saw last night was great.");
    expect(choiceAnswer(definingRelativeClauses.quiz, "leave out")).toBe("The bag that I bought was cheap.");
    const who = gap(definingRelativeClauses.quiz, "five languages");
    expect(who).toEqual(["who", "that"]);
    expectGap(who, ["who", "that", "Who"], ["which", "whose", "he", "what", "whom"]);
    const which = gap(definingRelativeClauses.quiz, "airport");
    expect(which).toEqual(["which", "that"]);
    expectGap(which, ["which", "that"], ["who", "where", "it", "what"]);
    const where = gap(definingRelativeClauses.quiz, "first met");
    expect(where).toEqual(["where"]);
    expectGap(where, ["where", "Where"], ["that", "which", "when", "who"]);
    const whose = gap(definingRelativeClauses.quiz, "dog bit me");
    expect(whose).toEqual(["whose"]);
    expectGap(whose, ["whose", "Whose"], ["who's", "who", "which", "her"]);
  });

  it("pins the question tag choices and gaps: opposite polarity, do/does/did, aren't I, shall we", () => {
    expect(choiceAnswer(questionTags.quiz, "from Brazil")).toBe("aren't you");
    expect(choiceAnswer(questionTags.quiz, "last year")).toBe("didn't they");
    const doesShe = gap(questionTags.quiz, "eat meat");
    expect(doesShe).toEqual(["does she"]);
    expectGap(doesShe, ["does she", "Does she?"], ["doesn't she", "is she", "does he", "do she"]);
    const arentI = gap(questionTags.quiz, "queue");
    expect(arentI).toEqual(["aren't I"]);
    expectGap(arentI, ["aren't I", "aren’t I?"], ["am I", "amn't I", "isn't I", "aren't", "are I"]);
    const shallWe = gap(questionTags.quiz, "taxi");
    expect(shallWe).toEqual(["shall we"]);
    expectGap(shallWe, ["shall we", "Shall we?"], ["will we", "should we", "don't we", "let's we", "shan't we"]);
    const isThere = gap(questionTags.quiz, "milk left");
    expect(isThere).toEqual(["is there"]);
    expectGap(isThere, ["is there", "Is there?"], ["isn't there", "is it", "are there"]);
  });

  it("pins the determiner choices and gaps: either, both, neither, a little, few, none", () => {
    expect(choiceAnswer(determiners.quiz, "end of the table")).toBe("either");
    expect(choiceAnswer(determiners.quiz, "before the train")).toBe("a little");
    const both = gap(determiners.quiz, "from Italy");
    expect(both).toEqual(["Both", "Both of"]);
    expectGap(both, ["Both", "both", "both of"], ["All", "Either", "Neither", "Each", "Every"]);
    const neither = gap(determiners.quiz, "two lifts");
    expect(neither).toEqual(["Neither"]);
    expectGap(neither, ["Neither", "neither"], ["None", "Both", "Either", "No", "Each"]);
    const few = gap(determiners.quiz, "terrible");
    expect(few).toEqual(["few"]);
    expectGap(few, ["few", "Few"], ["a few", "little", "many", "much"]);
    const none = gap(determiners.quiz, "eggs");
    expect(none).toEqual(["None"]);
    expectGap(none, ["None", "none."], ["No", "Nothing", "Any", "Zero"]);
  });

  it("pins the adjective order choices: size before material, age-origin-material, purpose last", () => {
    expect(choiceAnswer(adjectiveOrder.quiz, "box")).toBe("small wooden");
    expect(choiceAnswer(adjectiveOrder.quiz, "shoes")).toBe("new Italian leather");
    expect(choiceAnswer(adjectiveOrder.quiz, "camping")).toBe("green sleeping");
  });

  it("pins every wordbank answer", () => {
    expect(wordbankAnswers(reportedSpeech.quiz)).toEqual(["She asked me where I lived."]);
    expect(wordbankAnswers(sayAndTell.quiz)).toEqual([]);
    expect(wordbankAnswers(definingRelativeClauses.quiz)).toEqual(["The cake you made was delicious."]);
    expect(wordbankAnswers(questionTags.quiz)).toEqual([]);
    expect(wordbankAnswers(determiners.quiz)).toEqual([]);
    expect(wordbankAnswers(adjectiveOrder.quiz)).toEqual(["a beautiful old house.", "He's got a big black dog."]);
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(wrongToken(reportedSpeech.quiz)).toEqual(["am", "was"]);
    expect(wrongToken(sayAndTell.quiz)).toEqual(["say", "tell"]);
    expect(wrongToken(definingRelativeClauses.quiz)).toEqual(["what", "that"]);
    expect(mistakeSentence(definingRelativeClauses.quiz)).toBe("This is the song what I love.");
    expect(wrongToken(questionTags.quiz)).toEqual(["doesn't", "won't"]);
    expect(wrongToken(determiners.quiz)).toEqual(["students", "student"]);
    expect(wrongToken(adjectiveOrder.quiz)).toBeUndefined();
  });

  it("hedges where Swan allows choices", () => {
    expect(reportedSpeech.explanation).toContain("still true");
    expect(reportedSpeech.explanation).toContain("Both are correct");
    expect(definingRelativeClauses.explanation).toContain("leave it out");
    expect(definingRelativeClauses.explanation).toContain("A <b>relative pronoun</b> is");
    expect(questionTags.explanation).toContain("An <b>auxiliary</b> is");
    expect(questionTags.explanation).not.toMatch(/intonation|rising|falling/i);
    expect(adjectiveOrder.explanation).toContain("more than three");
    expect(adjectiveOrder.explanation).toContain("usually");
    expect(determiners.explanation).toContain("not many");
  });
});
