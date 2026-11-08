# English Ladder — C1 Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Clear the B2 carry-forwards, then author the complete C1 level: 22 topics from spec §8's C1 list, linked to their A1–B2 counterparts. This finishes the content for the first release.

**Architecture:** Content and test-only, apart from one table-header fix in `SetTopicView`. There are no schema changes.
- Topics are typed modules under `src/content/c1/<category>/<slug>.ts`, registered through a new C1 barrel, validated by the existing schema and registry, and linked across levels through `src/content/families.ts`.
- The plan follows the B2 plan (`docs/superpowers/plans/2026-11-07-english-ladder-b2.md`, "Tasks 4–9") step for step, using the shared helpers in `src/content/test-helpers.ts`.

**Tech Stack:** Next.js 16 (App Router, `output: 'export'`) · React 19 · TypeScript 6 strict · Tailwind 4 · Zod 4 · Vitest 5 + Testing Library + jsdom. These are unchanged.

**Spec:** `docs/superpowers/specs/2026-11-05-cefr-grammar-site-design.md`. The §8 C1 mapping is this plan's backlog. Prior plans are the platform/A1, A2, B1 and B2 plans in `docs/superpowers/plans/`. All of them are complete and merged to `master` (tip `42e4eb7`, 644 tests).

## Global Constraints

Every Global Constraint in the A2, B1 and B2 plans still applies verbatim:
- no push, remote or deploy until C1 is authored; this plan does not deploy either
- the quiz floor (4) and the rule/set/phrases minimums (3 examples, 6 entries, 3 situations)
- shape bound to category
- gap grading cannot test capitalisation, hyphenation, commas or end punctuation, and every defensible answer goes in `answers[]`
- the word bank is graded by order and never shuffled, with exactly one correct order
- the one-token rule for mistake items
- choice items have exactly one correct answer, in a varied position
- feedback reads correctly on both outcomes
- the family rules (one topic per key per level, keys in `FAMILY_KEYS`, explicit `family` where slug equals a key)
- British usage, with a standard American alternative accepted where Swan records it
- an explanation may rely on an earlier topic of its level by `order`, never a later one
- every ↗ or ↘ is named in words in the same string
- inversion and cleft sentences are never tested with a word bank
- the spec §12.1 definition of done

The following are added or restated for C1:

- **Git workflow: a normal branch in the main checkout, no worktrees.** Before Task 1, run `git switch -c english-ladder-c1` from `master` in `E:\side_projects\english`. Commit every task there. At the end, `git switch master` and `git merge --ff-only english-ladder-c1`, then delete the branch with `git branch -d`. Never run `git worktree add` or `EnterWorktree`.
- **Scope.** 22 topics, one per §8 item. None is split or merged.
- **Quiz length.** The target is 6 questions, with a range of 5–8. Every grammar and mechanics topic has **at least 2 `mistake` items** (spec §10 weights spot-the-mistake towards B2/C1). Every topic's quiz length is pinned with `quizLengths`.
- **C1 pitch.**
  - Explanations may use any words and structures up to C1, but stay plain: one idea per sentence, with an example straight after each rule.
  - Terms defined earlier are reused with their exact earlier wording. Before writing, grep A1–B2 for the term's first definition. This includes B2's past modal, non-defining clause, participle clause, causative, reporting verb, negative adverbial, inversion, cleft sentence, abstract noun, hedging, declarative question and rhetorical question.
  - New terms are defined once, in plain words, where first needed: subjunctive, unreal past, fronting, ellipsis, substitution, nominalisation, noun phrase, head noun, concession, discourse marker, cohesion, figurative language, metaphor, contrastive stress and fall-rise. Grep first: if *noun phrase* or *stress* already has a definition, reuse it.
