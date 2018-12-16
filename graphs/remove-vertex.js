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

}

const graph = new Graph()
graph.addVertex("Dallas")
graph.addVertex("Tokyo")
graph.addVertex("Aspen")
graph.addVertex("Los Angeles")
graph.addVertex("Hong Kong")
graph.addEdge("Dallas", "Tokyo")
graph.addEdge("Dallas", "Aspen")
graph.addEdge("Hong Kong", "Tokyo")
graph.addEdge("Hong Kong", "Dallas")
graph.addEdge("Los Angeles", "Hong Kong")
graph.addEdge("Los Angeles", "Aspen")
graph.removeVertex("Hong Kong")
console.log(graph)