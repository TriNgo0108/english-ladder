# English Ladder — Platform and A1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the English Ladder site — a statically exported, CEFR-organised English learning site — and author its complete A1 level, producing a usable site for beginners.

**Architecture:** A Next.js App Router app with `output: 'export'`, so every route pre-renders to static HTML for GitHub Pages. Content is typed TypeScript modules under `src/content/`, parsed by Zod at module load so a malformed topic fails `next build` rather than shipping. Topics come in three shapes (`rule` / `set` / `phrases`), each with its own view component and validator branch; a single `Quiz` component dispatches to four question components. Pure logic (answer matching, word-bank checking, cross-topic validation) lives in `src/lib/` and is unit-tested independently of React.

**Tech Stack:** Next.js 16 (App Router, static export) · React 19 · TypeScript 7 (strict) · Tailwind CSS 4 · Zod 4 · Vitest 5 + @testing-library/react + jsdom · `next/font` (self-hosted Newsreader, IBM Plex Sans, IBM Plex Mono) · GitHub Actions → GitHub Pages

**Spec:** `docs/superpowers/specs/2026-11-05-cefr-grammar-site-design.md`

**Scope:** This plan covers the platform and the complete **A1** level only. A2, B1, B2 and C1 are content-only follow-up plans that add no new components — they reuse everything built here. The spec's §8 mapping for those levels is the backlog.

## Global Constraints

Values copied verbatim from the spec. Every task's requirements implicitly include this section.

- **Levels:** `'a1' | 'a2' | 'b1' | 'b2' | 'c1'`. No C2, ever.
- **Categories:** Grammar · Vocabulary · Phrases & Expressions · Writing · Speaking & Communication · Mechanics. Not every category is populated at every level — gaps are intentional, not errors.
- **Hosting:** GitHub Pages project page. `basePath` and `assetPrefix` are both `/english-ladder`. `trailingSlash: true`. `images: { unoptimized: true }`. `public/.nojekyll` must exist.
- **Quiz size:** authoring target ~5 questions per topic; validator floor is **4**.
- **Content floors:** `rule` ≥ 3 examples · `set` ≥ 6 entries · `phrases` ≥ 3 situations.
- **Colour tokens — light:** ground `#FCFCFD` · surface `#FFFFFF` · border `#DFE3EC` · text `#1B1F2A` · muted `#5A6173` · accent `#1D4ED8`.
- **Colour tokens — dark:** ground `#0E1117` · surface `#161923` · border `#242836` · text `#E6E9F0` · muted `#8B93A5` · accent `#60A5FA`.
- **Semantic colours, separate from the accent:** correct `#16A34A` · incorrect `#DC2626`.
- **Level ramp, A1→C1:** `#DBEAFE` `#BFDBFE` `#93C5FD` `#60A5FA` `#2563EB`. Level is never signalled by colour alone — the badge always carries its text.
- **Type roles:** Newsreader → headings and example sentences only. IBM Plex Sans → all interface text and explanations. IBM Plex Mono → grammatical forms. Loaded via `next/font`, self-hosted, never a CDN link.
- **Layout:** 8px base unit. Running text capped at 65ch. Body text never below 16px on mobile. Wide content gets its own `overflow-x: auto` container; the page body never scrolls sideways.
- **Accessibility:** 4.5:1 minimum contrast · visible focus ring on every interactive element · 44×44px minimum touch targets · `cursor: pointer` on clickables · SVG icons, never emoji · hover transitions 150–300ms · `prefers-reduced-motion` respected · verified at 375 / 768 / 1024 / 1440px.
- **Storage:** exactly one `localStorage` key, for theme. No learner progress, no scores, no streaks, ever. No analytics.
- **Language:** English only. No translations.
- **No audio, video, or speech recognition** (spec §13).

## Review Focus

Input classes the spec implies but which no task's happy path exercises. Each has its test assigned to the task that owns the code.

1. **A learner types a curly apostrophe.** Phone and desktop autocorrect turn `don't` into `don’t`. A gap-fill whose stored answer uses a straight quote marks the correct answer wrong. → Task 3 normalises both to the same form before comparing.
2. **A word bank containing the same word twice.** "the cat sat on the mat" has two `the`s; a naive multiset check or a selection UI keyed by word text mishandles it. → Task 3 compares multisets, Task 8 keys chips by index.
3. **A category with no topics at a level.** The spec says gaps are intentional, so `/a1/writing` is a real URL with nothing in it. It must render a clean "nothing here yet" state and be absent from the level overview's category list — never a crash or an empty shell. → Task 6.
4. **An unknown or mismatched URL.** SEO means strangers arrive on deep links, and slugs change. `/a1/grammar/does-not-exist`, or a real topic under the wrong level, must produce a proper 404 page, not a build error or a runtime crash. → Task 7.
5. **`<b>` inside example sentences.** The spec permits `<b>` in `Example.sentence` to mark the target structure. Rendered as text it shows literal tags; rendered with `dangerouslySetInnerHTML` it accepts arbitrary HTML. → Task 7 renders `<b>` only, via a parser that escapes everything else.

---

## File Structure

**Config and infrastructure**
- `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `vitest.config.ts`
- `.github/workflows/deploy.yml` — build and publish to Pages
- `public/.nojekyll` — stops Jekyll swallowing `_next/`
- `LICENSES.md` — third-party content sources and terms (spec §12.2)

**Design foundation**
- `src/app/globals.css` — Tailwind import, design tokens as CSS custom properties, all three theme states
- `src/app/layout.tsx` — root layout, fonts, pre-paint theme script
- `src/lib/site.ts` — `basePath`, site name, canonical origin
- `src/components/ThemeToggle.tsx`

**Pure logic — no React, independently testable**
- `src/lib/gap-match.ts` — gap-fill answer comparison
- `src/lib/wordbank.ts` — word-bank multiset check
- `src/lib/levels.ts` — level metadata, labels, chooser blurbs, ramp colours
- `src/lib/categories.ts` — category metadata and slugs
- `src/lib/rich-text.ts` — the `<b>`-only renderer

**Content**
- `src/content/schema.ts` — Zod schemas, inferred types
- `src/content/registry.ts` — collects all topics, runs cross-topic validation, exports lookups
- `src/content/a1/**/*.ts` — the A1 topics
- `src/content/a1/index.ts` — A1 barrel

**Routes**
- `src/app/page.tsx` — level chooser
- `src/app/[level]/page.tsx` — level overview
- `src/app/[level]/[category]/page.tsx` — category index
- `src/app/[level]/[category]/[topic]/page.tsx` — topic page
- `src/app/not-found.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`

**Components**
- `src/components/LevelBadge.tsx`, `TopicNav.tsx`, `CrossLevelLinks.tsx`, `Search.tsx`
- `src/components/shapes/RuleTopicView.tsx`, `SetTopicView.tsx`, `PhraseTopicView.tsx`
- `src/components/quiz/Quiz.tsx` and `ChoiceQuestion.tsx`, `GapQuestion.tsx`, `WordbankQuestion.tsx`, `MistakeQuestion.tsx`

---

## Task 1: Scaffold, static export, and CI

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `vitest.config.ts`, `src/lib/site.ts`, `public/.nojekyll`, `.github/workflows/deploy.yml`, `LICENSES.md`
- Test: `src/lib/site.test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: `BASE_PATH: '/english-ladder'`, `SITE_NAME: 'English Ladder'`, `SITE_ORIGIN: string` from `src/lib/site.ts`. `next.config.ts` reads `BASE_PATH` for both `basePath` and `assetPrefix`.

