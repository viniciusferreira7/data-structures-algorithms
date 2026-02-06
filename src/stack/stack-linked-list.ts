/** Node element for the linked list */
export class Node {
	constructor(
		public value: number,
		public next: Node | null,
	) {}
}

/** Stack implementation using a singly linked list (LIFO) */
export class StackLinkedList {
	private _size = 0;

	constructor(private top: Node | null) {}

	/** Returns the number of elements in the stack */
	get size() {
		return this._size;
	}

	/** Pushes a value onto the top of the stack */
	public push(value: number) {
		if (!this.top) {
			this.top = new Node(value, null);
		} else {
			const newNode = new Node(value, this.top);
			this.top = newNode;
		}

		this._size += 1;
	}

	/** Removes and returns the top value, or null if the stack is empty */
	public pop() {
		if (!this.top) return null;

		const popNode = this.top;
		this.top = popNode.next;
		this._size -= 1;

		return popNode.value;
	}

	/** Returns the top value without removing it, or null if the stack is empty */
	public peek() {
		if (!this.top) return null;

		return this.top.value;
	}
}
