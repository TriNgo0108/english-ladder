import type { SetTopic } from "../../schema";

export const collocations: SetTopic = {
  slug: "collocations",
  family: "collocations",
  title: "Collocations: make a mistake, do homework, heavy rain",
  summary: "Make a mistake, not do a mistake. Learn which verbs and adjectives go with which nouns: do your homework, take a photo, heavy rain, strong coffee.",
  level: "b1",
  category: "phrases",
  shape: "set",
  order: 29,

  explanation: [
    "A <b>collocation</b> is a group of words that we often use together, like make a mistake or heavy rain. Other words may have a similar meaning, but English speakers don't put them together. We say heavy rain, not strong rain or big rain. There is often no rule, so learn collocations in groups, like the ones in the table.",
    "<b>Make</b> or <b>do</b>? We often use make when we create or produce something: make a cake, make a noise, make a plan, make a mistake. We often use do for work, jobs and tasks: do your homework, do the shopping, do the washing-up. This is only a guide. For some, like make your bed and do someone a favour, you just have to learn them.",
    "<b>Have</b> or <b>take</b>? We use have with meals and many activities that we enjoy or do every day: have breakfast, have a good time, have a shower. We use take with photos, buses, trains and taxis: take a photo, take the bus. A few can take both. Have a shower and take a shower are both correct, and so are have a break and take a break. Make a decision is correct everywhere, and British English also uses take a decision.",
    "Adjectives go with nouns in the same way. Rain, snow and traffic are <b>heavy</b>: heavy rain, heavy traffic. Coffee, tea and wind are <b>strong</b>: strong coffee, a strong wind. The opposite of strong coffee is weak coffee.",
    "Do the washing-up is British English. American English says do the dishes. Favour is spelled favor in American English.",
  ].join("\n\n"),

  entries: [
    { headword: "make a mistake", gloss: "do something wrong, without wanting to", inUse: "Don't worry if you <b>make a mistake</b>. Everyone does." },
    { headword: "make a decision", gloss: "choose what to do after you think about it. British English also says take a decision.", inUse: "We need to <b>make a decision</b> about the holiday today." },
    { headword: "make friends", gloss: "meet people and start to be their friend", inUse: "It's easy to <b>make friends</b> at university." },
    { headword: "make a noise", gloss: "produce a sound, often a loud one that people don't want", inUse: "Please don't <b>make a noise</b>. The baby's asleep." },
    { headword: "make your bed", gloss: "make the sheets and covers on your bed neat after you sleep", inUse: "I <b>make my bed</b> as soon as I get up." },
    { headword: "do your homework", gloss: "do the work that a teacher gives you for after school", inUse: "She always <b>does her homework</b> on the bus." },
    { headword: "do the shopping", gloss: "buy the food and other things that a home needs, often every week", inUse: "We usually <b>do the shopping</b> on Saturday mornings." },
    { headword: "do the washing-up", gloss: "wash the plates, cups and pans after a meal. American English says do the dishes.", inUse: "I cooked, so you can <b>do the washing-up</b>." },
    { headword: "do exercise", gloss: "move your body to stay fit and healthy", inUse: "Try to <b>do</b> some <b>exercise</b> every day, even a short walk." },
    { headword: "do someone a favour", gloss: "help someone because they ask you", inUse: "Could you <b>do me a favour</b> and feed my fish this weekend?" },
    { headword: "have breakfast", gloss: "eat the first meal of the day", inUse: "We <b>have breakfast</b> together at seven." },
    { headword: "have a good time", gloss: "enjoy yourself", inUse: "Did you <b>have a good time</b> in Rome?" },
    { headword: "have a shower", gloss: "wash your body under a shower. Take a shower is also correct.", inUse: "I'll <b>have a</b> quick <b>shower</b> before dinner." },
    { headword: "take a photo", gloss: "make a picture with a camera or a phone", inUse: "Can I <b>take a photo</b> of your garden? It's lovely." },
    { headword: "take the bus", gloss: "travel somewhere by bus. We also say take a taxi and take the train.", inUse: "It's quicker to <b>take the bus</b> than to walk." },
    { headword: "take a break", gloss: "stop working or studying for a short time. Have a break is also correct.", inUse: "Let's <b>take a break</b> for ten minutes." },
    { headword: "heavy rain", gloss: "a lot of rain, falling hard", inUse: "There was <b>heavy rain</b> all night, and the river is very high." },
    { headword: "heavy traffic", gloss: "a lot of cars on the road, so that they move slowly", inUse: "Sorry I'm late. There was <b>heavy traffic</b> in the town centre." },
    { headword: "strong coffee", gloss: "coffee with a lot of taste, made with a lot of coffee and not much water", inUse: "I need a cup of <b>strong coffee</b> to wake up." },
    { headword: "strong wind", gloss: "wind that moves fast and hard", inUse: "A <b>strong wind</b> blew the leaves off the trees." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Bye! ___ a good time at the party!",
      options: ["Make", "Have", "Do"],
      answer: 1,
      feedback:
        "We say have a good time, meaning enjoy yourself. Make a good time and do a good time are common mistakes.",
    },
    {
      kind: "gap",
      stem: "I can't come out tonight. I have to ___ my homework first. (make or do)",
      answers: ["do"],
      feedback:
        "Homework is a task, and we use do for work and tasks: do my homework. Make my homework is a common mistake.",
    },
    {
      kind: "gap",
      stem: "Excuse me, could you ___ a photo of my friends and me? (have or take)",
      answers: ["take"],
      feedback:
        "We take a photo, with a camera or a phone. Have a photo is not correct with this meaning.",
    },
    {
      kind: "choice",
      stem: "The roads were very slow this morning because of the ___ traffic.",
      options: ["strong", "big", "heavy"],
      answer: 2,
      feedback:
        "Traffic, like rain, is heavy: heavy traffic means a lot of cars on the road. Strong traffic and big traffic are not used.",
    },
    {
      kind: "choice",
      stem: "I can't sleep if I drink ___ coffee in the evening.",
      options: ["strong", "heavy", "hard"],
      answer: 0,
      feedback:
        "Coffee with a lot of taste is strong coffee. The opposite is weak coffee. Heavy coffee and hard coffee are not used.",
    },
    {
      kind: "mistake",
      tokens: ["Sorry,", "I", "did", "a", "mistake", "in", "your", "name.", "I'll", "correct", "it."],
      wrongIndex: 2,
      correction: "made",
      feedback:
        "We make a mistake, not do a mistake: Sorry, I made a mistake in your name. Do a mistake is one of the most common learner errors.",
    },
  ],

  levelRationale:
    "English Vocabulary Profile: make a mistake, make friends, do homework, do the shopping, have breakfast, have a good time and take a photo are usually given as A1 or A2, and make a decision, make a noise, do exercise, do someone a favour, take a break, heavy rain, heavy traffic and strong coffee as B1. These levels are my best reading of the profile, not a checked list. Make and do, and have and take, are the verb + noun collocations that B1 learners most often get wrong, so the topic groups them with the first adjective + noun pairs. This is the first topic in the collocations family, which goes on at B2 and C1.",

  sourceNotes:
    "english_grammar.txt, # Collocations lists many phrases, most of them from job interviews and business English (pension scheme, dispute resolution, issue a press release). Those are above B1 and are left for the later topics in this family. From the notes, this topic takes only the headwords make friends and do different sports (here do exercise). Many items in the note's list are phrasal verbs (put something off, sort it out), and they are taught in orders 27 and 28 instead. The make and do and have and take groups, heavy rain and heavy traffic, strong coffee and strong wind, and the British and American forms (take a decision, do the washing-up and do the dishes, have and take a shower or a break) are from Swan, Practical English Usage. Make a decision and take a decision are both correct in British English, so the quiz doesn't test them. Every gloss is new.",
};
