/**
 * You are given an array of integer arr[] where each number represents a vote to a candidate. 
 * Return the candidates that have votes greater than one-third of the total votes, 
 * If there's not a majority vote, return an empty array. 
 * 
 * Note: The answer should be returned in an increasing format.
 */


class Solution {
    // Function to find the majority elements in the array
    findMajority(arr) {
        let n = arr.length;
        let freq = new Map();

        // Count frequency of each element
        for (let ele of arr) {
            freq.set(ele, (freq.get(ele) || 0) + 1);
        }

        let res = [];

        // Iterate over each key-value pair in the hash map
        for (let [ele, cnt] of freq) {
            // Add the element to the result if its frequency is greater than floor(n/3)
            if (cnt > n / 3) {
                res.push(ele);
            }
        }

        // Return the result
        return res.sort((a, b) => a - b);
    }
}

// Time Complexity O(n)
// Space Complexity O(n)