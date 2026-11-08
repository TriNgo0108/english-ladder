import { allTopics, findTopic, topicsByLevel, topicsByLevelAndCategory } from "@/content/registry";
import { parseTopic, type RuleTopic } from "@/content/schema";
import { buildSearchIndex, searchTopics } from "@/lib/search-index";
import { c1Topics } from ".";
import { punctuationForRhetoricalEffect } from "./mechanics/punctuation-for-rhetorical-effect";
import { stressAndIntonationForEmphasis } from "./mechanics/stress-and-intonation-for-emphasis";
import { choiceAnswer, distractors, ids, mistakes, plain, quizLengths, stringsIn } from "@/content/test-helpers";

const orderedSlugs = ["punctuation-for-rhetorical-effect", "stress-and-intonation-for-emphasis"];
const topics: RuleTopic[] = [punctuationForRhetoricalEffect, stressAndIntonationForEmphasis];
const punct = punctuationForRhetoricalEffect;
const stress = stressAndIntonationForEmphasis;

/** U+2197 (north east arrow) or U+2198 (south east arrow): never used, because the served fonts have no glyphs for them. */
const ARROW = /[↗↘]/;
const EN_DASH = "–";
const EM_DASH = "—";

const remember = {
  rhetoricalQuestion: "Remember: a rhetorical question is a question that we ask for effect, to make a point, not to get an answer.",
  rhetoricalDevice: "Remember: a rhetorical device is a way of using words that makes a talk or a piece of writing more persuasive, or easier to remember.",
  ellipsis: "Remember: leaving out words that the listener can understand from what came before is called ellipsis.",
  intonation: "Remember: intonation is the way your voice goes up and down when you speak.",
  emphasis: "Remember: emphasis means making one part of what you say stand out, so that the listener notices it.",
  baseForm: "Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
  auxiliary:
    "Remember: an auxiliary is a small verb that goes with another verb, like be in She is working, have in They have finished, do in Do you like it?, and can or will.",
};

const mistakeSentences = (t: RuleTopic) => t.quiz.flatMap((q) => (q.kind === "mistake" ? [q.tokens.join(" ")] : []));
const choices = (t: RuleTopic) => t.quiz.flatMap((q) => (q.kind === "choice" ? [q] : []));

