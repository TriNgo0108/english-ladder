import type { PhraseTopic } from "../../schema";

export const letterStructure: PhraseTopic = {
  slug: "letter-structure",
  title: "Letter structure: from Dear… to Yours sincerely",
  summary: "Plan a formal letter in six parts, from Dear Ms Lee to the sign-off, and learn the British rule for Yours sincerely and Yours faithfully.",
  level: "b1",
  category: "writing",
  shape: "phrases",
  order: 34,
  family: "letters",

  explanation: [
    "A formal letter, on paper or in an email, is easier to read when its parts come in the usual order. Letters to companies, schools and offices usually use a formal register (order 33). Remember: register means how formal or informal your words are.",
    "A formal letter usually has six parts. 1. The <b>greeting</b>: Dear Ms Lee, 2. The <b>reason for writing</b>, in the first paragraph: I am writing to apply for… 3. The <b>main points</b>, with one paragraph for each: what happened, or what you want to say. 4. A <b>request or next step</b>: what you want the reader to do, or what you will do. 5. A <b>closing line</b>: I look forward to hearing from you. 6. The <b>sign-off</b> and your full name: Yours sincerely, Ana Silva.",
    "If you know the person's name, write <b>Dear</b> + Mr, Mrs, Ms or Dr + the family name: Dear Ms Lee, Dear Mr Patel. Ms is for any woman, and it is a safe choice when you don't know if a woman is married. Use the family name, not the first name: Dear Ms Lee, not Dear Ms Anna. If you don't know the name, write <b>Dear Sir or Madam</b>.",
    "In British English, the sign-off usually matches the greeting. After Dear + a name, like Dear Ms Lee, end with <b>Yours sincerely</b>. After Dear Sir or Madam, end with <b>Yours faithfully</b>. American English is different: people usually end with Sincerely or Sincerely yours, with or without a name.",
    "We usually put a comma after the greeting and after the sign-off, and write the full name on the next line. Start each paragraph on a new line.",
    "Give the reason for writing in the first sentence, so the reader knows at once what the letter is about. Keep each main point short, in its own paragraph. Linking words (order 25) help the reader follow you: Firstly, In addition, However. Furthermore is a formal way to say in addition.",
    "Near the end, say clearly what you want: I would be grateful if you could… If you put a document in the envelope with a paper letter, write I enclose a copy of… Then finish with a closing line before the sign-off.",
    "For a less formal letter, or a letter to someone you know, people often end with <b>Kind regards</b> or <b>Best wishes</b> instead. Best wishes is fine for most people, as you learned at A2.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Greeting someone whose name you know",
      phrases: ["Dear Ms Lee,", "Dear Mr Patel,", "Dear Dr Green,"],
      register: "formal",
    },
    {
      situation: "Greeting someone whose name you don't know",
      phrases: ["Dear Sir or Madam,", "Dear Sir/Madam,"],
      register: "formal",
    },
    {
      situation: "Giving the reason for writing",
      phrases: [
        "I am writing to apply for the job of receptionist.",
        "I am writing to complain about my recent order.",
        "I am writing with regard to your advertisement in Monday's newspaper.",
      ],
      register: "formal",
    },
    {
      situation: "Adding your main points",
      phrases: ["Firstly, the delivery was two weeks late.", "In addition, two of the plates were broken.", "Furthermore, nobody answered my emails."],
      register: "formal",
    },
    {
      situation: "Making a request or giving the next step",
      phrases: [
        "I would be grateful if you could send me a full refund.",
        "I enclose a copy of my receipt.",
        "I would be happy to attend an interview at any time.",
      ],
      register: "formal",
    },
    {
      situation: "The closing line",
      phrases: ["I look forward to hearing from you.", "I look forward to your reply.", "Please contact me if you need any more information."],
      register: "formal",
    },
    {
      situation: "Signing off after Dear + a name (British)",
      phrases: ["Yours sincerely,"],
      register: "formal",
    },
    {
      situation: "Signing off after Dear Sir or Madam (British)",
      phrases: ["Yours faithfully,"],
      register: "formal",
    },
    {
      situation: "Signing off a less formal letter",
      phrases: ["Kind regards,", "Best wishes,"],
      register: "neutral",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You are writing a formal letter to a company, in British English. You don't know the name of the person who will read it, so you start with Dear Sir or Madam. How do you sign off?",
      options: ["Yours sincerely,", "Yours faithfully,", "Love,", "See you soon,"],
      answer: 1,
      feedback:
        "In British English, Dear Sir or Madam usually goes with Yours faithfully. Yours sincerely goes with a name, like Dear Ms Lee. Love and See you soon are for friends and family. In American English, Sincerely is usual in both cases.",
    },
    {
      kind: "choice",
      stem: "In a formal letter, where does I am writing to complain about my order usually go?",
      options: [
        "In the first paragraph, just after the greeting.",
        "In the last paragraph, after I look forward to hearing from you.",
        "On the line under your name, at the very end.",
      ],
      answer: 0,
      feedback:
        "The reason for writing usually comes first, just after the greeting, so the reader knows at once what the letter is about. The closing line, the sign-off and your name come at the end.",
    },
    {
      kind: "gap",
      stem: "You are writing a formal letter to your son's teacher, Anna Kowalski. Dear Ms ___,",
      answers: ["Kowalski"],
      feedback:
        "In a greeting, after Mr, Mrs, Ms or Dr, use the family name: Dear Ms Kowalski. Don't use the first name (Dear Ms Anna), and don't use the full name after Ms. In British English, a letter that starts Dear Ms Kowalski usually ends Yours sincerely.",
    },
    {
      kind: "gap",
      stem: "We look forward ___ meeting you at the interview next week.",
      answers: ["to"],
      feedback:
        "We say look forward to + the gerund: We look forward to meeting you. Here to is a preposition, so the verb after it takes -ing, as in order 13. We also say I look forward to your reply, with a noun.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to give your reason for writing.",
      words: ["refund.", "to", "writing", "I", "for", "ask", "am", "a"],
      answer: "I am writing to ask for a refund.",
      feedback:
        "I am writing to + the base form gives the reason for writing: I am writing to ask for a refund. In a formal letter, use the full form I am, not I'm. We ask for a thing: ask for a refund.",
    },
    {
      kind: "mistake",
      tokens: ["Thank", "you", "for", "your", "help.", "Your", "faithfully,", "Maria", "Lopez"],
      wrongIndex: 5,
      correction: "Yours",
      feedback:
        "The sign-off is Yours, with s: Yours faithfully or Yours sincerely. Your is only used before a noun, as in your help. In British English, Yours faithfully follows Dear Sir or Madam, and Yours sincerely follows a name.",
    },
  ],

  levelRationale:
    "The CEFR's B1 descriptors for correspondence include writing simple formal letters and emails, for example to ask for information or make a complaint, following the usual conventions. The parts of a letter, and the British greeting and sign-off rules, are those conventions. The topic uses only grammar from A1 to B1, and builds on register (order 33) and linking words (order 25).",

  sourceNotes:
    "english_grammar.txt, # How to write a good letter, is about telling a story in a letter (thank the reader, set the scene, use the past perfect for the order of events), not about the parts of a formal letter, so it is not the base of this topic. In it, 'Give reason of the story' should be give the reason for, and 'The pas perfect' should be the past perfect. # Writing a email gives the plan greeting, reason for writing, request/action, further information, ending, and the salutations Dear Sir or Madam with Yours faithfully and Yours sincerely. The plan agrees with Swan, Practical English Usage, and is used, with the request after the main points. The British rule for Yours sincerely and Yours faithfully, and the American Sincerely, checked against Swan.",
};
