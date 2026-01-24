/**
 * Sorts an array of numbers in ascending order using the Quick Sort algorithm.
 *
 * Quick Sort is a divide-and-conquer algorithm that works by selecting a 'pivot' element
 * from the array and partitioning the other elements into two subarrays — one with elements
 * less than the pivot and one with elements greater than the pivot. The subarrays are then
 * recursively sorted.
 *
 * This implementation typically runs in O(n log n) time on average, with O(n²) in the worst case,
 * and requires O(log n) additional space due to recursive calls.
 *
 * The `left` and `right` parameters define the current range of indices being sorted.
 * They are optional in top-level calls but required for recursive calls.
 *
 * @example
 * // Example 1: Sorting an unsorted array
 * // Input: [5, 1, 4, 2, 8]
 * // Output: [1, 2, 4, 5, 8]
 * const sorted = quickSort([5, 1, 4, 2, 8], 0, 4);
 * // sorted === [1, 2, 4, 5, 8]
 *
 * @example
 * // Example 2: Sorting an already sorted array
 * // Input: [1, 2, 3, 4]
 * // Output: [1, 2, 3, 4]
 * const sorted = quickSort([1, 2, 3, 4], 0, 3);
 * // sorted === [1, 2, 3, 4]
 *
 * @example
 * // Example 3: Sorting an array with duplicate values
 * // Input: [3, 2, 1, 2]
 * // Output: [1, 2, 2, 3]
 * const sorted = quickSort([3, 2, 1, 2], 0, 3);
 * // sorted === [1, 2, 2, 3]
 *
 * @param arr - The array of numbers to sort.
 * @param left - The starting index of the portion of the array to sort.
 * @param right - The ending index of the portion of the array to sort.
 * @returns A new array containing the sorted elements in ascending order.
 */
export function quickSort(
	arr: number[],
	left: number,
	right: number,
): number[] {
	if (!arr) return [];

	if (!arr.length) return arr;

	if (left < right) {
		const pi = partition(arr, left, right);

		quickSort(arr, left, pi);
		quickSort(arr, pi + 1, right);
	}

	function partition(arr: number[], left: number, right: number): number {
		const pi = right;

		let i = left - 1;

		for (let j = left; j < pi; j++) {
			if (arr[j] <= arr[pi]) {
				i++;
				const temp = arr[j];

				arr[j] = arr[i];
				arr[i] = temp;
			}
		}

		const temp = arr[i + 1];

		arr[i + 1] = arr[pi];
		arr[pi] = temp;

		return i;
	}

	return arr;
}
