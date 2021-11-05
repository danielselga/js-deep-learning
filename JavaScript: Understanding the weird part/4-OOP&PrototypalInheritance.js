/************************* OBJECTED ORIENTED JAVASCRIPT AND PROTOTYPAL INHERITANCE *************************/

///////////////////////// (CLASSICAL VS PROTOTYPAL INHERITANCE) \\\\\\\\\\\\\\\\\\\\\\\\\\

// INHERITANCE: One object gets access to the properties and methods of another object.

// CLASSICAL INHERITANCE: Verbose -> Friend, Protected, Private, Interface.

// PROTOTYPAL INHERITANCE: Simple -> Flexible, Extensible, Easy to Understand.

///////////////////////// (UNDERSTANDING THE PROTOTYPAL) \\\\\\\\\\\\\\\\\\\\\\\\\\

const person = {
    fristName: 'default',
    lastName: 'default',
    getFullName: function() {
        return this.lastName + ' ' + this.lastName
    }
}

const daniel = {
    fristName: 'Daniel',
    lastName: 'Selga'
}

// Dont do this EVER! For demo purposes only!

daniel.__proto__ = person // Daniel inherit from person.

console.log(daniel.getFullName()) // We can call in the daniel object a function declared inside person, because daniel inherit this function.

console.log(daniel.fristName) // We dont will get default because of the prototype chain, default is on a lower level. This will return 'Daniel'

const gege = {
    fristName: 'Georgia'
}

gege.__proto__ = person

console.log(gege.getFullName()) // Returns Georgia Default.

///////////////////////// (EVERYTHING IS AN OBJECT (OR A PRIMITIVE)) \\\\\\\\\\\\\\\\\\\\\\\\\\

const a = {} // The base object of javascript, the bottom place on the chain, heare we have some methods.

const b = function() {} // The function objects, that we have some methods that we can use in all of the functions of javascript.

const c  = [] // c.__proto__.__proto__ is Object {}

///////////////////////// (REFLECTION AND EXTEND) \\\\\\\\\\\\\\\\\\\\\\\\\\

// REFLECTION: An object can look at itself listing and changing its properties and methods.

for (const prop in daniel) {
    if(daniel.hasOwnProperty(prop)) // Only will log if the value is realy inside the object.
    console.log(prop + ': ' + daniel[prop]) // Loop to get all the values and methods inside the daniel object.
}

/************************* BUILDING OBJECTS *************************/

///////////////////////// ('NEW', AND THE HISTORY OF JAVASCRIPT) \\\\\\\\\\\\\\\\\\\\\\\\\\

function Person(fristName, lastName) {
    this.fristName = fristName
    this.lastName = lastName
    console.log('This function is invoked') // When we create an object using a function the function will be invoked.
    // return {greeting: 'Hello'} // If we return any value from the function this value will be the value of the object.
}

const daniel = new Person('Daniel', 'Selga') // Constructiong an object to a variable using a function seting the prototype.
// daniel will be an object with the properties of Person()

// The new keyword create an empty object, like = {}

const georgia = new Person('Georgia', 'Calil')

// FUNCTION CONTRUCTORS: A normal function that is used to construct objects. The 'this' variable points a new empty object, and that object is returned from the function automatically.

///////////////////////// (FUNCTION CONSTRUCTORS AND PROTOTYPE) \\\\\\\\\\\\\\\\\\\\\\\\\\

Person.prototype.getFullName = function () { // Seting prototype functions to a parent to child inherit.
    return this.fristName + ' ' + this.lastName
}

// Adding this prototype function to Person we can access on daniel and georgia because of the inheritance.
daniel.getFullName() // The returned value is Daniel Selga, this functions can be called in the daniel object.

// If we add functions and values using prototype if we have 1000 of objects we only have one space alocated in memory, because in inheritance we are pointing to the father object.

///////////////////////// (NEW AND FUNCTIONS) \\\\\\\\\\\\\\\\\\\\\\\\\\

// Using a capital letter after the new operator is a convention to dont get mistakes when we code.

///////////////////////// (BUILT-IN FUNCTION CUNSTRUCTORS) \\\\\\\\\\\\\\\\\\\\\\\\\\

