import type { RuleTopic } from "../../schema";

export const gerundsVsInfinitives: RuleTopic = {
  slug: "gerunds-vs-infinitives",
  family: "gerunds-and-infinitives",
  title: "Gerunds and infinitives: I stopped smoking, I stopped to rest",
  summary: "Remember to call her, or I remember calling her? Use -ing after prepositions and as a subject, and learn stop, remember, forget and try.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 13,

  explanation: [
    "At A2, you learnt that some verbs take the -ing form (I enjoy <b>cooking</b>) and some take to and the base form (I want <b>to cook</b>). Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund. To and the base form together, like to buy or to see, are called the infinitive.",
    "Here are some more verbs. After <b>avoid</b>, <b>suggest</b>, <b>imagine</b>, <b>practise</b>, <b>keep</b> and <b>can't stand</b>, use the gerund: I <b>avoid driving</b> in the city. She <b>suggested meeting</b> at six. Keep means continue: He <b>kept talking</b>. After <b>agree</b>, <b>offer</b>, <b>promise</b>, <b>refuse</b>, <b>plan</b>, <b>manage</b> and <b>afford</b>, use the infinitive: He <b>offered to help</b>. We can't <b>afford to buy</b> a car. To say no, put not before the gerund or the infinitive: I decided <b>not to go</b>. I suggested <b>not waiting</b>.",
    "After a <b>preposition</b>, like in, at, about, for, before or after, use the gerund: I'm interested <b>in learning</b> Chinese. She's good <b>at cooking</b>. Thank you <b>for helping</b> me. Wash your hands <b>before eating</b>. Remember: a preposition is a small word, like in, on or under, that goes before a noun. In look forward to, to is a preposition, as in be used to (order 12): I'm looking forward <b>to meeting</b> your parents.",
    "The gerund can also be the <b>subject</b> of a sentence. Remember: the subject is the person or thing that the sentence is about. <b>Swimming</b> is good for your heart. <b>Learning</b> a language takes time. The infinitive is also possible as a subject (To learn a language takes time), but it is less common and more formal.",
    "After <b>like</b>, <b>love</b>, <b>hate</b>, <b>start</b>, <b>begin</b> and <b>continue</b>, both forms are correct, usually with little or no difference in meaning: It <b>started raining</b>. It <b>started to rain</b>.",
    "With <b>stop</b>, <b>remember</b>, <b>forget</b> and <b>try</b>, the meaning changes. <b>Stop</b> + gerund means that you don't do something any more: I <b>stopped eating</b> meat last year. <b>Stop</b> + infinitive means that you stop one thing so that you can do another. This is the infinitive of purpose (A2): We <b>stopped to buy</b> some water. (We stopped walking because we wanted to buy water.)",
    "<b>Remember</b> or <b>forget</b> + infinitive is for something that you need to do, so the remembering comes first and the action comes after it: <b>Remember to turn off</b> the lights. I <b>forgot to call</b> my mum. <b>Remember</b> + gerund is for a memory of something that you did before: I <b>remember meeting</b> her at a party. We usually use forget + gerund in I'll never forget: I'll <b>never forget visiting</b> Rome.",
    "<b>Try</b> + infinitive means that you make an effort to do something difficult, and maybe you can't do it: I <b>tried to open</b> the jar, but it was too tight. <b>Try</b> + gerund means that you do something to see what happens, as a test: If you can't sleep, <b>try reading</b> a book in bed. Sometimes both forms are possible with almost the same meaning.",
  ].join("\n\n"),

  form: [
    "avoid / suggest / imagine / practise / keep / can't stand + gerund: I avoid driving.",
    "agree / offer / promise / refuse / plan / manage / afford + infinitive: He offered to help.",
    "preposition + gerund: interested in learning · good at cooking · look forward to seeing",
    "gerund as subject: Swimming is good for you.",
    "like / love / hate / start / begin / continue + gerund or infinitive",
    "stop doing (no more) · stop to do (so that you can do it)",
    "remember / forget to do (an action you need to do) · remember doing (a memory)",
    "try to do (an effort) · try doing (a test)",
  ].join("\n"),

  examples: [
    {
      sentence: "She's very good <b>at cooking</b>.",
      why: "At is a preposition, so the verb after it is a gerund: cooking.",
    },
    {
      sentence: "<b>Swimming</b> is good for your heart.",
      why: "The gerund is the <b>subject</b> of the sentence. The verb is is, because swimming is one activity.",
    },
    {
      sentence: "I <b>stopped eating</b> meat last year.",
      why: "<b>Stop</b> + gerund: I don't eat meat any more.",
    },
    {
      sentence: "We were tired, so we <b>stopped to have</b> a coffee.",
      why: "<b>Stop</b> + infinitive: we stopped driving because we wanted to have a coffee.",
    },
    {
      sentence: "<b>Remember to turn off</b> the lights. · I <b>remember meeting</b> her at a party.",
      why: "<b>Remember to</b> is for something you need to do. <b>Remember</b> + gerund is a memory of the past.",
    },
    {
      sentence: "If you can't sleep, <b>try reading</b> a book in bed.",
      why: "<b>Try</b> + gerund: read a book as a test, to see if it helps you sleep.",
    },
  ],

  pitfall: {
    wrong: "I'm interested in learn to cook.",
    right: "I'm interested in <b>learning</b> to cook.",
    why: "After a preposition, like in, use the <b>gerund</b>. After learn, use the infinitive: to cook.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "I'm really interested in ___ more about history.",
      options: ["learn", "to learn", "learning", "learned"],
      answer: 2,
      feedback:
        "In is a preposition, and after a preposition we use the gerund: I'm interested in learning more about history.",
    },
    {
      kind: "gap",
      stem: "Please remember ___ the door when you leave. (lock)",
      answers: ["to lock"],
      feedback:
        "Locking the door is something you need to do after you remember, so we use remember + infinitive: Please remember to lock the door when you leave. Remember locking is for a memory of the past.",
    },
    {
      kind: "gap",
      stem: "I'll never forget ___ the sea for the first time. I was five years old. (see)",
      answers: ["seeing", "having seen"],
      feedback:
        "This is a memory of something in the past, so we use forget + gerund: I'll never forget seeing the sea for the first time. Forget to see would mean that you didn't do something you needed to do.",
    },
    {
      kind: "choice",
      stem: "'I tried to lift the box, but it was too heavy.' What does this mean?",
      options: [
        "I made an effort to lift it, but I couldn't.",
        "I lifted it as a test, to see what would happen.",
        "I didn't lift it any more.",
        "I forgot to lift it.",
      ],
      answer: 0,
      feedback:
        "Try + infinitive means that you make an effort to do something difficult, and maybe you can't do it. The box was too heavy, so I couldn't lift it. Try + gerund would mean doing something as a test.",
    },
    {
      kind: "choice",
      stem: "Which sentence means that Tom doesn't smoke any more?",
      options: ["Tom stopped to smoke.", "Tom stopped smoking.", "Tom remembered to smoke.", "Tom tried to smoke."],
      answer: 1,
      feedback:
        "Stop + gerund means that you don't do something any more: Tom stopped smoking. Tom stopped to smoke means that he stopped what he was doing so that he could smoke.",
    },
    {
      kind: "gap",
      stem: "When did you start ___ English? (learn)",
      answers: ["learning", "to learn"],
      feedback:
        "After start, both forms are correct, with little or no difference in meaning: When did you start learning English? When did you start to learn English?",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a sentence.",
      words: ["years.", "language", "take", "a", "can", "new", "Learning"],
      answer: "Learning a new language can take years.",
      feedback:
        "The gerund, learning a new language, is the subject, so it comes first. Then comes the verb, can take: Learning a new language can take years.",
    },
    {
      kind: "mistake",
      tokens: ["I'm", "looking", "forward", "to", "see", "you", "next", "week."],
      wrongIndex: 4,
      correction: "seeing",
      feedback:
        "In look forward to, to is a preposition, so the verb after it is a gerund: I'm looking forward to seeing you next week.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the gerund after prepositions, the gerund as a subject, and the verbs whose meaning changes with the gerund or the infinitive (stop, remember, forget, try) are B1 points, and so are the extra verbs avoid, suggest, imagine, agree, offer, promise, refuse and manage. The topic extends A2 verb + gerund or infinitive, the family's A2 topic, and reuses its definitions of gerund and infinitive and its list of verbs that take both. Stop + infinitive is linked to the A2 infinitive of purpose, and look forward to is linked to be used to (order 12), where to is also a preposition. The start gap accepts both forms. Try is tested by meaning in a choice, not by a gap, because try to and try + gerund are often both possible. Forget + gerund is given only in I'll never forget, as Swan says this is its usual use. The perfect gerund (having seen) is not taught, but the gap accepts it because it is correct.",

  sourceNotes:
    "english_grammar.txt, # Gerund: the gerund as a subject, after a preposition (think about joining) and after avoid, enjoy, finish, imagine, mind, risk and suggest agrees with Swan. Go + -ing, risk, can't bear, couldn't help, it's no good and it's not worth are correct, but they are left out to keep the topic short. # Verbs followed by gerunds and infinitives: the note says remember and forget + infinitive are for 'an obligation'; Swan describes it as something that you need to do, so this topic uses those words. # Infinitive or gerund: try to (an attempt that may not succeed) and try + -ing (an experiment) agree with Swan. Stop, the verbs with the infinitive, like, love, start and continue with both forms and not before the gerund or infinitive are authored from Swan, Practical English Usage.",
};
