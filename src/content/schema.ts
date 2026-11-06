import { z } from "zod";
import { richTextProblem } from "@/lib/rich-text";
import { canFormAnswer } from "@/lib/wordbank";

export const LevelSchema = z.enum(["a1", "a2", "b1", "b2", "c1"]);
export const CategorySlugSchema = z.enum([
  "grammar",
  "vocabulary",
  "phrases",
  "writing",
  "speaking",
  "mechanics",
]);

/** A required string that is non-blank and uses only well-formed `<b>…</b>` markup. */
const text = z
  .string()
  .refine((s) => s.trim().length > 0, { error: "must not be blank" })
  .superRefine((s, ctx) => {
    const problem = richTextProblem(s);
    if (problem) ctx.addIssue({ code: "custom", message: problem });
  });

const index = z.number().int().min(0);

const ExampleSchema = z.strictObject({ sentence: text, why: text });

const ChoiceSchema = z
  .strictObject({
    kind: z.literal("choice"),
    stem: text,
    options: z.array(text).min(2),
    answer: index,
    feedback: text,
  })
  .superRefine((q, ctx) => {
    if (q.answer >= q.options.length) {
      ctx.addIssue({
        code: "custom",
        path: ["answer"],
        message: `answer ${q.answer} is out of range for ${q.options.length} options`,
      });
    }
  });

const GapSchema = z.strictObject({
  kind: z.literal("gap"),
  stem: text,
  answers: z.array(text).min(1),
  feedback: text,
});

const WordbankSchema = z
  .strictObject({
    kind: z.literal("wordbank"),
    prompt: text,
    words: z.array(text).min(2),
    answer: text,
    feedback: text,
  })
  .superRefine((q, ctx) => {
    if (!canFormAnswer(q.words, q.answer)) {
      ctx.addIssue({
        code: "custom",
        path: ["answer"],
        message: "words cannot be rearranged into answer",
      });
    }
  });

const MistakeSchema = z
  .strictObject({
    kind: z.literal("mistake"),
    tokens: z.array(text).min(2),
    wrongIndex: index,
    correction: text,
    feedback: text,
  })
  .superRefine((q, ctx) => {
    if (q.wrongIndex >= q.tokens.length) {
      ctx.addIssue({
        code: "custom",
        path: ["wrongIndex"],
        message: `wrongIndex ${q.wrongIndex} is out of range for ${q.tokens.length} tokens`,
      });
    }
  });

export const QuestionSchema = z.discriminatedUnion("kind", [
  ChoiceSchema,
  GapSchema,
  WordbankSchema,
  MistakeSchema,
]);

const kebab = z.string().regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, { error: "must be lowercase kebab-case" });

const baseFields = {
  slug: kebab,
  /** Cross-level topic family; defaults to the slug when absent. */
  family: kebab.optional(),
  title: text,
  level: LevelSchema,
  order: z.number().int().positive(),
  explanation: text,
  quiz: z.array(QuestionSchema).min(4),
  levelRationale: text,
  sourceNotes: text.optional(),
};

export const RuleTopicSchema = z.strictObject({
  ...baseFields,
  shape: z.literal("rule"),
  category: z.enum(["grammar", "mechanics"]),
  form: text.optional(),
  examples: z.array(ExampleSchema).min(3),
  pitfall: z.strictObject({ wrong: text, right: text, why: text }).optional(),
});

export const SetTopicSchema = z.strictObject({
  ...baseFields,
  shape: z.literal("set"),
  category: z.enum(["vocabulary", "phrases"]),
  entries: z
    .array(
      z.strictObject({
        headword: text,
        ipa: text.optional(),
        gloss: text,
        inUse: text,
      }),
    )
    .min(6),
});

export const PhraseTopicSchema = z.strictObject({
  ...baseFields,
  shape: z.literal("phrases"),
  category: z.enum(["writing", "speaking"]),
  situations: z
    .array(
      z.strictObject({
        situation: text,
        phrases: z.array(text).min(1),
        register: z.enum(["formal", "neutral", "informal"]),
      }),
    )
    .min(3),
});

export const TopicSchema = z.discriminatedUnion("shape", [
  RuleTopicSchema,
  SetTopicSchema,
  PhraseTopicSchema,
]);

export type Level = z.infer<typeof LevelSchema>;
export type CategorySlug = z.infer<typeof CategorySlugSchema>;
export type Example = z.infer<typeof ExampleSchema>;
export type Question = z.infer<typeof QuestionSchema>;
export type RuleTopic = z.infer<typeof RuleTopicSchema>;
export type SetTopic = z.infer<typeof SetTopicSchema>;
export type PhraseTopic = z.infer<typeof PhraseTopicSchema>;
export type Topic = z.infer<typeof TopicSchema>;

function readSlug(input: unknown): string | undefined {
  if (typeof input === "object" && input !== null && "slug" in input) {
    const slug = (input as { slug: unknown }).slug;
    if (typeof slug === "string" && slug.length > 0) return slug;
  }
  return undefined;
}

/** Parse a hand-authored topic; throws an Error naming the slug and each failing path. */
export function parseTopic(input: unknown): Topic {
  const result = TopicSchema.safeParse(input);
  if (result.success) return result.data;
  const lines = result.error.issues.map((issue) => {
    const path = issue.path.length > 0 ? issue.path.join(".") : "(root)";
    return `  ${path}: ${issue.message}`;
  });
  throw new Error(`Invalid topic "${readSlug(input) ?? "<unknown slug>"}":\n${lines.join("\n")}`);
}
