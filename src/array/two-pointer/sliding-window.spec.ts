import { describe, it, expect } from "bun:test";
import { slidingWindow } from "./sliding-window";

describe("slidingWindow", () => {
  it("should return the longest substring without repeating characters (example 1)", () => {
    const input = "abcabcbb";
    const output = slidingWindow(input);
    expect(output).toBe("abc");
  });

  it("should return the longest substring without repeating characters (example 2)", () => {
    const input = "bbbbb";
    const output = slidingWindow(input);
    expect(output).toBe("b");
  });

  it("should return the longest substring without repeating characters (example 3)", () => {
    const input = "pwwkew";
    const output = slidingWindow(input);
    expect(output).toBe("wke");
  });

  it("should return the full string if all characters are unique", () => {
    const input = "abcdef";
    const output = slidingWindow(input);
    expect(output).toBe("abcdef");
  });

  it("should return empty string for empty input", () => {
    const input = "";
    const output = slidingWindow(input);
    expect(output).toBe("");
  });

  it("should handle single character string", () => {
    const input = "z";
    const output = slidingWindow(input);
    expect(output).toBe("z");
  });
});