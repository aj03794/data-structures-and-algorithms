// piece of data - val
// reference to next node - next

// Naive way
class Node{

    constructor(val) {
        this.val = val
        this.next = null
    }

}

// const first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")
// console.log({ first })

class SinglyLinkedList{
    constructor() {
        this.length = 0
        this.head = null
        this.tail = null
    }
    push(val) {
        const node = new Node(val)
        console.log({ node })
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
}

const list = new SinglyLinkedList()
// list.push("Hello")
// console.log({ list })
// list.push("Goodbye")
// console.log({ list })
// list.push("Another hello")
// console.log({ list })
// console.log(list.head.next)

list.push('hi').push('you').push('bye')
console.log({ list })