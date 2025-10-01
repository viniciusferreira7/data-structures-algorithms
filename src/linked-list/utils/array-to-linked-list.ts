import { ListNode } from "../list-node";

export function arrayToLinkedList(values: number[]): ListNode | null {
	if (values.length === 0) return null;
	const head = new ListNode(values[0], null, null);
	let current = head;
	for (let i = 1; i < values.length; i++) {
		current.next = new ListNode(values[i], null, current);
		current = current.next;
	}
	return head;
}
