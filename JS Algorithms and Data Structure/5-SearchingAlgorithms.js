/* INTO TO SEARCHING */

// OBJECTIVES
// Describe what a searching algorithm is. 
// Implement a linear search on arrays.
// Implement a binary search on sorted arrays.
// Implement a naive string searching algorithm
// Implement the KMP string search algorithm.

/* INTO TO LINEAR SEARCH */
let states = ["Alaska",
                  "Alabama",
                  "Arkansas",
                  "American Samoa",
                  "Arizona",
                  "California",
                  "Colorado",
                  "Connecticut",
                  "District of Columbia",
                  "Delaware",
                  "Florida",
                  "Georgia",
                  "Guam",
                  "Hawaii",
                  "Iowa",
                  "Idaho",
                  "Illinois",
                  "Indiana",
                  "Kansas",
                  "Kentucky",
                  "Louisiana",
                  "Massachusetts",
                  "Maryland",
                  "Maine",
                  "Michigan",
                  "Minnesota",
                  "Missouri",
                  "Mississippi",
                  "Montana",
                  "North Carolina",
                  "North Dakota",
                  "Nebraska",
                  "New Hampshire",
                  "New Jersey",
                  "New Mexico",
                  "Nevada",
                  "New York",
                  "Ohio",
                  "Oklahoma",
                  "Oregon",
                  "Pennsylvania",
                  "Puerto Rico",
                  "Rhode Island",
                  "South Carolina",
                  "South Dakota",
                  "Tennessee",
                  "Texas",
                  "Utah",
                  "Virginia",
                  "Virgin Islands",
                  "Vermont",
                  "Washington",
                  "Wisconsin",
                  "West Virginia",
                  "Wyoming"]

// Searching inside one array. (PERSONAL SOLUTION)
function searchArr(word , arr) {
	// Converting frist word to uppercase
	const searchedWord = word[0].toUpperCase() + word.slice(1)
	// Search inside array.
	const index = arr.indexOf(searchedWord)
	if(index === -1) {
		console.log(index)
		return false
	} else {
		console.log(index)
		return console.log(arr[index])
	}
}

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
const arr = [5, 8, 1, 100, 12, 3, 12]
// Linear search loops inside all of the values inside the array.

// Linear search PseudoCode 
// This function accepts an array and a value .
// Loop throught the array and check if the current array element is equal to the value.
// If it is, return the index at which the element is found
// If the value never found return -1

// Search the position of a number inside one array.
const arr = [5, 8, 1, 100, 12, 3, 12]
// (PERSONAL SOLUTION)
function searchArrIndex(arr , num) {
	const index = arr.findIndex(el => {
		return el === num
	})

	return console.log(index)
}

searchArrIndex(arr, 12)

/* LINEAR SEARCH SOLUTION */

function linearSearch(arr, val) {
	for(let i = i; i < arr.lenght; i++) {
		if(arr[i] === val) {
			return i;
		} 
	}
	return -1
}

linearSearch([34,56,1,2], 1)

/* LINEAR SEARCH BIG O */

