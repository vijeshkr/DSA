/**
 * Given an array of integers arr[] in a circular fashion. 
 * Find the maximum subarray sum that we can get if we assume the array to be circular.
 * 
 */

class Solution {
    // Function to find maximum circular subarray sum.
    circularSubarraySum(arr) {
        let totalSum = 0;
        let currMaxSum = 0, currMinSum = 0;
        let maxSum = arr[0], minSum = arr[0];

        for (let i = 0; i < arr.length; i++) {

            currMaxSum = Math.max(currMaxSum + arr[i], arr[i]);
            maxSum = Math.max(maxSum, currMaxSum);

            currMinSum = Math.min(currMinSum + arr[i], arr[i]);
            minSum = Math.min(minSum, currMinSum);

            totalSum += arr[i];
        }

        let normalSum = maxSum;
        let circularSum = totalSum - minSum;

        if (minSum === totalSum)
            return normalSum;

        return Math.max(normalSum, circularSum);
    }
}

// Time Complexity O(n)
// Space Complexity O(1)
