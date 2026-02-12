import { describe, expect, it } from "bun:test";
import {
	buildTreeFromPostorderAndInorder,
	buildTreeFromPreorderAndInorder,
} from "./build-a-binary-tree-through-traverse";

describe.skip("buildTreeFromPreorderAndInorder", () => {
	it("should return null for empty arrays", () => {
		const result = buildTreeFromPreorderAndInorder([], []);

		expect(result).toBeNull();
	});

	it("should build a tree with single node", () => {
		const preorder = [1];
		const inorder = [1];

		const root = buildTreeFromPreorderAndInorder(preorder, inorder);

		expect(root).not.toBeNull();
		expect(root?.value).toBe(1);
		expect(root?.left).toBeNull();
		expect(root?.right).toBeNull();
	});

	it("should build a tree with root and left child", () => {
		const preorder = [2, 1];
		const inorder = [1, 2];

		// Tree structure:
		//   2
		//  /
		// 1
		const root = buildTreeFromPreorderAndInorder(preorder, inorder);

		expect(root?.value).toBe(2);
		expect(root?.left?.value).toBe(1);
		expect(root?.right).toBeNull();
	});

	it("should build a tree with root and right child", () => {
		const preorder = [1, 2];
		const inorder = [1, 2];

		// Tree structure:
		// 1
		//  \
		//   2
		const root = buildTreeFromPreorderAndInorder(preorder, inorder);

		expect(root?.value).toBe(1);
		expect(root?.left).toBeNull();
		expect(root?.right?.value).toBe(2);
	});

	it("should build a simple balanced tree", () => {
		const preorder = [2, 1, 3];
		const inorder = [1, 2, 3];

		// Tree structure:
		//   2
		//  / \
		// 1   3
		const root = buildTreeFromPreorderAndInorder(preorder, inorder);

		expect(root?.value).toBe(2);
		expect(root?.left?.value).toBe(1);
		expect(root?.right?.value).toBe(3);
	});

	it("should build a complex balanced tree", () => {
		const preorder = [3, 9, 20, 15, 7];
		const inorder = [9, 3, 15, 20, 7];

		// Tree structure:
		//     3
		//    / \
		//   9   20
		//      /  \
		//     15   7
		const root = buildTreeFromPreorderAndInorder(preorder, inorder);

		expect(root?.value).toBe(3);
		expect(root?.left?.value).toBe(9);
		expect(root?.left?.left).toBeNull();
		expect(root?.left?.right).toBeNull();
		expect(root?.right?.value).toBe(20);
		expect(root?.right?.left?.value).toBe(15);
		expect(root?.right?.right?.value).toBe(7);
	});

	it("should build a complete binary tree", () => {
		const preorder = [1, 2, 4, 5, 3, 6, 7];
		const inorder = [4, 2, 5, 1, 6, 3, 7];

		// Tree structure:
		//        1
		//       / \
		//      2   3
		//     / \ / \
		//    4  5 6  7
		const root = buildTreeFromPreorderAndInorder(preorder, inorder);

		expect(root?.value).toBe(1);
		expect(root?.left?.value).toBe(2);
		expect(root?.right?.value).toBe(3);
		expect(root?.left?.left?.value).toBe(4);
		expect(root?.left?.right?.value).toBe(5);
		expect(root?.right?.left?.value).toBe(6);
		expect(root?.right?.right?.value).toBe(7);
	});

	it("should build a left-skewed tree", () => {
		const preorder = [5, 4, 3, 2, 1];
		const inorder = [1, 2, 3, 4, 5];

		// Tree structure:
		//     5
		//    /
		//   4
		//  /
		// 3
		// /
		// 2
		// /
		// 1
		const root = buildTreeFromPreorderAndInorder(preorder, inorder);

		expect(root?.value).toBe(5);
		expect(root?.right).toBeNull();
		expect(root?.left?.value).toBe(4);
		expect(root?.left?.right).toBeNull();
		expect(root?.left?.left?.value).toBe(3);
		expect(root?.left?.left?.left?.value).toBe(2);
		expect(root?.left?.left?.left?.left?.value).toBe(1);
	});

	it("should build a right-skewed tree", () => {
		const preorder = [1, 2, 3, 4, 5];
		const inorder = [1, 2, 3, 4, 5];

		// Tree structure:
		// 1
		//  \
		//   2
		//    \
		//     3
		//      \
		//       4
		//        \
		//         5
		const root = buildTreeFromPreorderAndInorder(preorder, inorder);

		expect(root?.value).toBe(1);
		expect(root?.left).toBeNull();
		expect(root?.right?.value).toBe(2);
		expect(root?.right?.left).toBeNull();
		expect(root?.right?.right?.value).toBe(3);
		expect(root?.right?.right?.right?.value).toBe(4);
		expect(root?.right?.right?.right?.right?.value).toBe(5);
	});

	it("should build an asymmetric tree with more left nodes", () => {
		const preorder = [10, 5, 3, 7, 15];
		const inorder = [3, 5, 7, 10, 15];

		// Tree structure:
		//      10
		//     /  \
		//    5    15
		//   / \
		//  3   7
		const root = buildTreeFromPreorderAndInorder(preorder, inorder);

		expect(root?.value).toBe(10);
		expect(root?.left?.value).toBe(5);
		expect(root?.right?.value).toBe(15);
		expect(root?.left?.left?.value).toBe(3);
		expect(root?.left?.right?.value).toBe(7);
		expect(root?.right?.left).toBeNull();
		expect(root?.right?.right).toBeNull();
	});

	it("should build an asymmetric tree with more right nodes", () => {
		const preorder = [10, 5, 15, 12, 20];
		const inorder = [5, 10, 12, 15, 20];

		// Tree structure:
		//    10
		//   /  \
		//  5    15
		//       / \
		//     12  20
		const root = buildTreeFromPreorderAndInorder(preorder, inorder);

		expect(root?.value).toBe(10);
		expect(root?.left?.value).toBe(5);
		expect(root?.right?.value).toBe(15);
		expect(root?.left?.left).toBeNull();
		expect(root?.left?.right).toBeNull();
		expect(root?.right?.left?.value).toBe(12);
		expect(root?.right?.right?.value).toBe(20);
	});

	it("should handle negative numbers", () => {
		const preorder = [0, -10, -5, 10];
		const inorder = [-10, -5, 0, 10];

		// Tree structure:
		//       0
		//      / \
		//   -10   10
		//      \
		//      -5
		const root = buildTreeFromPreorderAndInorder(preorder, inorder);

		expect(root?.value).toBe(0);
		expect(root?.left?.value).toBe(-10);
		expect(root?.right?.value).toBe(10);
		expect(root?.left?.right?.value).toBe(-5);
	});

	it("should build a deeply nested tree", () => {
		const preorder = [50, 25, 12, 6, 18, 37, 75, 62, 87];
		const inorder = [6, 12, 18, 25, 37, 50, 62, 75, 87];

		// Tree structure:
		//         50
		//        /  \
		//      25    75
		//     / \    / \
		//   12  37  62  87
		//   / \
		//  6  18
		const root = buildTreeFromPreorderAndInorder(preorder, inorder);

		expect(root?.value).toBe(50);
		expect(root?.left?.value).toBe(25);
		expect(root?.right?.value).toBe(75);
		expect(root?.left?.left?.value).toBe(12);
		expect(root?.left?.right?.value).toBe(37);
		expect(root?.right?.left?.value).toBe(62);
		expect(root?.right?.right?.value).toBe(87);
		expect(root?.left?.left?.left?.value).toBe(6);
		expect(root?.left?.left?.right?.value).toBe(18);
	});
});

