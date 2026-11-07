import type { RuleTopic } from "../../schema";

export const timeClauses: RuleTopic = {
  slug: "time-clauses",
  title: "Time clauses: I'll call you as soon as I get home",
  summary: "I'll call you when I get home, not when I will get home. Use when, as soon as, until, before and after with a present tense for the future.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 7,

  explanation: [
    "A <b>clause</b> is a group of words with a subject and a verb. A sentence can have one clause or more than one: I'll call you <b>when I get home</b> has two clauses, I'll call you and when I get home. A <b>time clause</b> starts with a time word, like <b>when</b>, <b>as soon as</b>, <b>until</b>, <b>before</b>, <b>after</b> or <b>while</b>, and it says when the other thing happens.",
    "When a time clause is about the <b>future</b>, we use a present tense in it, usually the present simple, not will: I'll call you when I <b>get</b> home, not when I will get home. Wait here until I <b>come</b> back. This is the same rule as for if in the first conditional (A2): If it rains, we'll stay at home. The other clause can have will, going to, can or an imperative, which tells someone to do something.",
    "<b>As soon as</b> means immediately when: I'll text you <b>as soon as</b> I arrive. <b>Until</b> means up to the time when: We'll wait <b>until</b> the rain stops. With a negative, until says that something happens only at that time and not before: I won't leave <b>until</b> you get here.",
    "<b>When</b> is for something that we are sure will happen: When I see Ana, I'll tell her. (I will see her.) <b>If</b> is for something that may happen: If I see Ana, I'll tell her. (Maybe I will see her.)",
    "To show that one thing will be finished before the other, we can also use the present perfect in the time clause: I'll call you as soon as I<b>'ve finished</b> work. I'll call you as soon as I <b>finish</b> work is also correct, and the meaning is almost the same.",
    "We often use <b>while</b> with a continuous form for a longer action, and the other clause says what happens during it: <b>While</b> I <b>was waiting</b> for the bus, I read the news on my phone. For the future, we use the present continuous: I'll read a book while I<b>'m waiting</b>.",
    "Time clauses about the past use past tenses as usual: <b>As soon as</b> I <b>saw</b> her, I knew something was wrong. We <b>waited until</b> the shop <b>opened</b>.",
    "The time clause can come first or second, and the meaning is the same. When it comes first, we usually put a comma after it: <b>As soon as</b> I get home, I'll call you. I'll call you <b>as soon as</b> I get home.",
  ].join("\n\n"),

  form: [
    "future: will / imperative + when / as soon as / until / before / after + a present tense, usually the present simple",
    "I'll call you when I get home. · not: when I will get home",
    "also possible: as soon as I've finished",
    "while + often a continuous form for the longer action: While I was waiting, I read the news.",
    "time clause first → usually a comma: As soon as I get home, I'll call you.",
  ].join("\n"),

  examples: [
    {
      sentence: "I'll call you <b>as soon as</b> I <b>get</b> home.",
      why: "Getting home is in the future, but after <b>as soon as</b> we use the present simple, get, not will get.",
    },
    {
      sentence: "We'll wait here <b>until</b> the rain <b>stops</b>.",
      why: "Until means up to the time when. The time clause is about the future, so it uses the present simple: <b>stops</b>, with -s for the rain (it).",
    },
    {
      sentence: "<b>When</b> you <b>see</b> Tom, tell him to call me.",
      why: "The time clause comes first, so there is a comma. The other clause is an imperative: <b>tell</b>.",
    },
    {
      sentence: "Turn off the lights <b>before</b> you <b>go</b> to bed.",
      why: "Going to bed is in the future, so after <b>before</b> we use the present simple, go.",
    },
    {
      sentence: "<b>While</b> I <b>was waiting</b> for the bus, I read the news on my phone.",
      why: "Waiting is the longer action, so <b>while</b> goes with the past continuous. Reading the news happened during it.",
    },
    {
      sentence: "We <b>waited until</b> the shop <b>opened</b>.",
      why: "This is about the past, so both clauses use the past simple: <b>waited</b> and <b>opened</b>.",
    },
  ],

  pitfall: {
    wrong: "I'll phone you when I will arrive.",
    right: "I'll phone you when I <b>arrive</b>.",
    why: "In a time clause about the future, use a present tense, usually the <b>present simple</b>, not will.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I'll text you as soon as I ___ at the hotel.",
      options: ["arrive", "will arrive", "arrived", "am arrive"],
      answer: 0,
      feedback:
        "After as soon as, we use the present simple for the future, not will: I'll text you as soon as I arrive at the hotel. Arrived is the past, but this is about the future, and am arrive is not a correct form.",
    },
    {
      kind: "gap",
      stem: "Please don't start the meeting until everyone ___ here. (be)",
      answers: ["is", "'s"],
      feedback:
        "After until, we use the present simple for the future, not will. Everyone takes the same verb as he or she, so we use is: Please don't start the meeting until everyone is here.",
    },
    {
      kind: "gap",
      stem: "I'll look after your cat while you ___ away. (be)",
      answers: ["are", "'re"],
      feedback:
        "While you are away is about the future, so we use the present simple, not will: I'll look after your cat while you're away. You are and you're are both correct.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "I'll wait until you will come back.",
        "I'll wait until you come back.",
        "I wait until you will come back.",
        "I'll wait until you came back.",
      ],
      answer: 1,
      feedback:
        "Will goes in the other clause, I'll wait, and the time clause uses the present simple: I'll wait until you come back. Until you will come back uses will in the time clause, and came is the past, but this is about the future.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to finish the sentence: I'll call you …",
      words: ["as", "home.", "I", "soon", "get", "as"],
      answer: "as soon as I get home.",
      feedback:
        "As soon as comes first in the time clause, then the subject, I, then the present simple, get: I'll call you as soon as I get home.",
    },
    {
      kind: "mistake",
      tokens: ["Call", "me", "tomorrow", "as", "soon", "as", "you", "got", "home."],
      wrongIndex: 7,
      correction: "get",
      feedback:
        "Tomorrow is in the future, so the time clause uses the present simple: Call me tomorrow as soon as you get home. Got is the past simple. As soon as you've got home is also possible.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the present simple after when, as soon as, until, before and after for a future meaning is a B1 point, and while with the past continuous for a longer action is A2 to B1. This site's A2 teaches the same tense rule for if in the first conditional and while with the past continuous, and it left time clauses to B1, so this topic joins them. The word clause is defined here for the first time on this site. The rule is given as a present tense, usually the present simple, because the present perfect (as soon as I've finished) and the present continuous (while I'm waiting) are also correct, and the gaps accept every correct form. It comes after the past perfect (order 6), because past time clauses use the narrative tenses.",

  sourceNotes:
    "english_grammar.txt, # Time expressions: the examples with while, before, as soon as, until and when for the future agree with Swan and use the present tense after the time word. The note gives no rule, so the rule, the link to the first conditional, when versus if, the present perfect for a finished first action, while with a continuous form, the past time clauses and the comma are authored from Swan, Practical English Usage. The note's last list (today, immediately, once, yesterday, later) is about time adverbs, not time clauses, and is left out.",
};
