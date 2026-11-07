import type { RuleTopic } from "../../schema";

export const sayAndTell: RuleTopic = {
  slug: "say-and-tell",
  title: "Say and tell: She told me the news",
  summary: "She told me the news, but she said it was late. Put a person after tell, use to after say, and learn tell the truth, tell a story and say sorry.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 17,

  explanation: [
    "<b>Say</b> and <b>tell</b> are both verbs for giving words or information to someone, and both are irregular: say → <b>said</b> → said, tell → <b>told</b> → told. The difference is what comes after them.",
    "After <b>tell</b>, we usually put the person we are speaking to: tell <b>someone</b> something. She <b>told me</b> (that) she was tired. Can you <b>tell me</b> the way to the station? I <b>told Sam</b> the news. We don't usually use tell with no person: She told me she was tired, not She told that she was tired.",
    "After <b>say</b>, we put the words or the information, not the person: She <b>said</b> (that) she was tired. What did he <b>say</b>? We don't put the person just after say: She said she was tired, not She said me she was tired. If we want to name the person, we use <b>to</b>: He <b>said</b> goodbye <b>to</b> everyone. What did she <b>say to</b> you?",
    "With a person's exact words in quotation marks, we usually use <b>say</b>: \"I'm tired,\" she said. For reported speech, see the topic before this one (order 16).",
    "Some phrases always use <b>tell</b>, and here a person is not needed: <b>tell the truth</b>, <b>tell a lie</b>, <b>tell a story</b>, <b>tell a joke</b>. Some phrases always use <b>say</b>: <b>say sorry</b>, <b>say hello</b>, <b>say goodbye</b>, <b>say thank you</b>, <b>say yes</b> and <b>say no</b>. To add the person, use to: I said sorry <b>to</b> her.",
    "To report a question, we use <b>ask</b>, not say or tell: She asked me where I lived.",
  ].join("\n\n"),

  form: [
    "tell + person (+ that …) · She told me (that) she was tired.",
    "say (+ that …) · She said (that) she was tired.",
    "say + something + to + person · He said goodbye to everyone.",
    "tell the truth · tell a lie · tell a story · tell a joke",
    "say sorry · say hello · say goodbye · say thank you · say yes / no",
    "questions → ask · She asked me where I lived.",
  ].join("\n"),

  examples: [
    {
      sentence: "She <b>told me</b> (that) she was leaving.",
      why: "<b>Told</b> has the person, me, just after it.",
    },
    {
      sentence: "She <b>said</b> (that) she was leaving.",
      why: "<b>Said</b> has no person after it. The information comes next.",
    },
    {
      sentence: "He <b>said</b> hello <b>to</b> my parents.",
      why: "To name the person after <b>say</b>, we use <b>to</b>: say hello to someone.",
    },
    {
      sentence: "My grandfather <b>told</b> us a story about the war.",
      why: "We always say <b>tell a story</b>, not say a story. Here us is the person.",
    },
    {
      sentence: "I don't think he's <b>telling the truth</b>.",
      why: "<b>Tell the truth</b> is a fixed phrase, with no person after tell.",
    },
    {
      sentence: "I <b>said sorry</b> for being late.",
      why: "<b>Say sorry</b> is a fixed phrase. We don't say tell sorry.",
    },
  ],

  pitfall: {
    wrong: "She said me that she was tired.",
    right: "She <b>told</b> me that she was tired.",
    why: "Say has no person just after it, but tell does. You can also say She said that she was tired, with no me.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Ana ___ goodbye and left the room.",
      options: ["told", "said", "spoke", "talked"],
      answer: 1,
      feedback:
        "Say goodbye is a fixed phrase, so the answer is said: Ana said goodbye and left the room. We don't say tell goodbye, speak goodbye or talk goodbye.",
    },
    {
      kind: "gap",
      stem: "Yesterday Mark ___ that he was busy, so he couldn't come. (say or tell)",
      answers: ["said"],
      feedback:
        "There is no person after the gap, only that and the information, so we use say. Yesterday is in the past: Mark said that he was busy. Told would need a person: Mark told me that he was busy.",
    },
    {
      kind: "gap",
      stem: "Children, please ___ the truth. Who broke the window? (say or tell)",
      answers: ["tell"],
      feedback:
        "Tell the truth is a fixed phrase, so we use tell, even with no person after it: please tell the truth.",
    },
    {
      kind: "gap",
      stem: "You were rude to your sister. Go and ___ sorry to her. (say or tell)",
      answers: ["say"],
      feedback:
        "Say sorry is a fixed phrase, and we use to before the person: Go and say sorry to her.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "She said me a funny story.",
        "She told to me a funny story.",
        "She said a funny story to me.",
        "She told me a funny story.",
      ],
      answer: 3,
      feedback:
        "We use tell with a story, and the person comes just after tell, with no to: She told me a funny story. We don't say say a story.",
    },
    {
      kind: "mistake",
      tokens: ["Excuse", "me.", "Can", "you", "say", "me", "the", "time,", "please?"],
      wrongIndex: 4,
      correction: "tell",
      feedback:
        "The person, me, comes just after the verb, so we need tell, not say: Can you tell me the time, please?",
    },
  ],

  levelRationale:
    "English Grammar Profile: say and tell in reported speech, with tell + person and say + that, are B1 points, and the spec (section 8) places say and tell at B1, after reported speech (order 16), which uses both verbs. The fixed phrases tell the truth, tell a lie, tell a story, tell a joke and say sorry, hello, goodbye and thank you are common at A2 to B1. Tell with no person is described as not usual rather than impossible, because the fixed phrases have no person. Tell + person + to (told me to wait) is a reported command, which is B2 on this site, so it is left out.",

  sourceNotes:
    "english_grammar.txt, # Say or tell: after say use some information, and after tell use a name or role (a person), agree with Swan. The note's last sentence is not finished. Say + to + person, quotation marks with say, the fixed phrases with tell and say, and ask for questions are authored from Swan, Practical English Usage.",
};
