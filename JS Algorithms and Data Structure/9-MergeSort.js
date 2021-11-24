/* INTRO TO THE "CRAZIER" SORT */

// Intermediate sorting algorithm

// Objectives
// Understand the limitations of the sorting algorithms we've learned so far.
// Implement merge sort.

// Why learn this?
// The sorting algorithm we've learned so far don't scale well.
// Try out bubble sort on an array of 10000 elements, it will take quite some time.

// FASTER SORTS
// There is a family of sorting algorithms that can improve time complexity form O(N²) to O(n log n).
// There is a tradeoff between efficiency and simplicity.
// The more eficient algorithms are much less simple, and generaly take longer to understand.
// Lets dive in!

/* MERGE SORT: INTRODUCTION */

// Merge Sort
// Its a combination of two things - merging and sorting.
// Exploit the fact that arrays of 0 and 1 element are always sorted.
// Works by decomposing an array into smaller arrays of 0 or 1 elements, them build up a newly sorted array.

/* MERGE ARRAYS INTRO */

// Mergin arrays
// In order to implement merge sort, it's useful to frist implement a function responsible for merging two sorted arrays.
// Given to arrays which are sorted, this helper function should create a new array which is also sorted, and consists of all of the elements in the two inputs arrays.
// This function should run in O(n + m) time and O(n + m) space and should not modify the parameters passed to it.

// Mergin arrays pseudocode
// Create an empty array, take a look at the smallest values in each input array.
// While there are still values we haven't looked at.
// If the value in the frist array is smaller than the value in the second array, push the value in the frist array into our results and move on to the next value in the frist array.
// If the value in the frist array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array.
// Once we finish one array, push in all remaining values from the other array.

/* MERGE ARRAYS IMPLEMENTATION */

function merge (arr1, arr2) {
  const results = []
  let i = 0
  let j = 0

  while (i < arr1.length && j < arr2.length) { // If one of these arrays hit the end the while loop will stop.
    if (arr2[j] > arr1[i]) { // If array2[index] is smaller push the array1[index] to the new array called results.
      results.push(arr1[i])
      i++
    } else {
      results.push(arr2[j])
      j++
    }
  }

  // When we finish the frist while loop we need to check if some data still missing in the new array (in this case results) so we need a new while loop to push these values.
  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }

  return results
}

// merge([1, 10, 50], [2, 14, 99, 100])

/* WRITING MERGE SORT */

// Merge Sort Pseudocode
// Brake up the array into halves until you have arrays that are empty or have one element.
// Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array.
// Once the array has been merged back together, return the merged (and sorted!) array.

function mergeSort (arr) {
  if (arr.length <= 1) return arr
  let mid = Math.floor(arr.length / 2)
  let left = mergeSort(arr.slice(0, mid))
  let right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]))
