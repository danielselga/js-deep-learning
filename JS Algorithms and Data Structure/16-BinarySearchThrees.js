/* BINARY SEARCH THREE */

// Objectives
// Define what a three is.
// Compare and constrast trees and lists.
// Explain the diferences between trees binary trees, and binary search trees.
// Implement operations on binary search threes.

// What is a three?
// A data structure that consists of nodes in a parent / child relationship.

// Three terminology
// Root -> the top node in a three.
// Child -> A node directly connected to another node when moving away from the root.
// Parent -> The converse notion of a child.
// Siblings -> A group of nodes with the same parent.
// Leaf -> Node with no children.
// Edge -> The connection between one node and another.

// Threes -> lots of different applications
// HTML DOM.
// Network routing.
// Abstract syntax threes.
// Atificial inteligence.
// Computer file systems.

// Binary search three
// Every parent node has at most two children.
// Every Node to the left of a parent node is always less than the parent.
// Every Node to the right of a parent Node is always greater than the parent.

// Binary search three
// Works with sort data or sortable data that you can compare things.

// THE BINARY SEARCH THREE CLASS
class BinarySearchThree {
  constructor () {
    this.root = null
  }

  // Inserting pseudocode
  // Create a new Node.
  // Starting at the root.
  // Check if there is a root, if not the root now becomes that new Node.
  // If there is a root, check if the value of the new Node is greater than or less than the value of the root.
  // If its greater.
  // Check to see if there is a node to the right.
  // If there is, move to that node and repeat these steps.
  // If there is not, add that node as the right property.
  // If it less.
  // Check to see if there is a node to the left.
  // If there is, move that node and repeat these steps.
  // If there is not, add that node as the left property.

  inserting (value) {
    const newNode = new Node(value)
    if (this.root === null) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        if (value === current.value) return undefined
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode
            return this
          } else {
            current = current.left
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode
          } else {
            current = current.right
          }
        }
      }
    }
  }

  // Find pseudocode
  // Starting at the root ->
  // Check if there is a root, if not we're done searching!
  // If there is a root, check if the value of the new node is the value we are looking for.
  // If we found we're done!
  // If not, check to see if the value is greater than or less than the value of the root.
  // If it is greater ->
  // Check to see if there is a node to the right.
  // If there is, move to that node and repeat these steps.
  // If there is not, we're done searching.
  // If it is less ->
  // Check to see if there is a node to the left.
  // If there is, move to that node and repeat these steps.
  // If there is not, we're done searching.

  find (value) {
    if (this.root === null) {
      return false
    }

    let current = this.root
    let found = false
    while (current && !found) {
      if (value < current.value) {
        current = current.left
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if (!found) {
      return false
    }

    return current
  }

  // Breadth-frist search Pseudocode
  // Create a queue (this can be an array) and a variable to store the values of nodes visited
  // Place the root node in the queue.
  // Loop as long as there is anything in the queue ->
  // Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
  // If there is a left property on the node dequeued - add it to the queue.
  // If there is a right property on the node dequeued - add it to the queue.
  // Return the variable that stores the value.

  bfs () {
    const data = []
    const queue = []
    let node = this.root
    queue.push(node)

    while (queue.length) {
      node = queue.shift()
      data.push(node.value)
      if (node.left) {
        queue.push(node.left)
      }

      if (node.right) {
        queue.push(node.right)
      }
    }
    return data
  }

  // Depth-frist PreOrder sreach pseudocode
  // Create a variable to store the values of nodes visited.
  // Store the root of the BST (Binary search tree) in a variable called current.
  // Write a helper funtion which accepts a node ->
  // Push the value of the node to a variable that stores the values.
  // If the node has a left property, call the helper funtion with the left property on the node.
  // If the node has a right property, call the helper function with the right property on the node.
  // Invoke the helper function with the current variable.
  // Return the array of values.

  dfsPreOrder () {
    const data = []

    function traverse (node) {
      data.push(node)

      if (node.left) {
        traverse(node.left)
      }

      if (node.right) {
        traverse(node.right)
      }
    }
    traverse(this.root)
    return data
  }

  // Depth-frist PostOrder pseudocode
  // Create a variable to store the values of nodes visited.
  // Store the root of the BST (Binary search tree) in a variable called current.
  // Write a helper funtion which accepts a node ->
  // If the node has a left property, call the helper funtion with the left property on the node.
  // If the node has a right property, call the helper function with the right property on the node.
  // Push the value of the node to the variable that stores the values.
  // Invoke the helper function with the current variable.

  dfsPostOrder () {
    const data = []

    function traverse (node) {
      if (node.left) {
        traverse(node.left)
      }

      if (node.right) {
        traverse(node.right)
      }

      data.push(node.value)
    }
    traverse(this.root)
    return data
  }

  // Depth-frist InOrder pseudocode
  // Create a variable to store the values of nodes visited.
  // Store the root of the BST (Binary search tree) in a variable called current.
  // Write a helper funtion which accepts a node ->
  // If the node has a left property, call the helper funtion with the left property on the node.
  // Push the value of the node to the variable that stores the values.
  // If the node has a right property, call the helper function with the right property on the node.
  // Invoke the helper function with the current variable.
}

class Node {
  constructor (value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

const three = new BinarySearchThree()
three.root = new Node()
three.root.right = new Node(15)
three.root.left = new Node(7)
three.root.left.right = new Node(9)

// BigO of BST
// Insertion O(logN)
// Searching O(logN)
