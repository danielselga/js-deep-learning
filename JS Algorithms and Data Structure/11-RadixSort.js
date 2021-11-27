/* INTRODUTION TO RADIXSORT */

// Radix Sort
// Radix sort is a special sorting algorithm that works on lists of numbers.
// It never makes comparisons between elements!
// It exploit the fact that information about the size of a number is encoded in the number of digits.
// More digits means a bigger number.

/* RADIXSORT HELPER METHODS */

// In order to implement radix sort, it's helpful to build a few helper function frist:

// getDigit (num, place) - returns the digit in a 'num' at the given place value.
function getDigit (num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

getDigit()

// digitCount(num) - returns the number of digit in num.
function digitCount (num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

digitCount(423)

// mostDigits(nums) - Given an array of Numbers, returns the number of digts in the larger number in this list.
function mostDigits (nums) {
  let maxDigits = 0
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]))
  }
  return maxDigits
}

mostDigits([123, 3454, 645467, 36, 457])

/* RADIXSORT PSEUDOCODE */
// Define a function that accepts a list of number.
// Figure out how many digits the largets number has.
// Loop from k = 0 up to this largest number of digits.
// For each interation of the loop:
// Create buckets for each digit (0 to 9).
// Place each number in the corresponding bucket based on its kth digit.
// Replace our existing array with values in our buckets, starting with 0 and going up to 9
// Return the list at the end!
