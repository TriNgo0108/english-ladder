import type { RuleTopic } from "../../schema";

export const firstConditional: RuleTopic = {
  slug: "first-conditional",
  family: "conditionals",
  title: "First conditional: If it rains, we'll stay at home",
  summary: "Talk about a possible future and its result: If it rains, we'll stay at home. Use the present simple after if, not will, and will in the other part.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 19,

  explanation: [
    "We use the <b>first conditional</b> to talk about something that is possible in the future, and its result: <b>If</b> it <b>rains</b> tomorrow, we<b>'ll stay</b> at home. Maybe it will rain and maybe it won't. If it rains, the result is that we stay at home.",
    "The sentence has two parts. The <b>if</b> part says what is possible. The other part says the result. In the if part, use the <b>present simple</b>, even though we are talking about the future. In the result part, use <b>will</b> ('ll) or <b>won't</b> and the base form of a verb: If you <b>study</b>, you<b>'ll pass</b> the test. If she <b>doesn't hurry</b>, she <b>won't catch</b> the bus. Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
    "In the if part, the present simple works as usual. With he, she and it, the verb needs -s: If he <b>comes</b>, I'll tell him. To say no, use don't or doesn't: If you <b>don't</b> leave now, you'll be late.",
    "We don't usually use will in the if part: If it <b>rains</b>, we'll stay at home, not If it will rain, we'll stay at home. Will goes in the result part.",
    "The if part can come first or second, and the meaning is the same. When the if part comes first, we usually put a comma after it. When it comes second, we don't usually use a comma: <b>If</b> I see Ana, I<b>'ll tell</b> her. I<b>'ll tell</b> Ana <b>if</b> I see her.",
    "In the result part, we can also use <b>can</b> and the base form, or an imperative, which tells someone to do something: If you're tired, you <b>can go</b> to bed. If you see Tom, <b>tell</b> him to call me.",
    "To ask a question, put will before the subject in the result part: What <b>will</b> you <b>do</b> if you miss the last bus? Remember: the subject is the person or thing that the sentence is about.",
  ].join("\n\n"),

  form: [
    "If + present simple, will ('ll) / won't + base form: If it rains, we'll stay at home.",
    "will ('ll) / won't + base form + if + present simple: We'll stay at home if it rains.",
    "If + present simple, can + base form · If + present simple, imperative",
    "not: If it will rain …",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>If</b> it <b>rains</b> tomorrow, we<b>'ll watch</b> a film at home.",
      why: "Rain tomorrow is possible. The if part uses the present simple, <b>rains</b>, and the result part uses <b>'ll</b> and the base form.",
    },
    {
      sentence: "<b>If</b> you <b>don't hurry</b>, you<b>'ll miss</b> the train.",
      why: "To say no in the if part, use <b>don't</b> and the base form, as in the present simple.",
    },
    {
      sentence: "She<b>'ll be</b> angry <b>if</b> you <b>forget</b> her birthday.",
      why: "Here the if part comes second, so there is no comma. The meaning is the same as If you forget her birthday, she'll be angry.",
    },
    {
      sentence: "<b>If</b> my dad <b>gets</b> home early, he <b>won't cook</b>. We<b>'ll go</b> out for dinner.",
      why: "My dad is he, so the verb in the if part has -s: <b>gets</b>. In the result part, <b>won't</b> says no.",
    },
    {
      sentence: "<b>If</b> you<b>'re</b> cold, <b>close</b> the window.",
      why: "The result part can be an imperative, <b>close</b>, which tells someone to do something.",
    },
  ],

  pitfall: {
    wrong: "If it will rain, we'll stay at home.",
    right: "If it <b>rains</b>, we'll stay at home.",
    why: "In the if part, use the <b>present simple</b>, not will, even for the future.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "If it ___ tomorrow, we'll go to the beach.",
      options: ["will be sunny", "is sunny", "sunny", "was sunny"],
      answer: 1,
      feedback:
        "The if part uses the present simple, even for tomorrow: If it is sunny tomorrow, we'll go to the beach. We don't usually use will in the if part, and the sentence needs a verb, so sunny alone is wrong. Was is the past, but this is about tomorrow.",
    },
    {
      kind: "gap",
      stem: "If Ana ___ late, we'll start the meeting without her. (be)",
      answers: ["is", "'s"],
      feedback:
        "The if part uses the present simple, and Ana is she, so we use is: If Ana is late, we'll start the meeting without her. Will be is not usual in the if part.",
    },
    {
      kind: "gap",
      stem: "If you don't hurry, you ___ the bus. (miss, will)",
      answers: ["'ll miss", "will miss"],
      feedback:
        "This is the result part, so we use will and the base form: If you don't hurry, you'll miss the bus. You will miss is also correct.",
    },
    {
      kind: "gap",
      stem: "If it rains, we ___ to the park. (go + not, will)",
      answers: ["won't go", "will not go"],
      feedback:
        "This is the result part, and it says no, so we use won't and the base form: If it rains, we won't go to the park. Won't is the short form of will not, and both are correct.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "If I'll be late, I'll call you.",
        "I call you if I'll be late.",
        "I'll call you if I'll be late.",
        "I'll call you if I'm late.",
      ],
      answer: 3,
      feedback:
        "Will goes in the result part, I'll call you, and the if part uses the present simple, if I'm late: I'll call you if I'm late. The if part comes second here, so there is no comma.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to finish the sentence: We'll go to the beach …",
      words: ["good.", "the", "if", "is", "weather"],
      answer: "if the weather is good.",
      feedback:
        "The if part comes second here: We'll go to the beach if the weather is good. After if comes the subject, the weather, and then the present simple, is.",
    },
    {
      kind: "mistake",
      tokens: ["If", "it'll", "be", "sunny", "tomorrow,", "we'll", "have", "a", "picnic."],
      wrongIndex: 1,
      correction: "it's",
      feedback:
        "In the if part, use the present simple, not will: If it's (it is) sunny tomorrow, we'll have a picnic. Will goes in the result part: we'll have a picnic.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the first conditional, with if and the present simple and will or won't in the result, is an A2 point, and the result part with can or an imperative is also early. This topic comes after will, the present simple for future and the imperative in A1, because it uses all three. The rule about will in the if part is given with don't usually, because some uses of will after if (If you will wait here, I'll get the manager, for a polite request) are above A2. Unless, the present perfect after if, and time words like when and as soon as with the same pattern are left to B1. The wordbank gives the result part in the prompt, because both orders of the two parts are correct and a wordbank can only have one answer.",

  sourceNotes:
    "english_grammar.txt, # First conditional: a real and likely possibility in the future, if with the present simple, will in the result, and a comma when if begins the sentence agree with Swan; the comma is given with usually. The note says will plus 'infinite' (infinitive); this topic says the base form, as A1 does. The note also gives the present perfect after if (if I've finished my other work); it is correct but above A2, and left out. The note says that if can be replaced by when, before, after, as soon as and until. These words take the same tense pattern, but they do not mean the same as if: when is for something we are sure will happen. They are left to the B1 time clauses topic. ## Condition under # Linking words gives unless, which is above A2 and left out; its second example has a typing mistake (I won't me). The can and imperative results, the no-will rule hedged with usually, and questions with What will you do if …? are authored from Swan, Practical English Usage.",
};
