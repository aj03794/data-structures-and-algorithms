class MaxBinaryHeap {

    constructor() {
        this.values = []
    }

    insert(element) {
        this.values.push(element)
        let index = this.values.length - 1
        this.bubbleUp(index)
        return this
    }

    bubbleUp(index) {
        const element = this.values[index]
        const parentIndex = Math.floor((index - 1)/2)
        const parent = this.values[parentIndex]
        if (index > 0 && element > parent) {
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
            return this.bubbleUp(index)
        }
        return
    }

    extractMax() {
        console.log(this.values)
        let parentIndex = 0
        const maxValue = this.values[0]
        const newRoot = this.values.pop()
        if (this.values.length === 0) {
            return maxValue
        }
        this.values[0] = newRoot
        console.log({ maxValue, newRoot, values: this.values })
        const sinkDown = (parentIndex) => {
            const parentValue = this.values[parentIndex]
            const leftChild = this.values[2 * parentIndex + 1]
            const rightChild = this.values[2 * parentIndex + 2]
            const potentialValueToSwitchWith = leftChild > rightChild ? leftChild : rightChild
            console.log({ parentValue, potentialValueToSwitchWith, leftChild, rightChild })
            if (potentialValueToSwitchWith && potentialValueToSwitchWith > parentValue) {
                if (potentialValueToSwitchWith === leftChild) {
                    this.values[2 * parentIndex + 1] = parentValue
                    this.values[parentIndex] = leftChild
                    parentIndex = 2 * parentIndex + 1
                }
                else {
                    this.values[2 * parentIndex + 2] = parentValue
                    this.values[parentIndex] = rightChild
                    parentIndex = 2 * parentIndex + 2
                }
                console.log(this.values, parentIndex)
                return sinkDown(parentIndex)
            }
        }

        sinkDown(parentIndex)
        return maxValue
    }

}

const maxBinaryHeap = new MaxBinaryHeap()
maxBinaryHeap.insert(41).insert(39).insert(33).insert(18).insert(27).insert(12).insert(55)
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.values)
console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.values)

console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.values)

console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.values)

console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.values)

console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.values)

console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.values)

console.log(maxBinaryHeap.extractMax())
console.log(maxBinaryHeap.values)