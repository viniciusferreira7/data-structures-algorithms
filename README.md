
# 🧠 Algorithms Playground

A collection of algorithm implementations in TypeScript with a focus on clarity, performance, and problem-solving patterns like **Two Pointers**, **Sliding Window**, **Binary Search**, **Recursion**, and more.

## 📁 Structure - Array

Each file contains:
- ✅ A problem statement
- 🔎 The algorithmic strategy used (e.g., two-pointers)
- 💻 TypeScript implementation
- 🧪 Unit tests using `bun:test`

---

### ✌️ Two Pointers

Two Pointers is a common strategy used to solve problems involving linear data structures like strings or arrays, where two indices scan the structure from different directions.

#### 🔁 Reverse Each Word In a Sentence

Reverses each word in a string **in-place**, keeping the word order intact.

#### Problem

> Given a string `s`, reverse the characters of each word individually.  
> Words are separated by single spaces.  
> There are no leading or trailing spaces.

##### Example 1

```

Input: "Let's take LeetCode contest"
Output: "s'teL ekat edoCteeL tsetnoc"

```

##### Example 2
```

Input: "Mr Ding"
Output: "rM gniD"

````

### Approach

- Split the string by spaces.
- For each word, use **two pointers** (`left` and `right`) to reverse it in-place.
- Join the words back into a string.

### Code

```ts
export function reverseWords(str: string): string {

  let left = 0, right = 0;

  let res = ''

  while(right < str.length){
    if(str[right] !== ' ')  right++

    else {
      for(let i = right; i >= left; i--)  res += str[i]

      right++

      left = right
    }
 
  }

  res += ' '

  for(let i = right - 1; i >= left; i--) {
     res += str[i]
  }
  
  return res.trim()
}
````

### Tests

```ts
import { describe, it, expect } from "bun:test";
import { reverseWords } from './reverse-words-in-a-string';

describe("reverse words", () => {
  it("should reverse each word in the sentence (example 1)", () => {
    const input = "Let's take LeetCode contest";
    const output = reverseWords(input);
    expect(output).toBe("s'teL ekat edoCteeL tsetnoc");
  });

  it("should reverse words correctly (example 2)", () => {
    const input = "Mr Ding";
    const output = reverseWords(input);
    expect(output).toBe("rM gniD");
  });

  it("should return an empty string when input is empty", () => {
    expect(reverseWords("")).toBe("");
  });

  it("should handle a single word", () => {
    expect(reverseWords("hello")).toBe("olleh");
  });
});
```

## 🛠️ Tech Stack

* Language: **TypeScript**
* Test Runner: **[Bun](https://bun.sh)** (`bun:test`)

---

## 📄 License

MIT License

