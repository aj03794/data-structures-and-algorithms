// Not optimized
// function bubbleSort(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         // console.log(arr[i])
//         for (let j = 0; j < arr.length; j++) {
//             console.log(arr, arr[j], arr[j+1])
//             if (arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j+1]
//                 arr[j+1] = temp
//             }
//         }
//     }
//     return arr
// }

// console.log(bubbleSort([37, 45, 29, 8]))

// [ 37, 45, 29, 8 ] 37 45
// [ 37, 45, 29, 8 ] 45 29
// [ 37, 29, 45, 8 ] 45 8
// [ 37, 29, 8, 45 ] 45 undefined
// [ 37, 29, 8, 45 ] 37 29
// [ 29, 37, 8, 45 ] 37 8
// [ 29, 8, 37, 45 ] 37 45
// [ 29, 8, 37, 45 ] 45 undefined
// [ 29, 8, 37, 45 ] 29 8
// [ 8, 29, 37, 45 ] 29 37
// [ 8, 29, 37, 45 ] 37 45
// [ 8, 29, 37, 45 ] 45 undefined
// [ 8, 29, 37, 45 ] 8 29
// [ 8, 29, 37, 45 ] 29 37
// [ 8, 29, 37, 45 ] 37 45
// [ 8, 29, 37, 45 ] 45 undefined
// [ 8, 29, 37, 45 ]

// More optimized
function bubbleSort(arr) {
    for (let i = arr.length; i > 0; i--) {
        // console.log(arr[i])
        console.log('----------')
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

console.log(bubbleSort([37, 45, 29, 8]))
// ----------
// [ 37, 45, 29, 8 ] 37 45
// [ 37, 45, 29, 8 ] 45 29
// [ 37, 29, 45, 8 ] 45 8
// ----------
// [ 37, 29, 8, 45 ] 37 29
// [ 29, 37, 8, 45 ] 37 8
// ----------
// [ 29, 8, 37, 45 ] 29 8
// ----------
// [ 8, 29, 37, 45 ]

console.log("=============")

function bubbleSortTwo(arr) {

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for (let i = arr.length; i > 0; i--) {
        // console.log(arr[i])
        console.log('----------')
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j + 1]) {
               swap(arr, j, j+1)
            }
        }
    }
    return arr
}

console.log(bubbleSortTwo([37, 45, 29, 8]))
// ----------
// [ 37, 45, 29, 8 ] 37 45
// [ 37, 45, 29, 8 ] 45 29
// [ 37, 29, 45, 8 ] 45 8
// ----------
// [ 37, 29, 8, 45 ] 37 29
// [ 29, 37, 8, 45 ] 37 8
// ----------
// [ 29, 8, 37, 45 ] 29 8
// ----------
// [ 8, 29, 37, 45 ]

console.log('-=-=-=-=-=-=')

function bubbleSortOptimized(arr) {

    let noSwaps

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for (let i = arr.length; i > 0; i--) {
        console.log('----------')
        noSwaps = true
        for (let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j+1])
            if (arr[j] > arr[j + 1]) {
                noSwaps = false
                swap(arr, j, j+1)
            }
        }
        if (noSwaps) break
    }
    return arr
}

console.log(bubbleSortOptimized([8, 1, 2, 3, 4, 5, 6, 7]))

// ----------
// [ 8, 1, 2, 3, 4, 5, 6, 7 ] 8 1
// [ 1, 8, 2, 3, 4, 5, 6, 7 ] 8 2
// [ 1, 2, 8, 3, 4, 5, 6, 7 ] 8 3
// [ 1, 2, 3, 8, 4, 5, 6, 7 ] 8 4
// [ 1, 2, 3, 4, 8, 5, 6, 7 ] 8 5
// [ 1, 2, 3, 4, 5, 8, 6, 7 ] 8 6
// [ 1, 2, 3, 4, 5, 6, 8, 7 ] 8 7
// ----------
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 1 2
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 2 3
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 3 4
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 4 5
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 5 6
// [ 1, 2, 3, 4, 5, 6, 7, 8 ] 6 7
// [ 1, 2, 3, 4, 5, 6, 7, 8 ]