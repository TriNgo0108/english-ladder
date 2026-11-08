import type { PhraseTopic } from "../../schema";

export const handlingPushback: PhraseTopic = {
  slug: "handling-pushback",
  family: "agreeing-and-disagreeing",
  title: "Handling pushback: I take your point, You're right that…, but…",
  summary: "When someone argues against your idea, show that you have listened, accept what is fair, hold on to your main point, and move the discussion on.",
  level: "c1",
  category: "speaking",
  shape: "phrases",
  order: 19,

  explanation: [
    "<b>Pushback</b> is criticism of an idea or a plan, or resistance to it, often in a meeting. At B1, you learned to disagree politely: I see what you mean, but… and I take your point, but… This topic is about the next step: answering someone who disagrees with <b>you</b>, so that you keep your main point and the discussion stays calm. Remember: register means how formal or informal your words are. Most of these phrases are neutral, as at B1.",
    "<b>Acknowledge the point first.</b> Show that you have listened before you answer: <b>I take your point.</b> <b>I understand your concern.</b> <b>That's a fair point.</b> <b>I can see why you'd feel that way.</b> This makes the other person more ready to listen to you.",
    "<b>Stand your ground.</b> To stand your ground means to keep your view when someone argues against it. <b>I see what you're saying, but I'd still argue that</b> … <b>I still think</b> it's the right decision. Still shows that you have listened and haven't changed your view. With a colleague you know well, <b>I hear you, but</b> … is common: I hear you, but I still think we should go ahead. It is informal. To a senior colleague or a client, <b>With respect</b>, … is formal, and it warns that you are going to disagree: With respect, I don't think that's quite right. As at B1, I'm afraid I see it differently is formal too.",
    "<b>Concede part of the point.</b> Remember: accepting that one fact is true, while saying that it doesn't change your main point, is called concession. Accept the part that is fair, then give your main point after but: <b>You're right that</b> + a clause, <b>but</b> …: You're right that it's expensive, but it'll save us money in the long run. <b>That's true, but</b> … is neutral, as at B1. <b>I accept that</b> …, <b>but</b> … is a little more careful. Granted (order 10) does the same at the start of a sentence.",
    "<b>Move the discussion forward.</b> Offer a next step, so the disagreement doesn't go round in circles: <b>Why don't we</b> try it for a month and see what happens? Let's look at the figures again before we decide. If neither side will change its view, <b>agree to disagree</b>, or agree to differ in British English: accept that you have different opinions, and move on. Could we agree to disagree on that point?",
    "As at B1, I don't agree at all and I totally disagree are very direct, and No way! and Rubbish! are informal and can sound rude. Under pushback, a calm answer usually works better than a stronger one.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Acknowledging the other person's point",
      phrases: ["I take your point.", "I understand your concern.", "That's a fair point.", "I can see why you'd feel that way."],
      register: "neutral",
    },
    {
      situation: "Standing your ground",
      phrases: [
        "I see what you're saying, but I'd still argue that the plan will work.",
        "I still think it's the right decision.",
        "I take your point, but I still think we should launch in May.",
      ],
      register: "neutral",
    },
    {
      situation: "Standing your ground with a colleague you know well",
      phrases: ["I hear you, but I still think we should go ahead.", "Fair enough, but it's still worth a try."],
      register: "informal",
    },
    {
      situation: "Standing your ground with a senior colleague or a client",
      phrases: ["With respect, I don't think that's quite right.", "I'm afraid I see it differently."],
      register: "formal",
    },
    {
      situation: "Conceding part of the point",
      phrases: [
        "You're right that it's expensive, but it'll save us money in the long run.",
        "That's true, but we can't wait any longer.",
        "I accept that the timing isn't perfect, but the risk of waiting is greater.",
      ],
      register: "neutral",
    },
    {
      situation: "Moving the discussion forward",
      phrases: [
        "Why don't we try it for a month and see what happens?",
        "Let's look at the figures again before we decide.",
        "Could we agree to disagree on that point?",
      ],
      register: "neutral",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "In a meeting, a colleague says that your plan costs too much. You agree that it costs a lot, but you still think it is the right plan. What do you say?",
      options: [
        "You're wrong. It isn't expensive at all.",
        "You're right that it costs a lot, but it will pay for itself within two years.",
        "You're right. Let's forget about the plan.",
        "No way!",
      ],
      answer: 1,
      feedback:
        "You're right that …, but … accepts the fair part (it costs a lot) and keeps your main point after but. You're wrong denies something you agree with, and it sounds rude. You're right. Let's forget about the plan gives up your view. No way! is informal and too strong for a meeting.",
    },
    {
      kind: "choice",
      stem: "A senior client says that the figures in your report are wrong. You are sure that they are correct. You want to disagree firmly but politely. What do you say?",
      options: [
        "Rubbish! The figures are fine.",
        "Sorry, you're right. I'll change them.",
        "I couldn't agree more.",
        "With respect, I don't think that's quite right. Can I show you where the figures come from?",
      ],
      answer: 3,
      feedback:
        "With respect is formal, and it warns politely that you are going to disagree; the offer to show the source moves the discussion on. Rubbish! is informal and rude to a client. Sorry, you're right gives up a view that you are sure of, and I couldn't agree more means that you agree completely.",
    },
    {
      kind: "gap",
      stem: "You're right ___ the deadline is tight, but we can still meet it if we start now. (one word)",
      answers: ["that"],
      feedback:
        "You're right that + a clause accepts one part of the other person's point, and but then gives your main point: You're right that the deadline is tight, but we can still meet it.",
    },
    {
      kind: "gap",
      stem: "Neither of us is going to change our mind, so perhaps we should just agree to ___. (one word)",
      answers: ["disagree", "differ"],
      feedback:
        "Agree to disagree means accept that you have different opinions, and move on. Agree to differ means the same, and it is common in British English.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to show that you understand the other person's worry.",
      words: ["feel", "that way.", "you", "I can", "understand why"],
      answer: "I can understand why you feel that way.",
      feedback:
        "I can understand why … shows that you understand the other person's feelings, before you answer their point. After why, use the order of a normal sentence: why you feel, not why do you feel.",
    },
    {
      kind: "choice",
      stem: "You and a close friend are planning a holiday. She says your plan is too expensive. You partly agree, but you still want to go. What is the most natural reply to a friend?",
      options: [
        "With respect, I see it differently.",
        "Fair enough, it's a bit pricey, but it'll be worth it.",
        "I'm afraid that is not something I can agree to.",
        "Your concern has been noted.",
      ],
      answer: 1,
      feedback:
        "Fair enough is informal, and it accepts part of your friend's point before but gives your view, so it suits a friend. With respect, I see it differently and I'm afraid that is not something I can agree to are formal, and Your concern has been noted sounds cold, like an official letter.",
    },
  ],

  levelRationale:
    "The CEFR's C1 descriptors for formal discussion and meetings say a learner can argue a formal position convincingly, responding to questions and comments and answering complex lines of counter-argument fluently, spontaneously and appropriately. Answering pushback is that skill. The spec (section 8) places handling pushback at C1, and the plan makes it the C1 topic of the agreeing-and-disagreeing family, after B1 agreeing-and-disagreeing, whose labels it keeps: I take your point, but… and That's true, but… neutral, I'm afraid I see it differently formal, I don't agree at all neutral but very direct, and No way! and Rubbish! informal. It also keeps B2's labels for I understand your concern and That's a fair point (neutral). The grammar is B1-C1: you're right that + a clause, the indirect order after I can see why, and concession (order 9), whose definition it reuses word for word with register's; Granted comes from order 10. The English Grammar Profile has no entry for these phrases, which are lexical; the labels follow the learner dictionaries (with respect formal; I hear you and fair enough informal), as described in the source notes.",

  sourceNotes:
    "english_grammar.txt, # Statements, has partial agreement (I see what you mean. However, I take your point, but, Not necessarily, I'm not so sure), Look I understand what you're saying, but…, Well, I take your point, but…, But even if we …, we still can't, I understand what you say, but I disagree = I take your point, but I don't think that's right, and disagreement (That's not how I see it, I don't share your view). # Agreeing and disagreeing has the so / neither answers taught at B1. These agree with Swan, Practical English Usage, and are used or built on. The note's 'I understand what you say' should be what you're saying, and its I'm on board and I'm with you are agreement, not pushback, so they are not used. Register labels follow the Oxford Advanced Learner's Dictionary and Merriam-Webster as I know them: with respect is marked formal, and I hear you and fair enough are marked informal. The learner dictionaries' online pages could not be fetched for this task (HTTP 403), so the labels were not re-checked live; Wiktionary records the criticism sense of pushback. Agree to differ follows Swan's British usage; both forms are accepted in the quiz.",
};
