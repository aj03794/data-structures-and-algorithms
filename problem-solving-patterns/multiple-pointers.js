// naive solution

// function sumZero(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] + arr[j] === 0) {
//                 return [arr[i], arr[j]]
//             }
//         }
//     }
// }

// Time complexity O(n^2)
// Space complexity O(1)

// Refactor using multiple pointers pattern
// start pointer at -4 and 5 because they are the largest and smallest
// numbers respectively
// Move the 5 to the left (moving the 5 because -4 if the smallest we are going to get)
// so now it's -4 + 2 < 0, so move the left point to -3
// -3 + 2 < 0, so move -3 to -2
// -2 + 2 = 0, so you are finished
// return [-2, -2]
// time complexity of O(n)
// space complexity O(1)

function sumZero(arr) {
    let left = 0
    let right = arr.length - 1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {
            return [arr[left], arr[right]]
        }
        else if (sum > 0) {
            right--
        }
        else {
            left++
        }
    }
}

console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 5]))