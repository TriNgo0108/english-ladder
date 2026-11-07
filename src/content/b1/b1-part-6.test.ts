import { allTopics, findTopic, topicsByLevelAndCategory } from "@/content/registry";
import { parseTopic, type SetTopic } from "@/content/schema";
import { b1Topics } from ".";
import { collocations } from "./phrases/collocations";
import { idioms } from "./phrases/idioms";
import { inTimeAndOnTime } from "./phrases/in-time-and-on-time";
import { phrasalVerbsInseparable } from "./phrases/phrasal-verbs-inseparable";
import { phrasalVerbsSeparable } from "./phrases/phrasal-verbs-separable";
import { prepositionsOfMovement } from "./phrases/prepositions-of-movement";
import { answerSentences, choiceAnswer, expectGap, gap, ids, plain, quizLengths, wordbankAnswers, wrongToken } from "@/content/test-helpers";

const orderedSlugs = [
  "phrasal-verbs-separable",
  "phrasal-verbs-inseparable",
  "collocations",
  "idioms",
  "prepositions-of-movement",
  "in-time-and-on-time",
];

const topics: SetTopic[] = [
  phrasalVerbsSeparable,
  phrasalVerbsInseparable,
  collocations,
  idioms,
  prepositionsOfMovement,
  inTimeAndOnTime,
];

