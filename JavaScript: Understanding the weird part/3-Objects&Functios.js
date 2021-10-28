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
