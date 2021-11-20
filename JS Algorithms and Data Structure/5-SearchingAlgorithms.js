/* INTO TO SEARCHING */

// OBJECTIVES
// Describe what a searching algorithm is.
// Implement a linear search on arrays.
// Implement a binary search on sorted arrays.
// Implement a naive string searching algorithm
// Implement the KMP string search algorithm.

/* INTO TO LINEAR SEARCH */
const states = ['Alaska',
  'Alabama',
  'Arkansas',
  'American Samoa',
  'Arizona',
  'California',
  'Colorado',
  'Connecticut',
  'District of Columbia',
  'Delaware',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Iowa',
  'Idaho',
  'Illinois',
  'Indiana',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Massachusetts',
  'Maryland',
  'Maine',
  'Michigan',
  'Minnesota',
  'Missouri',
  'Mississippi',
  'Montana',
  'North Carolina',
  'North Dakota',
  'Nebraska',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'Nevada',
  'New York',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Virginia',
  'Virgin Islands',
  'Vermont',
  'Washington',
  'Wisconsin',
  'West Virginia',
  'Wyoming']

// Searching inside one array. (PERSONAL SOLUTION)
function searchArr (word, arr) {
  // Converting frist word to uppercase
  const searchedWord = word[0].toUpperCase() + word.slice(1)
  // Search inside array.
  const index = arr.indexOf(searchedWord)
  if (index === -1) {
    console.log(index)
    return false
  } else {
    console.log(index)
    return console.log(arr[index])
  }
}

searchArr('Wisconsin', states)

// How do we search?
// Given an array, the simpler way to search for an value is to look every element in the array and check if it's the value we want.

// JavaScript has search!
// There are many differents search methods on arrays in JavaScript:
// indexOf() -> if exist return the index inside the array, if dont exist return -1.
// includes() -> Check if the array contains the value.
// find() -> Expect a callback function that will return the frist element that satisfy the rules of the function.
// findIndex() -> Expect a callback and return the frist index that satisfy thie rules of the function.

// But how these functions work

// Linear search
// Let's search for 12
// const arr = [5, 8, 1, 100, 12, 3, 12]
// Linear search loops inside all of the values inside the array.

// Linear search PseudoCode
// This function accepts an array and a value .
// Loop throught the array and check if the current array element is equal to the value.
// If it is, return the index at which the element is found
// If the value never found return -1

// Search the position of a number inside one array.
const arr2 = [5, 8, 1, 100, 12, 3, 12]
// (PERSONAL SOLUTION)
function searchArrIndex (arr, num) {
  const index = arr.findIndex(el => {
    return el === num
  })

  return console.log(index)
}

searchArrIndex(arr2, 12)

/* LINEAR SEARCH SOLUTION */

function linearSearch (arr, val) {
  for (let i = 0; i < arr.lenght; i++) {
    if (arr[i] === val) {
      return i
    }
  }
  return -1
}

linearSearch([34, 56, 1, 2], 1)

/* INTRO TO BINARY SEARCH */

// Binary search is a much faster form of search.
// Rather eliminating one element at time, you can eliminate half of the remaining elements at time.
// Binary search only works on sorted arrays! (Has to be an order to it.)

// DIVIDE AND CONQUER.

/* BINARY SEARCH PSEUDO CODE */

// The function accepts a sorted array and a value.

// Create a left pointer at the start of the array, and a right pointer at the end of the array.

// while the left pointer comes before the the right pointer:
// Create a pointer in the middle.
// If you find the value you want, return index.
// The value is too small, move the left pointer up.
// If the value is to larger, move the right pointer down.

// If you never find the value return -1.

/* BINARY SEARCH SOLUTION */

function binarySearch (arr, el) {
  let start = 0
  let end = arr.lenght - 1
  const middle = Math.floor((start + end) / 2)
  console.log(start, middle, end)

  while (arr[middle] !== el) {
    const middle = Math.floor((start + end) / 2)
    if (el < arr[middle] && start <= end) {
      end = middle - 1
    } else {
      start = middle + 1
    }
    // middle = Math.floor((start + end) / 2) (eslinter enchendo o saco)
  }
  if (arr[middle] === el) {
    return middle
  }
  return -1
}

binarySearch([2, 5, 6, 9, 13, 15, 28, 30], 15)

/* BINARY SEARCH BIG O */

// What about big O?
// O log(n) -> worst and average  case.
// O(1) -> best case.
