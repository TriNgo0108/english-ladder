import type { RuleTopic } from "../../schema";

export const stativeVerbs: RuleTopic = {
  slug: "stative-verbs",
  title: "Stative verbs: I know, not I'm knowing",
  summary: "Why do we say I know the answer, not I'm knowing it? Learn which verbs are not usually continuous, and how think and have change with meaning.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 4,

  explanation: [
    "Most verbs are for actions, like run, eat or write. Actions happen, and they can be in progress, so they can be in a continuous form: I<b>'m writing</b> an email. But some verbs are for <b>states</b>. A state is not an action. It is how something is: what we know, think, feel, want or have. We call these verbs <b>state verbs</b>, or stative verbs.",
    "State verbs are <b>not usually</b> in a continuous form, even when we talk about now. Use the simple form: I <b>know</b> the answer, not I'm knowing the answer. This is true in the past too: I <b>knew</b> her, not I was knowing her.",
    "Here are some common state verbs. Knowing and thinking: <b>know</b>, <b>believe</b>, <b>understand</b>. Liking and wanting: <b>like</b>, <b>love</b>, <b>hate</b>, <b>want</b>, <b>need</b>, <b>prefer</b>. Owning: <b>belong</b> (to), <b>own</b>. Do you <b>understand</b> me? This bag <b>belongs</b> to my sister. We <b>need</b> some bread.",
    "Some verbs can be a state or an action, and the meaning is different. <b>Think</b> is a state when it means have an opinion: I <b>think</b> it's a good idea. (This is my opinion.) It is an action when it means use your mind, often with about: I<b>'m thinking</b> about my holiday. (This is in my head now.)",
    "<b>Have</b> is a state when it means own, or for family and illness: I <b>have</b> a car. She <b>has</b> two brothers. He <b>has</b> a cold. It is an action in phrases like have breakfast, have a shower, have a party and have a good time: We<b>'re having</b> dinner. Can I call you back? They<b>'re having</b> a great time in Spain.",
    "A few other verbs also change like this, but think and have are the most common. If you are not sure, ask: is it an action that is happening, or is it how something is?",
    "You may hear people say I'm loving it, especially in adverts and when people speak, but in careful English, like and love usually use the simple form: I <b>love</b> this song.",
  ].join("\n\n"),

  form: [
    "state verbs: know · believe · understand · like · love · hate · want · need · prefer · belong · own",
    "simple form: I know · she wants · it belongs to me",
    "not: I'm knowing · she's wanting · it's belonging to me",
    "think (opinion): I think it's good. · think (use your mind): I'm thinking about it.",
    "have (own, family, illness): I have a car. · have (action): I'm having lunch.",
  ].join("\n"),

  examples: [
    {
      sentence: "I <b>don't understand</b> this question. Can you help me?",
      why: "Understand is a state verb, so we use the simple form, <b>don't understand</b>, even though we are talking about now.",
    },
    {
      sentence: "This phone <b>belongs</b> to Sam.",
      why: "Belong is a state, not an action, so we say <b>belongs</b>, not is belonging.",
    },
    {
      sentence: "I <b>think</b> you're right.",
      why: "Here think means have an opinion, which is a state, so we use the simple form, <b>think</b>.",
    },
    {
      sentence: "Be quiet, please. I<b>'m thinking</b>.",
      why: "Here think means use your mind, an action that is in progress now, so we use the continuous form, <b>'m thinking</b>.",
    },
    {
      sentence: "We <b>have</b> a big garden, and today we<b>'re having</b> a barbecue in it.",
      why: "The first <b>have</b> means own, a state, so it is simple. Have a barbecue is an action happening today, so it is continuous: <b>'re having</b>.",
    },
  ],

  pitfall: {
    wrong: "I'm wanting a new phone.",
    right: "I <b>want</b> a new phone.",
    why: "Want is a state verb. State verbs are not usually in a continuous form, so use the <b>simple</b> form.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "This bag isn't mine. It ___ to my sister.",
      options: ["belongs", "is belonging", "belong", "belonging"],
      answer: 0,
      feedback:
        "Belong is a state verb, so we use the simple form, and with it the verb needs -s: It belongs to my sister. We don't say is belonging. Belong without -s is not correct with it, and belonging alone is not a verb form for a sentence.",
    },
    {
      kind: "choice",
      stem: "Be quiet, please. I ___ about my answer.",
      options: ["think", "thinks", "am thinking", "am think"],
      answer: 2,
      feedback:
        "Here think means use your mind, an action in progress now, so we use the present continuous: I am thinking about my answer. Think about is often an action like this. I think is for an opinion, thinks is for he, she or it, and am think is not a correct form.",
    },
    {
      kind: "gap",
      stem: "Can I call you back? We ___ dinner right now. (have)",
      answers: ["are having", "'re having"],
      feedback:
        "Have dinner is an action, not a state, and it is happening right now, so we use the present continuous: We are having, or We're having, dinner right now.",
    },
    {
      kind: "gap",
      stem: "Five pounds for a coffee? I ___ that's too expensive, so I'm not buying it. (think)",
      answers: ["think"],
      feedback:
        "Here think means have an opinion, which is a state, so we use the simple form: I think that's too expensive. We don't say I'm thinking for an opinion.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "I'm knowing the answer.",
        "This book is belonging to me.",
        "I'm having two sisters.",
        "I'm having a shower.",
      ],
      answer: 3,
      feedback:
        "Have a shower is an action, so it can be continuous: I'm having a shower. Know and belong are state verbs, so we say I know the answer and This book belongs to me. Have for family is a state too, so we say I have two sisters.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to ask for an opinion.",
      words: ["think", "of", "my", "you", "What", "new", "haircut?", "do"],
      answer: "What do you think of my new haircut?",
      feedback:
        "We are asking for an opinion, so think is a state here and we use the simple form, with do: What do you think of my new haircut? We don't say What are you thinking of my new haircut?",
    },
  ],

  levelRationale:
    "The English Grammar Profile has no single entry for state verbs; its A1 to B1 points for the continuous forms show know, like, want and need in the simple form, and the spec (section 8) places stative verbs at B1. Swan, Practical English Usage (non-progressive verbs), settles the list and the two meanings of think and have. This site's A1 present continuous and A2 past continuous already say that know, like, love and want are not usually continuous; this topic names the group, defines state verb, and adds believe, understand, need, prefer, belong and own. It comes before the present perfect continuous (order 5), which links back to it. Not usually is used throughout, because Swan records continuous uses of some of these verbs in informal English (I'm loving it) and for changes. The full list of verbs with two meanings (see, taste, smell, be) is left to a later level.",

  sourceNotes:
    "english_grammar.txt, # Stative verbs: the definition, that these verbs are not normally used in a continuous form because they describe states, not actions, agrees with Swan; this topic says not usually, as the note says normally. The note's groups are senses (taste, sound), feelings (love, want) and the mind (believe, know). Its sense verbs are left out, because taste and smell also have action meanings (I'm tasting the soup) and are above B1. The two meanings of think and have, belong, own, understand, need and prefer, and the note about I'm loving it are authored from Swan, Practical English Usage.",
};
