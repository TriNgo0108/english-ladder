import type { SetTopic } from "../../schema";

export const advancedIdioms: SetTopic = {
  slug: "advanced-idioms",
  family: "idioms",
  title: "Advanced idioms: cut corners, the elephant in the room",
  summary: "Don't cut corners, and don't ignore the elephant in the room. Learn idioms for work and arguments, and which ones are too informal for some situations.",
  level: "c1",
  category: "phrases",
  shape: "set",
  order: 12,

  explanation: [
    "Remember: an idiom is a group of words with its own meaning, different from the meaning of each word alone. At B1, you learned everyday idioms, like a piece of cake and change your mind. The idioms in this topic are for work and for arguments: for problems, plans and rules, and for what people say in a discussion.",
    "As at B1, the words in an idiom are fixed. We say <b>cut corners</b>, not cut edges, and <b>bite the bullet</b>, not bite the stone. A few idioms have a second fixed form that means the same: move the goalposts and shift the goalposts are both correct. The verb still changes in the usual way: The builders cut corners. Are we cutting corners? The word for the person changes too: pull your weight, pull their weight. Be barking up the wrong tree is nearly always in the continuous form: You're barking up the wrong tree.",
    "Many of these idioms come from a picture. In football, the goalposts show where a team scores, so moving them in the middle of a game is unfair: <b>move the goalposts</b> means change the rules after people have started. A level playing field is a pitch with no slope, so neither team has an advantage. A back burner is the part of a cooker where a pan stays warm while you cook something else. The picture helps you remember the meaning, but the words still stay fixed.",
    "<b>Register.</b> Some of these idioms are informal: bite the bullet, on the back burner, back to square one. Use them in speech, in messages and in emails to colleagues you know well. Others are neutral, and common in meetings, the news and business writing: a level playing field, the tip of the iceberg, a grey area. Even neutral idioms are usually avoided in very formal writing, like an academic essay or a legal document. The table says which ones are informal. Remember: register means how formal or informal your words are.",
    "Some idioms usually criticise: cut corners, move the goalposts, sit on the fence. Said straight to a person, You're sitting on the fence can sound rude. Play devil's advocate is the opposite: you often say it about yourself, to show that you are only testing an idea.",
    "Grey area is the British spelling. American English spells it gray area.",
  ].join("\n\n"),

  entries: [
    { headword: "a blessing in disguise", gloss: "something that seems bad at first but later brings a good result. Neutral.", inUse: "Losing that contract was <b>a blessing in disguise</b>: it gave us time to build a better product." },
    { headword: "cut corners", gloss: "do something in the quickest or cheapest way, often by ignoring rules or doing it badly. Neutral, and it usually criticises.", inUse: "The builders <b>cut corners</b> on the wiring, and now the whole kitchen needs to be redone." },
    { headword: "the elephant in the room", gloss: "a big problem that everyone knows about but nobody wants to talk about. Neutral.", inUse: "Nobody mentioned the budget, but it was <b>the elephant in the room</b> all afternoon." },
    { headword: "get to the bottom of something", gloss: "find the real cause of a problem, or the truth about a situation. Neutral.", inUse: "The IT team are still trying to <b>get to the bottom of</b> the email problems." },
    { headword: "move the goalposts", gloss: "change the rules or the aims of something, unfairly, after people have started. Shift the goalposts means the same. Informal, and it criticises.", inUse: "Every time we send a design, the client <b>moves the goalposts</b>." },
    { headword: "on the back burner", gloss: "not being dealt with now, because it is less important, but kept for later. We also say put something on the back burner. Informal.", inUse: "The new website is <b>on the back burner</b> until the summer." },
    { headword: "a level playing field", gloss: "a situation where everyone has the same chance, with no unfair advantages. Neutral.", inUse: "The new rules should create <b>a level playing field</b> for small companies." },
    { headword: "bite the bullet", gloss: "make yourself do something unpleasant or difficult that you have been avoiding. Informal.", inUse: "In the end, I <b>bit the bullet</b> and told my manager I was leaving." },
    { headword: "be barking up the wrong tree", gloss: "be wrong about the reason for something, or look for the answer in the wrong place. Informal.", inUse: "If you think Tom leaked the news, you're <b>barking up the wrong tree</b>. He was on holiday." },
    { headword: "back to square one", gloss: "back at the start, because the last attempt failed. Informal.", inUse: "The investor pulled out, so we're <b>back to square one</b>." },
    { headword: "the tip of the iceberg", gloss: "a small part of a problem that people can see, when the whole problem is much bigger. Neutral.", inUse: "These ten complaints are only <b>the tip of the iceberg</b>." },
    { headword: "pull your weight", gloss: "do your fair share of the work in a group. Neutral, and often used in the negative.", inUse: "If one person doesn't <b>pull their weight</b>, the whole team suffers." },
    { headword: "sit on the fence", gloss: "not choose a side in an argument or a decision. Neutral, and it usually criticises.", inUse: "The minister <b>sat on the fence</b> and said she needed more time to decide." },
    { headword: "play devil's advocate", gloss: "argue for the other side, not because you believe it, but to test an idea. Neutral.", inUse: "Let me <b>play devil's advocate</b>: what if customers don't want a cheaper version?" },
    { headword: "hit the nail on the head", gloss: "describe a problem or a situation exactly right. Neutral.", inUse: "You've <b>hit the nail on the head</b>. The real problem is the price." },
    { headword: "a grey area", gloss: "a situation where the rules are not clear, so it is hard to say what is right. American English spells it gray. Neutral.", inUse: "Working from abroad is still <b>a grey area</b> in our contract." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Everyone at the meeting knew about the planned job cuts, but nobody wanted to mention them. The job cuts were ___.",
      options: ["the tip of the iceberg", "the elephant in the room", "a level playing field", "a blessing in disguise"],
      answer: 1,
      feedback:
        "The elephant in the room is a big problem that everyone knows about but nobody wants to talk about. The tip of the iceberg is a small, visible part of a bigger problem, a level playing field is a fair situation, and a blessing in disguise is a bad thing that turns out well.",
    },
    {
      kind: "choice",
      stem: "Your company lost its biggest client. Six months later, you found three better ones, and now you're glad the first one left. Losing that client was ___.",
      options: ["the tip of the iceberg", "a grey area", "a blessing in disguise", "a level playing field"],
      answer: 2,
      feedback:
        "A blessing in disguise seems bad at first but later brings a good result. The tip of the iceberg is part of a bigger problem, a grey area is a situation where the rules are not clear, and a level playing field is a fair situation for everyone.",
    },
    {
      kind: "gap",
      stem: "I've been avoiding this difficult phone call all week. Today I'm going to bite the ___ and call him. (one word)",
      answers: ["bullet"],
      feedback:
        "The idiom is bite the bullet: make yourself do something unpleasant that you have been avoiding. Its words are fixed, so no other word fits here.",
    },
    {
      kind: "gap",
      stem: "The new logo isn't urgent, so we've put it on the back ___ until the autumn. (one word)",
      answers: ["burner"],
      feedback:
        "On the back burner means kept for later because it is less important now. A back burner is the part of a cooker where a pan stays warm. The idiom is informal.",
    },
    {
      kind: "choice",
      stem: "In a discussion, Kim says, \"I actually agree with the plan, but let me argue against it, just to test it.\" What is Kim doing?",
      options: ["sitting on the fence", "hitting the nail on the head", "barking up the wrong tree", "playing devil's advocate"],
      answer: 3,
      feedback:
        "To play devil's advocate is to argue for the other side, not because you believe it, but to test an idea. Sitting on the fence is not choosing a side at all, hitting the nail on the head is describing something exactly right, and barking up the wrong tree is being wrong about a cause.",
    },
    {
      kind: "mistake",
      tokens: ["To", "save", "money,", "the", "company", "cut", "angles", "on", "safety,", "and", "two", "workers", "were", "hurt."],
      wrongIndex: 6,
      correction: "corners",
      feedback:
        "The idiom is cut corners: To save money, the company cut corners on safety. The words of an idiom are fixed, so angles can't replace corners.",
    },
    {
      kind: "mistake",
      tokens: ["If", "you", "think", "Maria", "sent", "that", "email,", "you're", "barking", "on", "the", "wrong", "tree."],
      wrongIndex: 9,
      correction: "up",
      feedback:
        "The idiom is be barking up the wrong tree: you're barking up the wrong tree. It means you're wrong about the cause, or looking for the answer in the wrong place.",
    },
  ],

  levelRationale:
    "English Vocabulary Profile: idioms such as cut corners, get to the bottom of, a level playing field, the tip of the iceberg, pull your weight, sit on the fence and bite the bullet are usually given as C1 or C2, and a blessing in disguise, move the goalposts, on the back burner, be barking up the wrong tree, play devil's advocate and a grey area as C1 or C2 or not yet listed. These levels are my best reading of the profile, not a checked list. This is the idioms family's C1 topic after B1 idioms: none of its sixteen headwords repeats a B1 entry, and it reuses B1's definition and its rule that the words of an idiom are fixed. Each gloss says whether the idiom is informal or neutral. The choice items test meaning, so each distractor is a real idiom with a meaning that doesn't fit the stem. The two gaps and the two mistake items test fixed words, and their wrong words (angles, on) don't form any recorded variant.",

  sourceNotes:
    "english_grammar.txt, # Idiom: B1 used no wonder and left barking up the wrong tree for this topic. It is used here, with the note's meaning (trying to do something in a way that will not work), widened to the usual dictionary sense. Hold on (a phrasal verb) and back and forth (a common phrase) are still not idioms for this set. The other headwords are the task's list plus common work and argument idioms. Fixed words, the verb that still changes, and idioms being mostly informal are from Swan, Practical English Usage (idioms). The informal or neutral label for each idiom, and the second form shift the goalposts, follow the Oxford Advanced Learner's Dictionary and the Cambridge Dictionary from memory: those sites could not be opened during writing (403), so the labels were not checked online. Wiktionary (opened) marks all of them only as idiomatic, and records barking up the wrong tree as most common in the continuous form. Review Focus 5: the Oxford Collocations Dictionary could not be consulted. So every choice distractor is a real idiom whose meaning clearly doesn't fit the stem, and no item uses a changed word that might be a recorded variant: cut angles and barking on the wrong tree are not recorded forms. Every gloss is new.",
};
