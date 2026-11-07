import type { RuleTopic } from "../../schema";

export const reportedCommandsAdviceAndRequests: RuleTopic = {
  slug: "reported-commands-advice-and-requests",
  family: "reported-speech",
  title: "Reported commands, advice and requests: She told me to wait",
  summary: "\"Wait here.\" becomes She told me to wait there. Report orders, advice, requests and warnings with tell, ask, advise or warn, a person and to.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 10,

  explanation: [
    "In B1, we learned to report statements (She said she was tired) and questions (He asked me where I lived). To report a <b>command</b>, a piece of <b>advice</b>, a <b>request</b> or a <b>warning</b>, we use a different pattern: reporting verb + <b>person</b> + <b>to</b> + base form. Remember: a reporting verb is a verb that we use to report what people say or think, like say, tell, ask, think and believe (order 8). Remember: to and the base form together, like to buy or to see, are called the infinitive.",
    "Choose the reporting verb that fits what the speaker was doing. For a <b>command</b> or an order, use <b>tell</b>: \"Wait here.\" → The guard <b>told us to wait</b> there. For a polite <b>request</b>, use <b>ask</b>: \"Could you help me, please?\" → Ana <b>asked me to help</b> her. For <b>advice</b>, use <b>advise</b>: \"You should see a doctor.\" → My friend <b>advised me to see</b> a doctor. For a <b>warning</b> about danger, use <b>warn</b>: \"Be careful. The road is icy.\" → He <b>warned me to be</b> careful. Other verbs like this are <b>remind</b>, <b>invite</b>, <b>encourage</b> and <b>order</b>: She <b>reminded me to call</b> my mother.",
    "For a negative command or warning, put <b>not</b> before to: \"Don't touch it!\" → She <b>told me not to touch</b> it. \"Don't walk on the ice.\" → They <b>warned us not to walk</b> on the ice. Not usually goes before to. We don't use don't in the reported sentence: She told me not to touch it, not She told me don't touch it.",
    "The infinitive doesn't change with the tense, so there is no tense to move back. But pronouns and words for time and place still change, as in B1 reported speech: \"Call me tomorrow.\" → Ana told me to call <b>her the next day</b>.",
    "<b>Say</b> doesn't take this pattern. In B1 (say and tell), we learned that we don't put the person just after say. So we say She <b>told me to wait</b>, not She said me to wait. To use say, report it as a statement: She <b>said</b> (that) I <b>should</b> wait. In informal speech, people sometimes say She said to wait, with no person, but we never put the person after said.",
    "Be careful with <b>ask</b>. Ask + person + to is for a request: She asked me <b>to close</b> the door. Ask + question word or if is for a question: She asked me <b>where</b> I lived.",
  ].join("\n\n"),

  form: [
    "command → tell + person + (not) to + base form · He told us to wait there.",
    "request → ask + person + (not) to + base form · She asked me to help her.",
    "advice → advise + person + (not) to + base form · He advised me to see a doctor.",
    "warning → warn + person + (not) to + base form · They warned us not to walk on the ice.",
    "also: remind · invite · encourage · order + person + to",
    "not: She said me to wait · not: She told me don't touch it",
  ].join("\n"),

  examples: [
    {
      sentence: "\"Sit down, please.\" → The teacher <b>told us to sit</b> down.",
      why: "This is a command, so we use <b>tell</b>, then the person, then <b>to</b> and the base form.",
    },
    {
      sentence: "\"Could you lend me your pen?\" → Tom <b>asked me to lend</b> him my pen.",
      why: "This is a polite request, so we use <b>ask</b> + person + to. Me changes to him.",
    },
    {
      sentence: "\"You should rest.\" → The doctor <b>advised me to rest</b>.",
      why: "This is advice, so we use <b>advise</b> + person + to and the base form.",
    },
    {
      sentence: "\"Don't touch it!\" → She <b>told me not to touch</b> it.",
      why: "For a negative command, <b>not</b> goes before to. There is no don't in the reported sentence.",
    },
    {
      sentence: "\"Don't forget your keys.\" → My dad <b>reminded me to take</b> my keys.",
      why: "<b>Remind</b> + person + to is for helping someone not to forget.",
    },
  ],

  pitfall: {
    wrong: "My boss said me to finish the report by Friday.",
    right: "My boss <b>told me to finish</b> the report by Friday.",
    why: "We don't put the person just after <b>say</b>. For a command, use <b>tell</b> + person + to and the base form.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "The guide ___ us to stay together.",
      options: ["said", "spoke", "told", "talked"],
      answer: 2,
      feedback:
        "For a command, we use tell + person + to and the base form: The guide told us to stay together. We don't put the person just after say, and speak and talk don't take this pattern.",
    },
    {
      kind: "gap",
      stem: "\"Keep your seat belts on,\" the pilot said to us. → The pilot ___ our seat belts on. (tell)",
      answers: ["told us to keep"],
      feedback:
        "This is a command, so we use tell + person + to and the base form: The pilot told us to keep our seat belts on. Your changes to our, because we are now reporting about ourselves.",
    },
    {
      kind: "gap",
      stem: "\"Please open the window,\" Tom said to me. → Tom ___ the window. (ask)",
      answers: ["asked me to open"],
      feedback:
        "This is a request, so we use ask + person + to and the base form: Tom asked me to open the window. There is no to after asked before the person: asked me, not asked to me.",
    },
    {
      kind: "gap",
      stem: "\"Don't swim here. The water is dangerous,\" the lifeguard said to us. → The lifeguard warned us ___ there. (swim + not)",
      answers: ["not to swim", "to not swim"],
      feedback:
        "This is a warning, and it is negative, so we put not before to: The lifeguard warned us not to swim there. To not swim is also heard, but not to swim is more usual.",
    },
    {
      kind: "choice",
      stem: "\"If I were you, I'd take a taxi,\" Mark said to me. Which sentence reports this best?",
      options: [
        "Mark ordered me to take a taxi.",
        "Mark advised me to take a taxi.",
        "Mark said me to take a taxi.",
        "Mark asked me to take a taxi.",
      ],
      answer: 1,
      feedback:
        "If I were you, I'd … is advice, so we use advise: Mark advised me to take a taxi. Ordered is too strong for advice, asked is for a request, and we don't put the person just after said.",
    },
    {
      kind: "mistake",
      tokens: ["The", "teacher", "told", "us", "don't", "use", "our", "phones", "in", "class."],
      wrongIndex: 4,
      correction: "not to",
      feedback:
        "In a reported negative command, we use not to and the base form, not don't: The teacher told us not to use our phones in class.",
    },
    {
      kind: "mistake",
      tokens: ["My", "mother", "warned", "me", "not", "to", "touching", "the", "oven."],
      wrongIndex: 6,
      correction: "touch",
      feedback:
        "After warn + person + not to, we use the base form, not the -ing form: My mother warned me not to touch the oven.",
    },
  ],

  levelRationale:
    "English Grammar Profile: tell + person + to-infinitive appears from B1, and the pattern grows at B2 with a wider set of reporting verbs (advise, warn, remind, encourage). The spec (section 8) and the family table place reported commands at B2, as the reported-speech family's next topic after B1 reported-speech, which left commands and requests out, and it builds on B1 say-and-tell, which says that we don't put the person just after say. Every gap names its reporting verb, so the speech act is fixed, and the advice choice offers ordered and asked as distractors, which don't fit If I were you. No mistake item uses say, because Swan accepts She said to wait in informal speech, so deleting the person would give a second fix. The warning gap accepts to not swim, which Swan records as used, beside the more usual not to swim. Advise + -ing (He advised taking a taxi) and suggest are left out.",

  sourceNotes:
    "english_grammar.txt, ## Reported speech: Commands, advice or requests: verb + person + (not) + the infinitive agrees with Swan; this topic writes it as to + base form, with not before to. # Reported speech has She advised him to work harder in future, which is the advice pattern. The choice of tell, ask, advise and warn for the speech act, remind, invite, encourage and order, say not taking this pattern, say + to in informal speech, and ask for requests against questions are authored from Swan, Practical English Usage.",
};
