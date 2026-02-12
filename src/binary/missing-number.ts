/**
 * Finds the missing number in an array containing n distinct numbers in the range [0, n].
 *
 * The function should find the only number in the range [0, n] that is missing from the array.
 * Given an array nums containing n distinct numbers, where n is the length of the array,
 * all numbers are in the range [0, n] with exactly one number missing.
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param nums - An array of distinct integers in the range [0, n] with one number missing.
 * @returns The missing number from the range [0, n].
 *
 * @example
 * missingNumber([3, 0, 1]);
 * // Returns: 2
 * // Explanation: n = 3, range [0,3], missing number is 2
 *
 * @example
 * missingNumber([0, 1]);
 * // Returns: 2
 * // Explanation: n = 2, range [0,2], missing number is 2
 *
 * @example
 * missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
 * // Returns: 8
 * // Explanation: n = 9, range [0,9], missing number is 8
 */
export function missingNumber(nums: number[]): number {
	let x = 0;

	for (const j of nums) {
		x ^= j;
	}

	//TODO: Understand why its to use XOR
	return x;
}
