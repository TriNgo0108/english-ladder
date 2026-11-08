import type { SetTopic } from "../../schema";

export const easilyConfusedWords: SetTopic = {
  slug: "easily-confused-words",
  title: "Easily confused words: remind or remember, wear, dress or put on",
  summary: "Remind me to call him, not Remember me to call him. Learn when to use remember and remind, and wear, dress, get dressed and put on.",
  level: "b2",
  category: "phrases",
  shape: "set",
  order: 24,

  explanation: [
    "Some words are easy to confuse, because their meanings are close, or because your own language uses one word for both. This topic looks at two groups: <b>remember</b> and <b>remind</b>, and <b>wear</b>, <b>dress</b> and <b>put on</b>.",
    "<b>Remember</b> is about your own memory. You remember something, or you remember to do something: I remember his face. Remember to buy milk. At B1 you learned the difference between the two patterns: remember to do is for something that you need to do, and remember doing is for a memory of the past.",
    "<b>Remind</b> is what another person or a thing does: it makes you remember. It has an object, usually a person: remind me, remind her, remind everyone. Remember: the object is the person or thing that the action goes to. There are three common patterns. Remind + person + infinitive is for help not forgetting an action: Please remind me to call him. You met this pattern in order 10 and order 14. Remember: to and the base form together, like to buy or to see, are called the infinitive. Remind + person + about + noun is for an event or a job: She reminded us about the party. Remind + person + of is for someone or something that is similar, or that brings back a memory: He reminds me of my brother.",
    "So we say Remind me to call him, not Remember me to call him. (Remember me to your parents is an old, polite British phrase that means please say hello to your parents from me. It is not about forgetting.)",
    "<b>Wear</b> means have clothes, shoes, glasses or jewellery on your body. It describes how someone looks, not an action: She's wearing a red coat. <b>Be dressed in</b> means almost the same, and we often use it with a colour or a type of clothes: He was dressed in black.",
    "<b>Put on</b> is the action: you move the clothes onto your body. Take off is the opposite. Put on is a phrasal verb that can be separated, as at B1: Put your coat on. Put it on.",
    "<b>Dress</b> usually has a person as its object: you dress a baby. For yourself, we usually say <b>get dressed</b>: I got dressed quickly. I dressed quickly is also correct, but less common in speech. We don't use dress with the clothes as its object: Put on your coat, not Dress your coat.",
  ].join("\n\n"),

  entries: [
    { headword: "remember", gloss: "have something in your mind from the past, or not forget it", inUse: "I still <b>remember</b> the name of my first teacher." },
    { headword: "remember to do something", gloss: "not forget to do something that you need to do", inUse: "Did you <b>remember to</b> buy bread on the way home?" },
    { headword: "remember doing something", gloss: "have a memory of something that you did", inUse: "I <b>remember swimming</b> in this lake when I was a child." },
    { headword: "remind someone to do something", gloss: "tell or help someone, so that they don't forget to do something", inUse: "Could you <b>remind me to</b> water the plants tomorrow?" },
    { headword: "remind someone about something", gloss: "help someone not forget an event or a job", inUse: "My boss <b>reminded</b> everyone <b>about</b> the meeting at nine." },
    { headword: "remind someone of someone or something", gloss: "make someone think of another person or thing, because they are similar or they bring back a memory", inUse: "You <b>remind me of</b> your father when you laugh." },
    { headword: "wear", gloss: "have clothes, shoes, glasses or jewellery on your body", inUse: "She always <b>wears</b> glasses for reading." },
    { headword: "be dressed in", gloss: "be wearing particular clothes or a particular colour", inUse: "Everyone at the party <b>was dressed in</b> white." },
    { headword: "get dressed", gloss: "put your clothes on, usually after you get up", inUse: "The children <b>got dressed</b> and came down for breakfast." },
    { headword: "dress someone", gloss: "put clothes on another person, usually a child", inUse: "It takes me twenty minutes to <b>dress</b> the twins in the morning." },
    { headword: "put on", gloss: "move clothes, shoes or glasses onto your body", inUse: "<b>Put</b> your gloves <b>on</b>. It's freezing outside." },
    { headword: "take off", gloss: "remove clothes, shoes or glasses from your body", inUse: "Please <b>take off</b> your boots before you come in." },
  ],

  quiz: [
    {
      kind: "choice",
      stem: "I always forget to call the bank. Can you ___ me to call them tomorrow?",
      options: ["remember", "mind", "remind"],
      answer: 2,
      feedback:
        "Another person helps you not forget, so we use remind + person + to: Can you remind me to call them tomorrow? Remember is about your own memory, so Remember me to call them is a common mistake.",
    },
    {
      kind: "gap",
      stem: "My phone sends me a message to remind me ___ my appointments. (one word)",
      answers: ["about", "of"],
      feedback:
        "Remind someone about something is usual for an event or a job: to remind me about my appointments. Remind someone of something is also possible here, but of is more usual for a person or thing that is similar.",
    },
    {
      kind: "choice",
      stem: "Hurry up and ___ your shoes. The taxi is waiting outside.",
      options: ["wear", "put on", "dress"],
      answer: 1,
      feedback:
        "Put on is the action of moving the shoes onto your feet, so Hurry up and put on your shoes. Wear describes how you look once they are on, and dress has a person as its object, not shoes.",
    },
    {
      kind: "choice",
      stem: "All day at the wedding, the bride ___ a beautiful long dress.",
      options: ["wore", "dressed", "put on"],
      answer: 0,
      feedback:
        "All day describes how she looked, not one action, so we use wear: the bride wore a beautiful long dress. She put it on once, before the wedding. Dressed a dress is not correct; we could say she was dressed in a long dress.",
    },
    {
      kind: "gap",
      stem: "I'm so sorry I didn't ___ your birthday. I feel terrible. (remember or remind)",
      answers: ["remember"],
      feedback:
        "It is about your own memory, so we use remember: I'm so sorry I didn't remember your birthday. Remind needs a person as its object, and it means make someone remember.",
    },
    {
      kind: "choice",
      stem: "My son is two. Every morning I ___ him and take him to nursery.",
      options: ["put on", "wear", "dress"],
      answer: 2,
      feedback:
        "Dress has a person as its object: I dress him means I put his clothes on him. Put on and wear have the clothes as their object, not the person.",
    },
    {
      kind: "mistake",
      tokens: ["That", "song", "always", "remembers", "me", "of", "my", "grandmother."],
      wrongIndex: 3,
      correction: "reminds",
      feedback:
        "A thing that makes you think of someone reminds you of them: That song always reminds me of my grandmother. Remember doesn't take a person + of in this way.",
    },
  ],

  levelRationale:
    "English Vocabulary Profile: remember, wear, put on and take off are usually given as A1 or A2, remind and get dressed as B1, and remind someone of, remind someone about, dress someone and be dressed in as B1 or B2 (my best reading of the profile, not a checked list). The words themselves are early, but choosing between them is a long-term problem, and Remember me to call him is still common in B2 writing, so the spec (section 8) places these pairs at B2. The two pairs from the notes are one set topic with no family. Remember to do and remember doing are B1 points (gerunds vs infinitives), so they are shown here but not tested again, and remind + person + to links to orders 10 and 14.",

  sourceNotes:
    "english_grammar.txt, # Remind or remember says remember is having a memory or not forgetting, and remind is when something or someone makes you remember; # Wear and dress says wear and be dressed in mean have on, and dress and get dressed mean put on, with dress + a person. Both agree with Swan, Practical English Usage, and are used, with new examples; the note's 'when something or some makes you' is missing one, and its dress and get dressed = put on is only true when dress has a person as its object, so this topic says so. Remind someone of and about, and the old British Remember me to your parents, are from Swan. Rob and steal, and borrow and lend, were considered but not added: the English Vocabulary Profile gives them as A2 or B1, so they would not be clearly B2 entries. Every gloss and example is new.",
};
