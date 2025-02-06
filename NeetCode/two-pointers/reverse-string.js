// URL
// https://leetcode.com/problems/reverse-string

// INSTRUCTIONS
/*
Write a function that reverses a string. The input string is given as an array of characters s.

You must do this by modifying the input array in-place with O(1) extra memory.

 

Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]

Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

 

Constraints:

    1 <= s.length <= 105
    s[i] is a printable ascii character.
*/

// SOLUTION
/**
* This functions reverse and array of characters in place
*
* @param {string[]} s - The array of characters to reverse
* @returns {void}
*/
function reverseString(s) {
  let left = 0;
  let right = s.length - 1;

  // While left pointer haven't meet right pointerr
  while (left < right) {
    // Swap character in place
    [s[left], s[right]] = [s[right], s[left]];

    left++;
    right--;
  }
}

// TESTCASES
const test1 = ["h", "e", "l", "l", "o"];
const test2 = ["H", "a", "n", "n", "a", "h"];

reverseString(test1);
reverseString(test2);

console.log(test1, ["o", "l", "l", "e", "h"]);
console.log(test2, ["h", "a", "n", "n", "a", "H"]);
