/**
 * Finds the longest substring where each character appears at most twice.
 *
 * This function searches the input string to find the longest substring
 * such that no character appears more than two times within it.
 *
 * @param s - The input string to search within.
 * @returns The longest substring where every character occurs at most twice.
 *
 * @example
 * maximumLengthSubstringWithTwoOccurrences("aabbccddeeff");
 * // Returns: "aabbccddeeff" (entire string, all chars occur twice)
 *
 * @example
 * maximumLengthSubstringWithTwoOccurrences("aaabbbcc");
 * // Returns: "aabbcc" (each char max twice)
 *
 * @example
 * maximumLengthSubstringWithTwoOccurrences("abcde");
 * // Returns: "abcde" (all chars occur once)
 */
export function maximumLengthSubstringWithTwoOccurrences(s: string): string {
let l = 0, r = 0

const map = new Map()

let maxLength = 0 
  
while(r < s.length){
  if(!map.has(s[r])){
    map.set(s[r], 1)
  } else {
    map.set(s[r], map.get(s[r]) + 1)
  }

  while(map.get(s[r]) >= 3){
    map.set(s[l], map.get(s[l]) - 1)
    l++
  }

  maxLength = Math.max(maxLength, (r - l) + 1 )
  
 r++
}


 return s.substring(l, r)
}
