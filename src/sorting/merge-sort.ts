import type { ListNode } from "../linked-list/list-node";

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
export function mergeSort(linkedList: ListNode | null): ListNode | null {
	return linkedList;
}