const a = new Number(3) // Function constructor.
// A isnt a primitive is an object, because functons constructor create objects.
// A is an object that values 3 and when we create this object we acoplate some (in this case Numbers) methods to it.

const b = new String('Daniel')

b.indexOf('n') // Returns 2, this methods is given when we create the new string object.

console.log(b.length) // Method that returns the quantity of letters of b

const c = new Date('3/1/2022') // Constructing a date.

console.log(c) // Returns a javascript date.

// Adding methods to all strings.
String.prototype.isLenghtGreaterThan = function(limit) {
    return this.length > limit
}

console.log('Daniel'.isLenghtGreaterThan(3)) // All the string have access to this method.

// Adding prototype functions to Numbers
Number.prototype.isPositive = function() {
    return this > 0
}

// console.log(3.isPositive()) // Wont work! js engine cant convert a primitive number to an object.

const d = new Number(3)

d.isPositive() // Numbers only can have access to methods if we convert to an object.

const a  = 3 
const b  = Number(3)

if(a == b) {} // True, because using == the engine try to convert to the same value.
if (a === b) {} // False, because b is an object.


// Array prototype
Array.prototype.myCustomFeature = 'Cool'

const arr  = ['Daniel', 'Georgia', 'Zack']

for (const prop in arr) { // If we use for in in an array we will get the prototype property DONT USE!
    console.log(prop + ': ' + arr[prop])
}

// Instead of for in use for loops.

///////////////////////// (OBJECT.CREATE AND PURE PROTOTYPAL INHERITANCE) \\\\\\\\\\\\\\\\\\\\\\\\\\

const person = {
    fristName: 'Default',
    lastName: 'Default',
    greet: function() {
        return 'hi ' + this.fristName
    }
}

const daniel = Object.create(person) // This will create an object called daniel and inherit all the values from person.

// POLLYFILL: Code that adds a feature which the engine may lack.

/************************* ODDS AND ENDS *************************/

///////////////////////// (INITIALIZATION) \\\\\\\\\\\\\\\\\\\\\\\\\\

const people = [
    {
        fristName: 'Daniel',
        lastName: 'Selga',
        adresses: [
            '111 Main st',
            '222 Third st'
        ]
    },
    {
        // The gege object.
        fristName: 'Gege',
        lastName: 'Calil',
        adresses: [
            '333 main st',
            '444 third st'
        ],

        greet: function() {
            return 'Hello'
        }
    },

]

console.log(people)

///////////////////////// (TYPE OF INSTANCE OF AND FIGURING OUT WHAT SOMETHING IS) \\\\\\\\\\\\\\\\\\\\\\\\\\

const a = 3
console.log(typeof a) // Retuns a number

const b = 'Hello'
console.log(typeof b)  // Returns a string

const c = {} 
console.log(typeof c) // Returns an object.

const d = []
console.log(typeof d) // Returns an object
// Arrays always will be an object, doesent matter the type of the value inside
console.log(Object.prototype.toString.call(d))  // Better

function Person(name) {
    this.name = name
}

const e = new Person('Daniel')
console.log(typeof e) // Object
console.log(e instanceof Person) // True or False, chack if has in the prototype chain.

console.log(typeof undefined) // Undefined
console.log(typeof null) // A bug, like, forever, returns an object.

const z = function() {}

console.log(typeof z) // Returns function

///////////////////////// (STRINCT MODE) \\\\\\\\\\\\\\\\\\\\\\\\\\
'use strict' // Implement extra rules when the engine parse my code.
// Must be in the top of my file or in the top of my function, if sit in the top of the function the scope of the function will be strict.

const person;

persom = {} // This call will create an empty object instead we use strict mode.
console.log(persom) // Object that exist siting in the global object if we wont use strict mode.

// Use strict inside a function.
function logNewPerson() {
    'use strict' // Must be the frist line of the function.
     
    const person2
    persom2 = {}
    console.log(persom2) // Returns an error.
}

// Strict mode article: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

/************************* EXAMINING FAMOUS FRAMEWORKS AND LIBRARIES *************************/

///////////////////////// (LEARNING FROM OTHERS GOOD CODE) \\\\\\\\\\\\\\\\\\\\\\\\\\
