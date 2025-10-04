import type { ListNode } from "./list-node";

/**
 * Detects whether a cycle exists in a singly linked list
 * using Floyd's Tortoise and Hare algorithm.
 *
 * This algorithm runs in O(n) time and O(1) space.
 *
 * @example
 * // Example 1: Cycle exists
 * // Input: head = [3,2,0,-4], with tail connecting to node index 1
 * // Output: true
 * const head = createCyclicLinkedList([3,2,0,-4], 1);
 * const hasCycle = FloydCycleDetection(head);
 * // hasCycle === true
 *
 * @example
 * // Example 2: No cycle
 * // Input: head = [1,2]
 * // Output: false
 * const head = arrayToLinkedList([1,2]);
 * const hasCycle = FloydCycleDetection(head);
 * // hasCycle === false
 *
 * @param head - The head node of the singly linked list (may contain a cycle).
 * @returns `true` if the list contains a cycle, otherwise `false`.
 */
export function FloydCycleDetection(head: ListNode | null): boolean {
	const hashMap = new Map();

	while (head && head.next) {
		if (hashMap.has(head.value) && hashMap.get(head.value) === head.next)
			return true;

		hashMap.set(head.value, head.next);

		head = head.next;
	}

	return false;
}
