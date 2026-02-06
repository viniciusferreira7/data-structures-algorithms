export class Node {
	constructor(
		public value: number,
		public next: Node | null,
	) {}
}

export class StackLinkedList {
	private _size = 0;

	constructor(private top: Node | null) {}

	get size() {
		return this._size;
	}

	public push(value: number) {
		if (!this.top) {
			this.top = new Node(value, null);
		} else {
			const newNode = new Node(value, this.top);
			this.top = newNode;
		}

		this._size += 1;
	}

	public pop() {
		if (!this.top) return null;

		const popNode = this.top;
		this.top = popNode.next;
		this._size -= 1;

		return popNode.value;
	}

	public peek() {
		if (!this.top) return null;

		return this.top.value;
	}
}
