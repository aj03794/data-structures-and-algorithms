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

    shift() {
        if (this.length === 0) return undefined
        const oldHead = this.head
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }
        else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    unshift(val) {
        const newNode = new Node(val)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.head.prev = newNode
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    
    get(index) {
        if (index < 0 || index >= this.length) return null

        let count, current

        if (index <= this.length/2) {
            console.log('=====')
            count = 0
            current = this.head
            while (count !== index) {
                current = current.next
                count++
            }
        }
        else {
            console.log('-----')
            count = this.length - 1
            current = this.tail
            while (count !== index) {
                current = current.prev
                count--
            }
        }
        return current
    }

}

const print = () => console.log({ doublyLinkedList })
const doublyLinkedList = new DoublyLinkedList()
doublyLinkedList.push(1).push(2).push(3).push(4).push(5).push(6).push(7).push(8)
console.log(doublyLinkedList.get(0))
console.log(doublyLinkedList.get(1))
console.log(doublyLinkedList.get(5))