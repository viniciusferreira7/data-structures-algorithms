import { describe, expect, it } from "bun:test";
import { missingNumber } from "./missing-number";

describe("missingNumber", () => {
	it.only("should find missing number when array has 3 elements", () => {
		const nums = [3, 0, 1];
		expect(missingNumber(nums)).toBe(2);
	});

	it("should find missing number when array has 2 elements", () => {
		const nums = [0, 1];
		expect(missingNumber(nums)).toBe(2);
	});

	it("should find missing number in large array", () => {
		const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];
		expect(missingNumber(nums)).toBe(8);
	});

	it("should handle when 0 is missing", () => {
		const nums = [1, 2, 3];
		expect(missingNumber(nums)).toBe(0);
	});

	it("should handle when n is missing", () => {
		const nums = [0, 1, 2, 3];
		expect(missingNumber(nums)).toBe(4);
	});

	it("should handle single element array", () => {
		const nums = [0];
		expect(missingNumber(nums)).toBe(1);
	});

	it("should handle array with only 1 missing from [0,1]", () => {
		const nums = [1];
		expect(missingNumber(nums)).toBe(0);
	});

	it("should work with unsorted array", () => {
		const nums = [5, 3, 0, 1, 4];
		expect(missingNumber(nums)).toBe(2);
	});
});
