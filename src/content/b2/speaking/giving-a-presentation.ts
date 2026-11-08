import type { PhraseTopic } from "../../schema";

export const givingAPresentation: PhraseTopic = {
  slug: "giving-a-presentation",
  title: "Giving a presentation: Today I'm going to talk about…, Moving on to…",
  summary: "Open a talk, give its plan, move from point to point with Moving on to…, talk about a chart on a slide, then close and invite questions.",
  level: "b2",
  category: "speaking",
  shape: "phrases",
  order: 29,

  explanation: [
    "A presentation is a talk to a group of people, often at work or at college, and often with slides. Clear phrases help the audience to follow you, so they always know where you are in the talk. Remember: register means how formal or informal your words are. Most of these phrases are neutral. A few, for a large audience or a very formal event, are formal.",
    "<b>Open the talk.</b> Greet the audience, thank them and say who you are: Good morning, everyone, and thank you for coming. My name is Leo Brandt, and I work in the sales team. Then say what the talk is about: <b>Today I'm going to talk about</b>… If the audience already knows something, you can start from it: <b>As you all know</b>, the company is moving to a new office.",
    "<b>Give the plan.</b> Tell the audience how long you will speak, what the main parts are, and when they can ask questions: I'll speak for about twenty minutes. I've divided my talk into three parts. First, I'll look at the costs. Then I'll talk about the timetable. Finally, I'll explain the next steps. Many speakers take questions at the end, and they say so at the start.",
    "<b>Move between points.</b> Phrases that tell the audience that one point has finished and the next one is starting are often called signposts. <b>Moving on to</b> + a noun and <b>Let's move on to</b> + a noun are the most common: Moving on to the budget… Let's move on to the next slide. <b>That brings me to</b> my next point is also very common. To go back to a point, say: Going back to what I said about prices…",
    "<b>Talk about the slides.</b> Show the audience what to look at: <b>As you can see</b>, sales went up in May. <b>If you look at</b> this graph, you'll see that costs have fallen. This slide shows our three biggest markets. Don't just read your slides aloud: the audience can read them. Give them a moment to look, and then explain what the numbers mean.",
    "<b>After an interruption,</b> go back to your talk with <b>As I was saying</b>… If someone asks about a point that comes later, you can say: I'll come back to that later, if that's all right.",
    "<b>Close the talk.</b> Give the main idea again (To sum up, order 28), then say that you have finished and invite questions: <b>That brings me to the end of</b> my presentation. Thank you for listening. Are there any questions? To a very formal audience: Thank you very much for your attention.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Opening the talk",
      phrases: [
        "Good morning, everyone, and thank you for coming.",
        "Today I'm going to talk about our plans for next year.",
        "As you all know, the company is moving to a new office.",
      ],
      register: "neutral",
    },
    {
      situation: "Opening a formal talk",
      phrases: ["Good afternoon, ladies and gentlemen.", "It is a great pleasure to be here today."],
      register: "formal",
    },
    {
      situation: "Giving the plan of the talk",
      phrases: ["I'll speak for about twenty minutes.", "I've divided my talk into three parts.", "I'll be happy to take questions at the end."],
      register: "neutral",
    },
    {
      situation: "Moving from one point to the next",
      phrases: ["Let's move on to the next slide.", "Moving on to my second point, the timetable.", "That brings me to my next point."],
      register: "neutral",
    },
    {
      situation: "Talking about a slide or a chart",
      phrases: [
        "As you can see, sales went up in May.",
        "If you look at this graph, you'll see that costs have fallen.",
        "This slide shows our three biggest markets.",
      ],
      register: "neutral",
    },
    {
      situation: "Going back to the talk after an interruption",
      phrases: ["As I was saying, the new office opens in March.", "I'll come back to that later, if that's all right."],
      register: "neutral",
    },
    {
      situation: "Closing the talk",
      phrases: ["To sum up, the new system will save us time and money.", "That brings me to the end of my presentation.", "Thank you for listening."],
      register: "neutral",
    },
    {
      situation: "Inviting questions",
      phrases: ["Are there any questions?", "Does anyone have any questions?"],
      register: "neutral",
    },
    {
      situation: "Closing a formal talk",
      phrases: ["Thank you very much for your attention.", "I would now be glad to answer any questions you may have."],
      register: "formal",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You have finished talking about the costs. Now you want to start your next point, the timetable. What do you say?",
      options: ["By the way, the timetable.", "Let's move on to the timetable.", "As I was saying, the timetable.", "Thank you for your attention."],
      answer: 1,
      feedback:
        "Let's move on to… tells the audience that one point has finished and the next one is starting. As I was saying goes back to your talk after an interruption. By the way changes the subject to something you have just remembered, and it is informal. Thank you for your attention closes a formal talk.",
    },
    {
      kind: "choice",
      stem: "You want the audience to look at the chart on your slide. Which sentence works best?",
      options: [
        "Read this chart now, please.",
        "Now I'm going to read every number on this chart to you.",
        "If you look at this chart, you'll see that prices rose by ten per cent.",
      ],
      answer: 2,
      feedback:
        "If you look at this chart, you'll see that… shows the audience what to look at, and then tells them what it means. Read this chart now is an order, and it can sound rude. Reading every number aloud is slow: the audience can read the slide.",
    },
    {
      kind: "gap",
      stem: "As I ___ saying before the fire alarm went off, the new office opens in March. (be, one word)",
      answers: ["was"],
      feedback:
        "As I was saying… takes you back to your talk after an interruption. It is the past continuous of say: you were in the middle of saying it when the interruption came.",
    },
    {
      kind: "gap",
      stem: "Thank you very much for ___, everyone. Now, are there any questions? (listen, one word)",
      answers: ["listening"],
      feedback:
        "After thank you for, use the -ing form: Thank you for listening. Not Thank you for listen. It is a friendly, neutral way to close a talk.",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to tell the audience when they can ask questions.",
      words: ["questions", "be", "the", "I'll", "end.", "happy", "answer", "at", "to"],
      answer: "I'll be happy to answer questions at the end.",
      feedback:
        "I'll be happy to + the base form is a friendly, polite promise. At the end goes last, after answer questions. Saying this at the start of a talk tells the audience to keep their questions until you finish.",
    },
    {
      kind: "mistake",
      tokens: ["Now", "let's", "have", "a", "look", "on", "this", "graph."],
      wrongIndex: 5,
      correction: "at",
      feedback: "We look at something, so the phrase is have a look at: Now let's have a look at this graph. Take a look at is also common.",
    },
  ],

  levelRationale:
    "The CEFR's B2 descriptors for addressing audiences say a learner can give a clearly prepared presentation, giving reasons for or against a point of view, and can take a series of follow-up questions. The spec (section 8) places giving a presentation at B2 in Speaking, with no family. The phrases use A1–B2 grammar: going to and will for the plan, the past continuous in As I was saying, and the first conditional in If you look at this graph, you'll see… The closing reuses To sum up from order 28, with the same neutral register.",

  sourceNotes:
    "english_grammar.txt, # Presentation, has ## Talking to the audience (As you all know, I think you're all familiar with, You're all aware that), ## Continuing after an interruption (As I was saying…, I was planning to deal with this point later) and ## Feedback, a list of tips: give a summary at the start, say how long you will speak, don't read out your slides, give people time to read them, and say that you will take questions at the end. As you all know and As I was saying agree with Swan, Practical English Usage, and are used as fixed phrases. The tips are rewritten in this topic's own words, and I'll come back to that later is used in place of I was planning to deal with this point later. The opening, the plan, the signposts (Moving on to, That brings me to) and the closing phrases are not in the notes; they are standard presentation English, authored from Swan and the learner dictionaries. ## Asking the speaker for more details is the other side of a question, and B2 answering-difficult-questions covers it. The mistake item has one fix: on can only become at (look at), and the feedback adds take a look at as another common phrase.",
};
