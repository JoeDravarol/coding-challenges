// URL
// https://leetcode.com/problems/longest-common-prefix/

// INSTRUCTIONS
/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.

Constraints:

    1 <= strs.length <= 200
    0 <= strs[i].length <= 200
    strs[i] consists of only lowercase English letters.

*/

// SOLUTION
/**
* This function finds the common prefix string amongs an array of strings
* 
* @param {string[]} strs - The array of strings to check
* @returns {string} The common prefix or empty string if no common prefix is found
*/
function longestCommonPrefix(strs) {
  let prefix = '';

  // Perform a vertical scan across the string
  for (let i = 0; i < strs[0].length; i++) {
    for (let str of strs) {
      // If any of the string character is not the same return the tracked result
      if (strs[0][i] !== str[i]) {
        return prefix;
      }
    }
    // Keep track of each prefix character that are the same
    prefix += strs[0][i];
  }

  return prefix;
}

// TESTCASES
console.log(longestCommonPrefix(['flower', 'flow', 'flight']), 'fl')
console.log(longestCommonPrefix(['dog', 'racercar', 'car']), '')
