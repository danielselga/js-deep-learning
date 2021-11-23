/* INSERTION SORT: INTRODUCTION */

// Build up the sort by gradually creating a larger left half which is always sorted.

// Insertion pseudocode
// Start by picking the second element in the array.
// Now compare the second element with the one before it and swap if necessary.
// Continue to the next element and if it is in the incorrect order, iterate throught the sorted portion (i.e the left side) to place the element in the correct place.
// Repeat until the array is sorted.

/* INSERTION SORT: IMPLEMENTATION */

function insertionSort (arr) {
  for (let i = 1; i < arr.length; i++) {
    console.log(arr[i])
    const curVal = arr[i]
    let j = 1
    // console.log(curVal)
    for (j = i - 1; j >= 0 && arr[j] > curVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = curVal
    console.log(arr)
  }
  return arr
}

insertionSort([2, 1, 9, 76, 4])
