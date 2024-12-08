/**
 * Given an array arr[] that contains positive and negative integers (may contain 0 as well). 
 * Find the maximum product that we can get in a subarray of arr[].
 * 
 * Note: It is guaranteed that the output fits in a 32-bit integer.
 */

class Solution {
    maxProduct(arr) {
        let n = arr.length;

        let maxSoFar = arr[0];
        let currentMax = arr[0];
        let currentMin = arr[0];

        for (let i = 1; i < n; i++) {
            let num = arr[i];

            if (num < 0) {
                [currentMax, currentMin] = [currentMin, currentMax];
            }

            currentMax = Math.max(num, currentMax * num);
            currentMin = Math.min(num, currentMin * num);

            maxSoFar = Math.max(maxSoFar, currentMax);
        }

        return maxSoFar;
    }
}

// Time Complexity O(n)
// Space Complexity O(1)