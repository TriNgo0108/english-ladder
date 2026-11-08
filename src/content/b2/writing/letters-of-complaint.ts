import type { PhraseTopic } from "../../schema";

export const lettersOfComplaint: PhraseTopic = {
  slug: "letters-of-complaint",
  family: "letters",
  title: "Letters of complaint: I am writing to complain about…",
  summary: "Something went wrong and you want it fixed. State the problem, give the details, say what you want and close firmly, but always politely.",
  level: "b2",
  category: "writing",
  shape: "phrases",
  order: 25,

  explanation: [
    "A letter of complaint tells a company or an organisation that something went wrong, and says what you want them to do about it. It can be a paper letter or an email. It is usually formal. Remember: register means how formal or informal your words are. Use the plan from B1 letter structure: the greeting, the reason for writing, the main points, a request, a closing line and the sign-off.",
    "<b>State the problem</b> in the first sentence: I am writing to complain about the service I received at your Leeds shop. After complain about, use a noun: the service, my order, the delay.",
    "<b>Give the details</b>: what you bought or booked, when, and what went wrong. Use the past simple, and give dates, numbers and names: On 12 March, I ordered a washing machine from your website. Unfortunately, it arrived two weeks late. Unfortunately is a polite way to introduce bad news. If you have already complained, say what happened: When I phoned your customer service line, the assistant was not very helpful. These sentences are neutral, so they fit in a formal letter and in an email.",
    "<b>Say what you want</b>: a refund (your money back), a replacement (a new one), a repair, or an apology. Be clear and polite: I would like a full refund. I would be grateful if you could repair the machine. Send copies of documents, not the originals: I enclose a copy of the receipt. In an email, write Please find attached… (B1).",
    "<b>Close firmly.</b> Say when you expect an answer, and what you will do if you don't get one: I look forward to receiving a full refund within fourteen days. Take the matter further means complain to someone with more power, like a senior manager, an official organisation or a lawyer. After I have no choice but, use to + the base form: I will have no choice but to take the matter further. Remember: the base form is the verb as you see it in a dictionary, with nothing added.",
    "Stay calm and formal, even when you are angry. Rude or angry words (This is a disaster! Give me my money now!) usually make the reader less willing to help. As in any formal letter, use full forms, like I am and do not, and no exclamation marks (!).",
    "Sign off as in B1 letter structure. In British English, the sign-off usually matches the greeting: after Dear Sir or Madam, end with Yours faithfully, and after Dear + a name, like Dear Mr Hughes, end with Yours sincerely. American English usually uses Sincerely in both cases.",
    "When you complain in person, in a shop or a restaurant, the register is usually neutral: Excuse me, I'm afraid there's a problem with this jacket. I'm afraid makes bad news sound softer.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Giving the reason for writing",
      phrases: ["I am writing to complain about the service I received at your Leeds shop.", "I am writing to complain about a delay to my order."],
      register: "formal",
    },
    {
      situation: "Giving the details",
      phrases: [
        "On 12 March, I ordered a washing machine from your website.",
        "Unfortunately, it arrived two weeks late, and the door was broken.",
        "When I phoned your customer service line, the assistant was not very helpful.",
      ],
      register: "neutral",
    },
    {
      situation: "Saying what you want",
      phrases: [
        "I would like a full refund.",
        "I would be grateful if you could repair or replace the machine.",
        "I would appreciate it if you could look into this matter.",
      ],
      register: "formal",
    },
    {
      situation: "Sending documents with the letter",
      phrases: ["I enclose a copy of the receipt and a photo of the damage.", "Please find attached a copy of my booking confirmation."],
      register: "formal",
    },
    {
      situation: "A firm closing line",
      phrases: [
        "I look forward to receiving a full refund within fourteen days.",
        "Unless I receive a reply by 30 April, I will have no choice but to take the matter further.",
        "I trust that you will deal with this matter quickly.",
      ],
      register: "formal",
    },
    {
      situation: "Signing off after Dear Sir or Madam (British)",
      phrases: ["Yours faithfully,"],
      register: "formal",
    },
    {
      situation: "Signing off after Dear + a name (British)",
      phrases: ["Yours sincerely,"],
      register: "formal",
    },
    {
      situation: "Complaining in person, in a shop",
      phrases: ["Excuse me, I'm afraid there's a problem with this jacket.", "I bought it here last week, and the zip has broken.", "Could I have a refund, please?"],
      register: "neutral",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence is the best firm but polite close for a letter of complaint?",
      options: [
        "Give me my money back now!",
        "If the problem is not solved by the end of the month, I will take the matter further.",
        "No worries if you can't help.",
        "Hope to hear from you soon!",
      ],
      answer: 1,
      feedback:
        "A firm close says what you will do next, in a formal and polite way: I will take the matter further. Give me my money back now! is rude. No worries if you can't help is informal and weak, and Hope to hear from you soon! is informal, for friends.",
    },
    {
      kind: "choice",
      stem: "Your new phone stopped working after a week, and you want your money back. Which sentence says this clearly and politely?",
      options: ["I would like a full refund.", "I want my money now!", "Maybe you could give me some money, or something?"],
      answer: 0,
      feedback:
        "I would like a full refund is clear, polite and formal. I want my money now! sounds rude, and Maybe… or something? is informal and not clear about what you want.",
    },
    {
      kind: "gap",
      stem: "Dear Sir or Madam, I am writing to ___ about the poor service at your hotel last weekend. (one word: say that you are not happy)",
      answers: ["complain", "protest"],
      feedback:
        "I am writing to complain about… states the problem in the first sentence. After to, use the base form: complain, not complaint (the noun) or complaining. Protest about is also correct, but it is stronger, and complain is much more usual.",
    },
    {
      kind: "wordbank",
      prompt: "The chair you ordered arrived broken. Put the words in order to ask for a new one, quickly.",
      words: ["possible.", "a", "would", "as", "replacement", "I", "soon", "like", "as"],
      answer: "I would like a replacement as soon as possible.",
      feedback:
        "A replacement is a new one, to replace the broken one. I would like… is polite and clear, and as soon as possible says that you want it quickly.",
    },
    {
      kind: "mistake",
      tokens: ["I", "am", "afraid", "that", "I", "will", "have", "no", "choice", "but", "to", "contacting", "a", "lawyer."],
      wrongIndex: 11,
      correction: "contact",
      feedback:
        "After no choice but, use to + the base form: I am afraid that I will have no choice but to contact a lawyer. Here to is part of the infinitive, not a preposition, so it is not followed by -ing.",
    },
    {
      kind: "choice",
      stem: "Your letter of complaint starts Dear Mr Hughes. How do you usually sign off in British English?",
      options: ["Yours faithfully,", "Cheers,", "Yours sincerely,", "Lots of love,"],
      answer: 2,
      feedback:
        "In British English, the sign-off usually matches the greeting: after Dear + a name, like Dear Mr Hughes, end with Yours sincerely. Yours faithfully goes after Dear Sir or Madam. Cheers and Lots of love are for friends and family.",
    },
  ],

  levelRationale:
    "The CEFR's B2 descriptors for correspondence include writing letters that express a point of view and give reasons, and the B2 formal writing tasks include a letter of complaint that states a problem, gives details and asks for action, in a register that suits the reader. The spec (section 8) places letters of complaint at B2, and this is the letters family's B2 topic after B1 letter-structure. It keeps B1's plan, its British rule for Yours faithfully and Yours sincerely (with the same hedge, usually), and its American Sincerely. The grammar is from A1 to B2: the past simple for the details, would and could for requests, and no choice but to + the base form.",

  sourceNotes:
    "english_grammar.txt, # Phrases from letters of complaint gives I'm writing to complain about, When I talked to the shop assistant, he wasn't very helpful, Unfortunately, this wasn't possible, I enclose…, Please send me… and I'm afraid I had no choice but to. These agree with Swan, Practical English Usage, and their ideas are used, in full forms, because the letter is formal. The note has errors: 'I enclose a full refund' should be I enclose a copy of the receipt (the customer sends documents, not a refund), and 'Please send me a the receipt' has two articles. Its 'I'm writing to complain about.' needs a noun after about. I would appreciate it if you could, take the matter further, I trust that…, replacement and refund, and the British sign-off rule, are checked against Swan; the sign-off rule and its hedge agree with B1 letter-structure.",
};
