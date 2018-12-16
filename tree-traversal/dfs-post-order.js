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

    bfs() {
        let data = []
        let queue = []
        let node = this.root
        queue.push(node)
        while(queue.length) {
            node = queue.shift()
            data.push(node)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        return data
    }

    dfsPreOrder() {
        
        let data = []

        function traverse(node) {
            data.push(node.value)
            if (node.left) traverse(node.left)
            // Won't get to line 81 until the recursion on line 80 has finished
            if (node.right) traverse(node.right)
            return
        }

        traverse(this.root)

        return data
    }

    dfsPostOrder() {
        
        let data = []

        function traverse(node) {
            if (node.left) traverse(node.left)
            if (node.right) traverse(node.right)
            data.push(node.value)
        }

        traverse(this.root)

        return data
    }
}

const bst = new BinarySearchTree()
bst.insert(10).insert(6).insert(15).insert(3).insert(8).insert(20)
console.log(bst.dfsPostOrder())
