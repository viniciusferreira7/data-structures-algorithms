import { BinaryNode } from "./binary-tree-implementation";

/**
 * Builds a binary tree from pre-order and in-order traversal sequences
 *
 * Given two arrays representing the pre-order and in-order traversals of a binary tree,
 * this function reconstructs the original tree structure.
 *
 * Pre-order traversal: root, left, right
 * In-order traversal: left, root, right
 *
 * The first element in pre-order is always the root. Using this root, we can find its
 * position in the in-order array, which divides the tree into left and right subtrees.
 *
 * @param preorder - Array of values in pre-order traversal sequence
 * @param inorder - Array of values in in-order traversal sequence
 * @returns The root node of the reconstructed binary tree, or null if inputs are empty
 *
 * @example
 * ```typescript
 * const preorder = [3, 9, 20, 15, 7];
 * const inorder = [9, 3, 15, 20, 7];
 * const root = buildTreeFromPreorderAndInorder(preorder, inorder);
 * // Returns tree:
 * //     3
 * //    / \
 * //   9   20
 * //      /  \
 * //     15   7
 * ```
 */
export function buildTreeFromPreorderAndInorder(
	preorder: number[],
	inorder: number[],
): BinaryNode | null {
	// TODO: Implement this function
	return null;
}

/**
 * Builds a binary tree from post-order and in-order traversal sequences
 *
 * Given two arrays representing the post-order and in-order traversals of a binary tree,
 * this function reconstructs the original tree structure.
 *
 * Post-order traversal: left, right, root
 * In-order traversal: left, root, right
 *
 * The last element in post-order is always the root. Using this root, we can find its
 * position in the in-order array, which divides the tree into left and right subtrees.
 *
 * @param postorder - Array of values in post-order traversal sequence
 * @param inorder - Array of values in in-order traversal sequence
 * @returns The root node of the reconstructed binary tree, or null if inputs are empty
 *
 * @example
 * ```typescript
 * const postorder = [9, 15, 7, 20, 3];
 * const inorder = [9, 3, 15, 20, 7];
 * const root = buildTreeFromPostorderAndInorder(postorder, inorder);
 * // Returns tree:
 * //     3
 * //    / \
 * //   9   20
 * //      /  \
 * //     15   7
 * ```
 */
export function buildTreeFromPostorderAndInorder(
	postorder: number[],
	inorder: number[],
): BinaryNode | null {
	// TODO: Implement this function
	return null;
}
