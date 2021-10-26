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

