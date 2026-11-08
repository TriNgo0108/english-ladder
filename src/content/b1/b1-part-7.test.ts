import { allTopics, findTopic } from "@/content/registry";
import { parseTopic, type PhraseTopic } from "@/content/schema";
import { b1Topics } from ".";
import { agreeingAndDisagreeing } from "./speaking/agreeing-and-disagreeing";
import { givingAdvice } from "./speaking/giving-advice";
import { indirectAndPoliteQuestions } from "./speaking/indirect-and-polite-questions";
import { introducingYourselfAndInterruptingAtWork } from "./speaking/introducing-yourself-and-interrupting-at-work";
import { likesAndDislikes } from "./speaking/likes-and-dislikes";
import { aProfessionalEmail } from "./writing/a-professional-email";
import { formalAndInformalRegister } from "./writing/formal-and-informal-register";
import { letterStructure } from "./writing/letter-structure";
import { answerSentences, choiceAnswer, expectGap, gap, ids, plain, quizLengths, wordbankAnswers, wrongToken } from "@/content/test-helpers";

const ordered = [
  ["writing", "formal-and-informal-register"],
  ["writing", "letter-structure"],
  ["writing", "a-professional-email"],
  ["speaking", "giving-advice"],
  ["speaking", "likes-and-dislikes"],
  ["speaking", "agreeing-and-disagreeing"],
  ["speaking", "indirect-and-polite-questions"],
  ["speaking", "introducing-yourself-and-interrupting-at-work"],
] as const;

const topics: PhraseTopic[] = [
  formalAndInformalRegister,
  letterStructure,
  aProfessionalEmail,
  givingAdvice,
  likesAndDislikes,
  agreeingAndDisagreeing,
  indirectAndPoliteQuestions,
  introducingYourselfAndInterruptingAtWork,
];

const reg = (t: PhraseTopic, phrase: string) => t.situations.find((s) => s.phrases.includes(phrase))?.register;
const formalPhrases = (t: PhraseTopic) => t.situations.filter((s) => s.register === "formal").flatMap((s) => s.phrases);

