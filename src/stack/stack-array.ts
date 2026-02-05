/**
 * Stack implementation using array with LIFO (Last In, First Out) behavior
 */
export class StackArray {
	private items: number[] = [];

	/**
	 * Creates a new stack with specified maximum length
	 * Stack is initialized with indices [0, 1, 2, ..., maxLength-1]
	 * @param maxLength - Maximum capacity of the stack
	 */
	constructor(private maxLength: number) {
		this.items = Array.from({ length: maxLength }).map((_, index) => index);
	}

	/**
	 * Adds an item to the top of the stack (LIFO)
	 * @param item - The value to add to the stack
	 */
	public add(item: number): void {
		this.items.push(item);
	}

	/**
	 * Removes and returns the item from the top of the stack (LIFO)
	 * @returns The last item added, or null if stack is empty
	 */
	public pop(): number | null {
		if (this.size() === 0) {
			return null;
		}

		return this.items.pop() ?? null;
	}

	/**
	 * Returns the item at the top of the stack without removing it
	 * @returns The last item added, or null if stack is empty
	 */
	public peek(): number | null {
		if (this.size() === 0) {
			return null;
		}

		return this.items[this.size() - 1];
	}

	/**
	 * Returns the current number of items in the stack
	 * @returns The stack size
	 */
	public size(): number {
		return this.items.length;
	}

	/**
	 * Checks if the stack is empty
	 * @returns true if stack has no items, false otherwise
	 */
	public isEmpty(): boolean {
		return this.size() === 0;
	}

	/**
	 * Checks if the stack is full
	 * @returns true if stack has reached maxLength, false otherwise
	 */
	public isFull(): boolean {
		return this.size() >= this.maxLength;
	}

	/**
	 * Removes all items from the stack
	 */
	public clear(): void {
		this.items = [];
	}
}
