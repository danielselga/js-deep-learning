/* STACKS + QUEUE */

// STACKS

// OBJECTIVES
// Define what a stack is.
// Understand use cases for a stack.
// Implement operations on a stack data structure.

// What is a stack?
// A LIFO data structure.
// The last element addded to the stack will be the frist element removed from the stack.

// How is it used?
// Think about a stack of plates, or a stack of markers, o a stack of... anything.
// As you pile it up the last thing (or the topmost thing) is what gets removed frist.

// We've seen this before...
// The call stack.

// Where stacks are used
// Managing funtion invokations.
// Undo / Redo
// Routing (the history object) is treated like a stack.

// There is more than one way of implementing a stack.

// Array implementation
const stack = []
stack.push('google.com')
stack.push('instagram.com')
stack.push('youtube.com')
stack.pop()
// Just push and pop to be a stack.

// Linked list implementation

class Stack {
  constructor () {
    this.frist = null
    this.last = null
    this.size = 0
  }
}

class Node {
  constructor (value) {
    this.value = value
    this.next = null
  }

  // Push pseudocode
  // This function should accept a value.
  // Create a new Node with that value.
  // If there are no nodes in the stack, set the frist and last property to be the newly created node.
  // Reset the frist property to be the newly created node.
  // Set the next proeprty on the node to be the previously created variable.
  // Increment the size of the stack by 1.

  push (val) { // Push -> Add a value to the top of the stack.
    const newNode = newNode(val)

    if (!this.frist) {
      this.frist = newNode
      this.last = newNode
    } else {
      const temp = newNode
      this.frist = newNode
      this.frist.next = temp
    }
    return ++this.size
  }

  // Pop pseudocode
  // If there are no nodes in the stack, return null
  // Create a temporary variable to store the frist property on the stack.
  // If there is only 1 node, set the frist and last property to be null.
  // If there is more than one node, set the frist property to be the next property on the current frist.
  // Decrement the size by 1.
  // Return the value of the node removed.

  pop () {
    if (!this.frist) {
      return null
    }
    const temp = this.frist
    if (this.frist === this.last) {
      this.last = null
    }
    this.frist = this.frist.next
    this.size--
    return temp.value
  }
}

// BigO of stacks
// Insertion o(n)
// removal o(n)
// Searching o(n)
// Access o(n)

// Recap
// Stacks are LIFO data structure where the last value in is always the frist one out.
// Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/foward) and much more!

// QUEUE

// What is a queue?
// A FIFO data structure.
// Frist in frist out.

// How do we use them in programming?
// Background tasks.
// Uploading resources.
// Printing / task processing.

// Building a queue using an array.
const q = []
q.push('frist')
q.push('Second')
q.push('third')
q.shift()

// Building a queue using class

// class Node {
//   constructor (val) {
//     this.value = val
//     this.next = null
//   }
// }

class Queue {
  constructor () {
    this.frist = null
    this.last = null
    this.size = 0
  }

  // Enqueue pseudocode
  // This function accepts some value.
  // Create a new node using that value passed to the function.
  // If there are no nodes in the queue, set this node to be the frist and last property.
  // Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node.

  enqueue (val) {
    const newNode = new Node(val)
    if (!this.frist) {
      this.frist = newNode
      this.last = newNode
    } else {
      this.last.next = newNode
      this.last = newNode
    }
  }

  // Dequeue pseudocode
  // If there is no frist property, just return null.
  // Store the frist property in a variable.
  // See if the frist is the same as the last (check if there is only 1 node). If so, set the frist and last to be null.
  // If there is more than 1 node, set the frist property to be the next property of frist.

  dequeue (val) {
    if (!this.frist) {
      return null
    }

    const temp = this.frist

    if (this.frist === this.last) {
      this.last = null
    }

    this.frist = this.frist.next
    this.size--
    return temp.value
  }
}
