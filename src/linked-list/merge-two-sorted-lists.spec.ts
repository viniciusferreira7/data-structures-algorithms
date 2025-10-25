import { describe, expect, it } from "bun:test";
import { mergeTwoLists } from "./merge-two-sorted-lists";
import { arrayToLinkedList } from "./utils/array-to-linked-list";
import { linkedListToArray } from "./utils/linked-list-to-array";

describe("mergeTwoLists", () => {
	it("should merge two sorted linked lists", () => {
		const list1 = arrayToLinkedList([1, 2, 5, 6]);
		const list2 = arrayToLinkedList([1, 3, 4]);
		const merged = mergeTwoLists(list1, list2);

		expect(linkedListToArray(merged)).toEqual([1, 1, 2, 3, 4, 5, 6]);
	});

	it("should return an empty list when both lists are empty", () => {
		const list1 = arrayToLinkedList([]);
		const list2 = arrayToLinkedList([]);
		const merged = mergeTwoLists(list1, list2);

		expect(merged).toBeNull();
	});

	it("should return the non-empty list when one list is empty", () => {
		const list1 = arrayToLinkedList([]);
		const list2 = arrayToLinkedList([0]);
		const merged = mergeTwoLists(list1, list2);

		expect(linkedListToArray(merged)).toEqual([0]);
	});

	it("should correctly merge when lists have interleaved values", () => {
		const list1 = arrayToLinkedList([1, 3, 5]);
		const list2 = arrayToLinkedList([2, 4, 6]);
		const merged = mergeTwoLists(list1, list2);

		expect(linkedListToArray(merged)).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it("should correctly merge when all values in list1 are smaller than in list2", () => {
		const list1 = arrayToLinkedList([1, 2, 3]);
		const list2 = arrayToLinkedList([4, 5, 6]);
		const merged = mergeTwoLists(list1, list2);

		expect(linkedListToArray(merged)).toEqual([1, 2, 3, 4, 5, 6]);
	});
});
