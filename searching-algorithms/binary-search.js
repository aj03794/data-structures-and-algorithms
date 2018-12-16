// My implementation
// function binarySearch(arr, num) {

//     let leftIndex = 0
//     let rightIndex = arr.length - 1

//     while (leftIndex <= rightIndex) {

//         let middleIndex = Math.floor((leftIndex + rightIndex)/2)
//         let currentValue = arr[middleIndex]

//         console.log({ leftIndex, rightIndex, middleIndex })

//         if (num > currentValue) {
//             leftIndex = middleIndex 
//         }
//         else if (num < currentValue) {
//             rightIndex = middleIndex
//         }
//         else {
//             return middleIndex
//         }
//     }

//     return -1
// }

// Teacher implementation
function binarySearch(arr, num) {

    let start = 0
    let end = arr.length - 1
    let middle = Math.floor((start + end)/2)

    while (arr[middle] !== num && start <= end) {
        console.log({ middle, start, end })
        if (num < arr[middle]) {
            end = middle - 1
        }
        else {
            start = middle + 1
        }
        middle = Math.floor((start + end)/2)
        console.log({ middle })
    }
    if (arr[middle] === num) {
        return middle
    }
    return arr[middle] === num ? middle : -1 
}

console.log(binarySearch([1, 2, 3, 4, 5], 4))
