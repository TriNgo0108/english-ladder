# English Ladder — Pre-A2 Platform Prep and A2 Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Harden the platform for a corpus about four times its current size, then author the complete A2 level: 27 topics, linked to their A1 counterparts.

**Architecture:** The plan has four platform tasks, then five content tasks.
- Platform: build-time validation of rich-text markup, a required per-topic `summary` for metadata, and a search index emitted as a static JSON file at build time. The current version is a lazy client bundle carrying Zod and the whole corpus.
- Content: new typed modules under `src/content/a2/`, registered through a new A2 barrel, validated by the existing schema and registry, and linked across levels via `src/content/families.ts`.
- No new components.

**Tech Stack:** Next.js 16 (App Router, `output: 'export'`) · React 19 · TypeScript 6 strict · Tailwind 4 · Zod 4 · Vitest 5 + Testing Library + jsdom. Unchanged from the platform plan.

**Spec:** `docs/superpowers/specs/2026-11-05-cefr-grammar-site-design.md`. The §8 A2 mapping is this plan's content backlog. Prior plan: `docs/superpowers/plans/2026-11-05-english-ladder-platform-and-a1.md`, complete and merged to `master`.

## Global Constraints

All Global Constraints of the platform plan still apply: levels, categories, hosting, colours, type roles, layout, accessibility, storage, English only, no audio. The following are added or restated for this plan.

- **No push, remote or deploy.** The user decided this: nothing leaves the machine until C1 is authored.
- **Quiz:** the authoring target is about 5 questions per topic, with a floor of 4. Rule topics need at least 3 examples, set topics at least 6 entries, and phrase topics at least 3 situations.
- **Shape is bound to category:** `rule` for grammar or mechanics; `set` for vocabulary or phrases; `phrases` for writing or speaking.
- **Gap grading:** trimmed, case-insensitive and whitespace-collapsed. Curly and straight apostrophes are equal, hyphens fold to spaces, and trailing `. ! ?` are ignored. **Every defensible answer goes in `answers[]`.** A gap cannot test capitalisation, hyphenation or end punctuation.
- **Word bank:** graded by order. Chips are shown verbatim in authored order and never shuffled. `words` must be scrambled, and there must be exactly one correct order.
- **Mistake items:** exactly one wrong token, and no other single-token change may produce a correct sentence.
- **Choice items:** exactly one correct option. No distractor may be correct in any plausible context. The correct position varies, enforced by `src/content/answer-positions.test.ts`.
- **Feedback** is shown on both outcomes, so it must read correctly either way.
- **Families:** a topic's cross-level key is `family ?? slug`. There is at most one topic per family per level. Every `family` must appear in `FAMILY_KEYS`. A topic with no family whose slug equals another topic's family key is rejected.
- **Vocabulary:** glosses are written from scratch and never copied or paraphrased from `english_grammar.txt` (spec §5, §12.2). IPA comes from CMUdict (BSD-style licence; credit is already in `LICENSES.md`), converted from ARPAbet to General American IPA with a one-off script kept in the session scratchpad. Neither the script nor the dictionary is committed. IPA goes on single-word headwords only.
- **Definition of done** for every topic is spec §12.1, items 1–7.

## Review Focus

1. **Several future and past forms fit one gap.** A2 teaches *will*, *going to*, present continuous for future, present simple for future, past simple, past continuous and *used to*. A stem like "I ___ my aunt tomorrow." admits three forms. Each content task's ambiguity sweep must force exactly one form through context (a timetable, a decision made now, an arrangement, a prediction from evidence), or accept every grammatical form. Owned by Tasks 5–8, Step 4.
2. **A malformed `<b>` in any of the 27 new topics.** A reader would see literal `<b>` text. The build must fail instead. Owned by Task 1.
3. **Search for an A2 topic when the index file is missing or slow.** The input must still work and show nothing broken, with no crash and no stale "No topics match" before the data arrives. Owned by Task 3.
4. **A search snippet or social card that opens with a definition sentence.** Every topic's description must be its own summary of at most 155 characters, with no markup. Owned by Task 2.
5. **A learner on an A1 topic expects the link to its A2 continuation, and back.** Once A2 exists, family siblings must render on both pages, and the slug/family collision guard must not reject legitimate A2 slugs. Owned by Task 9.

