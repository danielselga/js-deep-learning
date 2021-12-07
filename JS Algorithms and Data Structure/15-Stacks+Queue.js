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
