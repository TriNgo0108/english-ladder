import type { RuleTopic } from "../../schema";

export const participleClauses: RuleTopic = {
  slug: "participle-clauses",
  title: "Participle clauses: Walking home, I saw an old friend",
  summary: "Walking home, I saw an old friend. Built in 1900, the house needs repairs. Having finished, she left. Join two ideas in a shorter, more formal way.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 13,

  explanation: [
    "Compare: <b>When I was walking</b> home, I saw an old friend. <b>Walking</b> home, I saw an old friend. The second sentence is shorter. Walking home is a <b>participle clause</b>: a short part of a sentence that starts with an -ing form or a past participle, and that has no subject and no tense of its own. Its subject is the same as the subject of the rest of the sentence (here, I), and the time comes from the other verb (saw). Remember: the past participle is the form of a verb that comes after have: seen, gone, finished.",
    "Participle clauses are more common in writing, stories and news than in everyday speech. In conversation, we usually use a linking word and a full clause: When I was walking home, … Because she felt tired, … Both are correct.",
    "An <b>-ing</b> clause has an <b>active</b> meaning: the subject does the action. It can say what was happening at the same time, or why: <b>Walking</b> home, I saw an old friend (= while I was walking home). <b>Feeling</b> tired, she went to bed early (= because she felt tired).",
    "A <b>past participle</b> clause has a <b>passive</b> meaning, as in the passive (B1): the action happens to the subject. <b>Built</b> in 1900, the house needs a lot of repairs (= because it was built in 1900). <b>Asked</b> about the plan, the minister said nothing (= when he was asked).",
    "<b>Having</b> + past participle shows that one action finished <b>before</b> the next one: <b>Having finished</b> her work, she went home (= after she had finished her work). To make any participle clause negative, put <b>not</b> first: <b>Not knowing</b> what to do, I called my mother.",
    "The most important rule: the subject of the participle clause must be the <b>same</b> as the subject of the rest of the sentence. Walking home, the rain started is wrong, because the rain wasn't walking. Say Walking home, I got caught in the rain, or use a full clause: While I was walking home, it started to rain.",
    "When the participle clause comes first, we usually put a comma after it, as after a time clause (B1 commas): Feeling tired<b>,</b> she went to bed early.",
  ].join("\n\n"),

  form: [
    "-ing (active): Walking home, I saw an old friend. (= while I was walking)",
    "past participle (passive): Built in 1900, the house needs repairs. (= it was built)",
    "having + past participle (the action before): Having finished, she left. (= after she had finished)",
    "not first: Not knowing what to do, I called my mother.",
    "the same subject in both parts · not: Walking home, the rain started.",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>Walking</b> home, I saw an old friend.",
      why: "= While I was walking home. I was walking, and I saw my friend, so the subject is the same.",
    },
    {
      sentence: "<b>Feeling</b> tired, she went to bed early.",
      why: "= Because she felt tired. The -ing clause gives the reason.",
    },
    {
      sentence: "<b>Built</b> in 1900, the house needs a lot of repairs.",
      why: "= The house was built in 1900. The past participle has a passive meaning: someone built the house.",
    },
    {
      sentence: "<b>Having finished</b> her work, she went home.",
      why: "= After she had finished her work. <b>Having</b> + past participle shows the action that came first.",
    },
    {
      sentence: "<b>Not knowing</b> what to do, I called my mother.",
      why: "= Because I didn't know what to do. <b>Not</b> goes before the -ing form.",
    },
  ],

  pitfall: {
    wrong: "Finished my homework, I went out with my friends.",
    right: "<b>Having finished</b> my homework, I went out with my friends.",
    why: "I did the finishing, so the meaning is active. To show that it came first, use <b>having</b> + past participle.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "Driving to work, the radio played my favourite song.",
        "Driving to work, my favourite song came on the radio.",
        "Driving to work, I heard my favourite song on the radio.",
      ],
      answer: 2,
      feedback:
        "The subject of the participle clause must be the same as the subject of the rest of the sentence. I was driving, so the sentence must go on with I: Driving to work, I heard my favourite song on the radio. The radio and the song weren't driving.",
    },
    {
      kind: "gap",
      stem: "___ in 1889, the Eiffel Tower is now the symbol of Paris. (build, one word)",
      answers: ["Built"],
      feedback:
        "The tower didn't build anything. Someone built it, so the meaning is passive, and we use the past participle: Built in 1889, the Eiffel Tower is now the symbol of Paris (= it was built in 1889).",
    },
    {
      kind: "gap",
      stem: "___ the email, she closed her laptop and went home. (having + send)",
      answers: ["Having sent"],
      feedback:
        "She sent the email first, and then she closed her laptop, so we use having + past participle: Having sent the email, she closed her laptop and went home (= after she had sent the email). Send is irregular: send → sent → sent.",
    },
    {
      kind: "gap",
      stem: "___ what to say, I just smiled. (not + know, two words)",
      answers: ["Not knowing"],
      feedback:
        "To make a participle clause negative, put not before the -ing form: Not knowing what to say, I just smiled (= because I didn't know what to say).",
    },
    {
      kind: "choice",
      stem: "\"Feeling tired, Sam went to bed early.\" What does this mean?",
      options: [
        "Sam went to bed early because he felt tired.",
        "Sam felt tired because he went to bed early.",
        "Someone else felt tired, so Sam went to bed early.",
      ],
      answer: 0,
      feedback:
        "The -ing clause gives the reason, and its subject is the same as the subject of the rest of the sentence, Sam: Sam felt tired, so he went to bed early.",
    },
    {
      kind: "mistake",
      tokens: ["Making", "in", "Italy,", "these", "shoes", "are", "very", "expensive."],
      wrongIndex: 0,
      correction: "Made",
      feedback:
        "The shoes don't make anything. Someone makes them, so the meaning is passive, and we use the past participle: Made in Italy, these shoes are very expensive (= because they are made in Italy).",
    },
    {
      kind: "mistake",
      tokens: ["Have", "finished", "the", "report,", "Lisa", "sent", "it", "to", "her", "manager."],
      wrongIndex: 0,
      correction: "Having",
      feedback:
        "To show that one action came before the next, we use having + past participle: Having finished the report, Lisa sent it to her manager (= after she had finished it).",
    },
  ],

  levelRationale:
    "English Grammar Profile: participle clauses with -ing for time and reason, and with a past participle, appear at B2, and having + past participle and the negative with not are B2 too. The spec (section 8) places participle clauses at B2, and the B2 table puts them after reduced relative clauses (order 12) with no family. The term participle clause is defined here, in plain words that say it has no subject of its own, so the B1 definition of clause is not repeated. The topic builds on B1 the-passive (the passive meaning of the past participle) and B1 commas (the comma after a first time clause). The classic error, a participle clause whose subject is not the subject of the rest of the sentence, can't be fixed by changing one word, so it is tested in a choice, as the task says. Each gap names its verb and the number of words, so a full clause (When I was walking) is not a second answer; the having gap names having, because Sending the email, she closed her laptop is also possible for one action straight after another. The perfect passive (Having been told) and participle clauses after conjunctions (while waiting) are left out.",

  sourceNotes:
    "Participle clauses are (new) in spec section 8: english_grammar.txt has no section on them. The -ing clause for time and reason, the past participle clause, having + past participle, not first, the same-subject rule (Swan's misrelated participles), their use in writing more than in speech and the comma are authored from Swan, Practical English Usage.",
};