---

## File Structure

**Platform**
- `src/content/schema.ts`: rich-text markup check, and the required `summary` field
- `src/lib/rich-text.tsx`: unchanged API. Exports a `richTextProblem(s: string): string | null` helper used by the schema.
- `src/lib/seo.ts`: `metaDescription` sources from `summary`
- `src/app/search-index.json/route.ts`: static GET that emits `buildSearchIndex(allTopics)`
- `src/components/Search.tsx`: fetches `${BASE_PATH}/search-index.json`
- `src/lib/search-data.ts`: deleted

**Content**
- `src/content/a2/index.ts`: A2 barrel, `a2Topics: Topic[]`
- `src/content/a2/<category>/<slug>.ts`: 27 topics
- `src/content/registry.ts`: loads `a2Topics` alongside `a1Topics`
- `src/content/families.ts`: new keys and updated comments
- `src/content/a2/a2-part-<n>.test.ts`: per-batch pins, in the style of `src/content/a1/grammar/grammar-part-3.test.ts`

---

## Task 1: Validate rich-text markup at build time

**Files:**
- Modify: `src/lib/rich-text.tsx`, `src/content/schema.ts`
- Test: `src/lib/rich-text.test.tsx`, `src/content/schema.test.ts`

**Interfaces:**
- Consumes: `renderRichText`, `plainText`, and the `BOLD` pattern `/<b>(.*?)<\/b>/g` in `src/lib/rich-text.tsx`. Also the shared non-blank `text` schema helper in `schema.ts`.
- Produces: `richTextProblem(s: string): string | null` from `src/lib/rich-text.tsx`. It returns `null` when `s` is valid, or a short description of the problem.

- [ ] **Step 1: Write the failing tests**

```tsx
// src/lib/rich-text.test.tsx — add
describe('richTextProblem', () => {
  it.each([
    ['plain text', 'I am here.'],
    ['one bold pair', 'I <b>am</b> here.'],
    ['two adjacent pairs', '<b>I</b><b>am</b>'],
    ['an arrow character', 'the dog → its bed'],
  ])('accepts %s', (_l, s) => expect(richTextProblem(s)).toBeNull());

  it.each([
    ['an unclosed b', 'I <b>am here.'],
    ['a stray closing b', 'I am</b> here.'],
    ['an uppercase B', 'I <B>am</B> here.'],
    ['a b with attributes', 'I <b class="x">am</b> here.'],
    ['nested b', '<b>a <b>b</b> c</b>'],
    ['any other tag', 'a <i>b</i> c'],
    ['a bare angle bracket', 'x < y'],
    ['an empty pair', 'I <b></b> am'],
  ])('rejects %s', (_l, s) => expect(richTextProblem(s)).not.toBeNull());
});

// pin the renderer's escaping for the same edge cases
it('renders <B> and <b class> as text, never as elements', () => {
  const { container } = render(<>{renderRichText('a <B>x</B> <b class="y">z</b>')}</>);
  expect(container.querySelector('b')).toBeNull();
});
```

```ts
// src/content/schema.test.ts — add, using the file's existing builders and quizWith
it('rejects malformed markup in an example sentence', () => {
  expect(() => parseTopic(validRuleTopic({ examples: [example({ sentence: 'I <b>am here.' }), example(), example()] })))
    .toThrow(/examples\.0\.sentence/);
});
it('rejects malformed markup in a question stem', () => {
  expect(() => parseTopic(validRuleTopic({ quiz: quizWith(choice({ stem: 'Pick <i>one</i>' })) })))
    .toThrow(/quiz\.0\.stem/);
});
it('rejects malformed markup in the explanation', () => {
  expect(() => parseTopic(validRuleTopic({ explanation: 'Use <b>am</B>.' }))).toThrow(/explanation/);
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test -- src/lib/rich-text.test.tsx src/content/schema.test.ts`
Expected: FAIL. `richTextProblem` is not exported, and the schema accepts the malformed strings.

