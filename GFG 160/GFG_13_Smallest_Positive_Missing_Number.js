/**
 * You are given an integer array arr[]. 
 * Your task is to find the smallest positive number missing from the array.
 * 
 * Note: Positive number starts from 1. The array can have negative integers too.
 * 
 */

class Solution {
    // Function to find the smallest positive number missing from the array.
    missingNumber(arr) {
        let n = arr.length;

        for (let i = 0; i < n; i++) {
            while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
                let temp = arr[arr[i] - 1];
                arr[arr[i] - 1] = arr[i];
                arr[i] = temp;
            }
        }

        for (let i = 0; i < n; i++) {
            if (arr[i] !== i + 1) {
                return i + 1;
            }
        }

        return n + 1;
    }
}

// Time Complexity O(n)
// Space Complexity O(1)