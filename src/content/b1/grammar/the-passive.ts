import type { RuleTopic } from "../../schema";

export const thePassive: RuleTopic = {
  slug: "the-passive",
  family: "passive",
  title: "The passive: My bike was stolen",
  summary: "Rice is grown in many parts of Asia. My bike was stolen last night. Use be and the past participle when the action matters more than who did it.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 15,

  explanation: [
    "In most sentences, the subject is the person or thing that does the action: Someone <b>stole</b> my bike. This is called an <b>active</b> sentence. In a <b>passive</b> sentence, the subject is the person or thing that the action <b>happens to</b>: My bike <b>was stolen</b>. Remember: the subject is the person or thing that the sentence is about.",
    "We use the passive when we don't know who did the action, when it is not important, or when it is clear: My bike was stolen. (I don't know who stole it.) Rice <b>is grown</b> in many parts of Asia. (Farmers grow it, but that is clear.) The passive is common in news, in formal writing and in notices. In everyday speech, the active is more common.",
    "To make the passive, use <b>be</b> and the <b>past participle</b> of the verb. Remember: the past participle is the form of a verb that comes after have: seen, gone, finished. In the passive, it comes after be. The tense is in be: present simple <b>am / is / are</b> + past participle: Cars <b>are made</b> in this factory. Past simple <b>was / were</b> + past participle: The windows <b>were cleaned</b> yesterday. Present perfect <b>has / have been</b> + past participle: The room <b>has been booked</b>. Will: <b>will be</b> + past participle: Your parcel <b>will be delivered</b> tomorrow.",
    "To say no, put not after the first word (is, was, has or will): The letter <b>wasn't sent</b>. The work <b>hasn't been finished</b>. To ask a question, put that first word before the subject: <b>Was</b> your car <b>damaged</b>? <b>Where were</b> these shoes <b>made</b>?",
    "To say who did the action, use <b>by</b>. Use it <b>only when</b> the person is important or new information: Hamlet <b>was written by</b> Shakespeare. We don't use by when the person is not known or not important: My bike was stolen, not My bike was stolen by someone.",
    "Only transitive verbs have a passive (order 14). Intransitive verbs, like happen, arrive and die, have no object, so they have no passive: The accident <b>happened</b> at night, not The accident was happened. Our train <b>arrived</b> late, not was arrived.",
    "In informal English, people sometimes use <b>get</b> instead of be: My phone <b>got stolen</b>. In this topic, we use be.",
  ].join("\n\n"),

  form: [
    "be + past participle",
    "present simple: am / is / are + past participle · Cars are made in this factory.",
    "past simple: was / were + past participle · The windows were cleaned.",
    "present perfect: has / have been + past participle · The room has been booked.",
    "will: will be + past participle · Your parcel will be delivered tomorrow.",
    "by + the person, only when it is important · Hamlet was written by Shakespeare.",
    "intransitive verbs (happen, arrive) → no passive",
  ].join("\n"),

  examples: [
    {
      sentence: "Rice <b>is grown</b> in many parts of Asia.",
      why: "Present simple passive: <b>is</b> + past participle. Who grows it is clear, so there is no by.",
    },
    {
      sentence: "The window <b>was broken</b> last night.",
      why: "Past simple passive: <b>was</b> + past participle. We don't know who broke it.",
    },
    {
      sentence: "The room <b>has been booked</b> for Friday.",
      why: "Present perfect passive: <b>has been</b> + past participle.",
    },
    {
      sentence: "Your parcel <b>will be delivered</b> tomorrow.",
      why: "Will passive: <b>will be</b> + past participle. Delivered is a regular past participle, with -ed.",
    },
    {
      sentence: "Hamlet <b>was written by</b> Shakespeare.",
      why: "Who wrote it is important here, so we use <b>by</b>. Write is irregular: write → wrote → written.",
    },
    {
      sentence: "Our train <b>arrived</b> late.",
      why: "Arrive is intransitive, so it has no passive. We don't say Our train was arrived.",
    },
  ],

  pitfall: {
    wrong: "This castle built in 1600.",
    right: "This castle <b>was built</b> in 1600.",
    why: "The castle didn't build anything, so we need the passive: <b>be</b> + past participle. Don't forget be.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "These photos ___ by my grandfather in the 1960s.",
      options: ["took", "were taken", "are taken", "have taken"],
      answer: 1,
      feedback:
        "The photos didn't take anything, so we need the passive. The 1960s is in the past, so we use the past simple passive: were taken. Take is irregular: take → took → taken.",
    },
    {
      kind: "gap",
      stem: "Today, Spanish ___ in most countries in South America. (speak)",
      answers: ["is spoken"],
      feedback:
        "Spanish doesn't speak, so we need the passive, and today tells us it is the present simple: is + past participle. Speak is irregular: speak → spoke → spoken.",
    },
    {
      kind: "gap",
      stem: "My phone ___ from my bag on the train yesterday. (steal)",
      answers: ["was stolen", "got stolen"],
      feedback:
        "Yesterday is a finished time, so we use the past simple passive: My phone was stolen. Steal is irregular: steal → stole → stolen. In informal English, got stolen is also correct.",
    },
    {
      kind: "gap",
      stem: "Good news! Your car ___ and you can collect it now. (repair, present perfect)",
      answers: ["has been repaired", "'s been repaired"],
      feedback:
        "The car didn't repair anything, so we need the passive. In the present perfect, it is has been + past participle: Your car has been repaired. Your car's been repaired is also correct.",
    },
    {
      kind: "gap",
      stem: "The results of the competition ___ next week. (announce, will)",
      answers: ["will be announced", "'ll be announced"],
      feedback:
        "The results don't announce anything, so we need the passive. With will, it is will be + past participle: The results will be announced next week.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "The accident happened at night.",
        "The accident was happened at night.",
        "The accident is happened at night.",
        "The accident was happen at night.",
      ],
      answer: 0,
      feedback:
        "Happen is intransitive. It has no object, so it has no passive: The accident happened at night.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a question.",
      words: ["built?", "was", "house", "When", "this"],
      answer: "When was this house built?",
      feedback:
        "In a passive question, the question word comes first, then was, then the subject: When was this house built?",
    },
    {
      kind: "mistake",
      tokens: ["The", "museum", "was", "build", "in", "1850."],
      wrongIndex: 3,
      correction: "built",
      feedback:
        "In the passive, we use be and the past participle: The museum was built in 1850. Build is irregular: build → built → built.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the present simple and past simple passive are B1 points, and the present perfect and will passive appear at B1 too. The spec (section 8) places the passive at B1 and makes it the family's first topic; more passive forms (the passive with modals and continuous tenses, It is said that …) are left to B2, the family's next level. It builds on the past participle (order 1) and transitive and intransitive verbs (order 14), because only transitive verbs have a passive. Every gap gives the subject in the stem, so the active is not possible, and the gaps name the tense where two tenses could fit. Get + past participle is mentioned as informal, and the past simple gap accepts got stolen.",

  sourceNotes:
    "english_grammar.txt, # The passive: the passive when the person who does the action is not important or not known, and be in the right tense with a past participle of a transitive verb, agree with Swan. The note says past participant; this topic says past participle, as order 1 does. The note's passive + infinitive (He is said to be …) and passives with two objects (You are given your seat number) are above B1 and left to B2. The four tenses, negatives and questions, by for the person, intransitive verbs with no passive and get in informal English are authored from Swan, Practical English Usage.",
};
