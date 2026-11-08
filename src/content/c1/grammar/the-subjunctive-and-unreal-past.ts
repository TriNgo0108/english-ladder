import type { RuleTopic } from "../../schema";

export const theSubjunctiveAndUnrealPast: RuleTopic = {
  slug: "the-subjunctive-and-unreal-past",
  family: "wish",
  title: "The subjunctive and unreal past: I insist that she be told, it's time we went",
  summary: "I insist that she be told. It's time we went home. I'd rather you didn't. Use the base form after insist, and a past form for what isn't real.",
  level: "c1",
  category: "grammar",
  shape: "rule",
  order: 2,

  explanation: [
    "In B1, we used the past simple after wish for a present meaning: I wish I <b>lived</b> by the sea. (I don't.) A past form with a present or future meaning, for something that isn't true or hasn't happened yet, is called the <b>unreal past</b>. This topic adds more places where it is used, and a second special form: the subjunctive.",
    "After verbs and adjectives that say something is necessary or should happen, formal English can use the base form in the that clause, for every subject: I insist that she <b>be</b> told. It is vital that he <b>attend</b> the meeting. The base form used like this is called the <b>subjunctive</b>. The subjunctive has no -s (he attend), and be stays be (she be told). Remember: the base form is the verb as you see it in a dictionary, with nothing added. Remember: a clause is a group of words with a subject and a verb.",
    "Common words before it are <b>insist</b>, <b>recommend</b>, <b>suggest</b>, <b>demand</b>, <b>propose</b> and <b>request</b>, and <b>essential</b>, <b>vital</b>, <b>important</b> and <b>necessary</b> (It is essential that …). The subjunctive doesn't change with the tense: They insisted that she <b>be</b> told. For the negative, put not before the base form: We recommend that he <b>not travel</b> alone.",
    "There are other ways to say the same thing. In British English, should + the base form is usual: I insist that she <b>should be</b> told. It is vital that he <b>should attend</b>. In informal British English, an ordinary verb is also common: It's vital that he <b>attends</b>. The subjunctive is normal in American English and in formal British writing. All three are correct. Remember: register means how formal or informal your words are.",
    "A few fixed phrases keep the subjunctive. <b>If need be</b> means if it is necessary: We can work at the weekend, if need be. <b>Be that as it may</b> means even if that is true: The hotel is expensive. Be that as it may, it's the only one near the station. Both are formal.",
    "<b>It's time</b> and <b>it's high time</b> + subject + the past simple say that something should happen now, and is perhaps a little late: <b>It's time</b> we <b>went</b> home. <b>It's high time</b> you <b>found</b> a job. High time is stronger, and often a criticism. It's time we were going is also common. Without a subject, use to + the base form: It's time to go.",
    "<b>Would rather</b> ('d rather) + another person + the past simple says what you want someone else to do, now or in the future: I<b>'d rather</b> you <b>didn't</b> smoke in here. I'd rather you <b>came</b> tomorrow. Use the past even though the meaning is present or future: I'd rather you didn't, not I'd rather you don't. When it is about yourself, use the base form: I'd rather <b>stay</b> at home.",
    "<b>As if</b> and <b>as though</b> + the past say that something seems true but isn't: He talks <b>as if</b> he <b>knew</b> everything. (He doesn't.) When it may be true, use an ordinary tense: It looks <b>as if</b> it<b>'s going</b> to rain. <b>Suppose</b>, <b>supposing</b> and <b>what if</b> + the past imagine something less likely: <b>Suppose</b> you <b>lost</b> your job. What would you do? With the present, the situation sounds more likely: What if he says no?",
    "With be, as in B1, we can use were for every subject: He acts as if he <b>were</b> the boss. Suppose she <b>were</b> here. Were is often preferred, especially in writing, and was is also correct and common in informal English: as if he <b>was</b> the boss.",
  ].join("\n\n"),

  form: [
    "insist / recommend / suggest / demand + that + subject + base form: I insist that she be told.",
    "It is essential / vital / important + that + subject + base form: It is vital that he attend.",
    "British: … that she should be told · informal British: … that he attends · all correct",
    "fixed phrases: if need be · be that as it may",
    "It's (high) time + subject + past simple: It's time we went.",
    "would rather + another person + past simple: I'd rather you didn't. · not: I'd rather you don't",
    "as if / as though / suppose / what if + past (not true or less likely) · were or was",
  ].join("\n"),

  examples: [
    {
      sentence: "The doctor recommended that he <b>rest</b> for a week.",
      why: "After recommend, formal English uses the subjunctive: the base form, <b>rest</b>, with no -s, even though the verb before it is in the past. That he should rest is also correct.",
    },
    {
      sentence: "It is essential that every passenger <b>be</b> at the gate by 9.30.",
      why: "After It is essential that, the subjunctive of be is <b>be</b>, for every subject. In British English, should be is usual too.",
    },
    {
      sentence: "<b>It's high time</b> the council <b>repaired</b> this road.",
      why: "After It's high time + subject, we use the past simple, <b>repaired</b>, but the meaning is now: the road should be repaired.",
    },
    {
      sentence: "I<b>'d rather</b> you <b>didn't</b> tell Mum yet.",
      why: "After I'd rather + another person, we use the past simple, <b>didn't</b>, for the present or future.",
    },
    {
      sentence: "She spoke to me <b>as if</b> I <b>were</b> a child.",
      why: "I'm not a child, so as if takes the unreal past. With be, <b>were</b> is often preferred in writing; as if I was a child is also correct.",
    },
    {
      sentence: "We'll take a taxi, <b>if need be</b>.",
      why: "<b>If need be</b> is a fixed phrase with the subjunctive, be. It means if it is necessary.",
    },
  ],

  pitfall: {
    wrong: "It's high time you get a proper job.",
    right: "It's high time you <b>got</b> a proper job.",
    why: "After It's (high) time + subject, use the past simple, even though the meaning is now.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "It is essential that every applicant ___ a copy of their passport. (send; formal written English)",
      answers: ["send", "should send"],
      feedback:
        "After It is essential that, formal English uses the subjunctive: the base form, send, with no -s. In British English, should send is usual too. In informal British English, sends is also common, but the cue asks for formal writing.",
    },
    {
      kind: "gap",
      stem: "The committee insisted that the decision ___ kept secret. (be; formal written English)",
      answers: ["be", "should be"],
      feedback:
        "After insist that, formal English uses the subjunctive be, for every subject and in every tense: The committee insisted that the decision be kept secret. Should be is also correct, and usual in British English.",
    },
    {
      kind: "gap",
      stem: "It's late, and we've got work tomorrow. It's time we ___ home. (go)",
      answers: ["went", "were going"],
      feedback:
        "After It's time + subject, we use the past simple for a present meaning: It's time we went home. It's time we were going is also common.",
    },
    {
      kind: "gap",
      stem: "Please keep it quiet. I'd rather you ___ anyone about it until Friday. (tell + not)",
      answers: ["didn't tell", "did not tell"],
      feedback:
        "After I'd rather + another person, we use the past simple, even for the future: I'd rather you didn't tell anyone. We don't say I'd rather you don't tell.",
    },
    {
      kind: "choice",
      stem: "The hotel is expensive. ___, it's the only one near the station.",
      options: ["If need be", "It's high time", "Be that as it may", "As if it were"],
      answer: 2,
      feedback:
        "Be that as it may means even if that is true, so it fits before a contrast: Be that as it may, it's the only one near the station. If need be means if it is necessary.",
    },
    {
      kind: "mistake",
      tokens: ["I'd", "rather", "you", "don't", "smoke", "in", "the", "house."],
      wrongIndex: 3,
      correction: "didn't",
      feedback:
        "After I'd rather + another person, we use the past simple for the present or future: I'd rather you didn't smoke in the house.",
    },
    {
      kind: "mistake",
      tokens: ["The", "judge", "insisted", "that", "the", "prisoner", "be", "release", "at", "once."],
      wrongIndex: 7,
      correction: "released",
      feedback:
        "This is the subjunctive of a passive: be and the past participle. The prisoner didn't release anyone, so we need be released. Should be released is also correct.",
    },
  ],

  levelRationale:
    "The spec (section 8) places the subjunctive and unreal past at C1 as a new point, and the plan makes it the C1 topic of the wish family, because wish + past is the first unreal past a learner meets (B1 wish-and-if-only, then B2 wish-for-past-regrets). The English Grammar Profile records the mandative subjunctive after verbs and adjectives like insist and essential at C1, with should + base form after suggest and recommend from B2, and the past after It's time, would rather and as if at B2 and C1, so this topic brings them together at C1. Subjunctive and unreal past are defined here; base form, clause and register reuse their earlier wording, and B1's were / was rule is repeated with B1's wording. Following Review Focus 1, every subjunctive gap accepts the bare form and should + bare form, and no mistake item makes the indicative its wrong token: the subjunctive mistake item tests the missing past participle after be. Both subjunctive gaps ask for formal written English, because the indicative is common in informal British English, and their feedback says so. The it's-time gap accepts were going, and the classic error, I'd rather you don't, is a mistake item. As if and suppose are not tested with a gap, because the present is also possible when the situation may be true.",

  sourceNotes:
    "english_grammar.txt has no section on the subjunctive or the unreal past (a new point in spec section 8). # Wish and if only says the past of be after wish is were, not was; as in B1, Swan gives were as more formal and was as correct and common informally, so this topic teaches both. The topic is authored from Swan, Practical English Usage, entries subjunctive (the base form after insist, recommend, essential and so on, normal in American English and formal in British English, the negative with not, and fixed phrases like if need be and be that as it may), should after that (the usual British alternative, and the ordinary present as common informally), it's time (+ past, and it's time we were going), would rather (+ past for another person, base form for yourself), as if and as though (past for unreal, ordinary tenses for what may be true), and suppose, supposing and what if (past for less likely, present for more likely).",
};
