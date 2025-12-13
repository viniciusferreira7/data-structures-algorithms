import { ListNode } from "../linked-list/list-node";

/**
 * Finds the middle node of a linked list using the slow and fast pointer technique.
 *
 * This function uses two pointers: a slow pointer that moves one node at a time,
 * and a fast pointer that moves two nodes at a time. When the fast pointer reaches
 * the end of the list, the slow pointer will be at the middle node.
 *
 * This is particularly useful for the divide step in Merge Sort, where we need to
 * split the list into two halves.
 *
 * Time Complexity: O(n) where n is the number of nodes in the list.
 * Space Complexity: O(1) as we only use two pointers.
 *
 * @param head - The head node of the linked list.
 * @returns The middle node of the linked list. For lists with even length,
 *          returns the first node of the second half.
 *
 * @example
 * // For a list: 1 -> 2 -> 3 -> 4 -> 5
 * // Returns node with value 3
 * const middle = findMiddle(head);
 *
 * @example
 * // For a list: 1 -> 2 -> 3 -> 4
 * // Returns node with value 2
 * const middle = findMiddle(head);
 */
function findMiddle(head: ListNode) {
	let slow: ListNode = head;
	let fast = head.next;

	while (fast && fast.next) {
		if (slow.next) {
			slow = slow.next;
		}
		fast = fast.next;
		fast = fast.next;
	}

	return slow;
}

/**
 * Merges two sorted linked lists into a single sorted linked list.
 *
 * This function takes two already-sorted linked lists and combines them into
 * one sorted list by comparing values from both lists and linking nodes in
 * ascending order. This is the "conquer" step of the Merge Sort algorithm.
 *
 * The function maintains both `next` and `prev` pointers for doubly linked lists.
 *
 * Time Complexity: O(n + m) where n and m are the lengths of the two lists.
 * Space Complexity: O(1) as we only rearrange existing nodes.
 *
 * @param list1 - The head of the first sorted linked list (or null).
 * @param list2 - The head of the second sorted linked list (or null).
 * @returns The head of the merged sorted linked list, or null if both inputs are null.
 *
 * @example
 * // Merging two sorted lists
 * // list1: 1 -> 3 -> 5
 * // list2: 2 -> 4 -> 6
 * // Result: 1 -> 2 -> 3 -> 4 -> 5 -> 6
 * const merged = mergeLinkedList(list1, list2);
 *
 * @example
 * // Merging with one empty list
 * // list1: 1 -> 2 -> 3
 * // list2: null
 * // Result: 1 -> 2 -> 3
 * const merged = mergeLinkedList(list1, null);
 */
function mergeLinkedList(list1: ListNode | null, list2: ListNode | null) {
	if (!list1 && !list2) return null;
	if (!list1) return list2;
	if (!list2) return list1;

	const head = new ListNode(0, null, null);
	let tail = head;

	let current1: ListNode | null = list1;
	let current2: ListNode | null = list2;

	while (current1 && current2) {
		if (current1.value < current2.value) {
			tail.next = current1;
			current1.prev = tail;

			tail = current1;
			current1 = current1.next;
		} else {
			tail.next = current2;
			current2.prev = tail;

			tail = current2;
			current2 = current2.next;
		}
	}

	if (current1) {
		tail.next = current1;

		if (current1) {
			current1.prev = tail;
		}
	} else if (current2) {
		tail.next = current2;

		if (current2) {
			current2.prev = tail;
		}
	}

	return head.next;
}

/**
 * Sorts a singly linked list in ascending order using the Merge Sort algorithm.
 *
 * Merge Sort is a divide-and-conquer algorithm that works by recursively splitting
 * the linked list into two halves, sorting each half, and then merging the sorted halves
 * into a fully ordered list.
 *
 * Diferente de arrays, o Merge Sort é especialmente eficiente para listas ligadas,
 * pois não requer acesso direto por índice e consegue dividir e mesclar listas
 * apenas manipulando ponteiros — resultando em um algoritmo muito performático.
 *
 * Este algoritmo sempre roda em **O(n log n)** para o tempo e em **O(log n)** de espaço
 * por conta da recursão (em listas ligadas não há necessidade de arrays auxiliares grandes).
 *
 * A função recebe o nó inicial da lista ligada e retorna a nova cabeça (head)
 * da lista já ordenada.
 *
 * @example
 * // Example 1: Sorting a linked list with unsorted values
 * // Input: 4 -> 2 -> 1 -> 3
 * // Output: 1 -> 2 -> 3 -> 4
 * const sortedHead = mergeSort(head);
 *
 * @example
 * // Example 2: Sorting an already sorted linked list
 * // Input: 1 -> 2 -> 3
 * // Output: 1 -> 2 -> 3
 * const sortedHead = mergeSort(head);
 *
 * @example
 * // Example 3: Sorting a linked list with duplicates
 * // Input: 3 -> 1 -> 2 -> 1
 * // Output: 1 -> 1 -> 2 -> 3
 * const sortedHead = mergeSort(head);
 *
 * @param linkedList - The head of the singly linked list to sort (or null if the list is empty).
 * @returns The head of the new linked list sorted in ascending order, or null if the input is null.
 */
export function mergeSort(head: ListNode | null): ListNode | null {
	if (!head || !head.next) return head;

	const middleNode = findMiddle(head);

	const afterMiddle = middleNode?.next;
	middleNode.next = null;

	let left = mergeSort(head);
	let right = mergeSort(afterMiddle);

	const linkedListSorted = mergeLinkedList(left, right);

	return linkedListSorted;
}
