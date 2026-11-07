import type { RuleTopic } from "../../schema";

export const inversionAfterNegativeAdverbials: RuleTopic = {
  slug: "inversion-after-negative-adverbials",
  family: "inversion",
  title: "Inversion after negative adverbials: Never have I…, Not only did she…",
  summary: "Never have I seen such a crowd. Not only did she win, but she broke the record. Start with a negative word and put the auxiliary first, in formal English.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 20,

  explanation: [
    "Usually the subject comes before the verb: I have never seen such a beautiful view. In formal English, especially in writing and in speeches, we can put a negative word or phrase at the start, for emphasis: <b>Never have I</b> seen such a beautiful view. Remember: emphasis means making one part of what you say stand out, so that the listener notices it. Remember: the subject is the person or thing that the sentence is about.",
    "A word or phrase like never, which has a negative or limiting meaning (not, almost not, or only), is called a <b>negative adverbial</b>: never, rarely, seldom, not only, hardly, no sooner, only then. When a negative adverbial starts the sentence, we use <b>inversion</b>: we put the auxiliary before the subject, as in a question. Have I seen? → Never <b>have I</b> seen. Remember: an auxiliary is a small verb that goes with another verb, like be in She is working, have in They have finished, do in Do you like it?, and can or will.",
    "Use the auxiliary from the sentence: I have never been so tired. → Never <b>have I</b> been so tired. She will never forget it. → Never <b>will she</b> forget it. With be as the main verb, put be first: It is rarely this hot. → Rarely <b>is it</b> this hot. When there is no auxiliary, use <b>do</b>, <b>does</b> or <b>did</b>, as in a question, and the base form: She rarely complains. → Rarely <b>does she</b> complain. We seldom went out. → Seldom <b>did we</b> go out. Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
    "<b>Not only</b> … <b>but</b> … adds a second, surprising fact. Only the first part has inversion: <b>Not only did she</b> write the music, <b>but</b> she <b>also</b> sang the songs. Not only is the city beautiful, but it is also cheap.",
    "<b>Hardly</b> … <b>when</b> and <b>No sooner</b> … <b>than</b> say that one thing happened just after another. We usually use them with the past perfect: <b>Hardly had</b> I sat down <b>when</b> the phone rang. <b>No sooner had</b> we arrived <b>than</b> it started to rain. Use when after hardly, and than after no sooner. Here, Hardly had I sat down means I had only just sat down. (At A2, I hardly slept meant I almost did not sleep.)",
    "<b>Only then</b>, <b>only after</b> … and <b>only when</b> … also take inversion, in the main clause: <b>Only then did I</b> understand the problem. Only when she called <b>did I</b> realise how late it was. When only goes with the subject, there is no inversion: Only Tom knew the answer.",
    "Inversion is formal. Remember: register means how formal or informal your words are. In everyday conversation, we usually say the same thing in the normal order: I've never seen such a beautiful view. She rarely complains. Both orders are correct; the normal order is much more common. When the negative word comes later in the sentence, use the normal order, with no inversion: I have never seen such a view. The classic mistake is to start with never and forget the inversion: Never I have seen …",
  ].join("\n\n"),

  form: [
    "negative adverbial + auxiliary + subject + verb: Never have I seen such a view.",
    "no auxiliary → do / does / did + base form: Rarely does she complain. · Seldom did we go out.",
    "Not only + inversion …, but (also) + normal order: Not only did she write it, but she also sang it.",
    "Hardly had … when … · No sooner had … than … (usually with the past perfect)",
    "Only then / only when … + inversion in the main clause: Only then did I understand.",
    "formal · in conversation, the normal order is more common · not: Never I have seen",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>Never have I</b> felt so proud of my team.",
      why: "Never starts the sentence, so the auxiliary, have, comes before the subject, I.",
    },
    {
      sentence: "<b>Rarely does</b> it snow in this part of the country.",
      why: "There is no auxiliary in It rarely snows, so we use <b>does</b> and the base form, snow.",
    },
    {
      sentence: "<b>Not only did</b> he forget my birthday, <b>but</b> he also forgot our anniversary.",
      why: "Only the first part has inversion: did he forget. The part after but has the normal order.",
    },
    {
      sentence: "<b>No sooner had</b> the film started <b>than</b> the lights went out.",
      why: "<b>No sooner</b> goes with <b>than</b>, and the first action uses the past perfect, with inversion: had the film started.",
    },
    {
      sentence: "<b>Only then did</b> we realise that the door was open.",
      why: "<b>Only then</b> starts the sentence, so we use inversion with did and the base form: did we realise.",
    },
  ],

  pitfall: {
    wrong: "Never I have seen so many people in one place.",
    right: "Never <b>have I</b> seen so many people in one place.",
    why: "After a negative adverbial at the start, the auxiliary comes before the subject: have I, not I have.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "Rarely I have eaten such good food.",
        "Rarely have I eaten such good food.",
        "Rarely I ate such good food.",
        "Rarely ate I such good food.",
      ],
      answer: 1,
      feedback:
        "Rarely starts the sentence, so we use inversion: the auxiliary, have, before the subject, I. Rarely have I eaten such good food. We don't put a main verb like ate before the subject; with no auxiliary, we would use did: Rarely did I eat such good food.",
    },
    {
      kind: "choice",
      stem: "Not only ___ the exam, but she also got the highest mark in her class.",
      options: ["she passed", "she did pass", "passed she", "did she pass"],
      answer: 3,
      feedback:
        "After not only at the start, we use inversion. There is no auxiliary in she passed, so we use did and the base form: Not only did she pass the exam. The part after but has the normal order.",
    },
    {
      kind: "gap",
      stem: "Hardly ___ I closed my eyes when the baby started crying. (Write one word.)",
      answers: ["had"],
      feedback:
        "Hardly … when usually uses the past perfect, with inversion: Hardly had I closed my eyes when the baby started crying. Closed is the past participle here, after had.",
    },
    {
      kind: "gap",
      stem: "Only then ___ I realise how much I had missed her. (Write the auxiliary that a question in the past simple uses.)",
      answers: ["did"],
      feedback:
        "Only then at the start needs inversion. There is no other auxiliary, and realise is the base form, so we use did: Only then did I realise how much I had missed her.",
    },
    {
      kind: "gap",
      stem: "No sooner had we sat down ___ the waiter brought the bill. (Write one word.)",
      answers: ["than"],
      feedback:
        "No sooner goes with than: No sooner had we sat down than the waiter brought the bill. Hardly goes with when.",
    },
    {
      kind: "mistake",
      tokens: ["Not", "only", "did", "she", "wrote", "the", "music,", "but", "she", "also", "sang", "the", "songs."],
      wrongIndex: 4,
      correction: "write",
      feedback:
        "After did, we use the base form: Not only did she write the music. The past is already in did, so the verb is write, not wrote.",
    },
    {
      kind: "mistake",
      tokens: ["Never", "have", "I", "saw", "such", "a", "mess", "in", "my", "life."],
      wrongIndex: 3,
      correction: "seen",
      feedback:
        "After have, we use the past participle: Never have I seen such a mess in my life. See is irregular: see → saw → seen.",
    },
  ],

  levelRationale:
    "The spec (section 8) places inversion after negative adverbials at B2, as a new point and the first topic of the inversion family, which continues at C1 with advanced inversion and fronting. The English Grammar Profile places inversion after negative adverbials across B2 and C1, so this topic keeps to the common ones listed in the task and leaves under no circumstances, little and at no time to C1. The words negative adverbial and inversion are defined here; emphasis reuses order 19's wording, and subject, auxiliary, base form and register reuse their earlier wording. Following Review Focus 4, there is no wordbank: the same chips always also form the normal order, and the grader accepts one order. The classic missing-inversion error (Never I have seen) needs two tokens to fix, so it is the pitfall and a choice distractor, and the two mistake items use one-token errors after the inversion. The only-then gap names the auxiliary in its cue, because could and would would also fit.",

  sourceNotes:
    "english_grammar.txt has no section on inversion (a new point in spec section 8), so this topic is authored from Swan, Practical English Usage: inversion with the auxiliary after negative and limiting adverbials at the start, do / does / did when there is no auxiliary, not only … but, hardly … when and no sooner … than with the past perfect, only then and only when, no inversion when only goes with the subject, and the formal register. The A2 adverbs-of-manner topic teaches hardly as almost not, and this topic says that hardly … when means only just.",
};
