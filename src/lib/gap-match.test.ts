import { matchesGap, normaliseAnswer } from '@/lib/gap-match';

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
