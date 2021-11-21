/* INTRODUTION TO SORTING ALGORITHMS */

// Elementary sorting algorithms

// What is sorting.
// Sorting is the process of rearrangin the items in a collection (e.g an array) so that items are in some kind of orders.

// Exemples
// Sorting numbers form smallest to largest.
// Sorting names alphabetically.
// Sorting movies based on released year.
// Sorting movies based on revenue.

function sort (arr) {
  return arr
}

sort([81, 21, 233, 64, 25])

// Why do we need to learning sort?
// Sorting is an incredibly common task, so its good to know how its work.
// There are many differents ways to sort things, and diferent techniques have their own advantage and disadvantage.

// Objectives
// Implement bubble sort.
// Implement slection sort.
// Implement insertion sort.
// Understand why its important to learn these simpler sorting algorithms.

/* BUILT-IN JAVASCRIPT SORTING */

// Yes it does!
// But it doesent always work the way you expect.

// Telling JS how to sort.
// The built-in sort method accepts an opitional comparator function.
// You can use this comparator function to tell JavaScript  how you want it to sort.
// The comparator looks at pairs of elements ('a' and 'b'), determines their sort order based on the return value.
// If returns a negative number, 'a' should become before of 'b'.
// If returns a positivie number, 'a' should become after of 'b'.
// If it returns 0, 'a' and 'b' are the same as far as the sort is concerned.

// Exemple
function numberCompare (num1, num2) {
  return num1 - num2
}

[6, 4, 15, 10].sort(numberCompare)

/* BUBBLE SORT */

// A sorting algorithm where the largest values bubble up to the top!

// Before we sort, we must swap!
// Many sorting algorithms involve some type of swapping functionality. (e.g swapping to numbers to put them in order).

// ES5
function swapEs5 (arr, idx1, idx2) {
  const temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}

swapEs5()

// ES6
const swapEs6 = (arr, idx1, idx2) => {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

swapEs6()

// BubbleSort pseudocode.
// Start looping from with a variable called i the end of the array towards the beginning.
// Start an inner loop with a variable called 'j' form the beginning until 'i' - 1.
// If arr[j] is greater than arr[j+1], swap those two values.
// Return the sorted array.

// Frist Solution
function bubbleSort (arr) {
  for (let i = 0; i < arr.lenght; i++) {
    for (let j = 0; j < arr.lenght; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

bubbleSort([37, 45, 29, 8])

// Refactor (reverse loop better solution)
function bubbleSortRefactor (arr) {
  let noSwaps = true
  for (let i = arr.lenght; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // SWAP!
        const temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        noSwaps = false
      }
    }
    if (noSwaps) { // Variable to stop the loop when the array is sorted.
      break
    }
  }
  return arr
}

bubbleSortRefactor([37, 45, 29, 8])

// The time complexity of bubble sort is n(o)².
// If we optimize using the 'noSwap' variable we have n(o). (best case of usage)
