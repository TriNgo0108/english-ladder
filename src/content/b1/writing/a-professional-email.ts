import type { PhraseTopic } from "../../schema";

export const aProfessionalEmail: PhraseTopic = {
  slug: "a-professional-email",
  family: "emails",
  title: "A professional email",
  summary: "Write a clear work email: a short subject line, Dear or Hello, the reason in the first line, polite requests, attachments and Kind regards.",
  level: "b1",
  category: "writing",
  shape: "phrases",
  order: 35,

  explanation: [
    "At A2, you wrote an informal email to a friend. A professional email is for work or study: to a colleague, a manager, a client, a teacher or a company. Remember: register means how formal or informal your words are. Most work emails are neutral. They are more formal when you don't know the reader, or when the email is important, like a job application or a complaint (order 33).",
    "Write a short, clear <b>subject line</b>, so the reader knows what the email is about before they open it: Meeting on Friday: new time. Job application: receptionist.",
    "To a client, a manager you don't know, or a company, start with <b>Dear</b> + Mr, Mrs or Ms + the family name, or with Dear Sir or Madam (order 34). To colleagues, <b>Hello</b> + the first name is fine. In many offices, people also write Hi to colleagues they know well, but Hi is informal.",
    "Say why you are writing in the first line: I'm writing about the meeting on Friday. If you are answering, start with Thank you for your email. Then write short paragraphs, with one idea in each, as in an informal email.",
    "Ask politely: <b>Could you</b> check these numbers for me, please? <b>Would you be able to</b> join the call at 3 p.m.? In a formal email, you can write <b>I would be grateful if you could</b>… (order 33).",
    "To send a file with the email, write <b>I've attached</b>… or, more formally, <b>Please find attached</b>…",
    "In a neutral work email, short forms like I'm and I've are common. In a formal email, people usually write the full forms: I am, I have.",
    "End with a line about the next step: Let me know if you need anything else. I look forward to hearing from you is more formal.",
    "<b>Kind regards</b>, <b>Best regards</b> and <b>Best wishes</b> are good sign-offs for most work emails. Regards alone is shorter and a little less warm. In a very formal email, British English uses Yours sincerely or Yours faithfully, as in a letter (order 34). Don't use Love or Cheers at work: as you learnt at A2, they are for family and friends.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Starting the email",
      phrases: ["Hello Tom,", "Good morning, Sarah,", "Hello everyone,"],
      register: "neutral",
    },
    {
      situation: "Starting a formal email",
      phrases: ["Dear Ms Lee,", "Dear Mr Okafor,", "Dear Sir or Madam,"],
      register: "formal",
    },
    {
      situation: "Opening lines",
      phrases: ["Thank you for your email.", "I'm writing about the meeting on Friday.", "Thank you for your quick reply."],
      register: "neutral",
    },
    {
      situation: "Giving the reason for writing in a formal email",
      phrases: ["I am writing to ask about the job of sales assistant.", "I am writing to inform you that my address has changed."],
      register: "formal",
    },
    {
      situation: "Asking questions and asking for things",
      phrases: [
        "Could you check these numbers for me, please?",
        "Would you be able to join the call at 3 p.m.?",
        "Can we move the meeting to Thursday?",
      ],
      register: "neutral",
    },
    {
      situation: "Sending a file",
      phrases: ["I've attached the sales report.", "Here is the new timetable."],
      register: "neutral",
    },
    {
      situation: "Sending a file in a formal email",
      phrases: ["Please find attached my CV.", "Please find attached the documents you requested."],
      register: "formal",
    },
    {
      situation: "Ending the email",
      phrases: ["Let me know if you need anything else.", "Thank you for your help.", "See you on Monday."],
      register: "neutral",
    },
    {
      situation: "Ending a formal email",
      phrases: ["I look forward to hearing from you.", "I would be grateful for your help with this matter."],
      register: "formal",
    },
    {
      situation: "Saying goodbye in a work email",
      phrases: ["Kind regards,", "Best regards,", "Best wishes,", "Regards,"],
      register: "neutral",
    },
    {
      situation: "Saying goodbye in a very formal email (British)",
      phrases: ["Yours sincerely,", "Yours faithfully,"],
      register: "formal",
    },
    {
      situation: "Not for work: an email to a friend",
      phrases: ["Hi Sam!", "Love,", "Cheers,"],
      register: "informal",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You are emailing a client, Daniel Hassan, for the first time. Which is the best start?",
      options: ["Hi mate,", "Hey Daniel!", "Dear Mr Daniel,", "Dear Mr Hassan,"],
      answer: 3,
      feedback:
        "To a client you are writing to for the first time, Dear + Mr + the family name is best: Dear Mr Hassan. Mr goes with the family name, not the first name, so Dear Mr Daniel is wrong. Hi mate and Hey Daniel! are informal, for friends.",
    },
    {
      kind: "choice",
      stem: "You are finishing an email to a colleague that you work with every day. Which sign-off fits best?",
      options: ["Yours faithfully,", "Lots of love,", "Kind regards,"],
      answer: 2,
      feedback:
        "Kind regards is a neutral sign-off, good for most work emails. Lots of love is for family and close friends. Yours faithfully is very formal, and in British English it goes only after Dear Sir or Madam.",
    },
    {
      kind: "gap",
      stem: "Please find ___ the report you asked for.",
      answers: ["attached", "enclosed", "below"],
      feedback:
        "Please find attached… is a formal way to say I've attached…, for a file that you send with the email. Please find enclosed is also correct, but it is more usual in paper letters, where the document is in the envelope. Please find below is correct when the report is written in the email itself, under this line.",
    },
    {
      kind: "gap",
      stem: "Dear Ms Lee, I am writing to ___ you that the meeting has moved to Thursday. (a formal word for tell)",
      answers: ["inform", "notify", "advise"],
      feedback:
        "Inform is the usual formal word for tell: I am writing to inform you that… Notify and advise are also correct here, and are very formal. After writing to, use the base form, not informing.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to ask a colleague politely.",
      words: ["call", "able", "Would", "tomorrow?", "be", "me", "you", "to"],
      answer: "Would you be able to call me tomorrow?",
      feedback:
        "Would you be able to…? is a polite way to ask someone to do something. Would comes first, then you, then be able to and the base form: call me tomorrow.",
    },
    {
      kind: "mistake",
      tokens: ["Please", "let", "me", "knowing", "if", "Tuesday", "suits", "you."],
      wrongIndex: 3,
      correction: "know",
      feedback:
        "After let + a person, use the base form, with no to and no -ing: Please let me know if Tuesday suits you. Let me know is a very common neutral way to end a work email.",
    },
  ],

  levelRationale:
    "The CEFR's B1 descriptors for correspondence include writing emails and letters that ask for or give simple information and confirm arrangements, in a register that suits the reader. A work email is a very common form of that task. The topic builds on A2 an-informal-email and the A2 polite requests with could, and on B1 register (order 33) and letter structure (order 34). Follow-up emails come at B2 in the emails family.",

  sourceNotes:
    "english_grammar.txt, # Writing a email, says formal emails are for being polite or for readers we don't know well, and that a lot of work emails are formal. Swan, Practical English Usage, and today's usage agree that emails to people we don't know are formal, but most everyday emails between colleagues are neutral, so this topic says so. Its openings Dear and Good morning, its endings Regards and With best wishes, and its I am writing to… lines agree with standard usage, and some are used. 'Good Morning/Afternoon' does not need a capital M or A, and 'a email' should be an email. ## Follow up email is a B2 point on this site and is not used. This topic keeps the A2 rules: Love and Cheers are for friends, Best wishes is neutral, and Yours sincerely and Yours faithfully are only for formal letters and emails.",
};
