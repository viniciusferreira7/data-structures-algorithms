import { describe, it, expect } from "bun:test";
import { maximumLengthSubstringWithTwoOccurrences } from "./maximum-length-substring-with-two-occurrences";

describe("maximumLengthSubstringWithTwoOccurrences", () => {
  it("should return entire string if all characters occur at most twice", () => {
    const input = "aabbccddeeff";
    const output = maximumLengthSubstringWithTwoOccurrences(input);
    expect(output).toBe("aabbccddeeff");
  });

  it("should return longest substring where chars appear max twice", () => {
    const input = "eebadadbfa";
    const output = maximumLengthSubstringWithTwoOccurrences(input);
    expect(output).toBe("dadbfa");
  });

  it("should return entire string if all chars appear once", () => {
    const input = "abcde";
    const output = maximumLengthSubstringWithTwoOccurrences(input);
    expect(output).toBe("abcde");
  });

  it("should return empty string when input is empty", () => {
    const input = "";
    const output = maximumLengthSubstringWithTwoOccurrences(input);
    expect(output).toBe("");
  });

  it("should handle single character string", () => {
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
