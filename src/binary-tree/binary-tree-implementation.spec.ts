import { describe, expect, it } from "bun:test";
import { BinaryNode, BinaryTree } from "./binary-tree-implementation";

describe("BinaryNode", () => {
	describe("constructor", () => {
		it("should create a node with a value and null children", () => {
			const node = new BinaryNode({
				value: 10,
				left: null,
				right: null,
			});

			expect(node.value).toBe(10);
			expect(node.left).toBeNull();
			expect(node.right).toBeNull();
		});

		it("should create a node with existing children", () => {
			const leftChild = new BinaryNode({
				value: 5,
				left: null,
				right: null,
			});
			const rightChild = new BinaryNode({
				value: 15,
				left: null,
				right: null,
			});
			const parent = new BinaryNode({
				value: 10,
				left: leftChild,
				right: rightChild,
			});

			expect(parent.value).toBe(10);
			expect(parent.left).toBe(leftChild);
			expect(parent.right).toBe(rightChild);
		});
	});

	describe("getters and setters", () => {
		it("should get the correct value", () => {
			const node = new BinaryNode({
				value: 42,
				left: null,
				right: null,
			});

			expect(node.value).toBe(42);
		});

		it("should set and get left child", () => {
			const parent = new BinaryNode({
				value: 10,
				left: null,
				right: null,
			});
			const leftChild = new BinaryNode({
				value: 5,
				left: null,
				right: null,
			});

			parent.left = leftChild;

			expect(parent.left).toBe(leftChild);
			expect(parent.left?.value).toBe(5);
		});

		it("should set and get right child", () => {
			const parent = new BinaryNode({
				value: 10,
				left: null,
				right: null,
			});
			const rightChild = new BinaryNode({
				value: 15,
				left: null,
				right: null,
			});

			parent.right = rightChild;

			expect(parent.right).toBe(rightChild);
			expect(parent.right?.value).toBe(15);
		});
	});
});

