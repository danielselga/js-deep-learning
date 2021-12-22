/* DIJKSTRAS ALGORITHM */

// Objectives
// Understand the importance of Dijkstras
// Implement a weighted graph
// Implment Dijkstras using a naive priority queue
// Implement Dijkstras using a binary heap priority queue

// What is it
// One of the most famous and widely used algorithms around
// Finds the shortest path between two vertices on a graph
// "Whats the fastest way to get from point a to b"

// Weighted graph

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight: weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight: weight });
  }

  // Dijkstras pseudocode
  // This function should accept a starting and ending vertex.
  // Create an object (We'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
  // After setting a value in the distances object add each vertex with a priority of infinity to the priority queue, except the starting vertex which should have a priority of 0 beecause thats where we begin.
  // Create another object called previous and set each key to be every vertex in the adjacency list with a value of null.
  // Start looping as long as there is anything in the priority queue
  // dequeue a vertex from the priority queue
  // If that vertex is the same as the ending vertex we are done.
  // Otherwise loop through each value in the adjacency list at that vertex
  // Calculate the distance to that vertex from the starting vertex.
  // If the distance is less than what is currently stored in our distances object.
  // Update the distances object with new lower distance
  // Update the previous object to contain that vertex
  // Enqueue the vertex with the total distance from the start node.

  dijkstras(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    let path = []; // to return at end
    let smallest;

    // Build up initial state
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, 0);
      }
      previous[vertex] = null;
    }

    // As long as there is something to visit
    while (nodes.values.length) {
      smallest = node.dequeue().val;
      if (smallest === finish) {
        // We're done
        // Build up path to return at end
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }

        break;
      }

      if (smallest || distances[smallest] !== Infinity) {
        for (let neightbor in this.adjacencyList[smallest]) {
          // Find neighboring node
          let nextNode = this.adjacencyList[smallest][neightbor];

          // Calculate new distance to neighboring node
          let candidate = distances[smallest] + nextNode.weight;

          let nextNeighbor = nextNode.node;

          if (candidate < distances[nextNeighbor]) {
            // Updating new smallest distance to neighbors
            distances[nextNeighbor] = candidate;
            // Updating previous  how we got to neighbors
            previous[nextNeighbor] = smallest;
            // Enqueue in priority queue with new priority
            nodes.enqueue(nextNeighbor, candidate);
          }
        }
      }
    }
    return path.concat(smallest).reverse();
  }
}

// Walk through the algorithm

// The aproach
// Every time we look to visit a new node, we pick the node with the smallest known distance to visit frist.
// Once we've moved to the node we're going to visit, we look at each of its neighbors
// For each neighboring node, we calculate the distance by summing the total edges that lead to the node we're checking from the starting node
// If the new total distance to a node is less than the previous total, we store the new shorter distance for that node

// A simple PQ
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    this.values.push(val, priority);
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

// Dijkstras pseudocode
// This function should accept a starting and ending vertex.
// Create an object (We'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
// After setting a value in the distances object add each vertex with a priority of infinity to the priority queue, except the starting vertex which should have a priority of 0 beecause thats where we begin.
// Create another object called previous and set each key to be every vertex in the adjacency list with a value of null.
// Start looping as long as there is anything in the priority queue
// dequeue a vertex from the priority queue
// If that vertex is the same as the ending vertex we are done.
// Otherwise loop through each value in the adjacency list at that vertex
// Calculate the distance to that vertex from the starting vertex.
// If the distance is less than what is currently stored in our distances object.
// Update the distances object with new lower distance
// Update the previous object to contain that vertex
// Enqueue the vertex with the total distance from the start node.
