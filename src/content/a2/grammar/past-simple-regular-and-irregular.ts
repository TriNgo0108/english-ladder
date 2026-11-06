import type { RuleTopic } from "../../schema";

export const pastSimpleRegularAndIrregular: RuleTopic = {
  slug: "past-simple-regular-and-irregular",
  family: "past-simple",
  title: "Past simple: I worked, I went",
  summary: "Talk about finished actions in the past: I worked, we went. Learn -ed spelling, common irregular verbs, didn't, and questions with did.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 1,

  explanation: [
    "We use the <b>past simple</b> for actions and situations that finished in the past. We often say when: yesterday, last night, last week, two days ago, in 2019. I <b>watched</b> a film last night. We <b>went</b> to Spain in 2019.",
    "The past simple is the same for every subject: I worked, you worked, she worked, they worked. There is no -s for he, she and it. Remember: the subject is the person or thing that the sentence is about.",
    "Most verbs are <b>regular</b>. A regular verb makes the past simple with <b>-ed</b>. Add -ed to the base form: work → worked, play → played, watch → watched. Remember: a verb is a word like go, eat or have. The base form is the verb as you see it in a dictionary, with nothing added.",
    "When the verb ends in e, add only <b>-d</b>: live → lived, like → liked, arrive → arrived. When the verb ends in -y and the letter before the y is a, e, o or u, just add -ed: play → played, stay → stayed. When it is a different letter, change the y to <b>-ied</b>: study → studied, carry → carried, try → tried.",
    "Some short verbs have only one vowel, and they end in that vowel and then one consonant. They write the last letter two times, as they do before -ing: stop → stopped, plan → planned. We do not do this with w, x or y at the end: fix → fixed. Remember: a vowel is one of the letters a, e, i, o and u. A consonant is any other letter.",
    "We say -ed as an extra part of the word only after the sounds t and d: wanted (want-ed), needed (need-ed). In most verbs it is not an extra part: worked, played and lived each have only one part.",
    "Many common verbs are <b>irregular</b>. They do not use -ed. Each one has its own past form, and you need to learn it: go → went, have → had, do → did, see → saw, come → came, get → got, make → made, take → took, buy → bought, eat → ate, write → wrote, say → said, meet → met, find → found.",
    "To say no, use <b>didn't</b> (did not) and then the base form. This is the same for regular and irregular verbs: I didn't work. She didn't go. The past is already in didn't, so the verb does not change: She didn't go, not She didn't went.",
    "To ask a question, put <b>did</b> before the subject, and use the base form: <b>Did</b> you <b>see</b> the match? Where <b>did</b> she <b>go</b>? In short answers, use did or didn't: Yes, I did. No, she didn't.",
    "Be is different. Its past is was and were, and we do not use did with it: I wasn't at home, not I didn't be at home. Were you tired? not Did you be tired?",
  ].join("\n\n"),

  form: [
    "regular: work → worked · live → lived · study → studied · stop → stopped",
    "irregular: go → went · have → had · see → saw · buy → bought",
    "I/you/he/she/it/we/they worked · went",
    "I/you/he/she/it/we/they didn't work · didn't go",
    "Did you work …? · Where did she go?",
    "Yes, I did. · No, I didn't.",
  ].join("\n"),

  examples: [
    {
      sentence: "I <b>watched</b> a film last night.",
      why: "Watch is a regular verb, so we add <b>-ed</b>. Last night is a finished time in the past, so we use the past simple.",
    },
    {
      sentence: "She <b>lived</b> in London when she was a student.",
      why: "Live ends in e, so we add only <b>-d</b>: lived, not liveed. It is the same for she: no -s.",
    },
    {
      sentence: "We <b>stopped</b> at a café on the way.",
      why: "Stop is a short verb with one vowel and then one consonant, so the p is written two times: <b>stopped</b>.",
    },
    {
      sentence: "My brother <b>studied</b> in Canada.",
      why: "Study ends in -y, and the letter before the y is d, so the y changes to <b>-ied</b>: studied.",
    },
    {
      sentence: "They <b>went</b> to the beach yesterday.",
      why: "Go is irregular. Its past simple is <b>went</b>, not goed.",
    },
    {
      sentence: "I <b>didn't see</b> you at the party.",
      why: "To say no, we use <b>didn't</b> and the base form, see. The past is in didn't, so we do not say didn't saw.",
    },
    {
      sentence: "<b>Did</b> you <b>have</b> a good weekend?",
      why: "In a question, <b>did</b> comes before the subject, you. The verb is in the base form: have, not had.",
    },
  ],

  pitfall: {
    wrong: "Did you went to the party?",
    right: "Did you <b>go</b> to the party?",
    why: "After did and didn't, use the base form. The past is already in did, so the verb does not change: go, not went.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "We ___ to the beach last Sunday.",
      options: ["went", "goed", "was go", "go"],
      answer: 0,
      feedback:
        "Last Sunday is a finished time in the past, so we use the past simple. Go is irregular: its past simple is went, not goed. We do not put was before another verb in the past simple, and go is the present, not the past.",
    },
    {
      kind: "gap",
      stem: "My sister ___ English at university. (study, past simple)",
      answers: ["studied"],
      feedback:
        "Study ends in -y, and the letter before the y is d, so the y changes to -ied: My sister studied English at university. Studyed is not correct.",
    },
    {
      kind: "gap",
      stem: "I ___ the film. It was really boring. (like + not, past simple)",
      answers: ["didn't like", "did not like"],
      feedback:
        "To say no in the past simple, use didn't, or did not, and the base form: I didn't like the film. The past is already in didn't, so we do not say didn't liked.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["meet?", "your", "did", "Where", "parents"],
      answer: "Where did your parents meet?",
      feedback:
        "The question word comes first, then did, then the subject, then the base form of the verb: Where did your parents meet? The verb is meet, not met, because the past is already in did.",
    },
    {
      kind: "mistake",
      tokens: ["I", "buyed", "a", "new", "phone", "last", "week."],
      wrongIndex: 1,
      correction: "bought",
      feedback:
        "Buy is an irregular verb, so it does not use -ed. Its past simple is bought: I bought a new phone last week.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "Did you went out last night?",
        "Did you goed out last night?",
        "Do you went out last night?",
        "Did you go out last night?",
      ],
      answer: 3,
      feedback:
        "In a past simple question, use did and the base form: Did you go out last night? The past is in did, so the verb does not change: go, not went or goed. Do is for questions about now, not about last night.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the past simple of common regular and irregular verbs starts at A1, and at A2 learners use it with a wider range of verbs, in negatives with didn't and in questions with did. This site's A1 teaches only was and were, so this topic gives the full past simple at A2, the first A2 topic, because the past continuous and later A2 topics build on it. The -ed spelling rules match the -s and -ing rules learners met at A1. The past simple with the present perfect (I have seen, I saw) is left to B1.",

  sourceNotes:
    "New topic: english_grammar.txt has no section on regular and irregular verbs. # Tense, ## Past simple says only that it is for something that 'happed at specific in the past' (happened at a specific time in the past). That agrees with Swan, and this topic adds that we often say when, but we use it for any finished action. The note gives no forms. The -ed and -ied spelling, the doubled consonant, the sound of -ed, the irregular verbs, didn't and did with the base form, and be without did are authored from Swan, Practical English Usage. Did as a strong yes (I did go!) is correct English but not taught here, so gaps ask for the past simple form and do not accept did go.",
};
