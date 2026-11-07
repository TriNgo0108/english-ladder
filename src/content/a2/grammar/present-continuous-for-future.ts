import type { RuleTopic } from "../../schema";

export const presentContinuousForFuture: RuleTopic = {
  slug: "present-continuous-for-future",
  family: "present-continuous",
  title: "Present continuous for the future: I'm meeting Sam tomorrow",
  summary: "Talk about future plans that you have already arranged: I'm meeting Sam at six. We're leaving on Friday. Compare it with going to and will.",
  level: "a2",
  category: "grammar",
  shape: "rule",
  order: 6,

  explanation: [
    "Remember: the present continuous is am, is or are and then the verb with -ing: I'm working. We use it for things that are happening now. We also use it to talk about the <b>future</b>, for plans that we have already <b>arranged</b>.",
    "An arrangement is a plan that is already fixed. Often we have agreed it with other people, or we have a ticket or a booking, and we know the time and the place: I<b>'m meeting</b> Sam at the café at six. We<b>'re taking</b> the train to Paris on Friday. (We have the tickets.) Lucy<b>'s having</b> a birthday dinner on Saturday. (Her friends know about it.)",
    "We usually say when, with a future time like tonight, tomorrow, on Friday or next week. This shows that we mean the future, not now: I'm playing tennis. (now) I'm playing tennis tomorrow. (the future)",
    "Negatives and questions are the same as for now: I<b>'m not working</b> tomorrow. What <b>are</b> you <b>doing</b> on Saturday? <b>Are</b> you <b>coming</b> to the party? Yes, I am. No, I'm not.",
    "Present continuous or going to? Often both are correct: I'm meeting Sam tomorrow, or I'm going to meet Sam tomorrow. We usually use the present continuous when the plan is arranged, with a time, a place, other people or a ticket. We usually use <b>going to</b> for a plan that is only in our head and is not arranged yet: One day I'm going to write a book.",
    "We do not usually use <b>will</b> for an arrangement: I'm seeing the doctor at ten, not usually I'll see the doctor at ten. Will is more for a decision that we make at the moment we speak.",
    "We usually use the present continuous for things that people can arrange. For the weather, use going to or will: It's going to snow tomorrow, not It's snowing tomorrow.",
  ].join("\n\n"),

  form: [
    "I'm meeting · you're / we're / they're meeting · he's / she's meeting + a future time",
    "I'm not working tomorrow · She isn't coming on Friday",
    "What are you doing on Saturday? · Are you coming?",
    "arranged → present continuous · only in our head → going to · decided now → will",
  ].join("\n"),

  examples: [
    {
      sentence: "I<b>'m meeting</b> Sam at the station at six.",
      why: "The meeting is arranged: Sam knows about it, and there is a time and a place. So we use the present continuous: <b>'m meeting</b>.",
    },
    {
      sentence: "We<b>'re visiting</b> my grandparents on Sunday.",
      why: "My grandparents know that we are coming, so the plan is fixed, and we use <b>'re visiting</b>. On Sunday shows that it is the future, not now.",
    },
    {
      sentence: "My parents <b>are coming</b> for dinner tomorrow.",
      why: "My parents are two people (they), so we use <b>are</b> and the -ing verb. Tomorrow shows that it is the future.",
    },
    {
      sentence: "I<b>'m not working</b> next Monday. I have a day off.",
      why: "The day off is arranged with work. To say no, put not after am: <b>'m not working</b>.",
    },
    {
      sentence: "What <b>are</b> you <b>doing</b> this weekend?",
      why: "We ask about someone's arrangements with the present continuous. <b>Are</b> comes before the subject, you, and the -ing verb comes after it.",
    },
    {
      sentence: "I<b>'m going to</b> learn Japanese one day.",
      why: "This plan is only in my head. Nothing is arranged, so <b>going to</b> is usual here, not the present continuous.",
    },
  ],

  pitfall: {
    wrong: "I'm meet Sam tomorrow.",
    right: "I<b>'m meeting</b> Sam tomorrow.",
    why: "For the future too, the present continuous needs both parts: am, is or are, and the verb with <b>-ing</b>.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "I ___ Sam at the cinema at seven tonight. We bought the tickets yesterday. (meet, present continuous)",
      answers: ["am meeting", "'m meeting"],
      feedback:
        "The meeting is arranged: there is a time, a place and tickets. With I, the present continuous is am and the -ing verb: I am meeting Sam, or I'm meeting Sam.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: ["It's snowing tomorrow.", "It's going to snow tomorrow.", "It snowing tomorrow."],
      answer: 1,
      feedback:
        "People cannot arrange the weather, so we do not use the present continuous for it: It's going to snow tomorrow. It snowing tomorrow has no is, and it is not correct for now or for the future.",
    },
    {
      kind: "choice",
      stem: "A: Are you free on Friday evening? B: No, I'm having dinner with my parents. Why does B use the present continuous?",
      options: [
        "The dinner is happening now.",
        "B decides now, at the moment of speaking.",
        "The dinner is arranged with other people.",
      ],
      answer: 2,
      feedback:
        "B and B's parents have already arranged the dinner, so B uses the present continuous. Friday evening shows that it is the future, not now. For a decision at the moment of speaking, we usually use will.",
    },
    {
      kind: "gap",
      stem: "I ___ tomorrow, so we can go to the beach. (work + not, present continuous)",
      answers: ["am not working", "'m not working"],
      feedback:
        "With I, we use am. To say no, put not after am: I am not working tomorrow, or I'm not working tomorrow. We do not say amn't.",
    },
    {
      kind: "wordbank",
      prompt: "Your friend is having a party next week. Put the words in order to ask where.",
      words: ["having", "you", "the", "Where", "party?", "are"],
      answer: "Where are you having the party?",
      feedback:
        "The question word comes first, then are, then the subject, then the -ing verb: Where are you having the party? The party is arranged, so we use the present continuous.",
    },
    {
      kind: "mistake",
      tokens: ["We're", "haveing", "a", "party", "on", "Saturday."],
      wrongIndex: 1,
      correction: "having",
      feedback:
        "Have ends in an e that we do not say, so we drop the e before -ing: having. We're having a party on Saturday.",
    },
  ],

  levelRationale:
    "English Grammar Profile, A2: the present continuous for future arrangements, usually with a future time, is an A2 point. The A1 topic on the present continuous leaves this use out for that reason. This topic comes after going to and will, so that it can compare all three.",

  sourceNotes:
    "english_grammar.txt, # Present continuous for Future and # Tense, ## Present continuous ('plans and arrangements in the future'). Fixed arrangements, often with a time and place, that usually involve other people or a booking, agree with Swan, and this topic follows them. The note's examples are used only as models, not copied. # Make plans for future says 'we use the present continuous for planned arrangements', which also agrees. Not for the weather or for things people cannot arrange (It's going to snow, not It's snowing tomorrow), and will not usually for arrangements, are authored from Swan, Practical English Usage. Swan notes that going to and the present continuous are often both possible for plans, so the contrast is given with often and usually. Timetables (The train leaves at nine) are a separate topic on the present simple for the future.",
};
