export class MinHeap {
	private heap: number[] = [];

	private left(index: number) {
		return index * 2 + 1;
	}
	private right(index: number) {
		return index * 2 + 2;
	}
	private parent(index: number) {
		return Math.floor((index - 1) / 2);
	}

	private heapifyUp(index: number) {
		let currentIdx = index;

		while (currentIdx > 0) {
			const parentIdx = this.parent(currentIdx);

			if (this.heap[parentIdx] <= this.heap[currentIdx]) break;

			[this.heap[parentIdx], this.heap[currentIdx]] = [
				this.heap[currentIdx],
				this.heap[parentIdx],
			];

			currentIdx = parentIdx;
		}
	}

	public insert(value: number) {
		this.heap.push(value);

		this.heapifyUp(this.heap.length - 1);
	}

	private heapifyDown(index: number) {
		let currentIdx = index;
		const length = this.heap.length;

		while (true) {
			const leftIdx = this.left(currentIdx);
			const rightIdx = this.right(currentIdx);

			let smallest = currentIdx;

			if (leftIdx < length && this.heap[leftIdx] < this.heap[smallest]) {
				smallest = leftIdx;
			}

			if (rightIdx < length && this.heap[rightIdx] < this.heap[smallest]) {
				smallest = rightIdx;
			}

			if (currentIdx === smallest) break;

			[this.heap[currentIdx], this.heap[smallest]] = [
				this.heap[smallest],
				this.heap[currentIdx],
			];

			currentIdx = smallest;
		}
	}

	public popMin() {
		if (this.heap.length === 0) return null;

		const root = this.heap[0];

		const lastItem = this.heap.pop();

		if (this.heap.length) {
			this.heap[0] = lastItem!;
			this.heapifyDown(0);
		}

		return root;
	}
}
