import type { SetTopic } from "../../schema";

export const prepositionsOfMovement: SetTopic = {
  slug: "prepositions-of-movement",
  family: "prepositions-of-place",
  title: "Prepositions of movement: into, across, through, past",
  summary: "Walk across the bridge, through the park and into the shop. Say where someone or something is going with into, out of, over, past and more.",
  level: "b1",
  category: "phrases",
  shape: "set",
  order: 31,

  explanation: [
    "At A1, you learned prepositions of place, like in, on, under and next to. They tell us where a person or thing is: The keys are in my bag. Remember: a preposition is a small word, like in, on or under, that goes before a noun. Prepositions of <b>movement</b> tell us where a person or thing is going. We often use them after verbs like go, come, walk, run, drive, fly, jump and climb.",
    "<b>Into</b> means from outside to inside: She walked into the kitchen. <b>Out of</b> is the opposite: He got out of the car. <b>Onto</b> means to a place on top of something: The cat jumped onto the sofa. After some verbs, like put, jump and fall, in and on can also show movement: Put the milk in the fridge. He jumped in the pool.",
    "<b>Across</b> means to the other side of something flat, like a road, a river or a square: We walked across the square. <b>Over</b> often means the same: We walked over the bridge, or across the bridge. Over is also for going above something, or up and then down on its other side: The plane flew over the mountains. The horse jumped over the wall.",
    "<b>Through</b> means in at one side and out at the other, with something all around: through the door, through the forest, through the tunnel. <b>Under</b> means below something, from one side to the other: The boat went under the bridge.",
    "<b>Along</b> means following a line, like a road, a river or a beach: We walked along the beach. <b>Past</b> means going near something and then further on, without stopping: Go past the bank, and the station is on your left. Past is a preposition here. Passed is the past simple of the verb pass, and it sounds the same.",
    "<b>Up</b> means to a higher place, and <b>down</b> means to a lower place: climb up the hill, run down the stairs. <b>Towards</b> means in the direction of something, getting nearer to it: She walked towards the door. American English usually says toward. <b>Around</b> means in a circle, or to different parts of a place: We cycled around the lake. British English also says round.",
    "We often use these prepositions to give directions: Go along this street, turn left and walk across the park.",
  ].join("\n\n"),

  entries: [
    { headword: "into", gloss: "going from outside a place or a thing to inside it", inUse: "Don't run <b>into</b> the classroom!" },
    { headword: "out of", gloss: "going from inside a place or a thing to outside it", inUse: "A man came <b>out of</b> the shop with a big box." },
    { headword: "onto", gloss: "moving to a place on top of something", inUse: "The ball rolled <b>onto</b> the road." },
    { headword: "across", gloss: "to the other side of a road, a river, a room or an area", inUse: "Be careful when you walk <b>across</b> the road." },
    { headword: "over", gloss: "above something, or up and then down on its other side. It can also mean across.", inUse: "The dog jumped <b>over</b> the fence and ran away." },
    { headword: "through", gloss: "in at one end or side and out at the other, with something all around", inUse: "We drove <b>through</b> the forest for an hour." },
    { headword: "under", gloss: "below something, from one side to the other", inUse: "The road goes <b>under</b> the railway line." },
    { headword: "along", gloss: "following the line of a road, a river, a beach or a wall", inUse: "We walked <b>along</b> the river to the old bridge." },
    { headword: "past", gloss: "near something and then further on, without stopping", inUse: "The bus goes <b>past</b> my house every ten minutes." },
    { headword: "up", gloss: "to a higher place", inUse: "It took us two hours to climb <b>up</b> the hill." },
    { headword: "down", gloss: "to a lower place", inUse: "The children ran <b>down</b> the stairs to open their presents." },
    { headword: "towards", gloss: "in the direction of something, getting nearer to it. American English says toward.", inUse: "A big dog was running <b>towards</b> us, so we stopped." },
    { headword: "around", gloss: "in a circle, or to different parts of a place. British English also says round.", inUse: "We spent the day walking <b>around</b> the old town." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "The cat jumped ___ the table and ate the fish.",
      options: ["onto", "into", "through"],
      answer: 0,
      feedback:
        "The cat moved to a place on top of the table, so we use onto. Into is for going inside something, and through is for going in at one side and out at the other.",
    },
    {
      kind: "choice",
      stem: "The train went ___ a long tunnel under the mountains.",
      options: ["across", "onto", "through"],
      answer: 2,
      feedback:
        "A tunnel has something all around it, and the train goes in at one end and out at the other, so we use through. Across is for going to the other side of something flat.",
    },
    {
      kind: "gap",
      stem: "There's no bridge, so we'll have to swim ___ the river to get to the other side. (across, along or into)",
      answers: ["across", "over"],
      feedback:
        "To go to the other side of a river, we use across: swim across the river. Over often means the same, so it is correct too. Along means following the river, not going to the other side.",
    },
    {
      kind: "gap",
      stem: "Don't stop at the bank. Walk ___ it, and the post office is the next building. (into, past or through)",
      answers: ["past", "by"],
      feedback:
        "Past means going near something and then further on, without stopping. By is also correct here. Be careful with the spelling: past, not passed.",
    },
    {
      kind: "choice",
      stem: "He walked ___ me, but he stopped before he reached me.",
      options: ["to", "towards", "into"],
      answer: 1,
      feedback:
        "Towards means in the direction of something, getting nearer to it. He didn't reach me, so towards is right. Walked to me means he reached me, and walked into me means he hit me.",
    },
    {
      kind: "mistake",
      tokens: ["She", "got", "out", "from", "the", "taxi", "and", "paid", "the", "driver."],
      wrongIndex: 3,
      correction: "of",
      feedback:
        "Out of is two words that go together: She got out of the taxi. Out from is a common mistake.",
    },
  ],

  levelRationale:
    "English Grammar Profile, B1: learners use a range of prepositions of movement, such as into, out of, across, through, along, past and towards, often in directions. This topic extends the A1 topic on prepositions of place, the family's A1 topic, and reuses its definition of preposition. Up, down, under and over are A1 or A2 words, and they are added because learners need them with the others to describe a route.",

  sourceNotes:
    "english_grammar.txt, # Preposition of movement: into, across, past, over and towards agree with Swan. The note's out of ('no more of something is available') is a different meaning, as in run out of (order 28), not movement, so this topic teaches out of as the opposite of into. Across and over can both mean to the other side, as Swan says, so the swim gap accepts both. After put, jump and fall, Swan says in and on are also common for movement, which agrees with the A1 topic, where the freezer gap accepts in, inside and into. Onto, through, along, under, up, down and around (British also round) and the past and passed spelling point are authored from Swan, Practical English Usage. The headwords come from the note and the task brief, and every gloss is new.",
};
