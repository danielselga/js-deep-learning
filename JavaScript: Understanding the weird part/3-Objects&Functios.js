'use strict'

/************************* TYPES AND OPERATORS *************************/

///////////////////////// (OBJECTS AND THE DOT) \\\\\\\\\\\\\\\\\\\\\\\\\\

// Objects are collections of name/value pairs and objects can contains other collections of name/value pairs in other words other objects.

const person = new Object()

person["fristName"] = 'Daniel'
person["lastName"] = 'Selga'

const fristName = "fristName"

console.log(person)
console.log(person[fristName])
console.log(person.fristName)

// The value after the dot is seted to a string, also we can use [string] to find objects.

person.address = new Object()

person.address.street = '111 main st' // Left-to-right that means address will called frist and then the street.
person.address.city = 'New York'
person.address.state = 'NY'

console.log(person.address.street)
console.log(person.address['city'])
console.log(person['address']['state'])

///////////////////////// (OBJECTS AND OBJECT LITERALS) \\\\\\\\\\\\\\\\\\\\\\\\\\

const personLiteral = {
    fristName: 'Daniel',
    lastName: 'Selga',
    address: {
        street: '111 main st',
        city: 'New York',
        state: 'NY'
    }
} // Object Literal, will create an empty object.

function greet(person) {
    console.log('Hi ' + person.fristName)
}

greet(personLiteral)

greet({fristName: 'Gege', lastName: 'Calil'})

///////////////////////// (FAKING NAMESPACES) \\\\\\\\\\\\\\\\\\\\\\\\\\

// NAMESPACES: A container for variables and functions, typically to keep variables and functions with the same name separated.

const greet = 'Hello'
const greet = 'Holla'

console.log(greet)  // Return Holla, in js the name can be able to use if we have some value atched to this name.

const english = {}

const spanish = {}

spanish.greet = 'Holla' // Objects context is singular in JS that means any value declared inside the object are singular. // Heap

english.greeting.greet = 'Hello from usa' // This wont work, beacuse the english object is empty, remember the dot "." is left-to-right that means in call we have undefined.greet = 'value'

english.greet = 'Hello'


const english = {
    greeting: {
        basic: 'H1!' // Using the literal context i can call the greeting
    }
}

console.log(english) // Returns the object.

///////////////////////// (JSON AND OBJECT LITERALS) \\\\\\\\\\\\\\\\\\\\\\\\\\

const objectLiteral = {
	fristName: 'Daniel',
	isProgrammer: true
}

// Convert an object to a JSON.
const objToJson = JSON.stringify(objectLiteral) // Gets an object and convert o a JSON and the type is string.
console.log(objToJson) // return a JSON
console.log(typeof objToJson) // String Type

// Convert a JSON to an JavaScript Object.
const jsonToObj = JSON.parse(objToJson)
console.log(jsonToObj) // Return a JS Object
console.log(typeof jsonToObj) // Object Type

///////////////////////// (FUNCTIONS ARE OBJECTS) \\\\\\\\\\\\\\\\\\\\\\\\\\

// FRIST CLASS FUNCTIONS: Everything you can do with other types you can do with FUNCTIONS!!!, assign them to variables, pass them around, create them on the flight.

// Functions are a special type of objects. We can atached primitive values, object and other functions.

// NAMES: In functions NAMES are optionals that means functions can be anonymous functions.
// CODE: Code property where the actual lines of code that you've hriten sit. That means functions are invokable in our code.

///////////////////////// (FUNCTIONS STATEMENTS AND FUNCTION EXPRESSIONS) \\\\\\\\\\\\\\\\\\\\\\\\\\

// EXPRESSION: A unit of code that results in a value, it doesnt have to save to a variable.

// Exemple 

// VAR
const a = 3 // Variable

// EXPRESSION
1 + 2 // Return 3, this opeartions is an expression, its a peace of code that return value.

// The value INSIDE the parenthesis in the if statement is a expression.
if (a === 3) {
    //  Content heare
}

// FUNCTION STATEMENT
function greet () {
    console.log('h1') // When this code runs will return this value to the console.
}

anonymousGreet() // Anonymous functions can't be called before the code execution.

// FUNCTION EXPRESSION
const anonymousGreet = function() { // In anonymous functions we store the func in variables, that we mean when we call these variables the engine automaticaly will know where the object is set. 
    console.log('h1')
} // The result a anonymous functions creation is an JS Object that be created.

