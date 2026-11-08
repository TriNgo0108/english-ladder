import { findTopic } from "@/content/registry";
import { parseTopic } from "@/content/schema";
import { c1Topics } from ".";
import { advancedInversionAndFronting } from "./grammar/advanced-inversion-and-fronting";
import { complexNounPhrases } from "./grammar/complex-noun-phrases";
import { ellipsisAndSubstitution } from "./grammar/ellipsis-and-substitution";
import { nominalisation } from "./grammar/nominalisation";
import { choiceAnswer, distractors, expectGap, gap, ids, mistakes, plain, quizLengths, wordbankAnswers } from "@/content/test-helpers";

const orderedSlugs = ["advanced-inversion-and-fronting", "ellipsis-and-substitution", "nominalisation", "complex-noun-phrases"];

const topics = [advancedInversionAndFronting, ellipsisAndSubstitution, nominalisation, complexNounPhrases];

const remember = {
  auxiliary:
    "Remember: an auxiliary is a small verb that goes with another verb, like be in She is working, have in They have finished, do in Do you like it?, and can or will.",
  subject: "Remember: the subject is the person or thing that the sentence is about.",
  inversion: "Remember: in inversion, we put the auxiliary before the subject, as in a question.",
  negativeAdverbial:
    "Remember: a word or phrase like never, which has a negative or limiting meaning (not, almost not, or only), is called a negative adverbial.",
  emphasis: "Remember: emphasis means making one part of what you say stand out, so that the listener notices it.",
  pronoun: "Remember: a pronoun is a short word that we use in place of a noun.",
  pastParticiple: "Remember: the past participle is the form of a verb that comes after have: seen, gone, finished.",
  baseForm: "Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
  modal: "Remember: a modal verb is a small verb that goes before the base form of another verb and adds a meaning to it.",
  infinitive: "Remember: to and the base form together, like to buy or to see, are called the infinitive.",
  clause: "Remember: a clause is a group of words with a subject and a verb.",
  register: "Remember: register means how formal or informal your words are.",
  countable: "Remember: a countable noun is a thing that we can count: one apple, two apples, three chairs.",
  uncountable: "Remember: an uncountable noun is a thing that we cannot count as one, two, three.",
  noun: "Remember: a noun is a word for a person, a thing, an animal or a place.",
  verb: "Remember: a verb is a word like go, eat or have.",
  adjective: "Remember: an adjective is a word that tells us more about a noun: what the person or thing is like.",
  abstractNoun: "Remember: a word for an idea, a feeling or a quality, something that we can't see or touch, is called an abstract noun.",
  suffix: "Remember: a suffix is a group of letters that we add to the end of a word to make a new word.",
  adverb: "Remember: an adverb of manner tells us more about a verb.",
  preposition: "Remember: a preposition is a small word, like in, on or under, that goes before a noun.",
};

