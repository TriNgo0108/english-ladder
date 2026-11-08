import type { PhraseTopic } from "../../schema";

export const followUpEmails: PhraseTopic = {
  slug: "follow-up-emails",
  family: "emails",
  title: "Follow-up emails: after a meeting, chasing a reply, after an interview",
  summary: "It was good to talk to you just now. Confirm what you agreed, chase a reply politely and thank an interviewer, in the right register for each reader.",
  level: "b2",
  category: "writing",
  shape: "phrases",
  order: 27,

  explanation: [
    "A follow-up email comes after something else: a meeting, a phone call, a job interview, or an email that got no answer. It is short, and it reminds the reader what happened and what happens next. Remember: register means how formal or informal your words are. Like most work emails (B1), most follow-up emails are neutral. After a job interview, or to a client you don't know well, they are more formal.",
    "<b>After a meeting or a call</b>, start with a line about it: It was good to talk to you this morning. Thank you for your time today. Then confirm what you agreed: I'm writing to confirm what we agreed at the meeting. As discussed, … is shorter and more formal. Finish with the next step: who does what, and when. We'll send you the final plan by 4 p.m. our time. Our time is useful when the reader is in a different country.",
    "After say, we don't put a person: As I said on the phone, not As I told on the phone. Tell needs a person after it: As I told you on the phone.",
    "If something went wrong, say sorry clearly and say what you will do: I'm sorry I didn't check with you before booking the venue. We'll send you a list of other venues. After a preposition like before, use the gerund (B1): before booking, not before book. Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund.",
    "<b>Chasing a reply</b> means writing again because someone hasn't answered. Be polite, and suppose that the reader is busy, not rude: I'm just following up on my email of 3 May. Have you had a chance to look at the proposal? If you need an answer soon, give a reason and a date: We need to confirm the order by Friday. In a formal email, I was wondering whether you had received my email of 12 June is softer. To a colleague you know well, Just a quick reminder about… is informal, because it leaves out the first words (It's just…).",
    "<b>After a job interview</b>, a short formal email helps the employer remember you. Thank the interviewer, say that you are still interested, and offer more information: I would like to thank you for meeting me yesterday. I remain very interested in the position.",
    "Use a clear subject line (B1), often the old subject with Re: in front, like Re: Meeting on Monday, or a new one, like Following up: invoice 2041. Sign off as in any work email: Kind regards or Best regards.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Starting the email",
      phrases: ["Hello Marta,", "Good afternoon, James,"],
      register: "neutral",
    },
    {
      situation: "After a meeting or a call",
      phrases: [
        "It was good to talk to you this morning.",
        "Thank you for your time today.",
        "I'm writing to confirm what we agreed at the meeting.",
        "As I said on the phone, the delivery will be on Monday.",
      ],
      register: "neutral",
    },
    {
      situation: "After a meeting: formal",
      phrases: ["Following our meeting on Tuesday, I am writing to confirm our arrangements.", "As discussed, please find attached the revised contract."],
      register: "formal",
    },
    {
      situation: "Saying what happens next",
      phrases: [
        "We'll send you the final plan by 4 p.m. our time.",
        "I'll call you on Monday to check the details.",
        "Could you let me know by Thursday if these dates suit you?",
      ],
      register: "neutral",
    },
    {
      situation: "Saying sorry",
      phrases: ["I'm sorry I didn't check with you before booking the venue.", "We were sorry to hear that you weren't happy with the venue."],
      register: "neutral",
    },
    {
      situation: "Chasing a reply",
      phrases: ["I'm just following up on my email of 3 May.", "Have you had a chance to look at the proposal?", "We need to confirm the order by Friday."],
      register: "neutral",
    },
    {
      situation: "Chasing a reply: formal",
      phrases: [
        "I am writing to follow up on my letter of 2 June.",
        "I was wondering whether you had received my email of 12 June.",
        "I would be grateful for a reply by Friday, as we need to confirm the order.",
      ],
      register: "formal",
    },
    {
      situation: "Chasing a colleague you know well",
      phrases: ["Just a quick reminder about Friday's deadline.", "Any news on the budget?", "Just checking you got my last email."],
      register: "informal",
    },
    {
      situation: "After a job interview",
      phrases: [
        "I would like to thank you for meeting me yesterday.",
        "I remain very interested in the position.",
        "Please do not hesitate to contact me if you require any further information.",
      ],
      register: "formal",
    },
    {
      situation: "Ending the email",
      phrases: ["Let me know if you have any questions.", "Thank you again for your help."],
      register: "neutral",
    },
    {
      situation: "Saying goodbye in a work email",
      phrases: ["Kind regards,", "Best regards,", "Best wishes,"],
      register: "neutral",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You sent a client a price list two weeks ago, and she hasn't replied. Which is the best first line for your follow-up email?",
      options: [
        "Why haven't you answered me?",
        "I'm just following up on the price list I sent you on 3 May.",
        "You forgot my email, didn't you?",
        "Answer me quickly, please.",
      ],
      answer: 1,
      feedback:
        "I'm just following up on… is polite and neutral, and it reminds the client what you sent. The other three sound angry or rude, as if the client has done something wrong.",
    },
    {
      kind: "gap",
      stem: "It was good to ___ to you just now. As we agreed, I'll send the contract tomorrow. (one word)",
      answers: ["talk", "speak", "chat"],
      feedback:
        "It was good to talk to you, or to speak to you, is a friendly first line after a call or a meeting. Chat to you is also correct, and a little less formal. After to, use the base form. Say and tell don't fit here: we say something, and we tell someone something.",
    },
    {
      kind: "gap",
      stem: "I'm sorry for not checking with you before ___ the hotel. (book)",
      answers: ["booking", "having booked"],
      feedback:
        "Before is a preposition here, so the verb after it takes -ing, the gerund: before booking the hotel. Before having booked is also correct, but before booking is much more usual.",
    },
    {
      kind: "choice",
      stem: "You had a job interview yesterday. Which sentence fits best in your follow-up email to the interviewer?",
      options: ["So, did I get the job or not?", "Thanks for the chat, mate!", "I would like to thank you for taking the time to meet me."],
      answer: 2,
      feedback:
        "After an interview, a formal thank-you is best: I would like to thank you for taking the time to meet me. Thanks for the chat, mate! is informal, for friends, and So, did I get the job or not? sounds impatient.",
    },
    {
      kind: "wordbank",
      prompt: "You sent your manager a report last week. Ask politely if she has looked at it yet. Put the words in order.",
      words: ["look", "chance", "you", "Have", "my", "a", "at", "had", "report?", "to"],
      answer: "Have you had a chance to look at my report?",
      feedback:
        "Have you had a chance to…? is a polite way to chase a reply: it suggests that the reader is busy, not that they forgot. After a chance, use to + the base form.",
    },
    {
      kind: "mistake",
      tokens: ["As", "I", "told", "on", "the", "phone,", "we'll", "send", "you", "a", "new", "list", "tomorrow."],
      wrongIndex: 2,
      correction: "said",
      feedback:
        "Tell needs a person after it, but say doesn't: As I said on the phone, we'll send you a new list tomorrow. As I told you on the phone is also correct.",
    },
  ],

  levelRationale:
    "The CEFR's B2 descriptors for correspondence include writing emails and letters that confirm what was agreed, follow up on earlier contact and respond to the reader's situation, in a register that suits the reader. The spec (section 8) places follow-up emails at B2, as the emails family's B2 topic after A2 an-informal-email and B1 a-professional-email. It keeps the B1 situation names Starting the email, Ending the email and Saying goodbye in a work email, with the same neutral register, and the B1 rules: Kind regards and Best wishes are neutral, Thanks is informal, and I was wondering whether… is formal, as in B1 indirect and polite questions. The grammar is from A1 to B2: the gerund after before, say and tell, and the past perfect in I was wondering whether you had received.",

  sourceNotes:
    "english_grammar.txt, ## Follow up email gives It was good to talk to you just now, I'm writing to confirm our arrangements, We were sorry to hear that you don't like the venue, I apologize for not checking with you before book it, As I said on the pone, we'll send you a new list to review, and We'll email it to you by 4 p.m our time. They agree with Swan, Practical English Usage, and their ideas are used with new wording. The note has errors: 'before book it' should be before booking it (a gerund after the preposition before), 'pone' should be phone, and '4 p.m our time' needs a full stop after m (4 p.m.). 'I apologize' uses -ize; the site uses apologise, which is more common in Britain. Chasing a reply and the after-interview email are not in the note and are authored from Swan and standard business email guidance. Say and tell are checked against Swan.",
};
