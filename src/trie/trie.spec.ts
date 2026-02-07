import { describe, expect, it } from "bun:test";
import { Trie, TrieNode } from "./trie";

describe("TrieNode", () => {
	it("should create a node with empty children and isEndOfWord false", () => {
		const node = new TrieNode();

		expect(node.children.size).toBe(0);
		expect(node.isEndOfWord).toBe(false);
	});
});

describe("Trie", () => {
	describe("insert", () => {
		it("should insert a single word", () => {
			const trie = new Trie();
			trie.insert("cat");

			const c = trie.root.children.get("c")!;
			const a = c.children.get("a")!;
			const t = a.children.get("t")!;

			expect(c).toBeDefined();
			expect(a).toBeDefined();
			expect(t).toBeDefined();
			expect(t.isEndOfWord).toBe(true);
		});

		it("should share prefixes between words", () => {
			const trie = new Trie();
			trie.insert("car");
			trie.insert("cat");

			const c = trie.root.children.get("c")!;
			const a = c.children.get("a")!;

			expect(a.children.size).toBe(2);
			expect(a.children.has("r")).toBe(true);
			expect(a.children.has("t")).toBe(true);
		});

		it("should mark intermediate nodes as end of word when applicable", () => {
			const trie = new Trie();
			trie.insert("car");
			trie.insert("cars");

			const r = trie.root.children.get("c")!.children.get("a")!.children.get("r")!;

			expect(r.isEndOfWord).toBe(true);
			expect(r.children.get("s")!.isEndOfWord).toBe(true);
		});

		it("should handle inserting an empty string", () => {
			const trie = new Trie();
			trie.insert("");

			expect(trie.root.isEndOfWord).toBe(true);
		});
	});

	describe("search", () => {
		it("should return true for an inserted word", () => {
			const trie = new Trie();
			trie.insert("hello");

			expect(trie.search("hello")).toBe(true);
		});

		it("should return false for a word that was not inserted", () => {
			const trie = new Trie();
			trie.insert("hello");

			expect(trie.search("world")).toBe(false);
		});

		it("should return false for a prefix that is not a complete word", () => {
			const trie = new Trie();
			trie.insert("hello");

			expect(trie.search("hel")).toBe(false);
		});

		it("should return false when searching in an empty trie", () => {
			const trie = new Trie();

			expect(trie.search("anything")).toBe(false);
		});

		it("should distinguish between similar words", () => {
			const trie = new Trie();
			trie.insert("bat");
			trie.insert("bath");

			expect(trie.search("bat")).toBe(true);
			expect(trie.search("bath")).toBe(true);
			expect(trie.search("ba")).toBe(false);
		});
	});
});
