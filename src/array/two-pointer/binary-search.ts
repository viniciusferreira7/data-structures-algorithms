/**
 * Performs a binary search on a sorted array to find the index of the target value.
 *
 * The function assumes that the input array is sorted in ascending order.
 * It repeatedly divides the search interval in half until the target is found
 * or the interval is empty.
 *
 * @param arr - A sorted array of numbers (ascending order).
 * @param target - The number to search for in the array.
 * @returns The index of the target if found; otherwise, -1.
 *
 * @example
 * binarySearch([1, 3, 5, 7, 9], 5);
 * // Returns: 2
 *
 * @example
 * binarySearch([1, 3, 5, 7, 9], 4);
 * // Returns: -1
 */
export function binarySearch(arr: number[], target: number): number {
  let l =0, r = arr.length - 1
  let mid = arr.length / 2 | 0

  if(arr.length === 0) return -1 

  if(arr[l] === target) return l
  if(arr[r] === target) return r

  while (l < r){
    if(arr[mid] === target){
      return mid
    } else if (mid < target){
      r = mid - 1
      mid = (l + r) / 2 | 0
    } else if (mid > target){
      l = mid + 1
      mid = (r - l) / 2 | 0

    }
  }

  return -1
}
