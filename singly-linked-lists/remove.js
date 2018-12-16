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
    get(index) {
        if (index < 0 || index >= this.length) {
            return undefined
        }
        let counter = 0
        let val = this.head
        while (counter !== index) {
            val = val.next
            counter++
        }
        return val
    }
    set(index, value) {
        const foundNode = this.get(index)
        if (!foundNode) return false
        foundNode.val = value
        return true
    }
    insert(index, value) {
        if (index < 0 || index > this.length) return false
        if (index === this.length) {
            return !!this.push(value)
            // return true
        }
        if (index === 0) {
            return !!this.unshift(value)
            // return true
        }
        this.length++
        const newNode = new Node(value)
        const nodeToInsertAfter = this.get(index - 1)
        // const nodeToAddBackAfter = this.get(index)
        // console.log({ nodeToAddBackAfter, nodeToInsertAfter })
        const temp = nodeToInsertAfter.next
        nodeToInsertAfter.next = newNode
        newNode.next = temp
        // newNode.next = nodeToInsertAfter
        return true
    }
    remove(index) {
        if (index < 0 || index >= this.length) return undefined
        if (index === this.length - 1) return this.pop()
        if (index === 0) return this.shift()
        this.length--
        const nodeBeforeNodeToRemove = this.get(index - 1)
        const removed = nodeBeforeNodeToRemove.next
        nodeBeforeNodeToRemove.next = removed.next
        return removed.val
    }
}

const list = new SinglyLinkedList()
list.push('hello').push('goodbye').push('!')
console.log(list.remove(1))
console.log(JSON.stringify(list))
