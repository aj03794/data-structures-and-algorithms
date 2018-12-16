// A naive solution
// This is linear search
// function search(arr, val) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === val) {
//             return i
//         }
//     }
//     return -1
// }

// Time complexity is O(n)

// Refactored

function search(array, val) {

    let minIndex = 0
    let maxIndex = array.length - 1

    while (minIndex <= maxIndex) {
        let middleIndex = Math.floor((minIndex + maxIndex) / 2)
        let currentElement = array[middleIndex]
        console.log({ middleIndex })
        console.log({ minIndex, maxIndex, currentElement })
        if (currentElement < val) {
            minIndex = middleIndex + 1
        }
        else if (currentElement > val) {
            maxIndex = middleIndex - 1
        }
        else {
            return middleIndex
        }
        console.log({ minIndex, maxIndex, currentElement, middleIndex })
    }
    console.log('-------')
    return -1

}

console.log(search([1, 2, 3, 5, 6, 8, 9, 12, 15, 16, 29], 3))

// Time complexity is O(logn) - Binary Search