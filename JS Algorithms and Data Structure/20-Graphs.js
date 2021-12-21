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

  depthFirstRecursive() {
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

    return result;
  }

  // DEPTH FRIST TRAVERSAL ITERATIVE (DETAILED PSEUDOCODE)

  // The function should accept a starting node
  // Create a stack to help use keep track of vertices (use a list / array)
  // Create a list to store the end result, to be returned at the very end
  // Create an object to store visited vertices
  // Add the starting vertex to the stack, and mark it visited
  // While the stack has something in it ->
  // Pop the next vertex from the stack
  // If that vertex hasn't been  visited yet ->
  // mark it as visited
  // Add it to the result list
  // Push all of it neighbors into the stack
  // Return the result array

	depthFirstIterative(start) {
		const stack = [start]
		const result = []
		const visited = {}
		let currentVertex
		
		visited[start] = true
		
		while(stack.length) {
			currentVertex = stack.pop()
			result.push(currentVertex)

			this.adjacencyList[currentVertex].forEach(neighbor => {
				if (!visited[neighbor]) {
					visited[neighbor] = true
					stack.push(neighbor)
				}
			})
		}
		return result
	}

	// Breadth frist pseudocode

	// This function should accept a starting vertex
	// Create a queue (you can use one array) and place the starting vertex in it
	// Create an array to store the nodes visited
	// Mark the starting vertex as visited
	// Loop as long as there is anything in the queue
	// Remove the frist vertex form the queue and push it into the array that stores nodes visited
	// Loop over each vertex in the adjacency list for the vertex you are visiting
	// If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
	// Once you have finished looping, return the array of visited nodes

	breadthFrist (start) {
		const queue = []
		const result = []
		const visited = {}
		visited[start] = true

		while(queue.length) {
			let currentVertex = queue.shift()
			result.push(currentVertex)

			this.adjacencyList[currentVertex].slice().reverse().forEach(neighbor => {
				if (!visited[neighbor]) {
					visited[neighbor] = true
					queue.push(neighbor)
				}
			})
		}
	}
}
