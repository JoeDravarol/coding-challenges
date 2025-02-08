// URL
// https://neetcode.io/problems/is-palindrome

// INSTRUCTIONS
/*
Given a string s, return true if it is a palindrome, otherwise return false.

A palindrome is a string that reads the same forward and backward. It is also case-insensitive and ignores all non-alphanumeric characters.

Example 1:

Input: s = "Was it a car or a cat I saw?"

Output: true

Explanation: After considering only alphanumerical characters we have "wasitacaroracatisaw", which is a palindrome.

Example 2:

Input: s = "tab a cat"

Output: false

Explanation: "tabacat" is not a palindrome.

Constraints:

    1 <= s.length <= 1000
    s is made up of only printable ASCII characters.

*/

// SOLUTION
/**
* This functions check if a given string is a palindrome
*
* @params {string} s - The given string to check
* @returns {boolean} 
*/
function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;

  // while left pointer haven't meet right pointer
  while (left < right) {
    // Skip non alpha numerical characters
    while (!isAlphaNumerical(s[left])) {
      left++;
    }

    while (!isAlphaNumerical(s[right])) {
      right--;
    }

    // Check if characters are not palindrome
    if (s[left].toLowerCase() !== s[right].toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

/**
* This functions check if a given character is alpha numerical
* i.e: A-Z a-z 0-9
*
* @params {string} c - The given character to check
* @returns {boolean} 
*/
function isAlphaNumerical(c) {
  const charCode = c.charCodeAt(0);
  const isLowerAlpha = charCode >= 'a'.charCodeAt(0) && charCode <= 'z'.charCodeAt(0);
  const isUpperAlpha = charCode >= 'A'.charCodeAt(0) && charCode <= 'Z'.charCodeAt(0);
  const isNum = charCode >= '0'.charCodeAt(0) && charCode <= '9'.charCodeAt(0);

  return (isLowerAlpha || isUpperAlpha || isNum) ? true : false;

  // Better way to check for alpha num:
  // return (c >= 'A' && c <= 'Z' ||
  //   c >= 'a' && c <= 'z' ||
  //   c >= '0' && c <= '9');
}


// TESTCASES
console.log(isPalindrome('Was it a car or a cat I saw?'), true);
console.log(isPalindrome('tab a cat'), false);
