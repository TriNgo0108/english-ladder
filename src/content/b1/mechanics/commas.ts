import type { RuleTopic } from "../../schema";

export const commas: RuleTopic = {
  slug: "commas",
  family: "punctuation",
  title: "Commas: lists, linking words, extra information",
  summary: "Put commas in lists, after However or an opening clause, before but and so, and around extra information. Never between a subject and its verb.",
  level: "b1",
  category: "mechanics",
  shape: "rule",
  order: 41,

  explanation: [
    "A <b>comma</b> (,) is a small mark that shows a short pause or a break between parts of a sentence. At A1 you learned the full stop, which ends a sentence. A comma does not end a sentence. Remember: a clause is a group of words with a subject and a verb.",
    "<b>Lists.</b> Put a comma between the items in a list, and use and or or before the last item: We need tomatoes<b>,</b> onions<b>,</b> garlic and olive oil. In British English, writers usually leave out the comma before and. Many writers, especially in American English, put one there too: red<b>,</b> white<b>,</b> and blue. This is called the <b>Oxford comma</b>. Both styles are correct. Choose one and use it every time.",
    "<b>At the start of a sentence.</b> After a linking word or phrase at the start, like <b>However,</b> For example, In addition or As a result (order 25), we put a comma: The café was busy. <b>Unfortunately,</b> there were no free tables. When a time clause or an if clause comes first (orders 7 and 9), we usually put a comma after it: When the film ended<b>,</b> we went for pizza. After a short phrase about time or place, like On Monday or In 2020, the comma is often left out: On Monday<b>,</b> I start work at eight and On Monday I start work at eight are both correct.",
    "<b>Two clauses joined by but or so.</b> When but or so joins two clauses, we usually put a comma before it: I wanted to go out<b>,</b> but I was too tired. With two very short clauses, the comma is often left out. A comma alone can't join two sentences. Use a full stop, or add a joining word like but or so: I was hungry<b>,</b> so I made a sandwich, not I was hungry, I made a sandwich.",
    "<b>Extra information.</b> Put commas around extra information in the middle of a sentence. It is extra if you can take it out and the sentence still makes sense, with the same main meaning: Our new manager<b>,</b> Ms Kaur<b>,</b> starts on Monday. Use a pair of commas, one before and one after. A relative clause with commas (who or which) is a different kind, which you'll meet at a later level (order 18).",
    "<b>Never</b> put a comma between the subject and its verb, even when the subject is long: The man in the blue coat is my uncle, not The man in the blue coat, is my uncle. Don't put one between a verb and its object either: I bought bread, not I bought, bread.",
  ].join("\n\n"),

  form: [
    "list: A, B and C · Oxford comma, also correct: A, B, and C",
    "linking word first: However, … · For example, … · As a result, …",
    "time clause or if clause first → usually a comma: When the film ended, we went for pizza.",
    "clause, but / so + clause: I wanted to go out, but I was too tired.",
    "extra information: Our new manager, Ms Kaur, starts on Monday.",
    "never: subject, verb · not: verb, object",
  ].join("\n"),

  examples: [
    {
      sentence: "We need tomatoes<b>,</b> onions<b>,</b> garlic and olive oil.",
      why: "There is a comma between the items in the list, and and before the last one. There is no comma before and here, which is usual in British English.",
    },
    {
      sentence: "The flag is red<b>,</b> white<b>,</b> and blue.",
      why: "This list has a comma before and too. This is the <b>Oxford comma</b>. It is also correct, and it is common in American English.",
    },
    {
      sentence: "The café was busy. <b>Unfortunately,</b> there were no free tables.",
      why: "Unfortunately starts the sentence and comments on it, so a comma comes after it, like after However.",
    },
    {
      sentence: "When the film ended<b>,</b> we went for pizza.",
      why: "The time clause comes first, so we usually put a comma after it. We went for pizza when the film ended has no comma.",
    },
    {
      sentence: "I wanted to go out<b>,</b> but I was too tired.",
      why: "But joins two clauses, each with a subject and a verb (I wanted, I was), so a comma comes before but.",
    },
    {
      sentence: "Our new manager<b>,</b> Ms Kaur<b>,</b> starts on Monday.",
      why: "Ms Kaur is extra information. Without it, the sentence still makes sense: Our new manager starts on Monday. So there is a comma before it and after it.",
    },
    {
      sentence: "The man in the blue coat is my uncle.",
      why: "The subject is long (The man in the blue coat), but there is no comma between it and its verb, is.",
    },
  ],

  pitfall: {
    wrong: "I was tired, I went to bed early.",
    right: "I was tired<b>, so</b> I went to bed early. · I was tired<b>.</b> I went to bed early.",
    why: "These are two complete sentences. A comma alone can't join them. Add a joining word like so or but, or use a full stop.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence is punctuated correctly?",
      options: ["I bought bread cheese and apples.", "I bought, bread, cheese and apples.", "I bought bread, cheese and apples."],
      answer: 2,
      feedback:
        "In a list, a comma goes between the items, and and comes before the last one: I bought bread, cheese and apples. Don't put a comma between the verb, bought, and its object. I bought bread, cheese, and apples, with an Oxford comma, would also be correct.",
    },
    {
      kind: "mistake",
      tokens: ["The", "people", "in", "the", "flat", "upstairs,", "are", "very", "friendly."],
      wrongIndex: 5,
      correction: "upstairs",
      feedback:
        "The subject is The people in the flat upstairs, and its verb is are. Never put a comma between a subject and its verb, even a long one: The people in the flat upstairs are very friendly.",
    },
    {
      kind: "choice",
      stem: "Which sentence is punctuated correctly?",
      options: ["It was raining, we stayed at home.", "It was raining, so we stayed at home.", "It was raining so, we stayed at home."],
      answer: 1,
      feedback:
        "A comma alone can't join two sentences, so we need a joining word: It was raining, so we stayed at home. The comma goes before so, not after it.",
    },
    {
      kind: "mistake",
      tokens: ["The", "hotel", "was", "expensive.", "However", "the", "food", "was", "excellent."],
      wrongIndex: 4,
      correction: "However,",
      feedback:
        "When However starts a sentence, a comma comes after it: The hotel was expensive. However, the food was excellent.",
    },
    {
      kind: "choice",
      stem: "Which sentence is punctuated correctly?",
      options: [
        "Paris, the capital of France, is beautiful in spring.",
        "Paris, the capital of France is beautiful in spring.",
        "Paris the capital of France, is beautiful in spring.",
      ],
      answer: 0,
      feedback:
        "The capital of France is extra information about Paris. Without it, the sentence still makes sense: Paris is beautiful in spring. Extra information in the middle of a sentence needs a pair of commas, one before it and one after it.",
    },
  ],

  levelRationale:
    "The CEFR's B1 orthographic control descriptor says a learner's spelling, punctuation and layout are accurate enough to be followed most of the time, and B1 writing descriptors ask for connected text that links shorter parts into a sequence. Commas are the main mark for that. The English Grammar Profile does not cover punctuation, so the level follows the CEFR and the spec (section 8), which places commas at B1 after A1 capital letters and full stops. Earlier B1 topics already show the comma after a first time clause (order 7), a first if clause (order 9) and However (order 25); this topic states the rule with the same hedges. The comma around a non-defining relative clause is left to B2, as order 18 says.",

  sourceNotes:
    "english_grammar.txt, # Punctuation: commas, colons and semicolons, ## The comma: commas in a list, a comma between two clauses joined by but, and commas around a non-defining relative clause agree with Swan. The note's rule that the comma is used 'if the subject is repeated or changed' is not a rule Swan gives; this topic says usually, and that it is often left out between two very short clauses. Non-defining relative clauses are left to B2 (order 18), so extra information is taught with a noun phrase (Ms Kaur) instead. The note's line on direct speech is left out. The Oxford comma, the comma after an opening linking word or clause, the comma splice and the subject-verb rule are authored from Swan, Practical English Usage.",
};
