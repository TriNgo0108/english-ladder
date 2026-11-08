import type { RuleTopic } from "../../schema";

export const advancedInversionAndFronting: RuleTopic = {
  slug: "advanced-inversion-and-fronting",
  family: "inversion",
  title: "Advanced inversion and fronting: Had I known…, So severe was the damage…, Here comes the bus",
  summary: "Had I known, I'd have come. So severe was the damage that the bridge closed. Here comes the bus! Formal inversion, and fronting for emphasis.",
  level: "c1",
  category: "grammar",
  shape: "rule",
  order: 5,

  explanation: [
    "In B2, we used inversion after never, rarely and not only: Never have I seen such a view. Remember: in inversion, we put the auxiliary before the subject, as in a question. Remember: an auxiliary is a small verb that goes with another verb, like be in She is working, have in They have finished, do in Do you like it?, and can or will. Remember: the subject is the person or thing that the sentence is about. In order 4, we also met inversion after as: She became a doctor, <b>as did</b> her father. This topic adds more patterns. Almost all of them are formal or literary: they are common in formal writing, speeches and stories. In conversation, the normal order is usual, and the normal order is always correct.",
    "In formal English, we can leave out if and put <b>had</b>, <b>were</b> or <b>should</b> before the subject. <b>Had I known</b> about the strike, I would have taken the train. (= If I had known: the third conditional, from B2.) <b>Were she to resign</b>, the company would be in trouble. (= If she resigned.) <b>Were I</b> you, I would accept. (= If I were you.) <b>Should you need</b> any help, please call reception. (= If you need any help.) Should makes the situation sound less likely, and it is common in formal letters and instructions. Only had, were and should are used like this, and we don't use if as well: Had I known, not If had I known.",
    "In the negative, not goes after the subject, and there is no short form: <b>Had we not booked</b> early, we would have missed the concert, not Hadn't we booked early.",
    "<b>So</b> + adjective at the start, with the verb be before the subject, makes a strong sentence about a result: <b>So severe was the damage that</b> the bridge was closed for a month. (= The damage was so severe that …) With another verb, use the auxiliary, or do, does or did: So quickly <b>did</b> she work that she finished by noon. <b>Such</b> + be + subject + that works in the same way, with a noun as the subject: <b>Such was his anger that</b> he couldn't speak. (= His anger was so great that …) As in B1, so goes with an adjective or an adverb, and such goes with a noun. In these patterns, we usually keep that.",
    "Remember: a word or phrase like never, which has a negative or limiting meaning (not, almost not, or only), is called a negative adverbial. C1 adds more of them. <b>Little</b> at the start means not at all, and goes with know, realise, think and suspect: <b>Little did I know</b> that she was watching me. (= I had no idea.) After <b>not until</b> …, the inversion is in the main clause, as after only when in B2: <b>Not until</b> the plane landed <b>did I realise</b> that I'd left my passport at home. <b>Under no circumstances</b> and <b>at no time</b> work like never: <b>Under no circumstances should you</b> open this door. <b>At no time did</b> the company warn us.",
    "Use the right verb form after the auxiliary. After had, use the past participle: Had I known, not Had I know. After did, should or to, use the base form: Little did I know, not Little did I knew. Remember: the past participle is the form of a verb that comes after have: seen, gone, finished. Remember: the base form is the verb as you see it in a dictionary, with nothing added. And don't forget the inversion: So severe was the damage, not So severe the damage was.",
    "Putting a word or phrase at the start of the sentence, when it would usually come later, is called <b>fronting</b>. After a fronted phrase of place or direction, the whole verb can come before the subject, with no auxiliary and no do: <b>On the hill stood</b> an old castle. <b>Into the room walked</b> a tall man. This is common in stories and descriptions, with verbs like be, stand, lie, sit, come and go. The normal order is also correct: An old castle stood on the hill.",
    "In everyday speech, we do the same after <b>here</b> and <b>there</b>: <b>Here comes</b> the bus! <b>There goes</b> my train. When the subject is a pronoun, it comes before the verb: <b>Here it comes</b>, not Here comes it. There she goes, not There goes she. Remember: a pronoun is a short word that we use in place of a noun.",
    "We can also front an object, for emphasis or to contrast two things, with no inversion: the rest of the sentence keeps the normal order. <b>That I can't accept.</b> (= I can't accept that.) Most of the book I enjoyed, but <b>the ending I hated</b>. Remember: emphasis means making one part of what you say stand out, so that the listener notices it. This kind of fronting is used in speech as well as in writing. Don't add an auxiliary before the subject: That I can't accept, not That can I not accept. In statements like these, inversion with an auxiliary comes only after the words in this topic and in B2.",
  ].join("\n\n"),

  form: [
    "Had + subject + past participle = If + subject + had …: Had I known, I would have come.",
    "Were + subject + to + base form / Were I you = If …: Were she to resign, … · Should + subject + base form = If …: Should you need help, …",
    "negative: Had we not booked …, not Hadn't we booked …",
    "So + adjective + be + subject + that: So severe was the damage that … · Such + be + subject + that: Such was his anger that …",
    "Little did I know · Not until … did I realise · Under no circumstances should you … · At no time did they …",
    "place or direction + verb + noun subject: On the hill stood a castle. · Here comes the bus. · pronoun: Here it comes.",
    "fronting with no inversion: That I can't accept.",
    "formal or literary, except Here comes / There goes and fronting an object (That I can't accept.) · the normal order is always correct",
  ].join("\n"),

  examples: [
    {
      sentence: "<b>Had I known</b> you were coming, I would have cooked something special.",
      why: "<b>Had</b> + subject + past participle means If I had known. It is a formal third conditional with no if.",
    },
    {
      sentence: "<b>Should you have</b> any questions, please do not hesitate to contact us.",
      why: "<b>Should</b> + subject + base form means If you have. It is typical of formal letters.",
    },
    {
      sentence: "<b>So popular was</b> the exhibition <b>that</b> the museum stayed open until midnight.",
      why: "<b>So</b> + adjective comes first, so the verb be comes before the subject, the exhibition.",
    },
    {
      sentence: "<b>Little did they realise</b> how difficult the climb would be.",
      why: "<b>Little</b> means not at all. It takes inversion with did and the base form, realise.",
    },
    {
      sentence: "At the end of the garden <b>stood</b> an old oak tree.",
      why: "After a fronted phrase of place, the whole verb, <b>stood</b>, comes before a noun subject, with no do.",
    },
    {
      sentence: "<b>There she goes</b>, late as usual.",
      why: "The subject is a pronoun, she, so it comes before the verb: There she goes, not There goes she.",
    },
    {
      sentence: "Some of his ideas are good. <b>That one</b> I really like.",
      why: "The object, that one, is fronted for contrast. The rest keeps the normal order: I really like.",
    },
  ],

  pitfall: {
    wrong: "So heavy the rain was that the match was cancelled.",
    right: "So heavy <b>was the rain</b> that the match was cancelled.",
    why: "When so + adjective starts the sentence, the verb be comes before the subject: was the rain, not the rain was.",
  },

  quiz: [
    {
      kind: "gap",
      stem: "___ you to change your mind, the job would still be yours. (Write one word.)",
      answers: ["were"],
      feedback:
        "Were + subject + to + base form is a formal conditional with no if: Were you to change your mind, the job would still be yours. It means If you changed your mind. If and should don't fit before you to.",
    },
    {
      kind: "gap",
      stem: "In 1987, a huge storm hit the town. So severe ___ the damage that the bridge stayed closed for a year. (Write one word.)",
      answers: ["was"],
      feedback:
        "So + adjective at the start takes inversion: the verb be comes before the subject. The storm was in 1987, and damage is uncountable, so we use was: So severe was the damage that the bridge stayed closed for a year.",
    },
    {
      kind: "choice",
      stem: "Which sentence is correct?",
      options: [
        "Little did I know that she was watching me.",
        "Little I knew that she was watching me.",
        "Little knew I that she was watching me.",
        "Little did I knew that she was watching me.",
      ],
      answer: 0,
      feedback:
        "Little at the start means not at all, and it takes inversion with did and the base form: Little did I know. We don't put knew before I, we don't leave out the inversion, and after did we use know, not knew.",
    },
    {
      kind: "choice",
      stem: "Which sentence, from a story, is correct?",
      options: [
        "Into the room did walk a tall man.",
        "Into the room walked he.",
        "Into the room did a tall man walk.",
        "Into the room walked a tall man.",
      ],
      answer: 3,
      feedback:
        "After a fronted phrase of direction, the whole verb comes before a noun subject, with no do: Into the room walked a tall man. With a pronoun, the subject comes first: Into the room he walked. A tall man walked into the room is also correct.",
    },
    {
      kind: "choice",
      stem: "Your colleague suggests cancelling the project. You want to stress that you refuse. Which sentence is correct?",
      options: ["That can I not accept.", "That I can't accept.", "That do I not accept.", "That I don't can accept."],
      answer: 1,
      feedback:
        "We can front the object, that, for emphasis, and the rest keeps the normal order: That I can't accept. A fronted object doesn't take inversion, and can't doesn't need do.",
    },
    {
      kind: "mistake",
      tokens: ["Had", "she", "know", "about", "the", "traffic,", "she", "would", "have", "left", "earlier."],
      wrongIndex: 2,
      correction: "known",
      feedback:
        "After had, we use the past participle: Had she known about the traffic, she would have left earlier. It means If she had known. Know is irregular: know → knew → known.",
    },
    {
      kind: "mistake",
      tokens: ["Not", "until", "the", "next", "morning", "did", "we", "saw", "how", "bad", "the", "damage", "was."],
      wrongIndex: 7,
      correction: "see",
      feedback:
        "After did, we use the base form: Not until the next morning did we see how bad the damage was. The past is already in did, so the verb is see, not saw.",
    },
    {
      kind: "mistake",
      tokens: ["So", "was", "his", "anger", "that", "he", "couldn't", "say", "a", "word."],
      wrongIndex: 0,
      correction: "Such",
      feedback:
        "Anger is a noun, and there is no adjective, so we use such: Such was his anger that he couldn't say a word. So needs an adjective: So angry was he that he couldn't say a word.",
    },
  ],

  levelRationale:
    "The spec (section 8) places advanced inversion and fronting at C1, as a new point and the C1 topic of the inversion family, after B2 inversion-after-negative-adverbials, which left little, under no circumstances and at no time to C1; this topic teaches them and does not reteach never, rarely, not only, hardly, no sooner or only then. The English Grammar Profile records inversion after negative and limiting adverbials at B2 and C1, and conditional inversion with had, were and should, so + adjective + inversion and full-verb inversion after a fronted place phrase among its C1 points, so they are brought together here at C1. Here comes / There goes is everyday spoken English and is placed here because it shares the rule about pronoun subjects. Inversion, negative adverbial, emphasis, auxiliary, subject, pronoun, past participle and base form reuse their earlier wording, and as did her father from order 4 is named. Fronting is defined here. Following Review Focus 3, there is no word bank, and each gap starts after the slot that if would fill, so the uninverted form can't fit: in ___ you to change your mind, if and should can't come before you to, and in So severe ___ the damage, only the verb fits before the subject; the stem puts the storm in 1987, so is doesn't fit. Not until … did is tested as a mistake item, not a gap, because could would also fit a gap after not until. The two missing-inversion errors (So severe the damage was, Hadn't we booked) need two tokens to fix, so they are the pitfall and the explanation; the mistake items use one-token errors (know, saw, So), and each was checked for a second fix: replacing had with did, if or now, or did with had or could, leaves the sentence wrong, because the verb form is chosen so that only one auxiliary fits it, and the subject of the had item is she, so Now she know breaks agreement (with I, Now I know … I wouldn't have … was a second fix).",

  sourceNotes:
    "english_grammar.txt has no section on inversion or fronting (a new point in spec section 8), so this topic is authored from Swan, Practical English Usage, entries inversion: auxiliary verb before subject (after negative and limiting expressions, including little, not until, under no circumstances and at no time; after so + adjective and such + be; and in conditional clauses with had, were and should, formal, with not after the subject and no contracted negative: Had we not …, not Hadn't we …), inversion: full verb before subject (after adverbials of place and direction, mostly in literary and descriptive writing, and after here and there in speech, with no inversion when the subject is a pronoun: Here it comes), and fronting (an object or complement put first for emphasis or contrast, with no inversion). Swan records fronting of an object in informal speech as well as in writing, so the explanation does not call that kind formal. B2 inversion-after-negative-adverbials and B1 so-and-such are kept: so goes with an adjective and such with a noun.",
};
