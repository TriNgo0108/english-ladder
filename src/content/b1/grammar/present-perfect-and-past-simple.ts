import type { RuleTopic } from "../../schema";

export const presentPerfectAndPastSimple: RuleTopic = {
  slug: "present-perfect-and-past-simple",
  family: "past-simple",
  title: "Present perfect and past simple: I've seen it, I saw it yesterday",
  summary: "I've lost my keys, or I lost them yesterday? Make have or has + past participle, and use the past simple when you say a finished time.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 1,

  explanation: [
    "The <b>present perfect</b> joins the past to now. It has two parts: <b>have</b> or <b>has</b>, and then the <b>past participle</b> of the verb: I <b>have finished</b>. She <b>has gone</b> home. The past participle is the form of a verb that comes after have in this tense. For regular verbs it is the same as the past simple, with -ed: work → worked → worked. Many irregular verbs have a different past participle, and you need to learn it: go → went → gone, see → saw → seen, eat → ate → eaten, be → was → been, write → wrote → written. Some are the same as the past simple: have → had → had, buy → bought → bought, lose → lost → lost.",
    "When we speak, we usually use short forms: I<b>'ve</b>, you<b>'ve</b>, we<b>'ve</b>, they<b>'ve</b>, he<b>'s</b>, she<b>'s</b>, it<b>'s</b>. Remember: the short form and the long form mean the same. Here, he's means he has, not he is: He<b>'s</b> gone = He has gone. To say no, use <b>haven't</b> or <b>hasn't</b>: I <b>haven't seen</b> it. To ask a question, put have or has before the subject: <b>Have</b> you <b>seen</b> it? Short answers are Yes, I have. No, she hasn't.",
    "We use the present perfect in three main ways. The first is for <b>experience</b>: something that happened at some time in your life up to now, when we don't say when. I<b>'ve been</b> to Japan. <b>Have</b> you <b>ever eaten</b> sushi? I<b>'ve never seen</b> snow. Ever means at any time, and we usually use it in questions. Never means at no time.",
    "The second is for a past action with a <b>result now</b>: I<b>'ve lost</b> my keys, so I can't get into my flat. The losing is past, but the problem is now. This is often news: Look! It<b>'s stopped</b> raining.",
    "The third is for a time that is <b>not finished</b>: today, this week, this year, so far (up to now). I<b>'ve had</b> three coffees today. (Today isn't finished, so I may have more.) We<b>'ve sold</b> 50 tickets so far.",
    "When we say or ask about a <b>finished time</b>, we use the <b>past simple</b>, not the present perfect: yesterday, last week, in 2019, two days ago, when I was a child. I <b>saw</b> him yesterday, not I have seen him yesterday. Questions with when are about a finished time too, so they use the past simple: When <b>did</b> you <b>arrive</b>? not When have you arrived?",
    "We often start with the present perfect, for news or experience, and then give the details in the past simple, because now we know the time: I<b>'ve been</b> to Japan. I <b>went</b> there in 2019. Have you ever eaten sushi? Yes, I <b>had</b> it in Tokyo last year.",
    "When we talk about going to places, we can use <b>been</b> or <b>gone</b>, and the meaning is different. She<b>'s been</b> to Paris means she went and came back. She<b>'s gone</b> to Paris means she went and she is there now.",
    "When no time is given, the past simple is sometimes possible too, for example in a story. So look for the time words: a finished time needs the past simple, and ever, never, so far or today usually need the present perfect.",
  ].join("\n\n"),

  form: [
    "have / has + past participle",
    "I/you/we/they have ('ve) seen · he/she/it has ('s) seen",
    "I haven't seen · she hasn't seen",
    "Have you seen …? · Has she seen …?",
    "Yes, I have. · No, she hasn't.",
    "finished time (yesterday, last week, in 2019, two days ago) → past simple: I saw",
    "no time, ever, never, today, this week, so far → present perfect: I've seen",
  ].join("\n"),

  examples: [
    {
      sentence: "I<b>'ve been</b> to Italy, but I<b>'ve never been</b> to Spain.",
      why: "These are experiences in my life up to now, and there is no time, so we use the present perfect: <b>'ve been</b>.",
    },
    {
      sentence: "I<b>'ve lost</b> my keys, so I can't get into my flat.",
      why: "The losing happened in the past, but the result is now: I can't get in. So we use <b>have</b> and the past participle, lost.",
    },
    {
      sentence: "We<b>'ve had</b> a lot of rain this week.",
      why: "This week is not finished, so we use the present perfect, <b>'ve had</b>.",
    },
    {
      sentence: "I <b>saw</b> Tom at the shops yesterday.",
      why: "Yesterday is a finished time, so we use the past simple, <b>saw</b>, not have seen.",
    },
    {
      sentence: "<b>Have</b> you ever <b>tried</b> Thai food? Yes, I <b>tried</b> it last summer.",
      why: "The question is about experience, with ever, so it uses the present perfect. The answer gives a finished time, last summer, so it uses the past simple.",
    },
    {
      sentence: "Anna isn't here. She<b>'s gone</b> to the bank.",
      why: "She went and she is still there, so we use <b>gone</b>. She's been to the bank would mean that she went and came back.",
    },
  ],

  pitfall: {
    wrong: "I have seen him yesterday.",
    right: "I <b>saw</b> him yesterday.",
    why: "Yesterday is a finished time. With a finished time, use the <b>past simple</b>, not the present perfect.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I ___ Maria at the station yesterday.",
      options: ["have seen", "have saw", "saw", "was see"],
      answer: 2,
      feedback:
        "Yesterday is a finished time, so we use the past simple: I saw Maria at the station yesterday. Have seen is the present perfect, which we don't use with a finished time. Have saw is not a correct form, and was see is not a tense.",
    },
    {
      kind: "gap",
      stem: "I ___ my wallet on the bus last week. (lose)",
      answers: ["lost"],
      feedback:
        "Last week is a finished time, so we use the past simple: I lost my wallet on the bus last week. Lose is irregular: lose → lost. We don't say have lost with last week.",
    },
    {
      kind: "gap",
      stem: "Ana ___ to Australia three times, and she wants to go again. (be)",
      answers: ["has been", "'s been"],
      feedback:
        "This is Ana's experience in her life up to now, and there is no time, so we use the present perfect: Ana has been, or Ana's been, to Australia three times. Been means that she went and came back. Ana is she, so we use has, not have.",
    },
    {
      kind: "gap",
      stem: "I ___ three cups of coffee so far today. (have)",
      answers: ["have had", "'ve had"],
      feedback:
        "So far means up to now, and today is not finished, so we use the present perfect: I have had, or I've had, three cups of coffee so far today. The first have is the helping part of the tense, and had is the past participle of have.",
    },
    {
      kind: "choice",
      stem: "Which question is correct?",
      options: [
        "When did you arrive in London?",
        "When have you arrived in London?",
        "When you arrived in London?",
        "When have you arrive in London?",
      ],
      answer: 0,
      feedback:
        "A question with when asks about a finished time, so it uses the past simple, with did and the base form: When did you arrive in London? We don't use the present perfect with when. When you arrived has no did, so it is not a question.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["been", "ever", "Japan?", "you", "to", "Have"],
      answer: "Have you ever been to Japan?",
      feedback:
        "In a present perfect question, have comes before the subject, you. Ever goes after the subject and before the past participle, been: Have you ever been to Japan?",
    },
    {
      kind: "mistake",
      tokens: ["Have", "you", "ever", "saw", "this", "film?"],
      wrongIndex: 3,
      correction: "seen",
      feedback:
        "After have, we need the past participle. See is irregular: see → saw → seen. So the question is Have you ever seen this film? Saw is the past simple.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the present perfect first appears at A2 in simple statements with ever, never and just, and at B1 learners use it with a wider range of verbs and choose between it and the past simple, with unfinished time words like so far and this week. This site's A2 left the present perfect out and keeps the past simple at A2, so this topic teaches the form and the contrast together, as the first B1 topic, because since and for, already and yet, and the present perfect continuous all build on it. The three uses (experience, result now, unfinished time) follow Swan, Practical English Usage. The rule about a finished time is given without a hedge, because Swan gives it as a rule; the rule for no stated time is given with usually, because the past simple is possible without a time word.",

  sourceNotes:
    "english_grammar.txt, # Present perfect simple and continuous, ## Present perfect simple: the influence on the present, the focus on result, and the rule that we use the past simple with past time words (yesterday, two days ago, last week) agree with Swan. The note says the present perfect is for an action that is 'still happening or one that has finished'; the still-happening use belongs with since and for and with the present perfect continuous (orders 2 and 5), so here it appears only as unfinished time. The note says we use the present perfect when there is no time and with just, yet and already; Swan agrees for British English, but the past simple is also possible with no time word (in a story) and in American English with just, yet and already, so this topic says usually, and order 3 says so for American English. The form, the short forms, the past participle definition, ever and never, been and gone, and the pattern of present perfect news then past simple details are authored from Swan, Practical English Usage. The A2 plan lists past participle among the terms A2 defined, but no A2 topic defines it, so it is defined here for the first time.",
};
