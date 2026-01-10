import { describe, expect, it } from "bun:test";
import { quickSort } from "./quick-sort";

describe("quickSort", () => {
	it("should sort an unsorted array in ascending order", () => {
		const result = quickSort([9, 5, 1, 4, 2, 8], 0, 5);
		expect(result).toEqual([1, 2, 4, 5, 8, 9]);
	});

	it("should handle an already sorted array", () => {
		const result = quickSort([1, 2, 3, 4], 0, 3);
		expect(result).toEqual([1, 2, 3, 4]);
	});

	it("should handle an array with duplicate values", () => {
		const result = quickSort([3, 2, 1, 2], 0, 3);
		expect(result).toEqual([1, 2, 2, 3]);
	});

	it("should handle an array with negative numbers", () => {
		const result = quickSort([-2, 5, 0, -1, 3], 0, 4);
		expect(result).toEqual([-2, -1, 0, 3, 5]);
	});

	it("should handle an empty array", () => {
		const result = quickSort([], 0, -1);
		expect(result).toEqual([]);
	});

	it("should handle an array with a single element", () => {
		const result = quickSort([42], 0, 0);
		expect(result).toEqual([42]);
	});

	it("should not mutate the original array", () => {
		const original = [3, 1, 2];
		const copy = [...original];
		quickSort(copy, 0, copy.length - 1);

		expect(original).toEqual([3, 1, 2]);
	});
});
