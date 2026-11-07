import type { RuleTopic } from "../../schema";

export const wishAndIfOnly: RuleTopic = {
  slug: "wish-and-if-only",
  family: "wish",
  title: "Wish and if only: I wish I had more time",
  summary: "I wish I lived by the sea. If only I knew her number! Say you want things to be different now, and complain with I wish you wouldn't …",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 10,

  explanation: [
    "We use <b>wish</b> to say that we want something to be different now, but it isn't, and it is difficult or impossible to change. After wish, we use the <b>past simple</b>, but the meaning is about now: I <b>wish</b> I <b>lived</b> by the sea. (I don't live by the sea.) I <b>wish</b> I <b>had</b> more time. (I don't have much time.) This is like the if clause in the second conditional (order 9): past form, present meaning.",
    "For something you can't do, use <b>could</b>, the past of can: I <b>wish</b> I <b>could</b> swim. (I can't swim.) To say no, use the past simple with didn't, or another negative past form: I <b>wish</b> I <b>didn't</b> have so much work. I wish it <b>wasn't</b> so cold.",
    "With be, we can use <b>were</b> for every subject: I wish I <b>were</b> taller. I wish it <b>were</b> Friday. Were is often preferred, especially in writing. I wish I <b>was</b> and I wish it <b>was</b> are also correct and common in informal English.",
    "<b>If only</b> means the same as I wish, but it is stronger, and we often use it with an exclamation mark: <b>If only</b> I <b>knew</b> her number! <b>If only</b> it <b>weren't</b> raining!",
    "We use <b>wish</b> + someone + <b>would</b> or <b>wouldn't</b> and the base form to complain about what another person does, when we want them to change: I <b>wish</b> you <b>wouldn't</b> shout. I <b>wish</b> my brother <b>would</b> tidy his room. We can also use it for a situation we want to change: I wish it <b>would</b> stop raining. We don't say I wish I would: for yourself, use the past simple or could: I wish I <b>could</b> stop eating chocolate, not I wish I would stop.",
    "Wish or hope? Use <b>hope</b> for something that is possible and may really happen. After hope, we usually use the present simple, even for the future: I <b>hope</b> you <b>pass</b> your exam. Use <b>wish</b> for something that is not true or not likely: I <b>wish</b> I <b>spoke</b> German.",
    "To talk about regrets about the past, we use wish with had and the past participle: I wish I had studied harder. This is a B2 topic.",
  ].join("\n\n"),

  form: [
    "wish / if only + past simple (present meaning): I wish I lived by the sea.",
    "wish + could: I wish I could swim.",
    "I wish I were … (often preferred) · I wish I was … (common in informal English)",
    "wish + someone + would / wouldn't + base form (a complaint): I wish you wouldn't shout.",
    "not: I wish I would …",
    "possible → hope: I hope you pass.",
  ].join("\n"),

  examples: [
    {
      sentence: "I <b>wish</b> I <b>lived</b> nearer to my work.",
      why: "I don't live near my work, and I want this to be different now. After wish, we use the past simple: <b>lived</b>.",
    },
    {
      sentence: "<b>If only</b> I <b>had</b> a bit more money!",
      why: "<b>If only</b> is a stronger way to say I wish. It also takes the past simple, <b>had</b>, for a present meaning.",
    },
    {
      sentence: "I <b>wish</b> I <b>could</b> speak Japanese.",
      why: "I can't speak Japanese, so we use <b>could</b>, the past of can.",
    },
    {
      sentence: "I <b>wish</b> it <b>were</b> the weekend.",
      why: "With be, <b>were</b> is often preferred for every subject. I wish it was the weekend is also correct in informal English.",
    },
    {
      sentence: "I <b>wish</b> you <b>wouldn't</b> leave your shoes in the kitchen.",
      why: "This is a complaint about what another person does, so we use <b>wish</b> + you + <b>wouldn't</b> and the base form, leave.",
    },
    {
      sentence: "I <b>hope</b> you <b>have</b> a great holiday.",
      why: "A great holiday is possible, so we use <b>hope</b>, not wish, and the present simple.",
    },
  ],

  pitfall: {
    wrong: "I wish I would have a car.",
    right: "I wish I <b>had</b> a car.",
    why: "For a wish about now, use the <b>past simple</b> after I wish. Don't use I wish I would.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I don't have a car. I wish I ___ one.",
      options: ["had", "have", "would have", "will have"],
      answer: 0,
      feedback:
        "For a wish about now, we use the past simple after wish: I wish I had one. We don't say I wish I would, and have and will have are not used after wish.",
    },
    {
      kind: "gap",
      stem: "I'm quite short. I wish I ___ taller. (be)",
      answers: ["were", "was", "could be"],
      feedback:
        "After wish, we use the past form of be for a present meaning: I wish I were taller. Were is often preferred, especially in writing, and I wish I was taller is also correct in informal English. I wish I could be taller is also correct.",
    },
    {
      kind: "gap",
      stem: "I can't swim. I wish I ___ swim. (can)",
      answers: ["could", "was able to", "were able to"],
      feedback:
        "For something you can't do, use could, the past of can: I wish I could swim. I wish I was able to swim, or were able to swim, is also correct.",
    },
    {
      kind: "gap",
      stem: "My brother always takes my things. I wish he ___ my things without asking. (take + not, would)",
      answers: ["wouldn't take", "would not take", "'d not take"],
      feedback:
        "This is a complaint about what another person does, so we use wish + he + wouldn't and the base form: I wish he wouldn't take my things without asking. Wouldn't is the short form of would not.",
    },
    {
      kind: "choice",
      stem: "Your friend has an exam tomorrow. Which sentence is correct?",
      options: ["I wish you pass your exam.", "I hope you pass your exam.", "I wish you will pass your exam."],
      answer: 1,
      feedback:
        "Passing the exam is possible, so we use hope and the present simple: I hope you pass your exam. Wish is for things that are not true or not likely, and it is not followed by the present simple or will.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to finish the sentence: I wish …",
      words: ["play", "my", "music", "wouldn't", "neighbours", "so", "loudly."],
      answer: "my neighbours wouldn't play music so loudly.",
      feedback:
        "This is a complaint about other people, so after I wish comes the subject, my neighbours, then wouldn't and the base form, play: I wish my neighbours wouldn't play music so loudly.",
    },
    {
      kind: "mistake",
      tokens: ["My", "flat", "is", "tiny.", "I", "wish", "it", "is", "bigger."],
      wrongIndex: 7,
      correction: "were",
      feedback:
        "After wish, we use the past form for a present meaning: I wish it were bigger. I wish it was bigger is also correct in informal English. My flat is tiny is a fact, so it stays in the present simple.",
    },
  ],

  levelRationale:
    "English Grammar Profile: wish with the past simple for a present situation is a B1 point, and if only with the same pattern is close to it. The B1 plan puts wish with would for complaints here too, so it is taught for complaints about other people and situations, with the rule that we don't say I wish I would. This topic comes after the second conditional (order 9), because it uses the same past form for a present meaning, and were and was are taught the same way and both accepted. Wish with the past perfect for past regrets is only named, because it is the B2 topic in this family. Hope is compared, because it is the usual choice for a possible future.",

  sourceNotes:
    "english_grammar.txt, # Wish and if only: something we want to be different but that is difficult or impossible to change, wish and if only with the past form for the present, and wish with would for things which annoy us agree with Swan. The note says the past of be after wish is 'were, not was'; Swan gives were as more formal and was as common and correct in informal English, so this topic teaches both. The note's past use with the past perfect is B2 on this site and is only named here, and its example I wish I hadn't forgot should be hadn't forgotten. The note says would + infinitive; this topic says the base form. Could after wish, the rule against I wish I would, wish for situations (I wish it would stop raining), and hope for possible things are authored from Swan, Practical English Usage.",
};