- [ ] **Step 3: Implement `richTextProblem` and wire it into the schema's `text` helper**

Remove every exact `<b>…</b>` pair whose content contains no `<` or `>` and is non-empty. Report a problem if any `<` or `>` remains, and also if the input contains an empty `<b></b>`. Apply the check through `.superRefine` on the shared `text` helper, so every required and optional text field is covered and the issue path names the field. `renderRichText` and `plainText` keep their behaviour.

- [ ] **Step 4: Run the tests and the whole suite**

Run: `npm test`
Expected: PASS. If any existing A1 content now fails, fix the content (e.g. replace a literal `->` with `→`) and list each fix in the report. Never loosen the rule.

- [ ] **Step 5: Commit**

```bash
git add src/lib/rich-text.tsx src/lib/rich-text.test.tsx src/content/schema.ts src/content/schema.test.ts src/content
git commit -m "feat(content): reject malformed rich-text markup at build time"
```

---

## Task 2: Required topic summary, and the parked A1 wording

**Files:**
- Modify: `src/content/schema.ts`, `src/lib/seo.ts`, `src/app/[level]/[category]/[topic]/page.tsx` (only if it calls `metaDescription(topic.explanation)` directly; see the Interfaces), and all 26 A1 topic files
- Test: `src/content/schema.test.ts`, `src/lib/seo.test.ts`, `src/content/registry.test.ts`

**Interfaces:**
- Consumes: `metaDescription(rich, max)`, `topicJsonLd(topic)` from `src/lib/seo.ts`. `topic/page.tsx` line 34 calls `metaDescription(topic.explanation)`.
- Produces:
  - `summary: string` is required on every topic shape. It is non-blank, plain text (no `<` or `>`), and at most 155 characters.
  - `topicDescription(topic: Topic): string` from `src/lib/seo.ts` returns `topic.summary`.
  - `generateMetadata` and `topicJsonLd` both use `topicDescription`.

- [ ] **Step 1: Write the failing tests**

```ts
// schema.test.ts
it('rejects a topic with no summary', () => {
  const { summary: _s, ...noSummary } = validRuleTopic();
  expect(() => parseTopic(noSummary)).toThrow(/summary/);
});
it('rejects a summary over 155 characters', () => {
  expect(() => parseTopic(validRuleTopic({ summary: 'a'.repeat(156) }))).toThrow(/summary/);
});
it('rejects markup in a summary', () => {
  expect(() => parseTopic(validRuleTopic({ summary: 'Use <b>am</b> with I.' }))).toThrow(/summary/);
});

// seo.test.ts
it('describes a topic by its summary, not its explanation', () => {
  const t = /* existing fixture */ { ...fixtureTopic, summary: 'How to use am, is and are.' };
  expect(topicDescription(t)).toBe('How to use am, is and are.');
  expect(topicJsonLd(t).description).toBe('How to use am, is and are.');
});

// registry.test.ts — real corpus
it('gives every real topic a distinct summary', () => {
  const summaries = allTopics.map(t => t.summary);
  expect(new Set(summaries).size).toBe(summaries.length);
});
```

Update the test builders (`validRuleTopic` etc.) so they include a valid `summary`.

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npm test -- src/content/schema.test.ts src/lib/seo.test.ts src/content/registry.test.ts`
Expected: FAIL. The `summary` field and `topicDescription` don't exist yet.

- [ ] **Step 3: Implement the field and `topicDescription`, and switch both call sites**

- [ ] **Step 4: Author a `summary` for each of the 26 A1 topics**

Each summary is one or two sentences of at most 155 characters, in A1-friendly plain English, saying what the learner will be able to do. Example: "Learn when to use am, is and are, how to make short forms, and how to ask questions with be." Summaries must not open with a definition.

- [ ] **Step 5: Fix the six parked A1 calques**

`capital-letters-and-full-stops.ts:14,38`, `personal-pronouns.ts:14,30,109`, `was-were.ts:40`. Change "also in the middle of a sentence" to "even in the middle of a sentence", and "also for one person" to "even for one person". Then grep `src/content` for `also in |also for ` and confirm nothing similar remains.

- [ ] **Step 6: Run the suite and build**

Run: `npm test` → PASS. `npm run typecheck` → clean. `npm run build` → succeeds. Check that `out/a1/grammar/verb-to-be/index.html` has `<meta name="description" content="…">` equal to its summary.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat(content): required topic summary drives meta descriptions; A1 wording fixes"
```

