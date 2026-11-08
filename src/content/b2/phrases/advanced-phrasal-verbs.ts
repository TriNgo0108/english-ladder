import type { SetTopic } from "../../schema";

export const advancedPhrasalVerbs: SetTopic = {
  slug: "advanced-phrasal-verbs",
  family: "phrasal-verbs",
  title: "Advanced phrasal verbs: put up with, come up with, look up",
  summary: "I can't put up with it any more. Learn three-part phrasal verbs that never split, and verbs like look up and get through that have more than one meaning.",
  level: "b2",
  category: "phrases",
  shape: "set",
  order: 22,

  explanation: [
    "At B1 you learned phrasal verbs that can be separated (turn it off) and phrasal verbs that can't (look after them). Remember: a phrasal verb is a verb and a small word, like up, off, on or out, that we use together, often with a new meaning. The small word after the verb is called the particle. This topic adds phrasal verbs with two particles, and phrasal verbs that have more than one meaning.",
    "Some phrasal verbs have <b>three parts</b>: a verb and two particles, like put up with, come up with and get away with. You met two of them at B1: get on with and run out of. The meaning is often hard to guess from the three words, so learn each one with an example: I can't <b>put up with</b> this noise means I can't accept it any more.",
    "Most three-part phrasal verbs, including all the ones in this table, can't be separated. The object always comes after the second particle, and that is true for a pronoun too: I can't <b>put up with</b> him. She <b>came up with</b> a great idea. Say put up with it, not put it up with. Remember: the object is the person or thing that the action goes to.",
    "Many phrasal verbs have <b>more than one meaning</b>, and the meanings can follow different rules. <b>Look up</b> a word means find it in a dictionary or online. It has an object, and it can be separated, like turn off: look the word up, look it up. But things are <b>looking up</b> means things are getting better. That meaning has no object.",
    "<b>Hang up</b> means end a phone call, and it has no object: I said goodbye and hung up. <b>Hang up on</b> someone means end the call suddenly, while the other person is still talking, often because you are angry. Like the other three-part verbs, it is never separated: She hung up on me.",
    "<b>Get through</b> also has two common meanings. On the phone, it means manage to speak to someone: I called the bank five times, but I couldn't get through. We often add to + the person: I finally got through to the manager. With a difficult time as its object, it means live through it until it ends: Her friends helped her get through a very hard year.",
    "Context usually tells you which meaning is meant. If you aren't sure, a good dictionary lists each meaning with its own example.",
  ].join("\n\n"),

  entries: [
    { headword: "put up with", gloss: "accept something or someone unpleasant, without complaining or changing it", inUse: "How do you <b>put up with</b> all that traffic every morning?" },
    { headword: "come up with", gloss: "think of an idea, a plan, an answer or a name", inUse: "Nobody could <b>come up with</b> a good title for the report." },
    { headword: "get away with", gloss: "do something wrong and not be caught or punished for it", inUse: "He copied his essay from the internet and <b>got away with</b> it." },
    { headword: "look down on", gloss: "think that you are better or more important than someone", inUse: "She <b>looks down on</b> anyone who doesn't have a car." },
    { headword: "look up to", gloss: "respect and admire someone, often an older person", inUse: "The younger players all <b>look up to</b> their captain." },
    { headword: "catch up with", gloss: "reach someone who is in front of you, or reach the same level as other people", inUse: "You go ahead. I'll <b>catch up with</b> you at the station." },
    { headword: "cut down on", gloss: "eat, drink, use or do less of something", inUse: "My doctor told me to <b>cut down on</b> salt." },
    { headword: "look up (a word)", gloss: "find a piece of information in a book, a dictionary or online. It can be separated: look it up.", inUse: "If you don't know a word, <b>look it up</b> before you ask me." },
    { headword: "look up (get better)", gloss: "start to get better, after a bad time. It has no object.", inUse: "Business was slow in the winter, but things are <b>looking up</b> now." },
    { headword: "hang up", gloss: "end a phone call by pressing a button or putting the phone down", inUse: "Don't <b>hang up</b>. I haven't finished yet." },
    { headword: "hang up on", gloss: "end a phone call suddenly, while the other person is still talking", inUse: "He got angry and <b>hung up on</b> the sales assistant." },
    { headword: "get through (on the phone)", gloss: "manage to speak to someone on the phone, often after trying many times", inUse: "The line was busy for an hour before I <b>got through</b> to the doctor." },
    { headword: "get through (a difficult time)", gloss: "live through a hard time or a difficult experience until it ends", inUse: "Music helped me <b>get through</b> those long months in hospital." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "My neighbour's dog barks all night and keeps me awake. I can't ___ the noise much longer.",
      options: ["come up with", "look up to", "put up with", "get away with"],
      answer: 2,
      feedback:
        "Put up with means accept something unpleasant: I can't put up with the noise much longer. Come up with is for ideas, look up to is for a person you admire, and get away with is for doing something wrong and not being punished.",
    },
    {
      kind: "gap",
      stem: "We need a new idea for the advert. Who can come ___ with something better? (one word)",
      answers: ["up"],
      feedback:
        "Come up with means think of an idea or a plan: Who can come up with something better? It has three parts, and the object comes after the last one.",
    },
    {
      kind: "gap",
      stem: "He's always late, but the boss never says anything. How does he get ___ with it? (one word)",
      answers: ["away"],
      feedback:
        "Get away with something means do something wrong and not be punished for it. Here the boss never says anything, so he gets away with it. Get on with it means continue with a job, which doesn't fit here.",
    },
    {
      kind: "choice",
      stem: "\"Things are finally looking up for Sam. He's found a job and a nice flat.\" What does looking up mean here?",
      options: ["searching for information", "getting better", "looking at the sky", "respecting someone"],
      answer: 1,
      feedback:
        "With no object, things are looking up means things are getting better. Look up a word, with an object, means search for information, and look up to someone means respect them.",
    },
    {
      kind: "wordbank",
      prompt: "Your flatmate never washes the dishes. Say that you won't accept it any longer. Put the words in order.",
      words: ["up", "it", "won't", "more.", "with", "I", "put", "any"],
      answer: "I won't put up with it any more.",
      feedback:
        "Put up with can't be separated, so the object comes after the last particle, even when it is a pronoun: put up with it, not put it up with. Any more is two words in British English; American English often writes anymore.",
    },
    {
      kind: "choice",
      stem: "I rang the doctor's all morning, but the line was always busy. I couldn't ___.",
      options: ["hang up on", "look up", "catch up", "get through"],
      answer: 3,
      feedback:
        "On the phone, get through means manage to speak to someone. The line was busy, so I couldn't get through. Hang up on needs a person after it, and it means end a call suddenly.",
    },
    {
      kind: "mistake",
      tokens: ["I", "was", "still", "talking", "when", "she", "hung", "up", "to", "me."],
      wrongIndex: 8,
      correction: "on",
      feedback:
        "We say hang up on someone, meaning end the call suddenly while they are still talking: I was still talking when she hung up on me.",
    },
  ],

  levelRationale:
    "English Vocabulary Profile: put up with, come up with, get away with, look down on, look up to, catch up with and cut down on are usually given as B2, and get through (on the phone or a hard time), hang up and look up (find information) as B1 or B2; things are looking up and hang up on are B2 (my best reading of the profile, not a checked list). The English Grammar Profile places three-word phrasal verbs with a fixed object position at B1 and widens the range at B2. The topic builds on B1 phrasal-verbs-separable and phrasal-verbs-inseparable: it reuses their wording for phrasal verb, particle and object, and the three-part rule is the B1 inseparable rule, with the object after the last particle.",

  sourceNotes:
    "english_grammar.txt, # Phrasal verb, ## Type 2 lists look up (become better), look something up, hang up, hang up on someone and get through (on the phone), and those headwords are used. The note puts them all under 'can't be separated', but look something up can be separated (look it up), and look up (become better) and hang up have no object, as the B1 topic already says; Swan agrees, and this topic follows Swan. Get through a difficult time is added from Swan, Practical English Usage. Put up with, come up with, get away with, look down on and catch up with come from the task brief, and look up to and cut down on are added from Swan. Run out of and get on with were taught at B1, so they are named but not repeated as entries. Many three-part verbs can't be separated, but a few take an object after the verb (put someone up to something), so the rule is hedged to most of them and all of the ones in the table. Every gloss and example is new.",
};
