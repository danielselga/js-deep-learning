/* INTRODUTION TO QUICKSORT */

// QuickSort
// Like merge sort, exploits the fact that arrays of 0 or 1 element are always sorted.
// Works by slecting one element (called the "pivot") and finding the index where the pivot should end up in the sorted array.

// Pivot Helper
// In order to implement merge sort, it's useful to frist implement a function responsilbe arranging elements in array on either side of a pivot.
// Given an array, this helper function should designate an element as the pivot.
// It should then rearrange elements in the array so thats all values less than the pivot are moved to the left of the pivot, and all values greater than the pivot are moved to the right of the pivot.
// The order of elements on either side of the pivot doesn't matter!
// The helper should do this IN PLACE!, that is, it should not create a new array.
// When complete, the helper should return the index of the pivot.

// Picking a pivot
// The runtime of quick sort depends in a part on how one selects the pivot.
// Ideally the pivot should be chosen so that it's roughtly.
// For simplicity, we'll always chose the pivot to be the frist element (we'll talk about consequences of this later)

// Pivot pseudocode
// It will help to accept three arguments: an array, a start index, and an end index(these can default to 0 and the array length minus 1, respectivaly).
// Grab the pivot from the start of the array.
// Store the current pivot index in a variable (this will keep track of where the pivot should end up).
// Loop through the array from the start until the end.
// If the pivot is greater than the current element, increment the pivot index variable and then swap the current element with the element at the pivot index.
// Swap the start element (i.e the pivot) with the pivot index.
// return the pivot index.

// Pivot Helper Implementation

// This function have the purpose to get the index in the array of the pivot.
function pivot (arr, start = 0, end = arr.length + 1) {
  const pivot = arr[start]
  let swapIdx = start

  function swap (arr, i, j) {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
  }

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++
      swap(arr, swapIdx, i)
    }
  }
  swap(arr, start, swapIdx)
}

pivot([4, 8, 2, 1, 5, 7, 6, 3])

// QuickSort pseudocode
// Call the pivot helper on the array.
// When the helper returns to you the updated pivot index, recursively call the pivot helper on the subarray to the left of that index, and the subarray to the ring of that index.

function quickSort (arr, left, right) {
  const pivotIndex = pivot(arr, left, right)
  if (left < right) {
  // Left
    quickSort(arr, left, pivotIndex - 1)
    // Right
    quickSort(arr, pivotIndex + 1, right)
  }

  return arr
}

quickSort([4, 6, 9, 1, 2, 5, 3])
