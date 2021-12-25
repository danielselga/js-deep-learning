/* DYNAMIC PROGRAMMING */

// Objectives
// Define what dynamic programming is
// Explain what overlapping subproblems are
// Understand what optimal substructure is
// Solve more challenging problems using dynamic programming

// WTF IS DYNAMIC PROGRAMMIN
// A method for solving a complex problem by breaking it down into a collection of simpler subproblems, solving each of those subproblems just once, and storing their solution.

// It only works on problems with optimal substructure and overlaping subproblems.

// Overlaping subproblems
// A problem is said have overlapping subproblems if it can be broken down into subproblems which are reused several times

// Optimal substructure
// A problem is said to have optimal substructure if an optimal solution can be constructed form optimal solutions of its subproblems

// Recursive solution for fibonati 

function fib(n) {
    if (n <= 2) {
        return 1
    }

    return fib(n-1) + fib (n-2)
}

// Memoization
// Storing the results of expensive function calls and returning the cached result when the same inputs occour again.

// A memo-ized solution

function fib(n, memo = []) {
    if (memo[n] !== undefined) {
        return memo[n]
    }

    if (n <= 2) {
        return 1
    }

    const res = fib(n-1, memo) + fib(n-2, memo)
    memo[n] = res
    return res
}

// Tabulation
// Storing the result of a previous result in a table (usualy an array)

// Usualy done using iteration

// Better space complexity can be achived using tabulation

// A tabulation solution

function fib(n) {
    if (n <= 2) {
        return 1
    }

    const fibNums = [0, 1, 1]

    for (let i = 3; i <= n; i++) {
        fibNums[i] = fibNums[i - 1] + fibNums[i - 2]
    }

    return fibNums[n]
}

