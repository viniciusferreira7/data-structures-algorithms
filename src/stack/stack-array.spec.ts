import { describe, expect, it } from "bun:test";
import { StackArray } from "./stack-array";

describe("StackArray", () => {
	describe("constructor", () => {
		it("should create a stack with maxLength", () => {
			const stack = new StackArray(10);

			expect(stack.size()).toBe(10);
		});

		it("should initialize array with indices", () => {
			const stack = new StackArray(3);

			expect(stack.size()).toBe(3);
		});

		it("should create stack with small maxLength", () => {
			const stack = new StackArray(1);

			expect(stack.size()).toBe(1);
		});

		it("should create stack with large maxLength", () => {
			const stack = new StackArray(100);

			expect(stack.size()).toBe(100);
		});
	});

	describe("add", () => {
		it("should add an item to the stack (LIFO)", () => {
			const stack = new StackArray(15);

			expect(stack.size()).toBe(15);

			stack.add(100);

			expect(stack.size()).toBe(16);
		});

		it("should add multiple items to the top", () => {
			const stack = new StackArray(12);
			const initialSize = stack.size();

			stack.add(10);
			stack.add(20);
			stack.add(30);

			expect(stack.size()).toBe(initialSize + 3);
		});

		it("should add items sequentially", () => {
			const stack = new StackArray(15);
			const initialSize = stack.size();

			stack.add(1);
			expect(stack.size()).toBe(initialSize + 1);

			stack.add(2);
			expect(stack.size()).toBe(initialSize + 2);

			stack.add(3);
			expect(stack.size()).toBe(initialSize + 3);
		});

		it("should add negative numbers", () => {
			const stack = new StackArray(12);
			const initialSize = stack.size();

			stack.add(-10);
			stack.add(-20);

			expect(stack.size()).toBe(initialSize + 2);
		});

		it("should add zero", () => {
			const stack = new StackArray(11);
			const initialSize = stack.size();

			stack.add(0);

			expect(stack.size()).toBe(initialSize + 1);
		});


		it("should add large numbers", () => {
			const stack = new StackArray(12);

			stack.add(1000000);
			stack.add(9999999);

			expect(stack.size()).toBe(14);
		});
	});

	describe("pop", () => {
		it("should return null when popping from empty stack", () => {
			const stack = new StackArray(0);

			const result = stack.pop();

			expect(result).toBeNull();
		});

		it("should remove and return the last added item (LIFO)", () => {
			const stack = new StackArray(10);

			stack.add(10);

			stack.add(20);

			stack.add(30);

			const result = stack.pop();

			expect(result).toBe(30);
			expect(stack.size()).toBe(12);
		});

		it("should pop items in LIFO order", () => {
			const stack = new StackArray(10);

			stack.add(100);
			stack.add(200);
			stack.add(300);

			expect(stack.pop()).toBe(300);
			expect(stack.pop()).toBe(200);
			expect(stack.pop()).toBe(100);
		});

		it("should pop initialization values after added items", () => {
			const stack = new StackArray(3);

			stack.add(10);

			expect(stack.pop()).toBe(10);
			expect(stack.pop()).toBe(2);
			expect(stack.pop()).toBe(1);
			expect(stack.pop()).toBe(0);
		});

		it("should reduce stack size after pop", () => {
			const stack = new StackArray(12);

			stack.add(10);
			stack.add(20);

			expect(stack.size()).toBe(14);
			stack.pop();
			expect(stack.size()).toBe(13);
			stack.pop();
			expect(stack.size()).toBe(12);
		});

		it("should return null when all items are popped", () => {
			const stack = new StackArray(1);

			stack.pop();
			const result = stack.pop();

			expect(result).toBeNull();
		});

		it("should handle popping negative numbers (LIFO)", () => {
			const stack = new StackArray(10);

			stack.add(-10);
			stack.add(-20);

			expect(stack.pop()).toBe(-20);
			expect(stack.pop()).toBe(-10);
		});

		it("should handle multiple pops", () => {
			const stack = new StackArray(10);

			stack.add(1);
			stack.add(2);
			stack.add(3);

			stack.pop();
			stack.pop();

			expect(stack.size()).toBe(11);
			expect(stack.pop()).toBe(1);
		});
	});

	describe("peek", () => {
		it("should return null when peeking at empty stack", () => {
			const stack = new StackArray(0);

			const result = stack.peek();

			expect(result).toBeNull();
		});

		it("should return the last added item without removing it", () => {
			const stack = new StackArray(10);

			stack.add(10);
			stack.add(20);
			stack.add(30);

			const result = stack.peek();

			expect(result).toBe(30);
			expect(stack.size()).toBe(13);
		});

		it("should peek multiple times without changing stack", () => {
			const stack = new StackArray(10);

			stack.add(100);

			expect(stack.peek()).toBe(100);
			expect(stack.peek()).toBe(100);
			expect(stack.peek()).toBe(100);
			expect(stack.size()).toBe(11);
		});

		it("should peek at top after pop", () => {
			const stack = new StackArray(10);

			stack.add(1);
			stack.add(2);
			stack.add(3);

			stack.pop();

			expect(stack.peek()).toBe(2);
		});

		it("should handle peeking negative numbers", () => {
			const stack = new StackArray(10);

			stack.add(-10);
			stack.add(-20);

			expect(stack.peek()).toBe(-20);
		});

		it("should peek at initialized values", () => {
			const stack = new StackArray(3);

			const result = stack.peek();

			expect(result).toBe(2);
		});
	});

	describe("size", () => {
		it("should return maxLength for initialized stack", () => {
			const stack = new StackArray(10);

			expect(stack.size()).toBe(10);
		});

		it("should return 0 for stack with maxLength 0", () => {
			const stack = new StackArray(0);

			expect(stack.size()).toBe(0);
		});

		it("should return correct size after adding items", () => {
			const stack = new StackArray(10);

			stack.add(10);
			expect(stack.size()).toBe(11);

			stack.add(20);
			expect(stack.size()).toBe(12);

			stack.add(30);
			expect(stack.size()).toBe(13);
		});

		it("should return correct size after popping items", () => {
			const stack = new StackArray(10);

			stack.add(10);
			stack.add(20);
			stack.add(30);

			stack.pop();
			expect(stack.size()).toBe(12);

			stack.pop();
			expect(stack.size()).toBe(11);
		});

		it("should track size through mixed operations", () => {
			const stack = new StackArray(10);

			stack.add(1);
			stack.add(2);
			expect(stack.size()).toBe(12);

			stack.pop();
			expect(stack.size()).toBe(11);

			stack.add(3);
			stack.add(4);
			expect(stack.size()).toBe(13);

			stack.peek();
			expect(stack.size()).toBe(13);
		});
	});

	describe("isEmpty", () => {
		it("should return false for initialized stack", () => {
			const stack = new StackArray(10);

			expect(stack.isEmpty()).toBe(false);
		});

		it("should return true for stack with maxLength 0", () => {
			const stack = new StackArray(0);

			expect(stack.isEmpty()).toBe(true);
		});

		it("should return true after popping all items", () => {
			const stack = new StackArray(2);

			stack.pop();
			stack.pop();

			expect(stack.isEmpty()).toBe(true);
		});

		it("should return false after adding to empty stack", () => {
			const stack = new StackArray(0);

			expect(stack.isEmpty()).toBe(true);

			stack.add(10);

			expect(stack.isEmpty()).toBe(false);
		});
	});

	describe("isFull", () => {
		it("should return true for initialized stack at maxLength", () => {
			const stack = new StackArray(10);

			expect(stack.isFull()).toBe(true);
		});

		it("should return true after adding to reach maxLength", () => {
			const stack = new StackArray(0);

			expect(stack.isFull()).toBe(true);
		});

		it("should return false after popping items", () => {
			const stack = new StackArray(10);

			expect(stack.isFull()).toBe(true);

			stack.pop();

			expect(stack.isFull()).toBe(false);
		});
	});

	describe("clear", () => {
		it("should remove all items from stack", () => {
			const stack = new StackArray(10);

			stack.clear();

			expect(stack.size()).toBe(0);
			expect(stack.isEmpty()).toBe(true);
		});

		it("should clear stack with added items", () => {
			const stack = new StackArray(5);

			stack.add(10);
			stack.add(20);

			stack.clear();

			expect(stack.size()).toBe(0);
			expect(stack.pop()).toBeNull();
		});

		it("should allow adding after clear", () => {
			const stack = new StackArray(10);

			stack.clear();
			stack.add(100);

			expect(stack.size()).toBe(1);
			expect(stack.peek()).toBe(100);
		});
	});

	describe("LIFO behavior", () => {
		it("should demonstrate Last In First Out", () => {
			const stack = new StackArray(15);

			stack.add(1);
			stack.add(2);
			stack.add(3);
			stack.add(4);
			stack.add(5);

			expect(stack.pop()).toBe(5);
			expect(stack.pop()).toBe(4);
			expect(stack.pop()).toBe(3);
			expect(stack.pop()).toBe(2);
			expect(stack.pop()).toBe(1);
		});

		it("should maintain LIFO with mixed operations", () => {
			const stack = new StackArray(15);

			stack.add(10);
			stack.add(20);
			expect(stack.pop()).toBe(20);

			stack.add(30);
			stack.add(40);
			expect(stack.pop()).toBe(40);
			expect(stack.pop()).toBe(30);
			expect(stack.pop()).toBe(10);
		});

		it("should peek at most recently added item", () => {
			const stack = new StackArray(15);

			stack.add(1);
			expect(stack.peek()).toBe(1);

			stack.add(2);
			expect(stack.peek()).toBe(2);

			stack.add(3);
			expect(stack.peek()).toBe(3);
		});
	});

	describe("combined operations", () => {
		it("should handle add and pop in sequence", () => {
			const stack = new StackArray(15);

			stack.add(10);
			stack.add(20);

			expect(stack.pop()).toBe(20);
			expect(stack.pop()).toBe(10);
		});

		it("should handle complex operation sequences", () => {
			const stack = new StackArray(20);

			stack.add(1);
			stack.add(2);
			stack.add(3);

			expect(stack.peek()).toBe(3);
			expect(stack.pop()).toBe(3);
			expect(stack.peek()).toBe(2);

			stack.add(4);
			expect(stack.peek()).toBe(4);
			expect(stack.pop()).toBe(4);
			expect(stack.pop()).toBe(2);
			expect(stack.pop()).toBe(1);
		});

		it("should handle alternating push and pop", () => {
			const stack = new StackArray(15);

			stack.add(1);
			expect(stack.pop()).toBe(1);

			stack.add(2);
			expect(stack.pop()).toBe(2);

			stack.add(3);
			expect(stack.pop()).toBe(3);
		});
	});
});
