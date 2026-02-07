export class TrieNode {
	public children: Map<string, TrieNode>;
	public isEndOfWord: boolean;

	constructor() {
		this.children = new Map();
		this.isEndOfWord = false;
	}
}

export class Trie {
	public root: TrieNode;

	constructor() {
		this.root = new TrieNode();
	}

	public insert(word: string) {
		let node = this.root;

		for (const char of word) {
			if (!node.children.get(char)) {
				node.children.set(char, new TrieNode());
			}
			node = node.children.get(char)!;
		}

		node.isEndOfWord = true;
	}

	public search(word: string) {
		let node = this.root;

		for (const char of word) {
			if (!node.children.has(char)) {
				return false;
			}

			node = node.children.get(char)!;
		}

		return node.isEndOfWord;
	}

	public startWith(prefix: string) {
		let node = this.root;

		for (const char of prefix) {
			if (!node.children.has(char)) {
				return false;
			}

			node = node.children.get(char)!;
		}

		return true;
	}
}
