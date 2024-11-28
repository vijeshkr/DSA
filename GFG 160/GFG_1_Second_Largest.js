/**
 * Given an array of positive integers arr[], return the second largest element from the array. 
 * If the second largest element doesn't exist then return -1.
 * The second largest element should not be equal to the largest element.
 */

class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        let largest = -Infinity;
        let secondLargest = -Infinity;
        if (arr.length < 2) {
            return -1;
        }
        for (const num of arr) {
            if (num > largest) {
                secondLargest = largest;
                largest = num;
            } else if (num > secondLargest && num !== largest) {
                secondLargest = num;
            }
        }
        return secondLargest !== -Infinity ? secondLargest : -1;
    }
}

// Time Complexity O(n)
// Space Complexity O(1)