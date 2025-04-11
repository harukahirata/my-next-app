import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum 関数のテスト', () => {
  it('1 + 2 は 3 を返す', () => {
    expect(sum(1, 2)).toBe(3);
  });
});