import { ListNode } from "./list-node";

/**
 * Merges two sorted linked lists into a single sorted linked list.
 * The merged list is formed by splicing together the nodes of the input lists.
 *
 * @param {ListNode | null} list1 - The head of the first sorted linked list.
 * @param {ListNode | null} list2 - The head of the second sorted linked list.
 * @returns {ListNode | null} The head of the merged sorted linked list.
 *
 * @example
 * // Input: list1 = [1, 2, 4], list2 = [1, 3, 4]
 * // Output: [1, 1, 2, 3, 4, 4]
 *
 * @example
 * // Input: list1 = [], list2 = []
 * // Output: null
 *
 * @example
 * // Input: list1 = [], list2 = [0]
 * // Output: [0]
 */
export function mergeTwoLists(
	list1: ListNode | null,
	list2: ListNode | null,
): ListNode | null {
	if (!list1 && !list2) return null;
	if (!list1) return list2;
	if (!list2) return list1;

	const dummy = new ListNode(0, null, null);
	let current = dummy;

	let current1: ListNode | null = list1;
	let current2: ListNode | null = list2;

	while (current1 && current2) {
		if (current1.value <= current2.value) {
			current.next = current1;
			current1.prev = current;
			current = current1;
			current1 = current1.next;
		} else {
			current.next = current2;
			current2.prev = current;
			current = current2;
			current2 = current2.next;
		}
	}

	if (current1) {
		current.next = current1;
		if (current1) {
			current1.prev = current;
		}
	} else if (current2) {
		current.next = current2;
		if (current2) {
			current2.prev = current;
		}
	}

	return dummy.next;
}
