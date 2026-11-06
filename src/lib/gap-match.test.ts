import { matchesGap, normaliseAnswer, normaliseGap } from '@/lib/gap-match';
import { canFormAnswer } from '@/lib/wordbank';

describe('normaliseAnswer', () => {
  it('maps U+2018, U+2019 and U+02BC to a straight apostrophe', () => {
    expect(normaliseAnswer('a‘b’cʼd')).toBe("a'b'c'd");
  });
});

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

describe('matchesGap tolerance for trailing punctuation and hyphens', () => {
  it('ignores trailing full stops, exclamation and question marks', () => {
    expect(matchesGap('half past three.', ['half past three'])).toBe(true);
    expect(matchesGap('Half past three!', ['half past three'])).toBe(true);
    expect(matchesGap('half past three ?! ', ['half past three'])).toBe(true);
  });
  it('treats hyphens and spaces as equivalent in both directions', () => {
    expect(matchesGap('half-three', ['half three'])).toBe(true);
    expect(matchesGap('half three', ['half-three'])).toBe(true);
    expect(matchesGap('twenty-five past six', ['twenty five past six'])).toBe(true);
    expect(matchesGap('twenty‐five past six', ['twenty five past six'])).toBe(true);
    expect(matchesGap('twenty–five past six', ['twenty five past six'])).toBe(true);
  });
  it('leaves apostrophes untouched', () => {
    expect(matchesGap("isn't.", ["isn't"])).toBe(true);
    expect(matchesGap('isnt', ["isn't"])).toBe(false);
  });
  it('rejects input that is only punctuation', () => {
    expect(matchesGap('.', ['half past three'])).toBe(false);
    expect(matchesGap('-', ['half past three'])).toBe(false);
    expect(matchesGap('   .', ['half past three'])).toBe(false);
    expect(matchesGap('.', ['.'])).toBe(false);
  });
  it('does not accept internal punctuation changes', () => {
    expect(matchesGap('half past, three', ['half past three'])).toBe(false);
  });
  it('normaliseGap is empty for punctuation-only input', () => {
    expect(normaliseGap('  . ')).toBe('');
    expect(normaliseGap('-')).toBe('');
  });
  it('keeps normaliseAnswer unchanged so word-bank tokens keep their hyphens', () => {
    expect(normaliseAnswer('well-known.')).toBe('well-known.');
    expect(canFormAnswer(['well-known', 'a', 'man'], 'a well-known man')).toBe(true);
  });
});
