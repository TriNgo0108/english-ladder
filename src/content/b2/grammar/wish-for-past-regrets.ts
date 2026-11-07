import type { RuleTopic } from "../../schema";

export const wishForPastRegrets: RuleTopic = {
  slug: "wish-for-past-regrets",
  family: "wish",
  title: "Wish for past regrets: I wish I'd listened to you",
  summary: "I wish I'd listened to you. If only we hadn't missed the train! Talk about things you are sorry about in the past with wish + had + past participle.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 3,

  explanation: [
    "In B1, we used <b>wish</b> and <b>if only</b> with the past simple to say that we want something to be different <b>now</b>: I wish I <b>lived</b> by the sea. To talk about a <b>regret</b>, something in the past that we are sorry about, we use wish or if only with the <b>past perfect</b>: <b>had</b> and the past participle. I <b>wish</b> I <b>had studied</b> harder at school. (I didn't study hard, and now I'm sorry.) Remember: the past participle is the form of a verb that comes after have: seen, gone, finished.",
    "To be sorry about something you did, use <b>hadn't</b> and the past participle: I <b>wish</b> I <b>hadn't eaten</b> so much. <b>If only</b> we <b>hadn't missed</b> the train! In speaking, we often use the short form <b>'d</b>: I wish I<b>'d</b> known. Here, 'd means had.",
    "As in B1, <b>if only</b> means the same as I wish, but it is stronger, and we often use it with an exclamation mark: <b>If only</b> I<b>'d listened</b> to you!",
    "Compare the time: I <b>wish</b> I <b>knew</b> her number. (I don't know it now.) I <b>wish</b> I <b>had known</b> her number. (I didn't know it then.) This is like the second and third conditionals (order 1): the past simple imagines the present, and the past perfect imagines the past.",
    "For a past regret, don't use the past simple. Say I wish I <b>hadn't said</b> that, not I wish I didn't say that. With the past simple, wish is about now.",
    "For something you were not able to do in the past, use <b>could have</b> and the past participle: I <b>wish</b> I <b>could have</b> come to your party, but I was ill. I wish I <b>had been able to</b> come is also correct.",
    "In informal American English, people sometimes say I wish I would have known. It is not usually considered correct, so use had: I wish I <b>had known</b>.",
  ].join("\n\n"),

  form: [
    "wish / if only + had ('d) + past participle: I wish I'd studied harder.",
    "wish / if only + hadn't + past participle: If only we hadn't missed the train!",
    "wish + could have + past participle: I wish I could have come.",
    "now → wish + past simple: I wish I knew. · past → wish + past perfect: I wish I had known.",
    "not: I wish I didn't say that (for the past) · not usually: I wish I would have known",
  ].join("\n"),

  examples: [
    {
      sentence: "I <b>wish</b> I <b>had studied</b> harder at school.",
      why: "I didn't study hard, and I'm sorry now. For a past regret, we use wish and <b>had</b> and the past participle.",
    },
    {
      sentence: "<b>If only</b> we <b>hadn't missed</b> the train!",
      why: "<b>If only</b> is a stronger way to say I wish. We missed the train, so we use <b>hadn't</b> and the past participle.",
    },
    {
      sentence: "I <b>wish</b> I<b>'d</b> told you the truth.",
      why: "Here, <b>'d</b> means had. I didn't tell you the truth, and I regret it.",
    },
    {
      sentence: "I <b>wish</b> I <b>could have</b> helped you, but I was away.",
      why: "I wasn't able to help in the past, so we use <b>could have</b> and the past participle.",
    },
    {
      sentence: "I <b>wish</b> I <b>knew</b> the answer. I <b>wish</b> I <b>had known</b> the answer in the exam.",
      why: "The first sentence is about now, so it uses the past simple. The second is about the exam, in the past, so it uses the past perfect.",
    },
  ],

  pitfall: {
    wrong: "I wish I didn't say that to her yesterday.",
    right: "I wish I <b>hadn't said</b> that to her yesterday.",
    why: "For a regret about the past, use <b>had</b> or <b>hadn't</b> and the past participle. Wish with the past simple is about now.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I feel bad about what I said to Ana yesterday. I wish I ___ it.",
      options: ["didn't say", "wouldn't say", "hadn't said", "haven't said"],
      answer: 2,
      feedback:
        "This is a regret about yesterday, so we use wish and hadn't and the past participle: I wish I hadn't said it. With didn't say, wish is about now, and we don't use wouldn't or the present perfect after wish for this.",
    },
    {
      kind: "gap",
      stem: "I feel sick. I wish I ___ so much cake at the party last night. (eat + not)",
      answers: ["hadn't eaten", "had not eaten", "'d not eaten"],
      feedback:
        "Last night is in the past, so for a regret we use wish and hadn't and the past participle: I wish I hadn't eaten so much cake. Eat is irregular: eat → ate → eaten.",
    },
    {
      kind: "gap",
      stem: "If only I ___ my umbrella this morning! I'm completely wet. (bring)",
      answers: ["had brought", "'d brought"],
      feedback:
        "I didn't bring my umbrella this morning, and I'm sorry now, so we use if only and had and the past participle: If only I had brought my umbrella! Bring is irregular: bring → brought → brought.",
    },
    {
      kind: "gap",
      stem: "I wish I ___ to your wedding last month, but I was in hospital. (come, can)",
      answers: ["could have come", "could've come", "had been able to come", "'d been able to come"],
      feedback:
        "I wasn't able to come in the past, so we use wish and could have and the past participle: I wish I could have come to your wedding. I wish I had been able to come is also correct. Come is irregular: its past participle is come.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to finish the sentence: I missed the meeting because nobody told me about it. I wish …",
      words: ["known", "the", "I'd", "about", "meeting."],
      answer: "I'd known about the meeting.",
      feedback:
        "After I wish comes the subject with 'd (had), then the past participle: I wish I'd known about the meeting. I didn't know, and now I'm sorry.",
    },
    {
      kind: "mistake",
      tokens: ["I", "wish", "I", "hadn't", "went", "to", "bed", "so", "late", "last", "night."],
      wrongIndex: 4,
      correction: "gone",
      feedback:
        "After hadn't, we need the past participle, not the past simple: I wish I hadn't gone to bed so late last night. Go is irregular: go → went → gone.",
    },
    {
      kind: "mistake",
      tokens: ["If", "only", "I", "have", "listened", "to", "my", "parents", "when", "I", "was", "younger!"],
      wrongIndex: 3,
      correction: "had",
      feedback:
        "This is a regret about the past (when I was younger), so if only takes had and the past participle: If only I had listened to my parents when I was younger! Have listened is the present perfect, which is not used after if only.",
    },
  ],

  levelRationale:
    "English Grammar Profile: wish and if only with the past perfect for regrets about the past are B2 points. This is the wish family's B2 topic after B1 wish-and-if-only, which named it as the next step; it keeps B1's if only as the stronger form, and since B1's were/was and would rules are about the present, it doesn't change them. The comparison with the third conditional (order 1) uses the same past-perfect idea. Wish + could have for past ability is taught, and the ability gap accepts could have and had been able to. I wish I would have is named as informal American English and not usually considered correct, following Swan, and is not tested. Every gap has a past time (last night, this morning, last month) so that wish + past simple does not fit.",

  sourceNotes:
    "english_grammar.txt, # Expressing past regrets with `wish` gives only subject + wish + I had + v3 (the past participle). The past perfect use under # Wish and if only agrees with it, but its example I wish I hadn't forgot should be hadn't forgotten. The note's the past tense of be after wish is were, not was is about the present and is taught in B1. If only for past regrets, the 'd short form, hadn't, wish + could have, the contrast with wish + past simple, and the note on I wish I would have are authored from Swan, Practical English Usage.",
};
