/**
 * Finds two numbers in the array whose sum equals the target and returns their indices.
 *
 * The function assumes that there is exactly one solution and the same element
 * cannot be used twice. The indices may be returned in any order.
 *
 * @param arr - An array of integers (2 <= arr.length <= 10^4).
 * @param target - The target sum to achieve (-10^9 <= target <= 10^9).
 * @returns An array containing the indices of the two numbers that add up to the target.
 *
 * @example
 * twoSum([2, 7, 11, 15], 9);
 * // Returns: [0, 1]
 *
 * @example
 * twoSum([3, 2, 4], 6);
 * // Returns: [1, 2]
 *
 * @example
 * twoSum([3, 3], 6);
 * // Returns: [0, 1]
 */
export function twoSum(arr: number[], target: number): number[] {
	const map = new Map();

	for (let l = 0; l < arr.length; l++) {
		const value = map.get(target);

		if (!!value) {
			return value;
		}
		for (let r = 1; r < arr.length; r++) {
			if (l !== r) {
				const sum = arr[l] + arr[r];
				if (!map.has(sum)) {
					map.set(sum, [l, r]);
				}
			}
		}
	}

	return [];
}
