/**
 * Properties for constructing a binary tree node
 */
interface BinaryNodeProps {
	/** The numeric value stored in the node */
	value: number;
	/** Reference to the left child node */
	left: BinaryNode | null;
	/** Reference to the right child node */
	right: BinaryNode | null;
}

/**
 * Represents a node in a binary tree
 */
export class BinaryNode {
	private props: BinaryNodeProps;

	/**
	 * Creates a new binary tree node
	 * @param props - The properties for the node including value and child references
	 */
	constructor(props: BinaryNodeProps) {
		this.props = props;
	}

	/**
	 * Gets the value stored in this node
	 * @returns The numeric value
	 */
	get value() {
		return this.props.value;
	}

	/**
	 * Gets the left child node
	 * @returns The left child node or null if none exists
	 */
	get left(): BinaryNode | null {
		return this.props.left;
	}

	/**
	 * Sets the left child node
	 * @param node - The node to set as the left child
	 */
	set left(node: BinaryNode) {
		this.props.left = node;
	}

	/**
	 * Gets the right child node
	 * @returns The right child node or null if none exists
	 */
	get right(): BinaryNode | null {
		return this.props.right;
	}

	/**
	 * Sets the right child node
	 * @param node - The node to set as the right child
	 */
	set right(node: BinaryNode) {
		this.props.right = node;
	}
}

/**
 * Represents a binary search tree data structure
 *
 * A binary search tree maintains the property that for each node,
 * all values in the left subtree are less than the node's value,
 * and all values in the right subtree are greater than or equal to the node's value.
 */
export class BinaryTree {
	/**
	 * Creates a new binary tree
	 * @param root - The root node of the tree, defaults to null for an empty tree
	 */
	constructor(private root: BinaryNode | null = null) {}

	/**
	 * Gets the root node of the tree
	 * @returns The root node or null if the tree is empty
	 */
	public getRoot(): BinaryNode | null {
		return this.root;
	}

	/**
	 * Inserts a new value into the binary search tree
	 *
	 * Values less than a node are inserted to the left,
	 * values greater than or equal to a node are inserted to the right.
	 *
	 * @param value - The numeric value to insert
	 */
	public insert(value: number) {
		if (!this.root) {
			this.root = new BinaryNode({
				value,
				left: null,
				right: null,
			});
		} else this.addInsertRecursive(value, this.root);
	}

	/**
	 * Recursively finds the correct position and inserts a value
	 *
	 * @param value - The value to insert
	 * @param currentNode - The current node being examined
	 */
	private addInsertRecursive(value: number, currentNode: BinaryNode) {
		if (value < currentNode.value) {
			if (!currentNode.left) {
				currentNode.left = new BinaryNode({
					value,
					left: null,
					right: null,
				});
			} else {
				this.addInsertRecursive(value, currentNode.left);
			}
		}

		if (value > currentNode.value) {
			if (!currentNode.right) {
				currentNode.right = new BinaryNode({
					value,
					left: null,
					right: null,
				});
			} else {
				this.addInsertRecursive(value, currentNode.right);
			}
		}
	}

	/**
	 * Searches for a value in the binary tree
	 * @param value - The value to search for
	 * @returns true if the value exists in the tree, false otherwise
	 */
	public search(value: number) {
		return this.searchRecursively(value, this.root);
	}

	/**
	 * Recursively searches for a value starting from a given node
	 * @param value - The value to search for
	 * @param currentNode - The node to start searching from
	 * @returns true if the value is found, false otherwise
	 */
	private searchRecursively(
		value: number,
		currentNode: BinaryNode | null,
	): boolean {
		if (!currentNode) return false;
		if (currentNode.value === value) return true;

		if (currentNode.value > value)
			return this.searchRecursively(value, currentNode.left);
		else return this.searchRecursively(value, currentNode.right);
	}

	/**
	 * Performs a pre-order traversal of the tree (root, left, right)
	 *
	 * Pre-order traversal visits nodes in the following order:
	 * 1. Visit the root node
	 * 2. Traverse the left subtree
	 * 3. Traverse the right subtree
	 *
	 * This traversal is useful for creating a copy of the tree or getting prefix expression.
	 *
	 * @returns An array of values in pre-order sequence
	 */
	public preOrderTraversal(): number[] {
		const result: number[] = [];

		this.preOrderTraversalRecursively(result, this.root);

		return result;
	}

	/**
	 * Recursively performs pre-order traversal
	 *
	 * @param result - Array to collect values in pre-order
	 * @param currentNode - The current node being visited
	 */
	private preOrderTraversalRecursively(
		result: number[],
		currentNode: BinaryNode | null,
	) {
		if (currentNode) {
			result.push(currentNode.value);
			this.preOrderTraversalRecursively(result, currentNode.left);
			this.preOrderTraversalRecursively(result, currentNode.right);
		}
	}

	/**
	 * Performs an in-order traversal of the tree (left, root, right)
	 *
	 * In-order traversal visits nodes in the following order:
	 * 1. Traverse the left subtree
	 * 2. Visit the root node
	 * 3. Traverse the right subtree
	 *
	 * For binary search trees, this produces values in sorted ascending order.
	 *
	 * @returns An array of values in sorted order (for BST)
	 */
	public inOrderTraversal(): number[] {
		const result: number[] = [];

		this.inOrderTraversalRecursively(result, this.root);

		return result;
	}

	/**
	 * Recursively performs in-order traversal
	 *
	 * @param result - Array to collect values in in-order
	 * @param currentNode - The current node being visited
	 */
	private inOrderTraversalRecursively(
		result: number[],
		currentNode: BinaryNode | null,
	) {
		if (currentNode) {
			this.inOrderTraversalRecursively(result, currentNode.left);
			result.push(currentNode.value);
			this.inOrderTraversalRecursively(result, currentNode.right);
		}
	}

	/**
	 * Performs a post-order traversal of the tree (left, right, root)
	 *
	 * Post-order traversal visits nodes in the following order:
	 * 1. Traverse the left subtree
	 * 2. Traverse the right subtree
	 * 3. Visit the root node
	 *
	 * Useful for deleting trees, calculating subtree properties, and postfix expressions.
	 *
	 * @returns An array of values in post-order sequence
	 */
	public postOrderTraversal(): number[] {
		const result: number[] = [];

		this.postOrderTraversalRecursively(result, this.root);

		return result;
	}

	/**
	 * Recursively performs post-order traversal
	 *
	 * @param result - Array to collect values in post-order
	 * @param currentNode - The current node being visited
	 */
	private postOrderTraversalRecursively(
		result: number[],
		currentNode: BinaryNode | null,
	) {
		if (currentNode) {
			this.postOrderTraversalRecursively(result, currentNode.left);
			this.postOrderTraversalRecursively(result, currentNode.right);
			result.push(currentNode.value);
		}
	}
}
