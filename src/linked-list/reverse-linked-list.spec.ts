import { describe, expect, it } from "bun:test";
import { ListNode } from "./list-node";
import { reverseLinkedList } from "./reverse-linked-list";

function arrayToLinkedList(values: number[]): ListNode | null {
	if (values.length === 0) return null;
	const head = new ListNode(values[0], null, null);
	let current = head;
	for (let i = 1; i < values.length; i++) {
		current.next = new ListNode(values[i], null, current);
		current = current.next;
	}
	return head;
}

function linkedListToArray(head: ListNode | null): number[] {
	const result: number[] = [];
	let current = head;
	while (current) {
		result.push(current.value);
		current = current.next;
	}

	return result;
}

describe("reverseLinkedList", () => {
	it("should reverse a list with multiple nodes", () => {
		const head = arrayToLinkedList([1, 2, 3, 4, 5]);
		const reversed = reverseLinkedList(head);

		expect(linkedListToArray(reversed)).toEqual([5, 4, 3, 2, 1]);
	});

	it("should return the same node when list has one element", () => {
		const head = arrayToLinkedList([42]);
		const reversed = reverseLinkedList(head);

		expect(linkedListToArray(reversed)).toEqual([42]);
	});

	it("should return null when list is empty", () => {
		const head = arrayToLinkedList([]);
		const reversed = reverseLinkedList(head);

		expect(reversed).toBeNull();
	});

	it("should handle two elements correctly", () => {
		const head = arrayToLinkedList([10, 20]);
		const reversed = reverseLinkedList(head);

		expect(linkedListToArray(reversed)).toEqual([20, 10]);
	});
});
