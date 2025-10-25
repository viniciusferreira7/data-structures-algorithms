# ⚠️ WIP

# 🧠 Algorithms Playground

A collection of algorithm implementations in **TypeScript**, focusing on clarity, performance, and well-known problem-solving patterns.

---

## 📚 Algorithms

### Array/Two Pointer Techniques
* [🔗 **Binary Search**](src/array/two-pointer/binary-search.ts) - Efficient searching in sorted arrays
* [🔗 **Exponential Search**](src/array/two-pointer/exponential-search.ts) - Finding range then binary search
* [🔗 **Reverse Words in String**](src/array/two-pointer/reverse-words-in-a-string.ts) - String manipulation using two pointers

### Sliding Window
* [🔗 **Maximum Length Substring**](src/array/two-pointer/sliding-window/maximum-length-substring-with-two-occurrences.ts) - Dynamic window optimization
* [🔗 **Contains Nearby Duplicate**](src/array/two-pointer/sliding-window/contains-nearby-duplicate.ts) - Window-based duplicate detection

### Hash Map Patterns
* [🔗 **Two Sum**](src/array/two-pointer/hash-map/two-sum.ts) - Finding pairs that sum to target

### Linked List Algorithms
* [🔗 **Reverse Linked List**](src/linked-list/reverse-linked-list.ts) - Iterative and recursive reversal
* [🔗 **Middle of the Linked List**](src/linked-list/middle-of-the-linked-list.ts) - Find middle node using slow-fast pointers
* [🔗 **Floyd Cycle Detection**](src/linked-list/floyd-cycle-detection.ts) - Detect cycles in linked lists
* [🔗 **Merge Two Sorted Lists**](src/linked-list/merge-two-sorted-lists.ts) - Merge sorted linked lists

### Data Structures
* [🔗 **Doubly Linked List**](src/linked-list/doubly-linked-list.ts) - Bidirectional linked list implementation
* [🔗 **List Node**](src/linked-list/list-node.ts) - Basic node structure for linked lists

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