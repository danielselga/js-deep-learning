/* SINGLY LINKED LIST */

// Objectives
// define what singly linked list is.
// Compare and contrast linked lists with arrays.
// Implement insertions, removal and traversal methods on singly linked lists.

// What is a linked list?
// A data structure that contains a head, tail and lenght property.
// Linked lists consist

// Comparisions with arrays

// Lists
// Do not have indexes!
// Connect via nodes with a next pointer.
// Random access is not allowed.

// Arrays
// Indexes in order.
// Insertion and deletion can be expensive.
// Can quicky be accessed at a specific index.

/* STARTER CODE AND PUSH INTO */

// Node
// Stores a piece of data called - val
// Also stores a reference to the next node - next.

class Node {
  constructor (val) {
    this.val = val
    this.next = null
  }
}

class SinglyLinkedList {
  constructor () {
    this.head = null
    this.tail = null
    this.length = null
  }

  // Push pseudocode
  // Create a new node using the value passed to the function
  // If there is no head property on the list, set the head and tail to be the newly created node.
  // Otherwise set the next property on the list to be the newly created node.
  // Increment lenght by one
  // Return a linked list

  push (val) { // Pushing -> Adding a new node to the end of the linked list.
    const newNode = new Node(val)

    if (!this.head) {
      this.head = newNode
      this.tail = this.head
      // Next method empty.
    } else {
      this.tail.next = newNode // Assing to the current tail next method a value to reference.
      this.tail = newNode // Giving the tail a newNode with the next method empty.
    }

    this.length++
    return this // Returning the linked list.
  }

  // Run the entire SinglyLinkedList head by head.
  // traverse () {
  //   let current = this.head
  //   while (current) {
  //     console.log(current)
  //     current = current.next
  //   }
  // }

  // Pop pseudocode
  // If there are no nodes in the list, return undefined.
  // Loop through the list until you search the tail.
  // Set the next property of the 2nd to last node to be null.
  // Set the tail to be the 2nd to last node.
  // Decrement the lenght of the list by .1
  // Return the value of the node removed.

  pop () { // Pop -> Removing a node from the end of the linked list.
    if (!this.head) { return undefined }
    let current = this.head
    let newTail = current
    while (current.next) {
      newTail = current
      console.log(newTail)
      current = current.next
      console.log('newTail:' + newTail.val)
    }
    console.log(current.val)
    this.tail = newTail
    this.tail.next = null
    this.length--
    if (this.length === 0) {
      this.head = null
      this.tail = null
    }
    return current
  }
}

// Hardcoded
const frist = new Node('hi')
frist.next = new Node('There')
frist.next.next = new Node('how')
frist.next.next.next = new Node('are')
frist.next.next.next.next = new Node('you')

// Push method
const list = new SinglyLinkedList()
list.push('hello')
list.push('goodbye')
list.push('see')
list.push('!')

console.log(list.pop())
console.log(list)