describe("C1 Mechanics, orders 21-22 (part 6)", () => {
  it("registers orders 21-22 as the last C1 topics, each a mechanics rule topic passing the schema", () => {
    orderedSlugs.forEach((slug, i) => {
      const found = findTopic("c1", "mechanics", slug);
      expect(found?.order, slug).toBe(i + 21);
      expect(found?.shape, slug).toBe("rule");
      expect(found?.category, slug).toBe("mechanics");
      expect(found?.level).toBe("c1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(c1Topics).toHaveLength(22);
    expect(c1Topics.slice(20).map((t) => t.slug)).toEqual(orderedSlugs);
    expect(topicsByLevel("c1").map((t) => t.order)).toEqual(Array.from({ length: 22 }, (_, i) => i + 1));
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "punctuation-for-rhetorical-effect": 7,
      "stress-and-intonation-for-emphasis": 7,
    });
  });

  it("pins the families: punctuation for order 21, intonation for order 22", () => {
    expect(punct.family).toBe("punctuation");
    expect(stress.family).toBe("intonation");
  });

  it("links the punctuation chain A1 -> B1 -> C1 and the intonation chain B1 -> C1 in CEFR order on every page", () => {
    expect(ids("c1", "mechanics", "punctuation-for-rhetorical-effect")).toEqual(["a1/capital-letters-and-full-stops", "b1/commas"]);
    expect(ids("a1", "mechanics", "capital-letters-and-full-stops")).toEqual(["b1/commas", "c1/punctuation-for-rhetorical-effect"]);
    expect(ids("b1", "mechanics", "commas")).toEqual(["a1/capital-letters-and-full-stops", "c1/punctuation-for-rhetorical-effect"]);
    expect(ids("b1", "mechanics", "colons-and-semicolons")).toEqual([]);
    expect(ids("c1", "mechanics", "stress-and-intonation-for-emphasis")).toEqual(["b1/question-intonation"]);
    expect(ids("b1", "mechanics", "question-intonation")).toEqual(["c1/stress-and-intonation-for-emphasis"]);
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
      expect(t.explanation, t.slug).not.toContain("/ /");
    }
  });

  it("never copies a pitfall sentence into the quiz", () => {
    const plainText = (s: string) => s.replace(/<\/?b>/g, "");
    for (const t of topics) {
      const pitfall = [plainText(t.pitfall!.wrong), ...plainText(t.pitfall!.right).split(" · ")];
      for (const q of t.quiz) {
        const shown = q.kind === "mistake" ? q.tokens.join(" ") : q.kind === "wordbank" ? q.answer : [q.stem, ...(q.kind === "choice" ? q.options : [])].join(" ");
        for (const p of pitfall) expect(shown, t.slug).not.toContain(p);
      }
    }
  });

  it("tests both topics only with choice and mistake items: no typed gap (punctuation can't be gap-graded) and no wordbank", () => {
    for (const t of topics) {
      for (const q of t.quiz) expect(["choice", "mistake"], t.slug).toContain(q.kind);
    }
  });

  it("reuses the exact earlier wording for each term it relies on, and defines its new terms", () => {
    for (const r of [remember.rhetoricalQuestion, remember.rhetoricalDevice, remember.ellipsis]) expect(punct.explanation).toContain(r);
    for (const r of [remember.intonation, remember.emphasis, remember.baseForm, remember.auxiliary]) expect(stress.explanation).toContain(r);
    expect(findTopic("c1", "speaking", "rhetorical-devices")?.explanation).toContain(remember.rhetoricalQuestion);
    expect(findTopic("c1", "speaking", "rhetorical-devices")?.explanation).toContain(
      "A <b>rhetorical device</b> is a way of using words that makes a talk or a piece of writing more persuasive, or easier to remember.",
    );
    expect(findTopic("b1", "mechanics", "question-intonation")?.explanation).toContain(
      "<b>Intonation</b> is the way your voice goes up and down when you speak.",
    );
    expect(punct.explanation).toContain("A <b>dash</b> (–) is a short line between two words, longer than the hyphen in a three-year contract (order 8).");
    expect(findTopic("c1", "grammar", "complex-noun-phrases")?.explanation).toContain(
      "A <b>hyphen</b> (-) is a very short line that joins two words into one, with no space on either side: three-year.",
    );
    expect(punct.explanation).toContain("an <b>aside</b>: an extra comment that interrupts the sentence");
    expect(stress.explanation).toContain("Saying a word more strongly than the words around it, a little louder and longer, is called <b>stress</b>.");
    expect(stress.explanation).toContain("it is called <b>contrastive stress</b>");
    expect(stress.explanation).toContain("This is called a <b>fall-rise</b>, and we write (fall-rise).");
    for (const t of topics) {
      expect(t.explanation, t.slug).not.toContain("<b>rhetorical question</b>");
      expect(t.explanation, t.slug).not.toContain("<b>ellipsis</b>");
      expect(t.explanation, t.slug).not.toContain("<b>Emphasis</b>");
    }
  });

  it("defines each new term in bold only once across C1", () => {
    const all = c1Topics.map((t) => t.explanation).join("\n");
    for (const term of ["dash", "aside", "reveal", "balanced contrast", "stress", "contrastive stress", "fall-rise", "rhetorical device", "ellipsis"]) {
      expect(all.split(`<b>${term}</b>`).length - 1, term).toBe(1);
    }
  });

  it("records the source calls: Swan for every claim, the EGP's silence on punctuation and pronunciation, the source sections used", () => {
    for (const t of topics) {
      expect(t.sourceNotes, t.slug).toContain("Swan");
      expect(t.sourceNotes, t.slug).toContain("(a new point in spec section 8)");
      expect(t.levelRationale, t.slug).toContain("English Grammar Profile");
    }
    expect(punct.sourceNotes).toContain("# Punctuation: commas, colons and semicolons");
    expect(stress.sourceNotes).toContain("# Pronouncing");
    expect(punct.levelRationale).toContain("orthographic control");
    expect(stress.levelRationale).toContain("phonological control");
  });
});