describe("C1 grammar, part 2 (inversion and fronting, ellipsis and substitution, nominalisation, complex noun phrases)", () => {
  it("registers orders 5-8 in sequence after part 1, each a grammar rule topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("c1", "grammar", slug);
      expect(found?.order, slug).toBe(i + 5);
      expect(found?.shape).toBe("rule");
      expect(found?.category).toBe("grammar");
      expect(found?.level).toBe("c1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(c1Topics.slice(4, 8).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "advanced-inversion-and-fronting": 8,
      "ellipsis-and-substitution": 8,
      nominalisation: 8,
      "complex-noun-phrases": 7,
    });
  });

  it("pins the families: inversion for order 5, and no family for orders 6-8", () => {
    expect(advancedInversionAndFronting.family).toBe("inversion");
    expect(ellipsisAndSubstitution.family).toBeUndefined();
    expect(nominalisation.family).toBeUndefined();
    expect(complexNounPhrases.family).toBeUndefined();
  });

  it("links the C1 inversion topic to B2 inversion and back, and gives the unkeyed topics no siblings", () => {
    expect(ids("c1", "grammar", "advanced-inversion-and-fronting")).toEqual(["b2/inversion-after-negative-adverbials"]);
    expect(ids("b2", "grammar", "inversion-after-negative-adverbials")).toEqual(["c1/advanced-inversion-and-fronting"]);
    expect(ids("c1", "grammar", "ellipsis-and-substitution")).toEqual([]);
    expect(ids("c1", "grammar", "nominalisation")).toEqual([]);
    expect(ids("c1", "grammar", "complex-noun-phrases")).toEqual([]);
  });

  it("gives each topic 5-8 questions with at least 2 mistake items, 3+ examples, a short summary that doesn't open with a definition, and a pitfall", () => {
    for (const t of topics) {
      expect(t.quiz.length, t.slug).toBeGreaterThanOrEqual(5);
      expect(t.quiz.length, t.slug).toBeLessThanOrEqual(8);
      expect(t.quiz.filter((q) => q.kind === "mistake").length, t.slug).toBeGreaterThanOrEqual(2);
      expect(t.examples.length, t.slug).toBeGreaterThanOrEqual(3);
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
      expect(t.summary, t.slug).not.toMatch(/^[\w -]{0,40}(is|are|means) (a|an|the|when|how)/i);
      expect(t.pitfall, t.slug).toBeDefined();
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

  it("pins every wordbank answer: this batch has none, and inversion never uses a word bank (Review Focus 3)", () => {
    expect(wordbankAnswers(advancedInversionAndFronting.quiz)).toEqual([]);
    for (const t of topics) expect(wordbankAnswers(t.quiz), t.slug).toEqual([]);
  });

  it("pins the inversion gaps: each starts after the slot that if would fill, so only the inverted form fits (Review Focus 3)", () => {
    const q = advancedInversionAndFronting.quiz;
    const were = gap(q, "to change your mind");
    expect(were).toEqual(["were"]);
    expectGap(were, ["were", "Were"], ["if", "should", "had", "would", "was"]);
    const was = gap(q, "So severe ___ the damage");
    expect(was).toEqual(["was"]);
    expectGap(was, ["was", "Was"], ["is", "were", "the", "it was"]);
    for (const item of q) {
      if (item.kind === "gap") expect(item.stem, item.stem).not.toMatch(/\bif\b/i);
    }
  });

  it("pins the inversion choices: little did I know, full-verb inversion after a place phrase, no inversion after a fronted object", () => {
    const q = advancedInversionAndFronting.quiz;
    expect(choiceAnswer(q, "Which sentence is correct?", "Little")).toBe("Little did I know that she was watching me.");
    expect(choiceAnswer(q, "from a story")).toBe("Into the room walked a tall man.");
    expect(choiceAnswer(q, "cancelling the project")).toBe("That I can't accept.");
    expect(distractors(advancedInversionAndFronting)).toEqual(
      expect.arrayContaining(["Little I knew that she was watching me.", "Into the room walked he.", "Into the room did a tall man walk.", "That can I not accept."]),
    );
  });

  it("pins the ellipsis and substitution gaps with every defensible filler (Review Focus 2)", () => {
    const q = ellipsisAndSubstitution.quiz;
    const can = gap(q, "I can't speak Spanish");
    expect(can).toEqual(["can"]);
    expectGap(can, ["can", "Can"], ["is", "has", "do", "can't"]);
    const so = gap(q, "She's never missed one");
    expect(so).toEqual(["so"]);
    expectGap(so, ["so", "So"], ["it", "yes", "that", "not"]);
    const to = gap(q, "I lost my phone");
    expect(to).toEqual(["to"]);
    expectGap(to, ["to"], ["it", "so", "that", "do"]);
    const ones = gap(q, "too small");
    expect(ones).toEqual(["ones"]);
    expectGap(ones, ["ones"], ["one", "once", "it", "them"]);
  });

  it("pins the ellipsis choices: I hope not (not I don't hope so), and do so in a formal letter", () => {
    const q = ellipsisAndSubstitution.quiz;
    expect(choiceAnswer(q, "planned everything outside")).toBe("I hope not.");
    expect(choiceAnswer(q, "If you fail to")).toBe("do so");
    expect(distractors(ellipsisAndSubstitution)).toEqual(expect.arrayContaining(["I don't hope so.", "I hope no.", "do"]));
  });

  it("pins the nominalisation gaps: a determiner or of fixes the slot to one noun (sweep risk)", () => {
    const q = nominalisation.quiz;
    const decision = gap(q, "made a quick");
    expect(decision).toEqual(["decision"]);
    expectGap(decision, ["decision"], ["decidement", "decide", "deciding", "decisions"]);
    const of = gap(q, "The construction ___ the new bridge");
    expect(of).toEqual(["of"]);
    expectGap(of, ["of"], ["for", "to", "the"]);
    const ability = gap(q, "to lead the team");
    expect(ability).toEqual(["ability"]);
    expectGap(ability, ["ability"], ["ableness", "able", "abilities"]);
    const failure = gap(q, "of the project shocked");
    expect(failure).toEqual(["failure"]);
    expectGap(failure, ["failure"], ["failment", "fail", "failness"]);
  });

  it("pins the nominalisation choices: the most formal and impersonal version, and the adjective from an adverb", () => {
    const q = nominalisation.quiz;
    expect(choiceAnswer(q, "most formal and impersonal")).toBe("The decision to close the office was due to a fall in sales.");
    expect(choiceAnswer(q, "recovered slowly")).toBe("slow");
  });

  it("pins the complex noun phrase gaps: to-infinitive, reduced relatives, agreement with the head noun", () => {
    const q = complexNounPhrases.quiz;
    const to = gap(q, "Her decision ___ leave");
    expect(to).toEqual(["to"]);
    expectGap(to, ["to"], ["of", "for", "about"]);
    const living = gap(q, "in the city centre");
    expect(living).toEqual(["living"]);
    expectGap(living, ["living"], ["lived", "live", "lives"]);
    const published = gap(q, "last week contains");
    expect(published).toEqual(["published"]);
    expectGap(published, ["published"], ["publishing", "publish", "publishes"]);
    const is = gap(q, "The list of names");
    expect(is).toEqual(["is"]);
    expectGap(is, ["is"], ["are", "be", "am"]);
    expect(choiceAnswer(q, "head noun")).toBe("cost");
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(mistakes(advancedInversionAndFronting.quiz)).toEqual([
      ["know", "known"],
      ["saw", "see"],
      ["So", "Such"],
    ]);
    expect(mistakes(ellipsisAndSubstitution.quiz)).toEqual([
      ["Tom's.", "Tom is."],
      ["one", "some"],
    ]);
    expect(mistakes(nominalisation.quiz)).toEqual([
      ["decidement", "decision"],
      ["rapidly", "rapid"],
    ]);
    expect(mistakes(complexNounPhrases.quiz)).toEqual([
      ["three-years", "three-year"],
      ["shoes", "shoe"],
    ]);
  });

  it("pins the mistake sentences", () => {
    const sentences = (t: (typeof topics)[number]) => t.quiz.flatMap((q) => (q.kind === "mistake" ? [q.tokens.join(" ")] : []));
    expect(sentences(advancedInversionAndFronting)).toEqual([
      "Had I know how expensive it was, I wouldn't have ordered it.",
      "Not until the next morning did we saw how bad the damage was.",
      "So was his anger that he couldn't say a word.",
    ]);
    expect(sentences(ellipsisAndSubstitution)).toEqual([
      "I'm not ready to leave yet, but Tom's.",
      "If you need some money, there's one in my bag.",
    ]);
    expect(sentences(nominalisation)).toEqual([
      "The decidement to close the factory was announced last week.",
      "The rapidly expansion of the company created hundreds of new jobs.",
    ]);
    expect(sentences(complexNounPhrases)).toEqual([
      "The club has offered him a three-years contract.",
      "I bought these boots at the new shoes shop in town.",
    ]);
  });

  it("defines the new terms once, reuses earlier wording exactly, hedges the variation, and records the source calls", () => {
    const inv = advancedInversionAndFronting.explanation;
    for (const r of [remember.inversion, remember.auxiliary, remember.subject, remember.negativeAdverbial, remember.emphasis, remember.pronoun, remember.pastParticiple, remember.baseForm]) {
      expect(inv).toContain(r);
    }
    expect(inv).toContain("is called <b>fronting</b>");
    expect(inv).toContain("as did</b> her father");
    expect(plain(inv)).toContain("had we not booked early");
    expect(plain(inv)).toContain("here it comes, not here comes it");
    expect(plain(inv)).toContain("the normal order is always correct");

    const ell = ellipsisAndSubstitution.explanation;
    for (const r of [remember.auxiliary, remember.modal, remember.infinitive, remember.clause, remember.register, remember.countable, remember.uncountable]) {
      expect(ell).toContain(r);
    }
    expect(ell).toContain("is called <b>ellipsis</b>");
    expect(ell).toContain("is called <b>substitution</b>");
    expect(plain(ell)).toContain("i think not is also correct, but it is formal and less common");
    expect(plain(ell)).toContain("so do i and neither can i");
    expect(plain(ell)).toContain("do it and do that mean the same");

    const nom = nominalisation.explanation;
    for (const r of [remember.noun, remember.verb, remember.adjective, remember.abstractNoun, remember.suffix, remember.register, remember.adverb]) {
      expect(nom).toContain(r);
    }
    expect(nom).toContain("is called <b>nominalisation</b>");
    expect(plain(nom)).toContain("in conversation, the verb is usually more natural");
    expect(plain(nom)).toContain("a rise in prices");

    const np = complexNounPhrases.explanation;
    for (const r of [remember.adjective, remember.preposition, remember.infinitive]) expect(np).toContain(r);
    expect(np).toContain("is called a <b>noun phrase</b>");
    expect(np).toContain("is called the <b>head noun</b>");
    expect(np).toContain("are called a <b>compound noun</b>");
    expect(plain(np)).toContain("a few are plural: a clothes shop, a sports car");
    expect(plain(np)).toContain("a number of people were late");

    for (const t of topics) {
      expect(t.sourceNotes, t.slug).toContain("(a new point in spec section 8)");
      expect(t.sourceNotes, t.slug).toContain("Swan");
      expect(t.levelRationale, t.slug).toContain("English Grammar Profile");
    }
  });

  it("defines each new term in bold only once across C1 so far", () => {
    const all = c1Topics.map((t) => t.explanation).join("\n");
    for (const term of ["fronting", "ellipsis", "substitution", "nominalisation", "noun phrase", "head noun", "compound noun"]) {
      expect(all.split(`<b>${term}</b>`).length - 1, term).toBe(1);
    }
  });
});
