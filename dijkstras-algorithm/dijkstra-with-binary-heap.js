class WeightedGraph {

    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({ node: vertex2, weight })
        this.adjacencyList[vertex2].push({ node: vertex1, weight })
    }

    dijkstra(start, finish) {
        console.log('======')
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let path = [] // to return at end
        let smallest

        // build up initial state
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            }
            else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }
        // as long as there is something to visit
        while(nodes.values.length) {
            smallest = nodes.dequeue().val
            if (smallest === finish) {
                console.log(distances)
                console.log(previous)
                // WE ARE DONE
                // Build path to return
                while(previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbor in this.adjacencyList[smallest]) {
                    // find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    // calculate new distance to neighboring node
                    let nextNeighbor = nextNode.node
                    let candidate = distances[smallest] + nextNode.weight
                    if(candidate < distances[nextNeighbor]) {
                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate
                        // updating previous - how we go to neighbor
                        previous[nextNeighbor] = smallest
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }
       return path.concat(smallest).reverse()
    }

}

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
            if (leftChild && leftChild.priority && rightChild && rightChild.priority) {
                potentialValueToSwitchWith = leftChild.priority < rightChild.priority ? leftChild : rightChild
            } 
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
                return sinkDown(parentIndex)
            }
        }

        sinkDown(parentIndex)
        return maxValue
    }

}

const graph = new WeightedGraph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")

graph.addEdge("A", "B", 4)
graph.addEdge("A", "C", 2)
graph.addEdge("B", "E", 3)
graph.addEdge("C", "D", 2)
graph.addEdge("C", "F", 4)
graph.addEdge("D", "E", 3)
graph.addEdge("D", "F", 1)
graph.addEdge("E", "F", 1)

console.log(graph.dijkstra("A", "E"))