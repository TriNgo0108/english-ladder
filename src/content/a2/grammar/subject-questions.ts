import type { RuleTopic } from "../../schema";

export const subjectQuestions: RuleTopic = {
  slug: "subject-questions",
  family: "question-forms",
  title: "Subject questions: Who called you? What happened?",
  summary: "Who called you? What happened? When who or what is the subject, the question has no do, does or did. Compare: Who did you call?",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 22,

  explanation: [
    "You know questions with a question word and do, does or did: Where <b>do</b> you live? What <b>did</b> you buy? In these questions, the subject comes after do, does or did. Remember: the subject is the person or thing that the sentence is about.",
    "Sometimes we don't know who or what did something, so we ask about the <b>subject</b>. Put <b>who</b> or <b>what</b> in the place of the subject, and keep the order of a normal sentence. We don't usually use do, does or did in these questions: Someone called you. → <b>Who called</b> you? Something happened. → <b>What happened</b>? Say Who called you?, not Who did call you?",
    "Compare these two questions. They ask about different people. <b>Who called</b> you? Ana called me. Here who is the subject: it asks about the person who called. <b>Who did</b> you <b>call</b>? I called Ana. Here who is the object: it asks about the person you called. Remember: the object is the person or thing that the action goes to. When who or what is the object, we use do, does or did, as usual.",
    "In the present simple, the verb after who or what as the subject has -s, as it does after he, she and it: <b>Who lives</b> here? <b>What makes</b> you happy? We usually use the -s form even when the answer is more than one person: <b>Who wants</b> a coffee? Tom and Ana do.",
    "In the past simple, use the past form of the verb, with no did: <b>Who broke</b> the window? <b>What happened</b> next? The past is in the verb itself: broke, happened.",
    "With be, can and will, the order is also the same as in a normal sentence: <b>Who is</b> at the door? <b>Who can</b> help me? <b>What will</b> happen next?",
  ].join("\n\n"),

  form: [
    "who / what as the subject + verb … (no do, does or did) · Who called you? · What happened?",
    "present simple: who / what + verb + -s · Who lives here?",
    "who / what as the object + do / does / did + subject + base form · Who did you call?",
    "not: Who did call you?",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>Who called</b> you last night?",
      why: "We don't know the person who called, so <b>who</b> is the subject. There is no did, and the verb is in the past form: <b>called</b>.",
    },
    {
      sentence: "Who <b>did</b> you <b>call</b> last night?",
      why: "Here you is the subject, and <b>who</b> asks about the person you called, the object. So we use <b>did</b> and the base form, <b>call</b>.",
    },
    {
      sentence: "<b>What happened</b> at work today?",
      why: "<b>What</b> is the subject: something happened. There is no did, and happened is the past form.",
    },
    {
      sentence: "<b>Who lives</b> in that big house? My grandparents do.",
      why: "<b>Who</b> is the subject, so the verb has -s: <b>lives</b>. We use lives even though the answer is two people.",
    },
    {
      sentence: "<b>What makes</b> you happy?",
      why: "<b>What</b> is the subject, so there is no does, and the verb has -s: <b>makes</b>.",
    },
    {
      sentence: "<b>Who can</b> help me with this bag?",
      why: "With can, the order is the same as in a normal sentence: Someone can help me. → <b>Who can</b> help me?",
    },
  ],

  pitfall: {
    wrong: "Who did call you?",
    right: "<b>Who called</b> you?",
    why: "<b>Who</b> is the subject here, so we don't usually use did. Put the past form, <b>called</b>, straight after who.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Your sister says: \"Someone called me this morning.\" You want to know the person. What do you ask?",
      options: ["Who did you call?", "Who did call you?", "Who called you?", "Who you called?"],
      answer: 2,
      feedback:
        "Someone called your sister, and you want to know that person, so who is the subject: Who called you? We don't usually use did when who is the subject. Who did you call? asks about a different person, the person she called.",
    },
    {
      kind: "choice",
      stem: "Ana called Tom. Which question has the answer Tom?",
      options: ["Who called Ana?", "Who did Ana call?", "Who called Tom?", "Who did call Ana?"],
      answer: 1,
      feedback:
        "Tom is the person Ana called, the object, so the question uses did: Who did Ana call? The answer to Who called Tom? is Ana, because there who is the subject.",
    },
    {
      kind: "gap",
      stem: "Who ___ more cake? Ben and Lucy do. (want)",
      answers: ["wants"],
      feedback:
        "Who is the subject, so there is no do or does, and the verb has -s: Who wants more cake? We use wants even though the answer, Ben and Lucy, is two people.",
    },
    {
      kind: "gap",
      stem: "Who ___ you see at the party? I saw Tom and his sister.",
      answers: ["did"],
      feedback:
        "Here you is the subject, and who asks about the people you saw, the object. So the question needs did: Who did you see at the party? The answer, I saw, is in the past.",
    },
    {
      kind: "wordbank",
      prompt: "Your friend knows about the party. Put the words in order to ask which person told your friend.",
      words: ["about", "told", "Who", "party?", "you", "the"],
      answer: "Who told you about the party?",
      feedback:
        "Who is the subject, so the order is the same as in a normal sentence, with no did: Someone told you about the party. → Who told you about the party?",
    },
    {
      kind: "mistake",
      tokens: ["Who", "in", "your", "family", "live", "in", "London", "now?"],
      wrongIndex: 4,
      correction: "lives",
      feedback:
        "Who is the subject, so in the present simple the verb has -s: Who in your family lives in London now? We use lives even if the answer is more than one person.",
    },
    {
      kind: "mistake",
      tokens: ["Who", "did", "you", "saw", "at", "the", "party?"],
      wrongIndex: 3,
      correction: "see",
      feedback:
        "Here who is the object, so the question has did, and after did we use the base form: Who did you see at the party? The past is already in did, so the verb is see, not saw.",
    },
  ],

  levelRationale:
    "English Grammar Profile: questions with who and what as the subject (Who called you? What happened?) are an A2 point, so this topic is at A2, not at a later level. It comes after the past simple (order 1), because most of its questions are about the past, and it builds on A1 question words, which already says that Who lives here? has no do and promises more at a later level. The rule about do is given with don't usually, because Swan records an emphatic did in subject questions (Well, who did call you, then?); no quiz item has a context for that. The singular verb after who is given with usually, as Swan gives it. Which, whose and how many as the subject (How many people came?) and subject questions with the present perfect are left to later topics.",

  sourceNotes:
    "english_grammar.txt has no section on subject questions, so this topic is authored from Swan, Practical English Usage, and the English Grammar Profile. # Question lists What happened then? next to What did you do next?; both are correct, and they are the same contrast this topic teaches (what as the subject, with no did, and what as the object, with did). The no-do rule, the contrast with object questions, the -s form after who even when the answer is plural, and the same word order with be, can and will are checked against Swan.",
};
