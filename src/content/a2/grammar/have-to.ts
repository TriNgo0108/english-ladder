import type { RuleTopic } from "../../schema";

export const haveTo: RuleTopic = {
  slug: "have-to",
  title: "Have to: things that are necessary",
  summary: "Use have to and has to for things that are necessary, often because of a rule: I have to wear a uniform. Learn why don't have to is not mustn't.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 14,

  explanation: [
    "We use <b>have to</b> and the base form of a verb to say that something is necessary. Often the reason is a rule, a law or the situation, not what the speaker wants: I <b>have to wear</b> a uniform at work. In the UK, you <b>have to drive</b> on the left. Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
    "Have to changes with the subject, like the verb have: I, you, we and they <b>have to</b>, but he, she and it <b>has to</b>: She <b>has to get</b> up at six. We do not usually use a short form of have here: I have to go, not I've to go.",
    "To say no and to ask questions, use <b>do</b> and <b>does</b>, as with other verbs in the present simple: I <b>don't have to</b> work on Saturdays. He <b>doesn't have to</b> wear a tie. <b>Do</b> you <b>have to</b> work tomorrow? Yes, I do. No, I don't. <b>Does</b> she <b>have to</b> pay? Yes, she does. No, she doesn't. After does and doesn't, use have, not has.",
    "Have to has a past and a future. The past is <b>had to</b> for every subject: I <b>had to wait</b> an hour. To say no and to ask questions, use did: We <b>didn't have to</b> pay. <b>Did</b> you <b>have to</b> wait? The future is <b>will have to</b>: You<b>'ll have to</b> take a taxi.",
    "<b>Don't have to</b> and <b>mustn't</b> are very different. Don't have to means that it is <b>not necessary</b>. You can do it if you want, but you don't need to: You <b>don't have to</b> come to the party. (You can come, but it's OK if you don't.) Mustn't means that it is <b>not allowed</b>, or that it is very important not to do it: You <b>mustn't</b> tell anyone. (Don't tell anyone!)",
    "Have to or must? Often both are correct. Many people, especially in British English, use <b>must</b> when the speaker feels that something is important, and <b>have to</b> when the reason is a rule or another person: I must call my mum. (I want to.) I have to wear a uniform. (It's a rule at my school.) In American English, people usually use have to for both. In questions, we usually say Do I have to …?, not Must I …? And must has no past form, so for the past we always use had to.",
    "When people speak, especially in British English, they also use <b>have got to</b> with the same meaning as have to: I<b>'ve got to</b> go. She<b>'s got to</b> work late tonight. This topic teaches have to, but have got to is correct too.",
  ].join("\n\n"),

  form: [
    "I/you/we/they have to + base form · he/she/it has to + base form",
    "I/you/we/they don't have to · he/she/it doesn't have to",
    "Do you have to …? · Does she have to …? · Yes, I do. · No, she doesn't.",
    "past: had to · didn't have to · Did you have to …? · future: will have to",
    "don't have to = not necessary · mustn't = not allowed",
  ].join("\n"),

  examples: [
    {
      sentence: "I <b>have to wear</b> a uniform at school.",
      why: "It is a rule at the school, so <b>have to</b> is a good choice. After have to, wear is in the base form.",
    },
    {
      sentence: "My brother <b>has to get</b> up at five for work.",
      why: "The subject is my brother (he), so we use <b>has to</b>, not have to.",
    },
    {
      sentence: "You <b>don't have to</b> pay. The museum is free.",
      why: "Paying is not necessary, so we use <b>don't have to</b>. It does not mean that paying is not allowed.",
    },
    {
      sentence: "<b>Does</b> she <b>have to</b> work on Sundays?",
      why: "In a question, <b>does</b> comes before the subject, and then we use have, not has: Does she have to …?",
    },
    {
      sentence: "We <b>had to wait</b> two hours for the train.",
      why: "The past of have to is <b>had to</b>, for every subject.",
    },
    {
      sentence: "In the library, you <b>mustn't</b> talk on your phone, but you <b>don't have to</b> turn it off.",
      why: "Talking on your phone is not allowed, so we use <b>mustn't</b>. Turning it off is not necessary, so we use <b>don't have to</b>.",
    },
  ],

  pitfall: {
    wrong: "She have to leave early today.",
    right: "She <b>has to</b> leave early today.",
    why: "Have to changes like the verb have. With he, she and it, use <b>has to</b>.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "The museum is free. You ___ pay.",
      options: ["mustn't", "don't have to", "doesn't have to", "don't must"],
      answer: 1,
      feedback:
        "The museum is free, so paying is not necessary: You don't have to pay. Mustn't would mean that paying is not allowed. With you, we use don't, not doesn't, and we never say don't must.",
    },
    {
      kind: "gap",
      stem: "It's very late. Tom ___ now. (go, have to)",
      answers: ["has to go", "has got to go", "'s got to go", "will have to go", "'ll have to go"],
      feedback:
        "Tom is he, so we use has to and the base form: Tom has to go now. Has got to go and Tom's got to go are also correct, and common when people speak. Tom will have to go now is correct too.",
    },
    {
      kind: "gap",
      stem: "It's Sunday tomorrow, so I ___ up early. (get + not, have to)",
      answers: ["don't have to get", "do not have to get", "haven't got to get", "have not got to get", "won't have to get", "will not have to get"],
      feedback:
        "Getting up early is not necessary on Sunday, so we use don't have to and the base form: I don't have to get up early. Haven't got to get up and won't have to get up are also correct. Mustn't would mean that it is not allowed.",
    },
    {
      kind: "gap",
      stem: "The last bus left at ten, so we ___ home. (walk, have to: past)",
      answers: ["had to walk"],
      feedback:
        "The past of have to is had to, for every subject, and the verb after it is in the base form: We had to walk home.",
    },
    {
      kind: "choice",
      stem: "Be careful! You ___ touch that. It's very hot.",
      options: ["don't have to", "doesn't have to", "mustn't"],
      answer: 2,
      feedback:
        "Touching it is dangerous, so it is very important not to do it: You mustn't touch that. Don't have to would mean only that it is not necessary, and doesn't have to is for he, she and it.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["have", "work", "Do", "tomorrow?", "you", "to"],
      answer: "Do you have to work tomorrow?",
      feedback:
        "Do comes first, then the subject, you, then have to and the base form: Do you have to work tomorrow?",
    },
    {
      kind: "mistake",
      tokens: ["Why", "does", "he", "has", "to", "wear", "a", "suit?"],
      wrongIndex: 3,
      correction: "have",
      feedback:
        "After does, we use have, not has. The -s is already in does: Why does he have to wear a suit?",
    },
  ],

  levelRationale:
    "English Grammar Profile: have to for necessity, in the present and the past, with don't have to and questions with do, is an A2 point. This topic comes after should and must, so that it can teach the classic contrast between mustn't (not allowed) and don't have to (not necessary). The difference between must and have to is given with often and usually, because it is a tendency, mostly in British English, and not a hard rule. Have got to is shown as a spoken form and accepted in the gaps, but not taught in detail.",

  sourceNotes:
    "english_grammar.txt, # Modal verb, ## Modal verb (obligation 1), and # Infinitives, ## With have to. Have to for obligation from rules, laws or the situation, must for obligation that often comes from the speaker, and 'have to and don't have to are not the opposite in meaning' agree with Swan. Swan notes that this must and have to difference is mainly British, and that American English often uses have to for both, so this topic hedges it with often and usually. The note says have got to is 'for an obligation at the time of speaking, not a general obligation'. Swan says that have got to is less usual for habits, so the gap for have got to uses a one-time situation (It's very late. Tom has to go now.). Forms with do, does and did, had to, will have to, no short form I've to, and questions with Do I have to …? are authored from Swan, Practical English Usage. Need to and needn't, also in the note, are left to later levels.",
};
