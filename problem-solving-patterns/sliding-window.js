// Naive solution
// function maxSubArraySum(arr, num) {
//     if (num > arr.length) {
//         return null
//     }
//     // If we had a sum that was negative numbers, biggest sum would still be negative
//     let max = -Infinity
//     for (let i = 0; i < arr.length - num + 1; i++) {
//         let temp = 0
//         for (let j = 0; j < num; j++) {
//             temp += arr[i+j]
//         }
//         if (temp > max) {
//             max = temp
//         }
//         console.log({ temp, max })
//     }
//     return max
// }

// Time complexity O(n^2)
// loop on line 7 has a conditional of i < arr.length - num + 1
// Because 5 is the last number where we can add 3 numbers together
// 5 + 6 + 3


// Refactored
// Time complexity of O(n)

// At the very beginning we sum together the first 3
// Keep a variable that has this total (2 + 6 + 9)
// For the next 3 digits (6, 9, 2) we don't need to recalculate the
// entire sum again, we just need to subtract arr[0] (2)
// and add the the next value at arr[3] which happens to be 2
function maxSubArraySum(arr, num) {
    let maxSum = 0
    let tempSum = 0
    if (arr.length < num) {
        return null
    }
    for (let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    // maxSum = 2 + 6 + 9 = 17
    tempSum = maxSum
    // now starting at arr[num] = 2
    for (let i = num; i < arr.length; i++) {
        // arr[i - num] subtracts the first value off
        // i - num = 3 - 3 = 0; arr[0] = 2
        // so 2 + 6 + 9 for example becomes 6 + 9
        // arr[i] adds on the next value in the array
        // arr[3] = 2
        // subtracting one value of the array out and one value of the array in
        tempSum = tempSum - arr[i - num] + arr[i]
        maxSum = Math.max(maxSum, tempSum)
        console.log({ tempSum, maxSum })
    }
    return maxSum
}

console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3))
