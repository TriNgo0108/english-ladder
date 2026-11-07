import type { SetTopic } from "../../schema";

export const phrasalVerbsInseparable: SetTopic = {
  slug: "phrasal-verbs-inseparable",
  title: "Phrasal verbs you can't separate: look after them",
  summary: "Look after the children, look after them: with these phrasal verbs, the object always comes after the particle. Learn look after, come across and more.",
  level: "b1",
  category: "phrases",
  shape: "set",
  order: 28,
  family: "phrasal-verbs",

  explanation: [
    "Remember: a phrasal verb is a verb and a small word, like up, off, on or out, that we use together, often with a new meaning. The small word after the verb is called the particle. With the phrasal verbs in order 27, the object can go between the verb and the particle: turn the light off, turn it off.",
    "With the phrasal verbs in this topic, the object <b>always</b> comes after the particle, and that is true for a pronoun too: My grandmother looks after my brother. She looks after him. Not She looks him after. We can't put the object between the verb and the particle.",
    "Some of them have <b>two particles</b>, like get on with, look forward to and run out of. The object comes after both: I get on with my neighbours. We've run out of coffee. Get on with is British English. American English usually says get along with, and British speakers use it too.",
    "In look forward to, to is a preposition, so the verb after it takes -ing, as you learned in order 13: I'm looking forward to seeing my cousins. Not looking forward to see. Remember: when the -ing form of a verb works like a noun, as the name of an activity, we call it the gerund.",
    "You usually can't tell from the words if a phrasal verb can be separated, so learn each one with an example. A good dictionary shows it: look after somebody, but turn something off.",
  ].join("\n\n"),

  entries: [
    { headword: "look after", gloss: "keep a person, an animal or a thing safe and give them what they need", inUse: "My aunt <b>looks after</b> the children on Fridays." },
    { headword: "look for", gloss: "try to find something or someone", inUse: "I'm <b>looking for</b> my glasses. Have you seen them?" },
    { headword: "get on with", gloss: "have a friendly relationship with someone. American English says get along with.", inUse: "Do you <b>get on with</b> the other people in your class?" },
    { headword: "come across", gloss: "find something or meet someone when you are not trying to", inUse: "I <b>came across</b> some old photos when I was cleaning my room." },
    { headword: "run into", gloss: "meet someone you know when you didn't plan to", inUse: "Guess who I <b>ran into</b> at the supermarket? My old maths teacher!" },
    { headword: "look forward to", gloss: "feel happy and excited about something that is going to happen. A verb after it takes -ing.", inUse: "The kids are <b>looking forward to</b> the summer holidays." },
    { headword: "take after", gloss: "be like an older person in your family, in the way you look or behave", inUse: "Leo <b>takes after</b> his father. They're both very tall." },
    { headword: "deal with", gloss: "do what is needed to solve a problem or to help someone", inUse: "The manager will <b>deal with</b> your complaint today." },
    { headword: "run out of", gloss: "have no more of something, because you have used it all", inUse: "We've <b>run out of</b> milk. Can you buy some on your way home?" },
    { headword: "get over", gloss: "become well or happy again after an illness or a sad time", inUse: "It took her two weeks to <b>get over</b> the flu." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Your little sister has the same eyes and the same laugh as your dad. She ___ him.",
      options: ["takes after", "looks after", "gets over"],
      answer: 0,
      feedback:
        "Take after means be like an older person in your family, so She takes after him. Look after means keep someone safe, and get over means feel better after an illness or a sad time.",
    },
    {
      kind: "gap",
      stem: "Our neighbour is going to look ___ our cat while we're on holiday. She'll feed it every day.",
      answers: ["after"],
      feedback:
        "Look after means keep an animal or a person safe and give them what they need, like food. Look for means try to find, and the cat isn't lost.",
    },
    {
      kind: "gap",
      stem: "Do you get ___ well with your new boss?",
      answers: ["on", "along"],
      feedback:
        "Get on with someone means have a friendly relationship with them. Well often goes between on and with: get on well with. American English says get along with, and British speakers use it too, so both are correct.",
    },
    {
      kind: "choice",
      stem: "\"I came across this photo in an old book.\" What does came across mean here?",
      options: ["looked for it for a long time", "took it with a camera", "found it by chance"],
      answer: 2,
      feedback:
        "Come across means find something when you are not trying to, so the speaker found the photo by chance. Looking for something is trying to find it.",
    },
    {
      kind: "wordbank",
      prompt: "You and your partner are going out tonight. Ask who is going to take care of the children. Put the words in order.",
      words: ["after", "look", "Who's", "them?", "going", "to"],
      answer: "Who's going to look after them?",
      feedback:
        "Look after can't be separated, so the object comes after the particle, even when it is a pronoun: look after them, not look them after.",
    },
    {
      kind: "mistake",
      tokens: ["We're", "really", "looking", "forward", "to", "see", "you", "next", "week."],
      wrongIndex: 5,
      correction: "seeing",
      feedback:
        "In look forward to, to is a preposition, so the verb after it takes -ing: We're really looking forward to seeing you next week.",
    },
  ],

  levelRationale:
    "English Grammar Profile, B1: learners use phrasal verbs with a fixed object position, including three-word ones such as look forward to and run out of. The English Vocabulary Profile usually gives look after, look for and look forward to as A2 or B1, and get on with, come across, run into, take after, deal with, run out of and get over as B1 (my best reading of the profile, not a checked list). Look forward to + -ing links to order 13 (gerunds vs infinitives), and the topic reuses order 27's definitions of phrasal verb and particle and the A2 definition of gerund.",

  sourceNotes:
    "english_grammar.txt, # Phrasal verb, ## Type 2: the idea that some phrasal verbs can't be separated by the object agrees with Swan, and look after is a good example. But several verbs in the note's list are wrong for this group. Give up and look up (a word) can be separated (give it up, look it up), take off (of a plane) and look up (become better) have no object, and looking forward needs to (look forward to). They are not used here. Think of, work on, get through and hang up on are correct but left out to keep the set short. Swan calls look after, look for and deal with prepositional verbs, because the second word is a preposition; this topic treats them with the other phrasal verbs, as most learner books do, and doesn't teach that name. Get on with (British) and get along with (American, and also British) are from Swan. The headwords come partly from the notes and partly from the task brief, and every gloss is new.",
};
