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
  // If there is no head, return undefined.
  // Store the current tail in a variable to return later.
  // If the length is 1, set the head and tail to be null.
  // Update the tail to be the previous node.
  // Set the new tail next to null.
  // Decrement the length.

  pop () { // Pop -> Removing a node from the end of the doubly linked list.
    if (!this.head) {
      return undefined
    }

    const popNode = this.tail
    if (this.length === 1) {
      this.head == null
      this.tail = null
    } else {
      this.tail = popNode.prev
      this.tail.next = null
      popNode.prev = null
    }
    this.length--
    return popNode
  }

  // Shift pseudocode
  // If length is 0, return undefined.
  // Store the current head property in a variable (We'll call the old head.)
  // If the length is one:
  // Set the head to be null
  // Set the tail to be null
  // Update the head to be the next of the old head.
  // Set the head's prev property to null.
  // Decrement the length.
  // Return the old head.

  shift () { // Shift -> Removing a node from the beginning of the doubly linked list.
    if (this.length === 0) {
      return undefined
    }

    const oldHead = this.head

    if (this.length === 1) {
      this.head = null
      this.tail = null
    } else {
      this.head = oldHead.prev
      this.head.prev = null
      oldHead.next = null
    }

    this.length--
    return oldHead
  }

  // Unshift pseudocode
  // Create a new node with the value passed to the function.
  // If the length is 0:
  // Set the head to be the new node.
  // Set the tail to be the new node.
  // Otherwise:
  // Set the prev property on the head of the list to be the new node.
  // Set the next property on the new node to be the head property.
  // Update the head to be the new node.
  // Increment the length.
  // Return the list.

  unshift (val) { // Unshift -> Adding the node to the beginning of the doubly linked list.
    const newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
    }
    this.length++
    return this
  }

  // Get pseudocode
  // If the index is less than 0 or greater or equal to the length, return null.
  // If the index is less than or equal to the half the length of the list:
  // Loop through the list starting from the head and loop towards the middle.
  // Return the node once it is found.
  // If the index is greater than the half the length of the list:
  // Loop through the list starting from the tail and loop towards the the middle.
  // Return the node once it is found.

  get (index) { // Get -> Accessing a node in a doubly linked list by its position.
    if (index < 0 || index >= this.index) {
      return null
    }

    if (index <= this.length / 2) {
      let count = 0
      let current = this.head

      while (count != index) {
        current = current.next
        count++
      }
    } else {
      let count = this.length - 1
      let current = this.tail
      while (count != index) {
        current = current.prev
        count++
      }
    }

    return current
  }

  // Set pseudocode
  // Create a variable which is the result of the get method at the index passed to the function.
  // If the get method returns a valid node, set the value of that node to be the value passed to the function.
  // Return true.

  set (index, val) { // Set -> Replacing the value of a node to the in a doubly linked list.
    const foundNode = this.get(index)
    if (foundNode != null) {
      foundNode.val = val
      return true
    }
    return false
  }

  // Insert pseudocode
  // If the index is less than zero or greater than or equal to the length return false.
  // If the index is 0, unshift.
  // If the index is the same as the length, push.
  // Use the get method to access the index -1.
  // Set the next and prev properties on the correct nodes to link everything together.
  // Increment the length.
  // Return true.

  insert (index, val) { // Insert -> Adding a node in a doubly linked list by a certain position.
    if (index < 0 || index < this.length) {
      return false
    }

    if (index === 0) {
      return !!this.unshift(val)
    }

    if (index === this.length) {
      return !!this.push(val)
    }

    const newNode = new Node(val)
    const beforeNode = this.get(index - 1)
    const afterNode = beforeNode.next

    beforeNode.next = newNode
    newNode.prev = beforeNode
    newNode.next = afterNode
    afterNode.prev = newNode
    this.length++
    return true
  }

  // Remove pseudocode
  // If the index is less than zero or greater than or equal to the length return undefined.
  // If the index is 0, shift.
  // If the index is the same as the length - 1, pop.
  // Use the get method to retrieve the item to be removed.
  // Update the next and prev properties to remove the found node from the list.
  // Set the next and the prev to null on the founded node.
  // Decrement the length.
  // Return the removed node.

  remove (index) { // Remove -> Removing a node in doubly linked list by a certain position.
    if (index < 0 || index >= this.length) {
      return undefined
    }

    if (index === 0) {
      return this.shift()
    }

    if (index === this.length - 1) {
      return this.pop()
    }

    const removedNode = this.get(index)
    removedNode.prev.next = removedNode.next
    removedNode.next.prev = removedNode.prev
    removedNode.next = null
    removedNode.prev = null
    this.length--
    return removedNode
  }
}

// Doubly linked list
// Doubly linked list are almost identical to singly linked list except there is an additional pointer to previous node.
// Better than singly linked list for finding nodes and can be done in the half the time.
// However, they do take up more memory considering the extra pointer.
