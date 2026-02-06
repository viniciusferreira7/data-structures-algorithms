export class MinHeap {
	private heap: number[];

	constructor() {
		this.heap = [];
	}

	private leftChild(index: number) {
		return index * 2 + 1;
	}

	private rightChild(index: number) {
		return index * 2 + 2;
	}

	private parent(index: number) {
		return Math.floor((index - 1) / 2);
	}

	private heapifyUp(index: number) {
		if (index === 0) return;

		const parentIndex = this.parent(index);

		if (this.heap[index] < this.heap[parentIndex]) {
			const temp = this.heap[parentIndex];

			this.heap[parentIndex] = this.heap[index];
			this.heap[index] = temp;

			this.heapifyUp(parentIndex);
		}
	}

	private heapifyDown(index: number) {
		const size = this.heap.length;

		const left = this.leftChild(index);
		const right = this.rightChild(index);

		let smallestItemIndex = index;

		if (left < size && this.heap[left] < this.heap[smallestItemIndex]) {
			smallestItemIndex = left;
		}

		if (right < size && this.heap[right] < this.heap[smallestItemIndex]) {
			smallestItemIndex = right;
		}

		if (smallestItemIndex !== index) {
			const temp = this.heap[index];

			this.heap[index] = this.heap[smallestItemIndex];
			this.heap[smallestItemIndex] = temp;

			this.heapifyDown(smallestItemIndex);
		}
	}

	public insert(value: number) {
		this.heap.push(value);

		this.heapifyUp(this.heap.length - 1);
	}

	public popMin() {
		if (this.heap.length === 0) return null;

		if (this.heap.length === 1) {
			return this.heap.pop();
		}

		const root = this.heap[0];

		const lastItem = this.heap.pop();

		if (lastItem) this.heap[0] = lastItem;

		this.heapifyDown(0);

		return root;
	}
}
