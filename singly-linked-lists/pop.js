// piece of data - val
// reference to next node - next
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
    // traverse() {
    //     let current = this.head
    //     while(current) {
    //         console.log(current.val)
    //         current = current.next
    //     }
    // }
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
        // what if tail and head are the same thing?
        if (this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
    }
}

const list = new SinglyLinkedList()
list.push('HELLO').push('GOODBYE').push('!')
const x = list.pop()
list.pop()
list.pop()
console.log({ x })
console.log({ list })
