// You are given an array of integers arr[]. Your task is to reverse the given array.

class Solution {
    // Function to reverse the array.
    reverseArray(arr) {
        let start = 0;
        let end = arr.length - 1;

        while (start < end) {
            let temp;
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
        }
    }
}

// Time Complexity O(n)
// Space Complexity O(1)

class Solution {
    // Function to reverse the array.
    reverseArray(arr) {

        for (let i = 0; i < arr.length / 2; i++) {
            let temp;
            temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
    }
}

// Time Complexity O(n)
// Space Complexity O(1)