---

## Task 3: Search index as a static file

**Files:**
- Create: `src/app/search-index.json/route.ts`
- Modify: `src/components/Search.tsx`
- Delete: `src/lib/search-data.ts`
- Test: `src/app/search-index.json/route.test.ts`, `src/components/Search.test.tsx`

**Interfaces:**
- Consumes: `buildSearchIndex(topics): SearchEntry[]` and `searchTopics(index, query)` from `src/lib/search-index.ts` (unchanged), `allTopics` from `@/content/registry`, and `BASE_PATH` from `@/lib/site`.
- Produces:
  - A `GET` that returns `Response.json(buildSearchIndex(allTopics))`, with `export const dynamic = 'force-static'`. It builds to `out/search-index.json`.
  - `Search` fetches `${BASE_PATH}/search-index.json` once, on first focus or input.

- [ ] **Step 1: Write the failing tests**

```ts
// route.test.ts
it('serves exactly the search index built from the real corpus', async () => {
  const res = await GET();
  expect(await res.json()).toEqual(buildSearchIndex(allTopics));
});
```

```tsx
// Search.test.tsx — replace the import() mock with a fetch mock
it('fetches the index from the base-pathed static file once', async () => { /* type twice; expect fetch called once with '/english-ladder/search-index.json' */ });
it('shows results typed before the fetch resolved, once it resolves', async () => { /* … */ });
it('stays usable and shows no "No topics match" when the fetch fails', async () => { /* reject fetch; type; expect no crash and no false empty state; a later focus retries */ });
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npm test -- src/app/search-index.json src/components/Search.test.tsx`
Expected: FAIL. The route doesn't exist, and Search still uses `import()`.

- [ ] **Step 3: Implement the route and switch Search to `fetch`**

Before writing the route, read `node_modules/next/dist/docs/` on route handlers under `output: 'export'`, as AGENTS.md requires. Keep the existing behaviour: race-safe derivation of results from `index` and `query`, a single in-flight load, retry on failure, and no "No topics match" while `index` is null.

- [ ] **Step 4: Delete `src/lib/search-data.ts` and confirm nothing imports it**

Run: `npm test` → PASS. `npm run typecheck` → clean.

- [ ] **Step 5: Build and confirm Zod has left the client**

Run: `npm run build`. Check three things:
- `out/search-index.json` exists and parses.
- No file under `out/_next/static/chunks/` contains the string `ZodError`. Grep for it.
- The total gzipped size of the JS chunks has dropped compared with BASE.

