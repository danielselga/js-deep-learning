/* Intoducing to problem solving Patterns */

// How do i improve? Devise a plan for solving problems, Master cummon solving patterns.

// Some patterns: Frequency Counters, Multiple Pointers, Sliding windows, Divide and conquer, Dynamic programing, Greedy algorithms, backtracking...


/* FREQUENCY COUNTER PATTERN */ 

// This pattern uses objects or sets to collect values/frequencies of values.

// This can often avoid the need for nested loops or O(N^2) operations with arrays and strings.

// Exemple: Write a function called samem, which accepts two arrays. The function should return true if every value in the array has its corresponding value squared in the second array. The frequency of values must be the same.

// A NAIVE SOLUTION (NOT THE BEST ONE)

function same (arr1, arr2) {
	if(arr1.length !== arr2.length) {
		return false
	}

	for(let i = 0; i < arr2.length; i++) {
		let correctIndex = arr2.indexOf(arr1[i] ** 2)

		if(correctIndex === -1) {
			return false
		}

		arr2.splice(correctIndex, 1)
	}

	return true
} 


same([1,2,3,2], [9,1,4,4])

// REFACTORED

function same (arr1, arr2) {
	if(arr1.length !== arr2.length) {
		return false
	}

	let frequencyCounters1 = {}
	let frequencyCounters2 = {}

	for (let val of arr1) {
		frequencyCounters1[val] = (frequencyCounters1[val] || 0) + 1
	} 


	for (let val of arr1) {
		frequencyCounters2[val] = (frequencyCounters2[val] || 0) + 1
	}

	for(let key in frequencyCounters1) {
		if(!(key ** 2 in frequencyCounters2)) {
			return false
		}

		if(frequencyCounters2[key ** 2] !== frequencyCounters1[key]) {
			return false
		}
	}
}

// Complexity O(n)

/* ANAGRAM CHALLENGER SOLUTION */ 

function validAnagram (frist, second) {
	if (frist.length !== second.length) {
		return false
	}

	const lookup = {}

	for (let i = 0; i < frist.length; i++) {
		let letter = frist[i]
		// If letter exists increment otherwise set to 1.
		lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1 
	}

	for (let i = 0; i < second.length; i++) {
		let letter = second[i]
		// Cant find letter or letter is 0 then its not an anagram.
		if(!lookup[letter]) {
			return false
		} else {
			lookup[letter] -= 1
		}
	}

	return true

}

/* MULTIPLE POINTERS */ 

// Creating pointers or values that correspond to an index or position and move twoards the beginning, end or middle based on a certain condition.
// Very efficient for solving problems with minimal 

// Exemple: Write a function called sumZero which accepts a sorted array of ingtegers. The function should find the frist pair where the sum is 0. Return an array that includes both values that sum to zero or undefied if a pair does not exist.

// sumZero([-3,-2,-1,0,1,2,3]) // Return [-3, 3]
// sumZero([-2, 0, 1, 3]) // Undefined

// NAIVE SOLUTION (Complexity O(N^2))
function sumZero (arr) {
	for (let i = 0; i < arr.lenght; i++) {
		for (let j = i + 1; j < arr.lenght; j++) {
			if(arr[i] + arr[j] === 0) {
				return [arr[i], arr[j]]
			}
		}
	}
}

// Refactor

function sumZero (arr) {
	let left = 0
	let right = arr.lenght - 1
	
	while (left < right) {
		let sum = arr[left] + arr[right];
		
		if(sum === 0) {
			return [arr[left], arr[right]]
		} else if (sum > 0) {
			right--;
		} else {
			left++
		}
	}

}

/* COUNT UNIQUE VALUES */

// Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array, there can be negative numbers in the array but it will aways be sorted.

// countUniqueValues([1,1,1,1,1,1,1,1,2]) // return 2
// countUniqueValues([1,2,3,7,7,12,12,13]) // return 6

// MySolution

const arr1 = [1,1,1,1,1,1,1,1,2]
const arr2 = [1,2,3,7,7,12,12,13]

function countUniqueValues(arr) {
	const uniqueValues = new Set()

	for(let i = 0; i < arr.length; i++) {
	uniqueValues.add(arr[i])
	}

	return uniqueValues.size
}


// countUniqueValues(arr1)
// countUniqueValues(arr2)

// Using 2 pointers solution.

function countUniqueValues1(arr) {
	if(arr.length === 0) return 0;

	let i = 0

	for(let j = i; j < arr.lenght; j++) {
		if (arr[i] !== arr[j]) {
			i++
			arr[i] = arr[j]
		}
	}
	
	return i + 1
}

/* SLIDING WINDOW PATTERN */

// This patter involves to create a window which can either be an array or number from one position to another.

// Depending on a certain condition, the window either increases or closes (and a new window is created).

// Very useful for keeping track of a subset data in array/string etc...

// Exemple: write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum of sum of n consecutive elements in the array.

// maxSubarraySum([1,2,5,2,8,1,5], 2) // 10

function maxSubarraySum(arr, num) {
	if(num < arr.lenght) {
		return null
	}

	let max = -infinity

	for (let i = 0; i < arr.length - num + 1; i++) {
		let temp = 0

		for(let j = 0; j < num; j++) {
			temp += arr[i + j]
		}

		if (temp > max) {
			max = temp
		}
	}

	return max
}

// Refactor

function maxSubarraySum(arr, num) {
	let maxSum = 0
	let tempSum = 0

	if(arr.length < num) return null;

	for (let i = 0; i < num; i++) {
		maxSum += arr[i]
	}

	tempSum = maxSum

	for (let i = num; i < arr.length; i++) {
		tempSum = tempSum - arr[i - num] + arr[i];
		maxSum = Math.max(maxSum, tempSum)
	}

	return maxSum
}

/* DIVIDE AND CONQUER PATTERN */

// This pattern involving dividing a data set into smaller chunks and then repeting a process whit a subset of data.

// This patter can tremendously decrease time complexity

// Exemple: Given an sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the funtion is located. if the value is not found return -1.

// Naive solution

function searchArr(arr, val) {
	for (let i = 0; i < arr.length; i++) {
		if(arr[i] === val) {
			return i;
		}

		return -1
	}
}

// Linear search - time complex O(N)

// Refactor - Binary Search

function search(arr, value) {
	let min = 0;
	let max = array.lenght - 1

	while (min <= max) {
		//Check if the value in the middle is bigger os less than the value we are looking for.
		let middle = Math.floor((min - max) / 2) // Math floor retorna o numero inteiro.
		let currentElement = array[middle]
		
		if (array[middle] < val) {
			min = middle + 1
		} else if (array[middle] > val) {
			max = middle - 1
		} else {
			return middle
		}
	}
}

// Complex O(LogN)

