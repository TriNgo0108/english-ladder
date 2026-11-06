import type { RuleTopic } from "../../schema";

export const verbPlusGerundOrInfinitive: RuleTopic = {
  slug: "verb-plus-gerund-or-infinitive",
  family: "gerunds-and-infinitives",
  title: "Verb + -ing or verb + to: I enjoy swimming, I want to swim",
  summary: "After enjoy, finish and mind, use the -ing form. After want, decide, hope, need and would like, use to and the base form. Like, love and start take both.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 21,

  explanation: [
    "When one verb comes after another verb, the second verb is often in the <b>-ing</b> form or has <b>to</b> before it. The first verb decides which: I <b>enjoy swimming</b>. I <b>want to swim</b>. Remember: a verb is a word like go, eat or have.",
    "To and the base form together, like to buy or to see, are called the <b>infinitive</b>. Remember: the base form is the verb as you see it in a dictionary, with nothing added. When the -ing form of a verb works like a noun, as the name of an activity, we call it the <b>gerund</b>: I enjoy <b>swimming</b>. <b>Swimming</b> is good for you. Remember: a noun is a word for a person, a thing, an animal or a place.",
    "After <b>enjoy</b>, <b>finish</b> and <b>mind</b>, use the -ing form: I <b>enjoy cooking</b>. We <b>finished eating</b> at nine. I <b>don't mind waiting</b>. (Waiting is not a problem for me.) We usually use mind with not and in questions: Do you <b>mind waiting</b>? Do not use to after these verbs: I enjoy cooking, not I enjoy to cook.",
    "Spell the -ing form as you do in the present continuous. Most verbs just add -ing: read → reading. Drop an e that we do not say: dance → dancing. Some short verbs write the last letter two times: swim → swimming.",
    "After <b>want</b>, <b>decide</b>, <b>hope</b>, <b>need</b>, <b>learn</b> and <b>would like</b>, use the infinitive, to and the base form: I <b>want to go</b> home. We <b>decided to stay</b>. I <b>hope to see</b> you soon. She's <b>learning to drive</b>. I<b>'d like to visit</b> Japan. Do not use -ing after these verbs: I want to go home, not I want going home.",
    "After <b>like</b>, <b>love</b>, <b>hate</b>, <b>start</b> and <b>begin</b>, both are correct, usually with little or no difference in meaning: I <b>like swimming</b>. I <b>like to swim</b>. It <b>started raining</b>. It <b>started to rain</b>.",
    "But <b>would like</b> is different from like. After would like, use only to and the base form: I'd like <b>to dance</b>, not I'd like dancing. I like dancing means that I enjoy it in general. I'd like to dance means that I want to dance now or soon.",
    "To say no, use don't or doesn't before the first verb, as in the present simple: I <b>don't enjoy</b> running. She <b>doesn't want</b> to come.",
  ].join("\n\n"),

  form: [
    "enjoy / finish / mind + -ing: I enjoy reading.",
    "want / decide / hope / need / learn / would like + to + base form: I want to read.",
    "like / love / hate / start / begin + -ing or to + base form: I love reading. I love to read.",
    "would like + to + base form only: I'd like to read, not I'd like reading.",
  ].join("\n"),

  examples: [
    {
      sentence: "I <b>enjoy cooking</b> for my friends.",
      why: "After <b>enjoy</b>, use the -ing form: cooking, not to cook.",
    },
    {
      sentence: "Did you <b>finish reading</b> my book?",
      why: "After <b>finish</b>, use the -ing form: reading.",
    },
    {
      sentence: "She <b>wants to be</b> a doctor.",
      why: "After <b>want</b>, use to and the base form: to be.",
    },
    {
      sentence: "They <b>decided to buy</b> a bigger car.",
      why: "After <b>decide</b>, use to and the base form. Only decided shows the past. Buy stays in the base form, not bought.",
    },
    {
      sentence: "My son <b>loves playing</b> football.",
      why: "After <b>love</b>, both forms are correct: My son loves to play football means the same.",
    },
    {
      sentence: "I<b>'d like to visit</b> my cousins in Canada one day.",
      why: "After <b>would like</b> ('d like), use only to and the base form: to visit, not visiting.",
    },
  ],

  pitfall: {
    wrong: "I enjoy to read in bed.",
    right: "I <b>enjoy reading</b> in bed.",
    why: "After <b>enjoy</b>, use the -ing form, not to and the base form.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I really enjoy ___ in the sea.",
      options: ["to swim", "swimming", "swim"],
      answer: 1,
      feedback:
        "After enjoy, we use the -ing form: I really enjoy swimming in the sea. Enjoy to swim and enjoy swim are wrong. Swim has one vowel and ends in m, so we write m two times: swimming.",
    },
    {
      kind: "gap",
      stem: "We decided ___ a flat near the station. (rent)",
      answers: ["to rent"],
      feedback:
        "After decide, we use to and the base form: We decided to rent a flat near the station. Decided already shows the past, so rent stays in the base form.",
    },
    {
      kind: "gap",
      stem: "It started ___ just after we left the house. (rain)",
      answers: ["raining", "to rain"],
      feedback:
        "After start, both forms are correct: It started raining, or It started to rain, just after we left the house.",
    },
    {
      kind: "gap",
      stem: "We finished ___ the kitchen at midnight. (paint)",
      answers: ["painting"],
      feedback:
        "After finish, we use the -ing form: We finished painting the kitchen at midnight. Finished to paint is wrong.",
    },
    {
      kind: "choice",
      stem: "I'd like ___ to the cinema tonight.",
      options: ["going", "go", "goes", "to go"],
      answer: 3,
      feedback:
        "After would like ('d like), we use only to and the base form: I'd like to go to the cinema tonight. I like going to the cinema is also correct, but it means that I enjoy it in general.",
    },
    {
      kind: "mistake",
      tokens: ["We", "hope", "to", "seeing", "you", "again", "next", "summer."],
      wrongIndex: 3,
      correction: "see",
      feedback:
        "After hope, we use to and the base form, not the -ing form: We hope to see you again next summer.",
    },
  ],

  levelRationale:
    "English Grammar Profile: a few very common verbs with the -ing form (enjoy, finish, mind) and with to and the base form (want, decide, hope, need, would like) are A2 points, and like, love, hate and start with both forms are also A2. This topic is introductory and keeps to these high-frequency verbs. It defines the words infinitive and gerund once. Verbs where the meaning changes (stop, remember, forget, try), the gerund after a preposition (thinking about joining) and decided not to are left to B1. The small difference between like to and like -ing in British English is not taught as a rule, because both are correct and the difference is a tendency.",

  sourceNotes:
    "english_grammar.txt, # Gerund: the gerund as a subject (Swimming is …) and after enjoy, finish and mind agrees with Swan. The note's other verbs (avoid, imagine, risk, suggest, can't stand, it's not worth) and go + -ing are above A2 or less common, and left to B1. The gerund after a preposition (I'll think about joining the club) is left to B1. # Verbs followed by gerunds and infinitives (remember and forget) and # Infinitive or gerund (try) are about verbs where the meaning changes. These are B1, and left out. The infinitive definition is the one from the A2 infinitive of purpose topic. Want, decide, hope, need, learn and would like with to, like, love, hate, start and begin with both forms, and would like with to only are authored from Swan, Practical English Usage. Need with -ing (The car needs washing) has a different meaning and is above A2, so it is left out.",
};
