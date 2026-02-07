export class MinHeap {
	private heap: number[] = [];

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
		let current = index;

		while (current > 0) {
			const parentIndex = this.parent(current);

			if (this.heap[parentIndex] <= this.heap[current]) break;

			[this.heap[parentIndex], this.heap[current]] = [
				this.heap[current],
				this.heap[parentIndex],
			];

			current = parentIndex;
		}
	}

	private heapifyDown(index: number) {
		let currentIndex = index;
		const length = this.heap.length;

		while (true) {
			const leftIndex = this.leftChild(currentIndex);
			const rightIndex = this.rightChild(currentIndex);
			let smallest = currentIndex;

			if (leftIndex < length && this.heap[leftIndex] < this.heap[smallest]) {
				smallest = leftIndex;
			}

			if (rightIndex < length && this.heap[rightIndex] < this.heap[smallest]) {
				smallest = rightIndex;
			}

			if (smallest === currentIndex) break;

			[this.heap[currentIndex], this.heap[smallest]] = [
				this.heap[smallest],
				this.heap[currentIndex],
			];

			currentIndex = smallest;
		}
	}

	public insert(value: number) {
		this.heap.push(value);

		this.heapifyUp(this.heap.length - 1);
	}

	public popMin() {
		if (!this.heap.length) return null;

		const min = this.heap[0];
		const last = this.heap.pop()!;

		if (this.heap.length) {
			this.heap[0] = last;
			this.heapifyDown(0);
		}

		return min;
	}
}
