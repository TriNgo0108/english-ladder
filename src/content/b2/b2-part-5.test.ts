import { allTopics, findTopic, topicsByLevelAndCategory } from "@/content/registry";
import { parseTopic, type PhraseTopic, type SetTopic } from "@/content/schema";
import { b2Topics } from ".";
import { advancedPhrasalVerbs } from "./phrases/advanced-phrasal-verbs";
import { easilyConfusedWords } from "./phrases/easily-confused-words";
import { workplaceCollocations } from "./phrases/workplace-collocations";
import { aCoverLetter } from "./writing/a-cover-letter";
import { followUpEmails } from "./writing/follow-up-emails";
import { lettersOfComplaint } from "./writing/letters-of-complaint";
import { summarisingAndAddingPoints } from "./writing/summarising-and-adding-points";
import { answerSentences, choiceAnswer, expectGap, gap, ids, mistakes, plain, quizLengths, wordbankAnswers } from "@/content/test-helpers";

const setSlugs = ["advanced-phrasal-verbs", "workplace-collocations", "easily-confused-words"];
const setTopics: SetTopic[] = [advancedPhrasalVerbs, workplaceCollocations, easilyConfusedWords];

const writingSlugs = ["letters-of-complaint", "a-cover-letter", "follow-up-emails", "summarising-and-adding-points"];
const writingTopics: PhraseTopic[] = [lettersOfComplaint, aCoverLetter, followUpEmails, summarisingAndAddingPoints];

const reg = (t: PhraseTopic, phrase: string) => t.situations.find((s) => s.phrases.includes(phrase))?.register;
const situationNames = (t: PhraseTopic) => t.situations.map((s) => s.situation);

const PHRASAL_VERB = "Remember: a phrasal verb is a verb and a small word, like up, off, on or out, that we use together, often with a new meaning. The small word after the verb is called the particle.";
const OBJECT = "Remember: the object is the person or thing that the action goes to.";
const COLLOCATION = "Remember: a collocation is a group of words that we often use together, like make a mistake or heavy rain.";
const INFINITIVE = "Remember: to and the base form together, like to buy or to see, are called the infinitive.";
const REGISTER = "Remember: register means how formal or informal your words are.";
const GERUND = "Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund.";
const BASE_FORM = "Remember: the base form is the verb as you see it in a dictionary, with nothing added.";

