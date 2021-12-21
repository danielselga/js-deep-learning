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