// Functions expressions aren't hoisted

function log (a) {
    console.log(a)
}

log(3); // console.log(3)
const b = 3
log(b) // console.log(3)

// Passing functiions inside funtions

function log (a) {
    a()
}

log(function(){
    console.log('funtion as a param')
})


///////////////////////// (BY VALUE BY PASSING) \\\\\\\\\\\\\\\\\\\\\\\\\\

// By Value (Primitives)
const b = a // A is a primitive value and be recives a copy of these value.

// By Passing (Objects)
const d = {greeting: 'h1'}

const c = d // Instead a copy of the value c will be a reference for the objects. Will be the same space in memory, no copy, is the exactly the object.

c.greeting = 'hello'

console.log(c, d) // Even we use the variable c to change the object we will recive in the b var the greeting of hello, beacuse the space and reference in memory is the same location.

// Equals operator sets up a new memory space (new address)
c = {greeting: 'howdy'}
console.log(c) // Will create a new objc contain 'howdy'
console.log(d) // Points to the old obj


///////////////////////// (OBJECTS FUNCTIONS AND 'THIS') \\\\\\\\\\\\\\\\\\\\\\\\\\

// GLOBAL OBJECT (WINDOW)

// Function statement (global context)
function a () {
    console.log(this) // The this variable points to the global (window) object
    this.newvariable = 'hello'
}

// Functions expressions
const b = function () {
    console.log(this) // Even in the anonymous functions lexical enviroment the this keyword will be point to the global object.
}

a()

console.log(newvariable)

b()

// OBJECT REFERENCE

const c = {
    name: 'the c object',
    log: function () {
        const self = this; // If we set inside the this keyword inside a variable the parent lexical enviroment and agregate to a child functions this variable and point to the object. 

        console.log(this)
        const setName = function(newName) {
            console.log(self) // THIS WILL POINT TO THE OBJECT. because we are geting the reference from the parent lexical enviroment.
            this.name = newName // A function or expression inside an object the THIS keyword will point to the global object (window) even its the expression is running inside an object.
        }

        setName('Updated agn, the c object')
        console.log(this)
    },
}

c.log() // Heare we can access the object because the this keyword inside an object is a reference for the object itself.

// The this keyword depends of 2 contexts, inside an object or the global lexical enviroment.

///////////////////////// (ARRAYS COLLETIONS OF ANYTHING) \\\\\\\\\\\\\\\\\\\\\\\\\\

var arr = new Array() // Array creation

const litArr = [1 , 2, 3] // Array literals

arr[1] // Geting the element inside the array, return the value inside the index called.

var arrCollection = [1 ,false, {name: tony, address: 'mainst'}, function(name) {console.log(name)}, "Hello"] // We can store any type of properties.

///////////////////////// ('ARGUMENTS' AND SPREADS) \\\\\\\\\\\\\\\\\\\\\\\\\\

// ARGUMENTS: The paramethers you pass to a function, JavaScript gives you a keyword of the same name which contains them all.

function greet(fristName, lastName, language = 'en', ...others) { // In arguments we can pass a default value.
    // Other way to pass default value.
    language = language || 'en'

    // With the 'arguments' keyword we can hardcode a guard to verify if all the arguments are passed.
    if(arguments.length === 0) {
        console.log('Missing paramethers')
        console.log('----------')
        return
    }
    
    console.log(fristName)
    console.log(lastName)
    console.log(language)
    console.log(arguments) // This is a reserved keyword that return an array of all the values inside the arguments.
    console.log('--------------')
}

greet() // All of the values return undefined and log the '----'

greet('Daniel') // Return daniel and 2 undefineds and log the '----'
greet('Daniel', 'Doe')
greet('Daniel', 'Doe', 'EN / PTBR') // All of theses functions will runing that means in JS we can skip paramethers and the empty arguments values will be undefined.

greet('Daniel', 'Doe', 'EN / PTBR', 'Main st', '111') // If we set the spread operator we can create new params in the call of the function.

///////////////////////// (FUNCTIONS OVERLOADING) \\\\\\\\\\\\\\\\\\\\\\\\\\

function greet (fristName, lastName, language) {
    language = language || 'en'
     
    if(language === 'en') {
        console.log(`Hello ${fristName} ${lastName}`)
    } else if (language === 'es') {
        console.log(`Holla ${fristName} ${lastName}`)
    }
}

