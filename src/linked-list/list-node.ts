/**
 * Represents a node in a doubly linked list.
 *
 * @example
 * // Create nodes
 * const a = new Node(1, null, null);
 * const b = new Node(2, null, null);
 *
 * // Link a <-> b
 * a.next = b;
 * b.prev = a;
 *
 * console.log(a.value); // 1
 * console.log(a.next.value); // 2
 *
 * @class Node
 */
export class ListNode {
	/**
	 * Creates an instance of ListNode.
	 *
	 * @param {number} value - The value stored in the ListNode.
	 * @param {ListNode|null} next - Reference to the next node (or `null` if none).
	 * @param {ListNode|null} prev - Reference to the previous node (or `null` if none).
	 */
	constructor(
		/** @public @type {number} */ public value: number,
		/** @public @type {ListNode|null} */ public next: ListNode | null,
		/** @public @type {ListNode|null} */ public prev: ListNode | null,
	) {}
}
