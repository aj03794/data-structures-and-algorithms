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

}

const graph = new Graph()
graph.addVertex("Dallas")
graph.addVertex("Tokyo")
graph.addVertex("Aspen")
graph.addEdge("Dallas", "Tokyo")
graph.addEdge("Dallas", "Aspen")
graph.removeEdge("Dallas", "Aspen")
console.log(graph)