const greetEnglish = (fristName, lastName) => {
    greet(fristName, lastName, 'en')
}

const greetSpanish = (fristName, lastName) => {
    greet(fristName, lastName, 'es')
}

// In JS we wont need to take care about funtion overloading.

greetEnglish('Daniel', 'Selga') // Return Hello

greetSpanish('Daniel', 'Selga') // Return Holla

///////////////////////// (SYNTAX PARSER) \\\\\\\\\\\\\\\\\\\\\\\\\\

// SYNTAX PARSER: is part of Javascript engine. It reads your code character by character, tells what your code does, and check if the grammar is correct or not.

///////////////////////// (AUTOMATIC SEMICOLON INSERTION) \\\\\\\\\\\\\\\\\\\\\\\\\\

function getPerson () {
    return // JS will put an automatic SEMICOLON heare and return the funtions with undefined.
    {
        fristName: 'Daniel' // Return undefined
    }
}

console.log(getPerson()) 

///////////////////////// (WHITESPACE) \\\\\\\\\\\\\\\\\\\\\\\\\\

// WHITESPACE: Invisible caracters that create literal 'SPACE' in your written code.

// (Carriages returns, tabs, space)

// Coments heare about fristName
const fristName, 
// Extra space to comment or write something
lastName, 
// my language
language 
// The code still runs the same, the syntax parser ignore all of these white spaces.

const person = {
    //Frist name
    name: 'Daniel',

    // The last name (Always required)
    lastName: 'Selga'
}

console.log(person)

///////////////////////// (IMMEDIATLY INVOKED FUNCTION EXPRESSIONS (IFFE)S) \\\\\\\\\\\\\\\\\\\\\\\\\\

// Function statement
function greet(name) {
 console.log('Hello' + ' ' + name)
}
    
greet('Daniel')
    
// Function Expression 
const greetFunc = (name) => {
    console.log('Hello' + '' + name)
}

greetFunc('Daniel')

// Invoking functions on the fly.

const greeting = function(name) {
    console.log('Hello' + '' + name)

}('Daniel'); // Invoking the function imediatly (IIFE)

const fristName = 'Daniel'

(function(name) {

    const greeting = 'Inside IFFE: Hello'
    return greeting + '' + name // Will return imediatly an string.
})(fristName); // We only use parenthesis in expressions (anon functions) beacause pharetesis is an operator that execute expressions.

///////////////////////// (UNDERSTANDING CLOSURES) \\\\\\\\\\\\\\\\\\\\\\\\\\

function greet (whattosay) {
    return function name (name) { // Retruning a function
        console.log(whattosay + name)
    }
}

greet('hi')('Daniel') // Invoking a function returned of other function.

const sayHi = greet('hi') // if we Set a funtions that returns a function to a variable we can invoke that variable (like a function) and the value will be the returned function.

sayHi('Daniel')

// Build functions (closure)
function buildFunctions() {
    const arr = []

    for(let i = 0; i <3 ; i++) {
        arr.push(
            function () { // Creating functions and pushing to the array.
                console.log(i)
            }
        )
    }
}

const fs = buildFunctions()

// Invoking functions inside the arrays.
fs[0]() // 3
fs[1]() // 3
fs[2]() // 3
// All of these functions will return 3 because all of them are pointed to the same space memory which the engine keep alive.

function buildFunctions2() {
    const arr = []
    
    for(let i = 0; i <3 ; i++) {
        let j = i
        arr.push(
            function () { // Creating functions and pushing to the array.
                console.log(j)
            }
        )
    }
}

const fs = buildFunctions()

// Invoking functions inside the arrays.
fs[0]() // 1
fs[1]() // 2
fs[2]() // 3
// Now this funcions we can get the expected value, because we are pointing to a variable that have the value alive inside the engine.

///////////////////////// (FUNCTION FACTORIES) \\\\\\\\\\\\\\\\\\\\\\\\\\

function makeGreeting(language) { // Factory functions

    return function (fristName, lastName) {
        if(language === 'en') {
            console.log(`Hello ${fristName} ${lastName}`)
        } else if (language === 'es') {
            console.log(`Holla ${fristName} ${lastName}`)
        } // Taking advantage to closures to return some expected value.
    }

}

