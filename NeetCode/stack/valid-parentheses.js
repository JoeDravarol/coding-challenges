// URL
// https://neetcode.io/problems/validate-parentheses

// INSTRUCTIONS
/*
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

    Every open bracket is closed by the same type of close bracket.
    Open brackets are closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

Return true if s is a valid string, and false otherwise.

Example 1:

Input: s = "[]"

Output: true

Example 2:

Input: s = "([{}])"

Output: true

Example 3:

Input: s = "[(])"

Output: false

Explanation: The brackets are not closed in the correct order.

Constraints:

    1 <= s.length <= 1000

*/

// SOLUTION
/**
*
* @param{string} s
* @returns {boolean}
*/
function isValid(s) {
  const openParentheses = [];
  const closeToOpen = {
    ']': '[',
    ')': '(',
    '}': '{',
  }

  for (let char of s) {
    const isOpenParen = !closeToOpen[char];
    const isCorrespondingBracket = closeToOpen[char] === openParentheses.at(-1);

    if (isOpenParen) {
      openParentheses.push(char);
    }

    if (isCorrespondingBracket) {
      openParentheses.pop();
    }
  }

  return openParentheses.length === 0;
}

// TESTCASES
console.log(isValid('[]'), true);
console.log(isValid('([{}])'), true);
console.log(isValid('[(])'), false);
