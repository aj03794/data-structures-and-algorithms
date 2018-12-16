// Time complexity of the above is O(n^2)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2)
        if (correctIndex === -1) {
            return false
        }
        arr2.splice(correctIndex, 1)
    }
    return true
}

const arr1 = [1, 2, 3, 2]
const arr2 = [9, 1, 4, 4]

console.log(same(arr1, arr2))

// Refactored Version
// This is O(3n) = O(n)
function sameRefactored(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false
    }
    let frequencyCounter1 =  {}
    let frequencyCounter2 = {}

    for (let val of arr1) {
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for (let val of arr2) {
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
    }

    for (let key in frequencyCounter1) {
        if (!(key ** 2 in frequencyCounter2)) {
            return false
        }
        if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
            return false
        }
    }
    return true
}

const arr3 = [1, 2, 3, 2]
const arr4 = [9, 1, 4, 4]

console.log(sameRefactored(arr3, arr4))  // true

const arr5 = [1, 2, 3, 2, 25]
const arr6 = [9, 1, 4, 4, 11]

console.log(sameRefactored(arr5, arr6)) // false