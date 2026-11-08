import type { SetTopic } from "../../schema";

export const figurativeLanguage: SetTopic = {
  slug: "figurative-language",
  title: "Figurative language: a heated debate, shed light on",
  summary: "A heated debate isn't hot, and a flood of complaints has no water in it. Learn everyday metaphors, the picture behind each one, and how to use them.",
  level: "c1",
  category: "phrases",
  shape: "set",
  order: 13,

  explanation: [
    "A debate can't really be hot, but English speakers talk about a heated debate. Using words in a way that is different from their basic meaning, to create a picture in the listener's mind, is called <b>figurative language</b>. The basic, physical meaning of a word is its <b>literal</b> meaning. In heated water, heated is literal: the water is hot. In a heated debate, it is figurative: the people feel strongly, and often angrily.",
    "Describing one thing with a word or a picture that belongs to something else is called a <b>metaphor</b>. A flood of complaints is a metaphor: the complaints are not water, but they arrive like a flood, all at once and too many to stop. A metaphor doesn't use like or as. She swims like a fish is a comparison, not a metaphor.",
    "Many everyday metaphors come in groups, with one picture behind them:",
    "<b>Heat for strong feelings:</b> a heated debate, a warm welcome. <b>Water and weather for large amounts:</b> a flood of complaints, a wave of strikes, a storm of criticism. <b>Light for understanding and hope:</b> shed light on, a bright future, a glimmer of hope. <b>Holding for understanding:</b> grasp an idea. <b>Journeys and rides for life:</b> at a crossroads, a turning point, a rollercoaster year. <b>Plants for causes:</b> the roots of a problem. <b>Money for time:</b> spend time, save time, waste time.",
    "Knowing the picture helps you guess new metaphors. If light is for understanding, then a report that sheds light on a problem helps people understand it, and a glimmer of hope is a very small sign that things may get better.",
    "These metaphors are so common that most English speakers don't notice them. Most of them are neutral, so you can use them in speech and in most writing, including news reports and essays. That is a difference from many of the idioms in order 12, which are informal. A rollercoaster year and a mountain of emails are more informal, and are common in speech and in the news.",
    "A metaphor still has its collocations. Remember: a collocation is a group of words that we often use together, like make a mistake or heavy rain. We <b>shed</b> light <b>on</b> something, or throw light on it, not give light on it. A flood, a wave and a storm take <b>of</b>: a flood of complaints.",
    "Rollercoaster is also written roller coaster, and American English usually writes it as two words.",
  ].join("\n\n"),

  entries: [
    { headword: "a heated debate", gloss: "a discussion where people argue with strong, often angry feelings. Literally, heated means made hot. We also say a heated argument.", inUse: "There was <b>a heated debate</b> about the new parking rules." },
    { headword: "a warm welcome", gloss: "a friendly welcome that makes you feel happy to be there. Literally, warm means a little hot.", inUse: "The new nurses got <b>a warm welcome</b> from the rest of the ward." },
    { headword: "a flood of complaints", gloss: "a very large number of complaints, all at about the same time. Literally, a flood is a lot of water covering land that is usually dry.", inUse: "After the price rise, the company received <b>a flood of complaints</b>." },
    { headword: "a wave of", gloss: "a sudden increase in something, like strikes or crime, that spreads. Literally, a wave is a line of water that moves across the sea.", inUse: "<b>A wave of</b> strikes spread across the country last winter." },
    { headword: "a storm of criticism", gloss: "a lot of angry criticism, all at the same time. Literally, a storm is very bad weather, with strong winds and rain.", inUse: "The advert caused <b>a storm of criticism</b> online." },
    { headword: "shed light on", gloss: "help people understand something, by giving new information about it. Literally, it means send light onto something so that you can see it. Throw light on means the same.", inUse: "The new study <b>sheds light on</b> why young people are leaving the town." },
    { headword: "a bright future", gloss: "a future that looks happy and successful. Literally, bright means full of light.", inUse: "With her talent, she has <b>a bright future</b> ahead of her." },
    { headword: "a glimmer of hope", gloss: "a very small sign that things may get better. Literally, a glimmer is a weak light that you can only just see.", inUse: "There's still <b>a glimmer of hope</b> that the factory will stay open." },
    { headword: "grasp an idea", gloss: "understand an idea, often a difficult one. Literally, grasp means hold something tightly in your hand.", inUse: "It took me weeks to <b>grasp the idea</b> behind the new system." },
    { headword: "at a crossroads", gloss: "at a moment when you must make an important choice about the future. Literally, a crossroads is a place where two roads cross.", inUse: "After ten years in banking, he was <b>at a crossroads</b>." },
    { headword: "a turning point", gloss: "the moment when a situation starts to change in an important way. Literally, it is the place where a road or a path turns.", inUse: "Winning that prize was <b>a turning point</b> in her career." },
    { headword: "a rollercoaster year", gloss: "a year with many sudden ups and downs. Literally, a rollercoaster is a fairground ride that goes up and down very fast. More informal.", inUse: "It's been <b>a rollercoaster year</b> for the club: two cup finals and a new manager." },
    { headword: "the roots of a problem", gloss: "the real, deep causes of a problem. Literally, roots are the parts of a plant that grow under the ground.", inUse: "We need to deal with <b>the roots of</b> the problem, not just what we can see." },
    { headword: "a mountain of", gloss: "a very large amount of work, paper or emails. Literally, a mountain is a very high hill. More informal.", inUse: "I came back from holiday to <b>a mountain of</b> emails." },
    { headword: "spend time", gloss: "use time doing something. Literally, we spend money, and English often talks about time as if it were money: save time, waste time.", inUse: "I <b>spend</b> far too much <b>time</b> in meetings." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "A news report says: \"The new tax caused ___ of complaints from small businesses.\" Which metaphor from water fits?",
      options: ["a glimmer", "a flood", "a crossroads", "a turning point"],
      answer: 1,
      feedback:
        "A flood of complaints is a very large number of complaints, arriving like water. A glimmer is a weak light, and a crossroads and a turning point are about choices and change, so none of them fits with of complaints.",
    },
    {
      kind: "choice",
      stem: "\"Her research sheds light on how young children learn languages.\" What does sheds light on mean here?",
      options: ["helps people understand", "makes it sound more positive", "makes it less important", "puts lamps in classrooms"],
      answer: 0,
      feedback:
        "Shed light on is a metaphor: light is for understanding, so the research helps people understand how children learn. Puts lamps in classrooms is a literal meaning, and the sentence is not about lamps.",
    },
    {
      kind: "gap",
      stem: "The two ministers had a ___ debate on live TV, and one of them walked out. (heat, one word)",
      answers: ["heated"],
      feedback:
        "A heated debate is a discussion with strong, often angry feelings. The adjective is heated, made from heat, as in heated water, but here it is figurative.",
    },
    {
      kind: "gap",
      stem: "I've read the chapter three times, but I still can't ___ the main idea. (a verb that literally means hold tightly in your hand, one word)",
      answers: ["grasp"],
      feedback:
        "Grasp literally means hold tightly, and figuratively it means understand: I still can't grasp the main idea. Holding is a common picture for understanding.",
    },
    {
      kind: "choice",
      stem: "Which sentence uses bright in a figurative way?",
      options: ["The kitchen is bright and sunny.", "Please turn off that bright light.", "She wore a bright red coat.", "The company has a bright future."],
      answer: 3,
      feedback:
        "A bright future is figurative: a future has no light, but it looks happy and successful. In the other three, bright is literal: full of light, or a strong colour.",
    },
    {
      kind: "mistake",
      tokens: ["The", "new", "report", "sheds", "light", "in", "why", "so", "many", "nurses", "are", "leaving."],
      wrongIndex: 5,
      correction: "on",
      feedback:
        "The collocation is shed light on: The new report sheds light on why so many nurses are leaving. A metaphor keeps its preposition, just like a literal phrase.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to make a sentence with a metaphor from journeys.",
      words: ["point", "The", "a", "talks", "turning", "reached", "yesterday."],
      answer: "The talks reached a turning point yesterday.",
      feedback:
        "A turning point is the moment when a situation starts to change in an important way, like a road that turns: The talks reached a turning point yesterday.",
    },
  ],

  levelRationale:
    "The spec (section 8) places figurative language at C1 as a new point, with no family. English Vocabulary Profile: the figurative senses of heated (a heated debate), grasp (understand), shed light on, a glimmer of hope, a wave of and a storm of are usually given as C1 or C2, while a warm welcome, a bright future, a turning point and spend time are B1 or B2 words in a figurative use that C1 learners can now name. These levels are my best reading of the profile, not a checked list. Collocation reuses its B1 wording. Figurative language, literal and metaphor are defined here, once, because C1 is the first level that talks about them. The quiz asks learners to recognise a figurative use, to pick the metaphor that fits a picture named in the stem, and to keep a metaphor's collocation.",

  sourceNotes:
    "english_grammar.txt has no section on figurative language (a new point in spec section 8), so this topic is authored from Swan, Practical English Usage, and the learner dictionaries. Swan has no entry of its own called metaphor, so the definitions of figurative, literal and metaphor follow the Oxford Advanced Learner's Dictionary: figurative, used in a way that is different from the usual meaning, to create a picture in your mind; literal, the basic or usual meaning. The groups of metaphors with one picture behind them (time as money, understanding as light or holding, life as a journey) follow Lakoff and Johnson, Metaphors We Live By. Shed light on, throw light on, a flood of, a wave of and a storm of are checked in the learner dictionaries from memory; those sites could not be opened during writing. The spelling rollercoaster (British) and roller coaster (both, and usual in American English) follows the Cambridge and Oxford dictionaries from memory. Every gloss names the literal sense, and every gloss is new.",
};
