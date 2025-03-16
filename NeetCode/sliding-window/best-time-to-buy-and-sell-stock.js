// URL
// https://neetcode.io/problems/buy-and-sell-crypto

// INSTRUCTIONS
/*
You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

Example 1:

Input: prices = [10,1,5,6,7,1]

Output: 6

Explanation: Buy prices[1] and sell prices[4], profit = 7 - 1 = 6.

Example 2:

Input: prices = [10,8,7,5,2]

Output: 0

Explanation: No profitable transactions can be made, thus the max profit is 0.

Constraints:

    1 <= prices.length <= 100
    0 <= prices[i] <= 100
*/

// SOLUTION
/**
*
* @param {number[]} prices
* @returns {number}
*/
function maxProfit(prices) {
  let maxProfit = 0;
  // Point at the lowest priceToBuy
  let l = 0;

  for (let r = 1; r < prices.length; r++) {
    // When priceToBuy is less than priceToSell
    if (prices[l] < prices[r]) {
      // Store the maxProfit
      const profit = prices[r] - prices[l];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      // When there is better priceToBuy re-assign left pointer
      l = r;
    }
  }

  return maxProfit;
}

// TESTCASES
console.log(maxProfit([10, 1, 5, 6, 7, 1]), 6);
console.log(maxProfit([10, 8, 7, 5, 2]), 0);
console.log(maxProfit([7, 1, 5, 3, 6, 4]), 5);
console.log(maxProfit([7, 6, 4, 3, 1]), 0);

