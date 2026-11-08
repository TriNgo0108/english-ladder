import { allTopics, findTopic, topicsByLevel, topicsByLevelAndCategory } from "@/content/registry";
import { parseTopic, type PhraseTopic } from "@/content/schema";
import { c1Topics } from ".";
import { chairingAMeeting } from "./speaking/chairing-a-meeting";
import { diplomaticLanguageAndNegotiating } from "./speaking/diplomatic-language-and-negotiating";
import { handlingPushback } from "./speaking/handling-pushback";
import { rhetoricalDevices } from "./speaking/rhetorical-devices";
import { discursiveAndArgumentativeWriting } from "./writing/discursive-and-argumentative-writing";
import { formalReportsAndExecutiveSummaries } from "./writing/formal-reports-and-executive-summaries";
import { answerSentences, choiceAnswer, distractors, expectGap, gap, ids, mistakes, plain, quizLengths, wordbankAnswers } from "@/content/test-helpers";

const writingSlugs = ["discursive-and-argumentative-writing", "formal-reports-and-executive-summaries"];
const speakingSlugs = ["chairing-a-meeting", "diplomatic-language-and-negotiating", "handling-pushback", "rhetorical-devices"];
const topics: PhraseTopic[] = [
  discursiveAndArgumentativeWriting,
  formalReportsAndExecutiveSummaries,
  chairingAMeeting,
  diplomaticLanguageAndNegotiating,
  handlingPushback,
  rhetoricalDevices,
];

const reg = (t: PhraseTopic, phrase: string) => t.situations.find((s) => s.phrases.includes(phrase))?.register;
const situationNames = (t: PhraseTopic) => t.situations.map((s) => s.situation);
const phraseTopic = (level: "a2" | "b1" | "b2", category: "speaking" | "writing", slug: string): PhraseTopic => {
  const found = findTopic(level, category, slug);
  if (found?.shape !== "phrases") throw new Error(`${level}/${slug} missing`);
  return found;
};

const remember = {
  register: "Remember: register means how formal or informal your words are.",
  concession: "Remember: accepting that one fact is true, while saying that it doesn't change your main point, is called concession.",
  hedging: "Remember: making a statement less strong or less sure is called hedging.",
  modalVerb: "Remember: a modal verb is a small verb that goes before the base form of another verb and adds a meaning to it.",
  baseForm: "Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
  rhetorical: "Remember: a rhetorical question is a question that we ask for effect, to make a point, not to get an answer.",
};
const B2_RHETORICAL = "A <b>rhetorical question</b> is a question that we ask for effect, to make a point, not to get an answer.";
const SUBJUNCTIVE = "The base form used like this is called the subjunctive";
const IMPERATIVE = "We use the imperative to tell someone to do something";

