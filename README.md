# ⚠️ WIP


# 🧠 Algorithms Playground

A collection of algorithm implementations in **TypeScript**, focusing on clarity, performance, and well-known problem-solving patterns.

---

## 📚 Algorithms & Data Structures

### Sorting Algorithms
* [🔗 **Bubble Sort**](src/sorting/bubble-sort.ts) - Simple comparison-based sorting (O(n²) time, O(1) space)
* [🔗 **Quick Sort**](src/sorting/quick-sort.ts) - Efficient divide-and-conquer sorting (O(n log n) average)
* [🔗 **Merge Sort**](src/sorting/merge-sort.ts) - Stable divide-and-conquer sorting for linked lists (O(n log n) time, O(log n) space)

### Array & Searching Techniques

#### Binary Search Family
* [🔗 **Binary Search**](src/array/two-pointer/binary-search.ts) - Efficient searching in sorted arrays (O(log n))
* [🔗 **Exponential Search**](src/array/two-pointer/exponential-search.ts) - Find range then binary search

#### Two-Pointer Techniques
* [🔗 **Reverse Words in String**](src/array/two-pointer/reverse-words-in-a-string.ts) - String manipulation using two pointers

#### Hash Map Patterns
* [🔗 **Two Sum**](src/array/two-pointer/hash-map/two-sum.ts) - Find pairs that sum to target value

#### Sliding Window Patterns
* [🔗 **Maximum Length Substring**](src/array/two-pointer/sliding-window/maximum-length-substring-with-two-occurrences.ts) - Find max substring with at most 2 occurrences
* [🔗 **Contains Nearby Duplicate**](src/array/two-pointer/sliding-window/contains-nearby-duplicate.ts) - Detect duplicates within distance k

### Binary Algorithms
* [🔗 **Missing Number**](src/binary/missing-number.ts) - Find the missing number in array containing n distinct numbers in range [0, n] (O(n) time, O(1) space)

### Tree Data Structures

#### Binary Search Tree
* [🔗 **Binary Tree Implementation**](src/binary-tree/binary-tree-implementation.ts) - Binary search tree with insert, search, and traversal operations
  - Insert values maintaining BST property (O(log n) average, O(n) worst case)
  - Search for values efficiently (O(log n) average, O(n) worst case)
  - In-order traversal returning sorted values (O(n) time)
* [🔗 **Build Binary Tree from Traversals**](src/binary-tree/build-a-binary-tree-through-traverse.ts) - Reconstruct a binary tree from pre-order/post-order and in-order traversal sequences

### Stack Data Structures
* [🔗 **Stack (Array)**](src/stack/stack-array.ts) - Stack implementation using array with LIFO behavior (push, pop, peek, isFull, isEmpty)
* [🔗 **Stack (Linked List)**](src/stack/stack-linked-list.ts) - Stack implementation using singly linked list with LIFO behavior (push, pop, peek)

### Heap Data Structures
* [🔗 **Min Heap**](src/heap/min-heap.ts) - Min heap implementation with insert and popMin operations using heapify up/down (O(log n) insert/extract)

### Trie Data Structure
* [🔗 **Trie**](src/trie/trie.ts) - Prefix tree implementation with insert, search, and startsWith operations

### Linked List Algorithms & Data Structures

#### Core Data Structures
* [🔗 **List Node**](src/linked-list/list-node.ts) - Basic node structure for linked lists
* [🔗 **Doubly Linked List**](src/linked-list/doubly-linked-list.ts) - Bidirectional linked list with add/remove operations

#### Linked List Algorithms
* [🔗 **Reverse Linked List**](src/linked-list/reverse-linked-list.ts) - Reverse singly linked list in-place (O(n) time, O(1) space)
* [🔗 **Middle of Linked List**](src/linked-list/middle-of-the-linked-list.ts) - Find middle node using slow-fast pointer technique
* [🔗 **Floyd Cycle Detection**](src/linked-list/floyd-cycle-detection.ts) - Detect cycles using tortoise and hare algorithm
* [🔗 **Merge Two Sorted Lists**](src/linked-list/merge-two-sorted-lists.ts) - Merge sorted linked lists efficiently

#### Utilities
* [🔗 **Array to Linked List**](src/linked-list/utils/array-to-linked-list.ts) - Convert array to linked list
* [🔗 **Linked List to Array**](src/linked-list/utils/linked-list-to-array.ts) - Convert linked list to array

---

## 🛠 Tech Stack

* **TypeScript** - Type-safe algorithm implementations
* **Bun** - Fast JavaScript runtime and test runner
* **Biome** - Code formatting and linting

## 🚀 Getting Started

```bash
# Install dependencies
bun install

# Run all tests
bun test

# Run tests in watch mode
bun test --watch

# Format code
bunx biome format --write

# Lint code
bunx biome lint --write
```

---

## 📄 License

MIT License