import type { PhraseTopic } from "../../schema";

export const chairingAMeeting: PhraseTopic = {
  slug: "chairing-a-meeting",
  title: "Chairing a meeting: The purpose of today's meeting is…, So, to recap…",
  summary: "Open with the purpose and the agenda, bring people in, keep the discussion on track, recap, agree who does what, and close the meeting on time.",
  level: "c1",
  category: "speaking",
  shape: "phrases",
  order: 17,

  explanation: [
    "The <b>chair</b> is the person who runs a meeting. The chair opens it, makes sure that everyone can speak, keeps the discussion on the subject, and closes it with clear tasks for after the meeting. Remember: register means how formal or informal your words are. Most chairing phrases are neutral. A few are formal, for a large or official meeting, and a few are informal, for a small team you know well.",
    "<b>Open the meeting and give its purpose.</b> <b>Right, shall we get started?</b> <b>Thank you all for coming.</b> <b>The purpose of today's meeting is to</b> + the base form: The purpose of today's meeting is to plan the summer sale. The <b>agenda</b> is the list of points to discuss, and each point is an <b>item</b>: Let's start with the first item on the agenda. The next item is the budget. In a formal meeting: Good morning, ladies and gentlemen. Shall we begin?",
    "<b>Bring people in.</b> A good chair asks quiet people for their view: <b>Could we hear from</b> the sales team? <b>What's your view on this</b>, Ravi? <b>Would anyone like to add anything?</b> If two people speak at once, give the turn to one of them: <b>Could you let Maria finish, please?</b> Let's hear from Maria first, then Tom.",
    "<b>Keep the meeting on track.</b> When the discussion moves away from the agenda, bring it back politely: <b>Let's come back to that later.</b> <b>I'm afraid that's not on today's agenda.</b> We're running short of time, so let's move on. With a team you know well, <b>Let's park that for now</b> is common: park means leave a subject until a later meeting. It is informal.",
    "<b>Recap and agree action points.</b> To <b>recap</b> means to repeat the main points: <b>So, to recap</b>, we've agreed to delay the launch. Then check: <b>Is everyone happy with that?</b> An <b>action point</b> is a task that someone must do after the meeting. <b>Who's going to take that on?</b> Take on means accept a task. Sam, <b>could you look into</b> the costs? Look into means find out more about. Can we set a deadline for that?",
    "<b>Close the meeting.</b> <b>Is there any other business?</b> Any other business, often written AOB, is the last item on many agendas: a chance to raise a point that isn't on the list. Then: <b>Right, I think that's everything.</b> Let's meet again next Tuesday. In a formal meeting: If there is no other business, I declare the meeting closed.",
    "Questions with could and would are polite, as in B1 indirect and polite questions. A chair can also be direct, with let's: Let's move on to item three. Both are neutral.",
  ].join("\n\n"),

  situations: [
    {
      situation: "Opening the meeting and stating its purpose",
      phrases: ["Right, shall we get started?", "Thank you all for coming.", "The purpose of today's meeting is to plan the summer sale."],
      register: "neutral",
    },
    {
      situation: "Opening a formal meeting",
      phrases: ["Good morning, ladies and gentlemen. Shall we begin?", "May I welcome you all to this year's general meeting."],
      register: "formal",
    },
    {
      situation: "Going through the agenda",
      phrases: ["Let's start with the first item on the agenda.", "The next item on the agenda is the budget.", "Let's move on to item three."],
      register: "neutral",
    },
    {
      situation: "Bringing people in",
      phrases: ["Could we hear from the sales team?", "What's your view on this, Ravi?", "Would anyone like to add anything?"],
      register: "neutral",
    },
    {
      situation: "Dealing with two people speaking at once",
      phrases: ["Could you let Maria finish, please?", "Let's hear from Maria first, then Tom."],
      register: "neutral",
    },
    {
      situation: "Keeping the meeting on track",
      phrases: ["Let's come back to that later.", "I'm afraid that's not on today's agenda.", "We're running short of time, so let's move on."],
      register: "neutral",
    },
    {
      situation: "Keeping a meeting of your own team on track",
      phrases: ["Let's park that for now.", "OK, back to the budget."],
      register: "informal",
    },
    {
      situation: "Recapping and checking agreement",
      phrases: ["So, to recap, we've agreed to delay the launch.", "Is everyone happy with that?"],
      register: "neutral",
    },
    {
      situation: "Agreeing action points",
      phrases: ["Who's going to take that on?", "Sam, could you look into the costs?", "Can we set a deadline for that?"],
      register: "neutral",
    },
    {
      situation: "Closing the meeting",
      phrases: ["Is there any other business?", "Right, I think that's everything.", "Let's meet again next Tuesday."],
      register: "neutral",
    },
    {
      situation: "Closing a formal meeting",
      phrases: ["If there is no other business, I declare the meeting closed."],
      register: "formal",
    },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "You are chairing a meeting about the new website. Two colleagues start a long discussion about the office party, which is not on the agenda. What do you say?",
      options: [
        "Be quiet, both of you!",
        "Who's going to take that on?",
        "That's an interesting point, but it's not on today's agenda. Let's come back to it at the end.",
        "Is there any other business?",
      ],
      answer: 2,
      feedback:
        "The chair brings the discussion back to the agenda politely: it's not on today's agenda, and let's come back to it at the end. Be quiet, both of you! is rude. Who's going to take that on? gives someone a task, and Is there any other business? is for the end of the meeting.",
    },
    {
      kind: "choice",
      stem: "Near the end of the meeting, you want someone to agree to deal with the new booking system. What do you ask?",
      options: [
        "Who's going to take that on?",
        "Shall we get started?",
        "Could you let Maria finish, please?",
        "What's the purpose of today's meeting?",
      ],
      answer: 0,
      feedback:
        "Who's going to take that on? asks who will accept the task: it creates an action point. Shall we get started? opens a meeting, Could you let Maria finish? deals with an interruption, and the chair gives the purpose of the meeting; it doesn't ask for it.",
    },
    {
      kind: "gap",
      stem: "Ana, you haven't said much yet. Could we ___ from you? What do you think? (one word: listen to what someone says)",
      answers: ["hear"],
      feedback:
        "Could we hear from …? brings a person into the discussion: Could we hear from you? After hear, use from + the person. Listen to … is not used in this question.",
    },
    {
      kind: "gap",
      stem: "Right, the last item on the agenda: is there any other ___? (one word: the B in AOB)",
      answers: ["business"],
      feedback:
        "Any other business (AOB) is the last item on many agendas, a chance to raise a point that isn't on the list: Is there any other business?",
    },
    {
      kind: "wordbank",
      prompt: "Put the words in order to open the meeting and give its purpose.",
      words: ["is", "The", "to", "meeting", "of", "a new supplier.", "choose", "today's", "purpose"],
      answer: "The purpose of today's meeting is to choose a new supplier.",
      feedback:
        "The purpose of today's meeting is to + the base form tells everyone at the start why they are there: The purpose of today's meeting is to choose a new supplier.",
    },
    {
      kind: "choice",
      stem: "You are chairing a formal annual meeting of a company's shareholders, most of whom you have never met. How do you open it?",
      options: [
        "Right, guys, let's crack on.",
        "OK, back to the budget.",
        "Let's park that for now.",
        "Good morning, ladies and gentlemen. Shall we begin?",
      ],
      answer: 3,
      feedback:
        "Good morning, ladies and gentlemen. Shall we begin? is formal and polite, so it suits shareholders you don't know. Right, guys, let's crack on is informal, for a team you know well. OK, back to the budget and Let's park that for now are informal too, and they are for the middle of a meeting, not the start.",
    },
  ],

  levelRationale:
    "The CEFR's C1 descriptors for formal discussion and meetings say a learner can easily keep up with the debate and argue a formal position, and the Companion Volume's C1 descriptors for collaborating in a group and leading group work include organising varied phases of a discussion, intervening to steer it back on track, and summarising and evaluating the points made. Chairing a meeting is that skill. The spec (section 8) places chairing a meeting at C1 with no family. The grammar is A2-B2: let's + the base form, polite questions with could and would (as in B1 indirect and polite questions), and the present perfect for what has been agreed. The English Grammar Profile has no entry for chairing phrases, which are lexical; the phrase labels follow the learner dictionaries (park in this sense informal, recap and take on unlabelled) as described in the source notes.",

  sourceNotes:
    "english_grammar.txt, # Statements, has Shall we look at the first items on the agenda? (starting a meeting), So, the first action point is to…, Is everyone agreed on that?, Let's come back to that later (postponing), Can you make a note of those suggestions?, I'll try and draw all that together, Have I missed anything? and Overall, I think it's been a very productive meeting. These agree with Swan, Practical English Usage, and their functions are used, with new sentences. The note's 'the first items' should be the first item, 'apart from?' needs an object, and 'mae' should be made. Is everyone agreed on that? is correct but less usual than Is everyone happy with that?, which is used; So we're agreed, then? is not used, because B2 checking-for-approval labels it informal. Register labels follow the Oxford Advanced Learner's Dictionary as I know it: park (= leave an issue until a later meeting) is marked informal, and recap, take on and look into are unlabelled. The dictionary's online pages could not be fetched for this task (HTTP 403); Wiktionary also marks this sense of park informal. Thank you all for coming is used rather than a Thanks phrase, because Thanks phrases are informal across the site.",
};
