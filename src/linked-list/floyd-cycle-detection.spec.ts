import { describe, expect, it } from "bun:test";
import { FloydCycleDetection } from "./floyd-cycle-detection";
import { arrayToLinkedList } from "./utils/array-to-linked-list";

/**
 * Helper function to create a singly linked list with a cycle.
 *
 * @param values - Array of node values to build the linked list.
 * @param pos - The index of the node that the last node should point to
 *              (use -1 if there is no cycle).
 * @returns The head of the linked list, possibly containing a cycle.
 */
function createCyclicLinkedList(values: number[], pos: number) {
	const head = arrayToLinkedList(values);
	if (!head || pos < 0) return head;

	let cycleNode: typeof head | null = null;
	let index = 0;

	let current = head;
	while (current.next) {
		if (index === pos) cycleNode = current;
		current = current.next;
		index++;
	}
	current.next = cycleNode;

	return head;
}

describe("FloydCycleDetection", () => {
	it("should detect a cycle in a list", () => {
		const head = createCyclicLinkedList([3, 2, 0, -4], 1);
		expect(FloydCycleDetection(head)).toBe(true);
	});

	it("should return false for a list without cycle", () => {
		const head = arrayToLinkedList([1, 2, 3, 4]);
		expect(FloydCycleDetection(head)).toBe(false);
	});

	it("should return false for an empty list", () => {
		const head = arrayToLinkedList([]);
		expect(FloydCycleDetection(head)).toBe(false);
	});

	it("should return false for a single-node list without cycle", () => {
		const head = arrayToLinkedList([42]);
		expect(FloydCycleDetection(head)).toBe(false);
	});

	it("should detect a cycle in a single-node list that points to itself", () => {
		const head = arrayToLinkedList([7]);
		if (head) head.next = head;
		expect(FloydCycleDetection(head)).toBe(true);
	});
});