describe("BinaryTree", () => {
	describe("constructor", () => {
		it("should create an empty tree by default", () => {
			const tree = new BinaryTree();

			expect(tree).toBeDefined();
		});

		it("should create a tree with a root node", () => {
			const rootNode = new BinaryNode({
				value: 10,
				left: null,
				right: null,
			});
			const tree = new BinaryTree(rootNode);

			expect(tree).toBeDefined();
		});
	});

	describe("insert", () => {
		it("should insert a value into an empty tree", () => {
			const tree = new BinaryTree();

			tree.insert(10);

			const root = tree.getRoot();
			expect(root).not.toBeNull();
			expect(root?.value).toBe(10);
			expect(root?.left).toBeNull();
			expect(root?.right).toBeNull();
		});

		it("should insert smaller values to the left", () => {
			const tree = new BinaryTree();

			tree.insert(10);
			tree.insert(5);

			// The structure should be:
			//     10
			//    /
			//   5
			const root = tree.getRoot();
			expect(root?.value).toBe(10);
			expect(root?.left?.value).toBe(5);
			expect(root?.right).toBeNull();
		});

		it("should insert larger values to the right", () => {
			const tree = new BinaryTree();

			tree.insert(10);
			tree.insert(15);

			// The structure should be:
			//   10
			//     \
			//      15
			const root = tree.getRoot();
			expect(root?.value).toBe(10);
			expect(root?.left).toBeNull();
			expect(root?.right?.value).toBe(15);
		});

		it("should insert multiple values to the right creating a right chain", () => {
			const tree = new BinaryTree();

			tree.insert(10);
			tree.insert(15);
			tree.insert(20);
			tree.insert(25);

			// The structure should be:
			//   10
			//     \
			//      15
			//        \
			//         20
			//           \
			//            25
			const root = tree.getRoot();
			expect(root?.value).toBe(10);
			expect(root?.right?.value).toBe(15);
			expect(root?.right?.right?.value).toBe(20);
			expect(root?.right?.right?.right?.value).toBe(25);
		});

		it("should insert multiple smaller values creating a left chain", () => {
			const tree = new BinaryTree();

			tree.insert(10);
			tree.insert(8);
			tree.insert(6);
			tree.insert(4);

			// The structure should be:
			//     10
			//    /
			//   8
			//  /
			// 6
			// /
			// 4
			const root = tree.getRoot();
			expect(root?.value).toBe(10);
			expect(root?.left?.value).toBe(8);
			expect(root?.left?.left?.value).toBe(6);
			expect(root?.left?.left?.left?.value).toBe(4);
		});

		it("should handle inserting the same value multiple times", () => {
			const tree = new BinaryTree();

			tree.insert(10);
			tree.insert(10);
			tree.insert(10);

			// Duplicate values are ignored (not inserted)
			const root = tree.getRoot();
			expect(root?.value).toBe(10);
			expect(root?.left).toBeNull();
			expect(root?.right).toBeNull();
		});

		it("should insert multiple values in ascending order", () => {
			const tree = new BinaryTree();

			tree.insert(5);
			tree.insert(10);
			tree.insert(15);
			tree.insert(20);

			// The structure should be a right-skewed tree:
			//   5
			//    \
			//     10
			//       \
			//        15
			//          \
			//           20
			const root = tree.getRoot();
			expect(root?.value).toBe(5);
			expect(root?.right?.value).toBe(10);
			expect(root?.right?.right?.value).toBe(15);
			expect(root?.right?.right?.right?.value).toBe(20);
		});

		it("should insert multiple values in descending order", () => {
			const tree = new BinaryTree();

			tree.insert(20);
			tree.insert(15);
			tree.insert(10);
			tree.insert(5);

			// The structure should be a left-skewed tree:
			//     20
			//    /
			//   15
			//  /
			// 10
			// /
			// 5
			const root = tree.getRoot();
			expect(root?.value).toBe(20);
			expect(root?.left?.value).toBe(15);
			expect(root?.left?.left?.value).toBe(10);
			expect(root?.left?.left?.left?.value).toBe(5);
		});

		it("should insert values creating a balanced tree structure", () => {
			const tree = new BinaryTree();

			tree.insert(10);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(12);
			tree.insert(20);

			// The structure should be:
			//        10
			//       /  \
			//      5    15
			//     / \   / \
			//    3   7 12  20
			const root = tree.getRoot();
			expect(root?.value).toBe(10);
			expect(root?.left?.value).toBe(5);
			expect(root?.right?.value).toBe(15);
			expect(root?.left?.left?.value).toBe(3);
			expect(root?.left?.right?.value).toBe(7);
			expect(root?.right?.left?.value).toBe(12);
			expect(root?.right?.right?.value).toBe(20);
		});

		it("should handle inserting zero", () => {
			const tree = new BinaryTree();

			tree.insert(10);
			tree.insert(0);

			const root = tree.getRoot();
			expect(root?.value).toBe(10);
			expect(root?.left?.value).toBe(0);
		});

		it("should handle inserting negative numbers", () => {
			const tree = new BinaryTree();

			tree.insert(10);
			tree.insert(-5);
			tree.insert(-10);
			tree.insert(5);
			tree.insert(15);

			// The structure should be:
			//        10
			//       /  \
			//     -5    15
			//     /\
			//  -10  5
			const root = tree.getRoot();
			expect(root?.value).toBe(10);
			expect(root?.left?.value).toBe(-5);
			expect(root?.right?.value).toBe(15);
			expect(root?.left?.left?.value).toBe(-10);
			expect(root?.left?.right?.value).toBe(5);
		});

		it("should insert values with both left and right subtrees", () => {
			const tree = new BinaryTree();

			tree.insert(50);
			tree.insert(30);
			tree.insert(70);
			tree.insert(20);
			tree.insert(40);
			tree.insert(60);
			tree.insert(80);

			// The structure should be:
			//         50
			//        /  \
			//      30    70
			//     / \   / \
			//   20  40 60  80
			const root = tree.getRoot();
			expect(root?.value).toBe(50);
			expect(root?.left?.value).toBe(30);
			expect(root?.right?.value).toBe(70);
			expect(root?.left?.left?.value).toBe(20);
			expect(root?.left?.right?.value).toBe(40);
			expect(root?.right?.left?.value).toBe(60);
			expect(root?.right?.right?.value).toBe(80);
		});
	});

	describe("search", () => {
		it("should return false for an empty tree", () => {
			const tree = new BinaryTree();

			expect(tree.search(10)).toBe(false);
		});

		it("should find the root value", () => {
			const tree = new BinaryTree();
			tree.insert(10);

			expect(tree.search(10)).toBe(true);
		});

		it("should find a single value in left subtree", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(5);

			expect(tree.search(5)).toBe(true);
		});

		it("should find a single value in right subtree", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(15);

			expect(tree.search(15)).toBe(true);
		});

		it("should find multiple values in the left subtree", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(5);
			tree.insert(3);
			tree.insert(7);

			expect(tree.search(5)).toBe(true);
			expect(tree.search(3)).toBe(true);
			expect(tree.search(7)).toBe(true);
		});

		it("should find multiple values in the right subtree", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(15);
			tree.insert(12);
			tree.insert(20);

			expect(tree.search(15)).toBe(true);
			expect(tree.search(12)).toBe(true);
			expect(tree.search(20)).toBe(true);
		});

		it("should find values at different depths in left subtree", () => {
			const tree = new BinaryTree();
			tree.insert(50);
			tree.insert(30);
			tree.insert(20);
			tree.insert(10);
			tree.insert(25);

			expect(tree.search(30)).toBe(true);
			expect(tree.search(20)).toBe(true);
			expect(tree.search(10)).toBe(true);
			expect(tree.search(25)).toBe(true);
		});

		it("should find values at different depths in right subtree", () => {
			const tree = new BinaryTree();
			tree.insert(50);
			tree.insert(70);
			tree.insert(80);
			tree.insert(90);
			tree.insert(75);

			expect(tree.search(70)).toBe(true);
			expect(tree.search(80)).toBe(true);
			expect(tree.search(90)).toBe(true);
			expect(tree.search(75)).toBe(true);
		});

		it("should return false for values not in the tree", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);

			expect(tree.search(3)).toBe(false);
			expect(tree.search(7)).toBe(false);
			expect(tree.search(12)).toBe(false);
			expect(tree.search(20)).toBe(false);
		});

		it("should return false for values not in left subtree", () => {
			const tree = new BinaryTree();
			tree.insert(50);
			tree.insert(30);
			tree.insert(20);
			tree.insert(40);

			expect(tree.search(25)).toBe(false);
			expect(tree.search(15)).toBe(false);
			expect(tree.search(35)).toBe(false);
			expect(tree.search(45)).toBe(false);
		});

		it("should return false for values not in right subtree", () => {
			const tree = new BinaryTree();
			tree.insert(50);
			tree.insert(70);
			tree.insert(60);
			tree.insert(80);

			expect(tree.search(65)).toBe(false);
			expect(tree.search(55)).toBe(false);
			expect(tree.search(75)).toBe(false);
			expect(tree.search(85)).toBe(false);
		});

		it("should find all values in a balanced tree", () => {
			const tree = new BinaryTree();
			const values = [50, 30, 70, 20, 40, 60, 80];
			values.forEach((v) => tree.insert(v));

			values.forEach((v) => {
				expect(tree.search(v)).toBe(true);
			});
		});

		it("should find all values in a left-skewed tree", () => {
			const tree = new BinaryTree();
			const values = [50, 40, 30, 20, 10];
			values.forEach((v) => tree.insert(v));

			values.forEach((v) => {
				expect(tree.search(v)).toBe(true);
			});
		});

		it("should find all values in a right-skewed tree", () => {
			const tree = new BinaryTree();
			const values = [10, 20, 30, 40, 50];
			values.forEach((v) => tree.insert(v));

			values.forEach((v) => {
				expect(tree.search(v)).toBe(true);
			});
		});

		it("should handle searching for negative numbers", () => {
			const tree = new BinaryTree();
			tree.insert(0);
			tree.insert(-10);
			tree.insert(10);
			tree.insert(-5);
			tree.insert(5);

			expect(tree.search(-10)).toBe(true);
			expect(tree.search(-5)).toBe(true);
			expect(tree.search(0)).toBe(true);
			expect(tree.search(5)).toBe(true);
			expect(tree.search(10)).toBe(true);
		});

		it("should handle searching for zero", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(0);
			tree.insert(-5);

			expect(tree.search(0)).toBe(true);
		});

		it("should return false when searching for values in tree with single node", () => {
			const tree = new BinaryTree();
			tree.insert(10);

			expect(tree.search(5)).toBe(false);
			expect(tree.search(15)).toBe(false);
		});

		it("should find values in deeply nested left subtree", () => {
			const tree = new BinaryTree();
			tree.insert(100);
			tree.insert(80);
			tree.insert(60);
			tree.insert(40);
			tree.insert(20);
			tree.insert(10);

			expect(tree.search(80)).toBe(true);
			expect(tree.search(60)).toBe(true);
			expect(tree.search(40)).toBe(true);
			expect(tree.search(20)).toBe(true);
			expect(tree.search(10)).toBe(true);
		});

		it("should find values in deeply nested right subtree", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(20);
			tree.insert(40);
			tree.insert(60);
			tree.insert(80);
			tree.insert(100);

			expect(tree.search(20)).toBe(true);
			expect(tree.search(40)).toBe(true);
			expect(tree.search(60)).toBe(true);
			expect(tree.search(80)).toBe(true);
			expect(tree.search(100)).toBe(true);
		});

		it("should find values in complex tree with both subtrees", () => {
			const tree = new BinaryTree();
			// Create a more complex tree
			tree.insert(50);
			tree.insert(25);
			tree.insert(75);
			tree.insert(12);
			tree.insert(37);
			tree.insert(62);
			tree.insert(87);
			tree.insert(6);
			tree.insert(18);
			tree.insert(31);
			tree.insert(43);

			// Test finding values in various positions
			expect(tree.search(50)).toBe(true); // root
			expect(tree.search(25)).toBe(true); // left child of root
			expect(tree.search(75)).toBe(true); // right child of root
			expect(tree.search(12)).toBe(true); // left subtree level 2
			expect(tree.search(37)).toBe(true); // left subtree level 2
			expect(tree.search(62)).toBe(true); // right subtree level 2
			expect(tree.search(87)).toBe(true); // right subtree level 2
			expect(tree.search(6)).toBe(true); // left subtree level 3
			expect(tree.search(18)).toBe(true); // left subtree level 3
			expect(tree.search(31)).toBe(true); // left subtree level 3
			expect(tree.search(43)).toBe(true); // left subtree level 3
		});
	});

	describe("preOrderTraversal", () => {
		it("should return an empty array for an empty tree", () => {
			const tree = new BinaryTree();

			expect(tree.preOrderTraversal()).toEqual([]);
		});

		it("should return a single value for a tree with one node", () => {
			const tree = new BinaryTree();
			tree.insert(10);

			expect(tree.preOrderTraversal()).toEqual([10]);
		});

		it("should return values in pre-order (root, left, right)", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);

			// Tree structure:
			//     10
			//    /  \
			//   5    15
			// Pre-order: root first, then left subtree, then right subtree
			expect(tree.preOrderTraversal()).toEqual([10, 5, 15]);
		});

		it("should traverse complex balanced tree in pre-order", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(5);
			tree.insert(15);
			tree.insert(3);
			tree.insert(7);
			tree.insert(12);
			tree.insert(20);

			// Tree structure:
			//        10
			//       /  \
			//      5    15
			//     / \   / \
			//    3   7 12  20
			// Pre-order: 10, 5, 3, 7, 15, 12, 20
			expect(tree.preOrderTraversal()).toEqual([10, 5, 3, 7, 15, 12, 20]);
		});

		it("should handle left-skewed tree in pre-order", () => {
			const tree = new BinaryTree();
			tree.insert(50);
			tree.insert(40);
			tree.insert(30);
			tree.insert(20);
			tree.insert(10);

			// Tree structure (left-skewed):
			//     50
			//    /
			//   40
			//  /
			// 30
			// /
			// 20
			// /
			// 10
			// Pre-order: root first, then keep going left
			expect(tree.preOrderTraversal()).toEqual([50, 40, 30, 20, 10]);
		});

		it("should handle right-skewed tree in pre-order", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(20);
			tree.insert(30);
			tree.insert(40);
			tree.insert(50);

			// Tree structure (right-skewed):
			// 10
			//   \
			//    20
			//      \
			//       30
			//         \
			//          40
			//            \
			//             50
			// Pre-order: root first, then keep going right
			expect(tree.preOrderTraversal()).toEqual([10, 20, 30, 40, 50]);
		});

		it("should handle tree with only left children", () => {
			const tree = new BinaryTree();
			tree.insert(100);
			tree.insert(50);
			tree.insert(25);
			tree.insert(12);

			// Tree structure:
			//    100
			//    /
			//   50
			//  /
			// 25
			// /
			// 12
			expect(tree.preOrderTraversal()).toEqual([100, 50, 25, 12]);
		});

		it("should handle tree with only right children", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(20);
			tree.insert(30);
			tree.insert(40);

			// Tree structure:
			// 10
			//   \
			//    20
			//      \
			//       30
			//         \
			//          40
			expect(tree.preOrderTraversal()).toEqual([10, 20, 30, 40]);
		});

		it("should handle negative numbers in pre-order", () => {
			const tree = new BinaryTree();
			tree.insert(0);
			tree.insert(-10);
			tree.insert(10);
			tree.insert(-5);
			tree.insert(5);

			// Tree structure:
			//       0
			//      / \
			//   -10   10
			//     \   /
			//     -5  5
			// Pre-order: 0, -10, -5, 10, 5
			expect(tree.preOrderTraversal()).toEqual([0, -10, -5, 10, 5]);
		});

		it("should handle deeply nested tree in pre-order", () => {
			const tree = new BinaryTree();
			const values = [50, 30, 70, 20, 40, 60, 80, 10, 25, 35, 45];
			values.forEach((v) => tree.insert(v));

			// Tree structure:
			//           50
			//          /  \
			//        30    70
			//       / \    / \
			//     20  40  60  80
			//    / \  / \
			//  10 25 35 45
			// Pre-order: 50, 30, 20, 10, 25, 40, 35, 45, 70, 60, 80
			expect(tree.preOrderTraversal()).toEqual([
				50, 30, 20, 10, 25, 40, 35, 45, 70, 60, 80,
			]);
		});

		it("should handle asymmetric tree with more left nodes", () => {
			const tree = new BinaryTree();
			tree.insert(50);
			tree.insert(30);
			tree.insert(70);
			tree.insert(20);
			tree.insert(40);
			tree.insert(10);
			tree.insert(25);
			tree.insert(35);

			// Tree structure:
			//         50
			//        /  \
			//      30    70
			//     / \
			//   20  40
			//   / \  /
			// 10 25 35
			// Pre-order: 50, 30, 20, 10, 25, 40, 35, 70
			expect(tree.preOrderTraversal()).toEqual([
				50, 30, 20, 10, 25, 40, 35, 70,
			]);
		});

		it("should handle asymmetric tree with more right nodes", () => {
			const tree = new BinaryTree();
			tree.insert(50);
			tree.insert(30);
			tree.insert(70);
			tree.insert(60);
			tree.insert(80);
			tree.insert(65);
			tree.insert(75);
			tree.insert(90);

			// Tree structure:
			//       50
			//      /  \
			//    30    70
			//         / \
			//       60  80
			//         \  / \
			//        65 75 90
			// Pre-order: 50, 30, 70, 60, 65, 80, 75, 90
			expect(tree.preOrderTraversal()).toEqual([
				50, 30, 70, 60, 65, 80, 75, 90,
			]);
		});

		it("should handle complex multi-level tree", () => {
			const tree = new BinaryTree();
			tree.insert(50);
			tree.insert(25);
			tree.insert(75);
			tree.insert(12);
			tree.insert(37);
			tree.insert(62);
			tree.insert(87);
			tree.insert(6);
			tree.insert(18);
			tree.insert(31);
			tree.insert(43);

			// Tree structure:
			//           50
			//          /  \
			//        25    75
			//       / \    / \
			//     12  37  62  87
			//    / \  / \
			//   6 18 31 43
			// Pre-order: 50, 25, 12, 6, 18, 37, 31, 43, 75, 62, 87
			expect(tree.preOrderTraversal()).toEqual([
				50, 25, 12, 6, 18, 37, 31, 43, 75, 62, 87,
			]);
		});

		it("should handle tree with two nodes - left child", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(5);

			expect(tree.preOrderTraversal()).toEqual([10, 5]);
		});

		it("should handle tree with two nodes - right child", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(15);

			expect(tree.preOrderTraversal()).toEqual([10, 15]);
		});

		it("should handle tree with three levels on left side only", () => {
			const tree = new BinaryTree();
			tree.insert(30);
			tree.insert(20);
			tree.insert(10);
			tree.insert(25);

			// Tree structure:
			//     30
			//    /
			//   20
			//  / \
			// 10  25
			expect(tree.preOrderTraversal()).toEqual([30, 20, 10, 25]);
		});

		it("should handle tree with three levels on right side only", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(20);
			tree.insert(15);
			tree.insert(25);

			// Tree structure:
			// 10
			//   \
			//    20
			//   / \
			// 15  25
			expect(tree.preOrderTraversal()).toEqual([10, 20, 15, 25]);
		});

		it("should handle large balanced tree with 15 nodes", () => {
			const tree = new BinaryTree();
			const values = [
				50, 25, 75, 12, 37, 62, 87, 6, 18, 31, 43, 56, 68, 81, 93,
			];
			values.forEach((v) => tree.insert(v));

			// Tree structure (4 levels, perfectly balanced):
			//              50
			//           /      \
			//         25        75
			//        /  \      /  \
			//      12   37    62   87
			//     / \   / \   / \  / \
			//    6 18 31 43 56 68 81 93
			expect(tree.preOrderTraversal()).toEqual([
				50, 25, 12, 6, 18, 37, 31, 43, 75, 62, 56, 68, 87, 81, 93,
			]);
		});

		it("should handle zigzag pattern tree", () => {
			const tree = new BinaryTree();
			tree.insert(50);
			tree.insert(30);
			tree.insert(70);
			tree.insert(35);
			tree.insert(65);
			tree.insert(32);
			tree.insert(67);

			// Tree structure (zigzag - right of left, left of right):
			//       50
			//      /  \
			//    30    70
			//      \   /
			//      35 65
			//      /   \
			//    32     67
			expect(tree.preOrderTraversal()).toEqual([50, 30, 35, 32, 70, 65, 67]);
		});

		it("should handle deeply nested left path", () => {
			const tree = new BinaryTree();
			tree.insert(100);
			tree.insert(90);
			tree.insert(80);
			tree.insert(70);
			tree.insert(60);
			tree.insert(50);
			tree.insert(40);

			// 7 levels deep on left
			expect(tree.preOrderTraversal()).toEqual([100, 90, 80, 70, 60, 50, 40]);
		});

		it("should handle deeply nested right path", () => {
			const tree = new BinaryTree();
			tree.insert(10);
			tree.insert(20);
			tree.insert(30);
			tree.insert(40);
			tree.insert(50);
			tree.insert(60);
			tree.insert(70);

			// 7 levels deep on right
			expect(tree.preOrderTraversal()).toEqual([10, 20, 30, 40, 50, 60, 70]);
		});

		it("should handle mixed positive and negative values", () => {
			const tree = new BinaryTree();
			tree.insert(0);
			tree.insert(-20);
			tree.insert(20);
			tree.insert(-30);
			tree.insert(-10);
			tree.insert(10);
			tree.insert(30);
			tree.insert(-5);
			tree.insert(5);

			// Tree structure:
			//           0
			//        /     \
			//     -20       20
			//     / \       / \
			//  -30  -10   10  30
			//        /     \
			//      -5       5
			expect(tree.preOrderTraversal()).toEqual([
				0, -20, -30, -10, -5, 20, 10, 5, 30,
			]);
		});

		it("should handle sequential right insertions from left subtree", () => {
			const tree = new BinaryTree();
			tree.insert(50);
			tree.insert(30);
			tree.insert(70);
			tree.insert(40);
			tree.insert(45);
			tree.insert(47);

			// Tree structure:
			//     50
			//    /  \
			//  30    70
			//    \
			//    40
			//      \
			//      45
			//        \
			//        47
			expect(tree.preOrderTraversal()).toEqual([50, 30, 40, 45, 47, 70]);
		});

		it("should handle sequential left insertions from right subtree", () => {
			const tree = new BinaryTree();
			tree.insert(50);
			tree.insert(30);
			tree.insert(70);
			tree.insert(60);
			tree.insert(55);
			tree.insert(52);

			// Tree structure:
			//       50
			//      /  \
			//    30    70
			//          /
			//        60
			//        /
			//      55
			//      /
			//    52
			expect(tree.preOrderTraversal()).toEqual([50, 30, 70, 60, 55, 52]);
		});

		it("should handle complete binary tree (all levels filled)", () => {
			const tree = new BinaryTree();
			tree.insert(40);
			tree.insert(20);
			tree.insert(60);
			tree.insert(10);
			tree.insert(30);
			tree.insert(50);
			tree.insert(70);
			tree.insert(5);
			tree.insert(15);

			// Tree structure (complete):
			//          40
			//        /    \
			//      20      60
			//     / \     /  \
			//   10  30  50   70
			//   / \
			//  5  15
			expect(tree.preOrderTraversal()).toEqual([
				40, 20, 10, 5, 15, 30, 60, 50, 70,
			]);
		});

		it("should handle tree with only left child at each level", () => {
			const tree = new BinaryTree();
			tree.insert(80);
			tree.insert(60);
			tree.insert(40);
			tree.insert(20);

			// Tree structure:
			//   80
			//  /
			// 60
			// /
			// 40
			// /
			// 20
			expect(tree.preOrderTraversal()).toEqual([80, 60, 40, 20]);
		});

		it("should handle tree with only right child at each level", () => {
			const tree = new BinaryTree();
			tree.insert(20);
			tree.insert(40);
			tree.insert(60);
			tree.insert(80);

			// Tree structure:
			// 20
			//   \
			//   40
			//     \
			//     60
			//       \
			//       80
			expect(tree.preOrderTraversal()).toEqual([20, 40, 60, 80]);
		});

		it("should handle sparse left, dense right tree", () => {
			const tree = new BinaryTree();
			tree.insert(50);
			tree.insert(30);
			tree.insert(70);
			tree.insert(60);
			tree.insert(80);
			tree.insert(55);
			tree.insert(65);
			tree.insert(75);
			tree.insert(85);
			tree.insert(90);

			// Tree structure:
			//         50
			//        /  \
			//      30    70
			//           / \
			//         60  80
			//        / \  / \
			//      55 65 75 85
			//                \
			//                90
			expect(tree.preOrderTraversal()).toEqual([
				50, 30, 70, 60, 55, 65, 80, 75, 85, 90,
			]);
		});

		it("should handle dense left, sparse right tree", () => {
			const tree = new BinaryTree();
			tree.insert(50);
			tree.insert(30);
			tree.insert(70);
			tree.insert(20);
			tree.insert(40);
			tree.insert(10);
			tree.insert(25);
			tree.insert(35);
			tree.insert(45);
			tree.insert(5);

			// Tree structure:
			//          50
			//        /    \
			//      30      70
			//     / \
			//   20  40
			//   / \ / \
			// 10 25 35 45
			// /
			// 5
			expect(tree.preOrderTraversal()).toEqual([
				50, 30, 20, 10, 5, 25, 40, 35, 45, 70,
			]);
		});

		it("should handle alternating left-right deep insertions", () => {
			const tree = new BinaryTree();
			tree.insert(50);
			tree.insert(25);
			tree.insert(75);
			tree.insert(12);
			tree.insert(87);
			tree.insert(6);
			tree.insert(93);
			tree.insert(3);

			// Tree structure (alternates):
			//         50
			//        /  \
			//      25    75
			//     /        \
			//   12          87
			//   /             \
			//  6               93
			//  /
			// 3
			expect(tree.preOrderTraversal()).toEqual([50, 25, 12, 6, 3, 75, 87, 93]);
		});

		it("should handle tree with very small values", () => {
			const tree = new BinaryTree();
			tree.insert(5);
			tree.insert(3);
			tree.insert(7);
			tree.insert(1);
			tree.insert(4);
			tree.insert(6);
			tree.insert(9);
			tree.insert(2);

			// Tree structure:
			//       5
			//      / \
			//     3   7
			//    / \ / \
			//   1  4 6  9
			//    \
			//     2
			expect(tree.preOrderTraversal()).toEqual([5, 3, 1, 2, 4, 7, 6, 9]);
		});

		it("should handle tree with large values (thousands)", () => {
			const tree = new BinaryTree();
			tree.insert(5000);
			tree.insert(2500);
			tree.insert(7500);
			tree.insert(1250);
			tree.insert(3750);
			tree.insert(6250);
			tree.insert(8750);

			// Tree structure:
			//         5000
			//        /    \
			//     2500    7500
			//     /  \    /  \
			//  1250 3750 6250 8750
			expect(tree.preOrderTraversal()).toEqual([
				5000, 2500, 1250, 3750, 7500, 6250, 8750,
			]);
		});

		it("should handle tree with random insertion order", () => {
			const tree = new BinaryTree();
			const values = [45, 23, 67, 12, 89, 34, 56, 78, 90];
			values.forEach((v) => tree.insert(v));

			// Tree built from: [45, 23, 67, 12, 89, 34, 56, 78, 90]
			//         45
			//        /  \
			//      23    67
			//     / \     / \
			//   12  34  56  89
			//              /  \
			//            78   90
			expect(tree.preOrderTraversal()).toEqual([
				45, 23, 12, 34, 67, 56, 89, 78, 90,
			]);
		});
	});
});
