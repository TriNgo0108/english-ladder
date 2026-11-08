import type { PhraseTopic } from "../../schema";

export const rhetoricalDevices: PhraseTopic = {
  slug: "rhetorical-devices",
  title: "Rhetorical devices: Imagine…, not … but …, the rule of three",
  summary: "Open a talk with a question, make a point stick with three ideas or a repeated phrase, set two ideas side by side, speak to the audience, and end strongly.",
  level: "c1",
  category: "speaking",
  shape: "phrases",
  order: 20,

  explanation: [
    "A <b>rhetorical device</b> is a way of using words that makes a talk or a piece of writing more persuasive, or easier to remember. Speakers use them in presentations, speeches, debates and opinion writing. Remember: register means how formal or informal your words are. The devices themselves work in any register, from a formal speech to a short talk to your team, so each phrase below has the register of its words. Use one or two in a talk, not one in every sentence.",
    "<b>Rhetorical questions.</b> Remember: a rhetorical question is a question that we ask for effect, to make a point, not to get an answer. As at B2, a positive question often has a negative meaning, and a negative question often has a positive one: Who wouldn't want a shorter working week? (= Everyone would want one.) A speaker can also ask a question to open a topic and then answer it at once: So what does this mean for us? It means we need to act now. The audience isn't expected to answer; the question just makes them think.",
    "<b>The rule of three.</b> Ideas in a group of three sound complete and are easy to remember: The new system is <b>faster, cheaper and safer</b>. We need to plan, prepare and deliver. Two ideas can sound unfinished, and four or more can be hard to follow.",
    "<b>Repetition.</b> Repeating a key word or phrase at the start of several sentences makes it stick: <b>Every</b> customer matters. <b>Every</b> call matters. <b>Every</b> complaint matters. Repetition that is planned like this sounds strong; repetition by accident sounds careless.",
    "<b>Contrast pairs.</b> Two opposite ideas side by side make the second one stronger. Use <b>not</b> … <b>but</b> …: This is <b>not</b> a problem <b>but</b> an opportunity. Or use two short sentences with the same shape: It's not about working longer. It's about working smarter. The idea after but, or in the second sentence, is the one you want people to remember.",
    "<b>Direct address.</b> Speak to the audience, not just about the subject. <b>Imagine</b> + a situation asks them to picture it: Imagine a city with no traffic jams. Think about the last time you waited in a queue. You and we bring the audience into the talk: We've all been there. Imagine and think are imperatives, as at A1. We use the imperative to tell someone to do something, but here it is an invitation, not an order.",
    "<b>Ending strongly.</b> The last words of a talk are the ones people remember. End with a contrast, a group of three or a call to act, not with So, that's it, really: The question is not whether we can afford to change. It's whether we can afford not to. Let's make this the year we finally get it right. In a presentation, this strong last line can come after To sum up (B2 giving a presentation) and before Thank you for listening.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Opening a talk",
      phrases: [
        "Have you ever wondered why some meetings feel like a waste of time?",
        "Imagine a city with no traffic jams.",
        "So what does this mean for us? It means we need to act now.",
      ],
      register: "neutral",
    },
    {
      situation: "Opening a formal speech",
      phrases: ["Ladies and gentlemen, what kind of world do we want to leave to our children?"],
      register: "formal",
    },
    {
      situation: "Making a point memorable",
      phrases: [
        "The new system is faster, cheaper and safer.",
        "Every customer matters. Every call matters. Every complaint matters.",
        "Who wouldn't want a shorter working week?",
      ],
      register: "neutral",
    },
    {
      situation: "Setting two ideas side by side",
      phrases: ["This is not a problem but an opportunity.", "It's not about working longer. It's about working smarter."],
      register: "neutral",
    },
    {
      situation: "Bringing the audience in",
      phrases: ["Think about the last time you waited in a queue.", "We've all been there."],
      register: "neutral",
    },
    {
      situation: "Ending strongly",
      phrases: [
        "The question is not whether we can afford to change. It's whether we can afford not to.",
        "Let's make this the year we finally get it right.",
      ],
      register: "neutral",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence uses the rule of three?",
      options: [
        "Our new app is very fast.",
        "Is there anyone who doesn't like a fast app?",
        "Our new app is fast, simple and free.",
        "Our app is not slow but fast.",
      ],
      answer: 2,
      feedback:
        "Fast, simple and free is a group of three ideas, so it is easy to remember. Our new app is very fast has one idea, Is there anyone who doesn't like a fast app? is a rhetorical question, and not slow but fast is a contrast pair.",
    },
    {
      kind: "choice",
      stem: "You are opening a talk about city traffic. You want the audience to picture a better future. Which opening uses direct address?",
      options: [
        "Traffic in this city is bad.",
        "Imagine driving to work without sitting in a single traffic jam.",
        "In conclusion, traffic is a serious problem.",
        "Traffic data was collected in 2024.",
      ],
      answer: 1,
      feedback:
        "Imagine + a situation speaks to the audience and asks them to picture it, so it is direct address. Traffic in this city is bad is a plain statement, In conclusion is for the end, and Traffic data was collected … describes a method, as in a report.",
    },
    {
      kind: "choice",
      stem: "A speaker says: Who doesn't want to pay less for energy? What does the speaker mean?",
      options: [
        "Everyone wants to pay less for energy.",
        "Nobody wants to pay less for energy.",
        "The speaker wants someone in the audience to answer.",
        "The speaker doesn't know who wants to pay less.",
      ],
      answer: 0,
      feedback:
        "It is a rhetorical question: it makes a point and doesn't expect an answer. As at B2, a negative question often has a positive meaning, so it means that everyone wants to pay less.",
    },
    {
      kind: "gap",
      stem: "This is not a threat to our business ___ a chance to grow. (one word)",
      answers: ["but", "rather"],
      feedback:
        "Not … but … sets two ideas side by side, and the idea after but is the one to remember: This is not a threat to our business but a chance to grow. Rather, after a comma, is also possible, but not … but … is the usual pattern.",
    },
    {
      kind: "wordbank",
      prompt: "You are opening a talk about education. Put the words in order to ask the audience to picture something.",
      words: ["feels safe.", "a school", "Imagine", "where every child"],
      answer: "Imagine a school where every child feels safe.",
      feedback:
        "Imagine + a situation is direct address: it invites the audience to picture a school where every child feels safe.",
    },
    {
      kind: "choice",
      stem: "A speaker ends a talk with: We came to listen. We came to learn. And now we have come to act. Which device does this ending use most clearly?",
      options: ["a contrast pair with not … but …", "a rhetorical question", "direct address with Imagine", "repetition"],
      answer: 3,
      feedback:
        "We came to … / have come to … is repeated in each sentence, so the ending uses repetition, in a group of three. There is no not … but …, no question, and no Imagine.",
    },
  ],

  levelRationale:
    "The CEFR's C1 descriptors for addressing audiences say a learner can give a clear, well-structured presentation of a complex subject, and the C1 descriptors for sustained monologue (putting a case) include developing an argument with emphasis on the points that matter. Rhetorical devices are ways to give that emphasis. The spec (section 8) places rhetorical devices at C1 with no family, after B2 declarative-and-rhetorical-questions, whose definition of a rhetorical question it reuses word for word, with its rule that a positive form often has a negative meaning and a negative form a positive one. It comes before punctuation for rhetorical effect (order 21), as the plan's order dependencies require, and links back only to B2 giving a presentation and the A1 imperative. The English Grammar Profile records rhetorical questions and not … but … for contrast at the upper levels (my best reading of the profile, not a checked list). The situations are named by purpose, as the plan asks.",

  sourceNotes:
    "english_grammar.txt, # Question, ## Rhetorical questions, says rhetorical questions are asked when we don't expect an answer, to draw attention to something, which agrees with Swan, Practical English Usage, and with B2. Its example, So we're going by train?, is a declarative question, not a rhetorical one (B2 says the same), so it is not used. The rule of three, repetition, contrast pairs and direct address have no section (a new point in spec section 8); they are authored from Swan, entries rhetorical questions, not … but … (contrast) and imperatives (used for invitations and suggestions as well as orders), and from standard presentation-skills advice. The imperative is described with the A1 imperatives wording.",
};
