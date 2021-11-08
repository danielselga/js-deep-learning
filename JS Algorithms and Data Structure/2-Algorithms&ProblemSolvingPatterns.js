/* Intoducing to problem solving */

// What is algorithm? A process or set of steps to acomplish a certain task.

// Why we meed to know this? Almost everything that you do in programming involves some kind of algorithm.

// Its the foundation for being successfull problem solving and developer.

// How do i improve? Devise a plan for solving problems.

// Master cummon problem solving patterns.

// PROBLEM SOLVING
// 1 - Understand the problem.
// 2 - Explore concrete exemples.
// 3 - Brake it down.
// 4 - Solve Simplify.
// 5 - look back and refactor. 

/* STEP 1 UNDERSTAND THE PROBLEM */

// 1 - Can i restate the problem with my own words?
// 2 - What are the inputs that go into the problem?
// 3 - What are the outputs that should come from the solution to the problem?
// 4 - Can the outputs be determined from the inputs? In other words, do i have enought information to solve the problem? (You may not be able to answer this question until you set about the solving problem. Thats ok; its still worth considering the question at this early state)
// 5 - How should i label the important pieces of data that are part of the problem.

// Exemple: Write a function that takes two number and return they sum.

/* STEP 2 CONCRETE EXEMPLE */

// Coming up with exemples can help you understand the problem better.
// Exemples also provide sanity checks that your eventual solution works how it should.

// EXPLORE EXEMPLES 
// * Start with Simple exemples.
// * Progress to more complex exemples.
// * Explore exemples with empty inputs.
// * Explore exemples with invalid inputs.

/* STEP 3 BRAKE IT DOWN */

// Explicity write out the steps you need to take.

// This forces you to think about the code you will write before you write it, and helps you to catch any lingering conceptual issues or missunderstanding before you dive in and have to worry about details (lang syntax) as well.

function charCount(str) {
    // make object and return at end
    // Loop over string, for each character 
    // If the char is a number/letter AND is a key in object, add one to count
    // If the char is a number/letter AND not in object, add it to object and set value to 1
    // If the char is something else (space, period, etc...) don't do anything.
    // Return the object at the end
}

/* STEP 4 SOLVE OR SIMPLIFY */

// Solver a problem, if you cant solver a simpler problem!

// SIMPLIFY
// 1 - Find the core difficulty in what you're trying to do.
// 2 - Temporarily ignore that difficulty
// 3 - Write a simplifyed solution
// 4 - Then incorporate that solution backin.

function charCount(str) {
    // make object and return at end
    const result = {}
    // Loop over string, for each character
    for (const i = 0; i < str.length; i++) {
        const char = str[i]
        // If the char is a number/letter AND is a key in object, add one to count
        if(result[char] > 0) {
            result[char]++
        // If the char is a number/letter AND not in object, add it to object and set value to 1
        } else {
            result[char] = 1
        }

        return result
    } 
    // If the char is something else (space, period, etc...) don't do anything.
    // Return the object at the end
}

/* STEP 5 LOCK BACK AND REFACTOR */

// REFACTORING QUESTIONS
// 1 - Can you check the result?
// 2 - Can you derive the result differently?
// 3 - Can you understand it all a glance? 
// 4 - Can you use the result or method for some other problem?
// 5 - Can you improve the performance of your solution?
// 6 - Can you think any other ways to refactor?
// 7 - How other people solve this problem?

function charCount(str) {
    const obj = {}
    for (const char of str) {
        char = str[i].toLowerCase()
        if(/[a-z0-9]/.test(char)){
        obj[char] = ++obj[char] || 1
    }

        return obj
    } 
}
