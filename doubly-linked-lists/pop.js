class Node {

    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }

}

class DoublyLinkedList {

    constructor(val) {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }

    pop() {
        if (!this.head) return undefined
        let poppedNode = this.tail
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.tail = poppedNode.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        return poppedNode
    }

}

const print = () => console.log({ doublyLinkedList })
const doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.push(1)
const y = doublyLinkedList.pop()
console.log({ y })
doublyLinkedList.push(1).push(2)
const z = doublyLinkedList.pop()
console.log({ z })
print()