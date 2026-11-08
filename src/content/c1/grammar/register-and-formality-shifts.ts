import type { RuleTopic } from "../../schema";

export const registerAndFormalityShifts: RuleTopic = {
  slug: "register-and-formality-shifts",
  family: "register",
  title: "Register and formality shifts: We regret to inform you… / I'm sorry to say… / Bad news, I'm afraid…",
  summary: "We regret to inform you… I'm sorry to say… Bad news, I'm afraid… Say one message at three levels of formality, with the grammar and words to match.",
  level: "c1",
  category: "grammar",
  shape: "rule",
  order: 11,

  explanation: [
    "Remember: register means how formal or informal your words are. At B1, you chose a formal, neutral or informal phrase for a letter or a message. At C1, you change the grammar and the words of a whole message to fit it. The same bad news can sound very different: We regret to inform you that the event has been cancelled. (formal) I'm sorry to say that the event has been cancelled. (neutral) Bad news, I'm afraid: the event's off. (informal)",
    "Choose the register from two things: <b>the reader</b> and <b>the channel</b>, which means the way the message travels, like a letter, an email, a text message, a report or a chat. A letter from a bank to a customer is formal. An email to a colleague you work with every day is usually neutral. A text message to a friend is informal.",
    "<b>Formal English often uses nouns and the passive.</b> It uses nominalisation (order 7): We decided to close the office. → <b>The decision</b> to close the office … Remember: turning a verb or an adjective into a noun, so that an action or a quality becomes a thing, is called nominalisation. It also uses it + a passive verb + a that clause (order 3), which doesn't say who: <b>It has been decided that</b> the office will close. <b>It is recommended that</b> all staff attend. Remember: the past participle is the form of a verb that comes after have: seen, gone, finished.",
    "<b>Formal English often uses longer verbs</b>, many of them from Latin or French: <b>obtain</b> for get, <b>require</b> for need, <b>commence</b> for start, <b>purchase</b> for buy, <b>assist</b> for help, <b>inform</b> for tell. Commence is very formal: in most writing, start or begin is better. Formal writing also usually uses full forms, like will not and it is, and not short forms, like won't and it's (B1).",
    "<b>Informal English often uses phrasal verbs</b>: find out for discover, put off for postpone, sort out for solve. Remember: a phrasal verb is a verb and a small word, like up, off, on or out, that we use together, often with a new meaning. It uses short forms, everyday words like kids, stuff and a bit, and ellipsis. Remember: leaving out words that the listener can understand from what came before is called ellipsis. Sounds good. Want a lift? See you there. (= That sounds good. Do you want a lift? I'll see you there.) At B1, you met this in Hope you're well.",
    "A request can change in the same way: I would be grateful if you could send me the timetable. (formal) Could you send me the timetable, please? (neutral) Any chance you could send me the timetable? (informal) So can the start and the end of a reply: Thanks for your message. (informal) I look forward to hearing from you. (formal)",
    "Formal is not always better. A phrasal verb is right in a text to a friend, and Shall we commence at eight? would sound strange there. Choose the register for the reader and the channel, and keep it from the start to the end, as at B1: a formal letter that ends Cheers! sounds strange.",
  ].join("\n\n"),

  form: [
    "formal: We regret to inform you that … · neutral: I'm sorry to say that … · informal: Bad news, I'm afraid …",
    "choose for the reader and the channel (letter, email, text message, report, chat)",
    "formal grammar: nominalisation (order 7) · it + a passive verb + a that clause (order 3): It has been decided that …",
    "formal words: obtain · require · commence (very formal) · purchase · assist · inform · full forms: will not, it is",
    "informal: phrasal verbs (find out, put off, sort out) · short forms · everyday words (kids, stuff) · ellipsis: Sounds good.",
    "keep one register from the start to the end",
  ].join("\n"),

  examples: [
    {
      sentence: "Visitors are <b>required</b> to <b>obtain</b> a pass from reception.",
      why: "A notice is formal, so it uses the passive and the longer verbs <b>require</b> and <b>obtain</b>. In speech: You need to get a pass from reception.",
    },
    {
      sentence: "<b>It has been agreed that</b> the meeting will be moved to Monday.",
      why: "It + a passive verb + a that clause (order 3) doesn't say who agreed, so it suits formal minutes. To a colleague: We've moved the meeting to Monday.",
    },
    {
      sentence: "Can you <b>find out</b> what time the film starts?",
      why: "A phrasal verb and a short question suit a chat with a friend. Discover or ascertain would sound far too formal here.",
    },
    {
      sentence: "<b>The closure of</b> the factory <b>was announced</b> on Monday.",
      why: "The noun <b>closure</b> (from close) and the passive make the news report formal and impersonal. In conversation: They said on Monday that they're closing the factory.",
    },
    {
      sentence: "Got your message. <b>Sounds good</b>. See you at eight!",
      why: "Ellipsis (I've got, That sounds) and a short, friendly ending make this informal, for a text to a friend.",
    },
  ],

  pitfall: {
    wrong: "Dear Ms Grant, I'm writing to find out about the job. Talk soon!",
    right: "Dear Ms Grant, I am writing to <b>enquire</b> about the position. I look forward to hearing from you.",
    why: "A letter to someone you don't know needs one formal register from the start to the end: full forms, a formal verb, and a formal ending.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "You are writing a formal letter from a bank to a customer you have never met. Which sentence has the formal register that this letter needs?",
      options: [
        "Bad news, I'm afraid: your loan's been turned down.",
        "Sorry, but we can't give you the loan.",
        "No loan this time, sorry!",
        "We regret to inform you that your loan application has been unsuccessful.",
      ],
      answer: 3,
      feedback:
        "We regret to inform you that … is formal, with full forms and the formal noun application, so it suits a bank's letter. The others use short forms and everyday words: they are informal, or too direct for a customer you don't know.",
    },
    {
      kind: "choice",
      stem: "You are sending a text message to a close friend. You can't come to her party tonight. Which message fits?",
      options: [
        "So sorry, can't make it tonight! Have fun!",
        "I regret that I shall be unable to attend this evening's celebration.",
        "Please accept my apologies for my absence this evening.",
        "I wish to inform you that I will not be attending.",
      ],
      answer: 0,
      feedback:
        "A text to a close friend is informal, so So sorry, can't make it tonight! fits, with ellipsis (I'm, I) and an exclamation mark. The other three are formal, and they would sound cold or strange to a friend.",
    },
    {
      kind: "gap",
      stem: "A formal notice: All visitors ___ a valid ticket. (Write the formal verb for need.)",
      answers: ["require"],
      feedback:
        "Require is the formal verb for need: All visitors require a valid ticket. Need is also correct, and it is more usual in conversation and in most everyday writing.",
    },
    {
      kind: "gap",
      stem: "Informal: Sorry, we won't be able to come to the ceremony. → Formal: Unfortunately, we ___ be able to attend the ceremony. (Write won't in full.)",
      answers: ["will not"],
      feedback:
        "Formal writing uses full forms, so we write will not: Unfortunately, we will not be able to attend the ceremony. Won't is fine in speech and in informal writing.",
    },
    {
      kind: "gap",
      stem: "Informal: We've decided to close the office on Fridays. → Formal: It ___ decided that the office will close on Fridays. (Write two words: the present perfect passive.)",
      answers: ["has been"],
      feedback:
        "It + a passive verb + a that clause (order 3) doesn't say who decided, so it suits formal writing: It has been decided that the office will close on Fridays. In speech, It's been decided is also correct.",
    },
    {
      kind: "mistake",
      tokens: ["Dear", "Sir", "or", "Madam,", "I", "am", "writing", "to", "enquire", "about", "your", "evening", "courses.", "Cheers,", "Anna", "Novak"],
      wrongIndex: 13,
      correction: "Yours faithfully,",
      feedback:
        "A letter that starts Dear Sir or Madam is formal, so it can't end with Cheers, which is informal. In British English, it ends Yours faithfully. If you know the name (Dear Ms Lee), use Yours sincerely; in American English, Sincerely is usual.",
    },
    {
      kind: "mistake",
      tokens: ["The", "committee's", "report", "concludes", "that", "the", "policy", "has", "significantly", "benefited", "kids", "in", "rural", "areas."],
      wrongIndex: 10,
      correction: "children",
      feedback:
        "A committee's report is formal, so it needs children, not the informal kids: The committee's report concludes that the policy has significantly benefited children in rural areas. Kids is fine in conversation.",
    },
  ],

  levelRationale:
    "The spec (section 8) places register and formality shifts at C1, and the plan makes it the C1 topic of the register family, after B1 formal-and-informal-register, whose definition of register it reuses word for word as a Remember line and whose rules it keeps: full forms in formal writing, short forms and a missing first word in informal writing, and one register from the start to the end. The CEFR's C1 descriptors for sociolinguistic appropriateness say a learner can use language flexibly and effectively for social purposes and can adjust to a change in register, and the English Grammar Profile records it + a passive verb + a that clause, nominalisation and a wide range of formal and informal structures in writing at C1, so the shift of a whole message, not just one phrase, sits here. It builds on impersonal constructions (order 3) and nominalisation (order 7), as the plan's order dependencies require. Register, nominalisation, phrasal verb, ellipsis and past participle reuse their earlier wording. The labelled phrases keep the labels that A1-B2 phrases topics give them (We regret to inform you formal, as in B2 breaking-bad-news; I would be grateful if you could formal, Could you send me the timetable, please? neutral, Any chance you could informal, I look forward to hearing from you formal and Thanks for your message informal, as in B1 formal-and-informal-register), and a test pins this. Following the sweep risk, each choice item names the reader and the channel, so only one option fits. Following the lesson on register cues, each gap's stem asks for formal written English and names the form, and its feedback says that the other form is correct in speech. The mistake items were checked for a second fix and frame-word swaps: Dear Sir or Madam, I am and enquire all mark the letter as formal, so only Cheers can change; committee's, report, concludes, significantly and benefited all mark the report as formal, so no single swap makes kids fit.",

  sourceNotes:
    "english_grammar.txt, # Formal and informal phrases and # Polite vs direct (extended here). The phrase lists are taught at B1 and are not repeated; B1 already notes that 'I would appreciate if you could' is missing it, that 'Could you send me your brochure?' is neutral, not formal, and that 'This just a note' is missing is, and this topic agrees. Its 'I apologize' uses -ize, which is also correct; the site uses -ise. # Polite vs direct contrasts I'm afraid not and I'm sorry, but with the more direct No, it's not; its 'Excuse me, I wonder if you would mind not' has no verb at the end (not smoking, as # Indirect and direct questions shows). The three-register contrast is authored from Swan, Practical English Usage, entries formality (formal and informal vocabulary, with longer words often of Latin or French origin in formal style), contractions (not usual in formal writing), phrasal verbs (often informal, with a one-word formal equivalent), ellipsis in informal speech (Sounds good, Want a lift?), and the notes on letters (Yours faithfully after Dear Sir or Madam, Yours sincerely after a name, Sincerely in American English). kid as informal for child follows the Oxford Advanced Learner's Dictionary. It + a passive verb + a that clause follows order 3, and nominalisation follows order 7.",
};
