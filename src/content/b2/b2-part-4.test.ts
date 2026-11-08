import { findTopic } from "@/content/registry";
import { parseTopic } from "@/content/schema";
import { b2Topics } from ".";
import { advancedLinkers } from "./grammar/advanced-linkers";
import { articlesWithAbstractAndGeneralNouns } from "./grammar/articles-with-abstract-and-general-nouns";
import { cleftSentences } from "./grammar/cleft-sentences";
import { declarativeAndRhetoricalQuestions } from "./grammar/declarative-and-rhetorical-questions";
import { hedgingAndDegreesOfCertainty } from "./grammar/hedging-and-degrees-of-certainty";
import { inversionAfterNegativeAdverbials } from "./grammar/inversion-after-negative-adverbials";
import { choiceAnswer, expectGap, gap, ids, mistakes, plain, quizLengths, stringsIn, wordbankAnswers } from "@/content/test-helpers";

const orderedSlugs = [
  "articles-with-abstract-and-general-nouns",
  "advanced-linkers",
  "declarative-and-rhetorical-questions",
  "cleft-sentences",
  "inversion-after-negative-adverbials",
  "hedging-and-degrees-of-certainty",
];

const topics = [
  articlesWithAbstractAndGeneralNouns,
  advancedLinkers,
  declarativeAndRhetoricalQuestions,
  cleftSentences,
  inversionAfterNegativeAdverbials,
  hedgingAndDegreesOfCertainty,
];

/** U+2197 (north east arrow) or U+2198 (south east arrow). A screen reader reads them by those names, so each must be named in words. */
const ARROW = /[↗↘]/;

