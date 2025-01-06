// URL
// https://neetcode.io/problems/duplicate-integer

// INSTRUCTIONS
/**
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true


Example 2:

Input: nums = [1, 2, 3, 4]

Output: false

*/

// SOLUTION
/**
* This function returns true if any value appears more than once in the given array input, otherwise return false.
*
* @param {number[]} nums - The array of numbers to check
* @return {boolean} A boolean value of whether the input has duplicate
*/
function hasDuplicate(nums) {
  // Keep track of the number that has appeared
  const numMap = {};

  // Check each number in the array
  for (let num of nums) {
    // If the number has already been tracked
    // return true
    if (num in numMap) {
      return true;
    }

    numMap[num] = 1;
  }

  return false;
}

// TESTCASES
console.log(hasDuplicate([1, 2, 3, 3]), true);
console.log(hasDuplicate([1.2, 3, 4]), false);
console.log(hasDuplicate([]), false);
