import type { ListNode } from "./list-node";

/**
 * Reverses a singly linked list in-place.
 *
 * This function iterates through the list once, reversing the direction of each
 * node's `next` pointer. The operation is performed in-place without allocating
 * additional nodes, and the new head of the list is returned.
 *
 * @example
 * // Input: 1 -> 2 -> 3 -> 4 -> 5 -> null
 * // Output: 5 -> 4 -> 3 -> 2 -> 1 -> null
 * const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
 * const reversed = reverseLinkedList(head);
 * // reversed now points to the node with value 5
 *
 * @param {ListNode|null} head - The head node of the singly linked list, or `null` if the list is empty.
 * @returns {ListNode|null} The new head node of the reversed list, or `null` if the list was empty.
 *
 * @complexity
 * Time: O(n) — each node is visited once.
 * Space: O(1) — reversal is done in-place.
 */
export function reverseLinkedList(head: ListNode | null): ListNode | null {}