describe("B1 Phrases & Expressions (part 6)", () => {
  it("registers orders 27-32 in sequence, each a phrases set topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("b1", "phrases", slug);
      expect(found?.order, slug).toBe(i + 27);
      expect(found?.shape).toBe("set");
      expect(found?.level).toBe("b1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b1Topics.slice(26, 32).map((t) => t.slug)).toEqual(orderedSlugs);
    expect(topicsByLevelAndCategory("b1", "phrases").map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "phrasal-verbs-separable": 6,
      "phrasal-verbs-inseparable": 6,
      "collocations": 6,
      "idioms": 6,
      "prepositions-of-movement": 6,
      "in-time-and-on-time": 6,
    });
  });

  it("holds exactly these six slugs in the B1 phrases category", () => {
    const phrases = allTopics.filter((t) => t.level === "b1" && t.category === "phrases");
    expect(phrases.map((t) => t.slug).sort()).toEqual([...orderedSlugs].sort());
  });

  it("pins the families: collocations, idioms and the two preposition chains explicit, none for the phrasal verbs", () => {
    expect(phrasalVerbsSeparable.family).toBeUndefined();
    expect(phrasalVerbsInseparable.family).toBe("phrasal-verbs");
    expect(collocations.family).toBe("collocations");
    expect(idioms.family).toBe("idioms");
    expect(prepositionsOfMovement.family).toBe("prepositions-of-place");
    expect(inTimeAndOnTime.family).toBe("prepositions-of-time");
  });

  it("links A1 prepositions of place and time to their B1 topics both ways, and gives the rest no siblings yet", () => {
    expect(ids("a1", "grammar", "prepositions-of-place")).toEqual(["b1/prepositions-of-movement"]);
    expect(ids("b1", "phrases", "prepositions-of-movement")).toEqual(["a1/prepositions-of-place"]);
    expect(ids("a1", "grammar", "prepositions-of-time")).toEqual(["b1/in-time-and-on-time"]);
    expect(ids("b1", "phrases", "in-time-and-on-time")).toEqual(["a1/prepositions-of-time"]);
    for (const slug of ["phrasal-verbs-separable", "phrasal-verbs-inseparable", "collocations", "idioms"]) {
      expect(ids("b1", "phrases", slug), slug).toEqual([]);
    }
  });

  it("gives each topic about five questions, a short summary, and scrambles every wordbank", () => {
    for (const t of topics) {
      expect(t.quiz.length, t.slug).toBeGreaterThanOrEqual(5);
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" ")).not.toBe(q.answer);
      }
    }
  });

  it("keeps every set between 6 and 30 entries, with distinct headwords, no IPA, and the headword bolded in use", () => {
    for (const t of topics) {
      expect(t.entries.length, t.slug).toBeGreaterThanOrEqual(6);
      expect(t.entries.length, t.slug).toBeLessThanOrEqual(30);
      const heads = t.entries.map((e) => e.headword);
      expect(new Set(heads).size, t.slug).toBe(heads.length);
      for (const e of t.entries) {
        expect(e.ipa, e.headword).toBeUndefined();
        expect(e.inUse, e.headword).toMatch(/<b>.+<\/b>/);
        expect(e.gloss, e.headword).not.toMatch(/[<>]/);
      }
      expect(t.explanation, t.slug).not.toContain("/ /");
    }
  });

  it("never copies a quiz answer word for word from the topic's entries or explanation", () => {
    for (const t of topics) {
      const source = plain([t.explanation, ...t.entries.map((e) => e.inUse)].join(" "));
      for (const sentence of answerSentences(t)) expect(source, `${t.slug}: ${sentence}`).not.toContain(plain(sentence));
    }
  });

  it("defines phrasal verb, particle and collocation once, and reuses the earlier wording for object, pronoun, gerund, base form and preposition", () => {
    expect(phrasalVerbsSeparable.explanation).toContain("A <b>phrasal verb</b> is");
    expect(phrasalVerbsSeparable.explanation).toContain("is called the <b>particle</b>");
    expect(phrasalVerbsSeparable.explanation).toContain("Remember: the object is the person or thing that the action goes to.");
    expect(phrasalVerbsSeparable.explanation).toContain("Remember: a pronoun is a short word that we use in place of a noun.");
    expect(phrasalVerbsInseparable.explanation).toContain("Remember: a phrasal verb is");
    expect(phrasalVerbsInseparable.explanation).toContain(
      "Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund.",
    );
    expect(collocations.explanation).toContain("A <b>collocation</b> is");
    expect(prepositionsOfMovement.explanation).toContain(
      "Remember: a preposition is a small word, like in, on or under, that goes before a noun.",
    );
    expect(inTimeAndOnTime.explanation).toContain(
      "Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
    );
    const others = allTopics.filter((t) => t.slug !== "phrasal-verbs-separable" && t.slug !== "collocations");
    for (const t of others) {
      expect(t.explanation, t.slug).not.toContain("A <b>phrasal verb</b> is");
      expect(t.explanation, t.slug).not.toContain("A <b>collocation</b> is");
    }
  });

  it("states the pronoun rule, hedges the noun-object rule, and wordbanks only pronoun objects", () => {
    expect(phrasalVerbsSeparable.explanation).toContain("turn it off");
    expect(phrasalVerbsSeparable.explanation).toContain("not turn off it");
    expect(phrasalVerbsSeparable.explanation).toContain("can usually go");
    expect(wordbankAnswers(phrasalVerbsSeparable.quiz)).toEqual(["Can you pick them up?"]);
    expect(wordbankAnswers(phrasalVerbsInseparable.quiz)).toEqual(["Who's going to look after them?"]);
    for (const t of [collocations, idioms, prepositionsOfMovement, inTimeAndOnTime]) {
      expect(wordbankAnswers(t.quiz), t.slug).toEqual([]);
    }
  });

  it("pins the separable phrasal verb choices and gaps", () => {
    expect(choiceAnswer(phrasalVerbsSeparable.quiz, "coat")).toBe("Put on");
    expect(choiceAnswer(phrasalVerbsSeparable.quiz, "Which one is wrong")).toBe("She picked up her.");
    const fill = gap(phrasalVerbsSeparable.quiz, "form");
    expect(fill).toEqual(["in", "out"]);
    expectGap(fill, ["in", "In", "out"], ["up", "on", "it in", "off"]);
    const up = gap(phrasalVerbsSeparable.quiz, "very quiet");
    expect(up).toEqual(["up"]);
    expectGap(up, ["up", "Up"], ["down", "on", "off", "louder"]);
  });

  it("pins the inseparable phrasal verb choices and gaps, with look forward to + gerund", () => {
    expect(choiceAnswer(phrasalVerbsInseparable.quiz, "same eyes")).toBe("takes after");
    expect(choiceAnswer(phrasalVerbsInseparable.quiz, "came across")).toBe("found it by chance");
    const after = gap(phrasalVerbsInseparable.quiz, "our cat");
    expect(after).toEqual(["after"]);
    expectGap(after, ["after", "After"], ["for", "at", "out", "to"]);
    const on = gap(phrasalVerbsInseparable.quiz, "new boss");
    expect(on).toEqual(["on", "along"]);
    expectGap(on, ["on", "along", "On"], ["in", "up", "off", "together"]);
    expect(phrasalVerbsInseparable.explanation).toContain("looking forward to");
    expect(phrasalVerbsInseparable.explanation).toContain("We can't put the object between the verb and the particle.");
    expect(phrasalVerbsInseparable.explanation).not.toContain("can't put anything");
  });

  it("pins the collocation choices and gaps, and never tests make or take a decision", () => {
    expect(choiceAnswer(collocations.quiz, "party")).toBe("Have");
    expect(choiceAnswer(collocations.quiz, "traffic")).toBe("heavy");
    expect(choiceAnswer(collocations.quiz, "sleep")).toBe("strong");
    const doGap = gap(collocations.quiz, "homework");
    expect(doGap).toEqual(["do"]);
    expectGap(doGap, ["do", "Do"], ["make", "have", "doing", "did"]);
    const take = gap(collocations.quiz, "photo");
    expect(take).toEqual(["take"]);
    expectGap(take, ["take", "Take"], ["have", "make", "do", "took"]);
    expect(JSON.stringify(collocations.quiz)).not.toMatch(/decision/i);
    expect(collocations.explanation).toContain("take a decision");
  });

  it("pins the idiom choices and gaps", () => {
    expect(choiceAnswer(idioms.quiz, "driving test")).toBe("a piece of cake");
    expect(choiceAnswer(idioms.quiz, "Italian or Chinese")).toBe("It's up to you.");
    expect(choiceAnswer(idioms.quiz, "Make yourself at home")).toBe("Relax and feel comfortable here.");
    const changed = gap(idioms.quiz, "ordered the fish");
    expect(changed).toEqual(["changed"]);
    expectGap(changed, ["changed", "Changed"], ["change", "made", "made up", "turned", "changed up"]);
    const hand = gap(idioms.quiz, "boxes");
    expect(hand).toEqual(["hand"]);
    expectGap(hand, ["hand", "Hand"], ["help", "lift", "hands", "arm"]);
  });

  it("pins the prepositions of movement choices and gaps, accepting over with across", () => {
    expect(choiceAnswer(prepositionsOfMovement.quiz, "jumped")).toBe("onto");
    expect(choiceAnswer(prepositionsOfMovement.quiz, "tunnel")).toBe("through");
    expect(choiceAnswer(prepositionsOfMovement.quiz, "stopped before")).toBe("towards");
    const across = gap(prepositionsOfMovement.quiz, "swim");
    expect(across).toEqual(["across", "over"]);
    expectGap(across, ["across", "Across", "over"], ["along", "into", "through", "on"]);
    const past = gap(prepositionsOfMovement.quiz, "post office");
    expect(past).toEqual(["past", "by"]);
    expectGap(past, ["past", "Past", "by"], ["passed", "pass", "into", "through"]);
    expect(prepositionsOfMovement.explanation).toContain("<b>Over</b> often means the same");
  });

  it("pins the in time and on time choices and gaps", () => {
    expect(choiceAnswer(inTimeAndOnTime.quiz, "concert")).toBe("on time");
    expect(choiceAnswer(inTimeAndOnTime.quiz, "on the phone")).toBe("at the moment");
    expect(choiceAnswer(inTimeAndOnTime.quiz, "for an hour")).toBe("At last");
    expect(JSON.stringify(inTimeAndOnTime.quiz)).not.toContain("needs of");
    const inTime = gap(inTimeAndOnTime.quiz, "popcorn");
    expect(inTime).toEqual(["in", "in good", "in plenty of", "in good time", "in plenty of time"]);
    expectGap(inTime, ["in", "In", "in good", "in plenty of", "in good time", "in plenty of time"], ["on", "at", "in a", "in plenty"]);
    const inTheEnd = gap(inTimeAndOnTime.quiz, "flats");
    expect(inTheEnd).toEqual(["in"]);
    expectGap(inTheEnd, ["in", "In"], ["at", "on", "by"]);
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(wrongToken(phrasalVerbsSeparable.quiz)).toEqual(["on", "up"]);
    expect(wrongToken(phrasalVerbsInseparable.quiz)).toEqual(["see", "seeing"]);
    expect(wrongToken(collocations.quiz)).toEqual(["did", "made"]);
    expect(wrongToken(idioms.quiz)).toEqual(["head.", "heart."]);
    expect(wrongToken(prepositionsOfMovement.quiz)).toEqual(["from", "of"]);
    expect(wrongToken(inTimeAndOnTime.quiz)).toEqual(["in", "on"]);
  });
});
