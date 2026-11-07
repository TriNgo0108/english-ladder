import type { RuleTopic } from "../../schema";

export const wordBuildingSuffixes: RuleTopic = {
  slug: "word-building-suffixes",
  title: "Word building with suffixes: kind → kindness, care → careful",
  summary: "Kind → kindness, care → careful, careful → carefully. Add an ending to make a noun, an adjective or an adverb, and watch the spelling.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 26,

  explanation: [
    "A <b>suffix</b> is a group of letters that we add to the end of a word to make a new word: kind → kind<b>ness</b>, care → care<b>ful</b>. The suffix often changes the kind of word: a verb or an adjective becomes a noun, or a noun becomes an adjective. When you learn a new word, learn its other forms too, because not every word takes every suffix. A dictionary shows which forms exist.",
    "Some suffixes make <b>nouns</b>. <b>-ment</b> and <b>-tion</b> make nouns from verbs: improve → improvement, agree → agreement, pay → payment, inform → information, educate → education. Some verbs take -sion: decide → decision. <b>-ness</b> and <b>-ity</b> make nouns from adjectives: kind → kindness, ill → illness, popular → popularity, real → reality. Remember: a noun is a word for a person, a thing, an animal or a place.",
    "<b>-er</b> and <b>-or</b> make a noun for the person who does something: teach → teacher, play → player, drive → driver, visit → visitor, direct → director. Learn which words take -or.",
    "Some suffixes make <b>adjectives</b>, often from nouns. <b>-ful</b> means with or full of: help → helpful, use → useful, peace → peaceful. <b>-less</b> means without: home → homeless, use → useless. So careful and careless are opposites. <b>-able</b> often means that you can do it: wash → washable (you can wash it), enjoy → enjoyable, comfort → comfortable. <b>-ous</b>, <b>-al</b> and <b>-ive</b> make adjectives too: fame → famous, nature → natural, music → musical, attract → attractive. Remember: an adjective is a word that tells us more about a noun: what the person or thing is like.",
    "To make an <b>adverb</b> from an adjective, add <b>-ly</b>, as you learned at A2: careful → carefully, peaceful → peacefully, natural → naturally.",
    "The spelling sometimes changes. A consonant + -y usually changes to i: happy → happiness, beauty → beautiful, easy → easily. We usually drop a final -e before a suffix that starts with a vowel, like -ous, -ive, -al or -ity: fame → famous, create → creative, nature → natural. We usually keep the e before a suffix that starts with a consonant, like -ment, -ful, -less, -ness or -ly: improve → improvement, use → useful, polite → politeness, nice → nicely. But true → truly, as you learned at A2. The suffix -ful has one l: careful, not carefull. With -ly, there are two: carefully.",
  ].join("\n\n"),

  form: [
    "nouns: verb + -ment / -tion · adjective + -ness / -ity · verb + -er / -or for a person",
    "adjectives: noun + -ful (with) / -less (without) · -able · -ous · -al · -ive",
    "adverbs: adjective + -ly: careful → carefully",
    "spelling: happy → happiness · fame → famous · create → creative · -ful has one l",
  ].join("\n"),

  examples: [
    {
      sentence: "Thanks for the <b>information</b>.",
      why: "Inform is a verb. With <b>-tion</b> (here -ation), it becomes a noun.",
    },
    {
      sentence: "Her <b>happiness</b> was clear to everyone.",
      why: "Happy is an adjective, and <b>-ness</b> makes it a noun. The y changes to i.",
    },
    {
      sentence: "Our <b>teacher</b> gave us a lot of homework.",
      why: "<b>-er</b> makes a noun for the person who does something: the person who teaches.",
    },
    {
      sentence: "This is a really <b>useful</b> app. · My old phone is <b>useless</b>.",
      why: "<b>Useful</b> means with a use. <b>Useless</b> means without a use.",
    },
    {
      sentence: "The city is <b>famous</b> for its food.",
      why: "Fame is a noun. With <b>-ous</b>, it becomes an adjective, and the e at the end goes.",
    },
    {
      sentence: "She's a very <b>creative</b> person.",
      why: "Create is a verb. With <b>-ive</b>, it becomes an adjective, and the e at the end goes.",
    },
    {
      sentence: "Please drive <b>carefully</b>.",
      why: "Careful is an adjective. With <b>-ly</b>, it becomes an adverb, and now there are two l's.",
    },
  ],

  pitfall: {
    wrong: "She is a very success businesswoman.",
    right: "She is a very <b>successful</b> businesswoman.",
    why: "Before a noun we need an adjective. Success is a noun, so add <b>-ful</b>: successful.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "We need to make a few ___ to the plan before Friday. (improve)",
      answers: ["improvements"],
      feedback:
        "After a few we need a plural noun. Improve is a verb, and -ment makes it a noun: a few improvements.",
    },
    {
      kind: "gap",
      stem: "There's a ___ that the flight will be late. (possible)",
      answers: ["possibility"],
      feedback:
        "After a we need a noun. Possible is an adjective, and -ity makes it a noun. The spelling changes: possible → possibility.",
    },
    {
      kind: "gap",
      stem: "Don't walk on that old bridge. It isn't safe. It's ___. (danger)",
      answers: ["dangerous"],
      feedback:
        "After It's we need an adjective here. Danger is a noun, and -ous makes it an adjective: It's dangerous.",
    },
    {
      kind: "gap",
      stem: "My sister wants to be an ___ in films. (act)",
      answers: ["actor", "actress"],
      feedback:
        "We need a noun for the person who acts. Act takes -or, not -er: an actor. Actress is also correct for a woman, but many people now say actor for everyone.",
    },
    {
      kind: "choice",
      stem: "Be ___ with that knife. It's very sharp.",
      options: ["careless", "careful", "caring"],
      answer: 1,
      feedback:
        "The knife is sharp, so you need to take care: Be careful. Careless means without care, which is the opposite. Caring means kind to other people.",
    },
    {
      kind: "choice",
      stem: "She sings ___. Everyone loves her voice.",
      options: ["beautiful", "beauty", "beautifully"],
      answer: 2,
      feedback:
        "The word tells us how she sings, so we need an adverb: beautifully. Beautiful is an adjective, and beauty is a noun. The y in beauty changes to i.",
    },
    {
      kind: "mistake",
      tokens: ["Their", "happyness", "is", "important", "to", "me."],
      wrongIndex: 1,
      correction: "happiness",
      feedback:
        "When happy takes -ness, the y changes to i: Their happiness is important to me.",
    },
  ],

  levelRationale:
    "Word building is not a grammar point in the English Grammar Profile. The English Vocabulary Profile and Cambridge B1 Preliminary use the common suffixes taught here (-ment, -tion, -ness, -ity, -er, -or, -ful, -less, -able, -ous, -al, -ive and -ly) at B1, and the spec (section 8) places word building at B1. Every gap gives the stem in brackets and a slot that needs one kind of word (a few + plural noun, a + noun, It's + adjective, an + person noun), so a learner can't give a correct word of another kind. Improving is not possible after a few, so improvements is the only answer there. Prefixes (un-, dis-) and -en verbs (sharpen, strengthen) are left to B2.",

  sourceNotes:
    "english_grammar.txt, # Word building: adjective + ness = noun (sharpness) agrees with Swan. Adjective + -en = verb (sharpen) and the irregular forms (length, lengthen; strength, strengthen) are left to B2. # Nouns and adjectives: happiness, nervousness, peaceful and security agree with this topic. It gives each pair as noun → adjective, but happiness and nervousness are made from the adjectives, not the other way round. Afraid, frightened and terrified are separate words, not suffixes. # Word form: apologise, apology and apologetic are above B1. The note calls apologised in They should have already apologised an adjective, but there it is the past participle of a verb. The list of suffixes, the meanings of -ful, -less and -able, and the spelling rules are authored from Swan, Practical English Usage.",
};
