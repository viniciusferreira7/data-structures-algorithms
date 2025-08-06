
/**
 * Reverses each word in a given string while maintaining the original word order.
 *
 * Given a string `s`, this function reverses the characters of each word,
 * but keeps the order of the words unchanged.
 *
 * @param s - The input string containing one or more words separated by spaces.
 * @returns A new string with each word reversed in-place.
 *
 * @example
 * reverseWords("Let's take LeetCode contest");
 * // Returns: "s'teL ekat edoCteeL tsetnoc"
 *
 * @example
 * reverseWords("Mr Ding");
 * // Returns: "rM gniD"
 */
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
