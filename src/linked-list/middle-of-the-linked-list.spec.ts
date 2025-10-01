import { describe, expect, it } from "bun:test";
import { middleOfTheLinkedList } from "./middle-of-the-linked-list";
import { arrayToLinkedList } from "./utils/array-to-linked-list";
import { linkedListToArray } from "./utils/linked-list-to-array";

describe("middleOfTheLinkedList", () => {
	it("should return the middle node in an odd-length list", () => {
		const head = arrayToLinkedList([1, 2, 3, 4, 5]);
		const middle = middleOfTheLinkedList(head);

		expect(linkedListToArray(middle)).toEqual([3, 4, 5]);
	});

	it("should return the second middle node in an even-length list", () => {
		const head = arrayToLinkedList([1, 2, 3, 4, 5, 6]);
		const middle = middleOfTheLinkedList(head);

		expect(linkedListToArray(middle)).toEqual([4, 5, 6]);
	});

	it("should return the same node when list has one element", () => {
		const head = arrayToLinkedList([42]);
		const middle = middleOfTheLinkedList(head);

		expect(linkedListToArray(middle)).toEqual([42]);
	});

	it("should return null when list is empty", () => {
		const head = arrayToLinkedList([]);
		const middle = middleOfTheLinkedList(head);

		expect(middle).toBeNull();
	});

	it("should return the second node when list has two elements", () => {
		const head = arrayToLinkedList([10, 20]);
		const middle = middleOfTheLinkedList(head);

		expect(linkedListToArray(middle)).toEqual([20]);
	});
});
