function selectionSort(arr) {

    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for (let i = 0; i < arr.length; i++) {

        let minIndex = i

        for (let j = i + 1; j < arr.length; j++) {
            // console.log(arr[i], arr[j])
            console.log(minIndex, arr[i], arr[j])
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        // if the min index is the value you started with, no reason
        // to swap
        if (i !== minIndex) swap(arr, i, minIndex)
        console.log('=========')
    }

    return arr
}

const arr = [5, 1, 6, 9, 3, 2]
console.log(selectionSort(arr))

// 0 5 1
// 1 5 6
// 1 5 9
// 1 5 3
// 1 5 2
// =========
// 1 5 6
// 1 5 9
// 1 5 3
// 4 5 2
// =========
// 2 6 9
// 2 6 3
// 4 6 5
// =========
// 3 9 6
// 4 9 5
// =========
// 4 6 9
// =========
// =========
// [ 1, 2, 3, 5, 6, 9 ]