describe("B2 Phrases & Expressions and Writing (part 5)", () => {
  it("registers orders 22-24 as phrases set topics and 25-28 as writing phrases topics, in sequence, passing the schema", () => {
    setSlugs.forEach((slug, i) => {
      const found = findTopic("b2", "phrases", slug);
      expect(found?.order, slug).toBe(i + 22);
      expect(found?.shape).toBe("set");
      expect(found?.level).toBe("b2");
      expect(() => parseTopic(found)).not.toThrow();
    });
    writingSlugs.forEach((slug, i) => {
      const found = findTopic("b2", "writing", slug);
      expect(found?.order, slug).toBe(i + 25);
      expect(found?.shape).toBe("phrases");
      expect(found?.level).toBe("b2");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b2Topics.slice(21, 28).map((t) => t.slug)).toEqual([...setSlugs, ...writingSlugs]);
    expect(topicsByLevelAndCategory("b2", "phrases").map((t) => t.slug)).toEqual(setSlugs);
    expect(topicsByLevelAndCategory("b2", "writing").map((t) => t.slug)).toEqual(writingSlugs);
    expect(allTopics.filter((t) => t.level === "b2" && t.category === "phrases")).toHaveLength(3);
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths([...setTopics, ...writingTopics])).toEqual({
      "advanced-phrasal-verbs": 7,
      "workplace-collocations": 6,
      "easily-confused-words": 7,
      "letters-of-complaint": 6,
      "a-cover-letter": 6,
      "follow-up-emails": 6,
      "summarising-and-adding-points": 6,
    });
  });

  it("pins the families: phrasal-verbs, collocations, letters and emails explicit, none for the other three", () => {
    expect(advancedPhrasalVerbs.family).toBe("phrasal-verbs");
    expect(workplaceCollocations.family).toBe("collocations");
    expect(easilyConfusedWords.family).toBeUndefined();
    expect(lettersOfComplaint.family).toBe("letters");
    expect(aCoverLetter.family).toBeUndefined();
    expect(followUpEmails.family).toBe("emails");
    expect(summarisingAndAddingPoints.family).toBeUndefined();
  });

  it("links each B2 topic to exactly its lower-level siblings in CEFR order, and each of those back", () => {
    expect(ids("b2", "phrases", "advanced-phrasal-verbs")).toEqual(["b1/phrasal-verbs-inseparable"]);
    expect(ids("b1", "phrases", "phrasal-verbs-inseparable")).toEqual(["b2/advanced-phrasal-verbs"]);
    expect(ids("b2", "phrases", "workplace-collocations")).toEqual(["b1/collocations"]);
    expect(ids("b1", "phrases", "collocations")).toEqual(["b2/workplace-collocations"]);
    expect(ids("b2", "writing", "letters-of-complaint")).toEqual(["b1/letter-structure"]);
    expect(ids("b1", "writing", "letter-structure")).toEqual(["b2/letters-of-complaint"]);
    expect(ids("b2", "writing", "follow-up-emails")).toEqual(["a2/an-informal-email", "b1/a-professional-email"]);
    expect(ids("a2", "writing", "an-informal-email")).toEqual(["b1/a-professional-email", "b2/follow-up-emails"]);
    expect(ids("b1", "writing", "a-professional-email")).toEqual(["a2/an-informal-email", "b2/follow-up-emails"]);
    expect(ids("b2", "phrases", "easily-confused-words")).toEqual([]);
    expect(ids("b2", "writing", "a-cover-letter")).toEqual([]);
    expect(ids("b2", "writing", "summarising-and-adding-points")).toEqual([]);
  });

  it("gives every topic a short summary, no IPA, and scrambles every wordbank", () => {
    for (const t of [...setTopics, ...writingTopics]) {
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
      expect(t.explanation, t.slug).not.toContain("/ /");
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" "), t.slug).not.toBe(q.answer);
      }
    }
  });

  it("keeps every set between 6 and 30 entries, with distinct headwords, no IPA, and the headword bolded in use", () => {
    for (const t of setTopics) {
      expect(t.entries.length, t.slug).toBeGreaterThanOrEqual(6);
      expect(t.entries.length, t.slug).toBeLessThanOrEqual(30);
      const heads = t.entries.map((e) => e.headword);
      expect(new Set(heads).size, t.slug).toBe(heads.length);
      for (const e of t.entries) {
        expect(e.ipa, e.headword).toBeUndefined();
        expect(e.inUse, e.headword).toMatch(/<b>.+<\/b>/);
        expect(e.gloss, e.headword).not.toMatch(/[<>]/);
      }
    }
  });

  it("gives each writing topic at least 3 uniquely named situations", () => {
    for (const t of writingTopics) {
      expect(t.situations.length, t.slug).toBeGreaterThanOrEqual(3);
      const names = situationNames(t);
      expect(new Set(names).size, t.slug).toBe(names.length);
    }
  });

  it("never copies a quiz answer word for word from the topic's entries, phrases or explanation", () => {
    for (const t of setTopics) {
      const source = plain([t.explanation, ...t.entries.map((e) => e.inUse)].join(" "));
      for (const sentence of answerSentences(t)) expect(source, `${t.slug}: ${sentence}`).not.toContain(plain(sentence));
    }
    for (const t of writingTopics) {
      const source = plain([t.explanation, ...t.situations.flatMap((s) => s.phrases)].join(" "));
      for (const sentence of answerSentences(t)) expect(source, `${t.slug}: ${sentence}`).not.toContain(plain(sentence));
    }
  });

  it("reuses the exact earlier wording for phrasal verb, object, collocation, infinitive, register, gerund and base form", () => {
    expect(advancedPhrasalVerbs.explanation).toContain(PHRASAL_VERB);
    expect(advancedPhrasalVerbs.explanation).toContain(OBJECT);
    expect(workplaceCollocations.explanation).toContain(COLLOCATION);
    expect(easilyConfusedWords.explanation).toContain(OBJECT);
    expect(easilyConfusedWords.explanation).toContain(INFINITIVE);
    for (const t of writingTopics) expect(t.explanation, t.slug).toContain(REGISTER);
    expect(lettersOfComplaint.explanation).toContain(BASE_FORM);
    expect(aCoverLetter.explanation).toContain(GERUND);
    expect(followUpEmails.explanation).toContain(GERUND);
    for (const t of [...setTopics, ...writingTopics]) {
      expect(t.explanation, t.slug).not.toContain("A <b>phrasal verb</b> is");
      expect(t.explanation, t.slug).not.toContain("A <b>collocation</b> is");
      expect(t.explanation, t.slug).not.toContain("<b>Register</b> means");
    }
  });

  it("links back only to earlier B2 orders, and the cover letter to order 15", () => {
    expect(aCoverLetter.explanation).toContain("order 15");
    expect(easilyConfusedWords.explanation).toContain("order 10");
    expect(summarisingAndAddingPoints.explanation).toContain("order 20");
    for (const t of [...setTopics, ...writingTopics]) {
      for (const m of t.explanation.matchAll(/order (\d+)/g)) expect(Number(m[1]), t.slug).toBeLessThan(t.order);
    }
  });

  it("pins the advanced phrasal verbs: three-part verbs never separated, hedged, and the multi-meaning verbs", () => {
    const t = advancedPhrasalVerbs;
    expect(t.explanation).toContain("Most three-part phrasal verbs, including all the ones in this table, can't be separated");
    expect(t.explanation).toContain("not put it up with");
    const heads = t.entries.map((e) => e.headword);
    for (const h of ["put up with", "come up with", "get away with", "look down on", "catch up with", "hang up on"]) expect(heads).toContain(h);
    expect(choiceAnswer(t.quiz, "barks all night")).toBe("put up with");
    expect(choiceAnswer(t.quiz, "looking up for Sam")).toBe("getting better");
    expect(choiceAnswer(t.quiz, "line was always busy")).toBe("get through");
    const up = gap(t.quiz, "Who can come ___ with");
    expect(up).toEqual(["up"]);
    expectGap(up, ["up", "Up"], ["out", "on", "over", "up with"]);
    const away = gap(t.quiz, "How does he get ___ with it");
    expect(away).toEqual(["away"]);
    expectGap(away, ["away", "Away"], ["on", "along", "by", "off"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["I won't put up with it any more."]);
    expect(mistakes(t.quiz)).toEqual([["to", "on"]]);
  });

  it("pins the workplace collocations, with real learner errors as distractors and no clash with B1 make and do", () => {
    const t = workplaceCollocations;
    expect(t.explanation).toContain("This is only a guide");
    expect(choiceAnswer(t.quiz, "every Monday morning")).toBe("hold");
    expect(choiceAnswer(t.quiz, "managed to ___ the deadline")).toBe("meet");
    expect(choiceAnswer(t.quiz, "two months' notice")).toBe("give");
    expect(choiceAnswer(t.quiz, "ready to take ___ more responsibility")).toBe("on");
    const missed = gap(t.quiz, "the report is late");
    expect(missed).toEqual(["missed"]);
    expectGap(missed, ["missed", "Missed"], ["lost", "passed", "failed", "miss", "did"]);
    expect(wordbankAnswers(t.quiz)).toEqual([]);
    expect(mistakes(t.quiz)).toEqual([["rise", "raise"]]);
    const q = t.quiz.find((x) => x.kind === "choice" && x.stem.includes("every Monday morning"));
    if (q?.kind !== "choice") throw new Error("meeting choice missing");
    expect(q.options).toContain("make");
    expect(q.options).not.toContain("have");
  });

  it("pins the easily confused words: remind needs a person, Remember me to call is the classic distractor", () => {
    const t = easilyConfusedWords;
    expect(choiceAnswer(t.quiz, "call the bank")).toBe("remind");
    expect(choiceAnswer(t.quiz, "taxi is waiting")).toBe("put on");
    expect(choiceAnswer(t.quiz, "the bride")).toBe("wore");
    expect(choiceAnswer(t.quiz, "My son is two")).toBe("dress");
    const about = gap(t.quiz, "remind me ___ my appointments");
    expect(about).toEqual(["about", "of"]);
    expectGap(about, ["about", "of", "About"], ["to", "for", "on", "with"]);
    const remember = gap(t.quiz, "your birthday");
    expect(remember).toEqual(["remember"]);
    expectGap(remember, ["remember", "Remember"], ["remind", "remembered", "forget", "reminded"]);
    expect(mistakes(t.quiz)).toEqual([["remembers", "reminds"]]);
    expect(t.explanation).toContain("Remind me to call him, not Remember me to call him");
    expect(t.explanation).toContain("Put on your coat, not Dress your coat");
  });

  it("pins letters of complaint, agreeing with B1 letter structure on greetings and sign-offs", () => {
    const t = lettersOfComplaint;
    for (const n of ["Giving the reason for writing", "Signing off after Dear Sir or Madam (British)", "Signing off after Dear + a name (British)"]) {
      expect(situationNames(t)).toContain(n);
    }
    expect(reg(t, "Yours faithfully,")).toBe("formal");
    expect(reg(t, "Yours sincerely,")).toBe("formal");
    expect(reg(t, "I am writing to complain about a delay to my order.")).toBe("formal");
    expect(reg(t, "Excuse me, I'm afraid there's a problem with this jacket.")).toBe("neutral");
    expect(reg(t, "Unfortunately, it arrived two weeks late, and the door was broken.")).toBe("neutral");
    expect(t.explanation).toContain("the sign-off usually matches the greeting");
    expect(choiceAnswer(t.quiz, "firm but polite close")).toBe("If the problem is not solved by the end of the month, I will take the matter further.");
    expect(choiceAnswer(t.quiz, "want your money back")).toBe("I would like a full refund.");
    expect(choiceAnswer(t.quiz, "Dear Mr Hughes")).toBe("Yours sincerely,");
    const complain = gap(t.quiz, "I am writing to ___ about");
    expect(complain).toEqual(["complain", "protest"]);
    expectGap(complain, ["complain", "Complain", "protest"], ["complaint", "complaining", "say", "tell"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["I would like a replacement as soon as possible."]);
    expect(mistakes(t.quiz)).toEqual([["contacting", "contact"]]);
  });

  it("pins the cover letter: formal, reusing order 15's phrases, with honest neutral labels", () => {
    const t = aCoverLetter;
    expect(reg(t, "I am writing to apply for the post of trainee accountant.")).toBe("formal");
    expect(reg(t, "I am confident of being able to meet your sales targets.")).toBe("formal");
    expect(reg(t, "In my current job, I am responsible for training new staff.")).toBe("neutral");
    expect(reg(t, "I am familiar with online booking systems.")).toBe("neutral");
    expect(reg(t, "I'm really into marketing!")).toBe("informal");
    expect(reg(t, "Yours sincerely,")).toBe("formal");
    expect(t.situations.filter((s) => s.register === "informal").map((s) => s.situation)).toEqual(["Not for a cover letter"]);
    expect(choiceAnswer(t.quiz, "best first sentence")).toBe(
      "I am writing to apply for the position of hotel receptionist, as advertised on your website.",
    );
    expect(choiceAnswer(t.quiz, "Which sentence fits best")).toBe("I am keen to develop my skills in a larger company.");
    const from = gap(t.quiz, "As you can see ___ my CV");
    expect(from).toEqual(["from", "in", "on"]);
    expectGap(from, ["from", "in", "on", "From"], ["at", "of", "by", "with"]);
    const withGap = gap(t.quiz, "familiar ___ most accounting software");
    expect(withGap).toEqual(["with"]);
    expectGap(withGap, ["with", "With"], ["to", "of", "about", "in"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["I am available for an interview at any time."]);
    expect(mistakes(t.quiz)).toEqual([["manage", "managing"]]);
  });

  it("pins follow-up emails, reusing B1 professional email situation names and registers", () => {
    const t = followUpEmails;
    const b1 = findTopic("b1", "writing", "a-professional-email");
    if (b1?.shape !== "phrases") throw new Error("b1 email missing");
    for (const n of ["Starting the email", "Ending the email", "Saying goodbye in a work email"]) {
      expect(situationNames(t)).toContain(n);
      expect(situationNames(b1)).toContain(n);
      expect(t.situations.find((s) => s.situation === n)?.register, n).toBe(b1.situations.find((s) => s.situation === n)?.register);
    }
    expect(reg(t, "Kind regards,")).toBe("neutral");
    expect(reg(t, "I'm just following up on my email of 3 May.")).toBe("neutral");
    expect(reg(t, "I was wondering whether you had received my email of 12 June.")).toBe("formal");
    expect(reg(t, "Just a quick reminder about Friday's deadline.")).toBe("informal");
    expect(reg(t, "I would like to thank you for meeting me yesterday.")).toBe("formal");
    for (const s of t.situations) for (const p of s.phrases) if (/^Thanks/.test(p)) expect(s.register, p).toBe("informal");
    expect(choiceAnswer(t.quiz, "hasn't replied")).toBe("I'm just following up on the price list I sent you on 3 May.");
    expect(choiceAnswer(t.quiz, "job interview yesterday")).toBe("I would like to thank you for taking the time to meet me.");
    const talk = gap(t.quiz, "It was good to ___ to you");
    expect(talk).toEqual(["talk", "speak", "chat"]);
    expectGap(talk, ["talk", "speak", "chat", "Talk"], ["say", "tell", "talking", "talked"]);
    const booking = gap(t.quiz, "before ___ the hotel");
    expect(booking).toEqual(["booking", "having booked"]);
    expectGap(booking, ["booking", "Booking", "having booked"], ["book", "booked", "to book", "I booked"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["Have you had a chance to look at my report?"]);
    expect(mistakes(t.quiz)).toEqual([["told", "said"]]);
    expect(t.explanation).toContain("As I said on the phone, not As I told on the phone");
  });

  it("pins summarising and adding points, with a register label on every phrase", () => {
    const t = summarisingAndAddingPoints;
    expect(reg(t, "To sum up, the new system is cheaper and faster.")).toBe("neutral");
    expect(reg(t, "In short, we need more time.")).toBe("neutral");
    expect(reg(t, "All in all, it was a very good year.")).toBe("neutral");
    expect(reg(t, "What's more, it has a garden.")).toBe("neutral");
    expect(reg(t, "Not only that, but it's also cheaper.")).toBe("neutral");
    expect(reg(t, "While I'm on the subject, has anyone checked the travel costs?")).toBe("neutral");
    expect(reg(t, "Furthermore, the new system is easier to use.")).toBe("formal");
    expect(reg(t, "In conclusion, the evidence shows that the plan will work.")).toBe("formal");
    for (const s of t.situations) for (const p of s.phrases) if (/by the way/i.test(p)) expect(s.register, p).toBe("informal");
    expect(t.explanation).toContain("so it has no inversion");
    expect(choiceAnswer(t.quiz, "end of a presentation")).toBe("To sum up,");
    expect(choiceAnswer(t.quiz, "formal report")).toBe("Furthermore,");
    expect(choiceAnswer(t.quiz, "football match")).toBe("By the way,");
    const more = gap(t.quiz, "What's ___");
    expect(more).toEqual(["more"]);
    expectGap(more, ["more", "More"], ["else", "also", "much", "most"]);
    const inGap = gap(t.quiz, "all ___ all");
    expect(inGap).toEqual(["in"]);
    expectGap(inGap, ["in", "In"], ["of", "at", "and", "for"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["While I'm on the subject, how much does parking cost?"]);
    expect(mistakes(t.quiz)).toEqual([]);
  });
});
