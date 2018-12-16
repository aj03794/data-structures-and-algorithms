class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    // If we wanted to do a directed graph, we just wouldn't add them to both lists
    // we may only add vertex2 to vertex1, but not vice versa
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1]) this.adjacencyList[vertex1].push(vertex2)
        else this.addVertex(vertex1)
        if (this.adjacencyList[vertex2]) this.adjacencyList[vertex2].push(vertex1)
        else this.addVertex(vertex2)

    }

}

const graph = new Graph()
graph.addVertex("Tokyo")
graph.addVertex("Beijing")
graph.addEdge("Tokyo", "Beijing")
console.log(graph)