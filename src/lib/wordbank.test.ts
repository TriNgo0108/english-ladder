import { canFormAnswer, tokeniseAnswer } from '@/lib/wordbank';

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
  it('keeps a curly-apostrophe contraction as one token', () => {
    expect(tokeniseAnswer('she isn’t here')).toEqual(['she', 'isn’t', 'here']);
  });
  it('strips a trailing question mark and preserves case', () => {
    expect(tokeniseAnswer('Is it I?')).toEqual(['Is', 'it', 'I']);
  });
  it('keeps an internal hyphen', () => {
    expect(tokeniseAnswer('a well-known box')).toEqual(['a', 'well-known', 'box']);
  });
});