const greetEnglish = makeGreeting('en')
const greetEspanish = makeGreeting('es') 

greetEnglish('Daniel', 'Selga')

///////////////////////// (CLOSURES AND CALLBACKS) \\\\\\\\\\\\\\\\\\\\\\\\\\

function sayHiLatter () {
    const greeting = 'hi'

    setTimeout(function() {
        console.log(greeting)
    }, 3000)
}

sayHiLatter()

// CALLBACK FUNCTION: A function you give to another function to be run when the other function is finished.

// So the function you call (invoke, 'calls back' by calling the function you gave it when it finishes.

function tellmeWhenDone (callback) {
    const a = 1000
    const b = 2000 //Some work

    callback() // Caling the function passed as an argument
}

tellmeWhenDone(function() {
    alert('function done')
})

///////////////////////// (CALL() APPLY() AND BIND() ) \\\\\\\\\\\\\\\\\\\\\\\\\\

// All functions have acess tho call applly and bind method.

//BIND()
const person = {
    fristName: 'Daniel',
    lastName: 'Selga',
    getFullName: function() {
        const fullname = this.fristName + ' ' + this.lastName
        return fullname
    }
}

const logName = function(lang1, lang2) {
    console.log('logged: ' + this.getFullName()) // this.getFullname() wont work because the 'this' keyword is pointed to the global object.
    console.log('Arguments' + lang1 + ' ' + lang2)
}.bind(person) // We can bind functions on the fly too.

logName() // Undefined, if binded we get the result referenced the object binded.

const logPersonName = logName.bind(person) // This bind method atach any function to an object and of references using the 'this' keyword will point to this object.

logPersonName()

// Bind create a copy and reference to the binded object.

// CALL()
logName.call(person, 'en', 'es') // This method invoke one function that abble to bind an object with the 'this' keyword and we can set some arguments to them.

// APPLY()
logName.apply(person, ['en', 'es']) // The apply method runs as same the call method but the params mus be inside one array.

// Combining IFFE and the apply method
(function(lang1, lang2) {
    console.log('logged: ' + this.getFullName()) // this.getFullname() wont work because the 'this' keyword is pointed to the global object.
    console.log('Arguments' + lang1 + ' ' + lang2)
}).apply(person, [en, es])

// FUNCTION BORROWING
const person2 = {
    fristName: 'Gege',
    lastName: 'Calil'
}

person.getFullName.apply(person2) // This methos permit us to invoka an object expression and set another object to be the reference.

// FUNCTION CURRYING
function multiply (a, b) {
    return a * b
}

const multiplyByTwo = multiply.bind(this, 2) // Bind doesent execute, bind create a copy and set the values permanent to the object.
// When multiply by 2, the b will be permanet because we are using a copy of the function

multiplyByTwo(4) // Returns 8

// FUNCTION CURRYNG: Create a copy of a function but with some preset parameters, very useful in mathematical situations.

///////////////////////// (FUNCTIONAL PROGRAMMING) \\\\\\\\\\\\\\\\\\\\\\\\\\

const arr1 = [1, 2, 3]

const arr2 = []

// Declarative way to put values and doble these values inside arr2
for (const i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2)
}

// Functional way to put values and doble them inside the array
function mapForEach(arr, fn) {
    const newArr = []
for (const i = 0; i < arr1.length; i++) {
    newArr.push(
        fn(arr[i])
    )
 }
    return newArr
}

const arr2 = mapForEach(arr1, function(item) { // Passing a callback function is more 'functinal way' to programming
    return item * 2
})

const arr3 = mapForEach(arr1, function(item) { 
    return item > 2 // Returning a boolean and switching the retruning value reusing an function call.
})

const checkPastLimit = function(item, limiter) {
    return item > limiter
}

const arr4 = mapForEach(arr1, checkPastLimit.bind(this, 1)) // The second argument that mapforeach expect is a functions with only one paramether, we can use bind to create a copy of a function with 2 or more paramethers and set default values for this function, and call only with one value.

const checkPastLimitSimplified = function(limiter) {
    return function (limiter, item) { // This function is called inside the mapForEach
        return item > limiter
    }.bind(this, limiter) // This bind is with the parent function, checkPastLimitSimplified, we get the data on the call and runs inside another function using this values.
}

const arr5 = mapForEach(arr1, checkPastLimitSimplified(1))