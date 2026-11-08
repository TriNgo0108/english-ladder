import type { RuleTopic } from "../../schema";

export const nonDefiningRelativeClauses: RuleTopic = {
  slug: "non-defining-relative-clauses",
  family: "relative-clauses",
  title: "Non-defining relative clauses: My mother, who is a nurse, …",
  summary: "My mother, who is a nurse, works at night. Add extra information with who, which, whose or where between commas, and not normally with that.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 11,

  explanation: [
    "In B1, we learned defining relative clauses. They say <b>which</b> person or thing we mean: The woman who lives next door is a nurse. Remember: a clause is a group of words with a subject and a verb. Remember: a relative pronoun is the word at the start of the clause that points back to the noun before it, like who, which or that.",
    "Sometimes it is already clear which person or thing we mean, and we just want to add <b>extra information</b>: My mother<b>, who is a nurse,</b> works at night. I have only one mother, so who is a nurse doesn't tell you which one. It only tells you more about her. A relative clause like this is called a <b>non-defining clause</b>: a relative clause that adds extra information about a person or thing that is already clear. We learned in B1 commas how to tell when information is extra. It is extra if you can take it out and the sentence still makes sense, with the same main meaning. Here, without it, we have: My mother works at night.",
    "In writing, a non-defining clause has <b>commas</b>. When it is in the middle of the sentence, follow the B1 rule for extra information. Use a pair of commas, one before and one after. Paris<b>,</b> which is the capital of France<b>,</b> is beautiful in spring. When it comes at the end of the sentence, put one comma before it and a full stop at the end: I spoke to Mr Lee<b>,</b> who was very helpful. In speech, we usually make a short pause where the commas are.",
    "Use <b>who</b> for people and <b>which</b> for things and animals. Use <b>whose</b> to say who something belongs to, and <b>where</b> for places: My grandfather<b>, whose</b> parents came from Ireland, was born in 1940. We stayed in Bath<b>, where</b> my brother lives.",
    "There are two important differences from defining clauses. First, we <b>don't use that</b> in a non-defining clause: Rome, <b>which</b> is in Italy, … not Rome, that is in Italy, … Second, we <b>can't leave the relative pronoun out</b>, even when it is the object: Titanic, <b>which</b> I watched again last night, is over three hours long, not Titanic, I watched again last night, is over three hours long.",
    "<b>Which</b> can also point back to a whole clause, not just one noun: He arrived two hours late<b>, which</b> annoyed everyone. (The fact that he was late annoyed everyone.) Only which works here. We don't use what or that: …, which annoyed everyone, not …, what annoyed everyone.",
    "Commas can change the meaning. My brother who lives in Paris is a doctor (no commas) tells you which brother, so it means that I have more than one. My brother<b>,</b> who lives in Paris<b>,</b> is a doctor means that I have one brother, and it adds that he lives in Paris. With a name, or with a person or thing that there is only one of, like my mother or the Eiffel Tower, the relative clause usually has commas.",
    "Non-defining clauses are more common in writing than in conversation. In speech, people often use two short sentences instead: My mother is a nurse. She works at night.",
  ].join("\n\n"),

  form: [
    "extra information about a person or thing that is already clear → commas",
    "in the middle: noun, who / which …, rest of the sentence · at the end: …, who / which ….",
    "who → people · which → things and animals · whose → his / her / their · where → places",
    "not normally that · never leave the pronoun out",
    "which for a whole clause: He was late, which annoyed everyone.",
  ].join("\n"),

  examples: [
    {
      sentence: "My mother<b>, who</b> is a nurse<b>,</b> works at night.",
      why: "I have only one mother, so the clause is extra information. It is in the middle of the sentence, so it has a comma before it and after it.",
    },
    {
      sentence: "We stayed in Bath<b>, where</b> my brother lives.",
      why: "<b>Where</b> is for a place. The clause comes at the end, so there is one comma before it.",
    },
    {
      sentence: "Titanic<b>, which</b> I watched again last night<b>,</b> is over three hours long.",
      why: "<b>Which</b> is the object here (I watched it), but in a non-defining clause we still can't leave it out.",
    },
    {
      sentence: "My grandfather<b>, whose</b> parents came from Ireland<b>,</b> was born in 1940.",
      why: "<b>Whose</b> takes the place of his: his parents came from Ireland.",
    },
    {
      sentence: "He arrived two hours late<b>, which</b> annoyed everyone.",
      why: "<b>Which</b> points back to the whole clause: the fact that he arrived late annoyed everyone.",
    },
  ],

  pitfall: {
    wrong: "The Colosseum, that is almost 2,000 years old, is in Rome.",
    right: "The Colosseum, <b>which</b> is almost 2,000 years old, is in Rome.",
    why: "We don't normally use <b>that</b> in a non-defining clause. For a thing, use <b>which</b>.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence is punctuated correctly?",
      options: [
        "My father who is a pilot, flies to Tokyo every week.",
        "My father, who is a pilot flies to Tokyo every week.",
        "My father, who is a pilot, flies to Tokyo every week.",
        "My father, that is a pilot, flies to Tokyo every week.",
      ],
      answer: 2,
      feedback:
        "I have only one father, so who is a pilot is extra information. In the middle of a sentence, it needs a pair of commas, one before and one after: My father, who is a pilot, flies to Tokyo every week. We don't normally use that in a non-defining clause.",
    },
    {
      kind: "gap",
      stem: "We had lunch in Bath, ___ my sister lives. (Write one word.)",
      answers: ["where"],
      feedback:
        "Bath is a place, and my sister lives in it, so we use where: We had lunch in Bath, where my sister lives. The clause is extra information, so there is a comma before it.",
    },
    {
      kind: "gap",
      stem: "My grandmother, ___ house is by the sea, invites us every summer.",
      answers: ["whose"],
      feedback:
        "The house belongs to my grandmother (her house is by the sea), so we use whose: My grandmother, whose house is by the sea, invites us every summer. Who's means who is, so it is not correct here.",
    },
    {
      kind: "choice",
      stem: "\"My brother who lives in Paris is a doctor.\" There are no commas. What does this tell us?",
      options: ["I have only one brother.", "I have more than one brother.", "My brother doesn't live in Paris."],
      answer: 1,
      feedback:
        "With no commas, who lives in Paris is a defining clause: it tells you which brother I mean, so I have more than one. With commas (My brother, who lives in Paris, is a doctor), it would mean that I have only one brother.",
    },
    {
      kind: "mistake",
      tokens: ["Tokyo,", "that", "is", "the", "capital", "of", "Japan,", "is", "a", "huge", "city."],
      wrongIndex: 1,
      correction: "which",
      feedback:
        "We don't normally use that in a non-defining clause. Tokyo is a thing, not a person, and the pronoun is the subject of is, so we use which: Tokyo, which is the capital of Japan, is a huge city.",
    },
    {
      kind: "mistake",
      tokens: ["Maria,", "who", "is", "my", "best", "friend", "speaks", "four", "languages."],
      wrongIndex: 5,
      correction: "friend,",
      feedback:
        "Who is my best friend is extra information about Maria, in the middle of the sentence. It needs a pair of commas, one before and one after: Maria, who is my best friend, speaks four languages. The comma goes after friend.",
    },
    {
      kind: "mistake",
      tokens: ["It", "rained", "all", "weekend,", "what", "was", "a", "pity."],
      wrongIndex: 4,
      correction: "which",
      feedback:
        "To point back to a whole clause (it rained all weekend), we use which, not what: It rained all weekend, which was a pity.",
    },
  ],

  levelRationale:
    "English Grammar Profile: non-defining relative clauses with who and which appear from B1 in writing, and the pattern grows at B2, with whose and where, an object pronoun that can't be left out, and which pointing back to a whole clause. The spec (section 8) and the family table place non-defining clauses at B2, after B1 defining-relative-clauses, which left them to a later level, and after B1 commas, which taught extra information with a pair of commas. The topic reuses the exact B1 wording for clause, relative pronoun and extra information. Gap grading cannot test commas, so the comma points are tested only in a choice and in a mistake item, with the comma attached to the token before it. Every comma item uses a person or thing there is only one of (my father, Maria, Tokyo), so taking both commas out does not leave a correct defining clause, and the mistake items have one fix each. The that mistake is on Tokyo, where the pronoun is the subject of is, so only which fits; who is for people and where can't be a subject. In the whole-clause item, that and it would make a comma splice, which B1 commas teaches is wrong. Whom and prepositions before the pronoun (to whom, in which) are left out.",

  sourceNotes:
    "english_grammar.txt, # Relative clauses, ## Non-defining relative clause: extra information about a noun that is already clearly identified, the sentence making sense without it, commas, no that, no dropping the relative pronoun, and which for a whole idea agree with Swan. The # Punctuation note's example (That man, who is extremely tall, is Sarah's music teacher) is not used, because that man is identified only by pointing. Whose and where in non-defining clauses, the one comma at the end of a sentence, the meaning difference with and without commas, the pause in speech and two short sentences in conversation are authored from Swan, Practical English Usage.",
};
