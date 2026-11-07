import type { RuleTopic } from "../../schema";

export const definingRelativeClauses: RuleTopic = {
  slug: "defining-relative-clauses",
  family: "relative-clauses",
  title: "Defining relative clauses: the woman who lives next door",
  summary: "The woman who lives next door, the town where I grew up, the film we saw. Use who, which, that, where and whose to say which person or thing you mean.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 18,

  explanation: [
    "Sometimes we need to say <b>which</b> person or thing we mean: The woman <b>who lives next door</b> is a nurse. Without who lives next door, the listener doesn't know which woman. This part of the sentence is a <b>defining relative clause</b>. Remember: a clause is a group of words with a subject and a verb.",
    "A <b>relative pronoun</b> is the word at the start of the clause that points back to the noun before it, like who, which or that. Use <b>who</b> for people: the man <b>who</b> sold me the car. Use <b>which</b> for things and animals: the keys <b>which</b> were on the table. <b>That</b> can be used for people and for things: the man <b>that</b> sold me the car, the keys <b>that</b> were on the table. That is very common in speaking, and which is more common in formal writing.",
    "Sometimes the relative pronoun is the <b>subject</b> of the clause: the man <b>who lives</b> here (he lives here). Then we can't leave it out: the man who lives here, not the man lives here. Remember: the subject is the person or thing that the sentence is about.",
    "Sometimes the relative pronoun is the <b>object</b> of the clause, and another subject comes after it: the phone <b>that I bought</b> (I bought it). Then we can use who, which or that, or we can leave it out: the phone that I bought, the phone which I bought, the phone I bought. All three are correct, and in speaking we often leave it out. Remember: the object is the person or thing that the action goes to.",
    "The relative pronoun takes the place of he, she, it or them, so don't use both: the phone that I bought, not the phone that I bought it. Don't use what after a noun: the book that I wanted, not the book what I wanted.",
    "Use <b>where</b> for places: This is the town <b>where</b> I grew up. Use <b>whose</b>, usually for people, to say who something belongs to. It takes the place of his, her or their: I met a man <b>whose</b> brother plays football for Italy (his brother plays football for Italy).",
    "A defining relative clause has <b>no commas</b>, because it is part of the noun: The woman who lives next door is a nurse. A relative clause with commas is a different kind, which you'll meet at a later level.",
  ].join("\n\n"),

  form: [
    "who → people · which → things and animals · that → people or things",
    "pronoun is the subject → you can't leave it out · the man who lives here",
    "pronoun is the object → who / which / that, or leave it out · the phone (that) I bought",
    "where → places · the town where I grew up",
    "whose → his / her / their · a man whose brother plays football",
    "no commas · not: the phone that I bought it · not: the book what I wanted",
  ].join("\n"),

  examples: [
    {
      sentence: "The woman <b>who</b> lives next door is a nurse.",
      why: "<b>Who</b> is for a person, and it is the subject of lives, so we can't leave it out. That is also correct.",
    },
    {
      sentence: "The keys <b>which</b> were on the table have gone.",
      why: "<b>Which</b> is for things. It is the subject of were, so we can't leave it out. That is also correct.",
    },
    {
      sentence: "The phone (<b>that</b>) I bought last week has stopped working.",
      why: "Here <b>that</b> is the object (I bought it), so we can use that or which, or leave it out.",
    },
    {
      sentence: "The man I met at the party was very funny.",
      why: "The relative pronoun is the object (I met him), so it is left out. The man who I met and the man that I met are also correct.",
    },
    {
      sentence: "This is the town <b>where</b> I grew up.",
      why: "<b>Where</b> is for a place: I grew up in this town.",
    },
    {
      sentence: "I met a man <b>whose</b> brother plays football for Italy.",
      why: "<b>Whose</b> takes the place of his: his brother plays football for Italy.",
    },
  ],

  pitfall: {
    wrong: "The phone that I bought it has stopped working.",
    right: "The phone that I bought has stopped working.",
    why: "<b>That</b> already takes the place of it, so don't use both.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "I have a friend ___ speaks five languages.",
      answers: ["who", "that"],
      feedback:
        "A friend is a person, so we use who or that. Here it is the subject of speaks, so we can't leave it out: I have a friend who speaks five languages.",
    },
    {
      kind: "gap",
      stem: "Is there a bus ___ goes to the airport?",
      answers: ["which", "that"],
      feedback:
        "A bus is a thing, so we use which or that. It is the subject of goes, so we can't leave it out: Is there a bus that goes to the airport?",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "The film who we saw last night was great.",
        "The film we saw it last night was great.",
        "The film we saw last night was great.",
        "The film which we saw it last night was great.",
      ],
      answer: 2,
      feedback:
        "The relative pronoun is the object (we saw the film), so we can leave it out: The film we saw last night was great. Who is only for people, and we don't add it, because the clause already points back to the film.",
    },
    {
      kind: "choice",
      stem: "In which sentence can you leave out the relative pronoun (who, which or that)?",
      options: [
        "The man who owns this shop is from Ghana.",
        "The bag that I bought was cheap.",
        "The train that leaves at six is fast.",
        "The girl who won the race is my sister.",
      ],
      answer: 1,
      feedback:
        "In The bag that I bought, that is the object (I bought it), so we can leave it out: The bag I bought was cheap. In the other sentences, the pronoun is the subject of owns, leaves and won, so it must stay.",
    },
    {
      kind: "gap",
      stem: "This is the café ___ we first met. (Write one word.)",
      answers: ["where"],
      feedback:
        "A café is a place, and we met in it, so we use where: This is the café where we first met.",
    },
    {
      kind: "gap",
      stem: "That's the woman ___ dog bit me.",
      answers: ["whose"],
      feedback:
        "The dog belongs to the woman (her dog bit me), so we use whose: That's the woman whose dog bit me. Who's means who is, so it is not correct here.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a sentence. There is no relative pronoun, because here you can leave it out.",
      words: ["made", "The", "delicious.", "you", "was", "cake"],
      answer: "The cake you made was delicious.",
      feedback:
        "The noun comes first, then the relative clause, you made, then the rest of the sentence: The cake you made was delicious. The pronoun is the object (you made it), so it can be left out.",
    },
    {
      kind: "mistake",
      tokens: ["Is", "this", "the", "book", "what", "you", "wanted?"],
      wrongIndex: 4,
      correction: "that",
      feedback:
        "We don't use what after a noun. Use that or which, or leave the pronoun out: Is this the book that you wanted?",
    },
  ],

  levelRationale:
    "English Grammar Profile: defining relative clauses with who, which and that are A2 to B1, leaving out an object pronoun is B1, and where and whose in defining clauses are B1. The spec (section 8) places defining relative clauses at B1 and non-defining ones, with commas, at B2, the family's next level, so commas are mentioned in one line only. The term relative pronoun is defined here for the first time on this site, and clause is reused from order 7. No gap asks for an object pronoun, because it can be left out and a gap cannot accept nothing; the gaps ask for subject pronouns, where, and whose, and accept that wherever it is correct. The word bank has no pronoun in its chips, so there is one order. Whom and prepositions at the end (the house I live in) are left out.",

  sourceNotes:
    "english_grammar.txt, # Relative clauses, ## Defining relative clause: a clause that helps identify something in the main clause, no commas, and that in place of which or who (less formal) agree with Swan. The note also lists whom, which is formal and is left out here. The note does not say when the pronoun can be left out; that rule, who for people and which for things, where, whose, and not using it or what in the clause are authored from Swan, Practical English Usage. ## Non-defining relative clause is B2 and is not taught here.",
};
