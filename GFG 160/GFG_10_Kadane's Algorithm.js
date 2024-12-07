/**
 * Given an integer array arr[]. You need to find the maximum sum of a subarray.
 */

class Solution {
    // Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr) {
        let maxSum = -Infinity;
        let currentSum = 0;

        for (let i = 0; i < arr.length; i++) {
            currentSum = Math.max(arr[i], currentSum + arr[i]);
            maxSum = Math.max(maxSum, currentSum);
        }

        return maxSum;
    }
}

// Time Complexity O(n)
// Space Complexity O(1)