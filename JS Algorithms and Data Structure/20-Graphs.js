/* GRAPHS */

// Objectives

// Explain what is a graph
// Compare and contrast differents types of graphs and their use cases in the real world
// Implement a graph list
// Traverse through a graph using BFS and DFS
// Compare and contrast graph traversal algorithms

// What are graphs?

// A graph data strucuture consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for directed graphs.

// Uses for graph

// Social networks
// Location / Mapping
// Routing algorithms
// Visual Hierarchy
// File system optimization
// EVERYWHERE!

// Types of graphs

// Vertex -> is a node
// Edge -> conection between nodes
// Weighted/Unwheighted -> values assigned to distances between vertices
// Directed / Undirected -> directions assigned to distanced between vertices

// Adjacency Matrix

// Is a square matrix used to represent a finite graph.
// The elements of the matrix indicate wheter pairs of vertices are adjacent or not in the graph.

// Adjacency List

// Is a collection of unordered lists used to represent a finite graph.
// Each unordered list within an adjacency list describes the set of neighbors of a particular vertex in the graph. This is one of several commonly used representations of graphs for use in computer programs.

// Adjacency list VS Adjacency matrix

// Adjacency list
// Can take up less space space (in sparse graph)
// Faster to iterate over all edges.
// Can be slower to lookup specific edge.

// Adjacency matrix
// Takes up more space (in sparse graphs)
// Slower to iterate over all edges
// Faster to lookup specific edge

// Adjacency list is the most cummonly method
// Most data in the real-world tends to lend itsef to sparser and/or larger graphs.

class graph {
  constructor() {
    this.adjacencyList = {};
  }

  // Adding a vertex
  // Write a method called addVertex, which acceptsa name of a vertex.
  // It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array.

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // Removing a vertex
  // This function should accept a vertex to remove
  // This function should loop as long there are any other vertices in the adjacency list for that vertice
  // Inside the loop, call the removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
  // Delete the key in the adjacency list for that vertex

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }

    delete this.adjacencyList[vertex];
  }

  // Adding edges
  // This function should accept two arguments, we call them vertex1 and vertex2
  // The function should find the adjacency list the key of vertex1 and push vertex2 to the array.
  // Don't worry about handling errors/invalid vertices.

  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }

  // Removing edge
  // This function should accept two vertices, we'll call them vertex1 and vertex2.
  // The function should reassing the key of vertex1 to be an array that does not contain vertex2
  // The function should reassing the key of vertex2 to be an array that does not contain vertex1
  // Don't worry about handling errors/invalid vertices.

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
      (vertex) => vertex !== vertex2
    );

    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
      (vertex) => vertex !== vertex1
    );
  }

  // DEPTH FRIST TRAVERSAL (DETAILED PSEUDOCODE)

  // The function should accept a starting node
  // Create a list to store the end result, to be returned at the very end
  // Create an object to store your visited vertices
  // Create a helper function which accepts a vertex
  // The helper function should return early if the vertex is empty
  // The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
  // Loop over all of the values in the adjacencyList for that vertex
  // If any of those values have not been visited recursively invoke the helper function with that vertex
  // Invoke the helper function with the starting vertex
  // Return the result array

  depthFristRecursive() {
    const result = [];
    const visited = {}
	
	(function dfs(vertex) {
      if (!vertex) {
        return null;
      }
      visited[vertex] = true;
      result.push(vertex);
      this.adjacencyList[vertex].forEach((neighbor) => {
        if (visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start).bind(this.adjacencyList);

	return result
  }
}
