import type { ListNode } from "../list-node";

export function linkedListToArray(head: ListNode | null): number[] {
	const result: number[] = [];
	let current = head;
	while (current) {
		result.push(current.value);
		current = current.next;
	}

	return result;
}
