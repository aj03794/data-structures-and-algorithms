function insertionSort(arr) {

    for (let i = 1; i< arr.length; i++) {
        let currentVal = arr[i]
        let j = i - 1
        for (j; j > -1 && arr[j] > currentVal; j--) {
            arr[j+1] = arr[j]
            console.log(arr)
        }
        console.log('---------')
        arr[j+1] = currentVal
        console.log(arr)
    }

    return arr
}

console.log(insertionSort([2, 1, 9, 76, 4]))

// [ 2, 2, 9, 76, 4 ]
// ---------
// [ 1, 2, 9, 76, 4 ]
// ---------
// [ 1, 2, 9, 76, 4 ]
// ---------
// [ 1, 2, 9, 76, 4 ]
// [ 1, 2, 9, 76, 76 ]
// [ 1, 2, 9, 9, 76 ]
// ---------
// [ 1, 2, 4, 9, 76 ]
// [ 1, 2, 4, 9, 76 ]


// [2, 1, 9, 76, 0]
// For 0
// is 76 > 0, yes  
// [2, 1, 9, 76, 76]
// is 9 > 0, yes
// [2, 1, 9, 9, 76]
// is 1 > 0, yes
// [2, 1, 1, 9, 76]
// is 2 > 0, yes
// [0, 2, 1, 9, 76]
