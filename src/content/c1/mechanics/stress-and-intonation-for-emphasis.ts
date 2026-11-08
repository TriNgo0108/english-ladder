import type { RuleTopic } from "../../schema";

export const stressAndIntonationForEmphasis: RuleTopic = {
  slug: "stress-and-intonation-for-emphasis",
  family: "intonation",
  title: "Stress and intonation for emphasis: contrastive stress, emphatic do, fall-rise",
  summary: "Move the stress to change what a sentence means, stress the new information, use emphatic do, and let a fall-rise hint at a hidden but.",
  level: "c1",
  category: "mechanics",
  shape: "rule",
  order: 22,

  explanation: [
    "Remember: intonation is the way your voice goes up and down when you speak. At B1 you saw how the voice usually rises or falls at the end of a question (B1 question intonation). This topic is about stress. Saying a word more strongly than the words around it, a little louder and longer, is called <b>stress</b>. Remember: emphasis means making one part of what you say stand out, so that the listener notices it. In speech, stress is the main way to give emphasis.",
    "As at B1, this site has no sound. The word in bold is the stressed word, where the voice moves. When the movement of the voice matters, we write it after the example: (rising), (falling), or (fall-rise), which you'll meet below. And as at B1, these rules say usually: English stress and intonation have many exceptions.",
    "<b>Normal stress.</b> In a neutral sentence, the main stress usually falls on the last important word: a noun, a main verb, an adjective or an adverb. Small words like a, the, to, he, it, do and have are usually not stressed: I've lost my <b>keys</b>. (falling)",
    "<b>New information.</b> We usually stress the word that brings new information, and we don't stress the words that the listener already knows, even at the end of the sentence. A: Who told you? B: <b>Leo</b> told me. The listener already knows that someone told you; Leo is the new part.",
    "<b>Contrastive stress.</b> When we stress a word to set it against another possible word, often to correct someone, it is called <b>contrastive stress</b>. Any word can take it, even a small word that is usually not stressed. The words stay the same, but moving the stress changes the meaning. I didn't say <b>he</b> took it. (= Someone took it, but I didn't say it was him.) I didn't <b>say</b> he took it. (= I may have thought it or hinted at it, but I didn't say it.) I didn't say he <b>took</b> it. (= Maybe he only borrowed it.) <b>I</b> didn't say he took it. (= Someone else said it.)",
    "<b>Emphatic do.</b> To make a positive statement stronger, add do, does or did before the verb and stress it. We often do this to contradict someone, or when the listener seems to doubt us: A: You don't like my cooking. B: I <b>do</b> like it! It also sets a positive fact against a negative one: I didn't win, but I <b>did</b> finish the race. Do takes the tense and the person, so the main verb after it is always the base form. Remember: the base form is the verb as you see it in a dictionary, with nothing added. So it is He does know, not He does knows, and We did go, not We did went.",
    "In a statement, when the verb is be, or when the sentence already has an auxiliary, we don't add do. Remember: an auxiliary is a small verb that goes with another verb, like be in She is working, have in They have finished, do in Do you like it?, and can or will. We stress be or the auxiliary instead: I <b>am</b> sure. She <b>has</b> finished.",
    "<b>Fall-rise.</b> The voice can also go down and then up again on the same word. This is called a <b>fall-rise</b>, and we write (fall-rise). It often shows that you are holding something back: what you say is true, but there is more, a hidden but. A: How was the hotel? B: The room was <b>clean</b>… (fall-rise) (= The room was clean, but other things weren't so good.) Said with a falling voice, The room was <b>clean</b>. (falling) is simply a fact, with nothing held back. In writing, three dots at the end (order 21) can give a similar hint.",
    "A fall-rise often goes on a word that is set against another one: A: Do you speak French and German? B: I speak <b>French</b>. (fall-rise) (= French, but not German.) It can sound polite, because the listener hears the but without you saying it.",
  ].join("\n\n"),

  form: [
    "neutral sentence → main stress usually on the last important word · I've lost my keys. (falling)",
    "new information → stressed · words the listener already knows → usually not stressed",
    "contrastive stress → any word, even a small one · I didn't say he took it. (stress on he) · I didn't say he took it. (stress on say)",
    "emphatic do: do / does / did (stressed) + base form · I do like it. · He does know. · We did go.",
    "be or an auxiliary → stress it, no do · I am sure. · She has finished.",
    "fall-rise → a hidden but · The room was clean… (fall-rise)",
  ].join("\n"),

  examples: [
    {
      sentence: "It's <b>my</b> turn to pay.",
      why: "Contrastive stress on my, a small word that is usually not stressed: it's my turn, not yours.",
    },
    {
      sentence: "A: Who left the window open? B: <b>Jack</b> left it open.",
      why: "A already knows that someone left the window open. Jack is the new information, so the stress goes on Jack, not on open at the end.",
    },
    {
      sentence: "She <b>does</b> work hard. She's just quiet about it.",
      why: "Emphatic does, stressed, answers someone who thinks she doesn't work hard. Does shows the person, so work is the base form, with no -s.",
    },
    {
      sentence: "I didn't go to the wedding, but I <b>did</b> send a present.",
      why: "Emphatic did sets a positive fact against the negative one. Did shows the past, so send is the base form.",
    },
    {
      sentence: "A: Do you like your new job? B: I like the <b>people</b>. (fall-rise)",
      why: "The fall-rise on people sets them against the rest of the job: the people, but not the work. The but is heard, not said.",
    },
  ],

  pitfall: {
    wrong: "He does knows the answer. He's just too shy to say it.",
    right: "He <b>does</b> know the answer. He's just too shy to say it.",
    why: "Does already shows the tense and the person, so the verb after it is the base form, with no -s: does know, not does knows.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "You did tell someone that your friend was leaving, but you didn't tell Maria. You say: I didn't tell Maria you were leaving. Which word carries the main stress?",
      options: ["I", "tell", "Maria", "leaving"],
      answer: 2,
      feedback:
        "Contrastive stress on Maria sets her against the person you did tell: I didn't tell Maria you were leaving. Stress on I would mean that someone else told her, stress on tell would mean that she found out some other way, and stress on leaving would mean that you told her something else about your friend.",
    },
    {
      kind: "choice",
      stem: "A: Who's cooking tonight? B: Sam's cooking tonight. Which word carries the main stress in B's answer?",
      options: ["Sam", "cooking", "tonight"],
      answer: 0,
      feedback:
        "A already knows that someone is cooking tonight. The new information is who, so the stress goes on Sam, even though it isn't the last word. Cooking and tonight are already known, so they aren't stressed.",
    },
    {
      kind: "mistake",
      tokens: ["I", "do", "likes", "your", "new", "haircut,", "honestly."],
      wrongIndex: 2,
      correction: "like",
      feedback:
        "In emphatic do, do takes the tense and the person, and the main verb after it is always the base form: I do like your new haircut, honestly. Likes, with -s, is wrong after do, and it is wrong after I too.",
    },
    {
      kind: "choice",
      stem: "A: You didn't lock the back door! B: I did lock it. B wants to say that A is wrong: B really locked it. Which word carries the main stress?",
      options: ["I", "did", "lock", "it"],
      answer: 1,
      feedback:
        "To contradict A, B uses emphatic did and stresses it: I did lock it. Stress on I would mean that B, not someone else, locked it. Stress on lock would set locking against another action, like closing, and stress on it would mean the back door, not something else.",
    },
    {
      kind: "choice",
      stem: "Your manager asks: Could you stay late on Thursday and Friday? You can stay on Thursday but not on Friday, and you'd rather not say no directly. You answer: I can stay late on Thursday. (fall-rise) Which word carries the fall-rise?",
      options: ["I", "can", "stay", "Thursday"],
      answer: 3,
      feedback:
        "The fall-rise on Thursday sets it against Friday: Thursday, but not Friday. Your manager hears the hidden but without you saying no. A fall-rise on I would hint that other people can't stay, one on can would hint that you can but you'd rather not, and one on stay would set staying against something else.",
    },
    {
      kind: "mistake",
      tokens: ["We", "do", "wants", "to", "help,", "but", "we're", "too", "busy", "this", "week."],
      wrongIndex: 2,
      correction: "want",
      feedback:
        "After emphatic do, the verb is the base form: We do want to help, but we're too busy this week. Do already shows the tense and the person, and wants, with -s, doesn't go with we.",
    },
    {
      kind: "choice",
      stem: "A: Did you buy the black coat? B: No, I bought the red coat. Which word carries the main stress in B's answer?",
      options: ["I", "bought", "red", "coat"],
      answer: 2,
      feedback:
        "Red is set against black, so it takes contrastive stress: No, I bought the red coat. Coat is already known from A's question, so it isn't stressed. Stress on bought would set buying against another action, like borrowing, and stress on I would set B against another buyer.",
    },
  ],

  levelRationale:
    "The English Grammar Profile covers grammar, not pronunciation, so it has no points for stress or intonation. It records emphatic do + the base form (I do like it) among its earlier points (my best reading of the profile, not a checked list), so that form is reviewed here, and the C1 step is using stress to move meaning. The CEFR's phonological control scale says a C1 speaker can vary intonation and place sentence stress correctly in order to express finer shades of meaning. The spec (section 8) places stress and intonation for emphasis at C1, in the intonation family after B1 question-intonation, and keeps its convention: bold for the word where the voice moves, then (rising), (falling) or the new (fall-rise), and no arrow glyphs. Intonation, emphasis, the base form and the auxiliary reuse their earlier wording; stress, contrastive stress and fall-rise are defined here. Following the B1 reasoning that an intonation marked wrong in one context can be right in another, every choice item states the meaning first, so that exactly one word fits it, and the feedback says what each other word would mean. The two mistake items test only the written form of emphatic do. Their subjects are I and we, so that deleting do can't also fix the sentence (I likes and we wants are wrong too); with he or she, deleting does would leave a correct sentence (She likes it), which would be a second fix. Did + a past form (We did went) can't be locked in the same way, because deleting did always leaves a correct past simple, so it is taught in the explanation and the stressed did is practised in a choice item.",

  sourceNotes:
    "english_grammar.txt, # Pronouncing: we usually stress the words that carry the meaning (nouns, main verbs, adjectives, adverbs) and not prepositions, pronouns, conjunctions, articles or auxiliaries; this agrees with Swan, and this topic says usually and adds that contrastive stress can fall on any of these small words. The note's part on how to say the is not used. The note has no section on contrastive stress, new information, emphatic do or the fall-rise (a new point in spec section 8), so these are authored from Swan, Practical English Usage, entries stress and rhythm, emphasis (emphatic do with the base form, and stressed be or auxiliaries without do) and intonation (the fall-rise for something held back), and from J. C. Wells, English Intonation (2006), for the fall-rise and the stress on new information. The examples I didn't say he took it and The food was good… (fall-rise) follow the plan; the second is given here as The room was clean….",
};
