// URL
// https://leetcode.com/problems/concatenation-of-array/

// INSTRUCTIONS
/*
Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

Specifically, ans is the concatenation of two nums arrays.

Return the array ans.

Example 1:

Input: nums = [1,2,1]
Output: [1,2,1,1,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
- ans = [1,2,1,1,2,1]

Example 2:

Input: nums = [1,3,2,1]
Output: [1,3,2,1,1,3,2,1]
Explanation: The array ans is formed as follows:
- ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
- ans = [1,3,2,1,1,3,2,1]

Constraints:

    n == nums.length
    1 <= n <= 1000
    1 <= nums[i] <= 1000

*/

// SOLUTION
/**
 * This function createas a new array where the original array is appended to itself.
 *
 * @param {number[]} numbers - The array of numbers to concatenate
 * @returns {number[]} A new array consisting of the original array concatenated with itself
*/
function concatArray(numbers) {
  const result = [];

  // Loop through the array of numbers twice
  for (let i = 0; i < 2; i++) {
    for (let number of numbers) {
      // Add each number to a new array
      result.push(number);
    }
  }

  return result;
}

// TEST
console.log(concatArray([]), []);
console.log(concatArray([1, 2, 3]), [1, 2, 3, 1, 2, 3]);
console.log(concatArray([1, 3, 2, 1]), [1, 3, 2, 1, 1, 3, 2, 1]);
