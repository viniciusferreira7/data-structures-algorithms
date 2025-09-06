import { describe, expect, it } from "bun:test";
import { binarySearch } from "./binary-search";

describe("binary search", () => {
	it("should find the target in the middle", () => {
		const arr = [1, 3, 5, 7, 9];
		expect(binarySearch(arr, 5)).toBe(2);
	});

	it("should find the target at the beginning", () => {
		const arr = [1, 3, 5, 7, 9];
		expect(binarySearch(arr, 1)).toBe(0);
	});

	it("should find the target at the end", () => {
		const arr = [1, 3, 5, 7, 9];
		expect(binarySearch(arr, 9)).toBe(4);
	});

	it("should return -1 when the target is not found", () => {
		const arr = [1, 3, 5, 7, 9];
		expect(binarySearch(arr, 4)).toBe(-1);
	});

	it("should work with an array of one element (found)", () => {
		const arr = [10];
		expect(binarySearch(arr, 10)).toBe(0);
	});

	it("should work with an array of one element (not found)", () => {
		const arr = [10];
		expect(binarySearch(arr, 5)).toBe(-1);
	});

	it("should return -1 for an empty array", () => {
		expect(binarySearch([], 5)).toBe(-1);
	});
});