Report the before and after sizes.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "perf(search): emit the search index as a static file; drop the registry from the client"
```

---

## Task 4: Families for A2, and the A2 barrel

**Files:**
- Create: `src/content/a2/index.ts`
- Modify: `src/content/families.ts`, `src/content/registry.ts`
- Test: `src/content/registry.test.ts`

**Interfaces:**
- Consumes: `FAMILY_KEYS`, and the `loadCorpus([...a1Topics])` call in `registry.ts`.
- Produces:
  - `a2Topics: Topic[]` (initially `[]`) from `src/content/a2/index.ts`. The registry loads `[...a1Topics, ...a2Topics]`.
  - `FAMILY_KEYS` gains `conditionals`, `gerunds-and-infinitives`, `linking-words`, `comparison`, `future-forms` and `emails`.
  - The comment block records each key's A2 owner and its later-level continuations from §8.

**The A2 family assignments the content tasks use:**

| A2 topic | family |
|---|---|
| past simple, regular & irregular | `past-simple` |
| comparatives & superlatives | `comparison` |
| *will* | `future-forms` |
| present continuous for future | `present-continuous` |
| present simple for future | `present-simple` |
| countable & uncountable nouns | `nouns` |
| *should* and *must* | `modal-obligation` |
| articles: *the* and zero article | `articles` |
| conjunctions and, but, so, because | `linking-words` |
| first conditional | `conditionals` |
| verb + gerund / verb + infinitive | `gerunds-and-infinitives` |
| an informal email | `emails` |
| asking for things politely | `polite-requests` |

All other A2 topics have no `family`. Their slugs must not equal any family key, and the guard enforces this.

- [ ] **Step 1: Write the failing test**

```ts
it('loads A2 topics into the corpus', () => {
  // fixture via createRegistry: an a2 topic with family 'articles' is a sibling of an a1 'articles-a-an' with family 'articles'
});
it('every FAMILY_KEYS entry is a valid slug-pattern key and unique', () => { /* … */ });
```

- [ ] **Step 2: Run the tests to verify they fail**

Run: `npm test -- src/content/registry.test.ts`
Expected: FAIL. The barrel and the new keys are missing.

- [ ] **Step 3: Create the barrel, wire it into the registry, and add the keys with comments**

- [ ] **Step 4: Run the suite and build**

Run: `npm test` → PASS. `npm run build` → succeeds. `/a2/` still renders its "nothing here yet" state.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat(content): A2 barrel and cross-level family keys for A2"
```

---

## Tasks 5–9: A2 content

All five tasks author content against the schema, with the validator and spec §12.1 as the gate. `order` runs continuously across the whole of A2, starting at 1. Each topic lives in `src/content/a2/<category>/<slug>.ts`, typed `RuleTopic`, `SetTopic` or `PhraseTopic`, and is registered in `src/content/a2/index.ts`. Use the family from Task 4's table.

Every task follows the same steps:

- [ ] **Step 1: Read the references before writing.** Read `src/content/a1/grammar/verb-to-be.ts` and `present-simple.ts` for register and structure. Read the A1 sibling of every topic you write (via its family), because A2 builds on it and must not contradict it. Grep `english_grammar.txt` for the italic section named in §8 for each topic. The notes are a reference, not a boundary. Where a note is wrong or above A2, follow the English Grammar Profile and Swan, and record it in `sourceNotes`.
- [ ] **Step 2: Author the topics, each with a `summary`.** A2 pitch:
  - Explanations use A1–A2 words and structures.
  - Grammar terms are defined in plain words when first used. Reuse the exact A1 definitions: noun, verb, subject, object, short form, base form, plural, preposition.
  - Introduce new terms (past participle, infinitive, gerund, comparative) only where the topic needs them, defined once in plain words.
- [ ] **Step 3: Write `src/content/a2/a2-part-<n>.test.ts`.**
  - Pin the slug and order sequence.
  - Pin the families.
  - Pin every gap's full `answers[]`, plus at least one wrong answer that must be rejected per gap.
  - Pin every wordbank answer.
  - Pin every mistake item's wrong token.
- [ ] **Step 4: Run the ambiguity sweep on every quiz item and record it in the report.**
  - Speaker identity. A1 lesson: "This hotel… ___ rooms" admitted *Our*.
  - Contractions and full forms, synonyms, articles or no article.
  - A second grammatical tense or future form. This is Review Focus 1 and the main risk at A2.
  - A second single-token fix in mistake items. A1 lesson: "She is write" could be fixed with *can*.
  - A distractor that is correct in some context. A1 lesson: "Give it to mine."
  - Choice positions varied.
  - Words scrambled.
  - Anything whose point is sequence (word order, question formation, adverb position) gets a `wordbank` (spec §10). Two grammatical orders, e.g. some frequency-adverb placements, mean the item is rewritten.
