/* SELECTION SORT: INTRODUCTION */

// Selection Sort
// Similar to bubble sort, but instead of frist placing large values into sorted position, it places small values into sorted position.

// Selection Sort Pseudocode
// Store the frist element as the smallest value you've seen so far.
// Compare this item to the next item in the array until you find a smaller number.
// If a smaller numer is found, designate that smaller number to be the new 'minimum' and continue until the end of the array.
// If the minimum is not the value (index) you initially began with, swap the two values.
// Repeat this to the next value until the array is sorted.

/* SELECTION SORT: IMPLEMENTATION */

function selectionSort (arr) {
  for (let i = 0; i < arr.lenght; i++) {
    let lowest = i
    for (let j = i + 1; j < arr.lenght; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j
      }
    }
    if (i !== lowest) { // SWAP guard!
    // SWAP!
      const temp = arr[i]
      arr[i] = arr[lowest]
      arr.lowest = temp
    }
  }
  return arr
}

selectionSort([34, 22, 10, 19, 17])
