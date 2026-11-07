import type { RuleTopic } from "../../schema";

export const reportedSpeech: RuleTopic = {
  slug: "reported-speech",
  family: "reported-speech",
  title: "Reported speech: She said she was tired",
  summary: "\"I'm tired.\" becomes She said she was tired. Move the tense back, change pronouns and time words, and keep statement order in reported questions.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 16,

  explanation: [
    "When we give someone's exact words, we use quotation marks: Anna said, \"I'm tired.\" This is called <b>direct speech</b>. When we tell another person what someone said, in our own words, we often use <b>reported speech</b>, with no quotation marks: Anna <b>said</b> (that) she <b>was</b> tired. After said, we can use that or leave it out. The meaning is the same.",
    "When the reporting verb is in the past, like said, told or asked, we usually move the tense one step back into the past. Present simple → past simple: \"I <b>like</b> it.\" → She said she <b>liked</b> it. Present continuous → past continuous: \"We<b>'re watching</b> a film.\" → They said they <b>were watching</b> a film. Present perfect → past perfect: \"I<b>'ve lost</b> my keys.\" → Tom said he <b>had lost</b> his keys. Will → would: \"I<b>'ll</b> help you.\" → She said she <b>would</b> help me. Can → could: \"I <b>can</b> swim.\" → He said he <b>could</b> swim. The past simple often moves back to the past perfect, but it can also stay the same: \"I <b>saw</b> him.\" → She said she <b>had seen</b> him, or She said she <b>saw</b> him.",
    "If what the person said is <b>still true</b> now, we don't have to move the tense back: \"I live in Rome.\" → He said he <b>lives</b> in Rome, or He said he <b>lived</b> in Rome. Both are correct. When the situation is finished, we move the tense back: Last night, Ana said she was hungry. If the reporting verb is in the present, like says, the tense doesn't change: She says she's tired.",
    "The people change too, so pronouns and words like my and your change to fit the new speaker: \"I like your dress,\" Tom said to me. → Tom said he liked <b>my</b> dress. Remember: a pronoun is a short word that we use in place of a noun.",
    "When we report at a different time or in a different place, words for time and place often change: now → <b>then</b>, today → <b>that day</b>, tomorrow → <b>the next day</b> or <b>the following day</b>, yesterday → <b>the day before</b> or <b>the previous day</b>, next week → <b>the following week</b>, here → <b>there</b>. If we report on the same day, tomorrow can stay tomorrow: This morning she said she would call me tomorrow.",
    "To report a question, we usually use <b>asked</b>. A reported question has the word order of a normal sentence: the subject comes before the verb, there is no do, does or did, and there is no question mark. For a question with a question word, keep the question word: \"Where <b>do you live</b>?\" → She asked me where <b>I lived</b>, not where did I live. For a yes/no question, use <b>if</b> or <b>whether</b>: \"<b>Are you</b> hungry?\" → He asked me <b>if I was</b> hungry.",
    "Say and tell are the most common reporting verbs. When we report what someone said, tell usually needs a person after it: He told <b>me</b> he was busy. The next topic shows the difference.",
  ].join("\n\n"),

  form: [
    "said / told / asked → usually one tense back",
    "present → past · present perfect → past perfect · will → would · can → could",
    "past simple → past perfect, or it stays the same",
    "still true now → moving the tense back is not needed: He said he lives / lived in Rome.",
    "tomorrow → the next day · yesterday → the day before · today → that day · here → there",
    "questions: asked + question word or if / whether + subject + verb · She asked me where I lived.",
  ].join("\n"),

  examples: [
    {
      sentence: "\"I'm tired.\" → Anna said (that) she <b>was</b> tired.",
      why: "Said is past, so am moves back to <b>was</b>, and I changes to she. That after said can be left out.",
    },
    {
      sentence: "\"We're watching a film.\" → They said they <b>were watching</b> a film.",
      why: "The present continuous moves back to the past continuous: <b>were watching</b>.",
    },
    {
      sentence: "\"I've lost my keys.\" → Tom said he <b>had lost</b> his keys.",
      why: "The present perfect moves back to the past perfect: <b>had</b> + past participle. My changes to his.",
    },
    {
      sentence: "\"I saw him yesterday.\" → She said she <b>had seen</b> him <b>the day before</b>.",
      why: "Yesterday changes to <b>the day before</b>, because we are reporting on a different day. She said she saw him the day before is also correct.",
    },
    {
      sentence: "\"Where do you work?\" → He asked me where I <b>worked</b>.",
      why: "In a reported question, the subject comes before the verb, and there is no do: where I worked, not where did I work.",
    },
    {
      sentence: "\"Do you like jazz?\" → She asked <b>if</b> I liked jazz.",
      why: "A yes/no question is reported with <b>if</b> (or whether). If I still like jazz, She asked if I like jazz is also correct.",
    },
  ],

  pitfall: {
    wrong: "She asked me where did I live.",
    right: "She asked me where <b>I lived</b>.",
    why: "A reported question is not a real question, so it uses the order of a normal sentence: subject, then verb, with no did.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "\"Are you hungry?\" Tom asked me. Which sentence reports this correctly?",
      options: [
        "He asked me that I was hungry.",
        "He asked to me if I was hungry.",
        "He asked me if I was hungry.",
        "He asked me if was I hungry.",
      ],
      answer: 2,
      feedback:
        "A yes/no question is reported with if, and then the order of a normal sentence: subject, then verb: He asked me if I was hungry. We ask someone, with no to, and we don't use that to report a question.",
    },
    {
      kind: "gap",
      stem: "Last month, Sam said, \"I'll finish the report tomorrow.\" → Sam said he ___ finish the report the next day. (Report will.)",
      answers: ["would", "'d"],
      feedback:
        "Sam spoke last month, and the next day is now in the past, so will moves back to would: Sam said he would finish the report the next day. He'd finish is also correct.",
    },
    {
      kind: "gap",
      stem: "Last summer, Tom told me, \"I've just come back from Spain.\" → Tom told me he ___ just come back from Spain.",
      answers: ["had", "'d"],
      feedback:
        "Tom spoke last summer, so his present perfect, I've just come back, moves back to the past perfect: he had just come back. He'd just come back is also correct. Has is not possible, because just was true last summer, not now.",
    },
    {
      kind: "gap",
      stem: "On Friday, Max said, \"I'll see you tomorrow.\" → Max said he would see me ___. (Write three words.)",
      answers: ["the next day", "the following day", "the day after"],
      feedback:
        "We are reporting on a later day, so tomorrow changes: Max said he would see me the next day. The following day and the day after are also correct.",
    },
    {
      kind: "wordbank",
      prompt: "\"Where do you live?\" she asked me. Put the words in order to report the question.",
      words: ["lived.", "me", "She", "I", "where", "asked"],
      answer: "She asked me where I lived.",
      feedback:
        "The question word, where, stays, but then the order is subject, then verb, with no do and no question mark: She asked me where I lived.",
    },
    {
      kind: "mistake",
      tokens: ["At", "the", "party", "last", "night,", "Tom", "asked", "me", "if", "I", "am", "having", "fun."],
      wrongIndex: 10,
      correction: "was",
      feedback:
        "The party is finished, so the tense moves back: Tom asked me if I was having fun. Am having is only possible when the situation is still true now.",
    },
  ],

  levelRationale:
    "English Grammar Profile: reported statements with said and told and the tense moving back, and reported questions with asked, if and a question word, are B1 points. Reported commands and requests (told me to wait) are a B2 point on this site, as the family table says, so they are left out. Swan says the tense does not have to move back when the fact is still true, and that the past simple often stays the same, so the explanation says usually, and every gap is set in a finished past (last month, last summer, the party last night) where moving back is the only correct choice. It builds on the past perfect (order 6). Say and tell come next, in order 17.",

  sourceNotes:
    "english_grammar.txt, # Reported speech: the change in tense, word order and pronouns, will → would, and say and tell as the most common reporting verbs agree with Swan. Its line should → should is correct but not taught here. Its reporting verbs with -ing or to (apologised for being late, suggested taking, promised to call, advised him to work harder) and the list mention, report, complain, state, claim are above B1 and left to B2. The note's talking an earlier train should be taking an earlier train. The tense changes, still-true facts, time and place words, and reported questions are authored from Swan, Practical English Usage.",
};
