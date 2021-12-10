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
