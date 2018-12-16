class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value)
        if (!this.root) {
            this.root = newNode
            return this
        }
        let current = this.root
        while (true) {
            if (value === current.value) return undefined
            if (value < current.value) {
                if (current.left === null) {
                    current.left = newNode
                    return this
                }
                current = current.left
            }
            else {
                if (current.right === null) {
                    current.right = newNode
                    return this
                }
                current = current.right
            }
        }
    }

    find(value) {
        if (!this.root) return null
        let current = this.root
        let found = false
        console.log({ current })
        while(current && !found) {
            if (value < current.value) {
                current = current.left
            }
            else if (value > current.value) {
                current = current.right
            }
            else {
                found = true
            }
        }
        if (!found) return undefined
        return current
    }
}

const bst = new BinarySearchTree()
bst.insert(10).insert(4)
bst.insert(2)
bst.insert(12)
bst.insert(5)
bst.insert(11)
console.log(bst.find(100))
// console.log(JSON.stringify(bst))