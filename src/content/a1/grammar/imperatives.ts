import type { RuleTopic } from "../../schema";

export const imperatives: RuleTopic = {
  slug: "imperatives",
  title: "Imperatives: Sit down. Don't run.",
  summary: "Tell people what to do and what not to do: Sit down. Don't run. Be quiet. Add please to sound polite.",
  level: "a1",
  category: "grammar",
  shape: "rule",
  order: 12,

  explanation: [
    "We use the <b>imperative</b> to tell someone to do something: Sit down. Open your books. Come here. We also use it to tell someone how to do something, for example how to cook a meal or how to find a place: Cut the onions. Turn left at the bank.",
    "The imperative is the base form of the verb. Remember: the base form is the verb as you see it in a dictionary, with nothing added. We do not usually say the subject, you: Open the door. The verb has no -s, and there is no to before it.",
    "It is the same for one person and for many: Sit down, Tom. Sit down, children.",
    "To tell someone not to do something, put <b>don't</b> (do not) before the base form: Don't run. Don't touch that! Do not use not or no alone: Don't touch, not Not touch and not No touch. We often see the long form, <b>do not</b>, on signs: Do not park here.",
    "The base form of am, is and are is <b>be</b>. So with be, the imperative is be: Be quiet. Be careful. For no, put don't before it: Don't be late, not Don't late.",
    "An imperative can sound strong. To be more polite, add <b>please</b>. It can go at the start or at the end, after a comma: Please sit down. Sit down, please. Please don't smoke here.",
  ].join("\n\n"),

  form: [
    "base form · Sit down. · Open the window. · Be quiet.",
    "don't (do not) + base form · Don't run. · Don't be late.",
    "Please … · …, please. · Please don't …",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>Open</b> your books, please.",
      why: "We use the base form, <b>open</b>, with no subject. Please at the end makes it more polite.",
    },
    {
      sentence: "<b>Turn</b> left at the bank.",
      why: "To show someone the way, we use the base form, <b>turn</b>. We do not say you turn.",
    },
    {
      sentence: "<b>Don't touch</b> the oven. It's hot.",
      why: "We put <b>don't</b> before the base form to tell someone not to do something.",
    },
    {
      sentence: "<b>Be</b> careful!",
      why: "<b>Be</b> is the base form of am, is and are, so the imperative is be: not Are careful.",
    },
    {
      sentence: "<b>Don't be</b> late.",
      why: "With be too, we put <b>don't</b> before it: Don't be late, not Don't late.",
    },
    {
      sentence: "<b>Please sit</b> down.",
      why: "<b>Please</b> at the start makes it more polite. The verb is still the base form, sit.",
    },
    {
      sentence: "<b>Do not</b> park here.",
      why: "<b>Do not</b> is the long form of don't. We often see it on signs.",
    },
  ],

  pitfall: {
    wrong: "Not touch that!",
    right: "<b>Don't touch</b> that!",
    why: "To tell someone not to do something, put <b>don't</b> before the verb. Not or no alone is not enough.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "The floor is wet. ___ here, please.",
      options: ["Don't run", "Not run", "No run", "Don't running"],
      answer: 0,
      feedback:
        "To tell someone not to do something, we put don't before the base form: Don't run here, please. Not run and No run are wrong, because they have no don't. After don't, the verb has no -ing.",
    },
    {
      kind: "gap",
      stem: "___ quiet, please. The baby is sleeping. (be)",
      answers: ["Be"],
      feedback:
        "The imperative is the base form of the verb, and the base form of am, is and are is be: Be quiet, please. We do not say Are quiet or Is quiet.",
    },
    {
      kind: "gap",
      stem: "Please ___ late for the lesson tomorrow. It starts at nine. (be + not)",
      answers: ["don't be", "do not be"],
      feedback:
        "To tell someone not to do something, put don't, or do not, before the base form. With be, that is don't be: Please don't be late. We do not say Please don't late.",
    },
    {
      kind: "mistake",
      tokens: ["Not", "open", "the", "window,", "please."],
      wrongIndex: 0,
      correction: "Don't",
      feedback:
        "To tell someone not to do something, put don't before the verb: Don't open the window, please. Not alone is not enough.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["Sits down, please.", "Please to sit down.", "Please sitting down.", "Please sit down."],
      answer: 3,
      feedback:
        "The imperative is the base form: sit. Please can come before it: Please sit down. The verb has no -s, no to before it, and no -ing.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A1: the imperative, the negative imperative with don't, and please with an imperative are A1 points. Learners meet imperatives from their first lesson (Open your books. Listen.), and they need them for signs, directions and instructions. This topic comes after the present simple, so don't is already known.",

  sourceNotes:
    "english_grammar.txt, # The imperative: 'when we tell a person to do something' agrees with Swan. 'We simple use the verb' is right, but more exact is the base form of the verb, with no subject. Its examples are right, but 'Cook the pizza in hot oven' needs an article: in a hot oven. The note does not give the negative. Don't + base form, don't be, do not on signs, please at the start or the end, and that an imperative can sound strong are authored from Swan, Practical English Usage. Swan notes that you can come before an imperative to make it stronger (You sit down!); the explanation says we do not usually say you, and leaves this use out.",
};
