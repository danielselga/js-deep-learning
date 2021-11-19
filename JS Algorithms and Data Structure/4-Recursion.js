/* WHY USE RECURSION */

// A process that calls itself (in JS a function that call itself).

/* THE CALL STACK */

// In almost all program languages there is a built in data strucuture that manages what happens when functions are invoked. Its named the CALL STACK.

// CALLSTACK is a stack data structure, any time a function is invoked it is placed (pushed) on the top of the call stack.

// When JavaScript sees the return keyword or when the function ends, the compiler will remove (pop).

// WHY DO I CARE? 

// You're used functions being pushed on the call stack and popped off when they're done.

// When we write recursive functions, we keep pushing new functions on to the callstack.

/* OUR FRIST RECURSIVE FUNCTION */

// How recursive function work? Invoke the same function with a diferent param until you reach your base case.

// Base case: the condition when the recursion ends.
// This is the most important concept to understand.

// Two essentials parts of a recursive function! 
// BASE CASE
// DIFERENT INPUTS

// Recursive function exemple:
function countDown (num) {
	if(num < 0) { // BASE CASE
		console.log('All done!') 
		return
	}

	console.log(num)
	num-- // Decresing one inside the param
	countDown(num) // Caling the same function till our if statement.
}

/* OUR SECOND RECURSIVE FUNCTION */

function sumRange(num) {
	if(num === 1) return 1;
	return num + sumRange(num-1)
} 

/* WRITING FACTORIAL ITERATIVELY */

function factorial (num) {
	let total = 1
	for(let i = num; i > 0; i--) {
		total *= i
	}

	return total
}

factorial(4) // Non recursive solution of factorial.

/* WRITING FACTORIAL RECURSIVELY */

function factorialRec (num) {
	if(num === 1) return 1;
	return num * factorial(num-1)
}

factorialRec(5)

/* CUMMON RECURSION PITFALLS */

// WERE THIGS GOES WROG:

// -> No base case.

// -> Forgetting to return or returning the wrong thing.

// -> Stack overflow (not the website). 

/* HELPER METHOD RECURSION */



