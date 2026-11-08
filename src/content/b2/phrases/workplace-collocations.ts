import type { SetTopic } from "../../schema";

export const workplaceCollocations: SetTopic = {
  slug: "workplace-collocations",
  family: "collocations",
  title: "Workplace collocations: hold a meeting, meet a deadline",
  summary: "Hold a meeting, not make a meeting. Learn the verbs that go with meetings, deadlines, agreements and jobs: meet a deadline, raise an issue, give notice.",
  level: "b2",
  category: "phrases",
  shape: "set",
  order: 23,

  explanation: [
    "At B1 you learned everyday collocations, like make a mistake, do your homework and take a photo. Remember: a collocation is a group of words that we often use together, like make a mistake or heavy rain. This topic is about collocations at work: meetings, deadlines, agreements, jobs and business.",
    "At B1, the guide was that we often use make when we create something, and do for work, jobs and tasks. This is only a guide, and with many work nouns it doesn't help. We <b>hold</b> or <b>have</b> a meeting, not make a meeting. We <b>meet</b> a deadline, not do a deadline. We <b>give</b> notice, not make notice. As at B1, there is often no rule, so learn each noun with its verb.",
    "<b>Meetings.</b> Hold a meeting is a little more formal than have a meeting, and both are common. The person who leads it <b>chairs</b> the meeting. To start talking about a problem, you <b>raise an issue</b>. Raise always has an object: raise an issue, raise a question. Rise has no object: prices rise, the sun rises. So we say raise an issue, not rise an issue.",
    "<b>Deadlines and targets.</b> A deadline is the time when a piece of work must be finished. If you finish in time, you <b>meet</b> the deadline. If you don't, you <b>miss</b> it. A manager <b>sets</b> a target, and the team tries to meet it or reach it. After a long discussion, people <b>reach an agreement</b>.",
    "<b>Jobs.</b> To leave a job, you <b>give notice</b>: you tell your employer officially, a fixed time before you go. British English also says hand in your notice. When you are ready for more important work, you <b>take on</b> more responsibility. To find a new person for a job, a company <b>draws up a shortlist</b> of the best people and then <b>holds interviews</b>. If you get more money for the same job, you <b>get a pay rise</b>. American English says a raise.",
    "<b>Business.</b> You <b>run</b> a business or a project, you <b>do business with</b> a company, and a company <b>launches</b> a new product when it starts selling it.",
  ].join("\n\n"),

  entries: [
    { headword: "hold a meeting", gloss: "organise a meeting and have it. Have a meeting is also common, and a little less formal.", inUse: "The team <b>holds a meeting</b> on the first day of every month." },
    { headword: "chair a meeting", gloss: "lead a meeting and decide who speaks and when", inUse: "Ms Okoro will <b>chair</b> tomorrow's <b>meeting</b>." },
    { headword: "raise an issue", gloss: "start talking about a problem, so that people can discuss it", inUse: "I'd like to <b>raise an issue</b> about the new working hours." },
    { headword: "meet a deadline", gloss: "finish a piece of work by the time that it must be ready", inUse: "If we all work on Saturday, we can still <b>meet the deadline</b>." },
    { headword: "miss a deadline", gloss: "not finish a piece of work by the time that it must be ready", inUse: "The builders <b>missed</b> every <b>deadline</b>, so the shop opened late." },
    { headword: "set a target", gloss: "decide what result a person or a team should get, often by a certain time", inUse: "Our manager has <b>set</b> us a <b>target</b> of fifty new customers this month." },
    { headword: "reach an agreement", gloss: "agree about something after a discussion, often a long one", inUse: "The union and the company <b>reached an agreement</b> late last night." },
    { headword: "give notice", gloss: "tell your employer officially that you are leaving your job, a fixed time before you go", inUse: "In my contract, I have to <b>give</b> one month's <b>notice</b>." },
    { headword: "take on responsibility", gloss: "agree to do new or more important work", inUse: "After her promotion, she <b>took on</b> more <b>responsibility</b> for the budget." },
    { headword: "draw up a shortlist", gloss: "choose a small number of the best people from everyone who applied for a job", inUse: "HR will <b>draw up a shortlist</b> of five candidates." },
    { headword: "hold interviews", gloss: "meet the people who want a job and ask them questions", inUse: "We'll <b>hold interviews</b> on Thursday and Friday." },
    { headword: "get a pay rise", gloss: "start getting more money for the same job. American English says a raise.", inUse: "If I don't <b>get a pay rise</b> this year, I'll look for another job." },
    { headword: "work overtime", gloss: "work more hours than usual, often for extra money", inUse: "We had to <b>work overtime</b> to finish the order." },
    { headword: "run a business", gloss: "manage a business and make the decisions about it", inUse: "My aunt <b>runs</b> a small <b>business</b> selling cakes." },
    { headword: "do business with", gloss: "buy from or sell to a person or a company", inUse: "We have <b>done business with</b> that supplier for ten years." },
    { headword: "launch a product", gloss: "start selling a new product to the public", inUse: "The company will <b>launch</b> its new <b>product</b> in the spring." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "We ___ a meeting every Monday morning to plan the week.",
      options: ["make", "give", "hold", "do"],
      answer: 2,
      feedback:
        "We hold a meeting, or have a meeting: We hold a meeting every Monday morning. Make a meeting is a common learner mistake, because make is often used for things we create.",
    },
    {
      kind: "choice",
      stem: "The whole team worked late on Friday, and we managed to ___ the deadline.",
      options: ["meet", "catch", "do", "win"],
      answer: 0,
      feedback:
        "We meet a deadline when we finish the work in time. Catch the deadline and do the deadline are learner mistakes. Catch is for trains and buses.",
    },
    {
      kind: "gap",
      stem: "Sorry the report is late. We ___ the deadline because two people were ill. (one word)",
      answers: ["missed"],
      feedback:
        "The opposite of meet a deadline is miss a deadline: We missed the deadline because two people were ill. Lose a deadline is a common learner mistake.",
    },
    {
      kind: "choice",
      stem: "Ana has found a new job. Her contract says that she must ___ her company two months' notice before she leaves.",
      options: ["make", "do", "say", "give"],
      answer: 3,
      feedback:
        "We give notice: she must give her company two months' notice. It means tell the employer officially, a fixed time before you leave. British English also says hand in your notice.",
    },
    {
      kind: "choice",
      stem: "I've been in this job for three years, and I'm ready to take ___ more responsibility.",
      options: ["in", "on", "at", "off"],
      answer: 1,
      feedback:
        "Take on means agree to do new or more important work: I'm ready to take on more responsibility. Take in, take at and take off don't have this meaning.",
    },
    {
      kind: "mistake",
      tokens: ["Before", "we", "finish,", "can", "I", "rise", "an", "important", "issue?"],
      wrongIndex: 5,
      correction: "raise",
      feedback:
        "We raise an issue: Before we finish, can I raise an important issue? Raise has an object, and rise never does: prices rise, but you raise an issue.",
    },
  ],

  levelRationale:
    "English Vocabulary Profile: meet a deadline, miss a deadline, hold a meeting, raise an issue, reach an agreement, give notice, take on responsibility, set a target and do business with are usually given as B2, and run a business, work overtime, get a pay rise and launch a product as B1 or B2 (my best reading of the profile, not a checked list). This is the collocations family's B2 topic after B1 collocations, and it keeps B1's make and do guide, saying again that it is only a guide. The distractors are real learner errors: make a meeting, catch a deadline, lose a deadline and rise an issue. Hold a meeting and have a meeting are both correct, so have is never a distractor.",

  sourceNotes:
    "english_grammar.txt, # Collocations and # Review give the headwords chairing the meeting, hold interviews, take on new responsibilities, give two months' notice and to launch a new range, and these are used with new examples. The note's 'The HR department will make up a shortlist' is not the usual collocation: Swan and the learner dictionaries give draw up a shortlist, so that is used. Meet and miss a deadline, hold and have a meeting, raise an issue, reach an agreement, set a target, run a business, do business with, work overtime, and the British pay rise with the American raise are authored from Swan, Practical English Usage. Raise and rise are checked against Swan. Every gloss is new.",
};
