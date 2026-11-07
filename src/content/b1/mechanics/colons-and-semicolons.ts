import type { RuleTopic } from "../../schema";

export const colonsAndSemicolons: RuleTopic = {
  slug: "colons-and-semicolons",
  title: "Colons and semicolons: introducing a list, joining two sentences",
  summary: "Use a colon to introduce a list or an explanation, and a semicolon to join two closely connected sentences or to separate long list items.",
  level: "b1",
  category: "mechanics",
  shape: "rule",
  order: 42,

  explanation: [
    "A <b>colon</b> (:) is two dots, one above the other. A <b>semicolon</b> (;) is a dot above a comma. They look similar, but they do different jobs. A colon <b>introduces</b> something: a list or an explanation comes after it. A semicolon <b>joins</b> two equal parts.",
    "<b>A colon before a list.</b> Use a colon after a complete sentence to introduce a list: I've got three hobbies<b>:</b> cooking, cycling and photography. The part before the colon must be a complete sentence, with a subject and a verb, that could end with a full stop. So don't put a colon straight after a verb or a preposition: Bring a coat, boots and a hat, not Bring: a coat, boots and a hat.",
    "<b>A colon before an explanation.</b> A colon can also introduce an explanation: the second part tells you more about the first part, or says why. There's one problem with the flat<b>:</b> it's too far from the station. In British English, the word after a colon usually has a small letter, unless it is a name or I.",
    "<b>A semicolon between two sentences.</b> A semicolon can join two complete sentences that are closely connected, instead of a full stop: My sister lives in Lisbon<b>;</b> my brother lives in Oslo. Each part must be a complete sentence. The word after a semicolon has a small letter, unless it is a name or I. Remember from order 41: a comma alone can't join two sentences, but a semicolon can.",
    "A semicolon is often followed by a linking word like however or as a result (order 25), with a comma after it: The train was late<b>;</b> however, we arrived on time. Don't put a semicolon before because: because already joins the two parts.",
    "<b>A semicolon in a list.</b> When the items in a list already have commas inside them, use semicolons between the items so the reader can see where each item ends: The speakers are Ana Lopez, a doctor<b>;</b> Tom Reed, a teacher<b>;</b> and Li Wei, a chef.",
    "Semicolons are more common in formal writing. A full stop is always correct instead of a semicolon between two sentences.",
  ].join("\n\n"),

  form: [
    "complete sentence + : + list · I've got three hobbies: cooking, cycling and photography.",
    "complete sentence + : + explanation · There's one problem: it's too far from the station.",
    "not after a verb or a preposition · not: Bring: a coat …",
    "sentence + ; + sentence · My sister lives in Lisbon; my brother lives in Oslo.",
    "; however, … · not ; because …",
    "list items with commas → ; between the items",
  ].join("\n"),

  examples: [
    {
      sentence: "I've got three hobbies<b>:</b> cooking, cycling and photography.",
      why: "I've got three hobbies is a complete sentence. The colon introduces the list.",
    },
    {
      sentence: "There's one problem with the flat<b>:</b> it's too far from the station.",
      why: "The part after the colon explains the problem. It starts with a small letter.",
    },
    {
      sentence: "My sister lives in Lisbon<b>;</b> my brother lives in Oslo.",
      why: "Both parts are complete sentences, and they are closely connected, so a semicolon can join them. A full stop would also be correct.",
    },
    {
      sentence: "The train was late<b>;</b> however, we arrived on time.",
      why: "The semicolon joins two sentences, and however comes after it, with a comma.",
    },
    {
      sentence: "The speakers are Ana Lopez, a doctor<b>;</b> Tom Reed, a teacher<b>;</b> and Li Wei, a chef.",
      why: "Each item already has a comma inside it (Ana Lopez, a doctor), so semicolons show where one item ends and the next one starts.",
    },
  ],

  pitfall: {
    wrong: "For the trip, bring: a coat, boots and a hat.",
    right: "For the trip, bring a coat, boots and a hat. · For the trip, bring three things<b>:</b> a coat, boots and a hat.",
    why: "Before a colon, you need a complete sentence. Bring is a verb that needs its object, so no colon goes after it. Add a noun like three things, or leave the colon out.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence uses a colon correctly?",
      options: [
        "You will need: a pen, a ruler and a calculator.",
        "You will need three things: a pen, a ruler and a calculator.",
        "You will need three things; a pen, a ruler and a calculator.",
      ],
      answer: 1,
      feedback:
        "You will need three things is a complete sentence, so a colon can introduce the list after it. You will need is not complete, because need has no object, so it can't have a colon after it. A semicolon doesn't introduce a list.",
    },
    {
      kind: "choice",
      stem: "Which sentence is punctuated correctly?",
      options: [
        "I can't come tonight; because I have to work late.",
        "I can't come tonight, I have to work late.",
        "I can't come tonight; I have to work late.",
      ],
      answer: 2,
      feedback:
        "Both parts are complete sentences, so a semicolon can join them: I can't come tonight; I have to work late. A comma alone can't join two sentences, and because already joins the two parts, so it doesn't need a semicolon before it.",
    },
    {
      kind: "choice",
      stem: "The list items have commas inside them. Which sentence is punctuated correctly?",
      options: [
        "This summer we're visiting Lisbon, Portugal; Lyon, France; and Turin, Italy.",
        "This summer we're visiting Lisbon, Portugal, Lyon, France and Turin, Italy.",
        "This summer we're visiting: Lisbon, Portugal; Lyon, France; and Turin, Italy.",
      ],
      answer: 0,
      feedback:
        "Each item has a comma inside it (Lisbon, Portugal), so we put semicolons between the items. With only commas, the reader can't see where each item ends. The sentence with visiting: has the right semicolons, but a colon can't go straight after the verb visiting.",
    },
    {
      kind: "mistake",
      tokens: ["The", "price", "includes:", "breakfast,", "dinner", "and", "a", "city", "tour."],
      wrongIndex: 2,
      correction: "includes",
      feedback:
        "The price includes is not a complete sentence, because includes needs its object. So no colon goes after it: The price includes breakfast, dinner and a city tour.",
    },
    {
      kind: "mistake",
      tokens: ["I", "love", "this", "city,", "there", "is", "always", "something", "to", "do."],
      wrongIndex: 3,
      correction: "city;",
      feedback:
        "I love this city and there is always something to do are two complete sentences, and a comma alone can't join them. A semicolon can: I love this city; there is always something to do. A full stop is also correct: I love this city. There is always something to do. So is a colon, because the second part says why.",
    },
  ],

  levelRationale:
    "The CEFR's B1 orthographic control descriptor says a learner's punctuation is accurate enough to be followed most of the time, and the spec (section 8) places colons and semicolons at B1 with commas. The English Grammar Profile does not cover punctuation. Only the basic uses are taught: a colon after a complete sentence before a list or an explanation, and a semicolon between two connected sentences or between list items that have commas. The topic comes after commas (order 41), because it builds on the rule that a comma alone can't join two sentences.",

  sourceNotes:
    "english_grammar.txt, # Punctuation: commas, colons and semicolons, ## The semicolon and ## Colons: the semicolon joining two related sentences that could stand alone, and the colon after a complete sentence before a list, agree with Swan. The note's example for the colon repeats its rule and has no colon in it, so the examples here are new. The note's colon before a definition is taught as a colon before an explanation. The semicolon in a list, the small letter after a colon or semicolon in British English, and not putting a colon straight after a verb or preposition are authored from Swan, Practical English Usage.",
};
