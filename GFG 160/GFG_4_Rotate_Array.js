/**
 * Given an unsorted array arr[]. 
 * Rotate the array to the left (counter-clockwise direction) by d steps, 
 * where d is a positive integer. Do the mentioned change in the array in place.
 * 
 * Note: Consider the array as circular.
 */

class Solution {
    // Function to rotate an array by d elements in counter-clockwise direction.
    rotateArr(arr, d) {
        const n = arr.length;

        // If array is empty or k is 0 return same array
        if (n === 0 || d === 0) return arr;

        d %= n;

        // Reverse first d elements
        this.reverse(arr, 0, d - 1);

        // Reverse the remaining elements
        this.reverse(arr, d, n - 1);

        // Reverse the entire array
        this.reverse(arr, 0, n - 1);
    }

    // Helper method to reverse a portion of the array
    reverse(arr, start, end) {
        while (start < end) {
            let temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}

// Time Complexity O(n)
// Space Complexity O(1)