describe("C1 punctuation for rhetorical effect (order 21)", () => {
  const t = punct;
  const all = JSON.stringify(t);

  it("agrees with B1 commas and colons-and-semicolons: complete sentence before a colon, not after a verb, small letter after it, no semicolon before because, a full stop always correct", () => {
    const text = plain(t.explanation);
    expect(text).toContain("as at b1, a colon comes after a complete sentence");
    expect(text).toContain("a colon doesn't come straight after a verb before a list or a reveal");
    expect(text).toContain("the word after a colon usually has a small letter in british english");
    expect(text).toContain("a semicolon joins two complete sentences");
    expect(text).toContain("no semicolon goes before because");
    expect(text).toContain("a full stop is also correct");
    expect(text).toContain("like the pair of commas around extra information at b1");
    const b1 = plain(findTopic("b1", "mechanics", "colons-and-semicolons")?.explanation ?? "");
    expect(b1).toContain("a full stop is always correct instead of a semicolon between two sentences");
    expect(b1).toContain("don't put a semicolon before because");
  });

  it("hedges British and American dash style, the extra full stop after three dots, the rhetorical question mark and exclamation marks in formal writing", () => {
    const text = plain(t.explanation);
    expect(text).toContain("in british english, it usually has a space on each side");
    expect(text).toContain("in american english, writers usually use a longer dash with no spaces");
    expect(text).toContain("usually with no extra full stop");
    expect(text).toContain("it usually ends with a question mark");
    expect(text).toContain("usually has no exclamation marks");
  });

  it("writes every dash as a spaced en dash (the dash character the site already uses), never an em dash or a spaced hyphen", () => {
    expect(all).not.toContain(EM_DASH);
    expect(all).not.toMatch(/ - /);
    const strings = stringsIn(t, t.slug).map(([, s]) => s.replace(/<\/?b>/g, ""));
    for (const s of strings) {
      for (const m of s.matchAll(new RegExp(EN_DASH, "g"))) {
        const i = m.index ?? 0;
        const spaced = s[i - 1] === " " && s[i + 1] === " ";
        const named = s[i - 1] === "(" && s[i + 1] === ")";
        const range = /[A-C][12]$/.test(s.slice(0, i)) && /^[A-C][12]/.test(s.slice(i + 1));
        expect(spaced || named || range, s).toBe(true);
      }
    }
    expect(findTopic("a2", "grammar", "and-but-so-because")?.levelRationale).toContain(EN_DASH);
  });

  it("pins every choice answer and every distractor (Review Focus 4)", () => {
    const q = t.quiz;
    expect(choiceAnswer(q, "an aside in the middle")).toBe("Our new director – a former footballer, as it happens – starts on Monday.");
    expect(choiceAnswer(q, "like a reveal")).toBe("The investigation found a single cause of the delays: a shortage of trained staff.");
    expect(choiceAnswer(q, "same shape and opposite ideas")).toBe("Last year we talked; this year we must act.");
    expect(choiceAnswer(q, "trailing off")).toBe("I suppose I could lend you the money, but…");
    expect(distractors(t)).toEqual([
      "Our new director – a former footballer, as it happens, starts on Monday.",
      "Our new director: a former footballer, as it happens – starts on Monday.",
      "Our new director; a former footballer, as it happens; starts on Monday.",
      "The investigation found a single cause of the delays; a shortage of trained staff.",
      "The investigation found a single cause of the delays a shortage of trained staff.",
      "The investigation found: a single cause of the delays, a shortage of trained staff.",
      "Last year we talked; because this year we must act.",
      "Last year; we talked, this year we must act.",
      "Last year we talked; this year.",
      "I suppose I could lend you the money, but.",
      "I suppose I could lend you the money, but:",
      "I suppose I could lend you the money; but",
    ]);
  });

  it("never offers two marks that would both be correct: no dash beside the colon or the three dots, no full stop split beside the semicolon", () => {
    const [dash, colon, semicolon, dots] = choices(t);
    expect(dash.stem).toContain("in the middle of the sentence");
    expect(colon.stem).toContain("formal report");
    for (const o of [...colon.options, ...dots.options]) expect(o, o).not.toContain(EN_DASH);
    expect(semicolon.stem).toContain("in one sentence");
    for (const o of semicolon.options) expect(o.replace(/\.$/, ""), o).not.toContain(".");
    for (const o of semicolon.options) expect(o, o).not.toContain(EN_DASH);
    for (const o of dots.options) expect(o, o).not.toContain("?");
  });

  it("pins every mistake item's sentence, wrong token and correction", () => {
    expect(mistakeSentences(t)).toEqual([
      "The one thing missing from the party was: the host.",
      "Why would anyone want to live like this.",
      "Dear Ms Patel, I am pleased to offer you the post of senior editor!! Yours sincerely, Mark Lee",
    ]);
    expect(mistakes(t.quiz)).toEqual([
      ["was:", "was"],
      ["this.", "this?"],
      ["editor!!", "editor."],
    ]);
  });

  it("puts the punctuation inside its word's token, never as a token on its own", () => {
    for (const q of t.quiz) {
      if (q.kind === "mistake") for (const tok of q.tokens) expect(tok, tok).toMatch(/\w/);
    }
  });
});

