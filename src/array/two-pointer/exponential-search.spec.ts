import { describe, it, expect } from "bun:test";
import { exponentialSearch } from "./exponential-search";

describe("exponential search", () => {
	it("should find the target in the middle", () => {
		const arr = [1, 3, 5, 7, 9, 11];
		expect(exponentialSearch(arr, 7)).toBe(3);
	});

	it.skip("should find the target at the beginning", () => {
		const arr = [1, 3, 5, 7, 9, 11];
		expect(exponentialSearch(arr, 1)).toBe(0);
	});

	it.skip("should find the target at the end", () => {
		const arr = [1, 3, 5, 7, 9, 11];
		expect(exponentialSearch(arr, 11)).toBe(5);
	});

	it.skip("should return -1 when the target is not found", () => {
		const arr = [1, 3, 5, 7, 9, 11];
		expect(exponentialSearch(arr, 8)).toBe(-1);
	});

	it.skip("should work with an array of one element (found)", () => {
		const arr = [10];
		expect(exponentialSearch(arr, 10)).toBe(0);
	});

	it.skip("should work with an array of one element (not found)", () => {
		const arr = [10];
		expect(exponentialSearch(arr, 5)).toBe(-1);
	});

	it.skip("should return -1 for an empty array", () => {
		expect(exponentialSearch([], 5)).toBe(-1);
	});

	it.skip("should handle large arrays efficiently", () => {
		const arr = Array.from({ length: 1000 }, (_, i) => i + 1);
		expect(exponentialSearch(arr, 750)).toBe(749);
		expect(exponentialSearch(arr, 1001)).toBe(-1);
	});
});
