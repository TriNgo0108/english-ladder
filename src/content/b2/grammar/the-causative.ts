import type { RuleTopic } from "../../schema";

export const theCausative: RuleTopic = {
  slug: "the-causative",
  title: "The causative: I had my hair cut",
  summary: "I had my hair cut. We're getting the house painted. She had her bag stolen. Say that someone else did the work, or that something bad happened to you.",
  level: "b2",
  category: "grammar",
  shape: "rule",
  order: 9,

  explanation: [
    "Compare: I <b>cut</b> my hair. (I did it myself.) I <b>had</b> my hair <b>cut</b>. (A hairdresser did it for me.) When we arrange for someone else to do a job for us, usually a professional that we pay, we use <b>have</b> + object + <b>past participle</b>. This is called the <b>causative</b>: we cause someone else to do the work. Remember: the object is the person or thing that the action goes to. It usually comes after the verb.",
    "Have can be in any tense, and the past participle doesn't change: I <b>have</b> my car <b>serviced</b> every year. We<b>'re having</b> the kitchen <b>painted</b> this week. I<b>'ve</b> just <b>had</b> my teeth <b>cleaned</b>. You should <b>have</b> that tooth <b>checked</b>. Remember: the past participle is the form of a verb that comes after have: seen, gone, finished.",
    "The object comes <b>before</b> the past participle: I had my hair cut. If it comes after, the meaning changes: I <b>had cut</b> my hair is the past perfect, and it means that I did it myself, before another past time.",
    "Have is a normal verb here, so questions and negatives use do, does or did: <b>Where do</b> you <b>have</b> your hair <b>cut</b>? <b>Did</b> you <b>have</b> the car <b>checked</b>? We <b>didn't have</b> the windows <b>cleaned</b>.",
    "We can also use <b>get</b> + object + past participle. It means the same, but it is <b>a little more informal</b>: I need to <b>get</b> my phone <b>repaired</b>. We<b>'re getting</b> the house <b>painted</b>.",
    "The same pattern can be about <b>something bad</b> that happened to us, which we didn't arrange: She <b>had</b> her bag <b>stolen</b> on the train. (Someone stole her bag.) We <b>had</b> our roof <b>damaged</b> in the storm. We usually use have for this meaning.",
    "The past participle has the meaning of a passive (B1): my hair was cut, the house is being painted. To say who did the work, use <b>by</b>, as in the passive: We had the house painted <b>by</b> a local company.",
  ].join("\n\n"),

  form: [
    "have + object + past participle → someone else does it for me: I had my hair cut.",
    "get + object + past participle → the same, a little more informal: I got my phone repaired.",
    "have in any tense: I'm having / I've had / I'll have / I should have … the car checked",
    "questions and negatives with do: Where do you have your hair cut? I didn't have it cleaned.",
    "something bad that happened: She had her bag stolen.",
    "I had cut my hair is the past perfect of cut, so you did it yourself: it is not the causative",
  ].join("\n"),

  examples: [
    {
      sentence: "I <b>had</b> my hair <b>cut</b> yesterday.",
      why: "A hairdresser cut it. <b>Had</b> + object (my hair) + past participle (cut).",
    },
    {
      sentence: "We<b>'re having</b> the kitchen <b>painted</b> this week.",
      why: "Painters are doing the work. Have is in the present continuous, and painted doesn't change.",
    },
    {
      sentence: "I need to <b>get</b> my phone <b>repaired</b>.",
      why: "<b>Get</b> + object + past participle means the same as have, but it is a little more informal.",
    },
    {
      sentence: "<b>Where do</b> you <b>have</b> your car <b>serviced</b>?",
      why: "Have is a normal verb here, so the question uses <b>do</b>.",
    },
    {
      sentence: "She <b>had</b> her bag <b>stolen</b> on the train.",
      why: "She didn't arrange this. Something bad happened to her: someone stole her bag.",
    },
  ],

  pitfall: {
    wrong: "I had cut my hair at the hairdresser's.",
    right: "I <b>had my hair cut</b> at the hairdresser's.",
    why: "The object goes <b>before</b> the past participle. Had cut my hair is the past perfect, and it means that I did it myself.",
  },

  quiz: [
    {
      kind: "choice",
      stem: "Which sentence tells us that a hairdresser cut Mia's hair?",
      options: ["Mia cut her hair.", "Mia had cut her hair.", "Mia had her hair cut.", "Mia has cut her hair."],
      answer: 2,
      feedback:
        "Had + object + past participle means that someone else did the work: Mia had her hair cut. Mia cut her hair and Mia has cut her hair mean that she did it herself, and Mia had cut her hair is the past perfect, so she did it herself too.",
    },
    {
      kind: "gap",
      stem: "Our kitchen looks great! We ___ last month. (have, it, paint)",
      answers: ["had it painted"],
      feedback:
        "Painters did the work last month, so we use had + object + past participle: We had it painted last month. The object, it, comes before painted.",
    },
    {
      kind: "gap",
      stem: "I can't drive to work this week. I ___ at the garage. (my car, repair, present continuous)",
      answers: ["am having my car repaired", "'m having my car repaired", "am getting my car repaired", "'m getting my car repaired"],
      feedback:
        "The mechanics are doing the work, so we use have + object + past participle, with have in the present continuous: I'm having my car repaired. I'm getting my car repaired is also correct, and a little more informal.",
    },
    {
      kind: "gap",
      stem: "Poor Tom! He ___ on the bus yesterday. (have, his wallet, steal)",
      answers: ["had his wallet stolen"],
      feedback:
        "Tom didn't arrange this. Something bad happened to him, and we use the same pattern: He had his wallet stolen. Steal is irregular: steal → stole → stolen.",
    },
    {
      kind: "choice",
      stem: "Sara was very upset when she got home. She had her phone stolen at the station. What happened?",
      options: ["Someone stole Sara's phone.", "Sara stole a phone.", "Sara asked someone to steal her phone."],
      answer: 0,
      feedback:
        "Here, have + object + past participle is about something bad that happened to Sara, which she didn't arrange. Someone stole her phone, and that is why she was upset.",
    },
    {
      kind: "mistake",
      tokens: ["I", "need", "to", "have", "my", "eyes", "test", "soon."],
      wrongIndex: 6,
      correction: "tested",
      feedback:
        "In the causative, the object is followed by the past participle, not the base form: I need to have my eyes tested soon. An optician will test them, not me.",
    },
    {
      kind: "mistake",
      tokens: ["She", "made", "her", "nails", "done", "at", "a", "salon", "yesterday."],
      wrongIndex: 1,
      correction: "had",
      feedback:
        "For a service that we arrange, we use have + object + past participle: She had her nails done at a salon yesterday. She got her nails done is also correct, and a little more informal. We don't use make in this pattern.",
    },
  ],

  levelRationale:
    "English Grammar Profile: have + object + past participle for a service appears from B1, and the pattern grows at B2, with get + object + past participle and with have something stolen for something bad that happened. The spec (section 8) places the causative at B2, and it has no family, as the B2 table says. It builds on B1 the-passive, because the past participle has a passive meaning, and on the past perfect (B1), which is the classic mistake (I had cut my hair). The who-did-the-work choice uses Mia had cut her hair as a distractor, and the stolen-phone choice says that Sara was upset, so the arranged meaning does not fit. The gaps name have, or name the tense and accept have and get, and have someone do something and get someone to do something are left out.",

  sourceNotes:
    "english_grammar.txt, # The causative: have + object + past participle, for arranging for someone else, usually a paid professional, to do something, and I cut my hair (I did it myself) against I had my hair cut (a hairdresser did it), agree with Swan. Get + object + past participle, have in any tense with do in questions and negatives, the object before the past participle, have something stolen, and by for the person are authored from Swan, Practical English Usage.",
};
