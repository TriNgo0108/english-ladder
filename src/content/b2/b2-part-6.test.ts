import { allTopics, findTopic, topicsByLevel, topicsByLevelAndCategory } from "@/content/registry";
import { parseTopic, type PhraseTopic } from "@/content/schema";
import { b2Topics } from ".";
import { answeringDifficultQuestions } from "./speaking/answering-difficult-questions";
import { breakingBadNews } from "./speaking/breaking-bad-news";
import { checkingForApproval } from "./speaking/checking-for-approval";
import { givingAPresentation } from "./speaking/giving-a-presentation";
import { givingAndReceivingFeedback } from "./speaking/giving-and-receiving-feedback";
import { answerSentences, choiceAnswer, expectGap, gap, ids, mistakes, plain, quizLengths, wordbankAnswers } from "@/content/test-helpers";

const slugs = [
  "giving-a-presentation",
  "giving-and-receiving-feedback",
  "breaking-bad-news",
  "answering-difficult-questions",
  "checking-for-approval",
];
const topics: PhraseTopic[] = [givingAPresentation, givingAndReceivingFeedback, breakingBadNews, answeringDifficultQuestions, checkingForApproval];

const reg = (t: PhraseTopic, phrase: string) => t.situations.find((s) => s.phrases.includes(phrase))?.register;
const situationNames = (t: PhraseTopic) => t.situations.map((s) => s.situation);
const phraseTopic = (level: "a2" | "b1" | "b2", category: "speaking" | "writing", slug: string): PhraseTopic => {
  const found = findTopic(level, category, slug);
  if (found?.shape !== "phrases") throw new Error(`${level}/${slug} missing`);
  return found;
};

const REGISTER = "Remember: register means how formal or informal your words are.";
const GERUND = "Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund.";
const HEDGING = "Remember: making a statement less strong or less sure is called hedging.";
const DECLARATIVE = "a question with the word order of a statement";

