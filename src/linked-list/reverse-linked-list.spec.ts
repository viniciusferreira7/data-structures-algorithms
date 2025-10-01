import { describe, expect, it } from "bun:test";
import { reverseLinkedList } from "./reverse-linked-list";
import { arrayToLinkedList } from "./utils/array-to-linked-list";
import { linkedListToArray } from "./utils/linked-list-to-array";

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