describe("C1 Writing and Speaking (part 5)", () => {
  it("registers orders 15-16 as writing and 17-20 as speaking phrases topics, in sequence, passing the schema", () => {
    [...writingSlugs, ...speakingSlugs].forEach((slug, i) => {
      const category = i < 2 ? "writing" : "speaking";
      const found = findTopic("c1", category, slug);
      expect(found?.order, slug).toBe(i + 15);
      expect(found?.shape, slug).toBe("phrases");
      expect(found?.level).toBe("c1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(c1Topics.slice(14, 20).map((t) => t.slug)).toEqual([...writingSlugs, ...speakingSlugs]);
    expect(topicsByLevelAndCategory("c1", "writing").map((t) => t.slug)).toEqual(writingSlugs);
    expect(topicsByLevelAndCategory("c1", "speaking").map((t) => t.slug)).toEqual(speakingSlugs);
    expect(topicsByLevel("c1").slice(0, 20).map((t) => t.order)).toEqual(Array.from({ length: 20 }, (_, i) => i + 1));
    expect(allTopics.filter((t) => t.level === "c1" && t.category === "vocabulary")).toHaveLength(0);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "discursive-and-argumentative-writing": 6,
      "formal-reports-and-executive-summaries": 6,
      "chairing-a-meeting": 6,
      "diplomatic-language-and-negotiating": 6,
      "handling-pushback": 6,
      "rhetorical-devices": 6,
    });
  });

  it("pins the families: summarising for order 16, agreeing-and-disagreeing for order 19, none for the rest", () => {
    expect(formalReportsAndExecutiveSummaries.family).toBe("summarising");
    expect(handlingPushback.family).toBe("agreeing-and-disagreeing");
    for (const t of [discursiveAndArgumentativeWriting, chairingAMeeting, diplomaticLanguageAndNegotiating, rhetoricalDevices]) {
      expect(t.family, t.slug).toBeUndefined();
      expect(ids("c1", t.category, t.slug), t.slug).toEqual([]);
    }
  });

  it("links summarising B2 <-> C1 and agreeing-and-disagreeing B1 <-> C1 on every page", () => {
    expect(ids("c1", "writing", "formal-reports-and-executive-summaries")).toEqual(["b2/summarising-and-adding-points"]);
    expect(ids("b2", "writing", "summarising-and-adding-points")).toEqual(["c1/formal-reports-and-executive-summaries"]);
    expect(ids("c1", "speaking", "handling-pushback")).toEqual(["b1/agreeing-and-disagreeing"]);
    expect(ids("b1", "speaking", "agreeing-and-disagreeing")).toEqual(["c1/handling-pushback"]);
  });

  it("gives every topic a short summary that doesn't open with a definition, no IPA, and scrambled wordbanks", () => {
    for (const t of topics) {
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
      expect(t.summary, t.slug).not.toMatch(/^[\w -]{0,40}(is|are|means) (a|an|the|when|how)/i);
      expect(t.explanation, t.slug).not.toContain("/ /");
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" "), t.slug).not.toBe(q.answer);
      }
    }
  });

  it("gives each topic at least 3 uniquely named situations", () => {
    for (const t of topics) {
      expect(t.situations.length, t.slug).toBeGreaterThanOrEqual(3);
      const names = situationNames(t);
      expect(new Set(names).size, t.slug).toBe(names.length);
    }
  });

  it("never copies a quiz answer word for word from the topic's phrases or explanation", () => {
    for (const t of topics) {
      const source = plain([t.explanation, ...t.situations.flatMap((s) => s.phrases)].join(" "));
      for (const sentence of answerSentences(t)) expect(source, `${t.slug}: ${sentence}`).not.toContain(plain(sentence));
    }
  });

  it("reuses the exact earlier wording for register, concession, hedging, the modal verb, the base form, the subjunctive, the imperative and the rhetorical question", () => {
    for (const t of topics) expect(t.explanation, t.slug).toContain(remember.register);
    expect(discursiveAndArgumentativeWriting.explanation).toContain(remember.concession);
    expect(discursiveAndArgumentativeWriting.explanation).toContain(remember.hedging);
    expect(handlingPushback.explanation).toContain(remember.concession);
    expect(diplomaticLanguageAndNegotiating.explanation).toContain(remember.modalVerb);
    expect(diplomaticLanguageAndNegotiating.explanation).toContain(remember.hedging);
    expect(formalReportsAndExecutiveSummaries.explanation).toContain(remember.baseForm);
    expect(formalReportsAndExecutiveSummaries.explanation).toContain(SUBJUNCTIVE);
    expect(plain(rhetoricalDevices.explanation)).toContain(plain(IMPERATIVE));
    expect(plain(findTopic("a1", "grammar", "imperatives")?.explanation ?? "")).toContain(plain(IMPERATIVE));
    expect(rhetoricalDevices.explanation).toContain(remember.rhetorical);
    expect(findTopic("b2", "grammar", "declarative-and-rhetorical-questions")?.explanation).toContain(B2_RHETORICAL);
    for (const t of topics) {
      expect(t.explanation, t.slug).not.toContain("<b>rhetorical question</b>");
      expect(t.explanation, t.slug).not.toContain("is called <b>hedging</b>");
      expect(t.explanation, t.slug).not.toContain("<b>Register</b> means");
    }
  });

  it("defines each new term in bold only once across C1", () => {
    const all = c1Topics.map((t) => t.explanation).join("\n");
    for (const term of ["discursive essay", "argumentative essay", "formal report", "executive summary", "chair", "agenda", "action point", "recap", "negotiation", "Pushback", "rhetorical device"]) {
      expect(all.split(`<b>${term}</b>`).length - 1, term).toBe(1);
    }
    for (const term of ["concession", "discourse marker", "subjunctive", "ellipsis", "metaphor"]) {
      expect(all.split(`<b>${term}</b>`).length - 1, term).toBe(1);
    }
  });

  it("links back only to earlier C1 orders, citing order 10 for Admittedly and Granted and order 9 for much as", () => {
    const d = discursiveAndArgumentativeWriting.explanation;
    expect(d).toContain("<b>Admittedly</b> and <b>Granted</b> (order 10)");
    expect(d).toContain("<b>Although</b> … (order 9)");
    expect(d).toContain("<b>Much as</b> (order 9)");
    expect(d).toContain("order 3");
    expect(formalReportsAndExecutiveSummaries.explanation).toContain("order 2");
    expect(formalReportsAndExecutiveSummaries.explanation).toContain("order 3");
    expect(diplomaticLanguageAndNegotiating.explanation).toContain("order 1");
    expect(diplomaticLanguageAndNegotiating.explanation).toContain("order 2");
    expect(handlingPushback.explanation).toContain("Granted (order 10)");
    for (const t of topics) {
      for (const m of t.explanation.matchAll(/order (\d+)/g)) expect(Number(m[1]), t.slug).toBeLessThan(t.order);
    }
  });

  it("keeps register labels consistent with earlier topics", () => {
    const b2Summarising = phraseTopic("b2", "writing", "summarising-and-adding-points");
    const b1Agreeing = phraseTopic("b1", "speaking", "agreeing-and-disagreeing");
    const b1Indirect = phraseTopic("b1", "speaking", "indirect-and-polite-questions");
    const r = formalReportsAndExecutiveSummaries;
    expect(reg(b2Summarising, "In short, we need more time.")).toBe("neutral");
    expect(reg(r, "In short, the new system has saved time.")).toBe("neutral");
    expect(reg(b2Summarising, "To sum up, the new system is cheaper and faster.")).toBe("neutral");
    expect(reg(r, "To sum up, the trial was a success.")).toBe("neutral");
    expect(reg(r, "In brief, staff want more flexible hours and better parking.")).toBe("neutral");
    expect(reg(b2Summarising, "In conclusion, the evidence shows that the plan will work.")).toBe("formal");
    expect(reg(r, "In conclusion, the trial should be extended to all offices.")).toBe("formal");
    expect(reg(discursiveAndArgumentativeWriting, "In conclusion, the evidence suggests that the ban would work.")).toBe("formal");
    expect(reg(b2Summarising, "In summary, there are three main reasons for the fall in sales.")).toBe("formal");
    expect(reg(r, "In summary, the new system has reduced costs by fifteen per cent.")).toBe("formal");

    const p = handlingPushback;
    expect(reg(b1Agreeing, "I take your point, but I still think we should wait.")).toBe("neutral");
    expect(reg(p, "I take your point, but I still think we should launch in May.")).toBe("neutral");
    expect(reg(b1Agreeing, "That's true, but it costs a lot.")).toBe("neutral");
    expect(reg(p, "That's true, but we can't wait any longer.")).toBe("neutral");
    expect(reg(b1Agreeing, "I'm afraid I see it differently.")).toBe("formal");
    expect(reg(p, "I'm afraid I see it differently.")).toBe("formal");
    expect(reg(p, "I understand your concern.")).toBe("neutral");
    expect(reg(phraseTopic("b2", "speaking", "answering-difficult-questions"), "I understand your concern.")).toBe("neutral");
    expect(reg(p, "That's a fair point.")).toBe("neutral");
    expect(reg(phraseTopic("b2", "speaking", "giving-and-receiving-feedback"), "That's a fair point.")).toBe("neutral");

    const dl = diplomaticLanguageAndNegotiating;
    expect(reg(b1Indirect, "Would it be possible to change my appointment?")).toBe("neutral");
    expect(reg(dl, "Would it be possible to extend the deadline?")).toBe("neutral");
    expect(reg(b1Indirect, "Could you possibly help me with this box?")).toBe("neutral");
    expect(reg(dl, "Could you possibly bring the price down a little?")).toBe("neutral");
    expect(reg(b1Indirect, "I was wondering if you could help me.")).toBe("formal");
    expect(reg(dl, "I was wondering if you could send us a revised offer.")).toBe("formal");
    expect(reg(dl, "I was wondering whether you might consider a longer contract.")).toBe("formal");

    for (const t of topics) {
      for (const s of t.situations) {
        for (const ph of s.phrases) {
          if (/^Thanks/.test(ph)) expect(s.register, `${t.slug}: ${ph}`).toBe("informal");
          if (/by the way/i.test(ph)) expect(s.register, `${t.slug}: ${ph}`).toBe("informal");
          if (/^I would like/.test(ph)) expect(s.register, `${t.slug}: ${ph}`).toBe("neutral");
          if (/^I was wondering/.test(ph)) {
            expect(s.register, `${t.slug}: ${ph}`).toBe("formal");
            expect(ph, `${t.slug}: ${ph}`).toMatch(/\.$/);
          }
          if (/^(With respect|In conclusion|In summary)/.test(ph)) expect(s.register, `${t.slug}: ${ph}`).toBe("formal");
          if (/^(In short|To sum up|In brief|On balance|Admittedly|Granted)/.test(ph)) expect(s.register, `${t.slug}: ${ph}`).toBe("neutral");
        }
      }
    }
    for (const s of discursiveAndArgumentativeWriting.situations) expect(s.register, s.situation).not.toBe("informal");
    for (const s of formalReportsAndExecutiveSummaries.situations) expect(s.register, s.situation).not.toBe("informal");
  });

  it("pins discursive and argumentative writing: both sides, a concession, your view and On balance", () => {
    const t = discursiveAndArgumentativeWriting;
    for (const n of ["Introducing the issue", "Presenting one side", "Presenting the other side", "Conceding a point", "Giving your view", "Concluding"]) {
      expect(situationNames(t)).toContain(n);
    }
    expect(reg(t, "It is often argued that social media does more harm than good.")).toBe("formal");
    expect(reg(t, "Proponents of free tuition argue that education benefits the whole of society.")).toBe("formal");
    expect(reg(t, "Admittedly, free tuition would be expensive.")).toBe("neutral");
    expect(reg(t, "I would contend that the ban is long overdue.")).toBe("formal");
    expect(reg(t, "In my view, the benefits clearly outweigh the costs.")).toBe("neutral");
    expect(reg(t, "On balance, the arguments for free tuition are stronger.")).toBe("neutral");
    expect(choiceAnswer(t.quiz, "support a four-day working week")).toBe("Proponents of a four-day week argue that it makes staff more productive.");
    expect(choiceAnswer(t.quiz, "accept a point against your view")).toBe("Admittedly, a four-day week would not suit every business.");
    expect(distractors(t)).toEqual([
      "Loads of people reckon a four-day week is a great idea.",
      "On balance, a four-day week would be a sensible change.",
      "Critics, on the other hand, say that it would be too costly.",
      "In conclusion, a four-day week should be introduced.",
      "Furthermore, staff would have more time with their families.",
      "Proponents of a four-day week argue that staff would be happier.",
    ]);
    const on = gap(t.quiz, "___ balance, however");
    expect(on).toEqual(["on"]);
    expectGap(on, ["on", "On"], ["in", "at", "by", "for"]);
    const as = gap(t.quiz, "Much ___ I sympathise");
    expect(as).toEqual(["as"]);
    expectGap(as, ["as", "As"], ["though", "that", "so", "like"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["It is often argued that tourism damages local communities."]);
    expect(mistakes(t.quiz)).toEqual([["Admitted,", "Admittedly,"]]);
  });

  it("pins formal reports: purpose, method with data was or were, findings, the order 2 subjunctive, and the executive summary", () => {
    const t = formalReportsAndExecutiveSummaries;
    for (const n of ["Stating the purpose", "Describing the method", "Presenting the findings", "Making recommendations", "Opening an executive summary"]) {
      expect(situationNames(t)).toContain(n);
    }
    expect(reg(t, "This report aims to assess the need for a new staff canteen.")).toBe("formal");
    expect(reg(t, "Data was collected from 200 staff in three offices.")).toBe("formal");
    expect(reg(t, "It is recommended that the company adopt flexible working hours.")).toBe("formal");
    expect(t.explanation).toContain("Data was and data were are both correct");
    expect(t.explanation).toContain("<b>should adopt</b>");
    expect(choiceAnswer(t.quiz, "recommendations section")).toBe("It is recommended that the company introduce flexible hours.");
    expect(choiceAnswer(t.quiz, "method section")).toBe("Interviews were held with twelve store managers.");
    expect(distractors(t)).toEqual([
      "The company should totally go for flexible hours!",
      "It was found that most staff would like flexible hours.",
      "Data was collected from 200 members of staff.",
      "It was found that sales had fallen in every region.",
      "The survey revealed that most staff were happy.",
      "It is recommended that the store open later.",
    ]);
    // Review Focus 1: every subjunctive gap accepts the bare form and should + the bare form.
    const build = gap(t.quiz, "the council ___ a new cycle lane");
    expect(build).toEqual(["build", "should build"]);
    expectGap(build, ["build", "should build", "Build"], ["built", "building", "to build", "would build"]);
    const was = gap(t.quiz, "Data ___ collected");
    expect(was).toEqual(["was", "were"]);
    expectGap(was, ["was", "were", "Were"], ["is", "are", "been", "has"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["This report aims to examine the causes of staff absence."]);
    expect(mistakes(t.quiz)).toEqual([["adopting", "adopt"]]);
    // No mistake item makes the indicative its wrong token.
    for (const [wrong] of mistakes(t.quiz)) expect(wrong).not.toMatch(/s$/);
  });

  it("pins chairing a meeting: the agenda, bringing people in, keeping on track, action points and closing", () => {
    const t = chairingAMeeting;
    for (const n of ["Opening the meeting and stating its purpose", "Bringing people in", "Keeping the meeting on track", "Recapping and checking agreement", "Agreeing action points", "Closing the meeting"]) {
      expect(situationNames(t)).toContain(n);
    }
    expect(reg(t, "The purpose of today's meeting is to plan the summer sale.")).toBe("neutral");
    expect(reg(t, "Could we hear from the sales team?")).toBe("neutral");
    expect(reg(t, "Let's park that for now.")).toBe("informal");
    expect(reg(t, "So, to recap, we've agreed to delay the launch.")).toBe("neutral");
    expect(reg(t, "Who's going to take that on?")).toBe("neutral");
    expect(reg(t, "If there is no other business, I declare the meeting closed.")).toBe("formal");
    expect(t.situations.flatMap((s) => s.phrases)).not.toContain("So we're agreed, then?");
    expect(choiceAnswer(t.quiz, "not on the agenda")).toBe("That's an interesting point, but it's not on today's agenda. Let's come back to it at the end.");
    expect(choiceAnswer(t.quiz, "new booking system")).toBe("Who's going to take that on?");
    expect(choiceAnswer(t.quiz, "shareholders")).toBe("Good morning, ladies and gentlemen. Shall we begin?");
    expect(distractors(t)).toEqual([
      "Be quiet, both of you!",
      "Who's going to take that on?",
      "Is there any other business?",
      "Shall we get started?",
      "Could you let Maria finish, please?",
      "What's the purpose of today's meeting?",
      "Right, guys, let's crack on.",
      "OK, back to the budget.",
      "Let's park that for now.",
    ]);
    const hear = gap(t.quiz, "Could we ___ from you");
    expect(hear).toEqual(["hear"]);
    expectGap(hear, ["hear", "Hear"], ["here", "listen", "speak", "heard"]);
    const business = gap(t.quiz, "any other ___");
    expect(business).toEqual(["business"]);
    expectGap(business, ["business", "Business"], ["businesses", "questions", "point", "item"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["The purpose of today's meeting is to choose a new supplier."]);
    expect(mistakes(t.quiz)).toEqual([]);
  });

  it("pins diplomatic language: softening with order 1 modals and B2 hedges, conditional offers, saying no politely", () => {
    const t = diplomaticLanguageAndNegotiating;
    for (const n of ["Softening a problem", "Making a conditional offer", "Saying no politely", "Moving towards an agreement"]) {
      expect(situationNames(t)).toContain(n);
    }
    expect(reg(t, "That might be difficult.")).toBe("neutral");
    expect(reg(t, "If you could pay within thirty days, we'd be prepared to offer a five per cent discount.")).toBe("neutral");
    expect(reg(t, "I'm not sure we can go that far.")).toBe("neutral");
    expect(reg(t, "Unfortunately, we are not in a position to accept those terms.")).toBe("formal");
    expect(t.explanation).toContain("it is not a question, so it ends with a full stop");
    expect(choiceAnswer(t.quiz, "twenty per cent discount")).toBe("I'm not sure we can go that far, but we could look at ten per cent.");
    expect(choiceAnswer(t.quiz, "at least 100 boxes")).toBe("We'd be prepared to offer free delivery if you could order at least 100 boxes.");
    expect(distractors(t)).toEqual([
      "No. That's a ridiculous request.",
      "Sure, no problem!",
      "Whatever you think is best.",
      "Free delivery is impossible, I'm afraid.",
      "We offered free delivery to all our customers last year.",
      "Could you order 100 boxes?",
    ]);
    const prepared = gap(t.quiz, "we'd be ___ to cover");
    expect(prepared).toEqual(["prepared"]);
    expectGap(prepared, ["prepared", "Prepared"], ["prepare", "preparing", "preparation", "prepares"]);
    const slightly = gap(t.quiz, "Your price is ___ higher");
    expect(slightly).toEqual(["slightly"]);
    expectGap(slightly, ["slightly", "Slightly"], ["slight", "slighter", "slightest", "much"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["Would it be possible to move the deadline to Friday?"]);
    expect(mistakes(t.quiz)).toEqual([["will", "is"]]);
  });

  it("pins handling pushback: acknowledge, stand your ground, concede part, move forward", () => {
    const t = handlingPushback;
    for (const n of ["Acknowledging the other person's point", "Standing your ground", "Conceding part of the point", "Moving the discussion forward"]) {
      expect(situationNames(t)).toContain(n);
    }
    expect(reg(t, "I take your point.")).toBe("neutral");
    expect(reg(t, "I hear you, but I still think we should go ahead.")).toBe("informal");
    expect(reg(t, "Fair enough, but it's still worth a try.")).toBe("informal");
    expect(reg(t, "With respect, I don't think that's quite right.")).toBe("formal");
    expect(reg(t, "You're right that it's expensive, but it'll save us money in the long run.")).toBe("neutral");
    expect(t.explanation).toContain("agree to differ in British English");
    expect(choiceAnswer(t.quiz, "costs too much")).toBe("You're right that it costs a lot, but it will pay for itself within two years.");
    expect(choiceAnswer(t.quiz, "senior client")).toBe("With respect, I don't think that's quite right. Can I show you where the figures come from?");
    expect(choiceAnswer(t.quiz, "close friend")).toBe("Fair enough, it's a bit pricey, but it'll be worth it.");
    expect(distractors(t)).toEqual([
      "You're wrong. It isn't expensive at all.",
      "You're right. Let's forget about the plan.",
      "No way!",
      "Rubbish! The figures are fine.",
      "Sorry, you're right. I'll change them.",
      "I couldn't agree more.",
      "With respect, I see it differently.",
      "I'm afraid that is not something I can agree to.",
      "Your concern has been noted.",
    ]);
    const that = gap(t.quiz, "You're right ___ the deadline");
    expect(that).toEqual(["that"]);
    expectGap(that, ["that", "That"], ["about", "what", "which", "because"]);
    const disagree = gap(t.quiz, "agree to ___");
    expect(disagree).toEqual(["disagree", "differ"]);
    expectGap(disagree, ["disagree", "differ", "Disagree"], ["disagreeing", "different", "argue", "agree"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["I can understand why you feel that way."]);
    expect(mistakes(t.quiz)).toEqual([]);
  });

  it("pins rhetorical devices: situations named by purpose, and one device per choice", () => {
    const t = rhetoricalDevices;
    for (const n of ["Opening a talk", "Making a point memorable", "Setting two ideas side by side", "Bringing the audience in", "Ending strongly"]) {
      expect(situationNames(t)).toContain(n);
    }
    expect(reg(t, "This is not a problem but an opportunity.")).toBe("neutral");
    expect(reg(t, "Ladies and gentlemen, what kind of world do we want to leave to our children?")).toBe("formal");
    expect(t.explanation).toContain("a negative question often has a positive one");
    expect(choiceAnswer(t.quiz, "rule of three")).toBe("Our new app is fast, simple and free.");
    expect(choiceAnswer(t.quiz, "direct address")).toBe("Imagine driving to work without sitting in a single traffic jam.");
    expect(choiceAnswer(t.quiz, "Who doesn't want to pay less")).toBe("Everyone wants to pay less for energy.");
    expect(choiceAnswer(t.quiz, "We came to listen")).toBe("repetition");
    expect(distractors(t)).toEqual([
      "Our new app is very fast.",
      "Is there anyone who doesn't like a fast app?",
      "Our app is not slow but fast.",
      "Traffic in this city is bad.",
      "In conclusion, traffic is a serious problem.",
      "Traffic data was collected in 2024.",
      "Nobody wants to pay less for energy.",
      "The speaker wants someone in the audience to answer.",
      "The speaker doesn't know who wants to pay less.",
      "a contrast pair with not … but …",
      "a rhetorical question",
      "direct address with Imagine",
    ]);
    const but = gap(t.quiz, "not a threat to our business ___");
    expect(but).toEqual(["but", "rather"]);
    expectGap(but, ["but", "rather", "But"], ["and", "or", "yet", "nor"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["Imagine a school where every child feels safe."]);
    expect(mistakes(t.quiz)).toEqual([]);
  });

  it("fuses movable words into multi-word tiles so every wordbank has exactly one order", () => {
    const tiles = (t: PhraseTopic) => t.quiz.flatMap((q) => (q.kind === "wordbank" ? q.words : []));
    expect(tiles(discursiveAndArgumentativeWriting)).toEqual(expect.arrayContaining(["often argued", "local communities."]));
    expect(tiles(formalReportsAndExecutiveSummaries)).toContain("staff absence.");
    expect(tiles(chairingAMeeting)).toContain("a new supplier.");
    expect(tiles(rhetoricalDevices)).toEqual(expect.arrayContaining(["a school", "where every child", "feels safe."]));
    for (const t of topics) {
      for (const w of tiles(t)) expect(w, t.slug).not.toMatch(/^(often|local|staff|new|every)$/);
    }
  });

  it("names the form in every one-word gap cue, and no feedback accepts a word the gap rejects", () => {
    const d = diplomaticLanguageAndNegotiating;
    expect(d.quiz.some((q) => q.kind === "gap" && q.stem.endsWith("(a form of the word prepare, one word)"))).toBe(true);
    expect(d.quiz.some((q) => q.kind === "gap" && q.stem.endsWith("(a form of the word slight, one word)"))).toBe(true);
    expect(JSON.stringify(d.quiz)).not.toMatch(/also possible in this sentence/);
    for (const t of [discursiveAndArgumentativeWriting, formalReportsAndExecutiveSummaries]) {
      expect(t.explanation, t.slug).not.toContain("impersonal passive");
      expect(plain(t.explanation), t.slug).toContain("it + a passive verb + a that clause, as in order 3");
    }
    expect(plain(findTopic("c1", "grammar", "impersonal-and-passive-constructions")?.explanation ?? "")).toContain("it + a passive verb + a that clause");
  });

  it("names its sources and level evidence", () => {
    for (const t of topics) {
      expect(t.sourceNotes, t.slug).toContain("Swan");
      expect(t.levelRationale, t.slug).toContain("CEFR");
    }
    expect(discursiveAndArgumentativeWriting.sourceNotes).toContain("(a new point in spec section 8)");
    expect(formalReportsAndExecutiveSummaries.sourceNotes).toContain("## Summarizing");
    expect(chairingAMeeting.sourceNotes).toContain("# Statements");
    expect(diplomaticLanguageAndNegotiating.sourceNotes).toContain("# Polite vs direct");
    expect(handlingPushback.sourceNotes).toContain("# Agreeing and disagreeing");
    expect(rhetoricalDevices.sourceNotes).toContain("## Rhetorical questions");
  });
});
