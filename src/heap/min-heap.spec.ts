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
});
