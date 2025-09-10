/**
 * Determines if an array contains nearby duplicates within a given distance.
 *
 * This function checks if there are two distinct indices `i` and `j` in the array
 * such that `nums[i] === nums[j]` and the absolute difference between `i` and `j`
 * is at most `k`.
 *
 * @param nums - The array of integers to check.
 * @param k - The maximum allowed index distance between duplicate elements.
 * @returns True if such a pair of duplicates exists, otherwise false.
 *
 * @example
 * containsNearbyDuplicate([1, 2, 3, 1], 3);
 * // Returns: true (duplicate "1" found within distance 3)
 *
 * @example
 * containsNearbyDuplicate([1, 0, 1, 1], 1);
 * // Returns: true (duplicate "1" found within distance 1)
 *
 * @example
 * containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2);
 * // Returns: false (duplicates exist but not within distance 2)
 */
export function containsNearbyDuplicate(nums: number[], k: number): boolean {}
