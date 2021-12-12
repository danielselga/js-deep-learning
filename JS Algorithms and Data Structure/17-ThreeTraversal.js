/* THREE TRAVERSAL */

// TRAVERSING A THREE
// Two ways:
// Breadth-frist search
// Depth-frist search

// Breadth-frist search intro

// Steps - iteratively ->
// Create a queue (this can be an array) and a variable to store the values of nodes visited
// Place the root node in the queue.
// Loop as long as there is anything in the queue ->
// Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
// If there is a left property on the node dequeued - add it to the queue.
// If there is a right property on the node dequeued - add it to the queue.
// Return the variable that stores the value.

// SOLUTION INSIDE THE BINARY THREE (16 FILE).

// Depth-frist search intro

// Steps - recursively ->
// Create a variable to store the values of nodes visited.
// Store the root of the BST (Binary search tree) in a variable called current.
// Write a helper funtion which accepts a node ->
// Push the value of the node to a variable that stores the values.
// If the node has a left property, call the helper funtion with the left property on the node.
// If the node has a right property, call the helper function with the right property on the node.
// Invoke the helper function with the current variable.
// Return the array of values.

// SOLUTION INSIDE THE BINARY THREE (16 FILE).
