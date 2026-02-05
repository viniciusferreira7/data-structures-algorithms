import { describe, expect, it } from "bun:test";
import { arrayToLinkedList } from "../linked-list/utils/array-to-linked-list";
import { linkedListToArray } from "../linked-list/utils/linked-list-to-array";
import { mergeSort } from "./merge-sort";

describe("mergeSort", () => {
	it("should sort an unsorted linked list in ascending order", () => {
		const head = arrayToLinkedList([4, 2, 1, 3]);
		const sortedHead = mergeSort(head);
		const result = linkedListToArray(sortedHead);
		expect(result).toEqual([1, 2, 3, 4]);
	});

	it("should handle an already sorted linked list", () => {
		const head = arrayToLinkedList([1, 2, 3, 4]);
		const sortedHead = mergeSort(head);
		const result = linkedListToArray(sortedHead);
		expect(result).toEqual([1, 2, 3, 4]);
	});

	it("should handle a linked list with duplicate values", () => {
		const head = arrayToLinkedList([3, 1, 2, 1]);
		const sortedHead = mergeSort(head);
		const result = linkedListToArray(sortedHead);
		expect(result).toEqual([1, 1, 2, 3]);
	});

	it("should handle a linked list with negative numbers", () => {
		const head = arrayToLinkedList([-2, 5, 0, -1, 3]);
		const sortedHead = mergeSort(head);
		const result = linkedListToArray(sortedHead);
		expect(result).toEqual([-2, -1, 0, 3, 5]);
	});

	it("should handle an empty linked list", () => {
		const head = arrayToLinkedList([]);
		const sortedHead = mergeSort(head);
		const result = linkedListToArray(sortedHead);
		expect(result).toEqual([]);
	});

	it("should handle a single-node linked list", () => {
		const head = arrayToLinkedList([42]);
		const sortedHead = mergeSort(head);
		const result = linkedListToArray(sortedHead);
		expect(result).toEqual([42]);
	});

	it("should handle a linked list with two elements", () => {
		const head = arrayToLinkedList([2, 1]);
		const sortedHead = mergeSort(head);
		const result = linkedListToArray(sortedHead);
		expect(result).toEqual([1, 2]);
	});
});
