// URL
// https://leetcode.com/problems/valid-palindrome-ii/description/

// INSTRUCTIONS
/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

 

Example 1:

Input: s = "aba"
Output: true

Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Example 3:

Input: s = "abc"
Output: false
*/

// SOLUTION
/**
* This function check if a string can be palindrome after deleting at most on character from it
*
* @param {string} s
* @returns {boolean}
*/
function validPalindrome(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) {
      // Check if substring is a palindrome with left or right character removed
      return isPalindrome(s.slice(l + 1, r + 1)) || isPalindrome(s.slice(l, r));
    }

    l++;
    r--;
  }

  return true;
};

/**
* This function check if a string is a palindrome
*
* @param {string} s
* @returns {boolean}
*/
function isPalindrome(s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] !== s[r]) {
      return false
    }

    l++;
    r--;
  }

  return true;
}

// TESTCASES
console.log(validPalindrome('aba'), true);
console.log(validPalindrome('abca'), true);
console.log(validPalindrome('abc'), true);
