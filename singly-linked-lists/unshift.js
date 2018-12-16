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
    unshift(val) {
        const node = new Node(val)
        if (!this.head) {
            this.head = node
            this.tail = this.head
        }
        else {
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
    }
}

const list = new SinglyLinkedList()
list.push('hello').push('goodbye').push('!')
console.log({ list })
list.unshift("*").unshift("1")
console.log(JSON.stringify(list))

