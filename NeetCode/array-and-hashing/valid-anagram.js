// URL
// https://neetcode.io/problems/is-anagram

// INSTRUCTIONS
/*
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true

Example 2:

Input: s = "jar", t = "jam"

Output: false

Constraints:

    s and t consist of lowercase English letters.
*/

// SOLUTION
/**
* This function checks whether two strings contains the exact same characters
*
* @param {string} s - The first string
* @param {string} t - The second string to compare to
* @returns {boolean} The boolean value of whether the strings isAnagram
*/
function isAnagram(s, t) {
  // Check whether the string are the same length to begin with
  if (s.length !== t.length) {
    return false;
  }

  // Track the character count of each string
  const countS = {};
  const countT = {};

  for (let i = 0; i < s.length; i++) {
    const totalCountS = countS[s[i]] || 0;
    const totalCountT = countT[t[i]] || 0;

    countS[s[i]] = totalCountS + 1;
    countT[t[i]] = totalCountT + 1;
  }

  // Compare a check whether the character count are equal
  for (let key in countS) {
    if (countS[key] !== countT[key]) {
      return false;
    }
  }

  return true;
}

// TESTCASES
console.log(isAnagram('racecar', 'carrace'), true);
console.log(isAnagram('jar', 'jam'), false);
console.log(isAnagram('', ''), true);
