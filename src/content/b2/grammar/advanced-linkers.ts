import type { RuleTopic } from "../../schema";

export const advancedLinkers: RuleTopic = {
  slug: "advanced-linkers",
  family: "linking-words",
  title: "Advanced linkers: owing to, consequently, whereas, nevertheless",
  summary: "Owing to the strike, the trains were cancelled. Nevertheless, we got there. Link reasons, results and contrasts the way formal English does.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 17,

  explanation: [
    "At B1 you learned however, although, despite, because of, due to, therefore and as a result. This topic adds more linking words for a <b>reason</b>, a <b>result</b> and a <b>contrast</b> (a different or unexpected idea). Many of them are formal, and they are common in writing. As at B1, the important question is what comes after each one: a clause, a noun, or a new sentence. Remember: a clause is a group of words with a subject and a verb.",
    "For a reason, <b>owing to</b> means the same as because of and due to, and it is more formal. Like because of, it goes before a <b>noun</b>, and like despite, it can also go before an <b>-ing form</b>. It doesn't go before a clause: The match was cancelled <b>owing to</b> the rain. Say owing to the rain, not owing to it was raining. Before a clause, use because, or the longer owing to the fact that: <b>Owing to the fact that</b> it was raining, the match was cancelled.",
    "For a result, <b>consequently</b>, <b>as a consequence</b> and <b>thus</b> are like therefore and as a result. We usually put them at the start of a new sentence: The company lost its biggest customer. <b>Consequently,</b> fifty people lost their jobs. Thus is very formal, and it is mostly used in writing. Before a noun, use <b>as a consequence of</b>: <b>As a consequence of</b> the strike, the factory closed.",
    "To compare two different facts, use <b>whereas</b> or <b>while</b>. They join two clauses in one sentence, and they can go at the start or in the middle: My brother loves sport, <b>whereas</b> I prefer reading. <b>While</b> my brother loves sport, I prefer reading. They mean almost the same here. Whereas is more formal. While can also be about time (While I was cooking, the phone rang), so the sentence shows which meaning is meant. In formal British English, you may also see whilst.",
    "For a second idea that is <b>surprising</b> after the first, use <b>nevertheless</b> or <b>even so</b>. Like however, they usually start a new sentence: The hotel was very expensive. <b>Nevertheless,</b> we enjoyed our stay. It was raining hard. <b>Even so,</b> we went for a walk. Nevertheless is formal, and even so is common in speech. However also fits in sentences like these. Whereas does not, because whereas joins two clauses in one sentence.",
    "<b>On the other hand</b> gives the other side of a question, often to compare good and bad points: The flat is small. <b>On the other hand,</b> it's very cheap. It usually starts a new sentence, like however. Some speakers start the first point with on the one hand. Don't use on the other hand just to add one more idea: for that, use in addition (B1).",
  ].join("\n\n"),

  form: [
    "reason: owing to + noun or -ing (formal) · not: owing to + clause · owing to the fact that + clause",
    "result: consequently · as a consequence · thus (very formal) → usually a new sentence · as a consequence of + noun",
    "contrast between two facts: clause, whereas / while + clause · Whereas / While + clause, clause",
    "surprising second idea: nevertheless / even so (like however) → usually a new sentence",
    "the other side: On the other hand, … (usually a new sentence)",
  ].join("\n"),

  examples: [
    {
      sentence: "All flights were delayed <b>owing to</b> the fog.",
      why: "The fog is a noun, so we can use <b>owing to</b>, like because of or due to.",
    },
    {
      sentence: "The factory had no orders. <b>Consequently,</b> it closed in March.",
      why: "Closing is the result of having no orders. <b>Consequently</b> starts a new sentence, like therefore.",
    },
    {
      sentence: "Some people work best in the morning, <b>whereas</b> others work best at night.",
      why: "<b>Whereas</b> joins two clauses to compare two different facts. While is also correct here.",
    },
    {
      sentence: "The test was very hard. <b>Nevertheless,</b> almost everyone passed.",
      why: "Passing is surprising after a hard test. <b>Nevertheless</b> starts a new sentence, like however.",
    },
    {
      sentence: "The job is well paid. <b>On the other hand,</b> the hours are very long.",
      why: "<b>On the other hand</b> gives the other side: a good point, then a bad point.",
    },
  ],

  pitfall: {
    wrong: "The flight was delayed owing to the weather was bad.",
    right: "The flight was delayed <b>owing to</b> the bad weather. · The flight was delayed <b>because</b> the weather was bad.",
    why: "Owing to goes before a noun, like because of, not before a clause. Before a clause, use because.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "All trains were cancelled ___ the strike.",
      options: ["because", "whereas", "owing to", "consequently"],
      answer: 2,
      feedback:
        "The strike is a noun, so we use owing to: All trains were cancelled owing to the strike. Because needs a clause after it, whereas compares two facts, and consequently starts a result.",
    },
    {
      kind: "choice",
      stem: "Which sentence uses owing to correctly?",
      options: [
        "Owing to he was ill, Mark missed the meeting.",
        "Owing to his illness, Mark missed the meeting.",
        "Owing to be ill, Mark missed the meeting.",
      ],
      answer: 1,
      feedback:
        "Owing to goes before a noun or an -ing form, so owing to his illness is correct. He was ill is a clause, so it needs because: Because he was ill, Mark missed the meeting.",
    },
    {
      kind: "choice",
      stem: "Living in the city is exciting. ___, it can be very expensive.",
      options: ["As a consequence", "On the other hand", "Whereas"],
      answer: 1,
      feedback:
        "Being expensive is the other side of living in the city, a bad point after a good one, so we use on the other hand. As a consequence would make it a result of being exciting, and whereas joins two clauses in one sentence.",
    },
    {
      kind: "gap",
      stem: "My sister loves big cities, ___ I prefer the countryside. (Use whereas or nevertheless.)",
      answers: ["whereas", "while", "whilst"],
      feedback:
        "The sentence compares two different facts in one sentence, so we use whereas: My sister loves big cities, whereas I prefer the countryside. While is also correct. Nevertheless usually starts a new sentence, for a surprising idea.",
    },
    {
      kind: "gap",
      stem: "The exam was very difficult. ___, almost everyone passed. (Use nevertheless or consequently.)",
      answers: ["Nevertheless", "However", "Even so", "Nonetheless", "Still", "Yet", "All the same", "Despite this", "In spite of this"],
      feedback:
        "Passing is surprising after a difficult exam, so we use nevertheless: Nevertheless, almost everyone passed. However and even so are also correct. Consequently would mean that everyone passed because the exam was difficult.",
    },
    {
      kind: "mistake",
      tokens: ["Nevertheless", "my", "brother", "loves", "football,", "I", "hate", "it."],
      wrongIndex: 0,
      correction: "Whereas",
      feedback:
        "The sentence compares two different facts in one sentence, so we use whereas (or while): Whereas my brother loves football, I hate it. Although is also correct. Nevertheless can't join two clauses, and it needs an idea before it, in the sentence before.",
    },
    {
      kind: "mistake",
      tokens: ["The", "price", "of", "oil", "went", "up.", "As", "a", "consequently,", "many", "airlines", "raised", "their", "fares."],
      wrongIndex: 8,
      correction: "consequence,",
      feedback:
        "The phrase is as a consequence, with the noun consequence: As a consequence, many airlines raised their fares. Consequently is also correct, but on its own, with no as a.",
    },
  ],

  levelRationale:
    "English Grammar Profile: formal linkers for a reason, a result and a contrast, like whereas, nevertheless and consequently, are B2 points, and the spec (section 8) places advanced linkers at B2. This is the linking-words family's B2 topic after A2 and-but-so-because and B1 linking-words. It keeps B1's rules: however, therefore and as a result usually start a new sentence, because of goes before a noun, and despite before a noun or an -ing form, never before a clause; owing to is taught with both rules, and the classic owing to he was ill is a choice distractor. The contrast definition reuses B1's wording. Every gap names the two words to choose from, and accepts each defensible equivalent: while and whilst for whereas, and however, even so, nonetheless, still, yet, all the same, despite this and in spite of this for nevertheless. The whereas mistake item puts the linker first, so it is fixed only at the linker (whereas, while or although, all at the same token): taking nevertheless out would leave two clauses joined by a comma, and a full stop after football would leave nevertheless with no idea before it. On the contrary, notwithstanding and hence are left to C1.",

  sourceNotes:
    "english_grammar.txt, # Linking words, ## Contrasting ideas: however and nevertheless at the start of a new sentence, and whereas between two clauses, agree with Swan; 'Her husband vote' should be voted. ## Reason and result: owing to before a noun phrase (the large number of candidates) agrees with Swan; 'will be release' should be will be released. Thus and consequently are listed with no examples; this topic writes its own. # Linking expression lists consequently, however and on the other hand, which are used here; its causes and effects phrases (This was caused by, An outcome of this was) are left to the B2 writing topics. As a consequence, as a consequence of, owing to the fact that, while and whilst, even so, and on the other hand for two sides are authored from Swan, Practical English Usage.",
};