- [ ] **Step 5: Run `npm test`, `npm run typecheck`, `npm run lint` and `npm run build`.** Then inspect `out/a2/<category>/<slug>/index.html` for each new topic: the explanation, summary meta and quiz stems should all be present.
- [ ] **Step 6: Commit.**

### Task 5: A2 Grammar, part 1 (`order` 1–6)

`rule` shape: past simple, regular & irregular · past continuous · comparatives & superlatives · *going to* · *will* · present continuous for future.

The future forms in this task and Task 6 must teach the contrast the authorities draw, with no overstatement:
- *going to* is for plans and for evidence-based predictions;
- *will* is for decisions made at the moment of speaking, offers, promises and opinion-based predictions;
- present continuous is for fixed arrangements.

Where native usage overlaps, say "often" or "usually", and accept every natural form in gaps.

### Task 6: A2 Grammar, part 2 (`order` 7–12)

`rule` shape: present simple for future · adverbs of manner · adverbs of frequency · quantifiers some/any/much/many · countable & uncountable nouns · *used to* and *would*.

- Frequency adverbs: test position with a `wordbank` only where one order is clearly correct. "Usually" can also come first.
- *would* for past habits: never with state verbs.

### Task 7: A2 Grammar, part 3 (`order` 13–17)

`rule` shape: *should* and *must* · *have to* · infinitive of purpose · *too* and *enough* · articles: *the* and zero article.

- *must* vs *have to*: obligation from the speaker vs from outside, plus *mustn't* vs *don't have to*. That contrast is a classic distractor.
- Articles must agree with A1 `articles-a-an.ts` on sound-based *a/an*.

### Task 8: A2 Grammar, part 4 (`order` 18–21)

`rule` shape: conjunctions and, but, so, because · first conditional · *-ed* and *-ing* adjectives · verb + gerund, verb + infinitive, introductory.

- First conditional: present in the *if*-clause, never *will*. The *if*-clause can come second, with no comma. Accept both clause orders wherever a wordbank would allow them, or design the item so only one order is possible.
- Gerund vs infinitive: keep to high-frequency verbs (enjoy, finish, want, decide, like, love). For *like*, *love* and *start*, both forms are correct, so accept both.

### Task 9: A2 Vocabulary, Writing and Speaking (`order` 22–27), and the cross-level check

- **Vocabulary** (`set`, 4 topics): holidays & outdoor activities · the body and symptoms · travel and first-aid items · house & home. Glosses are original. IPA follows the Global Constraint process, single-word headwords only. Each set has 6–30 entries.
- **Writing** (`phrases`, category `writing`): an informal email. This is the first Writing topic on the site. Situations include opening, giving news, asking, and closing. Registers must be accurate.
- **Speaking** (`phrases`, category `speaking`): asking for things politely. It must agree with A1 `would-you-like.ts`.

Two extra steps for this task:

- [ ] **Cross-level links render.**
  - Write `src/content/cross-level.test.ts`. For every A2 topic with a family, `siblingsAcrossLevels` returns its A1 counterpart and the reverse. A1 `articles-a-an` ↔ A2 articles is pinned explicitly.
  - After the build, confirm that `out/a1/grammar/articles-a-an/index.html` links to the A2 articles page, and that the reverse link exists.
- [ ] **Level surfaces.**
  - `out/a2/index.html` lists Grammar 21 · Vocabulary 4 · Writing 1 · Speaking & Communication 1.
  - `out/a2/writing/index.html` exists, and `out/a2/phrases/` and `out/a2/mechanics/` do not.
  - `out/sitemap.xml` includes the A2 category and topic URLs.
  - `out/search-index.json` contains all 53 topics.

---

## Follow-up plans

B1, B2 and C1 are content plans in the same shape as Tasks 5–9. §8's headline counts (~26 / ~25 / ~20) understate the lists beneath them: B1 lists 44 items, B2 32 and C1 22. Each later plan authors the list, not the headline number. The B1 plan adds the Phrases & Expressions and Mechanics categories at that level. C1 has the highest accuracy risk (spec §8: 15 of its topics are new). Deployment (the platform plan's deferred Task 16) comes after C1.
