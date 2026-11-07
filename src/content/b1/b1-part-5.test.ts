import { findTopic } from "@/content/registry";
import { parseTopic } from "@/content/schema";
import { b1Topics } from ".";
import { gradableAndNonGradableAdjectives } from "./grammar/gradable-and-non-gradable-adjectives";
import { intensifiers } from "./grammar/intensifiers";
import { linkingWords } from "./grammar/linking-words";
import { soAndSuch } from "./grammar/so-and-such";
import { wordBuildingSuffixes } from "./grammar/word-building-suffixes";
import { choiceAnswer, distractors, expectGap, gap, ids, quizLengths, wordbankAnswers, wrongToken } from "@/content/test-helpers";

const orderedSlugs = [
  "gradable-and-non-gradable-adjectives",
  "intensifiers",
  "so-and-such",
  "linking-words",
  "word-building-suffixes",
];

const topics = [gradableAndNonGradableAdjectives, intensifiers, soAndSuch, linkingWords, wordBuildingSuffixes];

describe("B1 grammar, part 5 (adjectives, emphasis, linking, word building)", () => {
  it("registers orders 22-26 in sequence, each a grammar rule topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("b1", "grammar", slug);
      expect(found?.order, slug).toBe(i + 22);
      expect(found?.shape).toBe("rule");
      expect(found?.level).toBe("b1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b1Topics.slice(21, 26).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "gradable-and-non-gradable-adjectives": 5,
      "intensifiers": 6,
      "so-and-such": 6,
      "linking-words": 7,
      "word-building-suffixes": 7,
    });
  });

  it("pins the families: linking-words set explicitly, none for the other four", () => {
    expect(gradableAndNonGradableAdjectives.family).toBeUndefined();
    expect(intensifiers.family).toBeUndefined();
    expect(soAndSuch.family).toBeUndefined();
    expect(linkingWords.family).toBe("linking-words");
    expect(wordBuildingSuffixes.family).toBeUndefined();
  });

  it("links the linking-words chain A2 <-> B1 both ways, and gives the rest no siblings", () => {
    expect(ids("a2", "grammar", "and-but-so-because")).toEqual(["b1/linking-words"]);
    expect(ids("b1", "grammar", "linking-words")).toEqual(["a2/and-but-so-because"]);
    for (const slug of orderedSlugs.filter((s) => s !== "linking-words")) expect(ids("b1", "grammar", slug), slug).toEqual([]);
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

  it("never makes really a wrong option, and keeps quite out of every quiz", () => {
    for (const t of topics) {
      for (const option of distractors(t)) expect(option, t.slug).not.toMatch(/\breally\b/i);
      expect(JSON.stringify(t.quiz), t.slug).not.toMatch(/\bquite\b/i);
    }
  });

  it("pins the gradable and non-gradable choices and gaps: absolutely with extreme, very with gradable", () => {
    expect(choiceAnswer(gradableAndNonGradableAdjectives.quiz, "ten hours")).toBe("exhausted");
    expect(choiceAnswer(gradableAndNonGradableAdjectives.quiz, "eight bedrooms")).toBe("absolutely");
    expect(choiceAnswer(gradableAndNonGradableAdjectives.quiz, "Which sentence")).toBe("The weather was absolutely wonderful.");
    const boiling = gap(gradableAndNonGradableAdjectives.quiz, "soup");
    expect(boiling).toEqual(["boiling", "boiling hot"]);
    expectGap(boiling, ["boiling", "Boiling.", "boiling-hot"], ["hot", "very hot", "boil", "freezing"]);
    const very = gap(gradableAndNonGradableAdjectives.quiz, "easy");
    expect(very).toEqual(["very"]);
    expectGap(very, ["very", "Very"], ["absolutely", "completely", "totally"]);
  });

  it("pins the intensifier choices and gap: an extremely, really freezing, the scale, extremely well", () => {
    expect(choiceAnswer(intensifiers.quiz, "good idea")).toBe("an extremely");
    expect(choiceAnswer(intensifiers.quiz, "minus fifteen")).toBe("really");
    expect(choiceAnswer(intensifiers.quiz, "strongest")).toBe("extremely cold");
    const extremely = gap(intensifiers.quiz, "piano");
    expect(extremely).toEqual(["extremely"]);
    expectGap(extremely, ["extremely", "Extremely"], ["extreme", "extremly", "very", "extremelly"]);
  });

  it("pins the so and such choices and gaps: such a + singular, so + adverb, such + uncountable, so many", () => {
    expect(choiceAnswer(soAndSuch.quiz, "beautiful day")).toBe("such a");
    expect(choiceAnswer(soAndSuch.quiz, "drives")).toBe("so");
    const such = gap(soAndSuch.quiz, "good weather");
    expect(such).toEqual(["such"]);
    expectGap(such, ["such", "Such"], ["such a", "so", "so much"]);
    const so = gap(soAndSuch.quiz, "many people");
    expect(so).toEqual(["so"]);
    expectGap(so, ["so", "So"], ["such", "such a", "too"]);
  });

  it("pins the linking-word choices and gaps: despite + noun, such as, although (though, even though), however, because of", () => {
    expect(choiceAnswer(linkingWords.quiz, "heavy traffic")).toBe("Despite");
    expect(choiceAnswer(linkingWords.quiz, "Italian dishes")).toBe("such as");
    const although = gap(linkingWords.quiz, "noisy");
    expect(although).toEqual(["although", "though", "even though"]);
    expectGap(although, ["although", "Although", "though", "even though"], ["despite", "however", "but", "because", "in spite of"]);
    const however = gap(linkingWords.quiz, "comfortable");
    expect(however).toEqual(["However"]);
    expectGap(however, ["However", "however"], ["Therefore", "Although", "But", "So"]);
    const becauseOf = gap(linkingWords.quiz, "tennis");
    expect(becauseOf).toEqual(["because of", "due to"]);
    expectGap(becauseOf, ["because of", "Because of", "due to"], ["because", "despite", "although", "because of it"]);
  });

  it("pins the word-building choices and gaps: the stem in brackets and a slot that fixes the kind of word", () => {
    expect(choiceAnswer(wordBuildingSuffixes.quiz, "knife")).toBe("careful");
    expect(choiceAnswer(wordBuildingSuffixes.quiz, "sings")).toBe("beautifully");
    const improvements = gap(wordBuildingSuffixes.quiz, "(improve)");
    expect(improvements).toEqual(["improvements"]);
    expectGap(improvements, ["improvements", "Improvements"], ["improvement", "improving", "improves", "improve"]);
    const possibility = gap(wordBuildingSuffixes.quiz, "(possible)");
    expect(possibility).toEqual(["possibility"]);
    expectGap(possibility, ["possibility"], ["possible", "possibly", "possiblity", "possibilities"]);
    const dangerous = gap(wordBuildingSuffixes.quiz, "(danger)");
    expect(dangerous).toEqual(["dangerous"]);
    expectGap(dangerous, ["dangerous", "Dangerous."], ["danger", "dangerously", "dangerus"]);
    const actor = gap(wordBuildingSuffixes.quiz, "(act)");
    expect(actor).toEqual(["actor", "actress"]);
    expectGap(actor, ["actor", "Actor", "actress"], ["acter", "action", "active", "acting"]);
  });

  it("pins every wordbank answer", () => {
    expect(wordbankAnswers(gradableAndNonGradableAdjectives.quiz)).toEqual([]);
    expect(wordbankAnswers(intensifiers.quiz)).toEqual(["They live in an extremely old house."]);
    expect(wordbankAnswers(soAndSuch.quiz)).toEqual(["It was such an easy test."]);
    expect(wordbankAnswers(linkingWords.quiz)).toEqual(["My brother also plays the guitar."]);
    expect(wordbankAnswers(wordBuildingSuffixes.quiz)).toEqual([]);
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(wrongToken(gradableAndNonGradableAdjectives.quiz)).toBeUndefined();
    expect(wrongToken(intensifiers.quiz)).toEqual(["so", "very"]);
    expect(wrongToken(soAndSuch.quiz)).toEqual(["such", "so"]);
    expect(wrongToken(linkingWords.quiz)).toEqual(["Despite", "Although"]);
    expect(wrongToken(wordBuildingSuffixes.quiz)).toEqual(["happyness", "happiness"]);
  });

  it("hedges where Swan allows choices, defines new terms, and doesn't state the comma rule", () => {
    expect(gradableAndNonGradableAdjectives.explanation).toContain("both kinds");
    expect(gradableAndNonGradableAdjectives.explanation).toContain("don't usually use absolutely");
    expect(intensifiers.explanation).toContain("In British English, quite");
    expect(intensifiers.explanation).toContain("American English");
    expect(soAndSuch.explanation).toContain("leave out that");
    expect(linkingWords.explanation).toContain("Remember: a clause is a group of words with a subject and a verb.");
    expect(linkingWords.explanation).toContain("<b>However,</b>");
    expect(linkingWords.explanation).not.toMatch(/comma/i);
    expect(wordBuildingSuffixes.explanation).toContain("A <b>suffix</b> is");
    expect(wordBuildingSuffixes.explanation).toContain("happy → happiness");
  });
});
