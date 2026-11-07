import type { RuleTopic } from "../../schema";

export const pastPerfectAndNarrativeTenses: RuleTopic = {
  slug: "past-perfect-and-narrative-tenses",
  title: "Past perfect and narrative tenses: When I got there, the train had left",
  summary: "Tell a story in the past: the past simple for events, the past continuous for background, and had + past participle for what happened earlier.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 6,

  explanation: [
    "When we tell a story about the past, we usually use three tenses together. These are the <b>narrative tenses</b>. The <b>past simple</b> is for the main events, one after the other: I <b>got up</b>, <b>had</b> a shower and <b>left</b> the house. The <b>past continuous</b>, was or were and the -ing verb, is for the background, things that were in progress at that time: It <b>was raining</b>, and people <b>were hurrying</b> home. The <b>past perfect</b> is for something that happened <b>earlier</b> than the time of the story: When I got to the station, my train <b>had left</b>.",
    "The past perfect has two parts: <b>had</b> and then the <b>past participle</b> of the verb. Remember: the past participle is the form of a verb that comes after have: seen, gone, finished. Had is the same for every subject: I had left, she had left, they had left. The short form is <b>'d</b>: I<b>'d</b>, you<b>'d</b>, she<b>'d</b>, we<b>'d</b>, they<b>'d</b>. Here, 'd means had. To say no, use <b>hadn't</b>: She <b>hadn't seen</b> the film. To ask a question, put had before the subject: <b>Had</b> you <b>met</b> him before? Short answers are Yes, I had. No, I hadn't.",
    "We use the past perfect when the story is already in the past and we go back to an even earlier time. It shows which thing happened first. Compare: When Tom arrived, the film <b>started</b>. (First Tom arrived, then the film started.) When Tom arrived, the film <b>had started</b>. (The film started first, before Tom arrived.) When Tom arrived, we <b>were watching</b> the film. (The film was in progress when he arrived.)",
    "The past perfect often goes with <b>already</b>, <b>never … before</b> and <b>by the time</b>: When we got to the party, most people <b>had</b> already <b>gone</b> home. I was nervous because I <b>had never flown</b> before. By the time the police arrived, the thieves <b>had escaped</b>.",
    "We don't use the past perfect for every past event. When we tell events in the order they happened, the past simple is enough: I <b>came</b> home, <b>made</b> dinner and <b>went</b> to bed. And when <b>before</b> or <b>after</b> already shows the order, the past perfect is often not needed, and both are correct: After she <b>finished</b> her work, she went home. After she <b>had finished</b> her work, she went home.",
    "Don't use the present perfect, have or has, for the earlier event in a past story. Use had: When I got home, I saw that someone <b>had opened</b> the window, not someone has opened the window.",
  ].join("\n\n"),

  form: [
    "past simple → the main events: I got up and left.",
    "past continuous → the background: It was raining.",
    "past perfect → earlier than the story: had ('d) + past participle",
    "I/you/he/she/it/we/they had ('d) left · hadn't left",
    "Had you met him before? · Yes, I had. · No, I hadn't.",
    "with before or after, the past perfect is often not needed: After she (had) finished, she went home.",
  ].join("\n"),

  examples: [
    {
      sentence: "It <b>was</b> a cold night. The wind <b>was blowing</b>, and I <b>walked</b> quickly to the station.",
      why: "The wind blowing is the background, so it is in the past continuous. Walking to the station is the main event, so it is in the past simple: <b>walked</b>.",
    },
    {
      sentence: "When I got to the station, my train <b>had left</b>, so I <b>took</b> a taxi.",
      why: "The train left before I got there, so we use the past perfect, <b>had left</b>. Taking a taxi is the next event in the story, so it is in the past simple.",
    },
    {
      sentence: "When we got to the cinema, the film <b>had</b> already <b>started</b>.",
      why: "The film started first, before we got there. <b>Already</b> often goes between had and the past participle.",
    },
    {
      sentence: "I was nervous on the plane because I<b>'d never flown</b> before.",
      why: "<b>'d never flown</b> means had never flown: no flying at any time before that trip. Here 'd is the short form of had.",
    },
    {
      sentence: "<b>After</b> we <b>had</b> dinner, we <b>went</b> for a walk.",
      why: "<b>After</b> already shows that dinner came first, so the past simple is fine. After we had had dinner is also correct.",
    },
    {
      sentence: "<b>Had</b> you <b>met</b> Ana before the party?",
      why: "In a question, <b>had</b> comes before the subject, you, and the past participle comes after it.",
    },
  ],

  pitfall: {
    wrong: "When we arrived, the film has already started.",
    right: "When we arrived, the film <b>had</b> already started.",
    why: "The story is in the past, and the film started before that. For an earlier past event, use <b>had</b>, not have or has.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "When we got to the station, the train ___, so we waited an hour for the next one.",
      options: ["had left", "has left", "leaves", "had leave"],
      answer: 0,
      feedback:
        "The train left before we got there, and the story is in the past, so we use the past perfect, had and the past participle: the train had left. Has left is the present perfect, which we don't use in a past story like this. Leaves is the present, and had leave has the base form, not the past participle.",
    },
    {
      kind: "gap",
      stem: "I was nervous on the plane because I ___ before. (fly + never)",
      answers: ["had never flown", "'d never flown"],
      feedback:
        "The story is in the past (I was nervous), and never … before goes back to all the time before that, so we use the past perfect: I had never flown, or I'd never flown, before. Fly is irregular: fly → flew → flown.",
    },
    {
      kind: "gap",
      stem: "After she ___ her homework, she watched TV. (finish)",
      answers: ["finished", "had finished", "'d finished"],
      feedback:
        "After already shows that the homework came first, so the past perfect is not needed here: After she finished her homework, she watched TV. After she had finished, or she'd finished, her homework is also correct.",
    },
    {
      kind: "choice",
      stem: "Which sentence means that the film started before Tom arrived?",
      options: [
        "When Tom arrived, the film started.",
        "When Tom arrived, the film was starting.",
        "When Tom arrived, the film had started.",
      ],
      answer: 2,
      feedback:
        "When Tom arrived, the film had started: the past perfect, had started, shows that the film started first. The film started means that it started after Tom arrived. The film was starting means that it was just beginning at the moment he arrived.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["left", "Why", "early?", "she", "so", "had"],
      answer: "Why had she left so early?",
      feedback:
        "The question word comes first, then had, then the subject, then the past participle: Why had she left so early? So early goes at the end.",
    },
    {
      kind: "mistake",
      tokens: ["We", "were", "late", "for", "the", "party.", "When", "we", "got", "there,", "most", "people", "have", "already", "left."],
      wrongIndex: 12,
      correction: "had",
      feedback:
        "The story is in the past (we were late, we got there), and the people left before that, so we use the past perfect: most people had already left. Have is the present perfect, which we don't use for an earlier event in a past story.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the past perfect simple, in statements and with already, never and before, is a B1 point, and using the past simple, past continuous and past perfect together to tell a story is typical of B1 writing. This site's A2 teaches the past simple and the past continuous with when and while, so this topic adds the past perfect to them. It comes after the present perfect (order 1), because it uses the past participle taught there. The point that the past perfect is often not needed after before and after follows Swan, Practical English Usage, so it is given with often, and gaps with after accept both forms.",

  sourceNotes:
    "english_grammar.txt, # Narrative tense: past simple for completed actions, past continuous for longer actions that a shorter action interrupts, and past perfect for actions before another past action agree with Swan. The note also lists the past perfect continuous; it is left out of this topic, which keeps to three tenses. The form, the short form 'd, questions and short answers, already, never … before and by the time, the contrast When Tom arrived, the film started / had started, and the point that the past perfect is often not needed with before and after are authored from Swan, Practical English Usage.",
};
