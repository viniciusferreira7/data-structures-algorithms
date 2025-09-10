import { describe, expect, it } from "bun:test";
import { containsNearbyDuplicate } from "./contains-nearby-duplicate";

describe("containsNearbyDuplicate", () => {
	it.skip("should return true when a duplicate is found within distance k", () => {
		const nums = [1, 2, 3, 1];
		const k = 3;
		const output = containsNearbyDuplicate(nums, k);
		expect(output).toBe(true);
	});

	it.skip("should return true when duplicates are adjacent within k distance", () => {
		const nums = [1, 0, 1, 1];
		const k = 1;
		const output = containsNearbyDuplicate(nums, k);
		expect(output).toBe(true);
	});

	it.skip("should return false when duplicates are farther apart than k", () => {
		const nums = [1, 2, 3, 1, 2, 3];
		const k = 2;
		const output = containsNearbyDuplicate(nums, k);
		expect(output).toBe(false);
	});

	it.skip("should return false when no duplicates exist", () => {
		const nums = [1, 2, 3, 4, 5];
		const k = 3;
		const output = containsNearbyDuplicate(nums, k);
		expect(output).toBe(false);
	});

	it.skip("should return false for empty array", () => {
		const nums: number[] = [];
		const k = 2;
		const output = containsNearbyDuplicate(nums, k);
		expect(output).toBe(false);
	});

	it.skip("should return false for single element array", () => {
		const nums = [42];
		const k = 5;
		const output = containsNearbyDuplicate(nums, k);
		expect(output).toBe(false);
	});

	it.skip("should handle large k larger than array length", () => {
		const nums = [1, 2, 3, 1];
		const k = 10;
		const output = containsNearbyDuplicate(nums, k);
		expect(output).toBe(true);
	});
});
