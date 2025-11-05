/**
 * Sorts an array of numbers in ascending order using the Bubble Sort algorithm.
 *
 * This algorithm repeatedly steps through the list, compares adjacent elements,
 * and swaps them if they are in the wrong order. The pass through the list is
 * repeated until the array is sorted.
 *
 * This implementation runs in O(n²) time and O(1) space, making it simple but inefficient
 * for large datasets.
 *
 * @example
 * // Example 1: Sorting an unsorted array
 * // Input: [5, 1, 4, 2, 8]
 * // Output: [1, 2, 4, 5, 8]
 * const sorted = bubbleSort([5, 1, 4, 2, 8]);
 * // sorted === [1, 2, 4, 5, 8]
 *
 * @example
 * // Example 2: Sorting an already sorted array
 * // Input: [1, 2, 3, 4]
 * // Output: [1, 2, 3, 4]
 * const sorted = bubbleSort([1, 2, 3, 4]);
 * // sorted === [1, 2, 3, 4]
 *
 * @example
 * // Example 3: Sorting an array with duplicate values
 * // Input: [3, 2, 1, 2]
 * // Output: [1, 2, 2, 3]
 * const sorted = bubbleSort([3, 2, 1, 2]);
 * // sorted === [1, 2, 2, 3]
 *
 * @param arr - The array of numbers to sort.
 * @returns A new array containing the sorted elements in ascending order.
 */
export function bubbleSort(arr: number[]): number[] {
	if (arr.length <= 1) return arr;

	let size = arr.length;

	for (const _value in arr) {
		for (let i = 0; i <= size - 1; i++) {
			if (arr[i] > arr[i + 1]) {
				let a = arr[i + 1];
				let b = arr[i];

				arr.splice(i + 1, 1, b);
				arr.splice(i, 1, a);
			}
		}
	}

	return arr;
}
