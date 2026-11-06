import type { RuleTopic } from "../../schema";

export const personalPronouns: RuleTopic = {
  slug: "personal-pronouns",
  title: "Personal pronouns: I, you, he, she, it, we, they",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 3,

  explanation: [
    "A pronoun is a short word that we use in place of a noun. Remember: a noun is a word for a person, a thing, an animal or a place. With a pronoun, we do not need to say the same noun again: Anna is a teacher. <b>She</b> is from Spain.",
    "In this topic, the pronoun is the subject of the sentence. Remember: the subject is the person or thing that the sentence is about. These pronouns are <b>I</b>, <b>you</b>, <b>he</b>, <b>she</b>, <b>it</b>, <b>we</b> and <b>they</b>.",
    "Use <b>I</b> for yourself. Always write I as a capital letter (I, not i), also in the middle of a sentence: My friend and I are students.",
    "Use <b>you</b> for the person you are talking to. You is for one person or for many people. It is the same word.",
    "Use <b>he</b> for a man or a boy. Use <b>she</b> for a woman or a girl. Use <b>it</b> for a thing, and usually for an animal: My car is old. It is slow. We also use it for the weather and the time: It is cold. It is five o'clock.",
    "Use <b>we</b> for yourself (I) and one or more other people together: Tom and I are brothers. We are twins. Use <b>they</b> for two or more people or things: My parents are at home. They are tired. My keys are not here. They are in the car.",
    "An English sentence needs a subject. Do not leave it out: It is cold today, not Is cold today. But do not use a noun and a pronoun together for the same subject: My sister is a doctor, not My sister she is a doctor.",
  ].join("\n\n"),

  form: [
    "one: I · you · he · she · it",
    "two or more: we · you · they",
    "I am · you are · he/she/it is · we/they are",
  ].join("\n"),

  examples: [
    {
      sentence: "My name is Sam and <b>I</b> am a student.",
      why: "We use <b>I</b> to talk about ourselves. It is always a capital letter, also in the middle of a sentence.",
    },
    {
      sentence: "My father is a cook. <b>He</b> is at work now.",
      why: "We use <b>he</b> in place of my father, because my father is a man.",
    },
    {
      sentence: "Maria is my friend. <b>She</b> is from Italy.",
      why: "We use <b>she</b> in place of Maria, because Maria is a woman.",
    },
    {
      sentence: "My phone is old. <b>It</b> is very slow.",
      why: "We use <b>it</b> in place of my phone, because a phone is a thing.",
    },
    {
      sentence: "Tom and I are friends. <b>We</b> are in the same class.",
      why: "We use <b>we</b> because the subject is Tom and I: another person and me together.",
    },
    {
      sentence: "My keys are not here. <b>They</b> are in the car.",
      why: "We use <b>they</b> because my keys are two or more things. They is for people and for things.",
    },
    {
      sentence: "<b>It</b> is hot today.",
      why: "An English sentence needs a subject. For the weather, the subject is <b>it</b>.",
    },
  ],

  pitfall: {
    wrong: "My brother he is a doctor.",
    right: "<b>My brother</b> is a doctor.",
    why: "My brother is already the subject, so we do not add he. Use the noun or the pronoun, not both: My brother is a doctor, or <b>He</b> is a doctor.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "My sister is fifteen. ___ is at school.",
      options: ["He", "She", "It", "They"],
      answer: 1,
      feedback:
        "My sister is a girl, so we use she: She is at school. He is for a man or a boy, it is for a thing, and they is for two or more.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["Is cold today.", "It cold today.", "It is cold today."],
      answer: 2,
      feedback:
        "An English sentence needs a subject. For the weather, the subject is it: It is cold today. We cannot leave out it, and we cannot leave out the verb is.",
    },
    {
      kind: "gap",
      stem: "My shoes are new. ___ are black and white. (Use I, you, he, she, it, we or they.)",
      answers: ["They"],
      feedback:
        "My shoes are two things, so we use they: They are black and white. They is for people and for things. It is only for one thing.",
    },
    {
      kind: "gap",
      stem: "Ben and I are brothers. ___ are both students. (Use I, you, he, she, it, we or they.)",
      answers: ["We"],
      feedback:
        "The subject is Ben and I: another person and me together. For that we use we: We are both students. They is for other people, without me.",
    },
    {
      kind: "mistake",
      tokens: ["My", "mother", "she", "is", "a", "nurse."],
      wrongIndex: 2,
      correction: "My mother is a nurse.",
      feedback:
        "My mother is already the subject, so we do not add she. Say My mother is a nurse, or She is a nurse, but not both.",
    },
    {
      kind: "mistake",
      tokens: ["My", "friend", "and", "i", "are", "students."],
      wrongIndex: 3,
      correction: "I",
      feedback:
        "The pronoun I is always a capital letter, also in the middle of a sentence: My friend and I are students.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: the subject pronouns I, you, he, she, it, we and they are among the first A1 pronoun points. This topic comes after nouns, because a pronoun is explained as a word used in place of a noun. Object pronouns (me, him, her) and possessive pronouns (mine, yours) are a later A1 topic.",

  sourceNotes:
    "New topic: english_grammar.txt has no section on subject pronouns. Its # Possessive pronouns section (his, hers, ours, theirs) feeds a later A1 topic. Claims checked against Swan, Practical English Usage: an English sentence must have a subject, so the pronoun cannot be left out (It is cold, not Is cold); a noun subject and a pronoun for the same subject together is a learner error; it for the weather and the time; it is usual for animals, but people often use he or she for a pet, so the explanation says usually. Singular they for one person (Someone is at the door. What do they want?) is correct English, but it is left to a later level.",
};
