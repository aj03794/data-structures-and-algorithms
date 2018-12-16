class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }
    
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2)
        else this.addVertex(vertex1)
        if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1)
        else this.addVertex(vertex2)

    }

    removeEdge(vertex1, vertex2) {
       this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(vertex => vertex !== vertex2)
       this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(vertex => vertex !== vertex1)
    }

    removeVertex(vertex) {
        this.adjacencyList[vertex].forEach(v2 => this.removeEdge(vertex, v2))
        delete this.adjacencyList[vertex]
    }

    depthFirstRecursive(start) {
        const result = []
        const visited = {}

        const dfs = vertex => {
            if(!vertex) return null
            visited[vertex] = true
            result.push(vertex)
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) return dfs(neighbor)
            })
        }

        dfs(start)
        return result
    }

}

const g = new Graph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g.depthFirstRecursive("A"))