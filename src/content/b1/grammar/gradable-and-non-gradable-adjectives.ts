import type { RuleTopic } from "../../schema";

export const gradableAndNonGradableAdjectives: RuleTopic = {
  slug: "gradable-and-non-gradable-adjectives",
  title: "Gradable and non-gradable adjectives: very cold, absolutely freezing",
  summary: "Very cold, but absolutely freezing. Learn which adjectives take very, which take absolutely, and why really goes with both kinds.",
  level: "b1",
  category: "grammar",
  shape: "rule",
  order: 22,

  explanation: [
    "Remember: an adjective is a word that tells us more about a noun: what the person or thing is like. Most adjectives can be a little or a lot: a bit cold, very cold. These are <b>gradable</b> adjectives. Cold, hot, big, small, tired, hungry, angry, good, bad and interesting are all gradable.",
    "Some adjectives already have a very strong meaning. <b>Freezing</b> means very cold, and <b>exhausted</b> means very tired. We call these <b>extreme</b> adjectives. Other adjectives are all or nothing, like <b>impossible</b>, <b>perfect</b> and <b>dead</b>: something is impossible, or it isn't. Extreme and all-or-nothing adjectives are <b>non-gradable</b>. They can't be a bit more or a bit less.",
    "Use <b>very</b> with gradable adjectives: very cold, very tired, very good. With non-gradable adjectives, use <b>absolutely</b>: absolutely freezing, absolutely exhausted, absolutely perfect. We can also use <b>completely</b> or <b>totally</b>, especially with all-or-nothing adjectives: completely impossible, totally exhausted.",
    "Don't use very with a non-gradable adjective: absolutely freezing, not very freezing. And we don't usually use absolutely with a gradable adjective: very cold, not absolutely cold.",
    "<b>Really</b> is different. It goes with both kinds, so really cold and really freezing are both correct. Really is very common in speech.",
    "Some common pairs, gradable → extreme: cold → freezing · hot → boiling · big → huge, enormous · small → tiny · tired → exhausted · hungry → starving · angry → furious · frightened → terrified · interesting → fascinating · good → brilliant, fantastic, wonderful · bad → terrible, awful.",
  ].join("\n\n"),

  form: [
    "very + gradable adjective: very cold · very tired · very good",
    "absolutely + non-gradable adjective: absolutely freezing · absolutely exhausted · absolutely perfect",
    "completely / totally, especially with all-or-nothing adjectives: completely impossible",
    "really + both kinds: really cold · really freezing",
    "not very freezing · not usually absolutely cold",
  ].join("\n"),

  examples: [
    {
      sentence: "It's <b>very</b> cold today. Take a coat.",
      why: "Cold is gradable: it can be a bit cold or very cold. So we use <b>very</b>.",
    },
    {
      sentence: "Our hotel room was <b>absolutely tiny</b>.",
      why: "<b>Tiny</b> means very small, so it is an extreme adjective. We use absolutely, not very.",
    },
    {
      sentence: "I was <b>absolutely starving</b>, so I ate two pizzas.",
      why: "<b>Starving</b> means very hungry. It is already strong, so it takes <b>absolutely</b>.",
    },
    {
      sentence: "It's <b>completely impossible</b> to park here on Saturdays.",
      why: "Something is impossible or it isn't, so <b>impossible</b> is all or nothing. <b>Completely</b> is common with these adjectives.",
    },
    {
      sentence: "She was <b>very</b> angry. · Then she was <b>absolutely</b> furious.",
      why: "Angry is gradable, so it takes <b>very</b>. <b>Furious</b> means very angry, so it takes <b>absolutely</b>.",
    },
    {
      sentence: "The concert was <b>really</b> good. · The concert was <b>really</b> brilliant.",
      why: "<b>Really</b> goes with both kinds: good is gradable, and brilliant is extreme.",
    },
  ],

  pitfall: {
    wrong: "The view from the top was very amazing.",
    right: "The view from the top was <b>absolutely</b> amazing.",
    why: "Amazing already means very good, so it is non-gradable. Use <b>absolutely</b> (or really), not very.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "After walking for ten hours, we were absolutely ___.",
      options: ["tired", "sleepy", "exhausted"],
      answer: 2,
      feedback:
        "Absolutely goes with non-gradable adjectives. Exhausted means very tired, so it is extreme: we were absolutely exhausted. Tired and sleepy are gradable, so they take very, not absolutely.",
    },
    {
      kind: "choice",
      stem: "Their new house has eight bedrooms. It's ___ enormous.",
      options: ["very", "absolutely", "a bit"],
      answer: 1,
      feedback:
        "Enormous means very big, so it is an extreme adjective. It takes absolutely: It's absolutely enormous. Very and a bit go with gradable adjectives, like big.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "The weather was absolutely wonderful.",
        "The weather was very wonderful.",
        "The weather was absolutely warm.",
      ],
      answer: 0,
      feedback:
        "Wonderful means very good, so it is non-gradable and takes absolutely: The weather was absolutely wonderful. Very doesn't go with wonderful, and warm is gradable, so it takes very, not absolutely.",
    },
    {
      kind: "gap",
      stem: "Be careful with that soup. It's absolutely ___. (hot or boiling)",
      answers: ["boiling", "boiling hot"],
      feedback:
        "After absolutely we need a non-gradable adjective. Boiling means very hot, so it is extreme: It's absolutely boiling. Hot is gradable, so it takes very: very hot.",
    },
    {
      kind: "gap",
      stem: "The test was ___ easy. I finished it in ten minutes. (very or absolutely)",
      answers: ["very"],
      feedback:
        "Easy is gradable: a test can be a bit easy or very easy. So we use very: The test was very easy. Absolutely goes with non-gradable adjectives, like perfect or impossible.",
    },
  ],

  levelRationale:
    "English Grammar Profile: very before an adjective is an A1 point, and degree adverbs such as absolutely and completely before strong adjectives (absolutely amazing, completely impossible) are B1 points. Swan, Practical English Usage, gives the rule taught here: gradable adjectives take very, and extreme or all-or-nothing adjectives take absolutely, completely or totally, while really goes with both. The rule about absolutely with gradable adjectives says not usually, because the line between the two kinds is not sharp for every word, and every quiz item uses a clear pair (tired and exhausted, big and enormous, hot and boiling, good and wonderful). Really is never a wrong option. There is no mistake item: in a very + extreme adjective sentence, changing either the intensifier or the adjective makes a correct sentence, so the one-token rule can't be met, and the choice items test the same error instead.",

  sourceNotes:
    "english_grammar.txt, # Adjectives, ## Gradable and non-gradable adjectives: gradable adjectives with very (dangerous) and non-gradable adjectives with absolutely (brilliant) agree with Swan. The note doesn't say that really goes with both kinds, or that completely and totally are also used, so these points, the two kinds of non-gradable adjective (extreme and all or nothing) and the list of pairs are authored from Swan, Practical English Usage.",
};
