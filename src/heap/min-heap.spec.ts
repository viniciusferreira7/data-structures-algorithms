import { describe, expect, it } from "bun:test";
import { MinHeap } from "./min-heap";

describe("MinHeap", () => {
	describe("constructor", () => {
		it("should create an empty heap", () => {
			const heap = new MinHeap();

			expect(heap.popMin()).toBeNull();
		});
	});

	describe("insert", () => {
		it("should insert a single value", () => {
			const heap = new MinHeap();

			heap.insert(10);

			expect(heap.popMin()).toBe(10);
		});

		it("should insert multiple values in ascending order", () => {
			const heap = new MinHeap();

			heap.insert(1);
			heap.insert(2);
			heap.insert(3);

			expect(heap.popMin()).toBe(1);
		});

		it("should insert multiple values in descending order and maintain min at root", () => {
			const heap = new MinHeap();

			heap.insert(30);
			heap.insert(20);
			heap.insert(10);

			expect(heap.popMin()).toBe(10);
		});

		it("should handle negative numbers", () => {
			const heap = new MinHeap();

			heap.insert(5);
			heap.insert(-3);
			heap.insert(10);

			expect(heap.popMin()).toBe(-3);
		});

		it("should handle zero", () => {
			const heap = new MinHeap();

			heap.insert(5);
			heap.insert(0);
			heap.insert(3);

			expect(heap.popMin()).toBe(0);
		});

		it("should handle duplicate values", () => {
			const heap = new MinHeap();

			heap.insert(5);
			heap.insert(5);
			heap.insert(5);

			expect(heap.popMin()).toBe(5);
			expect(heap.popMin()).toBe(5);
			expect(heap.popMin()).toBe(5);
		});
	});

	describe("popMin", () => {
		it("should return null when heap is empty", () => {
			const heap = new MinHeap();

			expect(heap.popMin()).toBeNull();
		});

		it("should return the only element and leave heap empty", () => {
			const heap = new MinHeap();

			heap.insert(42);

			expect(heap.popMin()).toBe(42);
			expect(heap.popMin()).toBeNull();
		});

		it("should return elements in ascending order", () => {
			const heap = new MinHeap();

			heap.insert(30);
			heap.insert(10);
			heap.insert(20);
			heap.insert(5);
			heap.insert(15);

			expect(heap.popMin()).toBe(5);
			expect(heap.popMin()).toBe(10);
			expect(heap.popMin()).toBe(15);
			expect(heap.popMin()).toBe(20);
			expect(heap.popMin()).toBe(30);
		});

		it("should return null after all elements are popped", () => {
			const heap = new MinHeap();

			heap.insert(1);
			heap.insert(2);

			heap.popMin();
			heap.popMin();

			expect(heap.popMin()).toBeNull();
		});

		it("should handle popping with negative numbers in order", () => {
			const heap = new MinHeap();

			heap.insert(-1);
			heap.insert(-5);
			heap.insert(-3);

			expect(heap.popMin()).toBe(-5);
			expect(heap.popMin()).toBe(-3);
			expect(heap.popMin()).toBe(-1);
		});

		it("should maintain heap property after multiple pops", () => {
			const heap = new MinHeap();

			heap.insert(8);
			heap.insert(4);
			heap.insert(6);
			heap.insert(2);
			heap.insert(10);
			heap.insert(1);

			expect(heap.popMin()).toBe(1);
			expect(heap.popMin()).toBe(2);
			expect(heap.popMin()).toBe(4);
			expect(heap.popMin()).toBe(6);
			expect(heap.popMin()).toBe(8);
			expect(heap.popMin()).toBe(10);
		});
	});

	describe("combined operations", () => {
		it("should handle interleaved inserts and pops", () => {
			const heap = new MinHeap();

			heap.insert(10);
			heap.insert(5);
			expect(heap.popMin()).toBe(5);

			heap.insert(3);
			heap.insert(8);
			expect(heap.popMin()).toBe(3);
			expect(heap.popMin()).toBe(8);
			expect(heap.popMin()).toBe(10);
		});

		it("should handle insert after popping all elements", () => {
			const heap = new MinHeap();

			heap.insert(1);
			heap.popMin();

			expect(heap.popMin()).toBeNull();

			heap.insert(2);

			expect(heap.popMin()).toBe(2);
		});

		it("should handle large number of elements", () => {
			const heap = new MinHeap();

			const values = [50, 30, 70, 10, 40, 60, 20, 80, 5, 90];

			for (const v of values) {
				heap.insert(v);
			}

			const sorted = [...values].sort((a, b) => a - b);

			for (const expected of sorted) {
				expect(heap.popMin()).toBe(expected);
			}
		});

		it("should pop min then insert smaller value", () => {
			const heap = new MinHeap();

			heap.insert(10);
			heap.insert(20);

			expect(heap.popMin()).toBe(10);

			heap.insert(5);

			expect(heap.popMin()).toBe(5);
			expect(heap.popMin()).toBe(20);
		});
	});

	describe("heap property validation", () => {
		it("should always return elements in sorted order regardless of insertion order", () => {
			const heap = new MinHeap();
			const values = [15, 10, 20, 17, 8, 25, 3, 12, 6, 1];

			for (const v of values) {
				heap.insert(v);
			}

			const results: number[] = [];
			let val = heap.popMin();
			while (val !== null) {
				results.push(val);
				val = heap.popMin();
			}

			expect(results).toEqual([1, 3, 6, 8, 10, 12, 15, 17, 20, 25]);
		});

		it("should handle inserting smallest element last", () => {
			const heap = new MinHeap();

			heap.insert(50);
			heap.insert(40);
			heap.insert(30);
			heap.insert(20);
			heap.insert(10);
			heap.insert(1);

			expect(heap.popMin()).toBe(1);
			expect(heap.popMin()).toBe(10);
			expect(heap.popMin()).toBe(20);
		});

		it("should handle inserting largest element first", () => {
			const heap = new MinHeap();

			heap.insert(100);
			heap.insert(1);
			heap.insert(50);
			heap.insert(25);
			heap.insert(75);

			expect(heap.popMin()).toBe(1);
			expect(heap.popMin()).toBe(25);
			expect(heap.popMin()).toBe(50);
			expect(heap.popMin()).toBe(75);
			expect(heap.popMin()).toBe(100);
		});

		it("should correctly heapify when minimum is in right subtree", () => {
			const heap = new MinHeap();

			heap.insert(10);
			heap.insert(20);
			heap.insert(5);

			expect(heap.popMin()).toBe(5);
			expect(heap.popMin()).toBe(10);
			expect(heap.popMin()).toBe(20);
		});

		it("should correctly heapify when minimum is in left subtree", () => {
			const heap = new MinHeap();

			heap.insert(10);
			heap.insert(5);
			heap.insert(20);

			expect(heap.popMin()).toBe(5);
			expect(heap.popMin()).toBe(10);
			expect(heap.popMin()).toBe(20);
		});

		it("should maintain order with three levels of heap", () => {
			const heap = new MinHeap();

			// Build a heap with at least 3 levels (7+ elements)
			heap.insert(50);
			heap.insert(30);
			heap.insert(70);
			heap.insert(20);
			heap.insert(40);
			heap.insert(60);
			heap.insert(80);

			expect(heap.popMin()).toBe(20);
			expect(heap.popMin()).toBe(30);
			expect(heap.popMin()).toBe(40);
			expect(heap.popMin()).toBe(50);
			expect(heap.popMin()).toBe(60);
			expect(heap.popMin()).toBe(70);
			expect(heap.popMin()).toBe(80);
		});

		it("should handle consecutive equal values mixed with different values", () => {
			const heap = new MinHeap();

			heap.insert(5);
			heap.insert(3);
			heap.insert(3);
			heap.insert(7);
			heap.insert(3);
			heap.insert(1);
			heap.insert(1);

			expect(heap.popMin()).toBe(1);
			expect(heap.popMin()).toBe(1);
			expect(heap.popMin()).toBe(3);
			expect(heap.popMin()).toBe(3);
			expect(heap.popMin()).toBe(3);
			expect(heap.popMin()).toBe(5);
			expect(heap.popMin()).toBe(7);
		});
	});

	describe("edge cases", () => {
		it("should handle two elements where second is smaller", () => {
			const heap = new MinHeap();

			heap.insert(10);
			heap.insert(5);

			expect(heap.popMin()).toBe(5);
			expect(heap.popMin()).toBe(10);
			expect(heap.popMin()).toBeNull();
		});

		it("should handle two elements where first is smaller", () => {
			const heap = new MinHeap();

			heap.insert(5);
			heap.insert(10);

			expect(heap.popMin()).toBe(5);
			expect(heap.popMin()).toBe(10);
			expect(heap.popMin()).toBeNull();
		});

		it("should handle alternating large and small values", () => {
			const heap = new MinHeap();

			heap.insert(100);
			heap.insert(1);
			heap.insert(99);
			heap.insert(2);
			heap.insert(98);
			heap.insert(3);

			expect(heap.popMin()).toBe(1);
			expect(heap.popMin()).toBe(2);
			expect(heap.popMin()).toBe(3);
			expect(heap.popMin()).toBe(98);
			expect(heap.popMin()).toBe(99);
			expect(heap.popMin()).toBe(100);
		});

		it("should handle very large numbers", () => {
			const heap = new MinHeap();

			heap.insert(Number.MAX_SAFE_INTEGER);
			heap.insert(Number.MAX_SAFE_INTEGER - 1);
			heap.insert(1);

			expect(heap.popMin()).toBe(1);
			expect(heap.popMin()).toBe(Number.MAX_SAFE_INTEGER - 1);
			expect(heap.popMin()).toBe(Number.MAX_SAFE_INTEGER);
		});

		it("should handle very small numbers", () => {
			const heap = new MinHeap();

			heap.insert(Number.MIN_SAFE_INTEGER);
			heap.insert(Number.MIN_SAFE_INTEGER + 1);
			heap.insert(-1);

			expect(heap.popMin()).toBe(Number.MIN_SAFE_INTEGER);
			expect(heap.popMin()).toBe(Number.MIN_SAFE_INTEGER + 1);
			expect(heap.popMin()).toBe(-1);
		});

		it("should handle mixed positive and negative with zero", () => {
			const heap = new MinHeap();

			heap.insert(5);
			heap.insert(-5);
			heap.insert(0);
			heap.insert(-10);
			heap.insert(10);

			expect(heap.popMin()).toBe(-10);
			expect(heap.popMin()).toBe(-5);
			expect(heap.popMin()).toBe(0);
			expect(heap.popMin()).toBe(5);
			expect(heap.popMin()).toBe(10);
		});
	});

	describe("stress tests", () => {
		it("should correctly sort 100 random elements", () => {
			const heap = new MinHeap();
			const values: number[] = [];

			for (let i = 0; i < 100; i++) {
				values.push(Math.floor(Math.random() * 1000));
			}

			for (const v of values) {
				heap.insert(v);
			}

			const sorted = [...values].sort((a, b) => a - b);
			const results: number[] = [];

			for (let i = 0; i < values.length; i++) {
				results.push(heap.popMin() as number);
			}

			expect(results).toEqual(sorted);
		});

		it("should handle 50 interleaved insert and pop operations", () => {
			const heap = new MinHeap();
			const inserted: number[] = [];
			const popped: number[] = [];

			// Insert 10 elements
			for (let i = 0; i < 10; i++) {
				const val = Math.floor(Math.random() * 100);
				heap.insert(val);
				inserted.push(val);
			}

			// Pop 5, insert 5, repeat
			for (let round = 0; round < 5; round++) {
				for (let i = 0; i < 5; i++) {
					const min = heap.popMin();
					if (min !== null) popped.push(min);
				}
				for (let i = 0; i < 5; i++) {
					const val = Math.floor(Math.random() * 100);
					heap.insert(val);
					inserted.push(val);
				}
			}

			// Pop remaining
			let val = heap.popMin();
			while (val !== null) {
				popped.push(val);
				val = heap.popMin();
			}

			// Verify we got all inserted values (same multiset)
			expect(popped.length).toBe(inserted.length);
			expect(popped.sort((a, b) => a - b)).toEqual(
				inserted.sort((a, b) => a - b),
			);
		});

		it("should handle sequential numbers 1 to 50 inserted in reverse order", () => {
			const heap = new MinHeap();

			for (let i = 50; i >= 1; i--) {
				heap.insert(i);
			}

			for (let expected = 1; expected <= 50; expected++) {
				expect(heap.popMin()).toBe(expected);
			}
		});

		it("should handle sequential numbers 1 to 50 inserted in order", () => {
			const heap = new MinHeap();

			for (let i = 1; i <= 50; i++) {
				heap.insert(i);
			}

			for (let expected = 1; expected <= 50; expected++) {
				expect(heap.popMin()).toBe(expected);
			}
		});
	});

	describe("heapify down edge cases", () => {
		it("should correctly choose smaller child when heapifying down", () => {
			const heap = new MinHeap();

			// Insert values that will create a specific structure
			// After pop, the last element needs to find correct position
			heap.insert(1);
			heap.insert(3);
			heap.insert(2);
			heap.insert(5);
			heap.insert(4);

			expect(heap.popMin()).toBe(1);
			expect(heap.popMin()).toBe(2);
			expect(heap.popMin()).toBe(3);
			expect(heap.popMin()).toBe(4);
			expect(heap.popMin()).toBe(5);
		});

		it("should handle heapify down when only left child exists", () => {
			const heap = new MinHeap();

			heap.insert(1);
			heap.insert(2);
			heap.insert(3);

			// After popping 1, we have [3, 2] -> should become [2, 3]
			expect(heap.popMin()).toBe(1);
			expect(heap.popMin()).toBe(2);
			expect(heap.popMin()).toBe(3);
		});

		it("should handle deep heapify down through multiple levels", () => {
			const heap = new MinHeap();

			// Create a heap with 15 elements (4 levels)
			const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
			for (const v of values) {
				heap.insert(v);
			}

			// Pop all and verify order
			for (let expected = 1; expected <= 15; expected++) {
				expect(heap.popMin()).toBe(expected);
			}
		});

		it("should correctly bubble down large value from root", () => {
			const heap = new MinHeap();

			heap.insert(2);
			heap.insert(4);
			heap.insert(3);
			heap.insert(8);
			heap.insert(6);
			heap.insert(5);
			heap.insert(7);

			// Heap structure: [2, 4, 3, 8, 6, 5, 7]
			// After pop(2): 7 goes to root, needs to bubble down
			expect(heap.popMin()).toBe(2);
			expect(heap.popMin()).toBe(3);
			expect(heap.popMin()).toBe(4);
			expect(heap.popMin()).toBe(5);
			expect(heap.popMin()).toBe(6);
			expect(heap.popMin()).toBe(7);
			expect(heap.popMin()).toBe(8);
		});
	});
});