describe("B2 grammar, part 4 (articles, linkers, questions, emphasis and hedging)", () => {
  it("registers orders 16-21 in sequence, each a grammar rule topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("b2", "grammar", slug);
      expect(found?.order, slug).toBe(i + 16);
      expect(found?.shape).toBe("rule");
      expect(found?.level).toBe("b2");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b2Topics.slice(15, 21).map((t) => t.slug)).toEqual(orderedSlugs);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "articles-with-abstract-and-general-nouns": 7,
      "advanced-linkers": 7,
      "declarative-and-rhetorical-questions": 7,
      "cleft-sentences": 7,
      "inversion-after-negative-adverbials": 7,
      "hedging-and-degrees-of-certainty": 7,
    });
  });

  it("pins the families, and leaves cleft sentences and hedging without one", () => {
    expect(articlesWithAbstractAndGeneralNouns.family).toBe("articles");
    expect(advancedLinkers.family).toBe("linking-words");
    expect(declarativeAndRhetoricalQuestions.family).toBe("question-forms");
    expect(cleftSentences.family).toBeUndefined();
    expect(inversionAfterNegativeAdverbials.family).toBe("inversion");
    expect(hedgingAndDegreesOfCertainty.family).toBeUndefined();
  });

  it("links each B2 topic to exactly its lower-level siblings in CEFR order, and each of those back", () => {
    expect(ids("b2", "grammar", "articles-with-abstract-and-general-nouns")).toEqual(["a1/articles-a-an", "a2/articles-the-and-zero-article"]);
    expect(ids("a1", "grammar", "articles-a-an")).toEqual(["a2/articles-the-and-zero-article", "b2/articles-with-abstract-and-general-nouns"]);
    expect(ids("a2", "grammar", "articles-the-and-zero-article")).toEqual(["a1/articles-a-an", "b2/articles-with-abstract-and-general-nouns"]);
    expect(ids("b2", "grammar", "advanced-linkers")).toEqual(["a2/and-but-so-because", "b1/linking-words"]);
    expect(ids("a2", "grammar", "and-but-so-because")).toEqual(["b1/linking-words", "b2/advanced-linkers"]);
    expect(ids("b1", "grammar", "linking-words")).toEqual(["a2/and-but-so-because", "b2/advanced-linkers"]);
    expect(ids("b2", "grammar", "declarative-and-rhetorical-questions")).toEqual(["a1/question-words", "a2/subject-questions", "b1/question-tags"]);
    expect(ids("a1", "grammar", "question-words")).toEqual(["a2/subject-questions", "b1/question-tags", "b2/declarative-and-rhetorical-questions"]);
    expect(ids("a2", "grammar", "subject-questions")).toEqual(["a1/question-words", "b1/question-tags", "b2/declarative-and-rhetorical-questions"]);
    expect(ids("b1", "grammar", "question-tags")).toEqual(["a1/question-words", "a2/subject-questions", "b2/declarative-and-rhetorical-questions"]);
    expect(ids("b2", "grammar", "inversion-after-negative-adverbials")).toEqual(["c1/advanced-inversion-and-fronting"]);
    expect(ids("b2", "grammar", "cleft-sentences")).toEqual([]);
    expect(ids("b2", "grammar", "hedging-and-degrees-of-certainty")).toEqual([]);
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

  it("never tests inversion or a cleft with a word bank (Review Focus 4)", () => {
    expect(wordbankAnswers(cleftSentences.quiz)).toEqual([]);
    expect(wordbankAnswers(inversionAfterNegativeAdverbials.quiz)).toEqual([]);
  });

  it("pins every wordbank answer: this batch has none", () => {
    for (const t of topics) expect(wordbankAnswers(t.quiz), t.slug).toEqual([]);
  });

  it("pins the articles: no article in general, the when specific, the + adjective, the + singular noun for a kind", () => {
    expect(choiceAnswer(articlesWithAbstractAndGeneralNouns.quiz, "friendship in general")).toBe("Friendship is more important than money.");
    expect(choiceAnswer(articlesWithAbstractAndGeneralNouns.quiz, "tigers in general")).toBe("The tiger is in danger of disappearing.");
    const shakespeare = gap(articlesWithAbstractAndGeneralNouns.quiz, "early life of Shakespeare");
    expect(shakespeare).toEqual(["the"]);
    expectGap(shakespeare, ["the", "The"], ["a", "an", "his", "-"]);
    const homeless = gap(articlesWithAbstractAndGeneralNouns.quiz, "homeless");
    expect(homeless).toEqual(["the"]);
    expectGap(homeless, ["the"], ["a", "an", "the homeless"]);
  });

  it("pins the linkers: owing to + noun, on the other hand, whereas or while, nevertheless or however", () => {
    expect(choiceAnswer(advancedLinkers.quiz, "the strike")).toBe("owing to");
    expect(choiceAnswer(advancedLinkers.quiz, "owing to correctly")).toBe("Owing to his illness, Mark missed the meeting.");
    expect(choiceAnswer(advancedLinkers.quiz, "very expensive")).toBe("On the other hand");
    const whereas = gap(advancedLinkers.quiz, "big cities");
    expect(whereas).toEqual(["whereas", "while", "whilst"]);
    expectGap(whereas, ["whereas", "while", "whilst"], ["nevertheless", "however", "owing to", "despite"]);
    const nevertheless = gap(advancedLinkers.quiz, "almost everyone passed");
    expect(nevertheless).toEqual(["Nevertheless", "However", "Even so", "Nonetheless", "Still", "Yet", "All the same", "Despite this", "In spite of this"]);
    expectGap(nevertheless, ["Nevertheless", "nevertheless", "However", "even so", "Nonetheless"], ["Consequently", "Whereas", "Therefore", "Despite", "Thus"]);
  });

  it("pins the declarative and rhetorical questions: statement order to check, a normal question for new information, the opposite meaning", () => {
    const q = declarativeAndRhetoricalQuestions.quiz;
    expect(choiceAnswer(q, "declarative question?")).toBe("You're coming to the party?");
    expect(choiceAnswer(q, "the museum opens")).toBe("What time does the museum open?");
    expect(choiceAnswer(q, "work on a Sunday")).toBe("Nobody wants to work on a Sunday.");
    expect(choiceAnswer(q, "Isn't it beautiful?")).toBe("It's very beautiful.");
    const up = gap(q, "Write up or down");
    expect(up).toEqual(["up"]);
    expectGap(up, ["up", "Up"], ["down", "rising", "falling"]);
  });

  it("writes rising and falling as words, with no arrow glyphs, because the served fonts have no U+2197 or U+2198", () => {
    const t = declarativeAndRhetoricalQuestions;
    expect(stringsIn(t, t.slug).filter(([, s]) => ARROW.test(s))).toEqual([]);
    expect(t.explanation).toContain("(rising)");
    for (const ex of t.examples.slice(0, 3)) expect(ex.sentence, ex.sentence).toMatch(/\(rising\)$/);
  });

  it("names every rising or falling arrow in words in the same string, in every field of every B2 topic", () => {
    const strings = b2Topics.flatMap((topic) => stringsIn(topic, topic.slug));
    expect(strings.length).toBeGreaterThan(500);
    expect(strings.filter(([, s]) => ARROW.test(s) && !/rising|falling/i.test(s)).map(([path]) => path)).toEqual([]);
  });

  it("pins the cleft sentences: who or that for a person, what (or all) at the start, singular it and is", () => {
    const q = cleftSentences.quiz;
    expect(choiceAnswer(q, "it was Ben")).toBe("It was Ben who broke the window.");
    expect(choiceAnswer(q, "puts the food in focus")).toBe("What I love about Italy is the food.");
    const what = gap(q, "a long holiday");
    expect(what).toEqual(["What", "All"]);
    expectGap(what, ["What", "what", "All"], ["Which", "That", "It"]);
    const who = gap(q, "taught me to cook");
    expect(who).toEqual(["who", "that"]);
    expectGap(who, ["who", "that"], ["which", "whom", "what"]);
    const is = gap(q, "more time, not more money");
    expect(is).toEqual(["is"]);
    expectGap(is, ["is"], ["are", "be", "was"]);
  });

  it("pins the inversion: auxiliary before the subject, did + base form, hardly … when, no sooner … than", () => {
    const q = inversionAfterNegativeAdverbials.quiz;
    expect(choiceAnswer(q, "Which sentence is correct?")).toBe("Rarely have I eaten such good food.");
    expect(choiceAnswer(q, "Not only ___ the exam")).toBe("did she pass");
    const had = gap(q, "closed my eyes");
    expect(had).toEqual(["had"]);
    expectGap(had, ["had"], ["did", "have", "was"]);
    const did = gap(q, "how much I had missed her");
    expect(did).toEqual(["did"]);
    expectGap(did, ["did"], ["do", "had", "could"]);
    const than = gap(q, "the waiter brought the bill");
    expect(than).toEqual(["than"]);
    expectGap(than, ["than"], ["when", "then", "that"]);
  });

  it("pins the hedging: strength on the scale, politeness, tend to, appears, unlikely", () => {
    const q = hedgingAndDegreesOfCertainty.quiz;
    expect(choiceAnswer(q, "the least sure")).toBe("The new road will possibly reduce traffic.");
    expect(choiceAnswer(q, "the most careful way")).toBe("This plan might not be the best option.");
    const tend = gap(q, "spend more time online");
    expect(tend).toEqual(["tend to"]);
    expectGap(tend, ["tend to"], ["tends to", "tend", "usually", "seem to"]);
    const appears = gap(q, "to be in trouble");
    expect(appears).toEqual(["appears"]);
    expectGap(appears, ["appears"], ["appear", "is appearing", "appeared to"]);
    const unlikely = gap(q, "come as planned");
    expect(unlikely).toEqual(["unlikely"]);
    expectGap(unlikely, ["unlikely"], ["likely", "not likely", "probable"]);
  });

  it("pins every mistake item's wrong token and correction", () => {
    expect(mistakes(articlesWithAbstractAndGeneralNouns.quiz)).toEqual([
      ["poors", "poor"],
      ["is", "are"],
      ["a", "the"],
    ]);
    expect(mistakes(advancedLinkers.quiz)).toEqual([
      ["Nevertheless", "Whereas"],
      ["consequently,", "consequence,"],
    ]);
    expect(mistakes(declarativeAndRhetoricalQuestions.quiz)).toEqual([
      ["wants", "want"],
      ["complain", "complaining"],
    ]);
    expect(mistakes(cleftSentences.quiz)).toEqual([
      ["Which", "What"],
      ["which", "who"],
    ]);
    expect(mistakes(inversionAfterNegativeAdverbials.quiz)).toEqual([
      ["wrote", "write"],
      ["saw", "seen"],
    ]);
    expect(mistakes(hedgingAndDegreesOfCertainty.quiz)).toEqual([
      ["rising", "rise"],
      ["what", "that"],
    ]);
  });

  it("pins the mistake sentences", () => {
    const sentences = (t: (typeof topics)[number]) => t.quiz.flatMap((q) => (q.kind === "mistake" ? [q.tokens.join(" ")] : []));
    expect(sentences(articlesWithAbstractAndGeneralNouns)).toEqual([
      "The rich are getting richer and the poors are getting poorer.",
      "The unemployed is people who are looking for work.",
      "My grandfather told me about a life of a soldier in the war.",
    ]);
    expect(sentences(advancedLinkers)).toEqual([
      "Nevertheless my brother loves football, I hate it.",
      "The price of oil went up. As a consequently, many airlines raised their fares.",
    ]);
    expect(sentences(declarativeAndRhetoricalQuestions)).toEqual([
      "Why would anyone wants to live there?",
      "What's the point of complain about it?",
    ]);
    expect(sentences(cleftSentences)).toEqual(["Which I really want is a good night's sleep.", "It was Maria which told me the news."]);
    expect(sentences(inversionAfterNegativeAdverbials)).toEqual([
      "Not only did she wrote the music, but she also sang the songs.",
      "Never have I saw such a mess in my life.",
    ]);
    expect(sentences(hedgingAndDegreesOfCertainty)).toEqual([
      "Prices tend to rising in the summer.",
      "There's a chance what it will rain tomorrow.",
    ]);
  });

  it("defines the new terms once, reuses earlier wording exactly, hedges, and records the source calls", () => {
    const remember = {
      subject: "Remember: the subject is the person or thing that the sentence is about.",
      auxiliary:
        "Remember: an auxiliary is a small verb that goes with another verb, like be in She is working, have in They have finished, do in Do you like it?, and can or will.",
      baseForm: "Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
      clause: "Remember: a clause is a group of words with a subject and a verb.",
      register: "Remember: register means how formal or informal your words are.",
      modal: "Remember: a modal verb is a small verb that goes before the base form of another verb and adds a meaning to it.",
    };
    const art = articlesWithAbstractAndGeneralNouns.explanation;
    expect(art).toContain("<b>abstract noun</b>");
    expect(art).toContain("Remember: an uncountable noun is a thing that we cannot count as one, two, three.");
    expect(art).toContain("Remember: an adjective is a word that tells us more about a noun: what the person or thing is like.");
    expect(plain(art)).toContain("we use the when the listener knows which person or thing we mean");
    expect(plain(art)).toContain("we use no article when we talk about things in general, with plural nouns and uncountable nouns");
    expect(art).toContain("Many abstract nouns are uncountable.");
    expect(art).toContain("doesn't usually make it specific");
    expect(art).toContain("This doesn't change the A2 rule");

    const link = advancedLinkers.explanation;
    expect(link).toContain(remember.clause);
    expect(plain(link)).toContain("a contrast (a different or unexpected idea)");
    expect(link).toContain("It doesn't go before a clause");
    expect(link).toContain("They mean almost the same here.");
    expect(link).toContain("However also fits in sentences like these.");

    const dq = declarativeAndRhetoricalQuestions.explanation;
    expect(dq).toContain("<b>declarative question</b>");
    expect(dq).toContain("<b>rhetorical question</b>");
    expect(dq).toContain(remember.auxiliary);
    expect(dq).toContain(remember.subject);
    expect(dq).toContain("Remember: intonation is the way your voice goes up and down when you speak.");
    expect(dq).toContain("the voice usually goes up at the end (rising)");
    expect(dq).toContain("A positive question often has a negative meaning");

    const cleft = cleftSentences.explanation;
    expect(cleft).toContain("<b>cleft sentence</b>");
    expect(cleft).toContain("<b>Emphasis</b> means making one part of what you say stand out, so that the listener notices it.");
    expect(cleft).toContain(remember.subject);
    expect(cleft).toContain(remember.baseForm);
    expect(cleft).toContain("be is usually is or was");

    const inv = inversionAfterNegativeAdverbials.explanation;
    expect(inv).toContain("<b>negative adverbial</b>");
    expect(inv).toContain("<b>inversion</b>");
    expect(inv).toContain("Remember: emphasis means making one part of what you say stand out, so that the listener notices it.");
    expect(inv).toContain(remember.subject);
    expect(inv).toContain(remember.auxiliary);
    expect(inv).toContain(remember.baseForm);
    expect(inv).toContain(remember.register);
    expect(inv).toContain("the normal order is much more common");
    expect(inv).toContain("We usually use them with the past perfect");

    const hedge = hedgingAndDegreesOfCertainty.explanation;
    expect(hedge).toContain("<b>hedging</b>");
    expect(hedge).toContain(remember.modal);
    expect(hedge).toContain(remember.baseForm);
    expect(plain(hedge)).toContain("use might, may or could when you think that something is possible, but you are not sure");
    expect(hedge).toContain("more than one is often correct");

    expect(articlesWithAbstractAndGeneralNouns.sourceNotes).toContain("# Article");
    expect(advancedLinkers.sourceNotes).toContain("# Linking words");
    expect(advancedLinkers.sourceNotes).toContain("# Linking expression");
    expect(declarativeAndRhetoricalQuestions.sourceNotes).toContain("## Declarative questions");
    expect(declarativeAndRhetoricalQuestions.sourceNotes).toContain("is a declarative question, not a rhetorical one");
    for (const t of [cleftSentences, inversionAfterNegativeAdverbials, hedgingAndDegreesOfCertainty]) expect(t.sourceNotes, t.slug).toContain("(a new point in spec section 8)");
  });

  it("defines each new term in bold only once across the batch", () => {
    const terms = ["abstract noun", "declarative question", "rhetorical question", "cleft sentence", "negative adverbial", "inversion", "hedging"];
    const all = topics.map((t) => t.explanation).join("\n");
    for (const term of terms) expect(all.split(`<b>${term}</b>`).length - 1, term).toBe(1);
  });
});
