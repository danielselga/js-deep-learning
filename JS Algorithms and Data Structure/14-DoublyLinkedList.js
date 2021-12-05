/* DOUBLY LINKED LIST */

// Objectives
// Construct a doubly linked list
// Compare and contrast doubly linked list  and singly linked list.
// Implement basic operations on a doubly linked list.

// We know what list are... but doubly?
// Almost identical to singly linked list, except every node has another pointer, the previous node.

// Comparisons with singly linked list
// more memory === more flexibility
// Its almost always a tradeof.

class Node {
  constructor (val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = 0
  }

  // Push pseudocode
  // Create a new node with the value passed to the function.
  // If the head property is null set the head and tail to be the newly created node.
  // If not, set the next property on the tail to be that node.
  // Set the previous property on the newly created node to be the tail.
  // Set the tail to be the newly created node.
  // Increment the length.

  push (val) { // Push -> Adding a node to the end of the doubly linked list.
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.length++
  }

  // Pop pseudocode

  pop () {

  }
}
