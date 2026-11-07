import type { RuleTopic } from "../../schema";

export const hedgingAndDegreesOfCertainty: RuleTopic = {
  slug: "hedging-and-degrees-of-certainty",
  title: "Hedging: seem to, tend to, it is likely that",
  summary: "Prices are likely to rise. She seems to be busy. People tend to spend more in December. Sound careful and fair by showing exactly how sure you are.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 21,

  explanation: [
    "In B1, and in order 4, we used modal verbs to show how sure we are: She must be tired. He might have missed the bus. Remember: a modal verb is a small verb that goes before the base form of another verb and adds a meaning to it. As in B1: use <b>might</b>, <b>may</b> or <b>could</b> when you think that something is <b>possible</b>, but you are not sure. This topic adds more ways to show how sure you are.",
    "Often we don't want to sound too sure, because we don't have all the facts, or because we want to be polite or fair. So we make a statement softer: The plan won't work. → The plan <b>might not</b> work. Making a statement less strong or less sure like this is called <b>hedging</b>. It is very common at work, in reports and essays, and in polite conversation.",
    "<b>Seem to</b> and <b>appear to</b> + the base form say how something looks to you, from what you can see or hear: She <b>seems to be</b> busy. The plan <b>appears to</b> work. Appear to is more formal. Before a clause, use <b>it seems that</b> or <b>it appears that</b>: <b>It seems that</b> nobody knew about the meeting. For the past, use seem to have and the past participle: He <b>seems to have</b> left. Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
    "<b>Tend to</b> + the base form says that something is usually true, but not always: People <b>tend to</b> spend more in December. It sounds less strong than People spend more in December, because there are exceptions.",
    "<b>Likely</b> means probable, and <b>unlikely</b> means not probable. Use <b>it is likely that</b> or <b>it is unlikely that</b> before a clause, or <b>be likely to</b> + the base form: <b>It is likely that</b> prices will rise. Prices <b>are likely to</b> rise. <b>It's unlikely that</b> he'll come. Likely is an adjective here, so it needs be. In American English, and more and more in British English, likely is also used like probably: Prices will likely rise.",
    "Some words show how sure you are on a scale, from very sure to not sure: <b>definitely</b> or <b>certainly</b> → <b>probably</b> → <b>possibly</b> or <b>perhaps</b>. Possibly is less sure than probably. Probably and possibly usually go after be, or after the first auxiliary: It's <b>probably</b> true. He'll <b>probably</b> be late. In a negative, probably usually goes before the negative auxiliary: He <b>probably won't</b> come. <b>Arguably</b> means that you think something is true and can give good reasons, but other people might not agree: She is <b>arguably</b> the best player in the world.",
    "Some phrases also hedge. <b>I would say</b> (I'd say) gives your opinion or a guess more softly: I'd say it's about fifty kilometres. <b>There's a chance that</b> + a clause says that something is possible: <b>There's a chance that</b> it will rain. A good chance is more likely, and a small chance is less likely.",
    "Many hedges are close in meaning, so more than one is often correct: The project seems to be late. The project appears to be late. It seems that the project is late. Choose by how sure you are, and don't use too many hedges in one sentence, or you won't sound sure of anything.",
  ].join("\n\n"),

  form: [
    "seem to / appear to + base form: She seems to be busy. · it seems that / it appears that + clause",
    "seem to have + past participle (past): He seems to have left.",
    "tend to + base form → usually true: People tend to spend more in December.",
    "it is likely / unlikely that + clause · be likely to + base form: Prices are likely to rise.",
    "definitely / certainly → probably → possibly / perhaps (from more sure to less sure)",
    "arguably · I'd say … · There's a chance that + clause",
  ].join("\n"),

  examples: [
    {
      sentence: "The new system <b>seems to</b> work well.",
      why: "<b>Seems to</b> and the base form say how it looks to us, without saying that we are completely sure.",
    },
    {
      sentence: "Children <b>tend to</b> learn languages faster than adults.",
      why: "<b>Tend to</b> says that this is usually true, but not always.",
    },
    {
      sentence: "<b>It's likely that</b> the meeting will finish late.",
      why: "<b>It's likely that</b> and a clause say that it is probable, but not certain. The meeting is likely to finish late is also correct.",
    },
    {
      sentence: "The museum will <b>probably</b> be closed on Monday.",
      why: "<b>Probably</b> is more sure than possibly, and less sure than definitely. It goes after the first auxiliary, will.",
    },
    {
      sentence: "<b>I'd say</b> the house is about a hundred years old.",
      why: "<b>I'd say</b> makes the guess softer: the speaker is not completely sure.",
    },
  ],

  pitfall: {
    wrong: "The results seem show that the plan works.",
    right: "The results <b>seem to show</b> that the plan works.",
    why: "Seem goes with to and the base form: seem to show. Without to, use a clause: It seems that the plan works.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence is the least sure?",
      options: [
        "The new road will definitely reduce traffic.",
        "The new road will probably reduce traffic.",
        "The new road will possibly reduce traffic.",
      ],
      answer: 2,
      feedback:
        "On the scale, definitely is the most sure, probably is in the middle, and possibly is the least sure. So The new road will possibly reduce traffic is the least sure.",
    },
    {
      kind: "choice",
      stem: "In a meeting, you think your manager's plan has a problem, but you want to be polite. Which is the most careful way to say it?",
      options: ["This plan will fail.", "This plan might not be the best option.", "This plan is wrong."],
      answer: 1,
      feedback:
        "Might not and the best option make the statement softer: this is hedging. This plan will fail and This plan is wrong sound completely sure, and they may sound rude.",
    },
    {
      kind: "gap",
      stem: "Young people ___ spend more time online than older people. (Write two words: a hedge that means usually.)",
      answers: ["tend to"],
      feedback:
        "Tend to and the base form say that something is usually true, but not always: Young people tend to spend more time online than older people.",
    },
    {
      kind: "gap",
      stem: "The company ___ to be in trouble. Several managers have left this year. (appear, present simple)",
      answers: ["appears"],
      feedback:
        "Appear to and the base form say how something looks to us. The company is singular, so in the present simple it is appears: The company appears to be in trouble. Seems is also correct, but the cue gives appear.",
    },
    {
      kind: "gap",
      stem: "It's ___ that the meeting will be cancelled, so please come as planned. (Write likely or unlikely.)",
      answers: ["unlikely"],
      feedback:
        "Please come as planned shows that the meeting will probably happen, so we use unlikely: It's unlikely that the meeting will be cancelled.",
    },
    {
      kind: "mistake",
      tokens: ["Prices", "tend", "to", "rising", "in", "the", "summer."],
      wrongIndex: 3,
      correction: "rise",
      feedback:
        "After tend to, we use the base form, not the -ing form: Prices tend to rise in the summer.",
    },
    {
      kind: "mistake",
      tokens: ["There's", "a", "chance", "what", "it", "will", "rain", "tomorrow."],
      wrongIndex: 3,
      correction: "that",
      feedback:
        "There's a chance goes with that and a clause: There's a chance that it will rain tomorrow. That can also be left out: There's a chance it will rain tomorrow.",
    },
  ],

  levelRationale:
    "The spec (section 8) places hedging and degrees of certainty at B2, as a new point. The English Grammar Profile places seem to and appear to, tend to, be likely to and adverbs like possibly and probably around B1 and B2, and the B2 pitch puts them together here as hedging. The topic builds on B1 modals-of-possibility-and-deduction and B2 describing-certainty-in-the-past (order 4): modal verb and base form reuse their earlier wording, and might, may and could for something possible but not sure keep B1's wording. Hedges are often interchangeable, so the choice items test strength on the definitely, probably, possibly scale and politeness, and each gap names its word in the cue (tend to as a hedge that means usually, appear, likely or unlikely), so only one answer fits. The chance mistake item has one fix, that, at the wrong token; its feedback adds that that can also be left out, which a mistake item can't ask for, because a token can't be deleted. Hedging in academic writing (It could be argued that, The data suggest) is left to C1.",

  sourceNotes:
    "english_grammar.txt has no section on hedging (a new point in spec section 8). # Modal verb, ## Modal verbs 2, and # Describing certainty in the past are taught in B1 modals-of-possibility-and-deduction and B2 describing-certainty-in-the-past, and this topic builds on them. Seem to and appear to, it seems that, seem to have + past participle, tend to, likely and unlikely, likely as an adverb in American English, the position of probably, arguably, I'd say and there's a chance that are authored from Swan, Practical English Usage.",
};
