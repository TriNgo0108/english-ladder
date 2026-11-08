import type { RuleTopic } from "../../schema";

export const punctuationForRhetoricalEffect: RuleTopic = {
  slug: "punctuation-for-rhetorical-effect",
  family: "punctuation",
  title: "Punctuation for rhetorical effect: dashes, colons, semicolons, three dots",
  summary: "Use a dash for an aside or a pause, a colon for a reveal, a semicolon for balance, three dots to trail off, and exclamation marks rarely.",
  level: "c1",
  category: "mechanics",
  shape: "rule",
  order: 21,

  explanation: [
    "At B1 you learned the main jobs of commas, colons and semicolons, and those rules don't change here. At C1, you can also choose punctuation for its <b>effect</b>: to make the reader pause, to hold back a surprise until the end, or to set two ideas side by side. Remember: a rhetorical device is a way of using words that makes a talk or a piece of writing more persuasive, or easier to remember. In writing, punctuation can do some of the work that the voice does in a talk (order 20). Use these effects now and then: on every line, they lose their power.",
    "<b>The dash.</b> A <b>dash</b> (–) is a short line between two words, longer than the hyphen in a three-year contract (order 8). In British English, it usually has a space on each side, like this: before – after. In American English, writers usually use a longer dash with no spaces. Dashes are more common in informal writing, so use them with care in formal writing. A dash does two jobs.",
    "First, a pair of dashes can go around an <b>aside</b>: an extra comment that interrupts the sentence. My brother <b>–</b> who never cooks <b>–</b> made dinner for ten people. Like the pair of commas around extra information at B1, you can take the aside out and the sentence still makes sense: My brother made dinner for ten people. Dashes make the aside stand out more than commas do. An aside in the middle needs two dashes, one before it and one after it: don't open it with a dash and close it with a comma. At the end of a sentence, one dash is enough, because the full stop closes the aside.",
    "Second, a single dash makes the reader pause before a final point, often a surprise: We waited two hours for our table, and then the food arrived <b>–</b> cold.",
    "<b>The colon.</b> As at B1, a colon comes after a complete sentence, and the part after it explains or completes the first part. A writer can use this for a <b>reveal</b>: the first part makes the reader wait, and the key fact comes last, after the colon. After months of tests, the team finally found the problem<b>:</b> a single missing line of code. As at B1, the word after a colon usually has a small letter in British English. In informal writing, a dash can do a similar job: There was only one problem – the price. In formal writing, the colon is usually the better choice. As at B1, a colon doesn't come straight after a verb before a list or a reveal: The problem was the price, not The problem was: the price.",
    "<b>The semicolon.</b> As at B1, a semicolon joins two complete sentences that are closely connected. It is good for a <b>balanced contrast</b>: two halves with the same shape and opposite ideas, like the contrast pairs of order 20. The first half of the match was dull<b>;</b> the second half was unforgettable. A full stop is also correct, but it splits the idea into two sentences. The semicolon holds the two halves together, so the reader sees them as one idea. Each half must still be a complete sentence, and as at B1, no semicolon goes before because.",
    "<b>Three dots (…).</b> Three dots at the end show a thought that trails off: the writer stops before the end, and the reader fills in the rest. They are common in dialogue, stories and informal messages: I'd love to come, but<b>…</b> Well<b>…</b> I'm not so sure. Use three dots, usually with no extra full stop after them. The mark is also called an ellipsis, because words are left out. Remember: leaving out words that the listener can understand from what came before is called ellipsis. In formal writing, three dots are used mainly to show that words have been left out of a quotation, not for a pause.",
    "<b>The rhetorical question.</b> Remember: a rhetorical question is a question that we ask for effect, to make a point, not to get an answer. No answer is expected, but it is still a question, so in writing it usually ends with a question mark, not a full stop: Can we really afford to wait another ten years<b>?</b>",
    "<b>The exclamation mark.</b> As at A1, an exclamation mark (!) shows strong feeling, and its power comes from being rare. As at B1, formal writing, such as a report, an essay or a formal letter, usually has no exclamation marks. In informal writing, one now and then is fine: We won! But one at the end of every sentence, or two or three together (!!!), makes the writing sound as if it is shouting, and the reader takes it less seriously. Two or more together are never used in formal writing. To make a point strong, choose strong words, put the key word at the end, or use a colon or a dash, instead of adding exclamation marks.",
  ].join("\n\n"),

  form: [
    "aside in the middle: … – extra comment – … · two dashes, one before and one after",
    "aside or surprise at the end: … – final point. · one dash",
    "British: a space on each side of the dash · American: usually a longer dash, no spaces",
    "complete sentence + : + reveal or explanation · not straight after a verb",
    "complete sentence ; complete sentence with the same shape · balanced contrast · a full stop is also correct",
    "… at the end: a thought that trails off · three dots, usually no extra full stop",
    "rhetorical question → usually ?, not a full stop",
    "! → usually none in formal writing · never !! in formal writing · one now and then in informal writing",
  ].join("\n"),

  examples: [
    {
      sentence: "The meeting <b>–</b> the third one this week <b>–</b> went on until seven.",
      why: "The third one this week is an aside, so a pair of dashes goes around it, one before and one after. Without it, the sentence still makes sense: The meeting went on until seven.",
    },
    {
      sentence: "We searched the whole house for my keys, and in the end we found them <b>–</b> in my coat pocket.",
      why: "One dash makes the reader pause before the surprise at the end. The full stop closes it, so no second dash is needed.",
    },
    {
      sentence: "The survey found one clear reason for the drop in sales<b>:</b> higher prices.",
      why: "The first part is a complete sentence that makes the reader wait. The colon then reveals the reason, with a small letter after it. This suits formal writing.",
    },
    {
      sentence: "Some people work to live<b>;</b> others live to work.",
      why: "Two complete sentences with the same shape and opposite ideas: a balanced contrast. The semicolon keeps them together as one idea. A full stop would also be correct, but it would split them.",
    },
    {
      sentence: "I could ask him for help, but<b>…</b>",
      why: "The three dots show that the thought trails off. The reader can guess the rest: but I don't want to.",
    },
    {
      sentence: "Do we really want our children to grow up like this<b>?</b>",
      why: "This is a rhetorical question: the writer doesn't expect an answer. It is still a question, so it ends with a question mark.",
    },
  ],

  pitfall: {
    wrong: "The new plan – if it works, will save us a lot of money.",
    right: "The new plan <b>–</b> if it works <b>–</b> will save us a lot of money. · The new plan<b>,</b> if it works<b>,</b> will save us a lot of money.",
    why: "If it works is an aside in the middle of the sentence, so it needs a matching pair: two dashes or two commas. Don't open an aside with a dash and close it with a comma.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "The writer wants to add an aside in the middle of the sentence, between two dashes. Which sentence is punctuated correctly?",
      options: [
        "Our new director – a former footballer, as it happens, starts on Monday.",
        "Our new director – a former footballer, as it happens – starts on Monday.",
        "Our new director: a former footballer, as it happens – starts on Monday.",
        "Our new director; a former footballer, as it happens; starts on Monday.",
      ],
      answer: 1,
      feedback:
        "An aside in the middle of a sentence needs a pair of dashes, one before it and one after it: Our new director – a former footballer, as it happens – starts on Monday. Opening with a dash and closing with a comma, or with a colon, doesn't make a pair. A semicolon joins two complete sentences, and our new director is not one.",
    },
    {
      kind: "mistake",
      tokens: ["The", "one", "thing", "missing", "from", "the", "party", "was:", "the", "host."],
      wrongIndex: 7,
      correction: "was",
      feedback:
        "The one thing missing from the party was is not a complete sentence, because was needs the words after it. So, as at B1, no colon goes straight after the verb: The one thing missing from the party was the host. To keep the reveal, make the first part complete: Only one person was missing from the party: the host.",
    },
    {
      kind: "choice",
      stem: "In a formal report, the writer wants to hold back the cause until the end of the sentence, like a reveal. Which sentence is punctuated correctly?",
      options: [
        "The investigation found a single cause of the delays; a shortage of trained staff.",
        "The investigation found a single cause of the delays a shortage of trained staff.",
        "The investigation found: a single cause of the delays, a shortage of trained staff.",
        "The investigation found a single cause of the delays: a shortage of trained staff.",
      ],
      answer: 3,
      feedback:
        "The first part is a complete sentence, so a colon can reveal the cause after it: The investigation found a single cause of the delays: a shortage of trained staff. A semicolon needs a complete sentence after it too, and a shortage of trained staff is not one. Without any mark, the two parts run together. A colon can't come straight after the verb found.",
    },
    {
      kind: "choice",
      stem: "A speechwriter wants two halves with the same shape and opposite ideas, joined in one sentence. Which sentence uses the semicolon correctly?",
      options: [
        "Last year we talked; this year we must act.",
        "Last year we talked; because this year we must act.",
        "Last year; we talked, this year we must act.",
        "Last year we talked; this year.",
      ],
      answer: 0,
      feedback:
        "Last year we talked and this year we must act are two complete sentences with the same shape, so a semicolon can hold them together as a balanced contrast. No semicolon goes before because, a semicolon can't split last year from its sentence, and this year alone is not a complete sentence.",
    },
    {
      kind: "mistake",
      tokens: ["Why", "would", "anyone", "want", "to", "live", "like", "this."],
      wrongIndex: 7,
      correction: "this?",
      feedback:
        "Why would anyone want to live like this? is a rhetorical question: the writer doesn't expect an answer. But it is still a question, so it ends with a question mark, not a full stop.",
    },
    {
      kind: "choice",
      stem: "In a short story, Leo starts to make an offer, then stops, unsure, and leaves the thought unfinished. Which line shows his thought trailing off?",
      options: [
        "I suppose I could lend you the money, but.",
        "I suppose I could lend you the money, but:",
        "I suppose I could lend you the money, but…",
        "I suppose I could lend you the money; but",
      ],
      answer: 2,
      feedback:
        "Three dots at the end show a thought that trails off, and the reader fills in the rest: I suppose I could lend you the money, but… A sentence can't end with but and a full stop. A colon needs something after it, and a line with no mark at the end isn't finished.",
    },
    {
      kind: "mistake",
      tokens: ["Dear", "Ms", "Patel,", "I", "am", "pleased", "to", "offer", "you", "the", "post", "of", "senior", "editor!!", "Yours", "sincerely,", "Mark", "Lee"],
      wrongIndex: 13,
      correction: "editor.",
      feedback:
        "This is a formal letter (Dear Ms Patel, Yours sincerely), and formal writing usually has no exclamation marks; two together are never used in formal writing. End the sentence with a full stop: I am pleased to offer you the post of senior editor. The words already carry the good news.",
    },
  ],

  levelRationale:
    "The English Grammar Profile covers grammar, not punctuation, so it has no punctuation points, and the level follows the CEFR and the spec (section 8). The CEFR's C1 orthographic control descriptor says layout, paragraphing and punctuation are consistent and helpful, and choosing punctuation for its effect on the reader is part of that. The spec places punctuation for rhetorical effect at C1, in the punctuation family after A1 capital-letters-and-full-stops and B1 commas, and the topic keeps every B1 rule from commas and colons-and-semicolons: a colon after a complete sentence and not straight after a verb, a small letter after it in British English, a semicolon between two complete sentences and not before because, and a full stop always correct in place of a semicolon. It comes after rhetorical devices (order 20), whose definition of a rhetorical question it reuses word for word, and whose contrast pairs it links to the semicolon. Because a typed gap can't test punctuation, every item is a choice or a mistake item, with the mark attached to its word. Following Review Focus 4, no choice item offers both a dash and a colon where both would work, or both a semicolon and a full stop: the dash item needs a pair in the middle of the sentence, which a colon can't make; the colon item is in a formal report and offers no dash; and the semicolon item asks for one sentence and offers no full stop. The three-dots item offers no dash, because a dash can also show speech that is cut off. Each mistake item was checked for a second fix: in The one thing missing from the party was: the host, no other word can be changed to make the part before the colon complete; in Why would anyone want to live like this., deleting or swapping why or would leaves either a question or a broken sentence, so the end mark is the only fix; and in the letter, only editor!! is wrong.",

  sourceNotes:
    "english_grammar.txt, # Punctuation: commas, colons and semicolons, ## The semicolon: joining two related sentences that could stand alone (It was the moment we'd all been waiting for; she had come home at last.) agrees with Swan, and is used here for balanced contrast. ## Colons: the colon after a complete sentence and the colon before a definition (taught at B1 as an explanation) agree with Swan; the reveal is the same use, with the key fact held back. The note has no section on the dash, three dots, the question mark after a rhetorical question or the exclamation mark (a new point in spec section 8), so those are authored from Swan, Practical English Usage, punctuation entries: dashes (common in informal writing; a pair of dashes for an aside, like brackets; one dash before an afterthought or a surprise), dots (three dots for words left out or an unfinished sentence), question marks, and exclamation marks (after exclamations; several together only in informal writing). The spaced en dash as British style and the unspaced longer dash as American style follow New Hart's Rules (Oxford) and The Chicago Manual of Style; the site's text already uses the en dash character (A1–B2). The rhetorical question, rhetorical device and ellipsis reuse their earlier wording.",
};