describe.skip("buildTreeFromPostorderAndInorder", () => {
	it("should return null for empty arrays", () => {
		const result = buildTreeFromPostorderAndInorder([], []);

		expect(result).toBeNull();
	});

	it("should build a tree with single node", () => {
		const postorder = [1];
		const inorder = [1];

		const root = buildTreeFromPostorderAndInorder(postorder, inorder);

		expect(root).not.toBeNull();
		expect(root?.value).toBe(1);
		expect(root?.left).toBeNull();
		expect(root?.right).toBeNull();
	});

	it("should build a tree with root and left child", () => {
		const postorder = [1, 2];
		const inorder = [1, 2];

		// Tree structure:
		//   2
		//  /
		// 1
		const root = buildTreeFromPostorderAndInorder(postorder, inorder);

		expect(root?.value).toBe(2);
		expect(root?.left?.value).toBe(1);
		expect(root?.right).toBeNull();
	});

	it("should build a tree with root and right child", () => {
		const postorder = [2, 1];
		const inorder = [1, 2];

		// Tree structure:
		// 1
		//  \
		//   2
		const root = buildTreeFromPostorderAndInorder(postorder, inorder);

		expect(root?.value).toBe(1);
		expect(root?.left).toBeNull();
		expect(root?.right?.value).toBe(2);
	});

	it("should build a simple balanced tree", () => {
		const postorder = [1, 3, 2];
		const inorder = [1, 2, 3];

		// Tree structure:
		//   2
		//  / \
		// 1   3
		const root = buildTreeFromPostorderAndInorder(postorder, inorder);

		expect(root?.value).toBe(2);
		expect(root?.left?.value).toBe(1);
		expect(root?.right?.value).toBe(3);
	});

	it("should build a complex balanced tree", () => {
		const postorder = [9, 15, 7, 20, 3];
		const inorder = [9, 3, 15, 20, 7];

		// Tree structure:
		//     3
		//    / \
		//   9   20
		//      /  \
		//     15   7
		const root = buildTreeFromPostorderAndInorder(postorder, inorder);

		expect(root?.value).toBe(3);
		expect(root?.left?.value).toBe(9);
		expect(root?.left?.left).toBeNull();
		expect(root?.left?.right).toBeNull();
		expect(root?.right?.value).toBe(20);
		expect(root?.right?.left?.value).toBe(15);
		expect(root?.right?.right?.value).toBe(7);
	});

	it("should build a complete binary tree", () => {
		const postorder = [4, 5, 2, 6, 7, 3, 1];
		const inorder = [4, 2, 5, 1, 6, 3, 7];

		// Tree structure:
		//        1
		//       / \
		//      2   3
		//     / \ / \
		//    4  5 6  7
		const root = buildTreeFromPostorderAndInorder(postorder, inorder);

		expect(root?.value).toBe(1);
		expect(root?.left?.value).toBe(2);
		expect(root?.right?.value).toBe(3);
		expect(root?.left?.left?.value).toBe(4);
		expect(root?.left?.right?.value).toBe(5);
		expect(root?.right?.left?.value).toBe(6);
		expect(root?.right?.right?.value).toBe(7);
	});

	it("should build a left-skewed tree", () => {
		const postorder = [1, 2, 3, 4, 5];
		const inorder = [1, 2, 3, 4, 5];

		// Tree structure:
		//     5
		//    /
		//   4
		//  /
		// 3
		// /
		// 2
		// /
		// 1
		const root = buildTreeFromPostorderAndInorder(postorder, inorder);

		expect(root?.value).toBe(5);
		expect(root?.right).toBeNull();
		expect(root?.left?.value).toBe(4);
		expect(root?.left?.right).toBeNull();
		expect(root?.left?.left?.value).toBe(3);
		expect(root?.left?.left?.left?.value).toBe(2);
		expect(root?.left?.left?.left?.left?.value).toBe(1);
	});

	it("should build a right-skewed tree", () => {
		const postorder = [5, 4, 3, 2, 1];
		const inorder = [1, 2, 3, 4, 5];

		// Tree structure:
		// 1
		//  \
		//   2
		//    \
		//     3
		//      \
		//       4
		//        \
		//         5
		const root = buildTreeFromPostorderAndInorder(postorder, inorder);

		expect(root?.value).toBe(1);
		expect(root?.left).toBeNull();
		expect(root?.right?.value).toBe(2);
		expect(root?.right?.left).toBeNull();
		expect(root?.right?.right?.value).toBe(3);
		expect(root?.right?.right?.right?.value).toBe(4);
		expect(root?.right?.right?.right?.right?.value).toBe(5);
	});

	it("should build an asymmetric tree with more left nodes", () => {
		const postorder = [3, 7, 5, 15, 10];
		const inorder = [3, 5, 7, 10, 15];

		// Tree structure:
		//      10
		//     /  \
		//    5    15
		//   / \
		//  3   7
		const root = buildTreeFromPostorderAndInorder(postorder, inorder);

		expect(root?.value).toBe(10);
		expect(root?.left?.value).toBe(5);
		expect(root?.right?.value).toBe(15);
		expect(root?.left?.left?.value).toBe(3);
		expect(root?.left?.right?.value).toBe(7);
		expect(root?.right?.left).toBeNull();
		expect(root?.right?.right).toBeNull();
	});

	it("should build an asymmetric tree with more right nodes", () => {
		const postorder = [5, 12, 20, 15, 10];
		const inorder = [5, 10, 12, 15, 20];

		// Tree structure:
		//    10
		//   /  \
		//  5    15
		//       / \
		//     12  20
		const root = buildTreeFromPostorderAndInorder(postorder, inorder);

		expect(root?.value).toBe(10);
		expect(root?.left?.value).toBe(5);
		expect(root?.right?.value).toBe(15);
		expect(root?.left?.left).toBeNull();
		expect(root?.left?.right).toBeNull();
		expect(root?.right?.left?.value).toBe(12);
		expect(root?.right?.right?.value).toBe(20);
	});

	it("should handle negative numbers", () => {
		const postorder = [-5, -10, 10, 0];
		const inorder = [-10, -5, 0, 10];

		// Tree structure:
		//       0
		//      / \
		//   -10   10
		//      \
		//      -5
		const root = buildTreeFromPostorderAndInorder(postorder, inorder);

		expect(root?.value).toBe(0);
		expect(root?.left?.value).toBe(-10);
		expect(root?.right?.value).toBe(10);
		expect(root?.left?.right?.value).toBe(-5);
	});

	it("should build a deeply nested tree", () => {
		const postorder = [6, 18, 12, 37, 25, 62, 87, 75, 50];
		const inorder = [6, 12, 18, 25, 37, 50, 62, 75, 87];

		// Tree structure:
		//         50
		//        /  \
		//      25    75
		//     / \    / \
		//   12  37  62  87
		//   / \
		//  6  18
		const root = buildTreeFromPostorderAndInorder(postorder, inorder);

		expect(root?.value).toBe(50);
		expect(root?.left?.value).toBe(25);
		expect(root?.right?.value).toBe(75);
		expect(root?.left?.left?.value).toBe(12);
		expect(root?.left?.right?.value).toBe(37);
		expect(root?.right?.left?.value).toBe(62);
		expect(root?.right?.right?.value).toBe(87);
		expect(root?.left?.left?.left?.value).toBe(6);
		expect(root?.left?.left?.right?.value).toBe(18);
	});

	it("should produce same tree as preorder+inorder for the same structure", () => {
		const inorder = [9, 3, 15, 20, 7];
		const postorder = [9, 15, 7, 20, 3];

		// Tree structure:
		//     3
		//    / \
		//   9   20
		//      /  \
		//     15   7
		const root = buildTreeFromPostorderAndInorder(postorder, inorder);

		// Verify it matches the expected structure
		expect(root?.value).toBe(3);
		expect(root?.left?.value).toBe(9);
		expect(root?.right?.value).toBe(20);
		expect(root?.right?.left?.value).toBe(15);
		expect(root?.right?.right?.value).toBe(7);
	});
});
