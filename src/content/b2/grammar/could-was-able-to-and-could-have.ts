import type { RuleTopic } from "../../schema";

export const couldWasAbleToAndCouldHave: RuleTopic = {
  slug: "could-was-able-to-and-could-have",
  family: "modal-ability",
  title: "Could, was able to and could have: ability in the past",
  summary: "I could swim when I was five. The door was locked, but we were able to climb in. Talk about past ability, single successes and chances you didn't take.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 6,

  explanation: [
    "In A1, we used can to say that a person knows how to do something: I can swim. For <b>general ability in the past</b>, something you could do at any time, use <b>could</b> or <b>couldn't</b> and the base form: I <b>could</b> read when I was four. My dad <b>couldn't</b> swim until he was thirty. Remember: the base form is the verb as you see it in a dictionary, with nothing added. <b>Was able to</b> and <b>were able to</b> are also possible here: I <b>was able to</b> read when I was four.",
    "For <b>one success</b> at one time in the past, when someone did something difficult, we use <b>was able to</b>, <b>were able to</b> or <b>managed to</b>, not usually could: The fire spread quickly, but everyone <b>was able to</b> get out. The traffic was terrible, but we <b>managed to</b> catch the train. Not: everyone could get out.",
    "In negative sentences, <b>couldn't is fine</b> for one time too. It means the same as wasn't able to: I tried for an hour, but I <b>couldn't</b> open the jar. We <b>weren't able to</b> find tickets for the concert.",
    "With verbs of the senses and of thinking, like see, hear, smell, understand and remember, we often use could for one time: When I opened the window, I <b>could see</b> the sea. I <b>could</b> hear voices in the next room.",
    "For a past ability or chance that someone <b>didn't use</b>, we use <b>could have</b> and the past participle: I <b>could have taken</b> the job, but the salary was too low. (I had the chance, but I didn't take the job.) This is a past modal (order 4): a modal verb, then have, then the past participle. We also use it to complain that someone didn't do something: You <b>could have told</b> me! In speaking, we often say <b>could've</b>.",
    "<b>Couldn't have</b> and the past participle means that something would not have been possible in a different past: I <b>couldn't have done</b> it without your help. (You helped, and I did it.)",
  ].join("\n\n"),

  form: [
    "could / couldn't + base form → general ability in the past: I could swim when I was five.",
    "was / were able to, managed to + base form → one success: We were able to climb in. · not usually: could",
    "couldn't / wasn't able to → also for one time: I couldn't open the jar.",
    "could + see, hear, smell, understand, remember → also for one time",
    "could have + past participle → a chance not used: I could have taken the job.",
    "couldn't have + past participle → not possible: I couldn't have done it without you.",
  ].join("\n"),

  examples: [
    {
      sentence: "I <b>could</b> swim when I was five.",
      why: "This is general ability, true at any time when I was five, so we use <b>could</b> and the base form.",
    },
    {
      sentence: "The door was locked, but we <b>were able to</b> climb in through a window.",
      why: "This is one success at one time, so we use <b>were able to</b>, not could. Managed to is also correct.",
    },
    {
      sentence: "I looked everywhere, but I <b>couldn't</b> find my keys.",
      why: "In a negative sentence, <b>couldn't</b> is fine for one time. It means wasn't able to.",
    },
    {
      sentence: "From the top of the hill, we <b>could see</b> the whole city.",
      why: "With see and other verbs of the senses, we often use <b>could</b> for one time.",
    },
    {
      sentence: "I <b>could have taken</b> the job, but the salary was too low.",
      why: "I had the chance, but I didn't take it, so we use <b>could have</b> and the past participle.",
    },
  ],

  pitfall: {
    wrong: "The traffic was terrible, but we could catch the last train.",
    right: "The traffic was terrible, but we <b>were able to</b> catch the last train.",
    why: "For one success at one time in the past, use <b>was able to</b>, <b>were able to</b> or <b>managed to</b>, not could.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "When I was a child, I ___ run really fast.",
      options: ["can", "could", "was able", "could to"],
      answer: 1,
      feedback:
        "This is general ability in the past, so we use could and the base form: When I was a child, I could run really fast. I was able to run is also correct, but was able needs to. Can is for now, and there is no to after could.",
    },
    {
      kind: "choice",
      stem: "The fire spread quickly, but luckily everyone ___ get out of the building.",
      options: ["could", "can", "could have", "was able to"],
      answer: 3,
      feedback:
        "This is one success at one time, so we use was able to: Everyone was able to get out. Managed to is also correct. We don't usually use could for one success, can is for now, and could have needs a past participle.",
    },
    {
      kind: "gap",
      stem: "I lost my keys yesterday, but in the end I ___ them under the sofa. (find, able)",
      answers: ["was able to find"],
      feedback:
        "This is one success at one time, so we use was able to and the base form: In the end, I was able to find them. I managed to find them is also correct. We don't usually use could for one success.",
    },
    {
      kind: "gap",
      stem: "I tried for an hour, but I ___ the jar. (open + not, can)",
      answers: ["couldn't open", "could not open", "wasn't able to open", "was not able to open"],
      feedback:
        "In a negative sentence, couldn't is fine for one time: I couldn't open the jar. I wasn't able to open it is also correct, and means the same.",
    },
    {
      kind: "gap",
      stem: "I ___ the job in Rome, but I didn't want to leave my family. (take, could)",
      answers: ["could have taken", "could've taken"],
      feedback:
        "I had the chance, but I didn't take the job, so we use could have and the past participle: I could have taken the job in Rome. Take is irregular: take → took → taken.",
    },
    {
      kind: "mistake",
      tokens: ["The", "traffic", "was", "terrible,", "but", "we", "could", "catch", "the", "last", "train."],
      wrongIndex: 6,
      correction: "were able to",
      feedback:
        "Catching the train was one success at one time, so we use were able to, not could: The traffic was terrible, but we were able to catch the last train. Managed to is also correct.",
    },
    {
      kind: "mistake",
      tokens: ["Why", "didn't", "you", "call", "me?", "I", "can", "have", "helped", "you."],
      wrongIndex: 6,
      correction: "could",
      feedback:
        "I had the chance to help, but it didn't happen, so we use could have and the past participle: I could have helped you. I would have helped you is also correct. Can have is not used for the past.",
    },
  ],

  levelRationale:
    "English Grammar Profile: could for general past ability is early, was able to and managed to for one success are B1 to B2 points, and could have and couldn't have for unreal past ability are B2. This is the modal-ability family's B2 topic after A1 can-for-ability, and it keeps A1's base form after the modal. Following Swan, could for one success is given with not usually, and couldn't is taught as fine for one time, so the negative gap accepts couldn't and wasn't able to. Could with verbs of the senses for one time is taught, and no gap uses those verbs. Each could or was able to item says clearly whether it is general (when I was a child) or one success (in the end, luckily), and the single-success gap names able in the cue, because managed to is also correct. It comes after order 4, which defines the past modal.",

  sourceNotes:
    "english_grammar.txt, # Describing certainty in the past: its first half is about ability, not certainty. This topic keeps that ability half: could for general past ability, was/were able to for ability at a specific moment, and could have done for unreal or imagined ability agree with Swan. Its certainty half is taught in the describing-certainty-in-the-past topic (order 4). The note's example the sary should be the salary. Managed to, not usually could for one success, couldn't for one time, could with verbs of the senses, could have for complaints, and couldn't have are authored from Swan, Practical English Usage.",
};
