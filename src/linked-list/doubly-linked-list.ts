import { Node } from "./node";

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
	 * @param {Node|null} head - Reference to the first node in the list.
	 * @param {Node|null} tail - Reference to the last node in the list.
	 */
	constructor(
		/** @public @type {Node|null} */ public head: Node | null,
		/** @public @type {Node|null} */ public tail: Node | null,
	) {}

	/**
	 * Adds a new node containing the given value to the front of the list.
	 *
	 * @param {number} value - The value to add.
	 * @returns {void}
	 */
	public addFromFront(value: number): void {
		const newNode = new Node(value, null, null);

		newNode.next = this.head;

		if (this.head) this.head.prev = newNode;
		else this.tail = newNode;

		this.head = newNode;
	}

	/**
	 * Adds a new node containing the given value to the end of the list.
	 *
	 * @param {number} value - The value to add.
	 * @returns {void}
	 */
	public addFromEnd(value: number): void {
		const newNode = new Node(value, null, null);

		newNode.prev = this.tail;

		if (this.tail) this.tail.next = newNode;
		else this.head = newNode;

		this.tail = newNode;
	}

	/**
	 * Removes and returns the node at the front of the list.
	 *
	 * @returns {Node|null} The removed node, or `null` if the list is empty.
	 */
	public removeFromFront(): Node | null {
		if (!this.head) return null;

		const removedNode = this.head;

		this.head = this.head.next;

		if (this.head) this.head.prev = null;
		else this.tail = null;

		return removedNode;
	}

	/**
	 * Removes and returns the node at the end of the list.
	 *
	 * @returns {Node|null} The removed node, or `null` if the list is empty.
	 */
	public removeFromEnd(): Node | null {
		if (!this.tail) return null;

		const removedNode = this.tail;

		this.tail = this.tail.prev;

		if (this.tail) this.tail.next = null;
		else this.head = null;

		return removedNode;
	}
}
