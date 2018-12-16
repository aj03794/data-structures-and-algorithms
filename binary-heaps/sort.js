class MaxBinaryHeap {

    constructor() {
        this.values = []
    }

    insert(element) {
        this.values.push(element)
        console.log(this.values)
        let index = this.values.length - 1
        this.bubbleUp(index)
        return this
    }

    bubbleUp(index) {
        const element = this.values[index]
        const parentIndex = Math.floor((index - 1)/2)
        const parent = this.values[parentIndex]
        console.log({ index, element, parentIndex, parent })
        if (index > 0 && element > parent) {
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
            return this.bubbleUp(index)
        }
        return
    }

}

const maxBinaryHeap = new MaxBinaryHeap()
maxBinaryHeap.insert(41).insert(39).insert(33).insert(18).insert(27).insert(12).insert(55)
// [ 55, 39, 41, 18, 27, 12, 33 ]
console.log(maxBinaryHeap.values)
maxBinaryHeap.insert(1)
console.log(maxBinaryHeap.values)
// [ 55, 39, 41, 18, 27, 12, 33, 1 ]
maxBinaryHeap.insert(45)
console.log(maxBinaryHeap.values)
// [ 55, 45, 41, 39, 27, 12, 33, 1, 18 ]