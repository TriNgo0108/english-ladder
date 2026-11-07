import type { RuleTopic } from "../../schema";

export const articlesWithAbstractAndGeneralNouns: RuleTopic = {
  slug: "articles-with-abstract-and-general-nouns",
  family: "articles",
  title: "Articles with abstract and general nouns: life, the life of a writer",
  summary: "Life is short. Dogs need exercise. The rich are getting richer. Choose no article or the for ideas, feelings, groups and whole kinds of things.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 16,

  explanation: [
    "At A2, we learned that we use <b>the</b> when the listener knows which person or thing we mean, and that we use <b>no article</b> when we talk about things in general, with plural nouns and uncountable nouns: I like <b>dogs</b>. <b>Water</b> is important. Remember: an uncountable noun is a thing that we cannot count as one, two, three. This topic uses the same rules for ideas and feelings, and adds two more ways to talk about things in general.",
    "A word for an idea, a feeling or a quality, something that we can't see or touch, is called an <b>abstract noun</b>: life, love, happiness, time, freedom, education, nature, history. Many abstract nouns are uncountable. When we use them <b>in general</b>, we use no article, as with water: <b>Life</b> is short. <b>Happiness</b> is more important than money. <b>Education</b> should be free for everyone. Say Life is short, not The life is short.",
    "When other words make the noun <b>specific</b>, so that it means one particular life, history or kind of music, use <b>the</b>. This is the A2 rule that other words can say which one, and it works for abstract nouns too. It often happens with of, or with a relative clause: <b>the</b> life <b>of a writer</b>, <b>the</b> history <b>of Japan</b>, <b>the</b> music <b>that I like</b>. Compare: <b>Music</b> helps me relax. (Music in general.) <b>The</b> music in this film is beautiful. (The music of one film.)",
    "An adjective before the noun doesn't usually make it specific, so we still use no article: <b>Modern art</b> is hard to understand. <b>Japanese history</b> is very interesting. Compare: <b>the</b> history <b>of Japan</b>, with of.",
    "<b>The</b> and an adjective can mean a whole <b>group of people</b>: <b>the rich</b> (rich people), <b>the poor</b>, <b>the young</b>, <b>the elderly</b>, <b>the homeless</b>, <b>the unemployed</b>. Remember: an adjective is a word that tells us more about a noun: what the person or thing is like. This works with some adjectives that describe people's situation or health. The group is plural, so the verb is plural: The rich <b>are</b> getting richer. Don't add -s to the adjective: the poor, not the poors. For one person, use a noun: a homeless man, not a homeless.",
    "<b>The</b> and a <b>singular</b> countable noun can mean a whole kind of animal, plant or machine: <b>The tiger</b> is in danger. (Tigers in general.) Who invented <b>the telephone</b>? This is more formal, and it is common in science, history and news. In conversation, we usually use a plural noun with no article: <b>Tigers</b> are in danger. Both are correct. This doesn't change the A2 rule: with a <b>plural</b> noun in general, we use no article, and the tigers usually means particular tigers, like the tigers in our zoo.",
  ].join("\n\n"),

  form: [
    "no article + abstract or plural noun in general: Life is short. Dogs need exercise.",
    "the + noun made specific (often with of or a relative clause): the life of a writer · the music that I like",
    "adjective + noun in general → usually no article: Modern art · Japanese history",
    "the + adjective = a group of people, with a plural verb: The rich are getting richer. · not: the poors",
    "the + singular noun = a whole kind (formal): The tiger is in danger. · Who invented the telephone?",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>Time</b> is more valuable than money.",
      why: "Time is an abstract noun, used here in general, so it has no article.",
    },
    {
      sentence: "<b>The</b> life of a farmer is very hard.",
      why: "Of a farmer makes life specific: one kind of life, not life in general. So we use <b>the</b>.",
    },
    {
      sentence: "<b>Children</b> need love and attention.",
      why: "This is about all children, and about love and attention in general, so there is no article.",
    },
    {
      sentence: "The new law will help <b>the elderly</b>.",
      why: "<b>The elderly</b> means elderly people as a group. The adjective has no -s.",
    },
    {
      sentence: "<b>The</b> elephant is the largest land animal.",
      why: "<b>The</b> and a singular noun can mean the whole kind: elephants in general. Elephants are the largest land animals is also correct.",
    },
  ],

  pitfall: {
    wrong: "The education is very important for children.",
    right: "<b>Education</b> is very important for children.",
    why: "Education here means education in general. It is an abstract noun, so we use no article.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence is about friendship in general?",
      options: [
        "The friendship is more important than money.",
        "A friendship is more important than the money.",
        "Friendship is more important than money.",
      ],
      answer: 2,
      feedback:
        "Friendship and money are both used in general here, so neither has an article: Friendship is more important than money. We don't use the for an abstract noun in general.",
    },
    {
      kind: "choice",
      stem: "Which sentence is about tigers in general, not about particular tigers?",
      options: [
        "The tigers at our zoo are very old.",
        "The tiger is in danger of disappearing.",
        "A tiger escaped from the zoo last night.",
      ],
      answer: 1,
      feedback:
        "The and a singular noun can mean the whole kind, so The tiger is in danger of disappearing is about all tigers. The tigers at our zoo are particular tigers, and a tiger that escaped is one tiger.",
    },
    {
      kind: "gap",
      stem: "We know very little about ___ early life of Shakespeare. (a, an or the)",
      answers: ["the"],
      feedback:
        "Of Shakespeare makes early life specific: the early life of one person. So we use the: the early life of Shakespeare.",
    },
    {
      kind: "gap",
      stem: "The government should do more to help ___ homeless. (a, an or the)",
      answers: ["the"],
      feedback:
        "The and an adjective can mean a whole group of people: the homeless means homeless people. With a or an, we would need a noun: a homeless person.",
    },
    {
      kind: "mistake",
      tokens: ["The", "rich", "are", "getting", "richer", "and", "the", "poors", "are", "getting", "poorer."],
      wrongIndex: 7,
      correction: "poor",
      feedback:
        "The and an adjective can mean a group of people. The adjective doesn't change, so there is no -s: the rich and the poor. The verb is plural: the poor are.",
    },
    {
      kind: "mistake",
      tokens: ["An", "elderly", "was", "waiting", "at", "the", "bus", "stop."],
      wrongIndex: 1,
      correction: "elderly man",
      feedback:
        "The elderly means elderly people as a group. For one person, we use a noun after the adjective: An elderly man was waiting at the bus stop. An elderly woman or an elderly person is also correct.",
    },
    {
      kind: "mistake",
      tokens: ["My", "grandfather", "told", "me", "about", "a", "life", "of", "a", "soldier", "in", "the", "war."],
      wrongIndex: 5,
      correction: "the",
      feedback:
        "Of a soldier in the war makes life specific: one kind of life. So we use the: He told me about the life of a soldier in the war.",
    },
  ],

  levelRationale:
    "English Grammar Profile: the zero article with abstract and general uncountable nouns, the with a noun made specific by of or a relative clause, the + adjective for a group of people, and the + singular noun for a whole kind are B1 to B2 points. This is the articles family's B2 topic after A1 articles-a-an and A2 articles-the-and-zero-article, and it keeps A2's two rules in A2's own words: the when the listener knows which one, and no article for plural and uncountable nouns in general. The + singular noun for a kind, which A2 left to a later level, is taught here, and the topic says that it doesn't change A2's plural rule. A + singular noun for any one of a kind (A tiger can swim) is left out, so that a gap never has a and the both correct. No article is tested only in choice items, because a gap can't be left empty, as in the A2 topic. Each gap names a, an or the, so that our or a possessive does not fit. The two the + adjective mistake items follow Swan: the adjective takes no -s, and one person needs a noun (an elderly man); in the second item, an elderly can't become the elderly, because the verb is was.",

  sourceNotes:
    "english_grammar.txt, # Article: no article for appendices and tumours in general, and the for the appendix when it is specific, agree with Swan, but the medical examples are above B2 and are not used. The note's 'if it is too general, we don't need to use the article' is true for abstract, plural and uncountable nouns, not for singular countable nouns, as the A2 topic already says. ## Zero article ('when we talk about something in general', 'plural nouns') is the rule used here. The note has nothing on the + adjective or the + singular noun for a kind; these, the word abstract noun, an adjective before a general noun (modern art), and the formal register of the tiger are authored from Swan, Practical English Usage.",
};
