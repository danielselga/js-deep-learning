/* GRAPH TRAVERSAL */

// VISITING / UPDATING / CHECKING
// Each vertex in a graph

// Graph traversal uses
// Peer to Peer Networking
// Web Crawlers
// Finding 'closest'
// Matchers / Recomendations
// Shortest path problems ->
// GPS Navigation
// Solving mazes
// AI (shortest path to win the game)

// Deph frist traversal
// Explore as far as possible down one branch before "backtracking"

// DFS Pseudocode recursive

/* DFS(vertex) {
    if vertex is empty return (this is the base case)
    add vertex to results list 
    mark vertex as visited
    for each neighbor in vertex's neighbors:
    if neighbor is not visited: 
    recursively call DFS on neighbor
} */

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

// SOLUTION IN FILE 20