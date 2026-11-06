import type { RuleTopic } from "../../schema";

export const presentSimple: RuleTopic = {
  slug: "present-simple",
  title: "Present simple: I work, she works",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 8,

  explanation: [
    "We use the present simple for things that are true for a long time, like your job or where you live: I live in Rome. She works in a bank. We also use it for things we do again and again, for example every day or every week: We play football on Sundays.",
    "With I, you, we and they, and with two or more people or things, use the base form of the verb. The base form is the verb as you see it in a dictionary, with nothing added: I work, they live, my parents speak French.",
    "With he, she and it, and with one person or thing, add <b>-s</b> to the verb: she works, he lives, my brother plays tennis, it rains a lot here.",
    "Verbs that end in -s, -sh, -ch, -x or -o add <b>-es</b>: he misses, she washes, he watches, it fixes, she goes, he does. When a verb ends in -y and the letter before the y is a, e, o or u, just add -s: play → plays, buy → buys. When it is a different letter, change the y to <b>-ies</b>: study → studies, carry → carries. Have is different: he <b>has</b>, not he haves.",
    "To say no, put <b>don't</b> (do not) or <b>doesn't</b> (does not) before the base form. Use doesn't with he, she and it: I don't work on Sundays. She doesn't work on Sundays. The -s is now in doesn't, so the verb has no -s: She doesn't work, not She doesn't works.",
    "To ask a question, put <b>do</b> or <b>does</b> before the subject: <b>Do</b> you live here? <b>Does</b> she work here? Again, after does the verb has no -s. Say Does she work? Do not say Does she works? In short answers, use do or does: Yes, I do. No, she doesn't.",
    "Do not use am, is or are with another verb in the present simple: I work in an office, not I am work in an office.",
    "Have works in the same way: Do you have a car? I don't have a car. This means the same as Have you got a car? I haven't got a car.",
  ].join("\n\n"),

  form: [
    "I/you/we/they work · he/she/it works",
    "-es: misses · washes · watches · fixes · goes · does",
    "study → studies · but play → plays · have → has",
    "I/you/we/they don't work · he/she/it doesn't work",
    "Do I/you/we/they work? · Does he/she/it work?",
    "Yes, I do. · No, I don't. · Yes, she does. · No, she doesn't.",
  ].join("\n"),

  examples: [
    {
      sentence: "I <b>live</b> in Madrid.",
      why: "With I, we use the base form of the verb, <b>live</b>, with nothing added.",
    },
    {
      sentence: "My sister <b>works</b> in a hospital.",
      why: "We add <b>-s</b> because the subject, my sister, is one person (she).",
    },
    {
      sentence: "He <b>watches</b> TV in the evening.",
      why: "Watch ends in -ch, so with he we add <b>-es</b>, not only -s: watches.",
    },
    {
      sentence: "She <b>studies</b> English every day.",
      why: "Study ends in -y, and the letter before the y is d. So with she, the y changes to <b>-ies</b>: studies.",
    },
    {
      sentence: "They <b>don't eat</b> meat.",
      why: "With they, we put <b>don't</b> before the verb to say no. Eat stays in the base form.",
    },
    {
      sentence: "He <b>doesn't like</b> coffee.",
      why: "With he, we use <b>doesn't</b>. The -s is in does, so like has no -s: not doesn't likes.",
    },
    {
      sentence: "<b>Does</b> your brother <b>play</b> tennis?",
      why: "In a question, <b>does</b> comes before the subject. It is does because your brother is one person, and play has no -s after does.",
    },
  ],

  pitfall: {
    wrong: "She work in a bank.",
    right: "She <b>works</b> in a bank.",
    why: "With he, she and it, and with one person or thing, the verb needs <b>-s</b>: she works. This -s is small and easy to forget, but English needs it.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "My son ___ English at school.",
      options: ["studys", "studies", "study", "is study"],
      answer: 1,
      feedback:
        "My son is one person (he), so the verb needs -s. Study ends in -y, and the letter before the y is d, so the y changes to -ies: studies. We do not use is with another verb, so is study is wrong.",
    },
    {
      kind: "gap",
      stem: "She ___ TV every evening. (watch, present simple)",
      answers: ["watches"],
      feedback:
        "The subject is she, so the verb needs -s. Watch ends in -ch, so we add -es: She watches TV every evening.",
    },
    {
      kind: "gap",
      stem: "My dad ___ coffee. He only drinks tea. (like + not)",
      answers: ["doesn't like", "does not like"],
      feedback:
        "My dad is one person (he), so we use doesn't, or does not. After doesn't, the verb has no -s: My dad doesn't like coffee. Don't is for I, you, we and they.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["sister", "speak", "Does", "French?", "your"],
      answer: "Does your sister speak French?",
      feedback:
        "In a question, does comes first, then the subject, then the verb: Does your sister speak French? The verb, speak, has no -s, because the -s is already in does.",
    },
    {
      kind: "mistake",
      tokens: ["Does", "he", "works", "on", "Saturdays?"],
      wrongIndex: 2,
      correction: "work",
      feedback:
        "After does, the verb has no -s, because the -s is already in does: Does he work on Saturdays?",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["I am work in an office.", "I works in an office.", "I work in an office."],
      answer: 2,
      feedback:
        "With I, we use the base form: I work in an office. We do not put am before another verb in the present simple. The -s is only for he, she and it, so I works is wrong.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: the present simple in statements (with the -s for he, she and it), negatives with don't and doesn't, and questions with do and does are A1 points. This topic comes after pronouns, because the -s depends on the subject, and after have got, because it explains the questions and negatives of have without got that the have got topic points to.",

  sourceNotes:
    "english_grammar.txt, # Tense, ## Present simple: 'We use present simple to describe, jobs and place' agrees with Swan as far as it goes (jobs, where you live), but it is not complete. This topic adds things we do again and again (Swan: present simple for permanent situations and for repeated actions). The note gives no forms. The -s, -es and -ies spelling, has, do and does in questions and negatives, no -s after does and doesn't, and short answers are authored from Swan, Practical English Usage. # Present Simple for Future (timetables) is above A1 and left out. Words like always and usually are not covered here.",
};