describe("B1 Writing and Speaking (part 7)", () => {
  it("registers orders 33-40 in sequence, each a phrases topic passing the schema", () => {
    ordered.forEach(([category, slug], i) => {
      const found = findTopic("b1", category, slug);
      expect(found?.order, slug).toBe(i + 33);
      expect(found?.shape).toBe("phrases");
      expect(found?.level).toBe("b1");
      expect(() => parseTopic(found)).not.toThrow();
    });
    expect(b1Topics.slice(32, 40).map((t) => t.slug)).toEqual(ordered.map(([, slug]) => slug));
  });

  it("pins each topic's quiz length", () => {
    expect(quizLengths(topics)).toEqual({
      "formal-and-informal-register": 6,
      "letter-structure": 6,
      "a-professional-email": 6,
      "giving-advice": 5,
      "likes-and-dislikes": 6,
      "agreeing-and-disagreeing": 6,
      "indirect-and-polite-questions": 7,
      "introducing-yourself-and-interrupting-at-work": 6,
    });
  });

  it("pins the families: register, emails, agreeing-and-disagreeing, polite-requests and introductions explicit, none for the rest", () => {
    expect(formalAndInformalRegister.family).toBe("register");
    expect(letterStructure.family).toBe("letters");
    expect(aProfessionalEmail.family).toBe("emails");
    expect(givingAdvice.family).toBeUndefined();
    expect(likesAndDislikes.family).toBeUndefined();
    expect(agreeingAndDisagreeing.family).toBe("agreeing-and-disagreeing");
    expect(indirectAndPoliteQuestions.family).toBe("polite-requests");
    expect(introducingYourselfAndInterruptingAtWork.family).toBe("introductions");
  });

  it("lists every sibling in CEFR order on every page of the polite-requests, introductions, emails and letters chains", () => {
    expect(ids("a1", "speaking", "would-you-like")).toEqual(["a2/asking-for-things-politely", "b1/indirect-and-polite-questions"]);
    expect(ids("a2", "speaking", "asking-for-things-politely")).toEqual(["a1/would-you-like", "b1/indirect-and-polite-questions"]);
    expect(ids("b1", "speaking", "indirect-and-polite-questions")).toEqual(["a1/would-you-like", "a2/asking-for-things-politely"]);
    expect(ids("a1", "speaking", "greetings-and-introducing-yourself")).toEqual(["b1/introducing-yourself-and-interrupting-at-work"]);
    expect(ids("b1", "speaking", "introducing-yourself-and-interrupting-at-work")).toEqual(["a1/greetings-and-introducing-yourself"]);
    expect(ids("a2", "writing", "an-informal-email")).toEqual(["b1/a-professional-email", "b2/follow-up-emails"]);
    expect(ids("b1", "writing", "a-professional-email")).toEqual(["a2/an-informal-email", "b2/follow-up-emails"]);
    expect(ids("b2", "writing", "follow-up-emails")).toEqual(["a2/an-informal-email", "b1/a-professional-email"]);
    expect(ids("b1", "writing", "letter-structure")).toEqual(["b2/letters-of-complaint"]);
    expect(ids("b2", "writing", "letters-of-complaint")).toEqual(["b1/letter-structure"]);
    expect(ids("b1", "writing", "formal-and-informal-register")).toEqual(["c1/register-and-formality-shifts"]);
    expect(ids("b1", "speaking", "agreeing-and-disagreeing")).toEqual(["c1/handling-pushback"]);
    for (const [category, slug] of ordered.filter(([, s]) => ["giving-advice", "likes-and-dislikes"].includes(s))) {
      expect(ids("b1", category, slug), slug).toEqual([]);
    }
  });

  it("gives each topic at least 3 situations, about five questions, a short summary, no IPA, and scrambles every wordbank", () => {
    for (const t of topics) {
      expect(t.situations.length, t.slug).toBeGreaterThanOrEqual(3);
      expect(t.quiz.length, t.slug).toBeGreaterThanOrEqual(5);
      expect(t.summary.length, t.slug).toBeLessThanOrEqual(155);
      expect(t.explanation, t.slug).not.toContain("/ /");
      const names = t.situations.map((s) => s.situation);
      expect(new Set(names).size, t.slug).toBe(names.length);
      for (const q of t.quiz) {
        if (q.kind === "wordbank") expect(q.words.join(" ")).not.toBe(q.answer);
      }
    }
  });

  it("never copies a quiz answer word for word from the topic's phrases or explanation", () => {
    for (const t of topics) {
      const source = plain([t.explanation, ...t.situations.flatMap((s) => s.phrases)].join(" "));
      for (const sentence of answerSentences(t)) expect(source, `${t.slug}: ${sentence}`).not.toContain(plain(sentence));
    }
  });

  it("defines register once, in order 33, and reuses the earlier wording for the other terms", () => {
    expect(formalAndInformalRegister.explanation).toContain("<b>Register</b> means how formal or informal your words are.");
    for (const t of allTopics.filter((x) => x.slug !== formalAndInformalRegister.slug)) {
      expect(t.explanation, t.slug).not.toContain("<b>Register</b> means");
    }
    for (const t of [letterStructure, aProfessionalEmail]) {
      expect(t.explanation, t.slug).toContain("Remember: register means how formal or informal your words are.");
    }
    expect(formalAndInformalRegister.explanation).toContain("Remember: the short form and the long form mean the same.");
    const gerund = "Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund.";
    for (const t of [formalAndInformalRegister, givingAdvice, likesAndDislikes, indirectAndPoliteQuestions]) expect(t.explanation, t.slug).toContain(gerund);
    expect(givingAdvice.explanation).toContain("Remember: the base form is the verb as you see it in a dictionary, with nothing added.");
    expect(likesAndDislikes.explanation).toContain("Remember: a preposition is a small word, like in, on or under, that goes before a noun.");
    expect(agreeingAndDisagreeing.explanation).toContain(
      "Remember: an auxiliary is a small verb that goes with another verb, like be in She is working, have in They have finished, do in Do you like it?, and can or will.",
    );
    expect(indirectAndPoliteQuestions.explanation).toContain("Remember: the subject is the person or thing that the sentence is about.");
  });

  it("links back to orders 9, 13 and 16, and never to a later order", () => {
    expect(givingAdvice.explanation).toContain("If I were you, I'd");
    expect(givingAdvice.explanation).toContain("(order 9)");
    expect(givingAdvice.explanation).toContain("(order 13)");
    expect(likesAndDislikes.explanation).toContain("(order 13)");
    expect(indirectAndPoliteQuestions.explanation).toContain("(order 16)");
    for (const t of topics) {
      for (const m of t.explanation.matchAll(/order (\d+)/g)) expect(Number(m[1]), t.slug).toBeLessThan(t.order);
    }
  });

  it("pins the register topic: paired situations, formal and informal for each intent", () => {
    const t = formalAndInformalRegister;
    for (const intent of ["Asking for something", "Saying sorry", "Saying thank you", "Finishing"]) {
      expect(t.situations.find((s) => s.situation === `${intent}: formal`)?.register, intent).toBe("formal");
      expect(t.situations.find((s) => s.situation === `${intent}: informal`)?.register, intent).toBe("informal");
    }
    expect(reg(t, "I would appreciate it if you could reply by Friday.")).toBe("formal");
    expect(reg(t, "Could you do me a favour?")).toBe("informal");
    expect(reg(t, "Could you send me the timetable, please?")).toBe("neutral");
    expect(reg(t, "Thank you for your email.")).toBe("neutral");
    expect(reg(t, "Best wishes,")).toBe("neutral");
    expect(choiceAnswer(t.quiz, "hotel")).toBe("I would be grateful if you could send me a copy of my bill.");
    expect(choiceAnswer(t.quiz, "Which sentence is informal")).toBe("Can't wait to see you!");
    const received = gap(t.quiz, "your application");
    expect(received).toEqual(["received"]);
    expectGap(received, ["received", "Received"], ["got", "receive", "recieved", "taken"]);
    const sorry = gap(t.quiz, "the mess");
    expect(sorry).toEqual(["about", "for"]);
    expectGap(sorry, ["about", "for", "About"], ["of", "to", "with", "from"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["I would be grateful for a quick reply."]);
    expect(wrongToken(t.quiz)).toEqual(["be", "being"]);
  });

  it("pins the letter structure topic, with the British sign-off rule and a one-sentence US note", () => {
    const t = letterStructure;
    expect(t.explanation).toContain("In British English, the sign-off usually matches the greeting.");
    expect(t.explanation).toContain("American English is different");
    expect(choiceAnswer(t.quiz, "Dear Sir or Madam")).toBe("Yours faithfully,");
    expect(choiceAnswer(t.quiz, "I am writing to complain")).toBe("In the first paragraph, just after the greeting.");
    expect(reg(t, "Yours sincerely,")).toBe("formal");
    expect(reg(t, "Yours faithfully,")).toBe("formal");
    expect(reg(t, "Kind regards,")).toBe("neutral");
    const name = gap(t.quiz, "Dear Ms ___");
    expect(name).toEqual(["Kowalski"]);
    expectGap(name, ["Kowalski", "kowalski"], ["Anna", "Anna Kowalski", "Kowalska"]);
    const to = gap(t.quiz, "look forward ___ meeting");
    expect(to).toEqual(["to"]);
    expectGap(to, ["to", "To"], ["for", "at", "on"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["I am writing to ask for a refund."]);
    expect(wrongToken(t.quiz)).toEqual(["Your", "Yours"]);
  });

  it("pins the professional email: A2 situation names reused, and no friends-only phrases at work", () => {
    const t = aProfessionalEmail;
    const names = t.situations.map((s) => s.situation);
    for (const n of ["Starting the email", "Opening lines", "Asking questions and asking for things", "Ending the email"]) expect(names).toContain(n);
    const a2Names = findTopic("a2", "writing", "an-informal-email");
    if (a2Names?.shape !== "phrases") throw new Error("a2 email missing");
    for (const n of ["Starting the email", "Opening lines", "Asking questions and asking for things", "Ending the email"]) {
      expect(a2Names.situations.map((s) => s.situation)).toContain(n);
    }
    expect(reg(t, "Best wishes,")).toBe("neutral");
    expect(reg(t, "Kind regards,")).toBe("neutral");
    expect(reg(t, "Yours sincerely,")).toBe("formal");
    expect(reg(t, "Love,")).toBe("informal");
    expect(reg(t, "Cheers,")).toBe("informal");
    expect(t.situations.filter((s) => s.register === "informal").map((s) => s.situation)).toEqual(["Not for work: an email to a friend"]);
    expect(choiceAnswer(t.quiz, "client")).toBe("Dear Mr Hassan,");
    expect(choiceAnswer(t.quiz, "colleague")).toBe("Kind regards,");
    const attached = gap(t.quiz, "Please find ___");
    expect(attached).toEqual(["attached", "enclosed", "below"]);
    expectGap(attached, ["attached", "enclosed", "below", "Attached"], ["attach", "attaching", "attachment", "attach to"]);
    expect(reg(t, "Thank you for your help.")).toBe("neutral");
    for (const s of t.situations) for (const p of s.phrases) if (/^Thanks/.test(p)) expect(s.register, p).toBe("informal");
    const inform = gap(t.quiz, "a formal word for tell");
    expect(inform).toEqual(["inform", "notify", "advise"]);
    expectGap(inform, ["inform", "notify", "advise", "Inform"], ["tell", "informing", "say", "informed"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["Would you be able to call me tomorrow?"]);
    expect(wrongToken(t.quiz)).toEqual(["knowing", "know"]);
  });

  it("pins giving advice", () => {
    const t = givingAdvice;
    expect(choiceAnswer(t.quiz, "can't sleep")).toBe("Why don't you drink less coffee?");
    const were = gap(t.quiz, "If I ___ you");
    expect(were).toEqual(["were", "was"]);
    expectGap(were, ["were", "was", "Were"], ["am", "be", "would be", "is"]);
    const had = gap(t.quiz, "better take an umbrella");
    expect(had).toEqual(["had", "'d"]);
    expectGap(had, ["had", "'d", "’d"], ["should", "would", "have", "d"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["Why don't you ask your manager for help?"]);
    expect(wrongToken(t.quiz)).toEqual(["turn", "turning"]);
    expect(formalPhrases(t)).toEqual(["We recommend booking a table in advance.", "Guests are advised to arrive before 6 p.m."]);
    expect(reg(t, "You'd better hurry, or you'll miss the bus.")).toBe("informal");
    expect(t.explanation).toContain("About yourself, I'd better… is fine with anyone");
  });

  it("pins likes and dislikes, with keen on and into informal", () => {
    const t = likesAndDislikes;
    expect(reg(t, "I'm not keen on cold weather.")).toBe("informal");
    expect(reg(t, "I'm really into hip hop at the moment.")).toBe("informal");
    expect(reg(t, "I don't really like horror films.")).toBe("neutral");
    for (const s of t.situations) {
      for (const p of s.phrases) if (/keen on|\binto\b/.test(p)) expect(s.register, p).toBe("informal");
    }
    expect(choiceAnswer(t.quiz, "strongest dislike")).toBe("I can't stand it.");
    const driving = gap(t.quiz, "at night");
    expect(driving).toEqual(["driving"]);
    expectGap(driving, ["driving", "Driving"], ["drive", "to drive", "drove", "driveing"]);
    const into = gap(t.quiz, "yoga");
    expect(into).toEqual(["into"]);
    expectGap(into, ["into", "Into"], ["in", "on", "keen on", "onto"]);
    const on = gap(t.quiz, "spicy food");
    expect(on).toEqual(["on"]);
    expectGap(on, ["on", "On"], ["of", "about", "in", "to"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["What do you think of his new song?"]);
    expect(wrongToken(t.quiz)).toEqual(["like.", "do."]);
  });

  it("pins agreeing and disagreeing, with soft disagreement and Neither as agreement", () => {
    const t = agreeingAndDisagreeing;
    expect(choiceAnswer(t.quiz, "start the project in May")).toBe("I see what you mean, but I think June would be better.");
    expect(choiceAnswer(t.quiz, "this pizza")).toBe("Neither do I.");
    const can = gap(t.quiz, "Neither ___ I");
    expect(can).toEqual(["can"]);
    expectGap(can, ["can", "Can"], ["do", "am", "can't", "could"]);
    const mean = gap(t.quiz, "I see what you ___");
    expect(mean).toEqual(["mean", "meant"]);
    expectGap(mean, ["mean", "meant"], ["say", "means", "think"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["I'm not sure I agree with you."]);
    expect(wrongToken(t.quiz)).toEqual(["am", "do"]);
    expect(t.situations.find((s) => s.phrases.includes("A: I didn't like the film. B: Neither did I."))?.situation).toBe("Saying it's the same for you");
    expect(formalPhrases(t)).toEqual(["I'm afraid I don't agree.", "I'm afraid I see it differently."]);
    expect(reg(t, "No way!")).toBe("informal");
  });

  it("pins indirect questions: statement order in a wordbank, and agreement with A1 and A2", () => {
    const t = indirectAndPoliteQuestions;
    expect(wordbankAnswers(t.quiz)).toEqual(["Could you tell me where this train is going?"]);
    const wb = t.quiz.find((q) => q.kind === "wordbank");
    if (wb?.kind !== "wordbank") throw new Error("wordbank missing");
    // The verb chip carries no punctuation, so the direct-order error (where is this train going) can still be built.
    expect(wb.words).toContain("is");
    expect(wb.words.filter((w) => /[?.!]$/.test(w))).toEqual(["going?"]);
    expect(reg(t, "What time's the film?")).toBe("informal");
    const leaves = gap(t.quiz, "what time the train ___");
    expect(leaves).toEqual(["leaves"]);
    expectGap(leaves, ["leaves", "Leaves"], ["leave", "does leave", "left", "leaving"]);
    const ifGap = gap(t.quiz, "Could you tell me ___ there is a lift");
    expect(ifGap).toEqual(["if", "whether"]);
    expectGap(ifGap, ["if", "whether", "If"], ["is", "that", "where"]);
    const turning = gap(t.quiz, "your music down");
    expect(turning).toEqual(["turning"]);
    expectGap(turning, ["turning", "Turning"], ["turn", "to turn", "turned"]);
    expect(choiceAnswer(t.quiz, "Would you mind opening the window")).toBe("No, not at all.");
    expect(choiceAnswer(t.quiz, "stranger")).toBe("Excuse me, do you know where the station is?");
    expect(wrongToken(t.quiz)).toEqual(["arrive?", "arrives?"]);
    // A2 agreement: could-you-tell-me questions are neutral, not formal, and Would you like…? is never a request.
    expect(reg(t, "Excuse me, could you tell me where the station is?")).toBe("neutral");
    expect(formalPhrases(t)).toEqual(["I was wondering if you could help me.", "I was wondering whether you could send me the figures."]);
    expect(reg(t, "Would it be possible to change my appointment?")).toBe("neutral");
    expect(t.explanation).toContain("Would you like…? is for offers and invitations");
    for (const s of t.situations) for (const p of s.phrases) expect(p).not.toMatch(/^Would you like/);
  });

  it("pins introductions at work, agreeing with A1 greetings", () => {
    const t = introducingYourselfAndInterruptingAtWork;
    expect(choiceAnswer(t.quiz, "Your manager is speaking")).toBe("I'm sorry to interrupt, but could I ask a question?");
    expect(choiceAnswer(t.quiz, "coffee machine")).toBe("Well, I'd better get back to work. See you later.");
    const is = gap(t.quiz, "this ___ Daniel");
    expect(is).toEqual(["is"]);
    expectGap(is, ["is", "Is"], ["are", "be", "am"]);
    const talking = gap(t.quiz, "It was nice ___");
    expect(talking).toEqual(["talking"]);
    expectGap(talking, ["talking", "Talking"], ["talk", "to talk", "talked"]);
    expect(wordbankAnswers(t.quiz)).toEqual(["Sorry to interrupt, but could I make a suggestion?"]);
    expect(wrongToken(t.quiz)).toEqual(["Please", "Pleased"]);
    // A1 agreement: Hi is informal, Mr/Mrs/Ms + family name is formal, Nice to meet you is neutral.
    for (const s of t.situations) for (const p of s.phrases) if (/^Hi\b/.test(p)) expect(s.register, p).toBe("informal");
    expect(reg(t, "Nice to meet you.")).toBe("neutral");
    expect(reg(t, "Excuse me, may I ask a question?")).toBe("formal");
    expect(t.explanation).toContain("Use Mr, Mrs or Ms + the family name, as at A1.");
  });
});
