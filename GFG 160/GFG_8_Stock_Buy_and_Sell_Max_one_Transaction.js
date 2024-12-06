/**
 * Given an array prices[] of length n, representing the prices of the stocks on different days. 
 * The task is to find the maximum profit possible by buying and selling the stocks on different days when at most one transaction is allowed. 
 * Here one transaction means 1 buy + 1 Sell. If it is not possible to make a profit then return 0.
 * 
 * Note: Stock must be bought before being sold.
 */

class Solution {
    // Function to find the maximum profit using the two-pointer method.
    maximumProfit(prices) {
        let left = 0;
        let right = 1;
        let maxProfit = 0;

        while (right < prices.length) {
            if (prices[right] < prices[left]) {
                left = right;
            } else {
                let profit = prices[right] - prices[left];
                maxProfit = Math.max(maxProfit, profit);
            }
            right++;
        }

        return maxProfit;
    }
}

// Time Complexity O(n)
// Space Complexity O(1)

