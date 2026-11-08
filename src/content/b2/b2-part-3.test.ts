import { findTopic } from "@/content/registry";
import { parseTopic } from "@/content/schema";
import { b2Topics } from ".";
import { adjectiveAndVerbPhrases } from "./grammar/adjective-and-verb-phrases";
import { nonDefiningRelativeClauses } from "./grammar/non-defining-relative-clauses";
import { participleClauses } from "./grammar/participle-clauses";
import { reducedRelativeClauses } from "./grammar/reduced-relative-clauses";
import { verbObjectInfinitiveAndGerundPatterns } from "./grammar/verb-object-infinitive-and-gerund-patterns";
import { choiceAnswer, expectGap, gap, ids, mistakes, quizLengths, wordbankAnswers } from "@/content/test-helpers";

const orderedSlugs = [
  "non-defining-relative-clauses",
  "reduced-relative-clauses",
  "participle-clauses",
  "verb-object-infinitive-and-gerund-patterns",
  "adjective-and-verb-phrases",
];

const topics = [
  nonDefiningRelativeClauses,
  reducedRelativeClauses,
  participleClauses,
  verbObjectInfinitiveAndGerundPatterns,
  adjectiveAndVerbPhrases,
];

describe("B2 grammar, part 3 (clauses and verb patterns)", () => {
  it("registers orders 11-15 in sequence, each a grammar rule topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("b2", "grammar", slug);
      expect(found?.order, slug).toBe(i + 11);
      expect(found?.shape).toBe("rule");
      expect(found?.level).toBe("b2");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b2Topics.slice(10, 15).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "non-defining-relative-clauses": 7,
      "reduced-relative-clauses": 7,
      "participle-clauses": 7,
      "verb-object-infinitive-and-gerund-patterns": 7,
      "adjective-and-verb-phrases": 7,
    });
  });

  it("pins the families, and leaves reduced relatives, participle clauses and adjective and verb phrases without one", () => {
    expect(nonDefiningRelativeClauses.family).toBe("relative-clauses");
    expect(reducedRelativeClauses.family).toBeUndefined();
    expect(participleClauses.family).toBeUndefined();
    expect(verbObjectInfinitiveAndGerundPatterns.family).toBe("gerunds-and-infinitives");
    expect(adjectiveAndVerbPhrases.family).toBeUndefined();
  });

  it("links each B2 topic to exactly its lower-level siblings in CEFR order, and each of those back", () => {
    expect(ids("b2", "grammar", "non-defining-relative-clauses")).toEqual(["b1/defining-relative-clauses"]);
    expect(ids("b1", "grammar", "defining-relative-clauses")).toEqual(["b2/non-defining-relative-clauses"]);
    expect(ids("b2", "grammar", "verb-object-infinitive-and-gerund-patterns")).toEqual([
      "a2/verb-plus-gerund-or-infinitive",
      "b1/gerunds-vs-infinitives",
    ]);
    expect(ids("a2", "grammar", "verb-plus-gerund-or-infinitive")).toEqual([
      "b1/gerunds-vs-infinitives",
      "b2/verb-object-infinitive-and-gerund-patterns",
    ]);
    expect(ids("b1", "grammar", "gerunds-vs-infinitives")).toEqual([
      "a2/verb-plus-gerund-or-infinitive",
      "b2/verb-object-infinitive-and-gerund-patterns",
    ]);
    expect(ids("b2", "grammar", "reduced-relative-clauses")).toEqual([]);
    expect(ids("b2", "grammar", "participle-clauses")).toEqual([]);
    expect(ids("b2", "grammar", "adjective-and-verb-phrases")).toEqual([]);
  });

  it("gives each topic 5-8 questions with at least 2 mistake items, 3+ examples, a short summary, and scrambled wordbanks", () => {
    for (const t of topics) {
      expect(t.quiz.length, t.slug).toBeGreaterThanOrEqual(5);
      expect(t.quiz.length, t.slug).toBeLessThanOrEqual(8);
      expect(t.quiz.filter((q) => q.kind === "mistake").length, t.slug).toBeGreaterThanOrEqual(2);
      expect(t.examples.length, t.slug).toBeGreaterThanOrEqual(3);
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" ")).not.toBe(q.answer);
      }
    }
  });

  it("never copies a pitfall sentence into the quiz", () => {
    const plainText = (s: string) => s.replace(/<\/?b>/g, "");
    for (const t of topics) {
      const pitfall = [plainText(t.pitfall!.wrong), plainText(t.pitfall!.right)];
      for (const q of t.quiz) {
        const shown = q.kind === "mistake" ? q.tokens.join(" ") : q.kind === "wordbank" ? q.answer : [q.stem, ...(q.kind === "choice" ? q.options : [])].join(" ");
        for (const p of pitfall) expect(shown, t.slug).not.toContain(p);
      }
    }
  });

  it("pins the non-defining relative clauses: commas, whose and where, and the meaning of no commas", () => {
    expect(choiceAnswer(nonDefiningRelativeClauses.quiz, "punctuated correctly")).toBe("My father, who is a pilot, flies to Tokyo every week.");
    expect(choiceAnswer(nonDefiningRelativeClauses.quiz, "There are no commas")).toBe("I have more than one brother.");
    const where = gap(nonDefiningRelativeClauses.quiz, "my sister lives");
    expect(where).toEqual(["where"]);
    expectGap(where, ["where", "Where."], ["which", "that", "in which", "who"]);
    const whose = gap(nonDefiningRelativeClauses.quiz, "house is by the sea");
    expect(whose).toEqual(["whose"]);
    expectGap(whose, ["whose"], ["who's", "who", "which", "that", "her"]);
    // Hedged, as in B1: that is not normally used here, but some speakers do.
    expect(nonDefiningRelativeClauses.explanation).toContain("we <b>don't normally use that</b> in a non-defining clause");
    expect(nonDefiningRelativeClauses.explanation).not.toContain("<b>don't use that</b>");
  });

  it("pins the reduced relative clauses: -ing for an active meaning, the past participle for a passive one", () => {
    expect(choiceAnswer(reducedRelativeClauses.quiz, "is her cousin")).toBe("talking");
    expect(choiceAnswer(reducedRelativeClauses.quiz, "arrested last night")).toBe("The man was arrested last night.");
    const made = gap(reducedRelativeClauses.quiz, "in this factory");
    expect(made).toEqual(["made"]);
    expectGap(made, ["made"], ["making", "make", "are made", "that are made", "maked"]);
    const wanting = gap(reducedRelativeClauses.quiz, "to join the club");
    expect(wanting).toEqual(["wanting"]);
    expectGap(wanting, ["wanting"], ["wants", "wanted", "want", "who wants"]);
  });

  it("pins the participle clauses: the subject rule, a past participle, having + past participle and not + -ing", () => {
    expect(choiceAnswer(participleClauses.quiz, "Which sentence is correct?")).toBe("Driving to work, I heard my favourite song on the radio.");
    expect(choiceAnswer(participleClauses.quiz, "Feeling tired")).toBe("Sam went to bed early because he felt tired.");
    const built = gap(participleClauses.quiz, "the Eiffel Tower");
    expect(built).toEqual(["Built"]);
    expectGap(built, ["Built", "built"], ["Building", "Build", "Having built", "It was built"]);
    const sent = gap(participleClauses.quiz, "closed her laptop");
    expect(sent).toEqual(["Having sent"]);
    expectGap(sent, ["Having sent", "having sent"], ["Having send", "Having sended", "Sent", "Sending", "Have sent"]);
    const knowing = gap(participleClauses.quiz, "what to say");
    expect(knowing).toEqual(["Not knowing"]);
    expectGap(knowing, ["Not knowing", "not knowing"], ["Knowing not", "Not know", "Don't knowing", "No knowing"]);
  });

  it("pins the verb + object patterns: make and let without to, allow + to, stop (from) + -ing, mind + object + -ing", () => {
    expect(choiceAnswer(verbObjectInfinitiveAndGerundPatterns.quiz, "Which sentence is correct?")).toBe("My parents let me stay out late.");
    expect(choiceAnswer(verbObjectInfinitiveAndGerundPatterns.quiz, "as long as he's careful")).toBe("him borrowing");
    const wait = gap(verbObjectInfinitiveAndGerundPatterns.quiz, "for three hours");
    expect(wait).toEqual(["wait"]);
    expectGap(wait, ["wait"], ["to wait", "waiting", "waited"]);
    const use = gap(verbObjectInfinitiveAndGerundPatterns.quiz, "our dictionaries");
    expect(use).toEqual(["to use"]);
    expectGap(use, ["to use"], ["use", "using", "to using", "for using"]);
    const getting = gap(verbObjectInfinitiveAndGerundPatterns.quiz, "to the airport");
    expect(getting).toEqual(["getting", "from getting"]);
    expectGap(getting, ["getting", "from getting"], ["to get", "get", "from get", "for getting"]);
  });

  it("pins the adjective and verb phrases: good at, responsible for, willing to, depend on and discuss with no preposition", () => {
    expect(choiceAnswer(adjectiveAndVerbPhrases.quiz, "solving problems")).toBe("at");
    expect(choiceAnswer(adjectiveAndVerbPhrases.quiz, "the plan with the team")).toBe("discuss");
    const forTraining = gap(adjectiveAndVerbPhrases.quiz, "training new staff");
    expect(forTraining).toEqual(["for"]);
    expectGap(forTraining, ["for"], ["of", "to", "in", "with"]);
    const willing = gap(adjectiveAndVerbPhrases.quiz, "at weekends");
    expect(willing).toEqual(["to work"]);
    expectGap(willing, ["to work"], ["working", "work", "for working", "to working"]);
    const dependsOn = gap(adjectiveAndVerbPhrases.quiz, "the number of people");
    expect(dependsOn).toEqual(["on", "upon"]);
    expectGap(dependsOn, ["on", "upon"], ["of", "from", "in", "to"]);
  });

  it("pins every wordbank answer", () => {
    expect(wordbankAnswers(reducedRelativeClauses.quiz)).toEqual(["The train leaving at six goes to Leeds."]);
    for (const t of [nonDefiningRelativeClauses, participleClauses, verbObjectInfinitiveAndGerundPatterns, adjectiveAndVerbPhrases]) {
      expect(wordbankAnswers(t.quiz), t.slug).toEqual([]);
    }
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(mistakes(nonDefiningRelativeClauses.quiz)).toEqual([
      ["that", "which"],
      ["friend", "friend,"],
      ["what", "which"],
    ]);
    expect(mistakes(reducedRelativeClauses.quiz)).toEqual([
      ["calling", "called"],
      ["teaches", "teaching"],
    ]);
    expect(mistakes(participleClauses.quiz)).toEqual([
      ["Making", "Made"],
      ["Have", "Having"],
    ]);
    expect(mistakes(verbObjectInfinitiveAndGerundPatterns.quiz)).toEqual([
      ["play", "playing"],
      ["I", "me"],
    ]);
    expect(mistakes(adjectiveAndVerbPhrases.quiz)).toEqual([
      ["at", "to"],
      ["manage", "managing"],
    ]);
  });

  it("pins the mistake sentences, each with a unique referent or a fixed form that leaves one fix", () => {
    const sentences = (t: (typeof topics)[number]) => t.quiz.flatMap((q) => (q.kind === "mistake" ? [q.tokens.join(" ")] : []));
    expect(sentences(nonDefiningRelativeClauses)).toEqual([
      "Tokyo, that is the capital of Japan, is a huge city.",
      "Maria, who is my best friend speaks four languages.",
      "It rained all weekend, what was a pity.",
    ]);
    expect(sentences(reducedRelativeClauses)).toEqual([
      "We stayed in a small village calling Ashby.",
      "The woman teaches us French is very patient.",
    ]);
    expect(sentences(participleClauses)).toEqual([
      "Making in Italy, these shoes are very expensive.",
      "Have finished the report, Lisa sent it to her manager.",
    ]);
    expect(sentences(verbObjectInfinitiveAndGerundPatterns)).toEqual([
      "The rain prevented us from play tennis.",
      "My parents encouraged I to learn the piano.",
    ]);
    expect(sentences(adjectiveAndVerbPhrases)).toEqual([
      "Please pay attention at the details.",
      "She's very good at manage people.",
    ]);
  });

  it("puts the comma fix on the token before the missing comma, as B1 commas does", () => {
    const comma = nonDefiningRelativeClauses.quiz.find((q) => q.kind === "mistake" && q.correction === "friend,");
    if (comma?.kind !== "mistake") throw new Error("comma mistake item missing");
    expect(comma.tokens[comma.wrongIndex]).toBe("friend");
    expect(comma.tokens[0]).toBe("Maria,");
  });

  it("defines the new terms once, reuses earlier wording exactly, hedges, and records the source calls", () => {
    expect(nonDefiningRelativeClauses.explanation).toContain("<b>non-defining clause</b>");
    expect(nonDefiningRelativeClauses.explanation).toContain(
      "Remember: a relative pronoun is the word at the start of the clause that points back to the noun before it, like who, which or that.",
    );
    expect(nonDefiningRelativeClauses.explanation).toContain("It is extra if you can take it out and the sentence still makes sense, with the same main meaning.");
    expect(nonDefiningRelativeClauses.explanation).toContain("Use a pair of commas, one before and one after.");
    expect(reducedRelativeClauses.explanation).toContain("Remember: the past participle is the form of a verb that comes after have: seen, gone, finished.");
    expect(reducedRelativeClauses.explanation).toContain("Both are correct");
    expect(participleClauses.explanation).toContain("<b>participle clause</b>");
    expect(participleClauses.explanation).toContain("Remember: a clause is a group of words with a subject and a verb.");
    expect(participleClauses.explanation).toContain("A participle clause is a short kind of clause with no subject of its own: its subject comes from the rest of the sentence");
    expect(verbObjectInfinitiveAndGerundPatterns.explanation).toContain("Remember: the object is the person or thing that the action goes to.");
    expect(verbObjectInfinitiveAndGerundPatterns.explanation).toContain("Remember: to and the base form together, like to buy or to see, are called the infinitive.");
    expect(verbObjectInfinitiveAndGerundPatterns.explanation).toContain("from is often left out");
    expect(adjectiveAndVerbPhrases.explanation).toContain("Remember: a collocation is a group of words that we often use together, like make a mistake or heavy rain.");
    expect(adjectiveAndVerbPhrases.explanation).toContain(
      "Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund.",
    );
    expect(adjectiveAndVerbPhrases.explanation).toContain("Both are correct");
    expect(nonDefiningRelativeClauses.sourceNotes).toContain("## Non-defining relative clause");
    expect(reducedRelativeClauses.sourceNotes).toContain("(new)");
    expect(participleClauses.sourceNotes).toContain("(new)");
    expect(verbObjectInfinitiveAndGerundPatterns.sourceNotes).toContain("# Verbs followed by gerunds and infinitives");
    expect(adjectiveAndVerbPhrases.sourceNotes).toContain("# Adjective phrase");
    expect(adjectiveAndVerbPhrases.sourceNotes).toContain("# Verb phrase");
  });
});
