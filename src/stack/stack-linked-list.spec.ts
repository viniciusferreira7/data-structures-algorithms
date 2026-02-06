import { describe, expect, it } from "bun:test";
import { StackLinkedList } from "./stack-linked-list";

describe("StackLinkedList", () => {
	describe("constructor", () => {
		it("should create an empty stack", () => {
			const stack = new StackLinkedList(null);

			expect(stack.size).toBe(0);
		});
	});

	describe("push", () => {
		it("should add an item to an empty stack", () => {
			const stack = new StackLinkedList(null);

			stack.push(10);

			expect(stack.size).toBe(1);
		});

		it("should add multiple items to the stack", () => {
			const stack = new StackLinkedList(null);

			stack.push(10);
			stack.push(20);
			stack.push(30);

			expect(stack.size).toBe(3);
		});

		it("should add negative numbers", () => {
			const stack = new StackLinkedList(null);

			stack.push(-10);
			stack.push(-20);

			expect(stack.size).toBe(2);
		});

		it("should add zero", () => {
			const stack = new StackLinkedList(null);

			stack.push(0);

			expect(stack.size).toBe(1);
		});

		it("should add large numbers", () => {
			const stack = new StackLinkedList(null);

			stack.push(1000000);
			stack.push(9999999);

			expect(stack.size).toBe(2);
		});
	});

	describe("pop", () => {
		it("should return null when popping from empty stack", () => {
			const stack = new StackLinkedList(null);

			const result = stack.pop();

			expect(result).toBeNull();
		});

		it("should remove and return the last added item (LIFO)", () => {
			const stack = new StackLinkedList(null);

			stack.push(10);
			stack.push(20);
			stack.push(30);

			const result = stack.pop();

			expect(result).toBe(30);
			expect(stack.size).toBe(2);
		});

		it("should pop items in LIFO order", () => {
			const stack = new StackLinkedList(null);

			stack.push(100);
			stack.push(200);
			stack.push(300);

			expect(stack.pop()).toBe(300);
			expect(stack.pop()).toBe(200);
			expect(stack.pop()).toBe(100);
		});

		it("should reduce stack size after pop", () => {
			const stack = new StackLinkedList(null);

			stack.push(10);
			stack.push(20);

			expect(stack.size).toBe(2);
			stack.pop();
			expect(stack.size).toBe(1);
			stack.pop();
			expect(stack.size).toBe(0);
		});

		it("should return null when all items are popped", () => {
			const stack = new StackLinkedList(null);

			stack.push(1);
			stack.pop();

			const result = stack.pop();

			expect(result).toBeNull();
		});

		it("should handle popping negative numbers (LIFO)", () => {
			const stack = new StackLinkedList(null);

			stack.push(-10);
			stack.push(-20);

			expect(stack.pop()).toBe(-20);
			expect(stack.pop()).toBe(-10);
		});

		it("should handle multiple pops", () => {
			const stack = new StackLinkedList(null);

			stack.push(1);
			stack.push(2);
			stack.push(3);

			stack.pop();
			stack.pop();

			expect(stack.size).toBe(1);
			expect(stack.pop()).toBe(1);
		});
	});

	describe("peek", () => {
		it("should return null when peeking at empty stack", () => {
			const stack = new StackLinkedList(null);

			const result = stack.peek();

			expect(result).toBeNull();
		});

		it("should return the last added item without removing it", () => {
			const stack = new StackLinkedList(null);

			stack.push(10);
			stack.push(20);
			stack.push(30);

			const result = stack.peek();

			expect(result).toBe(30);
			expect(stack.size).toBe(3);
		});

		it("should peek multiple times without changing stack", () => {
			const stack = new StackLinkedList(null);

			stack.push(100);

			expect(stack.peek()).toBe(100);
			expect(stack.peek()).toBe(100);
			expect(stack.peek()).toBe(100);
			expect(stack.size).toBe(1);
		});

		it("should peek at top after pop", () => {
			const stack = new StackLinkedList(null);

			stack.push(1);
			stack.push(2);
			stack.push(3);

			stack.pop();

			expect(stack.peek()).toBe(2);
		});

		it("should handle peeking negative numbers", () => {
			const stack = new StackLinkedList(null);

			stack.push(-10);
			stack.push(-20);

			expect(stack.peek()).toBe(-20);
		});
	});

	describe("size", () => {
		it("should return 0 for empty stack", () => {
			const stack = new StackLinkedList(null);

			expect(stack.size).toBe(0);
		});

		it("should return correct size after pushing items", () => {
			const stack = new StackLinkedList(null);

			stack.push(10);
			expect(stack.size).toBe(1);

			stack.push(20);
			expect(stack.size).toBe(2);

			stack.push(30);
			expect(stack.size).toBe(3);
		});

		it("should return correct size after popping items", () => {
			const stack = new StackLinkedList(null);

			stack.push(10);
			stack.push(20);
			stack.push(30);

			stack.pop();
			expect(stack.size).toBe(2);

			stack.pop();
			expect(stack.size).toBe(1);
		});

		it("should track size through mixed operations", () => {
			const stack = new StackLinkedList(null);

			stack.push(1);
			stack.push(2);
			expect(stack.size).toBe(2);

			stack.pop();
			expect(stack.size).toBe(1);

			stack.push(3);
			stack.push(4);
			expect(stack.size).toBe(3);

			stack.peek();
			expect(stack.size).toBe(3);
		});
	});

	describe("LIFO behavior", () => {
		it("should demonstrate Last In First Out", () => {
			const stack = new StackLinkedList(null);

			stack.push(1);
			stack.push(2);
			stack.push(3);
			stack.push(4);
			stack.push(5);

			expect(stack.pop()).toBe(5);
			expect(stack.pop()).toBe(4);
			expect(stack.pop()).toBe(3);
			expect(stack.pop()).toBe(2);
			expect(stack.pop()).toBe(1);
		});

		it("should maintain LIFO with mixed operations", () => {
			const stack = new StackLinkedList(null);

			stack.push(10);
			stack.push(20);
			expect(stack.pop()).toBe(20);

			stack.push(30);
			stack.push(40);
			expect(stack.pop()).toBe(40);
			expect(stack.pop()).toBe(30);
			expect(stack.pop()).toBe(10);
		});

		it("should peek at most recently added item", () => {
			const stack = new StackLinkedList(null);

			stack.push(1);
			expect(stack.peek()).toBe(1);

			stack.push(2);
			expect(stack.peek()).toBe(2);

			stack.push(3);
			expect(stack.peek()).toBe(3);
		});
	});

	describe("combined operations", () => {
		it("should handle push and pop in sequence", () => {
			const stack = new StackLinkedList(null);

			stack.push(10);
			stack.push(20);

			expect(stack.pop()).toBe(20);
			expect(stack.pop()).toBe(10);
		});

		it("should handle complex operation sequences", () => {
			const stack = new StackLinkedList(null);

			stack.push(1);
			stack.push(2);
			stack.push(3);

			expect(stack.peek()).toBe(3);
			expect(stack.pop()).toBe(3);
			expect(stack.peek()).toBe(2);

			stack.push(4);
			expect(stack.peek()).toBe(4);
			expect(stack.pop()).toBe(4);
			expect(stack.pop()).toBe(2);
			expect(stack.pop()).toBe(1);
		});

		it("should handle alternating push and pop", () => {
			const stack = new StackLinkedList(null);

			stack.push(1);
			expect(stack.pop()).toBe(1);

			stack.push(2);
			expect(stack.pop()).toBe(2);

			stack.push(3);
			expect(stack.pop()).toBe(3);
		});
	});
});
