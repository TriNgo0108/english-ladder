import type { RuleTopic } from "../../schema";

export const verbObjectInfinitiveAndGerundPatterns: RuleTopic = {
  slug: "verb-object-infinitive-and-gerund-patterns",
  family: "gerunds-and-infinitives",
  title: "Verb + object + to or -ing: I want you to come",
  summary: "I want you to come. They made me wait. The rain stopped us playing. Learn which verbs take a person and to, a person and the base form, or -ing.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 14,

  explanation: [
    "In A2 and B1, we put one verb straight after another: I want to go. I enjoy cooking. Many of these verbs can also have an <b>object</b> between the two verbs, often a person: I want <b>you to come</b>. Remember: the object is the person or thing that the action goes to. Remember: to and the base form together, like to buy or to see, are called the infinitive. A pronoun object has its object form: me, you, him, her, us, them.",
    "After <b>want</b>, <b>would like</b>, <b>expect</b>, <b>ask</b>, <b>tell</b>, <b>allow</b>, <b>encourage</b>, <b>advise</b>, <b>remind</b>, <b>teach</b> and <b>persuade</b>, use object + infinitive: My parents <b>wanted me to study</b> law. We<b>'d like you to stay</b> for dinner. The manager <b>allowed us to leave</b> early. She <b>persuaded him to apply</b> for the job. You met tell, ask, advise, remind and encourage + person + to in reported commands (order 10). After want and would like, we don't use a that clause: I want you to come, not I want that you come.",
    "After <b>make</b> and <b>let</b>, use object + <b>base form</b>, with no to: The film <b>made me cry</b>. They <b>made us wait</b> for an hour. My parents <b>let me stay</b> out late. Make means force or cause, and let means allow. So we say They made us wait, not They made us to wait. In the passive, make takes to: We <b>were made to wait</b>. Let is not usually used in the passive; we use be allowed to instead: I <b>was allowed to</b> stay.",
    "After <b>help</b>, both are correct, with or without to: Could you <b>help me carry</b> these bags? Could you <b>help me to carry</b> these bags?",
    "After <b>prevent</b> and <b>stop</b>, use object + <b>from</b> + -ing: The rain <b>prevented us from playing</b>. The noise <b>stopped me from sleeping</b>. With stop, from is often left out: The noise <b>stopped me sleeping</b>. Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund.",
    "After <b>mind</b>, <b>imagine</b> and <b>can't stand</b>, which take the gerund, we can also put an object before the gerund: I don't mind <b>him coming</b> with us. Can you imagine <b>me living</b> in Paris? She can't stand <b>people being</b> late. In formal English, a possessive is also possible: I don't mind <b>his coming</b> with us.",
  ].join("\n\n"),

  form: [
    "want / would like / expect / ask / tell / allow / encourage / advise / remind / teach / persuade + object + to + base form",
    "make / let + object + base form (no to) · passive: be made to …",
    "help + object + (to) + base form",
    "prevent / stop + object + from + -ing · with stop, from is often left out",
    "mind / imagine / can't stand + object + -ing",
    "not: I want that you come · not: They made us to wait",
  ].join("\n"),

  examples: [
    {
      sentence: "My parents <b>wanted me to study</b> law.",
      why: "<b>Want</b> + object + to + base form. The object is me, not I.",
    },
    {
      sentence: "The manager <b>allowed us to leave</b> early.",
      why: "<b>Allow</b> + object + to: the manager said that we could leave early.",
    },
    {
      sentence: "They <b>made us wait</b> for an hour.",
      why: "<b>Make</b> + object + base form, with no to: they forced us to wait.",
    },
    {
      sentence: "My parents <b>let me stay</b> out late.",
      why: "<b>Let</b> + object + base form, with no to: my parents allowed it.",
    },
    {
      sentence: "The rain <b>prevented us from playing</b>.",
      why: "<b>Prevent</b> + object + from + -ing: the rain meant that we couldn't play.",
    },
    {
      sentence: "I don't mind <b>him coming</b> with us.",
      why: "<b>Mind</b> + object + -ing: it's not a problem for me if he comes.",
    },
  ],

  pitfall: {
    wrong: "I want that you come to my party.",
    right: "I <b>want you to come</b> to my party.",
    why: "After <b>want</b>, we use object + to + base form, not a that clause.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "We want that you stay for dinner.",
        "They made me to wait outside.",
        "My parents let me stay out late.",
        "The rain prevented us to play.",
      ],
      answer: 2,
      feedback:
        "After let, we use object + base form, with no to: My parents let me stay out late. After want, use object + to (We want you to stay), after make, use no to (They made me wait), and after prevent, use from + -ing (prevented us from playing).",
    },
    {
      kind: "gap",
      stem: "The airline made us ___ for three hours. (wait)",
      answers: ["wait"],
      feedback:
        "After make + object, we use the base form, with no to: The airline made us wait for three hours. Made us to wait is a common mistake.",
    },
    {
      kind: "gap",
      stem: "The teacher allowed us ___ our dictionaries in the exam. (use)",
      answers: ["to use"],
      feedback:
        "After allow + object, we use to + base form: The teacher allowed us to use our dictionaries in the exam. Let us use has the same meaning, with no to.",
    },
    {
      kind: "gap",
      stem: "The heavy snow stopped us ___ to the airport. (get)",
      answers: ["getting", "from getting"],
      feedback:
        "After stop + object, we use from + -ing, and with stop, from is often left out: The heavy snow stopped us (from) getting to the airport. Both are correct.",
    },
    {
      kind: "choice",
      stem: "My brother wants to use my car. I don't mind ___ my car, as long as he's careful.",
      options: ["him to borrow", "him borrow", "he borrowing", "him borrowing"],
      answer: 3,
      feedback:
        "After mind, we use the gerund, and we can put an object before it: I don't mind him borrowing my car. The object form is him, not he. In formal English, his borrowing is also possible.",
    },
    {
      kind: "mistake",
      tokens: ["The", "rain", "prevented", "us", "from", "play", "tennis."],
      wrongIndex: 5,
      correction: "playing",
      feedback:
        "From is a preposition, so the verb after it takes -ing: The rain prevented us from playing tennis.",
    },
    {
      kind: "mistake",
      tokens: ["My", "parents", "encouraged", "I", "to", "learn", "the", "piano."],
      wrongIndex: 3,
      correction: "me",
      feedback:
        "The person between the two verbs is the object of encouraged, so we use the object form: My parents encouraged me to learn the piano.",
    },
  ],

  levelRationale:
    "English Grammar Profile: want + object + to-infinitive is A2 to B1, and the pattern grows at B2 with expect, allow, encourage, persuade and teach, with make and let + object + base form, with prevent and stop + object + from + -ing, and with an object before the gerund (I don't mind him coming). The spec (section 8) and the family table place these patterns at B2, as the gerunds-and-infinitives family's next topic after A2 verb-plus-gerund-or-infinitive and B1 gerunds-vs-infinitives; it reuses their exact wording for infinitive and gerund, and links to reported commands (order 10). The classic errors I want that you come and They made me to wait are in the pitfall and the first choice, not in mistake items, because made me to wait has two fixes (delete to, or change made to forced). For the same reason, no mistake item swaps to and -ing after a verb, because another verb (made, let, stopped, saw) could be swapped in for a second fix. The stop gap accepts from getting and getting, as Swan allows. Help is shown with and without to, and is not tested.",

  sourceNotes:
    "english_grammar.txt, # Infinitives, ## After certain verbs lists advise, allow, expect, encourage, help and want, which take object + infinitive here; agree, fail, learn, manage and promise take no object before the infinitive in this pattern, so they are left out. # Verbs followed by gerunds and infinitives is about remember and forget, which B1 gerunds-vs-infinitives covers. Would like, ask, tell, remind, teach and persuade + object + to, make and let + base form, be made to in the passive, help with or without to, prevent and stop + (from) + -ing, mind, imagine and can't stand + object + -ing, the possessive in formal English and no that clause after want are authored from Swan, Practical English Usage.",
};
