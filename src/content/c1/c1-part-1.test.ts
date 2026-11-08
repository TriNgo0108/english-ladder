import { findTopic } from "@/content/registry";
import { parseTopic } from "@/content/schema";
import { c1Topics } from ".";
import { advancedComparisonStructures } from "./grammar/advanced-comparison-structures";
import { advancedModality } from "./grammar/advanced-modality";
import { impersonalAndPassiveConstructions } from "./grammar/impersonal-and-passive-constructions";
import { theSubjunctiveAndUnrealPast } from "./grammar/the-subjunctive-and-unreal-past";
import { choiceAnswer, distractors, expectGap, gap, ids, mistakes, plain, quizLengths, wordbankAnswers } from "@/content/test-helpers";

const orderedSlugs = [
  "advanced-modality",
  "the-subjunctive-and-unreal-past",
  "impersonal-and-passive-constructions",
  "advanced-comparison-structures",
];

const topics = [advancedModality, theSubjunctiveAndUnrealPast, impersonalAndPassiveConstructions, advancedComparisonStructures];

const remember = {
  modal: "Remember: a modal verb is a small verb that goes before the base form of another verb and adds a meaning to it.",
  baseForm: "Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
  pastParticiple: "Remember: the past participle is the form of a verb that comes after have: seen, gone, finished.",
  clause: "Remember: a clause is a group of words with a subject and a verb.",
  register: "Remember: register means how formal or informal your words are.",
  gerund: "Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund.",
  infinitive: "Remember: to and the base form together, like to buy or to see, are called the infinitive.",
  subject: "Remember: the subject is the person or thing that the sentence is about.",
};