- **Accuracy (C1's highest risk: 13 of its 22 topics are (new) in §8).** Every grammar claim must be checked against Swan, and its section named in `sourceNotes`. Every level claim must be checked against the English Grammar Profile, and the EGP entry named in `levelRationale`. Where Swan records British/American or formal/informal variation, the explanation says "usually" or names the variety, and no quiz item marks the other variant wrong.
- **No IPA and no vocabulary category at C1.** C1 has Grammar, Phrases & Expressions, Writing, Speaking & Communication and Mechanics.
- **Intonation stays in words.** It uses B1 `question-intonation`'s convention: bold for the word where the voice moves, then `(rising)`, `(falling)` or the new `(fall-rise)`. No new arrow glyphs (the →↗↘ font-subset gap is still open).
- **`order` is continuous across C1, 1–22:**
  - Grammar 1–11
  - Phrases & Expressions 12–14
  - Writing 15–16
  - Speaking 17–20
  - Mechanics 21–22
- **Advanced modality joins `modal-deduction`.** C1 has no other deduction topic, and its core is degrees of likelihood and expectation. So its scope is *may / might / could well*, *be bound to*, *should* and *ought to* for expectation (present and past), *should have* for an unmet expectation or criticism, and *will / would* for assumption (*That'll be the postman*). Obligation and ability stay at B2. *(My call; this settles the B2 plan's open choice.)*
- **One new family key, `summarising`.** It links B2 `summarising-and-adding-points` to C1 `formal-reports-and-executive-summaries`. *(My call: both teach summary language, and SEO arrivals on either page benefit from the link.)*

## Review Focus

1. **A mandative subjunctive gap that rejects *should*, or a mistake item that marks the British indicative wrong.** After *insist / recommend / suggest / It is essential that*, *be* and *should be* are both standard British English, and the indicative (*that he is*) is common informally. Every subjunctive gap accepts the bare form and *should* + bare form. No mistake item makes the indicative its wrong token. *were* and *was* after *if / wish / as if* are both accepted, agreeing with B1. Owned by Task 3, with a test pinning `answers[]` on every subjunctive gap.
2. **An ellipsis or substitution gap with a second defensible filler.** *I think so / I hope so / I expect so*, *do / do so / do it / do that*, *one / ones / it*, and *to* vs *to do* after *I'd like to* are often all right. Each stem must fix one, or `answers[]` takes every one. Owned by Task 4, with every gap's full `answers[]` pinned.
3. **An inversion or fronting mistake item with a second fix, or a gap where the uninverted form also fits.** *Had I known* vs *If I had known*: a gap must start after the slot that *if* would fill, so only the inverted form is possible. A mistake item that inverts wrongly (*Little he knew*) must have exactly one defensible click: deleting a word or moving the subject to an uninverted form must not also fix it. Owned by Task 4, with `wordbankAnswers` `[]` for `advanced-inversion-and-fronting` and every mistake pinned.
4. **A punctuation choice item where a dash, colon or semicolon is also correct.** A colon and a dash often both introduce an explanation, and a semicolon and a full stop both join two full sentences. Each punctuation choice item has exactly one option that matches the effect named in the stem, and its distractors are clearly wrong, not merely less elegant. Owned by Task 8, with each choice item's answer and distractors pinned.
5. **A collocation or idiom choice item whose distractor is a real British collocation.** *take a decision* (British) beside *make a decision*, *heavy* and *strong* with some nouns, *bitterly* and *deeply* with *disappointed*. Every distractor in `collocational-precision-and-near-synonyms` and `advanced-idioms` must be checked against a collocation dictionary (the Oxford Collocations Dictionary), and the check recorded in `sourceNotes`. Owned by Task 6, with each choice item's distractors pinned.

---

## File Structure

- `src/content/c1/index.ts`: the C1 barrel, `c1Topics: Topic[]`
- `src/content/c1/<category>/<slug>.ts`: the 22 topics
- `src/content/c1/c1-part-<n>.test.ts`: per-batch pins, parts 1–6
- `src/content/registry.ts`: loads `c1Topics` after `b2Topics`
- `src/content/families.ts`: the `summarising` key and updated comments
- `src/content/b2/writing/summarising-and-adding-points.ts`: gains `family: "summarising"`
- `src/content/cross-level.test.ts`: extended to A1–C1
- `src/components/shapes/SetTopicView.tsx` and its test: the table header (Task 1)

---

## Task 1: B2 carry-forwards and the phrase-table header

**Files:**
- Modify:
  - `src/content/b2/grammar/describing-certainty-in-the-past.ts` (Sara feedback), `src/content/b2/grammar/non-defining-relative-clauses.ts` (explanation): add the "usually / in American English" hedge where they state a rule B1 or Swan records as varying
  - `src/content/b2/grammar/the-causative.ts`: the "not: I had cut my hair" label. Reword it to say what that sentence means (past perfect of *cut*, you did it yourself) rather than calling it wrong.
  - `src/content/b2/writing/a-cover-letter.ts` and `letters-of-complaint.ts`: one register for *I would like…* requests. It is `formal` in both, agreeing with B1 `formal-and-informal-register`.
  - `src/content/a2/writing/an-informal-email.ts`: replace `"Hello Maria,"` with `"Hey Maria,"`, so the whole informal situation is informal. A1 and B1 keep *Hello* as neutral.
  - stale B1 test titles that no longer describe their assertions, the `b1-part-8` local `distractors`, and the local `gap` in the A1 tests. Both locals switch to the `test-helpers` imports.
  - `src/components/shapes/SetTopicView.tsx`: the first column header reads `Word` for category `vocabulary` and `Expression` for category `phrases`
- Test: `src/components/shapes/SetTopicView.test.tsx`, the touched part tests

**Interfaces:**
- Produces: nothing new for later tasks. C1 phrases tables render the header `Expression`.

- [ ] **Step 1: Create the branch.** `git switch -c english-ladder-c1`. `git branch --show-current` prints `english-ladder-c1`.
- [ ] **Step 2: Write the failing tests.**
  - `SetTopicView.test.tsx`: the existing header test keeps a vocabulary fixture and expects `["Word", "Meaning", "In use"]`. A new `it('labels the first column Expression for phrases topics')` expects `["Expression", "Meaning", "In use"]`.
  - The B2 pins for the two cover-letter/complaint situations expect `formal`.
  - The A2 pin (`a2-part-5` or wherever `an-informal-email` is pinned) expects `"Hey Maria,"` in the first situation.
- [ ] **Step 3: Run** `npm test -- src/components/shapes src/content`. Expected: FAIL on exactly those assertions.
- [ ] **Step 4: Make the changes** listed under Files. Grep the A2 quiz for `Hello Maria` first; if any item uses it, update that item and its pin too.
- [ ] **Step 5: Run** `npm test`, `npm run typecheck`, `npm run lint` and `npm run build`. Expected: PASS, with 645+ tests. `grep -rn "^function gap\|^function distractors" src/content` returns nothing.
- [ ] **Step 6: Commit.** `fix(content): B2 carry-forwards (hedges, causative label, request register, Hey Maria); Expression header on phrases tables`

---

## Task 2: C1 barrel and family keys

**Files:**
- Create: `src/content/c1/index.ts`
- Modify: `src/content/registry.ts`, `src/content/families.ts`, `src/content/b2/writing/summarising-and-adding-points.ts` and its pin in `b2-part-5.test.ts`
- Test: `src/content/registry.test.ts`

**Interfaces:**
- Produces:
  - `c1Topics: Topic[]` (initially `[]`). The registry loads `[...a1Topics, ...a2Topics, ...b1Topics, ...b2Topics, ...c1Topics]`.
  - `FAMILY_KEYS` gains `summarising`. B2 `summarising-and-adding-points` gets `family: "summarising"`.
  - New comment line: summarising → B2 summarising and adding points → C1 formal reports and executive summaries
  - Updated comment lines, naming each C1 slug from the table below:
    - modal-deduction → C1 advanced modality
    - wish → C1 the subjunctive and unreal past
    - passive → C1 impersonal and passive constructions
    - comparison, linking-words, register, collocations, idioms, agreeing-and-disagreeing, intonation, punctuation, inversion → their C1 slugs

**C1 slugs, order and families. The content tasks use this table verbatim:**

| order | category | slug | family |
|---|---|---|---|
| 1 | grammar | `advanced-modality` | `modal-deduction` |
| 2 | grammar | `the-subjunctive-and-unreal-past` | `wish` |
| 3 | grammar | `impersonal-and-passive-constructions` | `passive` |
| 4 | grammar | `advanced-comparison-structures` | `comparison` |
| 5 | grammar | `advanced-inversion-and-fronting` | `inversion` |
| 6 | grammar | `ellipsis-and-substitution` | — |
| 7 | grammar | `nominalisation` | — |
| 8 | grammar | `complex-noun-phrases` | — |
| 9 | grammar | `concessive-clauses` | — |
| 10 | grammar | `discourse-markers-and-cohesion` | `linking-words` |
| 11 | grammar | `register-and-formality-shifts` | `register` |
| 12 | phrases | `advanced-idioms` | `idioms` |
| 13 | phrases | `figurative-language` | — |
| 14 | phrases | `collocational-precision-and-near-synonyms` | `collocations` |
| 15 | writing | `discursive-and-argumentative-writing` | — |
| 16 | writing | `formal-reports-and-executive-summaries` | `summarising` |
| 17 | speaking | `chairing-a-meeting` | — |
| 18 | speaking | `diplomatic-language-and-negotiating` | — |
| 19 | speaking | `handling-pushback` | `agreeing-and-disagreeing` |
| 20 | speaking | `rhetorical-devices` | — |
| 21 | mechanics | `punctuation-for-rhetorical-effect` | `punctuation` |
| 22 | mechanics | `stress-and-intonation-for-emphasis` | `intonation` |

Notes on the table:
- No C1 slug equals a family key. Every keyed row still sets `family` explicitly.
- The `wish` link is deliberate: *wish* + past is the first unreal past a learner meets, so a learner on either page benefits from the link.
- Order dependencies:
  - inversion (5) after comparison (4), because *as did his father* is taught in 4 and named in 5
  - nominalisation (7) before complex noun phrases (8)
  - ellipsis and substitution (6) and concessive clauses (9) before discourse markers and cohesion (10)
  - impersonal constructions (3) and nominalisation (7) before register (11)
  - register (11) before the writing and speaking topics that label registers
  - rhetorical devices (20) before punctuation for rhetorical effect (21)

- [ ] **Step 1: Write the failing tests** in `registry.test.ts`:
  - `it('loads C1 topics into the corpus')`: a `createRegistry` fixture with a c1 topic in `register` and B1 `formal-and-informal-register` are siblings both ways
  - `it('lists the summarising family key once')`
  - `it('gives B2 summarising-and-adding-points the summarising family')`. Update the b2-part-5 family pin from `toBeUndefined()` to `"summarising"`.
- [ ] **Step 2: Run** `npm test -- src/content`. Expected: FAIL.
- [ ] **Step 3: Implement** the barrel, the registry wiring, the key, the comments and the B2 family.
- [ ] **Step 4: Run** `npm test` → PASS, then `npm run build` → succeeds, and `/c1/` renders its empty state.
- [ ] **Step 5: Commit.** `feat(content): C1 barrel and summarising family key`

---

## Tasks 3–8: C1 content

Every content task follows the B2 plan's six content steps ("Tasks 4–9"), with these C1 substitutions:

- [ ] **Step 1: Read the references.**
  - Read `src/content/b2/grammar/inversion-after-negative-adverbials.ts` for register and structure, or `src/content/b2/writing/letters-of-complaint.ts` for phrases topics.
  - Read every A1–B2 sibling via the family table, plus any earlier topic the new one builds on even without a family. For example, read B2 `cleft-sentences` and `hedging-and-degrees-of-certainty` for register, B1 `colons-and-semicolons` for punctuation, and B2 `declarative-and-rhetorical-questions` for rhetorical devices. C1 must not contradict them.
  - Grep `english_grammar.txt` for the source section named in the task. Topics marked **(new)** have no section, so say so in `sourceNotes` and author from Swan and the EGP.
- [ ] **Step 2: Author the topics,** each with a `summary` of at most 155 characters that doesn't open with a definition, at the C1 pitch in Global Constraints.
- [ ] **Step 3: Write `src/content/c1/c1-part-<n>.test.ts`** with the shared helpers. It pins:
  - slug and order sequence, shape, and schema pass
  - families, including "no family" for unkeyed rows
  - quiz lengths, with `quizLengths`
  - every gap's full `answers[]`, plus at least one wrong answer rejected per gap, with `expectGap`
  - every wordbank answer
  - every mistake item's wrong token and correction, with `mistakes`
  - for grammar and mechanics parts, each topic has at least 2 mistake items
  - for phrases, writing and speaking parts, the B2 surface checks: a short summary, no IPA, scrambled wordbanks, uniquely named situations, and no quiz answer copied word for word from the topic's own phrases
- [ ] **Step 4: Run the ambiguity sweep** on every item, plus the risks the task lists, and record it in the report. The four catches B1 and B2 reviewers kept making come first:
  - a second defensible click in a mistake item: another token a learner could defensibly click, including deleting a token, swapping a word, or a punctuation change
  - a gap missing a defensible variant
  - a cue loose enough to admit another structure
  - an unhedged rule that contradicts an earlier level
- [ ] **Step 5: Run** `npm test`, `npm run typecheck`, `npm run lint` and `npm run build`. Then inspect `out/c1/<category>/<slug>/index.html` for each new topic: the explanation, the summary meta and the quiz stems should all be present.
- [ ] **Step 6: Commit,** `feat(content): C1 <batch name> (<slugs>)`. A fix after review is a separate `fix(content): …` commit.

### Task 3: C1 Grammar, part 1 — modality, the subjunctive, impersonal passives, comparison (`order` 1–4), `c1-part-1`

`rule` shape. Sources: **(new)** advanced modality, **(new)** the subjunctive and unreal past, **(new)** impersonal and passive constructions, *Comparisons*.

- **Advanced modality** (scope in Global Constraints). The scale runs from *will* (assumption, sure) through *should* (expected) and *may / might / could well* (quite likely) to *might* (possible). *should have* has two meanings: an expectation (*They should have landed by now*) and a criticism (*You should have told me*). It must agree with B1 `modals-of-possibility-and-deduction` and B2 `describing-certainty-in-the-past`, and not reteach *must have / can't have*. The classic distractor is *may well* used for "certain".
- **The subjunctive and unreal past:** the mandative subjunctive (*I insist that she be told*, *It is vital that he attend*), with *should* + bare form as the usual British alternative. Fixed phrases (*if need be*, *be that as it may*). Unreal past after *It's (high) time*, *I'd rather*, *as if / as though*, *suppose / what if*. It extends B1 `wish-and-if-only` and must agree with its *were / was* rule. The classic distractor is *I'd rather you don't*. Review Focus 1.
- **Impersonal and passive constructions:** it extends B2 `advanced-passive-and-reporting-verbs` without repeating *It is said that / He is said to*. It covers:
  - *there* + passive reporting verb (*There are thought to be…*)
  - *It* + passive with a *that*-clause for decisions and plans (*It has been agreed that…*)
  - passive gerunds and infinitives (*I hate being interrupted*, *She expects to be promoted*, *He appears to have been misinformed*)
  - *get*-passive for events that happen to someone (*got fired*), which is informal
  - *need* + *-ing* with passive meaning (*The car needs washing*), with *needs to be washed* accepted
- **Advanced comparison structures:**
  - *the* + comparative…, *the* + comparative (*The sooner, the better*)
  - modifiers (*far / much / a great deal / considerably / slightly / a bit* + comparative)
  - *nowhere near as / not nearly as … as*
  - multiples (*twice as … as*, *three times the size of*)
  - *not so much X as Y*
  - *as … as ever*
  - *as* + inverted auxiliary (*as did his father*), named here and taught in order 5

  It extends A2 `comparatives-and-superlatives` and must agree with its spelling rules.
- **Extra sweep risk:** Review Focus 1. Also modifier gaps where *far*, *much* and *a lot* all fit: accept every one. And *should* vs *ought to* gaps: accept both.
- **Test:** every subjunctive gap's `answers[]` includes the bare form and the *should* form.

### Task 4: C1 Grammar, part 2 — inversion and fronting, ellipsis, noun phrases (`order` 5–8), `c1-part-2`

`rule` shape. All four sources are **(new)**.

- **Advanced inversion and fronting:** it extends B2 `inversion-after-negative-adverbials` and does not reteach *Never have I / Not only did*. It covers:
  - conditional inversion (*Had I known…*, *Were she to resign…*, *Should you need help…*)
  - *So* + adjective / *Such* + *be* … *that* (*So severe was the damage that…*)
  - *Little did I know*, and *Not until … did*
  - adverbial fronting with subject-verb inversion (*Here comes the bus*, *On the hill stood a castle*), including the rule that a pronoun subject doesn't invert (*Here it comes*)
  - fronting for emphasis or contrast with no inversion (*That I can't accept*)

  All of it is formal or literary except *Here comes* / *There goes*. The classic error is a missing or wrong auxiliary (*Had I know*, *So severe the damage was that*). No word banks. Review Focus 3.
- **Ellipsis and substitution:**
  - leaving out repeated words after an auxiliary (*She can swim and so can I*, *I haven't finished but Tom has*)
  - *to* for a repeated infinitive (*I'd like to*)
  - *so / not* after *think / hope / expect / afraid* (*I hope so*, *I'm afraid not*), and *I don't think so* as more usual than *I think not*
  - *do so*, which is more formal than *do it*
  - *one / ones* for a countable noun, never an uncountable one (*the red one*, not *a good one advice*)

  It links back to B1 `agreeing-and-disagreeing` for *So do I / Neither do I* without reteaching it. Review Focus 2.
- **Nominalisation:** turning a verb or adjective into a noun to make a statement more formal and impersonal (*The company expanded rapidly* → *The rapid expansion of the company*). It covers common pairs (*decide → decision*, *fail → failure*, *able → ability*), *of* for the doer or the thing affected, and adjectives that become pre-modifiers (*rapid*). It reuses the suffixes from B1 `word-building-suffixes` in one line and doesn't reteach them. The classic errors are the wrong suffix (*the decidement*) and a missing *of*.
- **Complex noun phrases:** head noun, pre-modifiers (compound nouns, *a three-year contract*, with no plural *-s* in the number + noun modifier) and post-modifiers (prepositional phrases, reduced relatives from B2 `reduced-relative-clauses`, *to*-infinitives: *the decision to leave*). The classic error is *a three-years contract*. Hyphens can't be gap-tested, so hyphen items are `choice` or `mistake` with the hyphen inside the token.
- **Extra sweep risk:** Review Focus 2 and 3. Also nominalisation gaps where two nouns exist (*improvement* / *improving*, *analysis*): fix the slot with a determiner and *of*, or accept both.
- **Test:** `wordbankAnswers` is `[]` for `advanced-inversion-and-fronting`.

### Task 5: C1 Grammar, part 3 — concession, cohesion, register (`order` 9–11), `c1-part-3`

`rule` shape. Sources: **(new)** concessive clauses, *Linking words* and *Linking expression* (extended), *Formal and informal phrases* and *Polite vs direct*.

- **Concessive clauses:**
  - *although / even though / though*, with *though* also at the end of a sentence (informal)
  - *while / whereas* for concession
  - *much as I like him*
  - adjective / adverb + *as / though* + subject + verb (*Tired as she was, she kept going*)
  - *however / no matter how* + adjective (*However hard I try…*)
  - *despite the fact that / in spite of the fact that*
  - *even if* vs *even though*

  It must agree with B1 `linking-words` and B2 `advanced-linkers` on *despite* + noun / *-ing*. The classic distractors are *Despite he was tired*, *Although…, but…*, and *Much as I like him, but…*.
- **Discourse markers and cohesion:** markers that organise a text or a talk (*Firstly*, *Turning to…*, *As far as … is concerned*, *In other words*, *That said*, *Admittedly*, *Granted*, *On the contrary*) and cohesion (*this / these* + summary noun: *this problem*, *these changes*), referring back with ellipsis and substitution (order 6), and avoiding repetition. The classic distractor is *On the contrary* used for *On the other hand*: they are not interchangeable, and Swan says so.
- **Register and formality shifts:** the same message at three registers (*We regret to inform you* / *I'm sorry to say* / *Bad news, I'm afraid*). It covers how formal English uses nominalisation (7), impersonal passives (3), longer Latin-based verbs (*obtain*, *require*, *commence*) and no contractions, and how informal English uses phrasal verbs, contractions and ellipsis. It extends B1 `formal-and-informal-register` and must reuse its definition of register word for word.
- **Extra sweep risk:** concession gaps where *although*, *even though* and *though* all fit (accept all three). Register choice items must state the reader and the channel, so exactly one option fits.
- **Test:** `it('keeps register labels consistent with earlier topics')`, in the b2-part-6 style. Every phrase that this topic labels and that also appears in an A1–B2 topic carries the same label.

### Task 6: C1 Phrases & Expressions (`order` 12–14), `c1-part-4`

`set` shape, category `phrases`, 6–30 entries each, original glosses, no IPA. Sources: *Idiom*, **(new)** figurative language, *Collocations* and *Statements* (paraphrase sets).

- **Advanced idioms** (family `idioms`): workplace and argument idioms at C1 in the English Vocabulary Profile, for example *a blessing in disguise*, *cut corners*, *the elephant in the room*, *get to the bottom of*, *move the goalposts*, *on the back burner*, *a level playing field*, *bite the bullet*. None may repeat a B1 `idioms` entry; grep it. Each gloss says whether the idiom is informal. Review Focus 5.
- **Figurative language:** common metaphors from everyday English (*a heated debate*, *a flood of complaints*, *grasp an idea*, *a bright future*, *shed light on*, *a rollercoaster year*). Each entry's `inUse` shows the figurative sense, and the gloss names the literal sense it comes from. Define metaphor here, once.
- **Collocational precision and near-synonyms:** groups that look alike but collocate differently. For example, *strong / heavy / high* (*strong coffee*, *heavy rain*, *high risk*), *bitterly / deeply / highly* (*bitterly disappointed*, *highly unlikely*), *job / work / career*, *rise / raise / increase*, and *affect / effect / impact*. It must not contradict B1 `collocations` or B2 `workplace-collocations` on *make / do* and *take a decision*. Review Focus 5.
- **Extra sweep risk:** Review Focus 5. Also check that every quiz cue names the context, so only one near-synonym fits.

### Task 7: C1 Writing and Speaking (`order` 15–20), `c1-part-5`

**Writing** (`phrases` shape, category `writing`, at least 3 situations, accurate registers). Sources: **(new)** discursive writing, *Summarizing*.
- **Discursive and argumentative writing:** introducing the issue (*It is often argued that…*), presenting one side and the other (*Proponents of … claim*, *Critics, on the other hand, …*), conceding (*Admittedly…*, from order 9), giving your view (*I would contend that…*), and concluding (*On balance…*). All are `formal` or `neutral`.
- **Formal reports and executive summaries** (family `summarising`): purpose (*This report aims to…*), method (*Data was collected from…*, with *were* accepted), findings (*It was found that…*), recommendations (*It is recommended that the company adopt…*, using order 2's subjunctive) and the executive summary (*In brief…*). It must agree with B2 `summarising-and-adding-points` on the registers of *In short* and *To sum up*.

**Speaking** (`phrases` shape, category `speaking`). Sources: *Statements* (agenda, action points), *Polite vs direct*, *Agreeing and disagreeing*, *Rhetorical questions*.
- **Chairing a meeting:** opening and the agenda (*The purpose of today's meeting is…*), bringing people in (*Could we hear from…?*), keeping on track (*Let's park that for now*), summarising and action points (*So, to recap…*, *Who's going to take that on?*), and closing.
- **Diplomatic language and negotiating:** softening with order 1 modals and B2 hedges (*That might be difficult*), conditional offers (*If you could…, we'd be prepared to…*), and saying no politely (*I'm not sure we can go that far*). It must agree with B1 `indirect-and-polite-questions`.
- **Handling pushback** (family `agreeing-and-disagreeing`): acknowledging (*I take your point*), standing your ground (*I hear you, but I still think…*), conceding part (*You're right that…, but…*), and moving forward. It must agree with B1 `agreeing-and-disagreeing`'s register labels.
- **Rhetorical devices:** rhetorical questions (reuse B2's definition word for word), the rule of three, repetition, contrast pairs (*not … but …*), and direct address (*Imagine…*). The situations are named by purpose (opening a talk, making a point memorable, ending strongly).
- **Extra sweep risk:** register labels on every phrase. Choice items about appropriateness need exactly one option that fits the stated listener and situation.

### Task 8: C1 Mechanics (`order` 21–22), then the cross-level and level-surface checks, `c1-part-6`

`rule` shape, category `mechanics`. Sources: *Punctuation*, *Pronouncing*.

- **Punctuation for rhetorical effect** (family `punctuation`):
  - a dash for an aside or a dramatic pause, written as a spaced en dash ( – ) in British style. Grep existing content for the dash character already used and match it.
  - a colon for a reveal or an explanation
  - a semicolon for balanced contrast
  - an ellipsis (…) for a trailing thought
  - the rhetorical question mark, from order 20
  - restraint with exclamation marks

  It must agree with B1 `commas` and `colons-and-semicolons`, and never contradict their rules. Gaps can't test punctuation, so every item is `choice` or `mistake`, with the punctuation attached to its token. Review Focus 4.
- **Stress and intonation for emphasis** (family `intonation`): contrastive stress, which moves meaning (*I didn't say **he** took it* vs *I didn't **say** he took it*); stress on new information; emphatic *do* (*I **do** like it*); and fall-rise for reservation or a hidden "but" (*The food was **good** (fall-rise)…*). It uses B1's bold-and-words convention (Global Constraints). Each quiz item asks which word carries the stress for a stated meaning, so exactly one word fits.

Then:

- [ ] **Cross-level links.** Extend `src/content/cross-level.test.ts`:
  - For every C1 topic with a family, `siblingsAcrossLevels` returns every A1–B2 topic sharing its key, and each of those returns it.
  - Pin the `punctuation` chain: `ids("b1","mechanics","commas")` equals `["a1/capital-letters-and-full-stops","c1/punctuation-for-rhetorical-effect"]`.
  - Pin the `inversion` chain (B2 → C1), the `register` chain (B1 → C1) and the `summarising` chain (B2 → C1) the same way.
  - Pin the set of families C1 shares with earlier levels to exactly: `modal-deduction`, `wish`, `passive`, `comparison`, `inversion`, `linking-words`, `register`, `idioms`, `collocations`, `summarising`, `agreeing-and-disagreeing`, `punctuation`, `intonation`.
  - Add a corpus test: every key in `FAMILY_KEYS` is used by at least two topics. Every family promised in the comment block now has its later level.
  - After the build, confirm that `out/a2/grammar/comparatives-and-superlatives/index.html` links to the C1 comparison page.
- [ ] **Level surfaces.** After `npm run build`, check:
  - `out/c1/index.html` lists Grammar 11 · Phrases & Expressions 3 · Writing 2 · Speaking & Communication 4 · Mechanics 2
  - `out/c1/vocabulary/` does not exist
  - `out/sitemap.xml` includes the C1 category and topic URLs
  - `out/search-index.json` contains 153 topics (26 + 28 + 44 + 33 + 22), and a test pins `c1Topics` to length 22
  - searching "subjunctive" in the built site returns the C1 topic
- [ ] **Run** `npm test`, `npm run typecheck`, `npm run lint` and `npm run build`. All must pass.
- [ ] **Commit.** `feat(content): C1 mechanics; cross-level links across A1–C1`

---

## Task 9: Final review and merge

- [ ] **Step 1: Whole-branch review** of `git diff master...english-ladder-c1`, in the B2 final-review style. Fixes go in `fix(content): C1 final review fixes (…)` commits on the branch.
- [ ] **Step 2: Run** `npm test`, `npm run typecheck`, `npm run lint` and `npm run build`. All must pass, and `git status --short` must be empty.
- [ ] **Step 3: Merge.** `git switch master`, `git merge --ff-only english-ladder-c1`, then `git branch -d english-ladder-c1`. `git worktree list` shows only `E:/side_projects/english`.

---

## Follow-up plans

- **Deploy:** the platform plan's deferred Task 16 and its checklist (`english_grammar.txt` kept out of the public repo, `SITE_ORIGIN`, the README and favicon, the deploy branch `master`, and the sitemap submitted by hand). This needs the user's go-ahead, because it creates the remote.
- **Still open, not in this plan:**
  - contrast tests reading tokens from `globals.css`
  - the → ↗ ↘ glyphs missing from the served font subsets
  - the word-bank chip-shuffle choice, which still needs the user's pick
