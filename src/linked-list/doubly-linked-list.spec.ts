import { describe, expect, it } from "bun:test";
import { DoublyLinkedList } from "./doubly-linked-list";

describe("doubly linked list", () => {
	it("should add a node at the front", () => {
		const list = new DoublyLinkedList(null, null);
		list.addFromFront(10);

		expect(list.head?.value).toBe(10);
		expect(list.tail?.value).toBe(10);
	});

	it("should add multiple nodes at the front", () => {
		const list = new DoublyLinkedList(null, null);
		list.addFromFront(10);
		list.addFromFront(20);

		expect(list.head?.value).toBe(20);
		expect(list.head?.next?.value).toBe(10);
		expect(list.tail?.value).toBe(10);
	});

	it("should add a node at the end", () => {
		const list = new DoublyLinkedList(null, null);
		list.addFromEnd(5);

		expect(list.head?.value).toBe(5);
		expect(list.tail?.value).toBe(5);
	});

	it("should add multiple nodes at the end", () => {
		const list = new DoublyLinkedList(null, null);
		list.addFromEnd(1);
		list.addFromEnd(2);
		list.addFromEnd(3);

		expect(list.head?.value).toBe(1);
		expect(list.tail?.value).toBe(3);
		expect(list.tail?.prev?.value).toBe(2);
	});

	it("should remove a node from the front", () => {
		const list = new DoublyLinkedList(null, null);
		list.addFromEnd(1);
		list.addFromEnd(2);

		const removed = list.removeFromFront();
		expect(removed?.value).toBe(1);
		expect(list.head?.value).toBe(2);
	});

	it("should remove a node from the end", () => {
		const list = new DoublyLinkedList(null, null);
		list.addFromEnd(1);
		list.addFromEnd(2);

		const removed = list.removeFromEnd();
		expect(removed?.value).toBe(2);
		expect(list.tail?.value).toBe(1);
	});

	it("should return null when removing from empty list", () => {
		const list = new DoublyLinkedList(null, null);

		expect(list.removeFromFront()).toBeNull();
		expect(list.removeFromEnd()).toBeNull();
	});

	it("should handle adding and removing in sequence", () => {
		const list = new DoublyLinkedList(null, null);
		list.addFromFront(1);
		list.addFromEnd(2);
		list.addFromFront(0);

		expect(list.head?.value).toBe(0);
		expect(list.tail?.value).toBe(2);

		const firstRemoved = list.removeFromFront();
		expect(firstRemoved?.value).toBe(0);

		const lastRemoved = list.removeFromEnd();
		expect(lastRemoved?.value).toBe(2);

		expect(list.head?.value).toBe(1);
		expect(list.tail?.value).toBe(1);
	});
});
