import type { PhraseTopic } from "../../schema";

export const agreeingAndDisagreeing: PhraseTopic = {
  slug: "agreeing-and-disagreeing",
  family: "agreeing-and-disagreeing",
  title: "Agreeing and disagreeing: I agree, I see what you mean, but…",
  summary: "Agree, half agree or disagree politely: I agree, So do I, Neither do I, I see what you mean, but…, I'm not so sure, and I'm afraid I don't agree.",
  level: "b1",
  category: "speaking",
  shape: "phrases",
  order: 38,

  explanation: [
    "In a conversation, people often give their opinion, and you agree or disagree. The phrases below go from full agreement, through soft disagreement, to strong disagreement.",
    "To agree, say <b>I agree</b> or I agree with you. Agree is a verb, so we don't use am: say I agree, not I am agree. You can also say I think so too, You're right or That's true. To agree strongly, say Absolutely!, Exactly! or I couldn't agree more.",
    "When someone says something about themselves, and it is the same for you, use <b>So</b> + be or the auxiliary + I after a positive sentence, and <b>Neither</b> + be or the auxiliary + I after a negative one. Remember: an auxiliary is a small verb that goes with another verb, like be in She is working, have in They have finished, do in Do you like it?, and can or will. Use the same verb as the other person: I'm tired. → So am I. I can't swim. → Neither can I. When there is no be or auxiliary, use do, does or did: I love this song. → So do I. I didn't enjoy the party. → Neither did I. Nor do I means the same as Neither do I. With friends, people often say Me too or Me neither.",
    "If it isn't the same for you, use the subject and be or the auxiliary, with the opposite meaning: I love this song. → Really? I don't. I don't like coffee. → Oh, I do.",
    "To disagree politely, first show that you understand the other person, then give your idea: <b>I see what you mean, but</b>… <b>I take your point, but</b>… That's true, but… You can also say I'm not so sure or I'm not sure I agree. These soft phrases are useful at work, and with people you don't know well. To a manager or a client, <b>I'm afraid</b> makes it even more polite: I'm afraid I don't agree.",
    "I don't agree at all and I totally disagree are very direct. With friends, people also say No way! or You must be joking! These can sound rude to people you don't know well.",
    "To ask for an opinion, say What do you think? or Do you agree?",
  ].join("\n\n"),

  situations: [
    {
      situation: "Agreeing",
      phrases: ["I agree with you.", "I think so too.", "You're right.", "That's true."],
      register: "neutral",
    },
    {
      situation: "Agreeing strongly",
      phrases: ["Absolutely!", "Exactly!", "I couldn't agree more."],
      register: "neutral",
    },
    {
      situation: "Saying it's the same for you",
      phrases: ["A: I'm hungry. B: So am I.", "A: I love this song. B: So do I.", "A: I didn't like the film. B: Neither did I."],
      register: "neutral",
    },
    {
      situation: "Saying it's the same for you, with friends",
      phrases: ["Me too.", "Me neither.", "Same here."],
      register: "informal",
    },
    {
      situation: "Saying it's different for you",
      phrases: ["A: I love this song. B: Really? I don't.", "A: I don't like coffee. B: Oh, I do."],
      register: "neutral",
    },
    {
      situation: "Disagreeing politely",
      phrases: [
        "I see what you mean, but it's very expensive.",
        "I take your point, but I still think we should wait.",
        "I'm not so sure.",
        "That's true, but it costs a lot.",
      ],
      register: "neutral",
    },
    {
      situation: "Disagreeing politely with a manager or a client",
      phrases: ["I'm afraid I don't agree.", "I'm afraid I see it differently."],
      register: "formal",
    },
    {
      situation: "Disagreeing strongly",
      phrases: ["I don't agree at all.", "I totally disagree."],
      register: "neutral",
    },
    {
      situation: "Disagreeing strongly with friends",
      phrases: ["No way!", "You must be joking!", "Rubbish!"],
      register: "informal",
    },
    {
      situation: "Asking for an opinion",
      phrases: ["What do you think?", "Do you agree?", "What's your opinion?"],
      register: "neutral",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You are in a meeting. Your manager says: I think we should start the project in May. You think May is too early, and you want to be polite. What do you say?",
      options: [
        "No way! That's a crazy idea.",
        "I see what you mean, but I think June would be better.",
        "Neither do I.",
        "You're right. May is perfect.",
      ],
      answer: 1,
      feedback:
        "I see what you mean, but… is soft, polite disagreement: you show that you understand, and then give your idea. No way! is informal and too strong for a manager. Neither do I answers a negative sentence about the speaker. You're right means you agree, but you don't.",
    },
    {
      kind: "gap",
      stem: "A: I can't swim very well. B: Neither ___ I. I never learnt.",
      answers: ["can"],
      feedback:
        "Use the same auxiliary as the other person: I can't swim. → Neither can I. After Neither, the verb is positive, can, not can't, because neither already means not.",
    },
    {
      kind: "gap",
      stem: "I see what you ___, but I still think we need a bigger car.",
      answers: ["mean", "meant"],
      feedback:
        "I see what you mean, but… is a polite way to disagree. It shows that you understand the other person's idea before you give yours. I see what you meant is also possible, about something they said before.",
    },
    {
      kind: "mistake",
      tokens: ["A:", "I", "love", "this", "café.", "B:", "So", "am", "I."],
      wrongIndex: 7,
      correction: "do",
      feedback:
        "I love this café has no be or auxiliary, so the answer uses do: So do I. Use So am I only after a sentence with am, like I'm hungry.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to disagree politely.",
      words: ["agree", "sure", "I", "you.", "not", "with", "I'm"],
      answer: "I'm not sure I agree with you.",
      feedback:
        "I'm not sure I agree… is a soft way to disagree. It sounds less direct than I don't agree, so it is good at work and with people you don't know well.",
    },
    {
      kind: "choice",
      stem: "Your friend says: I don't like this pizza. You don't like it either. What do you say?",
      options: ["Neither do I.", "So do I.", "I do."],
      answer: 0,
      feedback:
        "After a negative sentence, use Neither + the auxiliary + I to say it is the same for you: Neither do I. So do I follows a positive sentence. I do means that you like it, so it is different for you.",
    },
  ],

  levelRationale:
    "The CEFR's B1 descriptors for informal discussion include saying politely that you agree or disagree, and giving brief comments on other people's opinions. The English Grammar Profile has so and neither + auxiliary short answers among its B1 points. The topic uses be and the auxiliaries, which order 19 defined. This is the first topic in the agreeing-and-disagreeing family; handling pushback comes at C1.",

  sourceNotes:
    "english_grammar.txt, # Agreeing and disagreeing, puts Neither did I, Nor will I, Nor can I and Nor would I under Disagreeing. That is wrong: they agree with a negative sentence (I didn't like the music. → Neither did I. means I didn't like it either), so they are taught here as agreement, following Swan, Practical English Usage. Its Don't you? I do and Did you? I didn't are disagreement and agree with Swan. # Statements has partial agreement (I see what you mean. However, I take your point, but, I'm not so sure) and lists of agreement and disagreement. I couldn't agree more, You must be joking and No way agree with Swan and are used, with the informal ones marked informal. I am of a different view and I don't share your view are above B1 and are left out.",
};
