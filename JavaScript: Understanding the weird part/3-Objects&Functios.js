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