describe("B2 Speaking (part 6)", () => {
  it("registers orders 29-33 as speaking phrases topics, in sequence, passing the schema", () => {
    slugs.forEach((slug, i) => {
      const found = findTopic("b2", "speaking", slug);
      expect(found?.order, slug).toBe(i + 29);
      expect(found?.shape).toBe("phrases");
      expect(found?.level).toBe("b2");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b2Topics.slice(28, 33).map((t) => t.slug)).toEqual(slugs);
    expect(topicsByLevelAndCategory("b2", "speaking").map((t) => t.slug)).toEqual(slugs);
  });

  it("completes B2 at 33 topics: 21 grammar, 3 phrases, 4 writing, 5 speaking, no mechanics or vocabulary", () => {
    expect(b2Topics).toHaveLength(33);
    expect(topicsByLevel("b2")).toHaveLength(33);
    expect(topicsByLevel("b2").map((t) => t.order)).toEqual(Array.from({ length: 33 }, (_, i) => i + 1));
    const count = (c: string) =>
      allTopics.filter((t) => t.level === "b2" && t.category === c).length;
    expect([count("grammar"), count("phrases"), count("writing"), count("speaking")]).toEqual([21, 3, 4, 5]);
    expect(count("mechanics")).toBe(0);
    expect(count("vocabulary")).toBe(0);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "giving-a-presentation": 6,
      "giving-and-receiving-feedback": 6,
      "breaking-bad-news": 6,
      "answering-difficult-questions": 6,
      "checking-for-approval": 6,
    });
  });

  it("gives all five speaking topics no family and no cross-level siblings", () => {
    for (const t of topics) {
      expect(t.family, t.slug).toBeUndefined();
      expect(ids("b2", "speaking", t.slug), t.slug).toEqual([]);
    }
  });

  it("gives every topic a short summary, no IPA, and scrambles every wordbank", () => {
    for (const t of topics) {
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
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

  it("reuses the exact earlier wording for register, the gerund, hedging and the declarative question, and redefines none", () => {
    for (const t of topics) {
      expect(t.explanation, t.slug).toContain(REGISTER);
      expect(t.explanation, t.slug).not.toContain("<b>Register</b> means");
      expect(t.explanation, t.slug).not.toContain("is called <b>hedging</b>");
      expect(t.explanation, t.slug).not.toContain("is called a <b>declarative question</b>");
    }
    expect(givingAndReceivingFeedback.explanation).toContain(GERUND);
    expect(givingAndReceivingFeedback.explanation).toContain(HEDGING);
    expect(answeringDifficultQuestions.explanation).toContain(DECLARATIVE);
  });

  it("links back only to earlier B2 orders, and to the orders each topic builds on", () => {
    expect(givingAPresentation.explanation).toContain("order 28");
    expect(givingAndReceivingFeedback.explanation).toContain("order 21");
    expect(breakingBadNews.explanation).toContain("order 19");
    expect(answeringDifficultQuestions.explanation).toContain("order 18");
    expect(answeringDifficultQuestions.explanation).toContain("order 29");
    expect(checkingForApproval.explanation).toContain("order 18");
    for (const t of topics) {
      for (const m of t.explanation.matchAll(/order (\d+)/g)) expect(Number(m[1]), t.slug).toBeLessThan(t.order);
    }
  });

  it("never tests a cleft sentence with a word bank", () => {
    for (const t of topics) for (const a of wordbankAnswers(t.quiz)) expect(a, t.slug).not.toMatch(/^(What|All) .+ is /);
  });

  it("keeps register labels consistent with earlier topics", () => {
    const a2Requests = phraseTopic("a2", "speaking", "asking-for-things-politely");
    const b1Indirect = phraseTopic("b1", "speaking", "indirect-and-polite-questions");
    const b1Agreeing = phraseTopic("b1", "speaking", "agreeing-and-disagreeing");
    const b2Summarising = phraseTopic("b2", "writing", "summarising-and-adding-points");
    expect(reg(a2Requests, "Is it OK if I open the window?")).toBe("neutral");
    expect(reg(checkingForApproval, "Is that OK with you?")).toBe("neutral");
    expect(reg(b1Indirect, "Is it all right if I leave a bit early today?")).toBe("neutral");
    expect(reg(checkingForApproval, "Is it all right if I move our meeting to Monday?")).toBe("neutral");
    expect(reg(b1Indirect, "I was wondering whether you could send me the figures.")).toBe("formal");
    expect(reg(checkingForApproval, "I was wondering whether you would be happy with this price.")).toBe("formal");
    expect(reg(givingAndReceivingFeedback, "I was wondering whether we could add a short summary.")).toBe("formal");
    expect(reg(b1Indirect, "No, of course not. Go ahead.")).toBe("neutral");
    expect(reg(checkingForApproval, "No, not at all. Go ahead.")).toBe("neutral");
    expect(reg(b1Agreeing, "I see what you mean, but it's very expensive.")).toBe("neutral");
    expect(reg(answeringDifficultQuestions, "I see your point, but the new system is cheaper in the long run.")).toBe("neutral");
    expect(reg(b2Summarising, "To sum up, the new system is cheaper and faster.")).toBe("neutral");
    expect(reg(givingAPresentation, "To sum up, the new system will save us time and money.")).toBe("neutral");
    expect(reg(checkingForApproval, "So we're agreed, then?")).toBe("informal");
    for (const t of topics) {
      for (const s of t.situations) {
        for (const p of s.phrases) {
          if (/^Thanks/.test(p)) expect(s.register, `${t.slug}: ${p}`).toBe("informal");
          if (/by the way/i.test(p)) expect(s.register, `${t.slug}: ${p}`).toBe("informal");
          if (/regret to inform/i.test(p)) expect(s.register, `${t.slug}: ${p}`).toBe("formal");
        }
      }
    }
  });

  it("pins giving a presentation: signposts, slides, closing and questions", () => {
    const t = givingAPresentation;
    for (const n of ["Opening the talk", "Moving from one point to the next", "Talking about a slide or a chart", "Closing the talk", "Inviting questions"]) {
      expect(situationNames(t)).toContain(n);
    }
    expect(reg(t, "Good afternoon, ladies and gentlemen.")).toBe("formal");
    expect(reg(t, "That brings me to my next point.")).toBe("neutral");
    expect(t.explanation).toContain("Moving on to");
    expect(choiceAnswer(t.quiz, "next point, the timetable")).toBe("Let's move on to the timetable.");
    expect(choiceAnswer(t.quiz, "chart on your slide")).toBe("If you look at this chart, you'll see that prices rose by ten per cent.");
    const was = gap(t.quiz, "As I ___ saying");
    expect(was).toEqual(["was"]);
    expectGap(was, ["was", "Was"], ["were", "am", "kept", "is"]);
    const listening = gap(t.quiz, "Thank you very much for ___");
    expect(listening).toEqual(["listening"]);
    expectGap(listening, ["listening", "Listening"], ["listen", "to listen", "listened", "coming"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["I'll be happy to answer questions at the end."]);
    expect(mistakes(t.quiz)).toEqual([["on", "at"]]);
  });

  it("pins giving and receiving feedback: praise, accepting praise, soft suggestions with order 21's hedges", () => {
    const t = givingAndReceivingFeedback;
    expect(reg(t, "Well done!")).toBe("neutral");
    expect(reg(t, "Nice one!")).toBe("informal");
    expect(reg(t, "Thank you. I appreciate that.")).toBe("neutral");
    expect(reg(t, "You might want to add a few pictures.")).toBe("neutral");
    expect(reg(t, "Your contribution to the project has been excellent.")).toBe("formal");
    expect(t.explanation).toContain("not a guess about what the other person wants");
    expect(t.explanation).toContain("people usually accept praise");
    expect(choiceAnswer(t.quiz, "it is too long")).toBe("You might want to make the report a little shorter.");
    expect(choiceAnswer(t.quiz, "Your presentation was excellent")).toBe("Thank you. I appreciate that.");
    const appreciate = gap(t.quiz, "I really ___ that");
    expect(appreciate).toEqual(["appreciate", "appreciated"]);
    expectGap(appreciate, ["appreciate", "appreciated", "Appreciate"], ["appreciating", "thank", "like", "appreciates"]);
    const impressed = gap(t.quiz, "I was really ___ by");
    expect(impressed).toEqual(["impressed"]);
    expectGap(impressed, ["impressed", "Impressed"], ["impressive", "impress", "impressing", "impression"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["You might want to speak a little more slowly."]);
    expect(mistakes(t.quiz)).toEqual([["add", "adding"]]);
  });

  it("pins breaking bad news: I'm afraid keeps its A2 meaning, regret to inform is formal, afraid so means yes", () => {
    const t = breakingBadNews;
    expect(t.explanation).toContain("As at A2, I'm afraid here means I'm sorry.");
    expect(t.explanation).toContain("I'm afraid so means yes, and I'm afraid not means no");
    expect(reg(t, "I'm afraid I've got some bad news.")).toBe("neutral");
    expect(reg(t, "I regret to inform you that your application has been unsuccessful.")).toBe("formal");
    expect(reg(t, "Oh no, you're joking!")).toBe("informal");
    expect(choiceAnswer(t.quiz, "sofa will arrive two weeks late")).toBe("Hello, Mrs Patel. I'm afraid I've got some bad news about your sofa.");
    expect(choiceAnswer(t.quiz, "didn't get the job")).toBe("I regret to inform you that your application has not been successful.");
    const have = gap(t.quiz, "I'm sorry to ___ to tell you");
    expect(have).toEqual(["have"]);
    expectGap(have, ["have", "Have"], ["had", "having", "must", "need"]);
    const so = gap(t.quiz, "I'm afraid ___. It's closed");
    expect(so).toEqual(["so"]);
    expectGap(so, ["so", "So"], ["yes", "not", "no", "it"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["I'm afraid the meeting has been cancelled."]);
    expect(mistakes(t.quiz)).toEqual([["what", "that"]]);
  });

  it("pins answering difficult questions: time to think, get back to you, passing the question on", () => {
    const t = answeringDifficultQuestions;
    expect(reg(t, "That's a good question.")).toBe("neutral");
    expect(reg(t, "I'll have to get back to you on that.")).toBe("neutral");
    expect(reg(t, "I'm not in a position to comment on that at the moment.")).toBe("formal");
    expect(t.explanation).toContain("Get back to someone means answer them later.");
    expect(t.explanation).toContain("It is usually better to say that you don't know than to guess.");
    expect(choiceAnswer(t.quiz, "next year's budget")).toBe("I'll have to get back to you on that.");
    expect(choiceAnswer(t.quiz, "company's lawyer")).toBe("I think Ana is the best person to answer that.");
    const back = gap(t.quiz, "I'll have to get ___ to you");
    expect(back).toEqual(["back"]);
    expectGap(back, ["back", "Back"], ["again", "return", "up", "round"]);
    const asking = gap(t.quiz, "So you're ___ me whether");
    expect(asking).toEqual(["asking"]);
    expectGap(asking, ["asking", "Asking"], ["ask", "asked", "telling", "saying"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["I understand what you're saying, but we have no choice."]);
    expect(mistakes(t.quiz)).toEqual([["of", "to"]]);
  });

  it("pins checking for approval, agreeing with B1 indirect and polite questions", () => {
    const t = checkingForApproval;
    const b1 = phraseTopic("b1", "speaking", "indirect-and-polite-questions");
    expect(b1.explanation).toContain("<b>Do you mind if I</b> + the present simple");
    expect(t.explanation).toContain("<b>Do you mind if I</b> + the present simple");
    expect(b1.explanation).toContain("<b>No, not at all</b>");
    expect(t.explanation).toContain("No, not at all means yes, it's fine");
    expect(t.explanation).toContain("the order of a normal sentence");
    expect(t.explanation).toContain("it ends with a full stop");
    expect(reg(t, "Does that work for you?")).toBe("neutral");
    expect(reg(t, "Would you be happy with a shorter meeting?")).toBe("neutral");
    expect(reg(t, "Does that meet with your approval?")).toBe("formal");
    expect(reg(t, "Sounds good!")).toBe("informal");
    expect(choiceAnswer(t.quiz, "important client to Thursday")).toBe("Would Thursday suit you?");
    expect(choiceAnswer(t.quiz, "share your report with the directors")).toBe("No, not at all. Go ahead.");
    const work = gap(t.quiz, "Does that ___ for you");
    expect(work).toEqual(["work"]);
    expectGap(work, ["work", "Work"], ["suit", "works", "sound", "agree"]);
    const suit = gap(t.quiz, "Does Friday ___ you");
    expect(suit).toEqual(["suit"]);
    expectGap(suit, ["suit", "Suit"], ["suits", "work", "fit", "agree"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["Could you let me know if you are happy with the price?"]);
    expect(mistakes(t.quiz)).toEqual([["sending", "send"]]);
  });
});