describe("C1 stress and intonation for emphasis (order 22)", () => {
  const t = stress;
  const all = JSON.stringify(t);

  it("keeps B1's convention: bold for the stressed word, intonation in words, the new (fall-rise), and no arrow glyphs", () => {
    expect(all).not.toMatch(ARROW);
    expect(t.explanation).toContain("As at B1, this site has no sound. The word in bold is the stressed word, where the voice moves.");
    for (const ex of t.examples) expect(ex.sentence, ex.sentence).toMatch(/<b>[^<]+<\/b>/);
    const labels = [...all.matchAll(/\((rising|falling|fall-rise|[a-z-]+ing)\)/g)].map((m) => m[1]);
    expect(new Set(labels)).toEqual(new Set(["rising", "falling", "fall-rise"]));
    expect(plain(t.explanation)).toContain("these rules say usually");
  });

  it("asks every choice item which word carries the stress for a stated meaning, and every option is one word of the quoted sentence", () => {
    for (const q of choices(t)) {
      expect(q.stem, q.stem).toMatch(/Which word carries the (main stress( in B's answer)?|fall-rise)\?$/);
      const quoted = q.stem.match(/(?:You say|B|You answer): ([^:]*?[.!?])(?: \(fall-rise\))? (?:B wants [^?]*\. )?Which word/)?.[1];
      expect(quoted, q.stem).toBeDefined();
      if (quoted === undefined) continue;
      for (const o of q.options) {
        expect(o, q.stem).toMatch(/^\S+$/);
        expect(quoted.split(/[\s.,!?]+/).some((w) => w === o || w === `${o}'s`), `${o} in ${quoted}`).toBe(true);
      }
    }
  });

  it("pins every choice answer and distractor", () => {
    const q = t.quiz;
    expect(choiceAnswer(q, "you didn't tell Maria")).toBe("Maria");
    expect(choiceAnswer(q, "Who's cooking tonight?")).toBe("Sam");
    expect(choiceAnswer(q, "You didn't lock the back door!")).toBe("did");
    expect(choiceAnswer(q, "Thursday and Friday")).toBe("Thursday");
    expect(choiceAnswer(q, "the black coat")).toBe("red");
    expect(distractors(t)).toEqual(["I", "tell", "leaving", "cooking", "tonight", "I", "lock", "it", "I", "can", "stay", "I", "bought", "coat"]);
  });

  it("explains in each choice's feedback what the stress on every distractor would mean", () => {
    for (const q of choices(t)) {
      for (const [i, o] of q.options.entries()) {
        if (i === q.answer) continue;
        expect(q.feedback, `${o}: ${q.stem}`).toMatch(new RegExp(`\\b${o}\\b`));
      }
    }
  });

  it("tests the written form of emphatic do in the mistake items, with I and we so that deleting do can't also fix the sentence", () => {
    expect(mistakeSentences(t)).toEqual(["I do likes your new haircut, honestly.", "We do wants to help, but we're too busy this week."]);
    expect(mistakes(t.quiz)).toEqual([
      ["likes", "like"],
      ["wants", "want"],
    ]);
    for (const q of t.quiz) {
      if (q.kind !== "mistake") continue;
      expect(["I", "We"]).toContain(q.tokens[0]);
      expect(q.tokens[1]).toBe("do");
      expect(q.wrongIndex).toBe(2);
    }
  });

  it("teaches the base form after do, does and did, and no do with be or an auxiliary", () => {
    const text = plain(t.explanation);
    expect(text).toContain("the main verb after it is always the base form");
    expect(text).toContain("he does know, not he does knows, and we did go, not we did went");
    expect(text).toContain("in a statement, when the verb is be, or when the sentence already has an auxiliary, we don't add do");
    expect(text).toContain("i didn't say he took it");
    expect(t.explanation).toContain("The room was <b>clean</b>… (fall-rise)");
  });
});

describe("form strings corpus", () => {
  it("keeps every form string in the corpus plain text, because form lines render as text, not markup", () => {
    const withForm = allTopics.flatMap((t) => (t.shape === "rule" && t.form ? [[t.slug, t.form] as const] : []));
    expect(withForm.length).toBeGreaterThan(50);
    expect(withForm.filter(([, f]) => /<[^>]*>/.test(f)).map(([slug]) => slug)).toEqual([]);
  });
});

describe("C1 arrows corpus", () => {
  it("has no rising or falling arrow glyph anywhere in C1", () => {
    const strings = c1Topics.flatMap((topic) => stringsIn(topic, topic.slug));
    expect(strings.length).toBeGreaterThan(500);
    expect(strings.filter(([, s]) => ARROW.test(s)).map(([p]) => p)).toEqual([]);
  });
});

describe("C1 level surfaces", () => {
  it("has Grammar 11, Phrases & Expressions 3, Writing 2, Speaking 4, Mechanics 2, and no vocabulary", () => {
    const counts = Object.fromEntries(
      (["grammar", "vocabulary", "phrases", "writing", "speaking", "mechanics"] as const).map((c) => [c, topicsByLevelAndCategory("c1", c).length]),
    );
    expect(counts).toEqual({ grammar: 11, vocabulary: 0, phrases: 3, writing: 2, speaking: 4, mechanics: 2 });
  });

  it("puts 153 topics in the corpus and the search index: 26 + 28 + 44 + 33 + 22", () => {
    const perLevel = Object.fromEntries((["a1", "a2", "b1", "b2", "c1"] as const).map((l) => [l, topicsByLevel(l).length]));
    expect(perLevel).toEqual({ a1: 26, a2: 28, b1: 44, b2: 33, c1: 22 });
    expect(allTopics).toHaveLength(153);
    expect(buildSearchIndex(allTopics)).toHaveLength(153);
  });

  it("finds the C1 subjunctive topic when searching subjunctive", () => {
    const hits = searchTopics(buildSearchIndex(allTopics), "subjunctive");
    expect(hits[0]?.href).toBe("/c1/grammar/the-subjunctive-and-unreal-past/");
    expect(hits.map((h) => h.level)).toContain("c1");
  });
});
