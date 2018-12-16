// Min binary heap

class Node {
    constructor(value, priority) {
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {

    constructor() {
        this.values = []
    }

    enqueue(value, priority) {
        const newNode = new Node(value, priority)
        this.values.push(newNode)
        let index = this.values.length - 1
        this.bubbleUp(index)
        return this
    }

    bubbleUp(index) {
        const element = this.values[index]
        const parentIndex = Math.floor((index - 1)/2)
        const parent = this.values[parentIndex]
        if (index > 0 && element.priority < parent.priority) {
            this.values[parentIndex] = element
            this.values[index] = parent
            index = parentIndex
            return this.bubbleUp(index)
        }
        return
    }

    dequeue() {
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
            let potentialValueToSwitchWith = null
            console.log({ leftChild, rightChild, parentValue })
            console.log(this.values)
            if (leftChild && leftChild.priority && rightChild && rightChild.priority) {
                potentialValueToSwitchWith = leftChild.priority < rightChild.priority ? leftChild : rightChild
            } 
            // console.log({ parentValue, potentialValueToSwitchWith, leftChild, rightChild })
            if (potentialValueToSwitchWith && potentialValueToSwitchWith.priority && potentialValueToSwitchWith.priority > parentValue.priority) {
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

const priorityQueue = new PriorityQueue()
priorityQueue.enqueue("common cold", 1)
priorityQueue.enqueue("gunshot wound", 5)
priorityQueue.enqueue("high fever", 2)
priorityQueue.enqueue("concussion", 3)
console.log(priorityQueue)
console.log(priorityQueue.dequeue())
// console.log(priorityQueue)