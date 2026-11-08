import type { PhraseTopic } from "../../schema";

export const checkingForApproval: PhraseTopic = {
  slug: "checking-for-approval",
  title: "Checking for approval: Is that OK with you?, Does that work for you?",
  summary: "Before you change a plan or send something, check that others agree: Is that OK with you?, Does that work for you?, Would you be happy with…?",
  level: "b2",
  category: "speaking",
  shape: "phrases",
  order: 33,

  explanation: [
    "Before you do something that affects other people, like changing a meeting, sending a document or choosing a date, it is polite to check that they agree. <b>Approval</b> means saying that something is good or acceptable. These phrases ask for it. Remember: register means how formal or informal your words are.",
    "<b>Short questions</b> come after you describe your plan: We could meet at three on Tuesday. <b>Does that work for you?</b> <b>Is that OK with you?</b> <b>Is that all right with you?</b> These are neutral, like Is it OK if I open the window? at A2. Suit has no preposition: <b>Does Monday suit you?</b>, not Does Monday suit for you? But work has for: Does that work for you?",
    "<b>Are you happy with</b>…? and <b>Would you be happy with</b>…? + a noun ask about a plan or an idea: Are you happy with the new timetable? Would you be happy with a shorter meeting? Would makes the question softer. I just wanted to check that you're happy with the plan is also neutral and polite.",
    "To ask for permission before you do something, use the B1 forms: <b>Do you mind if I</b> + the present simple, or <b>Is it all right if I</b> + the present simple. Do you mind if I send the report to Sam? Is it all right if I move our meeting to Monday? As in B1, mind means not like, so the answer No, not at all means yes, it's fine.",
    "With a client or a senior manager, ask more indirectly. As in B1 indirect and polite questions, the rest of the question after the opening has the order of a normal sentence: Could you let me know if you're happy with these changes? I was wondering whether you would be happy with this price is very polite and formal, and it ends with a full stop. <b>Does that meet with your approval?</b> is very formal. In an email, <b>I would welcome any comments</b> invites the reader to give an opinion.",
    "With colleagues you know well, people often use a declarative question (order 18), which is usually informal: So we're agreed, then? OK with you?",
    "<b>Answering.</b> To say yes: Yes, that's fine. That works for me. Sounds good! is informal. To say no politely, give another idea or a reason: Actually, could we make it Thursday instead? I'm afraid Friday doesn't work for me.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Checking quickly",
      phrases: ["Does that work for you?", "Is that OK with you?", "Is that all right with you?", "Does Monday suit you?"],
      register: "neutral",
    },
    {
      situation: "Asking about a plan or an idea",
      phrases: [
        "Are you happy with the new timetable?",
        "Would you be happy with a shorter meeting?",
        "I just wanted to check that you're happy with the plan.",
        "Could you let me know if you're happy with these changes?",
      ],
      register: "neutral",
    },
    {
      situation: "Asking before you do something",
      phrases: ["Do you mind if I send the report to Sam?", "Is it all right if I move our meeting to Monday?"],
      register: "neutral",
    },
    {
      situation: "Asking very politely, for example a client or a senior manager",
      phrases: ["I was wondering whether you would be happy with this price.", "Does that meet with your approval?", "I would welcome any comments you may have."],
      register: "formal",
    },
    {
      situation: "Checking with colleagues you know well",
      phrases: ["So we're agreed, then?", "OK with you?"],
      register: "informal",
    },
    {
      situation: "Saying yes",
      phrases: ["Yes, that's fine.", "That works for me.", "No, not at all. Go ahead."],
      register: "neutral",
    },
    {
      situation: "Saying yes, with colleagues you know well",
      phrases: ["Sounds good!", "Fine by me."],
      register: "informal",
    },
    {
      situation: "Saying no politely",
      phrases: ["Actually, could we make it Thursday instead?", "I'm afraid Friday doesn't work for me."],
      register: "neutral",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You want to move a meeting with an important client to Thursday. Which question is the most polite?",
      options: ["Would Thursday suit you?", "Thursday, right?", "We're meeting on Thursday now."],
      answer: 0,
      feedback:
        "Would Thursday suit you? asks the client politely, and would makes it softer. Thursday, right? is a short declarative question, which is informal: it is for colleagues you know well. We're meeting on Thursday now doesn't ask at all.",
    },
    {
      kind: "choice",
      stem: "Your manager asks: Do you mind if I share your report with the directors? You are happy for her to do it. What do you say?",
      options: ["Yes, I do.", "Yes, I mind.", "No, not at all. Go ahead."],
      answer: 2,
      feedback:
        "Mind means not like, so Do you mind if…? asks: is it a problem for you? No, not at all means no problem, so go ahead. Yes, I do means it is a problem, and Yes, I mind is not used.",
    },
    {
      kind: "gap",
      stem: "We could meet at ten on Wednesday. Does that ___ for you? (one word)",
      answers: ["work"],
      feedback:
        "Does that work for you? asks if a plan is OK for the other person. Suit is also common, but it has no for: Does that suit you?",
    },
    {
      kind: "gap",
      stem: "Does Friday ___ you? If not, we can meet next week. (one word)",
      answers: ["suit"],
      feedback: "Suit + a person, with no preposition, asks if a time or a plan is good for them: Does Friday suit you? Not Does Friday suit for you?",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to check politely with a client.",
      words: ["you", "the", "if", "know", "are", "let", "price?", "happy", "Could", "with", "me", "you"],
      answer: "Could you let me know if you are happy with the price?",
      feedback:
        "Could you let me know… is a polite opening. After if, the rest has the order of a normal sentence: you are happy, not are you happy, as in B1 indirect and polite questions.",
    },
    {
      kind: "mistake",
      tokens: ["Do", "you", "mind", "if", "I", "sending", "the", "plan", "to", "Sam?"],
      wrongIndex: 5,
      correction: "send",
      feedback:
        "After Do you mind if I, use the present simple: Do you mind if I send the plan to Sam? Do you mind sending…? is also correct, but it has no if or I, and it asks the other person to send it.",
    },
  ],

  levelRationale:
    "The CEFR's B2 descriptors for formal discussion and meetings include taking part in planning and making decisions, and its B2 descriptors for goal-oriented co-operation include asking others for their views on how to go forward. Checking that other people agree before you act is that skill. The spec (section 8) places checking for approval at B2 with no family. The topic keeps B1 indirect-and-polite-questions: Do you mind if I + the present simple, No, not at all as the answer that means yes, the order of a normal sentence after the opening, and I was wondering… as formal, ending with a full stop. Is that OK with you? is neutral, like A2's Is it OK if I open the window?, and So we're agreed, then? is an informal declarative question, as in order 18.",

  sourceNotes:
    "english_grammar.txt, ## Checking for approval 1, has I just wanted to be absolutely sure that you agree with…, Are you happy with…, Does that meet with your approval?, I'd welcome any comments you have about this, Feel free to suggest an alternative way of doing things and I hope you don't mind, but I've already drawn up a draft plan. These agree with Swan, Practical English Usage. Are you happy with…? and Does that meet with your approval? are used as fixed phrases; the others are reworded (I just wanted to check that you're happy with…, I would welcome any comments you may have). The note's 'drawn up draft plan' is missing a. The brief's Is that OK with you?, Would you be happy with…? and Does that work for you? are added from Swan and the learner dictionaries; OK is neutral here, as in A2 asking-for-things-politely. The mistake item has one fix: sending can only become send; Do you mind me sending… would need two changes.",
};
