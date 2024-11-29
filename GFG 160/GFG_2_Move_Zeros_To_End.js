/**
 * Given an array arr[]. Push all the zeros of the given array to the right end of the array 
 * while maintaining the order of non-zero elements. Do the mentioned change in the array in place.
 */

class Solution {
    pushZerosToEnd(arr) {
        let nonZeroCount = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] !== 0) {
                arr[nonZeroCount] = arr[i];
                nonZeroCount++;
            }
        }

        while (nonZeroCount < arr.length) {
            arr[nonZeroCount] = 0;
            nonZeroCount++;
        }
    }
}

// Time Complexity O(n)
// Space Complexity O(1)