describe("C1 grammar, part 1 (modality, the subjunctive, impersonal passives, comparison)", () => {
  it("registers orders 1-4 in sequence, each a grammar rule topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("c1", "grammar", slug);
      expect(found?.order, slug).toBe(i + 1);
      expect(found?.shape).toBe("rule");
      expect(found?.category).toBe("grammar");
      expect(found?.level).toBe("c1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(c1Topics.slice(0, 4).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "advanced-modality": 7,
      "the-subjunctive-and-unreal-past": 7,
      "impersonal-and-passive-constructions": 8,
      "advanced-comparison-structures": 8,
    });
  });

  it("pins the families", () => {
    expect(advancedModality.family).toBe("modal-deduction");
    expect(theSubjunctiveAndUnrealPast.family).toBe("wish");
    expect(impersonalAndPassiveConstructions.family).toBe("passive");
    expect(advancedComparisonStructures.family).toBe("comparison");
  });

  it("links each C1 topic to exactly its lower-level siblings in CEFR order, and each of those back", () => {
    expect(ids("c1", "grammar", "advanced-modality")).toEqual(["b1/modals-of-possibility-and-deduction", "b2/describing-certainty-in-the-past"]);
    expect(ids("b1", "grammar", "modals-of-possibility-and-deduction")).toEqual(["b2/describing-certainty-in-the-past", "c1/advanced-modality"]);
    expect(ids("b2", "grammar", "describing-certainty-in-the-past")).toEqual(["b1/modals-of-possibility-and-deduction", "c1/advanced-modality"]);
    expect(ids("c1", "grammar", "the-subjunctive-and-unreal-past")).toEqual(["b1/wish-and-if-only", "b2/wish-for-past-regrets"]);
    expect(ids("b1", "grammar", "wish-and-if-only")).toEqual(["b2/wish-for-past-regrets", "c1/the-subjunctive-and-unreal-past"]);
    expect(ids("b2", "grammar", "wish-for-past-regrets")).toEqual(["b1/wish-and-if-only", "c1/the-subjunctive-and-unreal-past"]);
    expect(ids("c1", "grammar", "impersonal-and-passive-constructions")).toEqual(["b1/the-passive", "b2/advanced-passive-and-reporting-verbs"]);
    expect(ids("b1", "grammar", "the-passive")).toEqual(["b2/advanced-passive-and-reporting-verbs", "c1/impersonal-and-passive-constructions"]);
    expect(ids("b2", "grammar", "advanced-passive-and-reporting-verbs")).toEqual(["b1/the-passive", "c1/impersonal-and-passive-constructions"]);
    expect(ids("c1", "grammar", "advanced-comparison-structures")).toEqual(["a2/comparatives-and-superlatives"]);
    expect(ids("a2", "grammar", "comparatives-and-superlatives")).toEqual(["c1/advanced-comparison-structures"]);
  });

  it("gives each topic 5-8 questions with at least 2 mistake items, 3+ examples, a short summary that doesn't open with a definition, and a pitfall", () => {
    for (const t of topics) {
      expect(t.quiz.length, t.slug).toBeGreaterThanOrEqual(5);
      expect(t.quiz.length, t.slug).toBeLessThanOrEqual(8);
      expect(t.quiz.filter((q) => q.kind === "mistake").length, t.slug).toBeGreaterThanOrEqual(2);
      expect(t.examples.length, t.slug).toBeGreaterThanOrEqual(3);
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
      expect(t.summary, t.slug).not.toMatch(/^[\w -]{0,40}(is|are|means) (a|an|the|when|how)/i);
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

  it("pins every wordbank answer: this batch has none", () => {
    for (const t of topics) expect(wordbankAnswers(t.quiz), t.slug).toEqual([]);
  });

  it("pins the modality: will for a sure assumption, bound to for certain (not may well), should or ought to for expectation, should have", () => {
    const q = advancedModality.quiz;
    expect(choiceAnswer(q, "the courier always comes at ten")).toBe("That'll be the courier.");
    expect(choiceAnswer(q, "the speaker is certain")).toBe("She's bound to get the job.");
    expect(distractors(advancedModality)).toEqual(
      expect.arrayContaining(["That may well be the courier.", "She may well get the job.", "She could well get the job."]),
    );
    const expect1 = gap(q, "arrive by Thursday");
    expect(expect1).toEqual(["should", "ought to"]);
    expectGap(expect1, ["should", "Should", "ought to"], ["ought", "must", "will", "may well", "should to"]);
    const landed = gap(q, "takes two hours");
    expect(landed).toEqual(["should have landed", "should've landed", "ought to have landed"]);
    expectGap(landed, ["should have landed", "should've landed", "ought to have landed"], ["should land", "should have land", "ought have landed", "should of landed", "must have landed"]);
    const eaten = gap(q, "No wonder you feel sick");
    expect(eaten).toEqual(["shouldn't have eaten", "should not have eaten", "shouldn't've eaten", "ought not to have eaten", "oughtn't to have eaten"]);
    expectGap(eaten, ["shouldn't have eaten", "should not have eaten", "ought not to have eaten"], ["shouldn't eat", "shouldn't have ate", "mustn't have eaten", "couldn't have eaten"]);
  });

  it("pins every subjunctive gap: the bare form and should + bare form are both accepted (Review Focus 1)", () => {
    const q = theSubjunctiveAndUnrealPast.quiz;
    const send = gap(q, "every applicant");
    expect(send).toEqual(["send", "should send"]);
    expectGap(send, ["send", "should send", "Should send"], ["sent", "to send", "sending", "would send"]);
    const be = gap(q, "kept secret");
    expect(be).toEqual(["be", "should be"]);
    expectGap(be, ["be", "should be"], ["been", "being", "to be", "would be"]);
    for (const answers of [send, be]) {
      expect(answers.some((a) => !a.startsWith("should ")), "bare form").toBe(true);
      expect(answers.some((a) => a.startsWith("should ")), "should form").toBe(true);
    }
  });

  it("pins the unreal past: It's time + past, I'd rather + past (not I'd rather you don't), and be that as it may", () => {
    const q = theSubjunctiveAndUnrealPast.quiz;
    const went = gap(q, "It's time we");
    expect(went).toEqual(["went", "were going"]);
    expectGap(went, ["went", "were going"], ["go", "will go", "should go", "had gone", "are going"]);
    const tell = gap(q, "until Friday");
    expect(tell).toEqual(["didn't tell", "did not tell"]);
    expectGap(tell, ["didn't tell", "did not tell"], ["don't tell", "won't tell", "not tell", "didn't told"]);
    expect(choiceAnswer(q, "the only one near the station")).toBe("Be that as it may");
  });

  it("never makes the indicative the wrong token of a subjunctive mistake item (Review Focus 1)", () => {
    for (const item of theSubjunctiveAndUnrealPast.quiz) {
      if (item.kind !== "mistake") continue;
      const sentence = item.tokens.join(" ");
      if (!/\b(insist|recommend|suggest|demand|essential|vital|important)/.test(sentence)) continue;
      expect(["is", "are", "was", "were", "attends", "takes", "sends", "has"], sentence).not.toContain(item.tokens[item.wrongIndex]);
    }
  });

  it("pins the impersonal and passive constructions: there + passive, It has been agreed, passive gerund and infinitive, need + -ing", () => {
    const q = impersonalAndPassiveConstructions.quiz;
    const wolves = gap(q, "There ___ about 300 wolves");
    expect(wolves).toEqual(["are believed to be"]);
    expectGap(wolves, ["are believed to be"], ["is believed to be", "are believed being", "believed to be", "are believed to"]);
    const agreed = gap(q, "pay rise");
    expect(agreed).toEqual(["has been agreed", "'s been agreed"]);
    expectGap(agreed, ["has been agreed", "'s been agreed"], ["has agreed", "was agreed", "is agreed", "has been agree"]);
    const criticised = gap(q, "in front of their colleagues");
    expect(criticised).toEqual(["being criticised", "being criticized", "getting criticised", "getting criticized"]);
    expectGap(criticised, ["being criticised", "being criticized", "getting criticised"], ["criticising", "been criticised", "to be criticised", "be criticised"]);
    const written = gap(q, "by hand");
    expect(written).toEqual(["to have been written"]);
    expectGap(written, ["to have been written"], ["to be written", "to have written", "being written", "to have been wrote"]);
    const cutting = gap(q, "The grass is very long");
    expect(cutting).toEqual(["cutting", "to be cut"]);
    expectGap(cutting, ["cutting", "to be cut"], ["to cut", "being cut", "to be cutting", "cuting"]);
    expect(choiceAnswer(q, "too informal")).toBe("Three employees got fired after the investigation.");
  });

  it("pins the comparison structures: the … the, modifiers, the size of, nowhere near, not so much … as, as did", () => {
    const q = advancedComparisonStructures.quiz;
    const harder = gap(q, "The longer you wait");
    expect(harder).toEqual(["the harder"]);
    expectGap(harder, ["the harder", "The harder"], ["harder", "the more hard", "the hardest", "more harder"]);
    const far = gap(q, "three extra rooms");
    expect(far).toEqual(["far", "much", "a lot", "a great deal", "considerably", "significantly"]);
    expectGap(far, ["far", "much", "a lot", "considerably", "a great deal"], ["very", "more", "slightly", "a bit", "too"]);
    const the = gap(q, "size of their old flat");
    expect(the).toEqual(["the"]);
    expectGap(the, ["the"], ["a", "as", "bigger"]);
    const near = gap(q, "as exciting as the first film");
    expect(near).toEqual(["near"]);
    expectGap(near, ["near"], ["nearly", "close", "far", "not"]);
    expect(choiceAnswer(q, "not so much a teacher")).toBe("Friend describes him better than teacher.");
    expect(choiceAnswer(q, "Which ending is correct?")).toBe("as did her father");
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(mistakes(advancedModality.quiz)).toEqual([
      ["came", "come"],
      ["forgetting", "forget"],
    ]);
    expect(mistakes(theSubjunctiveAndUnrealPast.quiz)).toEqual([
      ["don't", "didn't"],
      ["release", "released"],
    ]);
    expect(mistakes(impersonalAndPassiveConstructions.quiz)).toEqual([
      ["been", "being"],
      ["are", "is"],
    ]);
    expect(mistakes(advancedComparisonStructures.quiz)).toEqual([
      ["best.", "better"],
      ["than", "as"],
    ]);
  });

  it("pins the mistake sentences", () => {
    const sentences = (t: (typeof topics)[number]) => t.quiz.flatMap((q) => (q.kind === "mistake" ? [q.tokens.join(" ")] : []));
    expect(sentences(advancedModality)).toEqual([
      "You should have came with us. The party was great.",
      "Don't lend him money. He's bound to forgetting to pay you back.",
    ]);
    expect(sentences(theSubjunctiveAndUnrealPast)).toEqual([
      "I'd rather you don't smoke in the house.",
      "The judge insisted that the prisoner be release at once.",
    ]);
    expect(sentences(impersonalAndPassiveConstructions)).toEqual([
      "I hate been interrupted when I'm working.",
      "There are said to be a ghost in the old castle.",
    ]);
    expect(sentences(advancedComparisonStructures)).toEqual([
      "The sooner we leave, the best.",
      "The new stadium holds twice as many people than the old one.",
    ]);
  });

  it("defines the new terms once, reuses earlier wording exactly, hedges the variation, and records the source calls", () => {
    const mod = advancedModality.explanation;
    expect(mod).toContain(remember.modal);
    expect(mod).toContain(remember.pastParticiple);
    expect(mod).toContain("a guess like this is called a <b>deduction</b>");
    expect(plain(mod)).toContain("may well does not mean certain");
    expect(plain(mod)).toContain("ought to is a little more formal");
    expect(plain(mod)).toContain("must have and can't have");

    const subj = theSubjunctiveAndUnrealPast.explanation;
    expect(subj).toContain("<b>subjunctive</b>");
    expect(subj).toContain("<b>unreal past</b>");
    expect(subj).toContain(remember.baseForm);
    expect(subj).toContain(remember.clause);
    expect(subj).toContain(remember.register);
    expect(plain(subj)).toContain("in british english, should + the base form is usual");
    expect(plain(subj)).toContain("all three are correct");
    expect(plain(subj)).toContain("were is often preferred, especially in writing");
    expect(plain(subj)).toContain("was is also correct and common in informal english");

    const pass = impersonalAndPassiveConstructions.explanation;
    expect(pass).toContain(remember.pastParticiple);
    expect(pass).toContain(remember.gerund);
    expect(pass).toContain(remember.infinitive);
    expect(pass).toContain("Remember: a reporting verb is a verb that we use to report what people say or think, like say, tell, ask, think and believe.");
    expect(plain(pass)).toContain("get is informal");
    expect(plain(pass)).toContain("both are correct");

    const comp = advancedComparisonStructures.explanation;
    expect(comp).toContain("The comparative is the form of an adjective that we use to compare two");
    expect(comp).toContain(remember.subject);
    expect(plain(comp)).toContain("the spelling rules from a2");
    expect(plain(comp)).toContain("as her father did is also correct");

    for (const t of [advancedModality, theSubjunctiveAndUnrealPast, impersonalAndPassiveConstructions]) {
      expect(t.sourceNotes, t.slug).toContain("(a new point in spec section 8)");
    }
    expect(advancedComparisonStructures.sourceNotes).toContain("# Comparsions");
    for (const t of topics) {
      expect(t.sourceNotes, t.slug).toContain("Swan");
      expect(t.levelRationale, t.slug).toContain("English Grammar Profile");
    }
  });

  it("defines each new term in bold only once across the batch", () => {
    const all = topics.map((t) => t.explanation).join("\n");
    for (const term of ["subjunctive", "unreal past"]) expect(all.split(`<b>${term}</b>`).length - 1, term).toBe(1);
  });
});