- [ ] **Step 1: Create the project and install dependencies**

Next.js 16 App Router with TypeScript and Tailwind 4. Add dev dependencies `vitest`, `@vitejs/plugin-react`, `@testing-library/react`, `@testing-library/user-event`, `jsdom`, `zod`. Add scripts: `dev`, `build`, `test`, `test:watch`, `typecheck`.

- [ ] **Step 2: Write the failing test**

```ts
// src/lib/site.test.ts
describe('site constants', () => {
  it('BASE_PATH matches the GitHub Pages project path', () => {
    expect(BASE_PATH).toBe('/english-ladder');
  });
  it('BASE_PATH has no trailing slash', () => {
    expect(BASE_PATH.endsWith('/')).toBe(false);
  });
  it('SITE_NAME is the published name', () => {
    expect(SITE_NAME).toBe('English Ladder');
  });
});
```

- [ ] **Step 3: Run test to verify it fails**

Run: `npm test -- src/lib/site.test.ts`
Expected: FAIL — cannot resolve `src/lib/site`.

- [ ] **Step 4: Create `src/lib/site.ts` exporting `BASE_PATH`, `SITE_NAME`, `SITE_ORIGIN`**

Plain `const` exports. `SITE_ORIGIN` is the Pages origin for canonical URLs and JSON-LD.

- [ ] **Step 5: Configure `next.config.ts` for static export**

Set `output: 'export'`, `basePath: BASE_PATH`, `assetPrefix: BASE_PATH`, `trailingSlash: true`, `images: { unoptimized: true }`. Enable TypeScript strict mode in `tsconfig.json`.

- [ ] **Step 6: Run test to verify it passes, then typecheck and build**

Run: `npm test -- src/lib/site.test.ts` → PASS
Run: `npm run typecheck` → no errors
Run: `npm run build` → succeeds, `out/` is created
Verify: `out/.nojekyll` exists (copied from `public/`). If missing, Pages will 404 every asset.

- [ ] **Step 7: Add the GitHub Actions deploy workflow**

`.github/workflows/deploy.yml`: on push to `master`, `actions/checkout`, Node 22, `npm ci`, `npm test`, `npm run build`, `actions/upload-pages-artifact` with `path: out`, then `actions/deploy-pages`. Grant `pages: write` and `id-token: write`. Tests run before deploy so malformed content cannot publish.

- [ ] **Step 8: Create `LICENSES.md`**

A table with columns Source · What it covers · Licence · Attribution required. Seed it with the three fonts (all SIL OFL). The IPA source row is added in the Vocabulary content task, per spec §12.2.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js static export with Pages deploy"
```

---

## Task 2: Design tokens, fonts, and theme

**Files:**
- Create: `src/app/globals.css`, `src/app/layout.tsx`, `src/components/ThemeToggle.tsx`, `src/lib/contrast.ts`
- Test: `src/lib/contrast.test.ts`

**Interfaces:**
- Consumes: `SITE_NAME` from Task 1.
- Produces: CSS custom properties `--color-ground`, `--color-surface`, `--color-border`, `--color-text`, `--color-muted`, `--color-accent`, `--color-correct`, `--color-incorrect`; Tailwind theme aliases for each; `contrastRatio(hexA: string, hexB: string): number` from `src/lib/contrast.ts`.

- [ ] **Step 1: Write the failing test**

A real test of the spec's accessibility floor, not a token echo. `contrastRatio` implements WCAG relative luminance.

```ts
// src/lib/contrast.test.ts
describe('contrastRatio', () => {
  it('returns 21 for black on white', () => {
    expect(contrastRatio('#000000', '#FFFFFF')).toBeCloseTo(21, 1);
  });
  it('returns 1 for a colour against itself', () => {
    expect(contrastRatio('#1B1F2A', '#1B1F2A')).toBeCloseTo(1, 2);
  });
});

