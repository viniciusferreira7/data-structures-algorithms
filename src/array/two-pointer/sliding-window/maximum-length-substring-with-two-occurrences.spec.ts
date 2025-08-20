import { describe, it, expect } from "bun:test";
import { maximumLengthSubstringWithTwoOccurrences } from "./maximum-length-substring-with-two-occurrences";

describe("maximumLengthSubstringWithTwoOccurrences", () => {
  it.skip("should return entire string if all characters occur at most twice", () => {
    const input = "aabbccddeeff";
    const output = maximumLengthSubstringWithTwoOccurrences(input);
    expect(output).toBe("aabbccddeeff");
  });

  it.skip("should return longest substring where chars appear max twice (example 1)", () => {
    const input = "aaabbbcc";
    const output = maximumLengthSubstringWithTwoOccurrences(input);
    expect(output).toBe("aabbcc");
  });

  it.skip("should return entire string if all chars appear once", () => {
    const input = "abcde";
    const output = maximumLengthSubstringWithTwoOccurrences(input);
    expect(output).toBe("abcde");
  });

  it.skip("should return empty string when input is empty", () => {
    const input = "";
    const output = maximumLengthSubstringWithTwoOccurrences(input);
    expect(output).toBe("");
  });

  it.skip("should handle single character string", () => {
    const input = "z";
    const output = maximumLengthSubstringWithTwoOccurrences(input);
    expect(output).toBe("z");
  });

  it("should return substring from middle if needed", () => {
    const input = "bcbbbcba";
    const output = maximumLengthSubstringWithTwoOccurrences(input);
    expect(output).toBe("bcba");
  });
});
