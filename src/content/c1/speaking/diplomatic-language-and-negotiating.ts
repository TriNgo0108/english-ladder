import type { PhraseTopic } from "../../schema";

export const diplomaticLanguageAndNegotiating: PhraseTopic = {
  slug: "diplomatic-language-and-negotiating",
  title: "Diplomatic language and negotiating: That might be difficult, If you could…, we'd be prepared to…",
  summary: "Make a problem sound smaller, ask for more without pushing, offer something in return with If you could…, and say no without closing the door.",
  level: "c1",
  category: "speaking",
  shape: "phrases",
  order: 18,

  explanation: [
    "In a <b>negotiation</b>, two sides talk until they reach an agreement, for example about a price, a deadline or a contract. <b>Diplomatic</b> language says difficult things in a way that keeps a good relationship. It is clear about the main point, but soft in the way it says it. Remember: register means how formal or informal your words are. Most of these phrases are neutral. In a letter, an email or a meeting with an important client, the formal ones are better.",
    "<b>Soften a problem with a modal verb.</b> Remember: a modal verb is a small verb that goes before the base form of another verb and adds a meaning to it. That will be difficult. → <b>That might be difficult.</b> That's a problem. → <b>That could be a problem for us.</b> As in order 1, might and could say that something is possible, not sure, so the problem sounds smaller. Both sides usually understand that it is a real problem.",
    "<b>Soften it with a hedge.</b> Remember: making a statement less strong or less sure is called hedging. Use the hedges from B2 hedging, and small words like <b>slightly</b>, <b>a little</b> and <b>a bit</b> (informal): The price is <b>slightly</b> higher than we expected. <b>It seems to me that</b> the deadline is rather tight. A negative with a positive word is softer than a negative word: The delivery date <b>isn't ideal</b> (= it's bad). We're <b>not very happy</b> with the terms.",
    "<b>Ask, don't demand.</b> Use the polite questions from B1 indirect and polite questions: <b>Would it be possible to</b> extend the deadline? <b>Could you possibly</b> bring the price down a little? These are neutral. As in B1, <b>I was wondering if</b> you could … is very polite, for a manager or a client, and it is not a question, so it ends with a full stop: I was wondering if you could send us a revised offer.",
    "<b>Make a conditional offer.</b> Offer something, but only in return for something: <b>If you could</b> + the base form, <b>we'd be prepared to</b> + the base form: If you could pay within thirty days, we'd be prepared to offer a five per cent discount. This is like the second conditional (B1): could means would be able to, and prepared to means willing to. <b>As long as</b> and <b>provided that</b> + the present simple set a condition for the future: We could offer free delivery, as long as you buy 500 units. Provided that is more formal. <b>What if we</b> + the past simple (order 2) suggests an idea without pushing it: What if we extended the contract to two years?",
    "<b>Say no politely.</b> A direct no can end a negotiation. Say it softly, and leave room to keep talking: <b>I'm not sure we can go that far.</b> That would be quite difficult for us. We'd struggle to meet that deadline. In formal English: <b>I'm afraid that is not something we can agree to.</b> Unfortunately, we are not in a position to accept those terms.",
    "<b>Move towards agreement.</b> <b>Could we meet each other halfway?</b> Meet halfway means each side gives up part of what it wants. <b>Let's see if we can find some middle ground.</b> I think we can work with that. Don't use so many softeners that the other side can't tell what you mean: be soft in the words, but clear in the message.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Softening a problem",
      phrases: [
        "That might be difficult.",
        "That could be a problem for us.",
        "The price is slightly higher than we expected.",
        "The delivery date isn't ideal.",
      ],
      register: "neutral",
    },
    {
      situation: "Asking for something diplomatically",
      phrases: ["Would it be possible to extend the deadline?", "Could you possibly bring the price down a little?"],
      register: "neutral",
    },
    {
      situation: "Asking very politely, for example to an important client",
      phrases: ["I was wondering if you could send us a revised offer.", "I was wondering whether you might consider a longer contract."],
      register: "formal",
    },
    {
      situation: "Making a conditional offer",
      phrases: [
        "If you could pay within thirty days, we'd be prepared to offer a five per cent discount.",
        "We could offer free delivery, as long as you buy 500 units.",
        "What if we extended the contract to two years?",
      ],
      register: "neutral",
    },
    {
      situation: "Making a conditional offer in writing",
      phrases: ["Provided that payment is received by 1 June, we would be willing to waive the fee."],
      register: "formal",
    },
    {
      situation: "Saying no politely",
      phrases: ["I'm not sure we can go that far.", "That would be quite difficult for us.", "We'd struggle to meet that deadline."],
      register: "neutral",
    },
    {
      situation: "Saying no formally",
      phrases: ["I'm afraid that is not something we can agree to.", "Unfortunately, we are not in a position to accept those terms."],
      register: "formal",
    },
    {
      situation: "Moving towards an agreement",
      phrases: ["Could we meet each other halfway?", "Let's see if we can find some middle ground.", "I think we can work with that."],
      register: "neutral",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "A client asks for a twenty per cent discount. You can't give that much, but you want to keep the client and keep talking. What do you say?",
      options: [
        "No. That's a ridiculous request.",
        "Sure, no problem!",
        "Whatever you think is best.",
        "I'm not sure we can go that far, but we could look at ten per cent.",
      ],
      answer: 3,
      feedback:
        "I'm not sure we can go that far says no softly, and the second part keeps the negotiation open. No. That's a ridiculous request. is rude and ends the talk. Sure, no problem! and Whatever you think is best agree to a discount that you can't give.",
    },
    {
      kind: "choice",
      stem: "You will give free delivery, but only if the customer orders at least 100 boxes. Which sentence makes this offer?",
      options: [
        "We'd be prepared to offer free delivery if you could order at least 100 boxes.",
        "Free delivery is impossible, I'm afraid.",
        "We offered free delivery to all our customers last year.",
        "Could you order 100 boxes?",
      ],
      answer: 0,
      feedback:
        "We'd be prepared to … if you could … is a conditional offer: you give something in return for something. Free delivery is impossible says no. The past simple offered is about last year, not about this deal, and Could you order 100 boxes? asks for something but offers nothing.",
    },
    {
      kind: "gap",
      stem: "If you could sign the contract this week, we'd be ___ to cover the cost of training. (a form of the word prepare, one word)",
      answers: ["prepared"],
      feedback:
        "Be prepared to + the base form means be willing to: we'd be prepared to cover the cost of training. Use the adjective prepared, not the verb prepare or the noun preparation.",
    },
    {
      kind: "gap",
      stem: "Your price is ___ higher than our budget, so we'd need a small discount. (a form of the word slight, one word)",
      answers: ["slightly"],
      feedback:
        "Slightly is the adverb: it goes before the comparative higher and makes the difference sound small. Slight is the adjective, as in a slight difference.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to ask for more time, diplomatically.",
      words: ["possible", "the", "Friday?", "it", "to", "deadline", "move", "be", "Would", "to"],
      answer: "Would it be possible to move the deadline to Friday?",
      feedback:
        "Would it be possible to + the base form …? asks for something politely, as in B1 indirect and polite questions. It sounds softer than Move the deadline to Friday or Can we have more time?",
    },
    {
      kind: "mistake",
      tokens: ["We", "can", "offer", "free", "delivery,", "as", "long", "as", "payment", "will be", "received", "by", "1", "June."],
      wrongIndex: 9,
      correction: "is",
      feedback:
        "After as long as, use the present simple for the future, as after if: We can offer free delivery, as long as payment is received by 1 June. The same is true after provided that.",
    },
  ],

  levelRationale:
    "The CEFR's C1 descriptors for sociolinguistic appropriateness say a learner can use language flexibly and effectively for social purposes, and the Companion Volume's C1 descriptors for facilitating communication in delicate situations and disagreements include presenting a position diplomatically and helping the sides move towards agreement. The B2 descriptors for goal-oriented cooperation already include outlining an issue and negotiating, so at C1 the focus is on diplomacy: softening, conditional offers and refusing without closing the door. The spec (section 8) places diplomatic language and negotiating at C1 with no family. It builds on order 1 (might and could for possibility), order 2 (what if + the past), B2 hedging, the B1 second conditional, and B1 indirect and polite questions, whose labels it keeps: Would it be possible to…? and Could you possibly…? neutral, I was wondering if… formal and ending with a full stop. The English Grammar Profile records the present simple after as long as and provided for a future condition at B2 (my best reading of the profile, not a checked list); modal verb, hedging and register reuse their earlier wording.",

  sourceNotes:
    "english_grammar.txt, # Polite vs direct, contrasts I'm afraid not, I'm sorry, but and Do you think we could possibly move? with the more direct No, it's not and Could we move, and # Statements has softened statements (It's a little bit sensitive, but I'm sure we can sort it out, I'm a little worried that…, That could work. But what happens if?, Well, no I'm afraid I don't think so). These agree with Swan, Practical English Usage, and their softening is used, with new sentences. The note's 'Excuse me, I wonder if you would mind not' needs a verb after not. ## Polite statement gives blunt sentences to soften (Your sales were not high this year); the softening patterns follow Swan, entries politeness (distancing with modals and past tenses, softening expressions, negatives with positive words like not very), provided and as long as (present tense for the future), and suppose / what if. Meet halfway, middle ground and be in a position to are unlabelled in the learner dictionaries as I know them; waive and not in a position to are used only in the formal situations.",
};
