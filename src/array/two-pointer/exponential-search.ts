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
  let l = 0, r = 0

  if(arr[l] === target) return l

  if(arr.at(-1) === target) return arr.length - 1

  // TODO: Complete this algorithm


  return -1

}