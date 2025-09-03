import { describe, it, expect } from "bun:test";
import { reverseWords } from "./reverse-words-in-a-string";

describe("reverse words", () => {
	it("should reverse each word in the sentence (example 1)", () => {
		const input = "Let's take LeetCode contest";
		const output = reverseWords(input);
		expect(output).toBe("s'teL ekat edoCteeL tsetnoc");
	});

	it("should reverse words correctly (example 2)", () => {
		const input = "Mr Ding";
		const output = reverseWords(input);
		expect(output).toBe("rM gniD");
	});

	it("should return an empty string when input is empty", () => {
		expect(reverseWords("")).toBe("");
	});

	it("should handle a single word", () => {
		expect(reverseWords("hello")).toBe("olleh");
	});
});
