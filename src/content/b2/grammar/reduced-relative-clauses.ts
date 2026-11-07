import type { RuleTopic } from "../../schema";

export const reducedRelativeClauses: RuleTopic = {
  slug: "reduced-relative-clauses",
  title: "Reduced relative clauses: the man standing by the door",
  summary: "The man standing by the door, a house built in 1900. Make a relative clause shorter with an -ing form or a past participle after the noun.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 12,

  explanation: [
    "We can often make a relative clause shorter. When the relative pronoun is the subject, we can leave it out and use an -ing form or a past participle in place of the verb: The man <b>who is standing</b> by the door is my boss → The man <b>standing</b> by the door is my boss. (We leave out who and is.) A house <b>that was built</b> in 1900 → a house <b>built</b> in 1900. (We leave out that and was.) We call this a <b>reduced relative clause</b>. Remember: a relative pronoun is the word at the start of the clause that points back to the noun before it, like who, which or that. Remember: the past participle is the form of a verb that comes after have: seen, gone, finished.",
    "The <b>-ing form</b> has an <b>active</b> meaning: the person or thing does the action. The man standing by the door (he is standing there). Passengers <b>travelling</b> to Rome should go to gate 12 (they are travelling). It can also stand for a present simple verb, not only for be + -ing: Anyone <b>wanting</b> a ticket should call this number (= anyone who wants a ticket). The road <b>joining</b> the two villages is very narrow (= that joins them).",
    "The <b>past participle</b> has a <b>passive</b> meaning, as in the passive (B1): the action happens to the person or thing. A house built in 1900 (it was built). Most of the people <b>invited</b> to the party were from work (they were invited). A watch <b>made</b> in Switzerland (it was made there).",
    "We don't usually use the -ing form for one finished action in the past. Say The man who phoned yesterday was my uncle, not The man phoning yesterday was my uncle.",
    "We can only do this when the relative pronoun is the <b>subject</b>. When it is the object, there is another subject after it, and there is no short form with -ing or a past participle. We just leave the pronoun out, as in B1: the film (that) I saw.",
    "The full relative clause is always correct too. Both are correct: the man who is standing by the door and the man standing by the door. The short form is very common in writing, news and notices: Police are looking for a man <b>seen</b> near the bank last night.",
    "It also works with a non-defining clause (order 11), with the same commas: The Golden Gate Bridge, (which was) <b>opened</b> in 1937, is in San Francisco.",
  ].join("\n\n"),

  form: [
    "noun + -ing form (active) = who / which / that + verb · the man standing by the door (who is standing)",
    "noun + past participle (passive) = who / which / that + be + past participle · a house built in 1900 (that was built)",
    "only when the pronoun is the subject",
    "not for one finished action: the man who phoned yesterday, not the man phoning yesterday",
    "the full clause is also correct",
  ].join("\n"),

  examples: [
    {
      sentence: "The man <b>standing</b> by the door is my boss.",
      why: "<b>Standing</b> = who is standing. The -ing form has an active meaning: he is standing there.",
    },
    {
      sentence: "We live in a house <b>built</b> in 1900.",
      why: "<b>Built</b> = that was built. The past participle has a passive meaning: someone built the house.",
    },
    {
      sentence: "Passengers <b>travelling</b> to Rome should go to gate 12.",
      why: "<b>Travelling</b> = who are travelling. Short forms like this are common in notices.",
    },
    {
      sentence: "Anyone <b>wanting</b> a ticket should call this number.",
      why: "<b>Wanting</b> = who wants. The -ing form can stand for a present simple verb too.",
    },
    {
      sentence: "Most of the people <b>invited</b> to the party were from work.",
      why: "<b>Invited</b> = who were invited. Someone invited them, so we use the past participle.",
    },
  ],

  pitfall: {
    wrong: "I found a letter writing by my grandfather in 1950.",
    right: "I found a letter <b>written</b> by my grandfather in 1950.",
    why: "The letter didn't write anything. Someone wrote it, so the meaning is passive, and we use the <b>past participle</b>: written (= that was written).",
  },

  quiz: [
    {
      kind: "choice",
      stem: "The girl ___ to Anna is her cousin.",
      options: ["talked", "talking", "who talking", "is talking"],
      answer: 1,
      feedback:
        "The girl is doing the action, so we use the -ing form: The girl talking to Anna is her cousin (= who is talking). Who talking needs is, and is talking can't follow the girl without who.",
    },
    {
      kind: "gap",
      stem: "Most of the cars ___ in this factory go to Europe. (make, one word)",
      answers: ["made"],
      feedback:
        "The cars don't make anything. Someone makes them, so the meaning is passive, and we use the past participle: Most of the cars made in this factory go to Europe (= that are made).",
    },
    {
      kind: "gap",
      stem: "Anyone ___ to join the club should email Mr Park. (want, one word)",
      answers: ["wanting"],
      feedback:
        "The person does the action (they want to join), so we use the -ing form: Anyone wanting to join the club should email Mr Park (= anyone who wants to join).",
    },
    {
      kind: "choice",
      stem: "\"The man arrested last night is a famous actor.\" What does this mean?",
      options: ["The man arrested someone last night.", "The man is arresting someone.", "The man was arrested last night."],
      answer: 2,
      feedback:
        "Arrested after the noun is a past participle with a passive meaning: the man who was arrested last night. The police arrested him.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a sentence. Use a reduced relative clause.",
      words: ["goes", "six", "The", "Leeds.", "leaving", "train", "at", "to"],
      answer: "The train leaving at six goes to Leeds.",
      feedback:
        "The noun comes first, then the -ing form and the words that go with it, then the main verb: The train leaving at six goes to Leeds (= the train that leaves at six).",
    },
    {
      kind: "mistake",
      tokens: ["We", "stayed", "in", "a", "small", "village", "calling", "Ashby."],
      wrongIndex: 6,
      correction: "called",
      feedback:
        "A village can't call anything. People call it Ashby, so the meaning is passive, and we use the past participle: We stayed in a small village called Ashby (= that is called Ashby).",
    },
    {
      kind: "mistake",
      tokens: ["The", "woman", "teaches", "us", "French", "is", "very", "patient."],
      wrongIndex: 2,
      correction: "teaching",
      feedback:
        "A sentence can't have two main verbs like this. Use the -ing form: The woman teaching us French is very patient. The full clause is also correct: The woman who teaches us French is very patient.",
    },
  ],

  levelRationale:
    "English Grammar Profile: noun + -ing form and noun + past participle after a noun (the man standing there, a book written in 1900) appear from B1 and grow at B2 with longer phrases and the active and passive contrast. The spec (section 8) places reduced relative clauses at B2, and the B2 table puts them after non-defining clauses (order 11) with no family. The topic builds on B1 defining-relative-clauses (the relative pronoun as subject or object) and B1 the-passive (the past participle has a passive meaning), and reuses their exact wording for relative pronoun and past participle. Each gap says one word, so the full clause (that are made, who wants) is not a second answer, and each gap names its verb. The mistake items have no phrase that a learner could delete to leave a correct sentence (a village Ashby; the woman teaches us French very patient), so each has one fix. The wordbank has one capital and one full stop, so there is one order. Being + past participle (the house being built) is left out.",

  sourceNotes:
    "Reduced relative clauses are (new) in spec section 8: english_grammar.txt has no section on them. The -ing form and the past participle after a noun, the active and passive meanings, -ing for a present simple verb, no -ing for one finished past action, only when the pronoun is the subject, and the use in news and notices are authored from Swan, Practical English Usage.",
};
