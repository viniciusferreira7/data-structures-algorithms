import { binarySearch } from "./binary-search";

/**
 * Performs an exponential search on a sorted array to find the index of the target value.
 *
 * The algorithm works in two phases:
 * 1. **Range Finding**: It starts with the first element and keeps doubling the index
 *    until the target is greater than the element at the current index or the end of the array is reached.
 * 2. **Binary Search**: Once the range is found, it performs a binary search within that range.
 *
 * Assumes the input array is sorted in ascending order.
 *
 * @param arr - A sorted array of numbers (ascending order).
 * @param target - The number to search for in the array.
 * @returns The index of the target if found; otherwise, -1.
 *
 * @example
 * exponentialSearch([1, 3, 5, 7, 9, 11, 13, 15], 11);
 * // Returns: 5
 *
 * @example
 * exponentialSearch([1, 3, 5, 7, 9, 11, 13, 15], 6);
 * // Returns: -1
 */
export function exponentialSearch(arr: number[], target: number): number {
	let i = 0;

	if (arr[i] === target) return i;

	if (arr.at(-1) === target) return arr.length - 1;

	i = 1;

	while (arr[i] < target || i < arr.length) {
		i *= 2;
	}

	if (arr[i] === target) return i;

	return binarySearch(
		arr,
		target,
		(i / 2) | 0,
		i > arr.length ? arr.length - 1 : i,
	);
}
