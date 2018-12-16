class Node{
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class SinglyLinkedList{
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = this.head
        }
        else {
            this.tail.next = node
            this.tail = node
        }
        this.length++
        return this
    }
    pop() {
        if (!this.head) {
            return undefined
        }
        let current = this.head
        let previous = current
        while(current.next) {
            previous = current
            current = current.next
        }
        this.tail = previous
        this.tail.next = null
        this.length--
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
    // If you shift all the items out, technically the tail is still there
    // but as soon as you push a new item, this tail will get assigne to the new value
    // can fix this by doing a length check or 0 and setting tail to null if length is 0
    // lines 58 - 60 fixes this
    shift() {
        if (!this.head) {
            return undefined
        }
        this.length--
        let oldHead = this.head
        // Line 53 could also be this.head = this.head.next
        this.head = oldHead.next
        if (this.length === 0) {
            this.tail = null
        }
        console.log({ oldHead })
        return oldHead
    }
}

const list = new SinglyLinkedList()
list.push('hello').push('goodbye').push('!')
list.shift()
list.shift()
list.shift()
console.log({ list })

