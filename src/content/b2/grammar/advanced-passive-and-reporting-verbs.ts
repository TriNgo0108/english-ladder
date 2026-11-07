import type { RuleTopic } from "../../schema";

export const advancedPassiveAndReportingVerbs: RuleTopic = {
  slug: "advanced-passive-and-reporting-verbs",
  family: "passive",
  title: "Advanced passive: It is said that … and It must be done",
  summary: "The road is being repaired. Tickets can be bought online. Prices are expected to rise. Use the passive with more tenses, modals and reporting verbs.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 8,

  explanation: [
    "In B1, we learned the passive: <b>be</b> and the <b>past participle</b>, with the tense in be (is made, was made, has been made, will be made). At B2, the same rule works with more forms. The past participle doesn't change. Only the be part changes.",
    "The <b>passive continuous</b> is for an action that is or was in progress: <b>am / is / are being</b> + past participle, or <b>was / were being</b> + past participle. You can't use the kitchen now. It <b>is being painted</b>. When we drove past, the bridge <b>was being repaired</b>.",
    "With a <b>modal verb</b>, use the modal, then <b>be</b>, then the past participle. Remember: a modal verb is a small verb that goes before the base form of another verb and adds a meaning to it. Tickets <b>can be bought</b> online. Seat belts <b>must be worn</b> at all times. The work <b>should be finished</b> by Friday. With a past modal (order 4), use the modal, then <b>have been</b>, then the past participle: The letter <b>might have been sent</b> to the wrong address. Going to works in the same way: The old cinema <b>is going to be closed</b>.",
    "A <b>reporting verb</b> is a verb that we use to report what people say or think, like say, tell, ask, think and believe. With reporting verbs like <b>say</b>, <b>think</b>, <b>believe</b>, <b>know</b>, <b>expect</b> and <b>report</b>, the passive tells us what people in general say or think, without saying who. This is common in the news and in formal writing.",
    "There are two patterns, and they <b>mean the same</b>. Pattern 1: <b>It</b> + passive reporting verb + <b>that</b> + a clause: <b>It is said that</b> the castle is haunted. <b>It is expected that</b> prices will rise. Pattern 2: the subject + passive reporting verb + <b>to</b> + base form: The castle <b>is said to be</b> haunted. Prices <b>are expected to rise</b>. In pattern 2, the person or thing from the that clause becomes the subject.",
    "When the action happened <b>before</b> the time of saying or thinking, use <b>to have</b> + past participle in pattern 2: It is thought that the ship sank in 1850. → The ship <b>is thought to have sunk</b> in 1850. For an action in progress now, use <b>to be</b> + -ing: He is believed <b>to be living</b> in Spain.",
    "Don't mix the two patterns: It is said that he is rich, or He is said to be rich, but not He is said that he is rich. In everyday speech, the active is more common: People say that he's rich.",
  ].join("\n\n"),

  form: [
    "passive continuous: am / is / are being + past participle · was / were being + past participle",
    "modal passive: can / must / should + be + past participle · past modal + have been + past participle",
    "It is said / thought / believed / expected + that + clause · It is said that the castle is haunted.",
    "subject + is said / thought / believed + to + base form · The castle is said to be haunted.",
    "earlier action: to have + past participle · The ship is thought to have sunk in 1850.",
    "not: He is said that he is rich.",
  ].join("\n"),

  examples: [
    {
      sentence: "You can't use the kitchen now. It <b>is being painted</b>.",
      why: "The painting is in progress now, so we use the present continuous passive: <b>is being</b> + past participle.",
    },
    {
      sentence: "Tickets <b>can be bought</b> online.",
      why: "A modal passive: <b>can be</b> + past participle. Who sells the tickets is not important.",
    },
    {
      sentence: "The letter <b>might have been sent</b> to the wrong address.",
      why: "A past modal in the passive: <b>might have been</b> + past participle. It is possible that someone sent it there.",
    },
    {
      sentence: "<b>It is said that</b> the castle is haunted.",
      why: "Pattern 1: It, the passive reporting verb, and a that clause. We don't say who says it.",
    },
    {
      sentence: "The castle <b>is said to be</b> haunted.",
      why: "Pattern 2 means the same: the castle is now the subject, then <b>to</b> and the base form.",
    },
    {
      sentence: "The ship <b>is thought to have sunk</b> in 1850.",
      why: "The sinking happened before the time of thinking, so we use <b>to have</b> + past participle.",
    },
  ],

  pitfall: {
    wrong: "He is said that he is very rich.",
    right: "He <b>is said to be</b> very rich.",
    why: "Don't mix the two patterns. Say <b>He is said to be</b> very rich, or <b>It is said that</b> he is very rich.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Sorry, you can't use the lift today. It ___.",
      options: ["is repairing", "has repaired", "is being repaired", "is repaired"],
      answer: 2,
      feedback:
        "The lift doesn't repair anything, and the work is in progress today, so we use the present continuous passive: It is being repaired. Is repairing and has repaired are active, and is repaired would mean that the work is finished, so you could use the lift.",
    },
    {
      kind: "gap",
      stem: "All forms ___ in black ink. (must, sign)",
      answers: ["must be signed"],
      feedback:
        "The forms don't sign anything, so we need the passive. With a modal verb, it is the modal, then be, then the past participle: All forms must be signed in black ink.",
    },
    {
      kind: "gap",
      stem: "It is believed that the thief left the country last week. → The thief ___ the country last week. (believe)",
      answers: ["is believed to have left", "'s believed to have left"],
      feedback:
        "People believe it now, but the leaving happened last week, before the time of believing, so we use to have + past participle: The thief is believed to have left the country last week. Leave is irregular: leave → left → left.",
    },
    {
      kind: "gap",
      stem: "It ___ that the new bridge will open next year. (expect)",
      answers: ["is expected", "'s expected"],
      feedback:
        "The sentence starts with It and has a that clause, so this is pattern 1: It is expected that the new bridge will open next year. Pattern 2 means the same: The new bridge is expected to open next year.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "Mr Lee is said to be a millionaire.",
        "Mr Lee is said that he is a millionaire.",
        "Mr Lee says to be a millionaire.",
        "It is said Mr Lee to be a millionaire.",
      ],
      answer: 0,
      feedback:
        "With Mr Lee as the subject, we use pattern 2, is said and to + base form: Mr Lee is said to be a millionaire. It is said that Mr Lee is a millionaire is also correct, but don't mix the two patterns.",
    },
    {
      kind: "mistake",
      tokens: ["The", "new", "hospital", "is", "being", "build", "near", "the", "station."],
      wrongIndex: 5,
      correction: "built",
      feedback:
        "In the passive continuous, is being comes before the past participle: The new hospital is being built near the station. Build is irregular: build → built → built.",
    },
    {
      kind: "mistake",
      tokens: ["The", "painter", "is", "believed", "to", "have", "paint", "this", "picture", "in", "1890."],
      wrongIndex: 6,
      correction: "painted",
      feedback:
        "The painting happened in 1890, before the time of believing, so we use to have + past participle: The painter is believed to have painted this picture in 1890.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the passive continuous and the passive with modal verbs appear from B1, and It is said that … and subject + is said to … are B2 points, with to have + past participle at B2 and above. This is the passive family's B2 topic after B1 the-passive, which left the passive with modals, continuous tenses and It is said that … to B2, so the basics (be + past participle, by, verbs with no object) are not repeated. It builds on the past modal (order 4). Every reporting-verb gap is fixed to one pattern by its stem: the It gap has that and a clause after it, and the thief gap gives the thief as the subject, so only one pattern fits each, and the explanation and the Mr Lee choice say that both patterns are correct. The thief gap gives the present It is believed, so was believed is not accepted.",

  sourceNotes:
    "english_grammar.txt, # The passive, Passive + infinitive construction: saying what people in general think, believe or expect without saying who, and the form subject + be + past participle + to + verb, agree with Swan. The note says past participant; this topic says past participle, as B1 does. # Statements has Sales are forecast to increase in the next six months, which uses the same pattern; its Sale are forecast and A increase in sales should be Sales are forecast and An increase in sales. The passive continuous, modal passives, It + passive + that, to have + past participle, to be + -ing, and not mixing the two patterns are authored from Swan, Practical English Usage.",
};
