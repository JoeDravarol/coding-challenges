// URL
// https://neetcode.io/problems/anagram-groups

// INSTRUCTIONS
/*
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

Example 2:

Input: strs = ["x"]

Output: [["x"]]

Example 3:

Input: strs = [""]

Output: [[""]]

Constraints:

    1 <= strs.length <= 1000.
    0 <= strs[i].length <= 100
    strs[i] is made up of lowercase English letters.
*/

// SOLUTION
/**
* This function group all anagrams from an array of strings together into sublists
*
* @param {string[]} strs - The array of strs to check
* @returns {string[][]} The sublists of grouped anagrams
*/
function groupAnagrams(strs) {
  const charsCountMap = {};

  for (let str of strs) {
    let totalAsciiValue = 0;

    for (let char of str) {
      // Ascii value of 'a' is 97 - formula: {Ascii Value} - 97 + 1
      // By subtracting 97 and adding 1 we will get the value from 1...26
      totalAsciiValue += char.charCodeAt() - 'a'.charCodeAt() + 1;
    }

    // Group the strings by the characters total ascii value i.e. a=97... z=122
    if (!charsCountMap[totalAsciiValue]) {
      charsCountMap[totalAsciiValue] = [];
    }

    charsCountMap[totalAsciiValue].push(str)
  }

  // Return the sublist of grouped anagrams
  return Object.values(charsCountMap);
}

// TESTCASES
console.log(groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']), [['hat'], ['act', 'cat'], ['stop', 'pots', 'tops']])
console.log(groupAnagrams(['x']), [['x']])
console.log(groupAnagrams(['']), [['']])
