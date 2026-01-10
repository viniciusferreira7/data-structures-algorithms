import { describe, expect, it } from "bun:test";
import { bubbleSort } from "./bubble-sort";

describe("bubbleSort", () => {
	it("should sort an unsorted array in ascending order", () => {
		const result = bubbleSort([5, 1, 4, 2, 8]);
		expect(result).toEqual([1, 2, 4, 5, 8]);
	});

	it("should handle an already sorted array", () => {
		const result = bubbleSort([1, 2, 3, 4]);
		expect(result).toEqual([1, 2, 3, 4]);
	});

	it("should handle an array with duplicate values", () => {
		const result = bubbleSort([3, 2, 1, 2]);
		expect(result).toEqual([1, 2, 2, 3]);
	});

	it("should handle an array with negative numbers", () => {
		const result = bubbleSort([-2, 5, 0, -1, 3]);
		expect(result).toEqual([-2, -1, 0, 3, 5]);
	});

	it("should handle an empty array", () => {
		const result = bubbleSort([]);
		expect(result).toEqual([]);
	});

	it("should handle an array with a single element", () => {
		const result = bubbleSort([42]);
		expect(result).toEqual([42]);
	});

	it("should not mutate the original array", () => {
		const original = [3, 1, 2];
		const copy = [...original];
		bubbleSort(copy);

		expect(original).toEqual([3, 1, 2]);
	});
});
