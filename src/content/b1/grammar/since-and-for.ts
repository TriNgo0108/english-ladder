import type { RuleTopic } from "../../schema";

export const sinceAndFor: RuleTopic = {
  slug: "since-and-for",
  title: "Since and for: I've lived here since 2015, for ten years",
  summary: "I've lived here for ten years, or since 2015? Say how long something has been true with the present perfect, for a length of time and since a start.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 2,

  explanation: [
    "We use the present perfect with <b>since</b> and <b>for</b> to say how long something has been true. It started in the past and it is still true now: I<b>'ve lived</b> here <b>for</b> ten years. I<b>'ve lived</b> here <b>since</b> 2015. (I came in 2015, and I still live here.)",
    "Use <b>for</b> with a length of time, the answer to How long?: for ten minutes, for three days, for two weeks, for six months, for ten years, for a long time, for ages.",
    "Use <b>since</b> with the point in time when it started, the answer to Since when?: since nine o'clock, since Monday, since 3 May, since 2015, since last summer, since Christmas.",
    "Since can also come before a whole part of a sentence with its own subject and verb, in the past simple. This part says when it started: I<b>'ve known</b> Ana <b>since</b> we <b>were</b> at school. She<b>'s been</b> happier <b>since</b> she <b>moved</b> to the city. Remember: the subject is the person or thing that the sentence is about.",
    "To ask about the length of time, use <b>How long</b> and the present perfect: <b>How long have</b> you <b>lived</b> here? <b>How long has</b> she <b>worked</b> at the bank?",
    "Don't use the present simple or present continuous for this meaning. I<b>'ve lived</b> here since 2015, not I live here since 2015 or I'm living here since 2015. I<b>'ve known</b> him for years, not I know him for years.",
    "For can also go with the past simple, for a time that is finished: I <b>lived</b> in Rome <b>for</b> two years. (I don't live there now.) We usually use since with the present perfect.",
    "Don't mix up for and <b>ago</b>. Ago goes after a length of time and says when something happened. We use it with the past simple: I met my husband ten years <b>ago</b>. For says how long: I<b>'ve known</b> my husband <b>for</b> ten years.",
  ].join("\n\n"),

  form: [
    "present perfect + for + a length of time: for ten minutes · for two years · for a long time",
    "present perfect + since + a start point: since Monday · since 2015 · since last summer",
    "present perfect + since + past simple: since we were at school",
    "How long have you …? · How long has she …?",
    "past simple + ago: I met him ten years ago.",
    "not: I live here since 2015 · not: since three years",
  ].join("\n"),

  examples: [
    {
      sentence: "We<b>'ve been</b> married <b>for</b> twenty years.",
      why: "Twenty years is a length of time, so we use <b>for</b>. We are still married, so we use the present perfect.",
    },
    {
      sentence: "I<b>'ve had</b> this phone <b>since</b> January.",
      why: "January is the point when it started, so we use <b>since</b>, not for.",
    },
    {
      sentence: "She<b>'s worked</b> here <b>since</b> she <b>left</b> university.",
      why: "<b>Since</b> comes before a part with its own subject and verb, she left. That part is in the past simple, because it says when it started.",
    },
    {
      sentence: "<b>How long have</b> you <b>known</b> Tom?",
      why: "We ask about the length of time with <b>How long</b> and the present perfect, not How long do you know Tom?",
    },
    {
      sentence: "I <b>lived</b> in Rome <b>for</b> two years, and then I moved to Paris.",
      why: "I don't live in Rome now, so we use the past simple, <b>lived</b>, with for.",
    },
  ],

  pitfall: {
    wrong: "I live here since 2015.",
    right: "I<b>'ve lived</b> here since 2015.",
    why: "It started in 2015 and it is still true. With since or for for this meaning, use the <b>present perfect</b>, not the present simple.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I've lived in this flat ___ three years.",
      options: ["since", "from", "during", "for"],
      answer: 3,
      feedback:
        "Three years is a length of time, so we use for: I've lived in this flat for three years. Since goes with a start point, like since 2021. We don't say from three years or during three years here.",
    },
    {
      kind: "gap",
      stem: "She's been a teacher ___ 2020. (since or for)",
      answers: ["since", "ever since"],
      feedback:
        "2020 is the point when it started, so we use since: She's been a teacher since 2020. For goes with a length of time, like for five years.",
    },
    {
      kind: "gap",
      stem: "We ___ each other for ten years, and we're still good friends. (know)",
      answers: ["have known", "'ve known"],
      feedback:
        "We met ten years ago and we still know each other, so we use the present perfect: We have known, or We've known, each other for ten years. We don't say We know each other for ten years. Remember: know is not usually used in a continuous form, so have been knowing is not correct.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["lived", "How", "you", "here?", "long", "have"],
      answer: "How long have you lived here?",
      feedback:
        "How long comes first, then have, then the subject, you, then the past participle, lived: How long have you lived here?",
    },
    {
      kind: "mistake",
      tokens: ["We've", "been", "friends", "since", "a", "long", "time."],
      wrongIndex: 3,
      correction: "for",
      feedback:
        "A long time is a length of time, not a start point, so we use for: We've been friends for a long time.",
    },
    {
      kind: "choice",
      stem: "I met my husband ten years ___.",
      options: ["for", "ago", "since", "from"],
      answer: 1,
      feedback:
        "Met is the past simple, and the sentence says when it happened, so we use ago after the length of time: I met my husband ten years ago. For and since say how long, with the present perfect: I've known him for ten years.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the present perfect with for and since and a time phrase appears from A2 and is a core B1 point, and since before a past simple part of the sentence (since we were at school) is B1. The spec (section 8) places since and for at B1. This topic comes after the present perfect and past simple (order 1), because it uses the present perfect form taught there. The rule that since usually goes with the present perfect is given with usually, because Swan allows since with other tenses in some sentences (It's ten years since we met), which are above B1 and left out.",

  sourceNotes:
    "english_grammar.txt, # Since and for: for with a period of time and since with a point in time agree with Swan. The examples for fifteen years, for three months, since yesterday, since 1970 and since last summer agree with Swan; this topic uses its own examples. The note's line 'for latest ten number' is not clear and is not used. The note does not give the tense; the present perfect with both words, How long questions, since before a past simple part, for with the past simple for a finished time, the mistake I live here since 2015, and the difference between for and ago are authored from Swan, Practical English Usage. For with other meanings, such as a present for Christmas, is a different use of the word and is kept out of the quiz.",
};
