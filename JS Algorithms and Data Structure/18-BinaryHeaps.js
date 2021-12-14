/* BINARY HEAPS */

// What is a Binary Heap.
// Very similar to a binary search three, but with some different rules.
// In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeaps, parents nodes are always smaller than child nodes.

// MaxBinaryHeap
// Each parent has at most two child nodes.
// The value of each parent node is always greater than its child nodes.
// In a Max Binary Heap parent is greater than the children, but there are no guarantees between sibling nodes.
// A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out frist.

// Binary heaps are used to implement Priority Queues, which are very commonly used data structures.
// They are also used quite a bit, with graph traversal algorithms.

// Storing heaps
// Index (inside the array) * 2 + 1 -> to get the left child
// 2n + 1 -> left
// Index (inside the array) * 2 + 2 -> to get the right child
// 2n + 2 -> right

// Insert pseudocode
// Push the value into the values property on the heap.
// Bubble the value up to its correct spot.
// Bubble up ->
// Create a variable called index which is the length of the values property - 1.
// Create a variable called parentIndex which is the floor of (index-1)/2.
// Keep looping as long as the values element at the parentIndex is less than the values element at the child index.
// Swap the value of the values element at the parentIndex with the value of the element propert at the child index.
// Set the index to be the parentIndex, and start over!

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
      this.values.push(element)
      this.bubbleUp()
  }
}

