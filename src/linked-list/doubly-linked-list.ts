import { ListNode } from "./list-node";

/**
 * Represents a doubly linked list data structure.
 *
 * @example
 * const list = new DoublyLinkedList(null, null);
 *
 * list.addFromFront(10);
 * list.addFromEnd(20);
 * list.addFromFront(5);
 *
 * console.log(list.removeFromFront()?.value); // 5
 * console.log(list.removeFromEnd()?.value);   // 20
 *
 * @class DoublyLinkedList
 */
export class DoublyLinkedList {
	/**
	 * Creates an instance of DoublyLinkedList.
	 *
	 * @param {ListNode|null} head - Reference to the first node in the list.
	 * @param {ListNode|null} tail - Reference to the last node in the list.
	 */
	constructor(
		/** @public @type {ListNode|null} */ public head: ListNode | null,
		/** @public @type {ListNode|null} */ public tail: ListNode | null,
	) {}

	/**
	 * Adds a new ListNode containing the given value to the front of the list.
	 *
	 * @param {number} value - The value to add.
	 * @returns {void}
	 */
	public addFromFront(value: number): void {
		const newListNode = new ListNode(value, null, null);

		newListNode.next = this.head;

		if (this.head) this.head.prev = newListNode;
		else this.tail = newListNode;

		this.head = newListNode;
	}

	/**
	 * Adds a new ListNode containing the given value to the end of the list.
	 *
	 * @param {number} value - The value to add.
	 * @returns {void}
	 */
	public addFromEnd(value: number): void {
		const newListNode = new ListNode(value, null, null);

		newListNode.prev = this.tail;

		if (this.tail) this.tail.next = newListNode;
		else this.head = newListNode;

		this.tail = newListNode;
	}

	/**
	 * Removes and returns the ListNode at the front of the list.
	 *
	 * @returns {ListNode|null} The removed ListNode, or `null` if the list is empty.
	 */
	public removeFromFront(): ListNode | null {
		if (!this.head) return null;

		const removedListNode = this.head;

		this.head = this.head.next;

		if (this.head) this.head.prev = null;
		else this.tail = null;

		return removedListNode;
	}

	/**
	 * Removes and returns the ListNode at the end of the list.
	 *
	 * @returns {ListNode|null} The removed ListNode, or `null` if the list is empty.
	 */
	public removeFromEnd(): ListNode | null {
		if (!this.tail) return null;

		const removedListNode = this.tail;

		this.tail = this.tail.prev;

		if (this.tail) this.tail.next = null;
		else this.head = null;

		return removedListNode;
	}
}
