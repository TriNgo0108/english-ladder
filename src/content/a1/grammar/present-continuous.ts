import type { RuleTopic } from "../../schema";

export const presentContinuous: RuleTopic = {
  slug: "present-continuous",
  title: "Present continuous: I am working",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 9,

  explanation: [
    "We use the present continuous for something that is happening now, at the moment when we speak: I am reading. She is cooking dinner. Look! It is raining.",
    "The present continuous has two parts: <b>am</b>, <b>is</b> or <b>are</b>, and then the verb with <b>-ing</b>. Remember: the base form is the verb as you see it in a dictionary, with nothing added. Add -ing to the base form: work → working. Use am, is and are as you do in the topic on be: I am working, she is working, they are working.",
    "We often use short forms: I'm working, he's working, we're working. Remember: the sign ' shows that letters are not there.",
    "We need both parts. Do not leave out am, is or are: I am working, not I working. And do not leave out -ing: I am working, not I am work.",
    "Most verbs just add -ing: read → reading, play → playing. When a verb ends in an e that we do not say, drop the e: make → making, write → writing, come → coming.",
    "Some short verbs have only one vowel, and they end in that vowel and then one consonant. Remember: a vowel is one of the letters a, e, i, o and u. A consonant is any other letter, like b, t or m. For these verbs, write the last letter two times: sit → sitting, run → running, swim → swimming, stop → stopping. We do not do this with w, x or y at the end: play → playing, fix → fixing.",
    "To say no, put <b>not</b> after am, is or are: I'm not working. She isn't working. They aren't working.",
    "To ask a question, put am, is or are before the subject: She is working. → <b>Is</b> she working? <b>Are</b> you listening? In short answers, use am, is or are with no -ing verb: Yes, I am. No, she isn't. In yes answers, do not use a short form at the end: Yes, I am, not Yes, I'm.",
    "Now, or again and again? Use the present continuous for now: I'm working now. Use the present simple for things that are true for a long time, or that we do again and again: I work every day. Words like now and at the moment often go with the present continuous. Words like every day and on Mondays often go with the present simple.",
    "Some verbs, like know, like, love and want, are not usually in the present continuous, even when we talk about now: I want a coffee now, not I am wanting a coffee. I know the answer, not I am knowing the answer.",
  ].join("\n\n"),

  form: [
    "I am ('m) working · you/we/they are ('re) working · he/she/it is ('s) working",
    "I'm not working · you/we/they aren't working · he/she/it isn't working",
    "Am I …ing? · Are you/we/they …ing? · Is he/she/it …ing?",
    "work → working · make → making · sit → sitting · but play → playing",
  ].join("\n"),

  examples: [
    {
      sentence: "I<b>'m reading</b> a book.",
      why: "With I, we use <b>am</b>, here in its short form <b>'m</b>. Then comes the verb with -ing: reading.",
    },
    {
      sentence: "My sister <b>is cooking</b> dinner now.",
      why: "We use <b>is</b> because the subject, my sister, is one person (she). Cook adds <b>-ing</b>: cooking.",
    },
    {
      sentence: "The children <b>are playing</b> in the garden.",
      why: "We use <b>are</b> because the children are two or more people (they). Play ends in -y, and it just adds -ing: playing.",
    },
    {
      sentence: "She<b>'s writing</b> an email.",
      why: "Write ends in an e that we do not say, so we drop the e before <b>-ing</b>: writing, not writeing.",
    },
    {
      sentence: "We<b>'re sitting</b> in the park.",
      why: "Sit is a short verb that ends in one vowel and one consonant, so the t is written two times: <b>sitting</b>.",
    },
    {
      sentence: "Tom <b>isn't sleeping</b>. He<b>'s watching</b> TV.",
      why: "We put not after is to say no: <b>isn't sleeping</b>. Both verbs are in the present continuous because it is all happening now.",
    },
    {
      sentence: "<b>Are</b> you <b>listening</b>?",
      why: "In a question, <b>are</b> comes before the subject, you. The -ing verb comes after the subject.",
    },
    {
      sentence: "I <b>work</b> in an office, but today I<b>'m working</b> at home.",
      why: "<b>Work</b> is the present simple, because it is true every day. <b>I'm working</b> is the present continuous, because it is only about today.",
    },
  ],

  pitfall: {
    wrong: "I working now.",
    right: "I <b>am working</b> now.",
    why: "The present continuous needs two parts: <b>am</b>, <b>is</b> or <b>are</b>, and the verb with <b>-ing</b>. Do not leave out am: I am working, or I'm working.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Where's Anna? She ___ in the garden.",
      options: ["working", "is work", "works", "is working"],
      answer: 3,
      feedback:
        "We are talking about now, so we use the present continuous, with two parts: is working. We cannot leave out is (She working), and we cannot leave out -ing (She is work). She works is the present simple. It is for every day, not for now.",
    },
    {
      kind: "gap",
      stem: "Look at the boys! They ___ in the sea. (swim)",
      answers: ["are swimming", "'re swimming"],
      feedback:
        "Look! shows that it is happening now, so we use the present continuous. The subject is they, so we use are. Swim is a short verb that ends in one vowel and one consonant, so the m is written two times: They are swimming, or They're swimming.",
    },
    {
      kind: "gap",
      stem: "Tom usually drinks tea. But look, now he ___ coffee. (drink)",
      answers: ["is drinking", "'s drinking"],
      feedback:
        "Drinks tea is the present simple, because it is what Tom does again and again. Now tells us to use the present continuous for the coffee: he is drinking, or he's drinking. The subject is he, so we use is.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["watching", "Is", "TV?", "she"],
      answer: "Is she watching TV?",
      feedback:
        "In a question, is comes before the subject, and the -ing verb comes after it: Is she watching TV? When it is not a question, the subject comes first: She is watching TV.",
    },
    {
      kind: "mistake",
      tokens: ["She", "is", "writeing", "a", "letter", "now."],
      wrongIndex: 2,
      correction: "writing",
      feedback:
        "Write ends in an e that we do not say, so we drop the e before -ing: writing, not writeing. She is writing a letter now.",
    },
    {
      kind: "choice",
      stem: "Are you listening to me? Yes, ___",
      options: ["I am.", "I'm.", "I do.", "I listening."],
      answer: 0,
      feedback:
        "The question starts with are, so the short answer uses am: Yes, I am. We cannot use the short form 'm at the end, so Yes, I'm is wrong. Do is for questions with do, like Do you work here?",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: the present continuous in statements, negatives and questions, for things happening now, is an A1 point. The EGP places the present continuous for future plans (I'm meeting Sam tomorrow) at A2, so it is left out here. This topic comes after the present simple, so the two can be shown side by side: now, or again and again.",

  sourceNotes:
    "english_grammar.txt, # Tense, ## Present continuous: 'actions happening now around now' agrees with Swan. This topic teaches now. Around now (things that are true for a short time, like this week) appears only in the example with today. The note's second line, the present continuous for plans and arrangements in the future, is correct (Swan) but A2 (EGP), so it is left out. # Stative verbs says these verbs are not normally used in a continuous form, which agrees with Swan. It is given here in A1-simple words with know, like, love and want only; its sense verbs (taste, sound) and believe are left out. Forms, -ing spelling, short answers and the now / again-and-again contrast are authored from Swan, Practical English Usage. The doubling rule is kept to short verbs with one vowel (sit, run, swim, stop); longer verbs that also double (begin → beginning) and -ie → -ying (lie → lying) are left to a later level.",
};
