import type { RuleTopic } from "../../schema";

export const beUsedToAndGetUsedTo: RuleTopic = {
  slug: "be-used-to-and-get-used-to",
  family: "used-to",
  title: "Be used to and get used to: I'm used to getting up early",
  summary: "I'm used to the noise now, but it took me months to get used to it. Say what is normal for you, and what is becoming normal, with a noun or -ing.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 12,

  explanation: [
    "If you <b>are used to</b> something, it is <b>normal</b> for you. It is not new or strange, because you have done it or had it many times: I've lived in London for years, so I<b>'m used to</b> the traffic. She<b>'s used to</b> working at night. She's a nurse.",
    "If you <b>get used to</b> something, it <b>becomes</b> normal for you, little by little: At first, my new job was hard, but I<b>'m getting used to</b> it. It took me a month to <b>get used to</b> driving on the left.",
    "In these phrases, <b>to</b> is a preposition, not part of an infinitive. Remember: a preposition is a small word, like in, on or under, that goes before a noun. So after be used to and get used to, we use a <b>noun</b>, a pronoun like it or them, or the <b>-ing</b> form of a verb: I'm used to <b>the cold</b>. I'm used to <b>it</b>. I'm used to <b>getting up</b> early. Not I'm used to get up early. Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund.",
    "Be and get change for the tense and the subject, but used stays the same: I <b>wasn't used to</b> the food at first. You<b>'ll</b> soon <b>get used to</b> it. We<b>'ve got used to</b> the noise. In American English, people say we've <b>gotten</b> used to it. To say no, use not with be: I<b>'m not used to</b> it. To ask a question, put be before the subject: <b>Are</b> you <b>used to</b> the weather here?",
    "Don't confuse this with <b>used to</b> and the base form (A2), for a past habit that is not true now: I <b>used to live</b> in a village. (I don't now.) I<b>'m used to living</b> in a city. (It is normal for me now.)",
    "When we speak, we don't hear the d in used to: it sounds like use to. But we always write <b>used</b>.",
  ].join("\n\n"),

  form: [
    "be used to + noun / it / -ing → it is normal for me: I'm used to the noise. I'm used to working late.",
    "get used to + noun / it / -ing → it is becoming normal: I'm getting used to my new job.",
    "not: I'm used to work late (to is a preposition here)",
    "We've got used to it. · US: We've gotten used to it.",
    "compare A2: used to + base form → a past habit: I used to live in a village.",
  ].join("\n"),

  examples: [
    {
      sentence: "She's a nurse, so she<b>'s used to working</b> at night.",
      why: "Working at night is normal for her. After <b>be used to</b>, we use the -ing form: working.",
    },
    {
      sentence: "I've lived here for years, so I<b>'m used to</b> the traffic.",
      why: "After <b>be used to</b>, we can use a noun: the traffic.",
    },
    {
      sentence: "My new job was hard at first, but I<b>'m getting used to</b> it.",
      why: "It is slowly becoming normal, so we use <b>get used to</b>. Here get is in the present continuous.",
    },
    {
      sentence: "It took me a month to <b>get used to driving</b> on the left.",
      why: "Driving on the left became normal after a month. After <b>get used to</b>, we use the -ing form.",
    },
    {
      sentence: "I <b>used to live</b> in a village, but now I<b>'m used to living</b> in a big city.",
      why: "<b>Used to live</b> is a past habit (A2). <b>'m used to living</b> means that city life is normal for me now.",
    },
  ],

  pitfall: {
    wrong: "I'm used to get up at six.",
    right: "I'm used to <b>getting</b> up at six.",
    why: "In be used to, to is a preposition, so it goes with the <b>-ing</b> form, not the base form.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I've lived in Scotland for years, so I'm used to ___ in the rain.",
      options: ["walk", "walking", "walked", "to walk"],
      answer: 1,
      feedback:
        "After be used to, we use the -ing form, because to is a preposition here: I'm used to walking in the rain. We don't use the base form or the past simple after it.",
    },
    {
      kind: "choice",
      stem: "Which sentence means that you drove to work in the past, but you don't now?",
      options: [
        "I'm used to driving to work.",
        "I'm getting used to driving to work.",
        "I got used to driving to work.",
        "I used to drive to work.",
      ],
      answer: 3,
      feedback:
        "Used to and the base form is for a past habit that is not true now: I used to drive to work. I'm used to driving and I'm getting used to driving are about now, and I got used to driving says that it became normal for me.",
    },
    {
      kind: "gap",
      stem: "I moved here from Spain last month, and I ___ used to the cold yet, so I always wear two jumpers. (be + not)",
      answers: ["'m not", "am not"],
      feedback:
        "The cold is not normal for me now, so we use the present simple of be with not: I'm not used to the cold yet. I am not is also correct.",
    },
    {
      kind: "gap",
      stem: "Don't worry about the new software. You'll soon get used to ___ it. (use)",
      answers: ["using"],
      feedback:
        "After get used to, we use the -ing form, because to is a preposition here: You'll soon get used to using it. Use and to use are wrong.",
    },
    {
      kind: "gap",
      stem: "We've lived in Japan for a year now, and we ___ used to the food. (get, present perfect)",
      answers: ["'ve got", "have got", "'ve gotten", "have gotten"],
      feedback:
        "The food has become normal for us, so we use the present perfect of get: We've got used to the food. In American English, people say we've gotten used to it. We have got and we have gotten are also correct.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["own?", "you", "living", "your", "used", "Are", "to", "on"],
      answer: "Are you used to living on your own?",
      feedback:
        "In a question, be comes before the subject: Are you used to. Then comes the -ing form: living on your own?",
    },
    {
      kind: "mistake",
      tokens: ["I'm", "not", "use", "to", "getting", "up", "so", "early."],
      wrongIndex: 2,
      correction: "used",
      feedback:
        "We don't hear the d when we say used to, but we always write it: I'm not used to getting up so early.",
    },
  ],

  levelRationale:
    "English Grammar Profile: be used to and get used to with a noun or the -ing form are B1 points. The topic links to A2 used to and would through the used-to family, and it repeats the contrast with used to and the base form for a past habit in one paragraph and one example. It defines no new grammar term, but it reuses the A1 definition of preposition and the A2 definition of gerund to explain why the -ing form follows to. Both British have got used to and American have gotten used to are given, and the gap accepts both. The cold gap names be + not, so the present perfect (I haven't got used to the cold yet) is not a second answer.",

  sourceNotes:
    "english_grammar.txt, # Be used to: be used to with the -ing form for something that feels normal because we have done it often, and get used to for becoming used to it, agree with Swan. The note gives only the -ing form; a noun or pronoun after used to, the reason (to is a preposition), the tenses of be and get, gotten in American English, negatives and questions, the spelling of used and the contrast with A2 used to are authored from Swan, Practical English Usage.",
};
