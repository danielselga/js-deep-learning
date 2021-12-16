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

class MaxBinaryHeap {
	constructor() {
		this.values = [41, 39, 33, 18, 27, 12];
	}

	// Insert pseudocode
	// Push the value into the values property on the heap.
	// Bubble the value up to its correct spot.
	// Bubble up ->
	// Create a variable called index which is the length of the values property - 1.
	// Create a variable called parentIndex which is the floor of (index-1)/2.
	// Keep looping as long as the values element at the parentIndex is less than the values element at the child index.
	// Swap the value of the values element at the parentIndex with the value of the element propert at the child index.
	// Set the index to be the parentIndex, and start over!

	insert(element) {
		this.values.push(element)
		this.bubbleUp()
	}

	bubbleUp() {
		let index = this.values.length - 1
		const element = this.values[index]

		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2)
			let parent = this.values[parentIndex]

			if (element <= parent) {
				break;
			}

			this.values[parentIndex] = element
			this.values[index] = parent
			index = parentIndex
		}
	}

	// Removing from a heap
	// Remove the root
	// Replace with the most recently added.
	// Adjust (sink down)

	// Sink Down
	// The procedure for deleting the root from the heap (effectively extracting the maximumelement in a max-heap or the minimum element in a min heap) and restore the properties is called down-heap (aka bubble-down, heapfy-down, sift-down)

	// Extract Max pseudocode
	// Swap the frist value in the values property with the last one.
	// Pop from the values property, so you can return the value at the end.
	// Have the root "sink down" to the correct spot.
	// Your parent index starts at 0 (the root).
	// Find the index of the left child: 2 * index + 1 (make sure its not out of bounds).
	// Find the index of the right child: 2 * index + 2 (make sure its not out of bounds).
	// If the left or right child is greater than the element ... swap. If both left and right children are larger, swap with the largest child.
	// The child index you swapped to now becomes the new parent index.
	// Keep looping and swapping until neither child is larger than the element.
	// Return the old root.

	extractMax() {
		const max = this.values[0]
		const end = this.values.pop()
		if (this.values.length > 0) {
			this.values[0] = end
			this.sinkDown()
		}
		return max
	}

	sinkDown() {
		let index = 0
		const length = this.values.length
		const element = this.values[0]

		while (true) {
			let leftChildIndex = 2 * index + 1
			let rigthChildIndex = 2 * index + 2
			let leftChild, rightChild
			let swap = null

			if (leftChildIndex < length) {
				leftChild = this.values[leftChildIndex]
				if (leftChild > element) {
					swap = leftChildIndex
				}
			}

			if (rigthChildIndex < length) {
				rightChild = this.values[rigthChildIndex]
				if (swap === null && rightChild > element ||
					(swap !== null && rightChild > leftChild)
				) {
					swap = rigthChildIndex
				}
			}

			if (swap === null) {
				break;
			}

			this.values[index] = this.values[swap]
			this.values[swap] = element
			index = swap
		}
	}
}


let heap = new MaxBinaryHeap()
heap.insert(55)

// PRIORITY QUEUE INTRO

// Building a prority queue.

// What is a pririty queue
// A data strucuture where each element has a prority.
// Elements with higher priorities are served before elements with lower priorities.

// A naive solution
// Use a list to store all elements
// Iterate over the entire thing to find the highest priority element.

// Val doesn't matter. Heap is constructed using prority.

// Our priority queue 
// Write a Min Binary Heap - lower numbers means higher priority.
// Each node has a val and a priority. Use the priority to build the heap.
// Enqueue method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
// Dequeue method removes root element, returns it and rearranges heap using priority.

class priorityQueue {
	constructor() {
		this.values
	}
}

