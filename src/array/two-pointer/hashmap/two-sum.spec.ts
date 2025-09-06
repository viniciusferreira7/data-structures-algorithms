import { describe, expect, it } from "bun:test";
import { twoSum } from "./two-sum";

describe("twoSum", () => {
	it("should find indices when the pair is at the beginning", () => {
		const arr = [2, 7, 11, 15];
		expect(twoSum(arr, 9)).toEqual([0, 1]);
	});

	it("should find indices when the pair is in the middle", () => {
		const arr = [3, 2, 4];
		expect(twoSum(arr, 6)).toEqual([1, 2]);
	});

	it("should find indices when both numbers are the same", () => {
		const arr = [3, 3];
		expect(twoSum(arr, 6)).toEqual([0, 1]);
	});

	it("should work with negative numbers", () => {
		const arr = [-1, -2, -3, -4, -5];
		expect(twoSum(arr, -8)).toEqual([2, 4]);
	});

	it("should work with large numbers", () => {
		const arr = [1000000000, 2000000000, 3000000000];
		expect(twoSum(arr, 5000000000)).toEqual([1, 2]);
	});
});
