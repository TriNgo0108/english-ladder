import type { RuleTopic } from "../../schema";

export const adjectiveAndVerbPhrases: RuleTopic = {
  slug: "adjective-and-verb-phrases",
  title: "Adjective and verb phrases: good at, keen to, focus on",
  summary: "Good at managing my time, responsible for training, keen to learn, focus on results. Use the right preposition or to after adjectives and verbs at work.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 15,

  explanation: [
    "Many adjectives and verbs are followed by one particular preposition, and there is often no rule for which one: we say good <b>at</b>, interested <b>in</b> and responsible <b>for</b>. They work like collocations, so learn them in groups. Remember: a collocation is a group of words that we often use together, like make a mistake or heavy rain. Remember: a preposition is a small word, like in, on or under, that goes before a noun. Remember: an adjective is a word that tells us more about a noun: what the person or thing is like.",
    "These phrases are very useful for talking about your work and your skills, for example in a job interview, a CV or a cover letter: I'm <b>good at</b> managing my time. I'm <b>keen to</b> learn. I can <b>work well under pressure</b>.",
    "<b>Adjective + preposition</b>: good at, interested in, responsible for, familiar with, aware of, proud of. After the preposition, use a noun or the gerund (B1). Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund. I'm <b>good at</b> solving problems. She's <b>responsible for</b> training new staff. I'm <b>familiar with</b> this software.",
    "<b>Adjective + to + base form</b>: keen to, ready to, willing to, happy to, able to. I'm <b>keen to</b> learn new skills. We're <b>ready to</b> start. I'm <b>willing to</b> travel. With a noun, ready takes for: I'm <b>ready for</b> a new challenge. Keen also takes on + a noun or the gerund, as in B1 likes and dislikes: I'm keen on learning new skills. Both are correct: I'm keen to learn and I'm keen on learning mean almost the same.",
    "<b>Verb + preposition</b>: focus on, depend on, deal with, apply for, succeed in, pay attention to. We need to <b>focus on</b> the customer. The price <b>depends on</b> the size. She <b>deals with</b> complaints. I <b>applied for</b> the job. In pay attention to, to is a preposition, as in look forward to (B1), so it is followed by a noun or the gerund: Please <b>pay attention to</b> detail.",
    "Some verbs take <b>no preposition</b>, although learners often add one: we <b>discuss</b> a plan, not discuss about a plan, and we <b>contact</b> a manager, not contact to a manager.",
  ].join("\n\n"),

  form: [
    "good at · interested in · responsible for · familiar with · aware of · proud of + noun or -ing",
    "keen to · ready to · willing to · happy to · able to + base form",
    "ready for + noun · keen on + noun or -ing",
    "focus on · depend on · deal with · apply for · succeed in · pay attention to + noun or -ing",
    "no preposition: discuss a plan · contact a manager",
  ].join("\n"),

  examples: [
    {
      sentence: "I'm <b>good at</b> managing my time.",
      why: "<b>Good at</b> + gerund. At is a preposition, so the verb after it takes -ing.",
    },
    {
      sentence: "She's <b>responsible for</b> training new staff.",
      why: "We say responsible <b>for</b>, not responsible of.",
    },
    {
      sentence: "I'm <b>keen to</b> learn new skills.",
      why: "<b>Keen to</b> + base form means that you really want to do it. I'm keen on learning new skills is also correct.",
    },
    {
      sentence: "We need to <b>focus on</b> what the customer wants.",
      why: "<b>Focus on</b> means give most of your attention to something.",
    },
    {
      sentence: "The price <b>depends on</b> the size of the room.",
      why: "<b>Depend on</b> means that one thing changes when another thing changes.",
    },
    {
      sentence: "Let's <b>discuss</b> the budget at the next meeting.",
      why: "<b>Discuss</b> has no preposition after it: discuss the budget, not discuss about the budget.",
    },
  ],

  pitfall: {
    wrong: "I'd like to discuss about my contract.",
    right: "I'd like to <b>discuss</b> my contract.",
    why: "<b>Discuss</b> takes an object straight after it, with no preposition. We say talk about, but discuss.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Maria is very good ___ solving problems.",
      options: ["in", "at", "with", "on"],
      answer: 1,
      feedback:
        "We say good at: Maria is very good at solving problems. At is a preposition, so the verb after it takes -ing.",
    },
    {
      kind: "gap",
      stem: "As team leader, I'm responsible ___ training new staff. (Write one word.)",
      answers: ["for"],
      feedback:
        "We say responsible for: I'm responsible for training new staff. Responsible of is a common mistake.",
    },
    {
      kind: "gap",
      stem: "I'm willing ___ at weekends if it's necessary. (work)",
      answers: ["to work"],
      feedback:
        "After willing, we use to + base form: I'm willing to work at weekends if it's necessary. It means that you are happy to do it if someone asks you.",
    },
    {
      kind: "gap",
      stem: "The price depends ___ the number of people. (Write one word.)",
      answers: ["on", "upon"],
      feedback:
        "We say depend on: The price depends on the number of people. Depend upon is also correct, but it is more formal.",
    },
    {
      kind: "choice",
      stem: "Could we ___ the plan with the team before Friday?",
      options: ["discuss about", "talk", "say", "discuss"],
      answer: 3,
      feedback:
        "Discuss takes an object straight after it, with no preposition: Could we discuss the plan with the team before Friday? Talk needs about (talk about the plan), and say doesn't fit here.",
    },
    {
      kind: "mistake",
      tokens: ["Please", "pay", "attention", "at", "the", "details."],
      wrongIndex: 3,
      correction: "to",
      feedback: "We say pay attention to: Please pay attention to the details.",
    },
    {
      kind: "mistake",
      tokens: ["She's", "very", "good", "at", "manage", "people."],
      wrongIndex: 4,
      correction: "managing",
      feedback:
        "At is a preposition, so the verb after it takes -ing, the gerund: She's very good at managing people.",
    },
  ],

  levelRationale:
    "English Grammar Profile: adjective + preposition (good at, interested in) is A2 to B1, and the range grows at B2 with responsible for, familiar with, aware of, adjectives + to-infinitive (keen to, willing to) and verb + preposition (focus on, depend on, deal with, pay attention to). The spec (section 8) places adjective and verb phrases at B2 with no family, and the B2 table puts them before the cover letter (order 26), which reuses them, so every example is about work. The topic reuses the exact B1 wording for collocation and gerund. Keen to + base form and keen on + -ing are both correct, so they are never tested as a pair; the to gap uses willing, which takes only to. The mistake items fix a preposition and a verb form inside a fixed phrase (pay attention, good at), so no other word can be changed to make the sentence correct. Discuss about is tested in a choice, because the fix is to delete a word. Ready for and ready to are shown, not tested.",

  sourceNotes:
    "english_grammar.txt, # Adjective phrase (keen to learn, ready for a new challenge, good at managing my time) and # Verb phrase (pay attention to detail, work well under pressure) agree with Swan. Extremely enthusiastic, show initiative, can prioritise and stay calm in the notes are left for the cover letter (order 26). Interested in, responsible for, familiar with, aware of, proud of, willing to, happy to, able to, focus on, depend on, deal with, apply for, succeed in, keen on + -ing, and discuss and contact with no preposition are authored from Swan, Practical English Usage.",
};
