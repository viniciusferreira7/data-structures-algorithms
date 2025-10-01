import type { ListNode } from "./list-node";

/**
 * Returns the middle node of a singly linked list.
 *
 * If the list has an even number of nodes, the function returns the **second**
 * of the two middle nodes.
 *
 * @example
 * // Example 1:
 * // Input: head = [1,2,3,4,5]
 * // Output: [3,4,5]
 * const head = createLinkedList([1,2,3,4,5]);
 * const middle = middleOfTheLinkedList(head);
 * // middle?.val === 3
 *
 * @example
 * // Example 2:
 * // Input: head = [1,2,3,4,5,6]
 * // Output: [4,5,6]
 * const head = createLinkedList([1,2,3,4,5,6]);
 * const middle = middleOfTheLinkedList(head);
 * // middle?.val === 4
 *
 * @param head - The head node of the singly linked list.
 * @returns The middle node (or the second middle node if the list has even length), or `null` if the list is empty.
 */
export function middleOfTheLinkedList(head: ListNode | null): ListNode | null {
	let ahead = head;

	while (ahead && ahead.next) {
		ahead = ahead.next;
		ahead = ahead.next;

		if (head) head = head?.next;
	}

	return head;
}
