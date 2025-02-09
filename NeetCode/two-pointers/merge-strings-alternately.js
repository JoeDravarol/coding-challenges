// URL
// https://leetcode.com/problems/merge-strings-alternately/description/

// INSTRUCTIONS
/*
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.

 

Example 1:

Input: word1 = "abc", word2 = "pqr"
Output: "apbqcr"
Explanation: The merged string will be merged as so:
word1:  a   b   c
word2:    p   q   r
merged: a p b q c r

Example 2:

Input: word1 = "ab", word2 = "pqrs"
Output: "apbqrs"
Explanation: Notice that as word2 is longer, "rs" is appended to the end.
word1:  a   b 
word2:    p   q   r   s
merged: a p b q   r   s

Example 3:

Input: word1 = "abcd", word2 = "pq"
Output: "apbqcd"
Explanation: Notice that as word1 is longer, "cd" is appended to the end.
word1:  a   b   c   d
word2:    p   q 
merged: a p b q c   d

 

Constraints:

    1 <= word1.length, word2.length <= 100
    word1 and word2 consist of lowercase English letters.
*/

// SOLUTION
/**
* This functions merge two strings by adding letters in alternating order, starting with word1
* If a string is longer than the other, it will append the additional letters onto the end of the merged string
*
* @param {string} word1
* @param {string} word2
* @returns {string} The merged string
*/
function mergeAlternately(word1, word2) {
  let i = 0;
  let j = 0;
  let result = '';

  // While word1 and word2 still has characters left
  while (i < word1.length && j < word2.length) {
    // Merge characters alternately
    result += word1[i] + word2[i];

    i++;
    j++;
  }

  // Append remaining characters
  return result + word1.slice(i) + word2.slice(j);
}

// TESTCASES
console.log(mergeAlternately('abc', 'pqr'), 'apbqcr');
console.log(mergeAlternately('ab', 'pqrs'), 'apbqrs');
console.log(mergeAlternately('abcd', 'pq'), 'apbqcd');
