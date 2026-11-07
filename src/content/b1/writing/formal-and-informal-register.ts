import type { PhraseTopic } from "../../schema";

export const formalAndInformalRegister: PhraseTopic = {
  slug: "formal-and-informal-register",
  family: "register",
  title: "Formal and informal register: I would be grateful… or Could you do me a favour?",
  summary: "Say the same thing in two ways: I would be grateful if you could… to a company, Could you do me a favour? to a friend. Learn to choose and not mix them.",
  level: "b1",
  category: "writing",
  shape: "phrases",
  order: 33,

  explanation: [
    "A letter to a bank and a message to your best friend can ask for the same thing in very different words. <b>Register</b> means how formal or informal your words are. At A1 and A2, each group of phrases had a register label: formal, neutral or informal. In this topic, you learn how to choose one, and how the same idea changes from one register to another.",
    "Use a <b>formal</b> register for people you don't know, and for official or important writing: a letter to a company, a job application, a complaint, or an email to a manager you have never met. Use an <b>informal</b> register for friends and family. A <b>neutral</b> register is in the middle. It is fine for most people, for example colleagues you know, your teacher, or people in shops.",
    "Formal writing usually uses full forms, like I am, I would and do not, and not short forms, like I'm, I'd and don't. Remember: the short form and the long form mean the same. Informal writing often uses short forms, and sometimes leaves out the first word of a sentence: Hope you're well. (= I hope you're well.)",
    "Formal writing often uses longer, more polite phrases. Compare <b>I would be grateful if you could</b> send me more information (formal) with <b>Could you do me a favour?</b> (informal). It also uses more formal words: <b>receive</b> for get, <b>enquire</b> for ask, <b>apologise</b> for say sorry, <b>assistance</b> for help, and <b>inform</b> for tell.",
    "After a preposition in these phrases, use the gerund: I apologise <b>for being</b> late. Thank you <b>for helping</b> me. Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund. This is the same rule as in order 13.",
    "Informal writing often has everyday words, phrasal verbs like get back to, and exclamation marks (!). Formal writing usually has no exclamation marks, and its sentences are complete.",
    "Many phrases are neutral and fit almost anywhere: Thank you for your email. Could you send me the timetable, please? When you aren't sure, a neutral phrase is a safe choice.",
    "Try not to mix registers. A job application that starts Dear Ms Lee and ends Cheers! sounds strange. Choose one register for the reader, and keep it from the start to the end.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Asking for something: formal",
      phrases: ["I would be grateful if you could send me more information.", "I would appreciate it if you could reply by Friday."],
      register: "formal",
    },
    {
      situation: "Asking for something: informal",
      phrases: ["Could you do me a favour?", "Any chance you could lend me your camera?", "Let me know by Friday, OK?"],
      register: "informal",
    },
    {
      situation: "Saying sorry: formal",
      phrases: ["I apologise for the delay in replying.", "Please accept our apologies for any inconvenience."],
      register: "formal",
    },
    {
      situation: "Saying sorry: informal",
      phrases: ["Sorry it's taken me so long to write back!", "Sorry about the mix-up."],
      register: "informal",
    },
    {
      situation: "Saying thank you: formal",
      phrases: ["Thank you for your letter of 5 May.", "Thank you very much for your assistance."],
      register: "formal",
    },
    {
      situation: "Saying thank you: informal",
      phrases: ["Thanks a lot for the lovely present!", "Thanks for your message."],
      register: "informal",
    },
    {
      situation: "Finishing: formal",
      phrases: ["I look forward to hearing from you.", "Please do not hesitate to contact me if you have any questions."],
      register: "formal",
    },
    {
      situation: "Finishing: informal",
      phrases: ["Hope to hear from you soon.", "Write back soon!", "Speak soon!"],
      register: "informal",
    },
    {
      situation: "Neutral: fine for almost anyone",
      phrases: ["Thank you for your email.", "Could you send me the timetable, please?", "Best wishes,"],
      register: "neutral",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You are writing to the manager of a hotel. You have never met her. You want a copy of your bill. Which sentence fits best?",
      options: ["Send me my bill.", "Any chance you could send me my bill?", "I would be grateful if you could send me a copy of my bill."],
      answer: 2,
      feedback:
        "A hotel manager that you don't know needs a formal register, so I would be grateful if you could… is the best choice. Any chance you could…? is informal: it is for friends. Send me my bill is an order, and it can sound rude. A neutral Could you send me a copy of my bill, please? would also be fine.",
    },
    {
      kind: "choice",
      stem: "Which sentence is informal? You would write it to a friend, not to a company.",
      options: ["I look forward to meeting you.", "Can't wait to see you!", "Thank you for your assistance."],
      answer: 1,
      feedback:
        "Can't wait to see you! is informal: the first word, I, is left out, and it ends with an exclamation mark. I look forward to meeting you and Thank you for your assistance are formal phrases for a letter or an email to a company.",
    },
    {
      kind: "gap",
      stem: "Formal: Thank you for your letter. I have ___ your application. (a formal word for got)",
      answers: ["received"],
      feedback:
        "Received is the formal word for got: I have received your application. In an informal message, you could write I've got your message. Be careful with the spelling: receive has e before i.",
    },
    {
      kind: "gap",
      stem: "Informal, to a friend: Sorry ___ the mess after my party! (one word)",
      answers: ["about", "for"],
      feedback:
        "Sorry about the mess and Sorry for the mess are both correct and informal. In a formal letter, you would write I apologise for… instead.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to end a formal email politely.",
      words: ["reply.", "grateful", "I", "a", "be", "for", "would", "quick"],
      answer: "I would be grateful for a quick reply.",
      feedback:
        "I would be grateful is followed by for + a noun: for a quick reply. It is a polite, formal way to ask. You can also use if: I would be grateful if you could reply quickly.",
    },
    {
      kind: "mistake",
      tokens: ["I", "apologise", "for", "be", "late", "with", "my", "reply."],
      wrongIndex: 3,
      correction: "being",
      feedback:
        "For is a preposition, so the verb after it takes -ing, the gerund: I apologise for being late with my reply. In an informal message to a friend, you could write Sorry I'm so late replying!",
    },
  ],

  levelRationale:
    "The CEFR's B1 descriptors for sociolinguistic appropriateness say a learner can use the most common phrases for everyday functions in a neutral register, and is aware of the main politeness conventions. Its B1 descriptors for correspondence include personal letters and simple formal letters. Choosing a formal, neutral or informal phrase for the same purpose is that skill. The grammar is all from A1 to B1: would and could for requests, and the gerund after a preposition (order 13). This is the first topic in the register family; register and formality shifts come at C1.",

  sourceNotes:
    "english_grammar.txt, # Formal and informal phrases, gives two lists. Most of the formal list (I would be grateful if you could, Please accept our apologies, I look forward to hearing from you, Thank you for your email) agrees with Swan, Practical English Usage, and is used. Its 'I would appreciate if you could' is missing it: the correct form is I would appreciate it if you could, which is used here. It lists 'Could you send me your brochure?' as formal, but Could you…? is neutral, so it is used here only as a neutral example. Its 'I apologize' uses -ize; the site uses apologise, which is more common in Britain, but -ize is also correct. From the informal list, Cheers, Love, Take care, Write back soon and Hope to hear from you soon agree with Swan and some are used. 'This just a note to ask you' is missing is.",
};
