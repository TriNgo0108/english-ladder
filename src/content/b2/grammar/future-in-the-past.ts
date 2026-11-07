import type { RuleTopic } from "../../schema";

export const futureInThePast: RuleTopic = {
  slug: "future-in-the-past",
  family: "future-forms",
  title: "Future in the past: I was going to call you",
  summary: "I was going to call you, but I forgot. I knew you would love it. Talk about the future as it looked from a time in the past.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 7,

  explanation: [
    "Sometimes we are talking about the past, and we want to say what was still in the <b>future at that time</b>. This is called the <b>future in the past</b>. To make it, we use the past form of a future form: am going to → <b>was going to</b>, will → <b>would</b>, am about to → <b>was about to</b>, and the present continuous for an arrangement → the <b>past continuous</b>.",
    "<b>Was / were going to</b> and the base form is for a plan or an intention that someone had in the past: When I met her, she <b>was going to</b> study medicine. Very often, the plan <b>didn't happen</b>, and we say why with but: I <b>was going to call</b> you, but I forgot. We <b>were going to eat</b> outside, but it started to rain.",
    "<b>Would</b> and the base form is the future seen from the past. It is common after past verbs like knew, thought, hoped, said and promised: I <b>knew</b> you <b>would love</b> it. We <b>thought</b> the film <b>would be</b> boring, but it was great. In B1 reported speech, will moves back to would in the same way: \"I'll help you.\" → She said she <b>would</b> help me. The short form is <b>'d</b>: I knew you'd love it.",
    "This would is different from would for <b>past habits</b> (A2): When I was a child, we <b>would go</b> to the beach every summer. That would is for something that happened again and again. The future-in-the-past would looks forward from one time in the past.",
    "Was going to or would? After verbs like knew, thought and said, <b>both are often correct</b>: I thought it <b>would</b> rain, or I thought it <b>was going to</b> rain. For a plan that didn't happen, we usually use was going to: I was going to call you, but I forgot. Would alone doesn't usually mean a past plan.",
    "<b>Was / were about to</b> and the base form means that something was going to happen <b>very soon</b> after that time. It often goes with when and a past simple action that stopped it: I <b>was about to go</b> to bed when you called. We often add just: I was just about to go to bed.",
    "In A2, we used the present continuous for an arrangement: a plan that is already fixed. Remember: the past continuous is was or were and the verb with -ing. We use it for an arrangement in the past, too: I couldn't come to the party. I <b>was flying</b> to Rome early the next morning.",
  ].join("\n\n"),

  form: [
    "was / were going to + base form → a past plan, often one that didn't happen: I was going to call you, but I forgot.",
    "would ('d) + base form → the future seen from the past: I knew you would love it.",
    "was / were (just) about to + base form → very soon after that time: I was about to go to bed when you called.",
    "past continuous → an arrangement in the past: I was flying to Rome the next morning.",
    "after knew / thought / said → would or was going to: I thought it would rain. I thought it was going to rain.",
  ].join("\n"),

  examples: [
    {
      sentence: "We <b>were going to eat</b> outside, but it started to rain.",
      why: "We had a plan, but it didn't happen. <b>Were going to</b> and the base form, then but and the reason.",
    },
    {
      sentence: "I <b>knew</b> you <b>would love</b> this book.",
      why: "At the time I knew it, you hadn't read the book yet. <b>Would</b> is the future seen from the past.",
    },
    {
      sentence: "We thought the film <b>would be</b> boring, but it was great.",
      why: "Our idea about the future was wrong. We thought the film was going to be boring is also correct.",
    },
    {
      sentence: "I <b>was about to go</b> to bed when you called.",
      why: "I was going to go to bed very soon, but you called first. <b>Was about to</b> and the base form.",
    },
    {
      sentence: "I couldn't come to the party. I <b>was flying</b> to Rome early the next morning.",
      why: "The flight was an arrangement, fixed before the party, so we use the past continuous, <b>was flying</b>.",
    },
  ],

  pitfall: {
    wrong: "I would call you, but I forgot.",
    right: "I <b>was going to</b> call you, but I forgot.",
    why: "For a plan that didn't happen, we usually use <b>was going to</b>. Would alone doesn't usually mean a past plan.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "We ___ a picnic on Sunday, but it rained all day, so we stayed at home.",
      options: ["were going to have", "will have", "are going to have", "would have"],
      answer: 0,
      feedback:
        "We had a plan in the past, but it didn't happen, so we use was / were going to: We were going to have a picnic on Sunday. Will have and are going to have are for the future from now, and would have alone doesn't mean a past plan.",
    },
    {
      kind: "gap",
      stem: "Ten years ago, I had no idea that I ___ a teacher one day. (become)",
      answers: ["would become", "'d become", "was going to become", "was to become"],
      feedback:
        "Ten years ago, becoming a teacher was still in the future, so we use would and the base form: I had no idea that I would become a teacher. I was going to become a teacher is also correct. In formal writing, I was to become is also possible.",
    },
    {
      kind: "gap",
      stem: "I ___ the house when the phone rang, so I stayed and answered it. (leave, about to)",
      answers: ["was about to leave", "was just about to leave"],
      feedback:
        "I was going to leave very soon, but the phone rang first, so we use was about to and the base form: I was about to leave the house when the phone rang. I was just about to leave is also correct.",
    },
    {
      kind: "gap",
      stem: "I couldn't stay for dinner, because I ___ Sam at the station at eight. (meet, past continuous)",
      answers: ["was meeting"],
      feedback:
        "Meeting Sam was an arrangement, fixed before dinner, so we use the past continuous, was and the verb with -ing: I was meeting Sam at the station at eight.",
    },
    {
      kind: "choice",
      stem: "Which sentence uses would for the future seen from a time in the past?",
      options: [
        "When I was a child, we would go to the beach every summer.",
        "We hoped that the rain would stop before the match.",
        "Would you like a cup of coffee?",
      ],
      answer: 1,
      feedback:
        "In We hoped that the rain would stop before the match, would looks forward from the time when we hoped: the match hadn't started yet. We would go to the beach every summer is would for a past habit, and Would you like …? is a polite offer.",
    },
    {
      kind: "mistake",
      tokens: ["When", "we", "booked", "the", "trip,", "I", "knew", "you", "will", "love", "Paris,", "and", "you", "did."],
      wrongIndex: 8,
      correction: "would",
      feedback:
        "The trip and the knowing are in the past, so the future seen from that time is would, not will: When we booked the trip, I knew you would love Paris, and you did.",
    },
    {
      kind: "mistake",
      tokens: ["We", "were", "about", "to", "went", "out", "when", "it", "started", "to", "rain."],
      wrongIndex: 4,
      correction: "go",
      feedback:
        "After was / were about to, we use the base form, not the past simple: We were about to go out when it started to rain. The past is in were.",
    },
  ],

  levelRationale:
    "English Grammar Profile: was going to for a past plan, often one that didn't happen, and would for the future seen from the past appear from B1. The spec (section 8) places future in the past at B2, where the four forms are taught together with the contrast between would for the future and would for past habits, as the future-forms family's B2 topic after A2 will and B1 future continuous and future perfect. It builds on A2 going to, A2 present continuous for future, A2 used to and would, and B1 reported speech (will → would). Following Swan, was going to and would are both accepted after a past verb like had no idea, the plan-that-didn't-happen choice offers only one past-plan form, and the arrangement gap names the past continuous, because was going to meet would also fit. Would for a later event in a story (Ten years later, he would marry her) is left to C1.",

  sourceNotes:
    "Future in the past is (new) in spec section 8, so english_grammar.txt has no section for it. # Future tense and # Make plans for future cover only the future from now. The four forms, the contrast between was going to and would, would for past habits, was about to and the past continuous for an arrangement in the past are authored from Swan, Practical English Usage, which also gives was to + base form as formal, so the become gap accepts it.",
};
