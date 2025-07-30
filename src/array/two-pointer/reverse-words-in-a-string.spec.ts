import { describe, it, expect } from "bun:test";
import { reverseWordsInAString } from './reverse-words-in-a-string';

describe("reverseWordsInAString", () => {
  it("should reverse words correctly (example 1)", () => {
    const input = "the sky is blue";
    const output = reverseWordsInAString(input);
    expect(output).toBe("blue is sky the");
  });

  it("should trim spaces (example 2)", () => {
    const input = "  hello world  ";
    const output = reverseWordsInAString(input);
    expect(output).toBe("world hello");
  });

  it("should handle multiple spaces between words (example 3)", () => {
    const input = "a good   example";
    const output = reverseWordsInAString(input);
    expect(output).toBe("example good a");
  });
});
