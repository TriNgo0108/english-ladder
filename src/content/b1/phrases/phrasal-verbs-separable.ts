import type { SetTopic } from "../../schema";

export const phrasalVerbsSeparable: SetTopic = {
  slug: "phrasal-verbs-separable",
  title: "Phrasal verbs you can separate: turn it off",
  summary: "Turn off the light or turn the light off, but always turn it off. Learn everyday phrasal verbs whose object can go in the middle.",
  level: "b1",
  category: "phrases",
  shape: "set",
  order: 27,

  explanation: [
    "A <b>phrasal verb</b> is a verb and a small word, like up, off, on or out, that we use together. Together, the two words often have a new meaning: put off a meeting means move it to a later time, not put it somewhere. The small word after the verb is called the <b>particle</b>. Learn each phrasal verb as one thing, like a new word.",
    "Every phrasal verb in this table can have an object. Remember: the object is the person or thing that the action goes to. When the object is a noun, it can usually go after the particle or between the verb and the particle. Both are correct: Turn off the light. Turn the light off. She picked up her bag. She picked her bag up. When the object is long, it usually goes after the particle: I threw away all the old magazines in the kitchen.",
    "When the object is a <b>pronoun</b>, like it, them, her or me, it goes between the verb and the particle: turn it off, not turn off it. Can you wake me up at seven? Not wake up me. Remember: a pronoun is a short word that we use in place of a noun.",
    "Many phrasal verbs have more than one meaning. Pick up can mean lift something from the floor or a table, and it can also mean go and get someone in a car. Some can also be used with no object: I woke up at six. In order 28, you will see phrasal verbs that we can't separate, like look after. A good dictionary shows where the object can go: turn something off, but look after somebody.",
    "British English says fill in a form, and fill out a form is also common. American English usually says fill out.",
  ].join("\n\n"),

  entries: [
    { headword: "turn on", gloss: "make a light or a machine start working", inUse: "It's getting dark. Can you <b>turn on</b> the lamp?" },
    { headword: "turn off", gloss: "make a light or a machine stop working", inUse: "Please <b>turn</b> your phones <b>off</b> before the film starts." },
    { headword: "turn up", gloss: "make the sound, heat or light stronger", inUse: "I love this song. <b>Turn</b> the radio <b>up</b>!" },
    { headword: "turn down", gloss: "make the sound, heat or light weaker", inUse: "Could you <b>turn</b> the music <b>down</b>? The baby is sleeping." },
    { headword: "put on", gloss: "start to wear clothes, shoes, glasses and so on", inUse: "<b>Put</b> a jumper <b>on</b>. It's cold outside." },
    { headword: "take off", gloss: "remove clothes or shoes from your body", inUse: "Please <b>take off</b> your shoes at the door." },
    { headword: "try on", gloss: "put on clothes in a shop to see if they fit and look good", inUse: "Can I <b>try</b> these jeans <b>on</b>, please?" },
    { headword: "pick up", gloss: "lift something or someone from the floor or a table. It can also mean go and get someone in a car.", inUse: "Dad will <b>pick</b> us <b>up</b> from the station at six." },
    { headword: "put down", gloss: "stop holding something and put it on the floor or a table", inUse: "<b>Put</b> that knife <b>down</b>! It's very sharp." },
    { headword: "give back", gloss: "return something to the person it belongs to", inUse: "Can I borrow your pen? I'll <b>give</b> it <b>back</b> after the lesson." },
    { headword: "throw away", gloss: "put something in the bin because you don't want it any more", inUse: "Don't <b>throw away</b> those boxes. We can use them." },
    { headword: "fill in", gloss: "write the answers or information that a form asks for. American English says fill out.", inUse: "Please <b>fill in</b> this card with your name and address." },
    { headword: "write down", gloss: "write something on paper, so that you don't forget it", inUse: "<b>Write</b> my number <b>down</b>, and call me tomorrow." },
    { headword: "look up", gloss: "check the meaning of a word, or a fact, in a dictionary or online", inUse: "If you don't know a word, <b>look</b> it <b>up</b>." },
    { headword: "wake up", gloss: "make someone stop sleeping. With no object, it means stop sleeping yourself.", inUse: "The neighbours' dog <b>woke</b> me <b>up</b> at five." },
    { headword: "put off", gloss: "move a meeting or an event to a later time", inUse: "We had to <b>put off</b> the party because Sam was ill." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "It's cold and windy, and you're going out. Your mum says: \"___ your coat!\"",
      options: ["Take off", "Put on", "Try on"],
      answer: 1,
      feedback:
        "Put on means start to wear clothes, so Put on your coat is right before you go out. Take off is the opposite. Try on is for a shop, when you want to see if clothes fit.",
    },
    {
      kind: "choice",
      stem: "Two of these sentences are correct. Which one is wrong?",
      options: ["She picked up the baby.", "She picked the baby up.", "She picked up her."],
      answer: 2,
      feedback:
        "With a noun object, like the baby, both places are correct: picked up the baby or picked the baby up. A pronoun, like her, must go between the verb and the particle: She picked her up.",
    },
    {
      kind: "gap",
      stem: "This form is long, so please fill it ___ before your interview.",
      answers: ["in", "out"],
      feedback:
        "We fill in a form: we write the answers that it asks for. American English usually says fill out, and British speakers use it too, so both are correct.",
    },
    {
      kind: "gap",
      stem: "The TV is on, but it's very quiet. Can you turn it ___?",
      answers: ["up"],
      feedback:
        "Turn up means make the sound stronger, so you can hear it better. Turn down is the opposite. The TV is already on, so we don't need turn it on.",
    },
    {
      kind: "wordbank",
      prompt: "Your children finish school at three, but you're still at work. Ask a friend to collect them. Put the words in order.",
      words: ["them", "up?", "Can", "pick", "you"],
      answer: "Can you pick them up?",
      feedback:
        "Them is a pronoun, so it goes between the verb and the particle: pick them up. Not pick up them.",
    },
    {
      kind: "mistake",
      tokens: ["I", "looked", "the", "word", "on", "in", "my", "dictionary."],
      wrongIndex: 4,
      correction: "up",
      feedback:
        "To find a word in a dictionary, we look it up: I looked the word up in my dictionary. Look on is not a phrasal verb with this meaning.",
    },
  ],

  levelRationale:
    "English Grammar Profile, B1: learners use a growing range of phrasal verbs, and the position of the object (turn the light off, turn it off) is a B1 point. The verbs here are everyday ones that the English Vocabulary Profile usually gives as A2 or B1 (my best reading of the profile, not a checked list), such as turn on, turn off, put on, take off, pick up, look up, wake up, fill in and throw away. Put off (delay) may be listed a little higher, but its example makes it clear. The object is taught with the A1 definition, and pronoun with its earlier B1 wording.",

  sourceNotes:
    "english_grammar.txt, # Phrasal verb, ## Type 1: the note that a noun object can go in either place (put down the heavy box, put the heavy box down) and that a pronoun must go in the middle (put it down) agrees with Swan. Swan adds that a long object usually goes after the particle, so the noun rule is hedged with usually. The note's opening line calls the particle a preposition or adverb; Swan calls the separable ones adverb particles, so this topic uses the plain word particle and does not teach that difference. The note's examples get down, get back, get out and get across are left out: get across and get down (make sad) are above B1. The headwords and every gloss are new. Fill in (British) and fill out (American) are from Swan.",
};