describe('spec palette meets WCAG AA', () => {
  const light = { ground: '#FCFCFD', surface: '#FFFFFF', text: '#1B1F2A', muted: '#5A6173', accent: '#1D4ED8' };
  const dark  = { ground: '#0E1117', surface: '#161923', text: '#E6E9F0', muted: '#8B93A5', accent: '#60A5FA' };

  it.each([
    ['light text on ground',   light.text,   light.ground],
    ['light text on surface',  light.text,   light.surface],
    ['light muted on ground',  light.muted,  light.ground],
    ['light accent on ground', light.accent, light.ground],
    ['dark text on ground',    dark.text,    dark.ground],
    ['dark text on surface',   dark.text,    dark.surface],
    ['dark muted on ground',   dark.muted,   dark.ground],
    ['dark accent on ground',  dark.accent,  dark.ground],
  ])('%s is at least 4.5:1', (_label, fg, bg) => {
    expect(contrastRatio(fg, bg)).toBeGreaterThanOrEqual(4.5);
  });

  it.each([
    ['correct', '#16A34A'],
    ['incorrect', '#DC2626'],
  ])('%s feedback colour is legible on both grounds', (_label, hex) => {
    expect(contrastRatio(hex, light.ground)).toBeGreaterThanOrEqual(4.5);
    expect(contrastRatio(hex, dark.ground)).toBeGreaterThanOrEqual(4.5);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/lib/contrast.test.ts`
Expected: FAIL — cannot resolve `src/lib/contrast`.

- [ ] **Step 3: Implement `contrastRatio(hexA: string, hexB: string): number` in `src/lib/contrast.ts`**

WCAG 2.1 relative luminance: sRGB channels to 0–1, the `c <= 0.03928 ? c/12.92 : ((c+0.055)/1.055)**2.4` transfer, luminance `0.2126R + 0.7152G + 0.0722B`, ratio `(lighter + 0.05) / (darker + 0.05)`.

- [ ] **Step 4: Run the test**

Run: `npm test -- src/lib/contrast.test.ts`
Expected: PASS. **If any palette assertion fails, the token is wrong, not the test** — darken or lighten that token until it clears 4.5:1 and record the adjusted value in the spec's §9 table.

- [ ] **Step 5: Write the token layer in `src/app/globals.css`**

Three theme states, in this order and no other: bare `:root` carries the complete light palette · `@media (prefers-color-scheme: dark)` guarded as `:root:not([data-theme="light"])` redefines only the tokens · `:root[data-theme="dark"]` redefines them again. **No colour may be declared only inside a media or `[data-theme]` block.** Give `body` an explicit `background: var(--color-ground)`. Add a `prefers-reduced-motion: reduce` block zeroing transitions and animations.

- [ ] **Step 6: Build the root layout with fonts and the pre-paint theme script**

In `src/app/layout.tsx`, load Newsreader, IBM Plex Sans and IBM Plex Mono via `next/font/google` (self-hosting is automatic), exposing each as a CSS variable. Apply IBM Plex Sans as the body default. Add an inline `<script>` in `<head>`, before any paint, that reads the theme key from `localStorage` and stamps `data-theme` on `<html>` — without this the page flashes the wrong theme on every navigation.

- [ ] **Step 7: Build `ThemeToggle`**

A client component cycling light → dark → system. Writes the single permitted `localStorage` key; removes it for "system". Must have an `aria-label`, a visible focus ring, a ≥44×44px hit area, and an inline SVG icon — not an emoji.

- [ ] **Step 8: Verify the theme behaves in all three states**

Run: `npm run build && npx serve out` (or `npm run dev`).
Check: with no stored key and OS light → light; no key and OS dark → dark; toggle to dark then reload → still dark, with no flash of light; toggle to light with OS dark → stays light.

- [ ] **Step 9: Commit**

```bash
git add -A
git commit -m "feat: design tokens, fonts, and three-state theming"
```

---

## Task 3: Answer matching and word-bank checking

**Files:**
- Create: `src/lib/gap-match.ts`, `src/lib/wordbank.ts`
- Test: `src/lib/gap-match.test.ts`, `src/lib/wordbank.test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: `matchesGap(input: string, accepted: string[]): boolean` from `src/lib/gap-match.ts`; `normaliseAnswer(s: string): string` from the same module; `canFormAnswer(words: string[], answer: string): boolean` and `tokeniseAnswer(answer: string): string[]` from `src/lib/wordbank.ts`.

Spec §10 and §11 both single these out: the gap-fill matcher must have tests for trimming, case, and multi-answer acceptance. Review Focus 1 and 2 land here.

- [ ] **Step 1: Write the failing gap-match test**

```ts
// src/lib/gap-match.test.ts
describe('matchesGap', () => {
  it('accepts an exact match', () => {
    expect(matchesGap('has lived', ['has lived'])).toBe(true);
  });
  it('ignores surrounding whitespace', () => {
    expect(matchesGap('  has lived  ', ['has lived'])).toBe(true);
  });
  it('collapses internal whitespace', () => {
    expect(matchesGap('has   lived', ['has lived'])).toBe(true);
  });
  it('ignores case', () => {
    expect(matchesGap('Has Lived', ['has lived'])).toBe(true);
  });
  it('accepts any of several valid answers', () => {
    expect(matchesGap('is not', ['is not', "isn't"])).toBe(true);
    expect(matchesGap("isn't", ['is not', "isn't"])).toBe(true);
  });
  it('accepts a curly apostrophe where the answer has a straight one', () => {
    expect(matchesGap('isn’t', ["isn't"])).toBe(true);
  });
  it('accepts a straight apostrophe where the answer has a curly one', () => {
    expect(matchesGap("isn't", ['isn’t'])).toBe(true);
  });
  it('rejects a wrong answer', () => {
    expect(matchesGap('have lived', ['has lived'])).toBe(false);
  });
  it('rejects empty input', () => {
    expect(matchesGap('', ['has lived'])).toBe(false);
    expect(matchesGap('   ', ['has lived'])).toBe(false);
  });
  it('does not treat a substring as a match', () => {
    expect(matchesGap('has', ['has lived'])).toBe(false);
  });
});
```

- [ ] **Step 2: Write the failing word-bank test**

```ts
// src/lib/wordbank.test.ts
describe('canFormAnswer', () => {
  it('accepts words that rearrange into the answer', () => {
    expect(canFormAnswer(['antique', 'a', 'box', 'small', 'wooden'], 'a small antique wooden box')).toBe(true);
  });
  it('handles a word repeated in the answer', () => {
    expect(canFormAnswer(['the', 'cat', 'sat', 'on', 'the', 'mat'], 'the cat sat on the mat')).toBe(true);
  });
  it('rejects a bank missing one copy of a repeated word', () => {
    expect(canFormAnswer(['the', 'cat', 'sat', 'on', 'mat'], 'the cat sat on the mat')).toBe(false);
  });
  it('rejects a bank with a leftover word', () => {
    expect(canFormAnswer(['a', 'small', 'box', 'extra'], 'a small box')).toBe(false);
  });
  it('rejects a bank missing a word', () => {
    expect(canFormAnswer(['a', 'small'], 'a small box')).toBe(false);
  });
  it('ignores case when comparing', () => {
    expect(canFormAnswer(['a', 'Small', 'box'], 'A small box')).toBe(true);
  });
});

describe('tokeniseAnswer', () => {
  it('keeps sentence-final punctuation out of the tokens', () => {
    expect(tokeniseAnswer('a small box.')).toEqual(['a', 'small', 'box']);
  });
  it('keeps a contraction as one token', () => {
    expect(tokeniseAnswer("she isn't here")).toEqual(['she', "isn't", 'here']);
  });
});
```

- [ ] **Step 3: Run both tests to verify they fail**

Run: `npm test -- src/lib/gap-match.test.ts src/lib/wordbank.test.ts`
Expected: FAIL — modules do not resolve.

- [ ] **Step 4: Implement `normaliseAnswer` and `matchesGap` in `src/lib/gap-match.ts`**

`normaliseAnswer` trims, lowercases, collapses runs of whitespace to one space, and maps the Unicode apostrophes `’` and `ʼ` to `'`. `matchesGap` returns false for input that normalises to empty, otherwise compares the normalised input against each normalised accepted answer for full equality.

- [ ] **Step 5: Implement `tokeniseAnswer` and `canFormAnswer` in `src/lib/wordbank.ts`**

`tokeniseAnswer` splits on whitespace and strips leading/trailing punctuation from each token while preserving internal apostrophes. `canFormAnswer` compares the two token lists as **multisets** — count occurrences per normalised token and require the maps be equal. A set-based or `every`-based check passes the repeated-word case wrongly and will fail Step 3's third assertion.

- [ ] **Step 6: Run both tests to verify they pass**

Run: `npm test -- src/lib/gap-match.test.ts src/lib/wordbank.test.ts`
Expected: PASS, all cases.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: gap-fill matching and word-bank validation"
```

---

## Task 4: Content schema

**Files:**
- Create: `src/content/schema.ts`
- Test: `src/content/schema.test.ts`

**Interfaces:**
- Consumes: `canFormAnswer` from Task 3.
- Produces: `TopicSchema` (a Zod discriminated union on `shape`), `QuestionSchema`, and the inferred types `Level`, `CategorySlug`, `Example`, `Question`, `RuleTopic`, `SetTopic`, `PhraseTopic`, `Topic`. Also `parseTopic(input: unknown): Topic`, which throws on invalid input.

Every rejection rule in spec §7 that is internal to a single topic is enforced here.

- [ ] **Step 1: Write the failing test**

```ts
// src/content/schema.test.ts
// validRuleTopic() / validSetTopic() / validPhraseTopic() are local builders
// returning minimal spec-conformant objects; each test overrides one field.

describe('question validation', () => {
  it('rejects a choice whose answer index is out of range', () => {
    expect(() => parseTopic(validRuleTopic({ quiz: [choice({ options: ['a', 'b'], answer: 2 })] }))).toThrow();
  });
  it('rejects a choice with a negative answer index', () => {
    expect(() => parseTopic(validRuleTopic({ quiz: [choice({ options: ['a', 'b'], answer: -1 })] }))).toThrow();
  });
  it('rejects a choice with fewer than two options', () => {
    expect(() => parseTopic(validRuleTopic({ quiz: [choice({ options: ['a'], answer: 0 })] }))).toThrow();
  });
  it('rejects a gap with an empty answers array', () => {
    expect(() => parseTopic(validRuleTopic({ quiz: [gap({ answers: [] })] }))).toThrow();
  });
  it('rejects a gap whose answer is blank', () => {
    expect(() => parseTopic(validRuleTopic({ quiz: [gap({ answers: ['  '] })] }))).toThrow();
  });
  it('rejects a wordbank whose words cannot form the answer', () => {
    expect(() => parseTopic(validRuleTopic({
      quiz: [wordbank({ words: ['a', 'small'], answer: 'a small box' })],
    }))).toThrow();
  });
  it('accepts a wordbank whose words do form the answer', () => {
    expect(() => parseTopic(validRuleTopic({
      quiz: [wordbank({ words: ['box', 'a', 'small'], answer: 'a small box' })],
    }))).not.toThrow();
  });
  it('rejects a mistake whose wrongIndex is out of range', () => {
    expect(() => parseTopic(validRuleTopic({ quiz: [mistake({ tokens: ['She', 'have'], wrongIndex: 5 })] }))).toThrow();
  });
  it('rejects a question with empty feedback', () => {
    expect(() => parseTopic(validRuleTopic({ quiz: [choice({ feedback: '' })] }))).toThrow();
  });
});

describe('topic-level floors', () => {
  it('rejects fewer than 4 questions', () => {
    expect(() => parseTopic(validRuleTopic({ quiz: [choice(), choice(), choice()] }))).toThrow();
  });
  it('accepts exactly 4 questions', () => {
    expect(() => parseTopic(validRuleTopic({ quiz: [choice(), choice(), choice(), choice()] }))).not.toThrow();
  });
  it('rejects a rule topic with fewer than 3 examples', () => {
    expect(() => parseTopic(validRuleTopic({ examples: [example(), example()] }))).toThrow();
  });
  it('rejects a set topic with fewer than 6 entries', () => {
    expect(() => parseTopic(validSetTopic({ entries: Array.from({ length: 5 }, entry) }))).toThrow();
  });
  it('rejects a phrase topic with fewer than 3 situations', () => {
    expect(() => parseTopic(validPhraseTopic({ situations: [situation(), situation()] }))).toThrow();
  });
  it('rejects a topic with no levelRationale', () => {
    expect(() => parseTopic(validRuleTopic({ levelRationale: '' }))).toThrow();
  });
  it('rejects an unknown level', () => {
    expect(() => parseTopic(validRuleTopic({ level: 'c2' }))).toThrow();
  });
  it('rejects a slug that is not URL-safe', () => {
    expect(() => parseTopic(validRuleTopic({ slug: 'Verb To Be' }))).toThrow();
  });
  it('rejects a non-integer order', () => {
    expect(() => parseTopic(validRuleTopic({ order: 1.5 }))).toThrow();
  });
  it('rejects an unknown shape', () => {
    expect(() => parseTopic({ ...validRuleTopic(), shape: 'mystery' })).toThrow();
  });
});

describe('valid topics', () => {
  it('accepts each of the three shapes', () => {
    expect(() => parseTopic(validRuleTopic())).not.toThrow();
    expect(() => parseTopic(validSetTopic())).not.toThrow();
    expect(() => parseTopic(validPhraseTopic())).not.toThrow();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/content/schema.test.ts`
Expected: FAIL — cannot resolve `src/content/schema`.

- [ ] **Step 3: Implement the schemas in `src/content/schema.ts`**

Define `CategorySlugSchema` as `z.enum(['grammar', 'vocabulary', 'phrases', 'writing', 'speaking', 'mechanics'])` — these exact six slugs are what Task 6's `CATEGORIES` test asserts, so they must agree. Build `QuestionSchema` as a Zod discriminated union on `kind`, mirroring spec §7 exactly. The cross-field rules — `answer` within `options` bounds, `wrongIndex` within `tokens` bounds, `canFormAnswer(words, answer)` — need `.superRefine` on the relevant members, since a plain field schema cannot see sibling fields. Build `TopicSchema` as a discriminated union on `shape` over the three variants, with `.min()` floors from Global Constraints. Slug pattern: `/^[a-z0-9]+(-[a-z0-9]+)*$/`. Export `parseTopic` as a thin wrapper over `TopicSchema.parse`.

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test -- src/content/schema.test.ts`
Expected: PASS, all cases.

- [ ] **Step 5: Commit**

```bash
git add -A
git commit -m "feat: Zod content schema with per-topic validation"
```

---

## Task 5: Content registry and cross-topic validation

**Files:**
- Create: `src/content/registry.ts`, `src/content/a1/index.ts`
- Test: `src/content/registry.test.ts`

**Interfaces:**
- Consumes: `Topic`, `parseTopic` from Task 4.
- Produces: `validateCorpus(topics: Topic[]): void` (throws with every problem listed, not just the first); `allTopics: Topic[]`; `topicsByLevel(level: Level): Topic[]`; `topicsByLevelAndCategory(level: Level, category: CategorySlug): Topic[]`; `findTopic(level: Level, category: CategorySlug, slug: string): Topic | undefined`; `siblingsAcrossLevels(slug: string): Topic[]`; `adjacentTopics(topic: Topic): { prev?: Topic; next?: Topic }`. Importing the module runs validation, so `next build` fails on bad content.

- [ ] **Step 1: Write the failing test**

```ts
// src/content/registry.test.ts
describe('validateCorpus', () => {
  it('accepts a well-formed corpus', () => {
    expect(() => validateCorpus([topic({ slug: 'a', order: 1 }), topic({ slug: 'b', order: 2 })])).not.toThrow();
  });
  it('rejects a duplicate slug within a level', () => {
    expect(() => validateCorpus([topic({ slug: 'a', order: 1 }), topic({ slug: 'a', order: 2 })])).toThrow(/duplicate slug/i);
  });
  it('allows the same slug at different levels', () => {
    expect(() => validateCorpus([
      topic({ slug: 'articles', level: 'a1', order: 1 }),
      topic({ slug: 'articles', level: 'a2', order: 1 }),
    ])).not.toThrow();
  });
  it('rejects a duplicate order within a level', () => {
    expect(() => validateCorpus([topic({ slug: 'a', order: 1 }), topic({ slug: 'b', order: 1 })])).toThrow(/duplicate order/i);
  });
  it('rejects a gap in the order sequence', () => {
    expect(() => validateCorpus([topic({ slug: 'a', order: 1 }), topic({ slug: 'b', order: 3 })])).toThrow(/gap/i);
  });
  it('requires order to start at 1', () => {
    expect(() => validateCorpus([topic({ slug: 'a', order: 2 })])).toThrow(/start at 1/i);
  });
  it('reports every problem, not only the first', () => {
    const message = captureError(() => validateCorpus([
      topic({ slug: 'a', order: 1 }), topic({ slug: 'a', order: 1 }), topic({ slug: 'c', order: 9 }),
    ]));
    expect(message).toMatch(/duplicate slug/i);
    expect(message).toMatch(/duplicate order/i);
  });
});

describe('lookups', () => {
  it('orders topicsByLevel by order', () => {
    expect(topicsByLevel('a1').map(t => t.order)).toEqual([...topicsByLevel('a1').map(t => t.order)].sort((x, y) => x - y));
  });
  it('finds a topic by level, category and slug', () => {
    const first = topicsByLevel('a1')[0];
    expect(findTopic('a1', first.category, first.slug)).toBe(first);
  });
  it('returns undefined for an unknown slug', () => {
    expect(findTopic('a1', 'grammar', 'no-such-topic')).toBeUndefined();
  });
  it('returns undefined when the topic exists under a different category', () => {
    const t = topicsByLevel('a1').find(x => x.category === 'grammar')!;
    expect(findTopic('a1', 'vocabulary', t.slug)).toBeUndefined();
  });
  it('gives no prev for the first topic and no next for the last', () => {
    const ordered = topicsByLevel('a1');
    expect(adjacentTopics(ordered[0]).prev).toBeUndefined();
    expect(adjacentTopics(ordered[ordered.length - 1]).next).toBeUndefined();
  });
  it('links consecutive topics in both directions', () => {
    const ordered = topicsByLevel('a1');
    expect(adjacentTopics(ordered[0]).next).toBe(ordered[1]);
    expect(adjacentTopics(ordered[1]).prev).toBe(ordered[0]);
  });
  it('excludes the topic itself from its cross-level siblings', () => {
    const t = topicsByLevel('a1')[0];
    expect(siblingsAcrossLevels(t.slug)).not.toContain(t);
  });
});

describe('the real corpus', () => {
  it('passes validation', () => {
    expect(() => validateCorpus(allTopics)).not.toThrow();
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/content/registry.test.ts`
Expected: FAIL — cannot resolve `src/content/registry`.

- [ ] **Step 3: Implement `validateCorpus` and the lookups in `src/content/registry.ts`**

`validateCorpus` collects problems into an array across all checks, then throws once with them joined by newlines — a fail-fast version makes a 115-topic corpus take many build cycles to clean. Group by level for the slug, order-duplicate and order-contiguity checks (order is per level, so `1..n` with no repeats and no gaps). `siblingsAcrossLevels` matches on slug across levels and excludes the argument's own topic. Run `validateCorpus(allTopics)` at module scope.

- [ ] **Step 4: Create `src/content/a1/index.ts` as the A1 barrel**

Export an `a1Topics: Topic[]` array, initially containing only the vertical-slice topic from Task 7. Later content tasks append to it. `registry.ts` builds `allTopics` from the per-level barrels.

- [ ] **Step 5: Run test to verify it passes**

Run: `npm test -- src/content/registry.test.ts`
Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: content registry with corpus-wide validation"
```

---

## Task 6: Level and category navigation

**Files:**
- Create: `src/lib/levels.ts`, `src/lib/categories.ts`, `src/components/LevelBadge.tsx`, `src/app/page.tsx`, `src/app/[level]/page.tsx`, `src/app/[level]/[category]/page.tsx`
- Test: `src/lib/levels.test.ts`, `src/components/LevelBadge.test.tsx`

**Interfaces:**
- Consumes: `topicsByLevel`, `topicsByLevelAndCategory` from Task 5.
- Produces: `LEVELS: LevelMeta[]` where `LevelMeta = { slug: Level; label: string; blurb: string; ramp: string }`; `levelMeta(slug: Level): LevelMeta`; `CATEGORIES: CategoryMeta[]` where `CategoryMeta = { slug: CategorySlug; label: string }`; `categoryMeta(slug: CategorySlug): CategoryMeta`; `<LevelBadge level={Level} />`.

Review Focus 3 (empty category) is tested here.

- [ ] **Step 1: Write the failing tests**

```ts
// src/lib/levels.test.ts
describe('LEVELS', () => {
  it('lists the five levels in CEFR order', () => {
    expect(LEVELS.map(l => l.slug)).toEqual(['a1', 'a2', 'b1', 'b2', 'c1']);
  });
  it('does not include C2', () => {
    expect(LEVELS.map(l => l.slug)).not.toContain('c2');
  });
  it('uses the spec ramp, deepening A1 to C1', () => {
    expect(LEVELS.map(l => l.ramp)).toEqual(['#DBEAFE', '#BFDBFE', '#93C5FD', '#60A5FA', '#2563EB']);
  });
  it('gives every level a learner-facing blurb', () => {
    for (const l of LEVELS) expect(l.blurb.length).toBeGreaterThan(0);
  });
});

describe('CATEGORIES', () => {
  it('lists the six spec categories', () => {
    expect(CATEGORIES.map(c => c.slug))
      .toEqual(['grammar', 'vocabulary', 'phrases', 'writing', 'speaking', 'mechanics']);
  });
});
```

```tsx
// src/components/LevelBadge.test.tsx
describe('LevelBadge', () => {
  it('renders the level as text, never colour alone', () => {
    render(<LevelBadge level="b1" />);
    expect(screen.getByText('B1')).toBeInTheDocument();
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test -- src/lib/levels.test.ts src/components/LevelBadge.test.tsx`
Expected: FAIL — modules do not resolve.

- [ ] **Step 3: Implement `src/lib/levels.ts` and `src/lib/categories.ts`**

Blurbs are learner-facing and concrete, per the spec's "no placement test" decision — e.g. A2: *"You can talk about your past and make simple plans."* Category slugs are the URL forms above; `phrases` is the slug for "Phrases & Expressions", `speaking` for "Speaking & Communication".

- [ ] **Step 4: Implement `LevelBadge`**

Text label plus the ramp colour as background. Pick the foreground per level so each clears 4.5:1 against its own ramp colour — the light end of the ramp needs dark text, the deep end needs white.

- [ ] **Step 5: Build the three index routes**

`src/app/page.tsx` — the level chooser: five cards, each with label, blurb and live topic count. `src/app/[level]/page.tsx` — level overview listing **only categories that have at least one topic at this level**, each with its count. `src/app/[level]/[category]/page.tsx` — the ordered topic list for that level and category, numbered by `order` so the path is visible rather than an unordered list.

Both dynamic routes need `generateStaticParams` — `[level]` over `LEVELS`, `[category]` over the level/category pairs that exist — since `output: 'export'` pre-renders everything.

- [ ] **Step 6: Handle the empty-category case**

A category with no topics at a level is a real URL (spec §7: gaps are intentional). `generateStaticParams` for `[category]` emits only populated pairs, so an empty category falls through to the 404 from Task 7 rather than rendering a broken shell. Verify after build that `out/a1/writing/` does not exist while `out/a1/grammar/` does.

- [ ] **Step 7: Run tests and build**

Run: `npm test -- src/lib/levels.test.ts src/components/LevelBadge.test.tsx` → PASS
Run: `npm run build` → succeeds; confirm `out/index.html`, `out/a1/index.html`, `out/a1/grammar/index.html` all exist.

- [ ] **Step 8: Commit**

```bash
git add -A
git commit -m "feat: level chooser, level overview, and category index"
```

---

## Task 7: Topic page, the three shape views, and the first real topic

**Files:**
- Create: `src/lib/rich-text.ts`, `src/components/shapes/RuleTopicView.tsx`, `SetTopicView.tsx`, `PhraseTopicView.tsx`, `src/app/[level]/[category]/[topic]/page.tsx`, `src/app/not-found.tsx`, `src/content/a1/grammar/verb-to-be.ts`
- Modify: `src/content/a1/index.ts`
- Test: `src/lib/rich-text.test.ts`, `src/components/shapes/RuleTopicView.test.tsx`

**Interfaces:**
- Consumes: `findTopic`, `adjacentTopics` from Task 5; `levelMeta`, `categoryMeta`, `LevelBadge` from Task 6.
- Produces: `renderRichText(s: string): ReactNode` from `src/lib/rich-text.ts`; `<RuleTopicView topic={RuleTopic} />`, `<SetTopicView topic={SetTopic} />`, `<PhraseTopicView topic={PhraseTopic} />`.

This is the vertical slice the spec's §11 build order asks for: one complete topic, end to end, before content authoring begins. Review Focus 4 and 5 are tested here.

- [ ] **Step 1: Write the failing rich-text test**

```ts
// src/lib/rich-text.test.ts
describe('renderRichText', () => {
  it('renders plain text unchanged', () => {
    const { container } = render(<>{renderRichText('I am here.')}</>);
    expect(container.textContent).toBe('I am here.');
  });
  it('renders <b> as a real bold element', () => {
    const { container } = render(<>{renderRichText('I <b>am</b> here.')}</>);
    expect(container.querySelector('b')).toHaveTextContent('am');
    expect(container.textContent).toBe('I am here.');
  });
  it('handles more than one <b> span', () => {
    const { container } = render(<>{renderRichText('<b>I</b> am <b>here</b>.')}</>);
    expect(container.querySelectorAll('b')).toHaveLength(2);
  });
  it('escapes any other tag instead of rendering it', () => {
    const { container } = render(<>{renderRichText('a <script>alert(1)</script> b')}</>);
    expect(container.querySelector('script')).toBeNull();
    expect(container.textContent).toContain('<script>');
  });
  it('escapes an unclosed b tag rather than swallowing the rest', () => {
    const { container } = render(<>{renderRichText('I <b>am here.')}</>);
    expect(container.textContent).toBe('I <b>am here.');
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/lib/rich-text.test.ts`
Expected: FAIL — cannot resolve `src/lib/rich-text`.

- [ ] **Step 3: Implement `renderRichText` in `src/lib/rich-text.ts`**

Split the string on a `<b>…</b>` regex and return an array of strings and `<b>` elements. **Do not use `dangerouslySetInnerHTML`** — returning React nodes means everything outside a matched `<b>` pair is escaped by React automatically, which is what makes the `<script>` and unclosed-tag cases pass.

- [ ] **Step 4: Write the failing `RuleTopicView` test**

```tsx
// src/components/shapes/RuleTopicView.test.tsx
describe('RuleTopicView', () => {
  it('shows the title, explanation, and level badge', () => { /* assert all three present */ });
  it('shows every example with its why-line', () => { /* assert each sentence and why rendered */ });
  it('bolds the target structure inside an example', () => {
    // example sentence 'I <b>am</b> here.' renders a <b> element
  });
  it('renders the form in the monospace role when present', () => { /* assert form text present */ });
  it('omits the form block when the topic has none', () => { /* assert absent */ });
  it('shows the pitfall with both wrong and right forms when present', () => { /* assert both */ });
  it('omits the pitfall block when the topic has none', () => { /* assert absent */ });
});
```

- [ ] **Step 5: Run test to verify it fails**

Run: `npm test -- src/components/shapes/RuleTopicView.test.tsx`
Expected: FAIL — component does not resolve.

- [ ] **Step 6: Implement the three shape views**

`RuleTopicView` — badge and breadcrumb, title, explanation, optional form in the mono role, examples with the serif face for the sentence and the sans face for the why-line, optional pitfall box. Example sentences go through `renderRichText`. `SetTopicView` — a table or definition list of headword, optional IPA, gloss and `inUse`; wrap it in an `overflow-x: auto` container so the page body never scrolls sideways. `PhraseTopicView` — one block per situation, phrases listed under it, register shown as a labelled chip (text, not colour alone).

- [ ] **Step 7: Build the topic route**

`src/app/[level]/[category]/[topic]/page.tsx` with `generateStaticParams` over every real `(level, category, slug)` triple from the registry. Look the topic up with `findTopic`; call `notFound()` when it is missing — this covers both an unknown slug and a real slug requested under the wrong category. Dispatch on `topic.shape` to the matching view. Export `generateMetadata` producing a per-topic `<title>` and meta description, and emit `LearningResource` JSON-LD.

- [ ] **Step 8: Build `not-found.tsx`**

A real page in the site's own design — heading, a line of explanation, and links back to the level chooser and to the level the visitor was probably after. Not the framework default.

- [ ] **Step 9: Author the first real topic**

`src/content/a1/grammar/verb-to-be.ts` — a complete A1 `rule` topic meeting every item of the spec's §12.1 definition of done, with `order: 1`. Register it in `src/content/a1/index.ts`. This is the reference every later topic is written against, so its register and its why-lines matter more than its speed.

- [ ] **Step 10: Run the suite and build**

Run: `npm test` → PASS
Run: `npm run build` → succeeds; `out/a1/grammar/verb-to-be/index.html` exists and contains the explanation text as real HTML (`grep` for a phrase from it — this is the proof the SEO goal is met).
Verify: `out/404.html` exists.

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "feat: topic page, three shape views, and the first A1 topic"
```

---

## Task 8: The quiz

**Files:**
- Create: `src/components/quiz/Quiz.tsx`, `ChoiceQuestion.tsx`, `GapQuestion.tsx`, `WordbankQuestion.tsx`, `MistakeQuestion.tsx`
- Modify: the three shape views, to mount `<Quiz questions={topic.quiz} />`
- Test: `src/components/quiz/Quiz.test.tsx`, `ChoiceQuestion.test.tsx`, `GapQuestion.test.tsx`, `WordbankQuestion.test.tsx`, `MistakeQuestion.test.tsx`

**Interfaces:**
- Consumes: `matchesGap` from Task 3; `canFormAnswer`, `tokeniseAnswer` from Task 3; `Question` from Task 4.
- Produces: `<Quiz questions={Question[]} />`. Each question component takes `{ question, onAnswered(correct: boolean) }`.

All four components are client components. Review Focus 2's UI half (duplicate chips) is tested here.

- [ ] **Step 1: Write the failing per-question tests**

```tsx
// ChoiceQuestion.test.tsx
it('marks the right option correct and shows the feedback')
it('marks a wrong option incorrect and still shows the feedback')   // spec §10: feedback on both outcomes
it('reveals which option was correct after a wrong answer')
it('does not change the result once answered')                      // no answer-flipping
it('is operable by keyboard alone')

// GapQuestion.test.tsx
it('accepts the stored answer')
it('accepts an alternative accepted answer')
it('accepts a curly apostrophe for a straight one')                 // Review Focus 1, through the UI
it('rejects a wrong answer and shows the feedback')
it('does not submit an empty input')

// WordbankQuestion.test.tsx
it('builds the answer when chips are tapped in order')
it('handles a bank with the same word twice')                       // Review Focus 2
it('lets a selected chip be removed and reselected')
it('marks a wrong order incorrect and shows the feedback')

// MistakeQuestion.test.tsx
it('accepts a click on the wrong token')
it('rejects a click on a correct token')
it('shows the correction after answering')
it('renders every token as a focusable control')                    // keyboard operability
```

```tsx
// Quiz.test.tsx
it('renders every question in the quiz')
it('shows a score only after all questions are answered')
it('counts the score correctly across mixed question types')
it('announces feedback through an aria-live region')                // spec §10
it('resets to unanswered when retried, keeping no stored state')    // spec §3: nothing persists
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test -- src/components/quiz`
Expected: FAIL — components do not resolve.

- [ ] **Step 3: Implement the four question components**

Each holds its own answered/correct state, locks after the first answer, and renders feedback using the semantic correct/incorrect tokens — plus a text or icon marker, so the outcome is never colour alone. `GapQuestion` delegates to `matchesGap` and must not submit when the input normalises to empty. `WordbankQuestion` keys each chip by its **index, not its text** — keying by text makes the two `the`s in a repeated-word bank collide and breaks selection. `MistakeQuestion` renders each token as a `<button>` so keyboard users can reach it; every target needs ≥44×44px.

- [ ] **Step 4: Implement `Quiz`**

Renders the questions, tallies correct answers as children report via `onAnswered`, and reveals a score once every question is answered. The score lives in component state and is never written anywhere. Feedback goes into an `aria-live="polite"` region. Retry resets local state only.

- [ ] **Step 5: Mount the quiz in the three shape views**

Below the content in each view. No view-specific quiz behaviour — the spec's distinction between rule and set/phrase quizzes is about how questions are *written*, not how they are rendered.

- [ ] **Step 6: Run the suite**

Run: `npm test` → PASS
Run: `npm run build` → succeeds.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: quiz with four question types and accessible feedback"
```

---

## Task 9: Cross-level links, topic navigation, and search

**Files:**
- Create: `src/components/TopicNav.tsx`, `src/components/CrossLevelLinks.tsx`, `src/components/Search.tsx`, `src/lib/search-index.ts`
- Modify: `src/app/[level]/[category]/[topic]/page.tsx`, `src/app/layout.tsx`
- Test: `src/lib/search-index.test.ts`, `src/components/CrossLevelLinks.test.tsx`

**Interfaces:**
- Consumes: `adjacentTopics`, `siblingsAcrossLevels`, `allTopics` from Task 5.
- Produces: `buildSearchIndex(topics: Topic[]): SearchEntry[]` and `searchTopics(index: SearchEntry[], query: string): SearchEntry[]` from `src/lib/search-index.ts`, where `SearchEntry = { slug: string; title: string; level: Level; category: CategorySlug; href: string; haystack: string }`.

- [ ] **Step 1: Write the failing tests**

```ts
// src/lib/search-index.test.ts
describe('searchTopics', () => {
  it('matches on a title substring, case-insensitively')
  it('matches on explanation text, not just the title')
  it('returns an empty array for a blank or whitespace query')
  it('returns no results rather than everything for an unmatched query')
  it('ranks a title match above a body-only match')
  it('includes the level in each result so duplicates across levels are distinguishable')
});
```

```tsx
// src/components/CrossLevelLinks.test.tsx
describe('CrossLevelLinks', () => {
  it('links to the same topic slug at other levels')
  it('renders nothing when the topic has no siblings')   // most topics, so this must be silent
  it('labels each sibling with its level')
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npm test -- src/lib/search-index.test.ts src/components/CrossLevelLinks.test.tsx`
Expected: FAIL — modules do not resolve.

- [ ] **Step 3: Implement the search index and query**

`buildSearchIndex` flattens each topic's searchable text into a lowercase `haystack`. `searchTopics` returns `[]` for an empty or whitespace query, filters on substring match, and sorts title matches first. All client-side over the already-bundled content — no index file to fetch, no backend.

- [ ] **Step 4: Implement `Search`, `CrossLevelLinks`, and `TopicNav`**

`Search` is a client component in the header: a labelled input, results as a keyboard-navigable list, visible focus states. `CrossLevelLinks` renders nothing at all when there are no siblings — the common case. `TopicNav` renders prev/next from `adjacentTopics`, omitting the missing side at either end of a level.

- [ ] **Step 5: Wire them in**

`TopicNav` and `CrossLevelLinks` onto the topic page; `Search` into the root layout header.

- [ ] **Step 6: Run the suite and build**

Run: `npm test` → PASS
Run: `npm run build` → succeeds.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: topic navigation, cross-level links, and client-side search"
```

---

## Task 10: SEO surfaces

**Files:**
- Create: `src/app/sitemap.ts`, `src/app/robots.ts`
- Modify: `src/app/layout.tsx`
- Test: `src/app/sitemap.test.ts`

**Interfaces:**
- Consumes: `allTopics` from Task 5; `BASE_PATH`, `SITE_ORIGIN`, `SITE_NAME` from Task 1.
- Produces: the default export of `src/app/sitemap.ts`, a `MetadataRoute.Sitemap`.

- [ ] **Step 1: Write the failing test**

```ts
// src/app/sitemap.test.ts
describe('sitemap', () => {
  it('includes the level chooser')
  it('includes every level overview page')
  it('includes one entry per topic')
  it('includes only populated category index pages')     // no URLs for empty categories
  it('prefixes every URL with the origin and base path')
  it('contains no duplicate URLs')
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test -- src/app/sitemap.test.ts`
Expected: FAIL — module does not resolve.

- [ ] **Step 3: Implement the sitemap and robots routes**

Build URLs from the registry so the sitemap cannot drift from the content. `robots.ts` allows everything and points at the sitemap. Both must be compatible with `output: 'export'` — they emit static files.

- [ ] **Step 4: Add root metadata**

In `layout.tsx`: `metadataBase` from `SITE_ORIGIN` + `BASE_PATH`, a title template using `SITE_NAME`, a default description, Open Graph defaults, and `lang="en"` on `<html>`.

- [ ] **Step 5: Run the suite and build**

Run: `npm test` → PASS
Run: `npm run build` → succeeds; `out/sitemap.xml` and `out/robots.txt` exist.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: sitemap, robots, and root metadata"
```

---

## Tasks 11–14: A1 content

Four content tasks. No new components — every one is authoring against the schema, with the validator and the spec's §12.1 definition of done as the gate. Topics come from spec §8's A1 mapping; `order` is assigned continuously across the whole level, starting from the `verb-to-be` topic already written as `order: 1`.

Each task follows the same shape, so it is given once here rather than repeated four times:

- [ ] **Step 1: Author the topics as typed modules** under `src/content/a1/<category>/<slug>.ts` and register them in `src/content/a1/index.ts`.
- [ ] **Step 2: Run `npm test`** — the registry test validates the whole corpus, so slug collisions, order gaps and every per-topic floor surface here. Expected: PASS.
- [ ] **Step 3: Run `npm run typecheck`** — a topic whose shape does not match its category's view will fail here. Expected: no errors.
- [ ] **Step 4: Walk the definition of done** (spec §12.1) for each topic: level-appropriate language with no undefined jargon · every claim checked against the English Grammar Profile and Swan · `levelRationale` filled in · why-lines explaining the choice of form rather than the meaning · at least one distractor encoding a real A1 error · **the adversarial ambiguity sweep on every gap-fill**, adding any second defensible answer to `answers[]`. Also match question type to topic, per spec §10: anything whose point is *sequence* — word order, adjective order, question formation — gets a `wordbank` question rather than a multiple choice.
- [ ] **Step 5: Run `npm run build`** and read two or three of the new pages in a browser. Expected: correct rendering, working quizzes.
- [ ] **Step 6: Commit.**

### Task 11: A1 Grammar, part 1 — `order` 2–8

`rule` shape. Nouns singular and plural · personal pronouns · *have got* · articles *a*/*an* · *this/that/these/those* · possessive adjectives and possessive *'s* · present simple.

### Task 12: A1 Grammar, part 2 — `order` 9–15

`rule` shape. Present continuous · *there is / there are* · *can* for ability · imperatives · adjectives before the noun · prepositions of place · prepositions of time *at/on/in*.

### Task 13: A1 Grammar, part 3 — `order` 16–19

`rule` shape. Question words · yes/no questions and short answers · *was/were* · object and possessive pronouns.

That completes A1 Grammar at 19 topics, matching spec §8.

### Task 14: A1 Vocabulary, Speaking, and Mechanics — `order` 20–26

Mixed shapes. **Vocabulary** (`set`): numbers · telling the time · days, months, family, food and colours. **Speaking & Communication** (`phrases`): greetings and introducing yourself · *Would you like…?* · ordering food. **Mechanics** (`rule`): capital letters and full stops.

Two extra steps for this task, from spec §12.2:

- [ ] **Author every vocabulary gloss from scratch.** The notes' definitions are third-party dictionary content and must not be carried over — the word *lists* may guide which words a set contains, the wording may not.
- [ ] **Source IPA from an openly-licensed dataset** (Wiktionary CC-BY-SA, or a CMUdict-derived set converted from ARPAbet), never from the notes. Add the chosen source to `LICENSES.md` with its attribution requirement, and render the attribution visibly if the licence demands it.

---

## Task 15: Accessibility and responsive verification

**Files:**
- Modify: whatever the audit turns up.

Not a code task by default — a verification gate before the first deploy. Everything here is a Global Constraint that no unit test fully covers.

- [ ] **Step 1: Keyboard-only pass.** Tab through the level chooser, a level overview, a category index, a topic page and a full quiz of all four question types. Every interactive element must be reachable, have a visible focus ring, and be operable without a mouse.
- [ ] **Step 2: Measure touch targets** at 375px. Every button, chip, link and the theme toggle must be ≥44×44px.
- [ ] **Step 3: Check the four breakpoints** — 375 / 768 / 1024 / 1440px. No horizontal body scroll at any of them; confirm wide content such as a `set` topic's table scrolls inside its own container instead.
- [ ] **Step 4: Confirm the reading measure.** Running text caps at 65ch; body text is never below 16px at 375px.
- [ ] **Step 5: Run `prefers-reduced-motion: reduce`** and confirm transitions are suppressed.
- [ ] **Step 6: Grep for emoji used as icons** in `src/` and replace any with inline SVG.
- [ ] **Step 7: Confirm the storage promise.** Load the site, take a quiz, navigate around; `localStorage` must hold exactly one key, the theme. No analytics requests in the network tab.
- [ ] **Step 8: Fix what fails, then commit.**

```bash
git add -A
git commit -m "fix: accessibility and responsive corrections from audit"
```

---

## Task 16: Deploy pipeline verification — not the public launch

**Spec §6 says the first release is all five levels, not shipped level-by-level.** So this task proves the deploy pipeline works; it does not announce the site. The reason to do it now rather than at the end is that `basePath` mistakes break every asset on a project-page deploy, and finding that out after four more levels of content is pointless pain.

Keep the repository private, or leave Pages enabled but unlinked and unsubmitted, until A2–C1 are authored.

- [ ] **Step 1: Create the GitHub repository** named `english-ladder` and add it as `origin`.
- [ ] **Step 2: Confirm `basePath` matches the repo name.** If the repo is named anything other than `english-ladder`, update `BASE_PATH` in `src/lib/site.ts` — a mismatch 404s every asset and is the single most common static-export deploy failure.
- [ ] **Step 3: Push, and enable Pages** with "GitHub Actions" as the source.
- [ ] **Step 4: Watch the workflow.** Tests run before build, so content errors block the deploy.
- [ ] **Step 5: Verify the live site** at `https://<user>.github.io/english-ladder/` — fonts load, theme toggle persists across navigation, a quiz works, and `view-source` on a topic page shows the explanation as real HTML rather than an empty shell hydrated by JavaScript.
- [ ] **Step 6: Do not submit the sitemap yet.** Search Console submission and any public announcement belong to the final content plan, once all five levels exist. Submitting now would index a site that is four-fifths empty.

---

## Follow-up plans

- **A2 content** — spec §8's A2 mapping, ~24 topics. No new code.
- **B1 content** — ~26 topics, the richest source material in the notes.
- **B2 content** — ~25 topics, including the workplace-English writing and speaking seam.
- **C1 content** — ~20 topics, 15 of them authored from scratch; the highest-risk level for pitch and accuracy.
- **Listening and speaking trainer** — a separate product entirely, per spec §13.
