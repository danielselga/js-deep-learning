'use strict'

/************************* EXECUTION CONTEXT AND LEXICAL ENVIROMENT *************************/

///////////////////////// (SYNTAX PARSES - EXECUTION CONTEXT - LEXICAL ENVIROMENT) \\\\\\\\\\\\\\\\\\\\\\\\\\

// SYNTAX PARSER: A program that reads your code and determines what it does and if its grammar valid.
// Your code isnt magic, someone else write a program to translate it for the computer.
// Ex -> V8 Engine.

// LEXICAL ENVIROMENT: where something sits phisically in the code you write.
// 'LEXICAL' means having to do with words or grammar. A lexical enviroment exist in programming langs in wich where you write something important.
// Ex -> Function "Scope"

// Execution context: A wrapper to help manage the code that is running.
// Ex -> Browser, node.

///////////////////////// (NAME / VALUE PAIRS AND OBJECTS) \\\\\\\\\\\\\\\\\\\\\\\\\\

// NAME / VALUE PAIR: A name wich maps to a unique value.
// The name may be define more then once, but only can have one value in any given context.
// Ex -> Primitive values.

// OBJECT: A collection of name value pairs.
// The simples definition when we talking about javascript.

///////////////////////// (THE GLOBAL ENVIROMENT AND THE GLOBAL OBJECT) \\\\\\\\\\\\\\\\\\\\\\\\\\

// THE GLOBAL ENVIROMENT: When we start a javascript based application in the browser the V8 Engine automactly create an variable called 'this' wich will be refered to the window object.
// Window object is the global object of the browser. 

// GLOBAL: "Not inside the function"

const a = 'Hello world' // This variable is atached to the global object.

function b () { // This function is atached to the global object.

}



// Setup Memory Space for variables and functions "Hoisting"

console.log(a) // Will return undefined because the memory place is reserved but the engine doesnt know the value yek
b() // This function will execute because when js reads a function brings all the lexical context too, rerading the values inside the function.

// const a = 'Hello world' // This variable is atached to the global object.

function b () { // This function is atached to the global object.
  console.log('Shoot the function.')
}

///////////////////////// (JAVASCRIPT AND UNDEFINED) \\\\\\\\\\\\\\\\\\\\\\\\\\

// const a;
console.log(a)

// a = undefined // Never set this.

// Undefined vs not defined -> undefined the memory space is alocated but no value, not define we dont have any space in the memory fot this value.

if (a === undefined) { // Undefined is a special value in js.
    console.log('a is undefined')
} else {
    console.log('a is defined')
}

///////////////////////// (THE EXECUTION CONTEXT: CODE EXECUTION) \\\\\\\\\\\\\\\\\\\\\\\\\\

// Code execution:
function b () {
    console.log('Shoot the function.') // Read and alocate the values in the memory.
}

b() // Return the function value.

console.log(a) // Will return undefined because we have the var a but we havent the value yet.

// const a = 'Hello World' // Will set the space in memory

console.log(a) // Will return the value inside the variable.

///////////////////////// (SINGLE THREADED SYNCHRONOUS EXECUTION) \\\\\\\\\\\\\\\\\\\\\\\\\\

// Single threaded: that means one comand will be executed once one time.

// Synchronous: one at the time.

// JavaScript aways will run and execute one time.

///////////////////////// (FUNCTION INVOCATION AND THE EXECUTION STACK) \\\\\\\\\\\\\\\\\\\\\\\\\\

function c () { // Função armazenada na memoria
 console.log('invoked c') // Quando a função 'c' é chamada ela para a execução da função 'd', assim que ela retornar a função d retorna a execução. 
}

function d () { // Função armazenada na memoria
    c() // Chamada da função 'c'
    console.log('invoked d')
}

d()

// When a execution context is running all of the others will stop to run till this opened context is running.

///////////////////////// (VARIABLE ENVIROMENT: WHERE THE VARIABLES LIVE) \\\\\\\\\\\\\\\\\\\\\\\\\\
// and how they relate each other in memory.

function b() {
    var myVar // Heare we will have undefined beacause we are only creating a variable wich is only exist in this lexical context that hasnt any value.
} // When b is executed we will comeback to the global context.

function a () {
    var myVar = 2 // When the function is called this will create a new variable that only exist in this "function a" context.
    b()
}

var myVar = 1 // Will be puted in the memory space and assing the value of 1.
a()

// Even though my var is declare 3 times, all of these variable are distinc, they are unic and dont touch each other.

///////////////////////// (THE SCOPE CHAIN) \\\\\\\\\\\\\\\\\\\\\\\\\\

function b () {
    console.log(myVar) // This value will be 1 
    // That happens because if JS doesnt find any reference inside the lexical context JS will look outside the lexical enviroment and look to the global scope.
    // All of the functions are pointing to the outter enviroment (global scope in this case.). 
    // The outter enviroment dends where the function is sitted lexicaly.
    // Remember its sitted not called.
}

function a () {
    var myVar = 2
    b()
}

var myVar = 1

a()

// SCOPE CHAIN is all the links with outter enviroment and where we access the variables.

// Doesent matter the order that the function is declaed all of them are hoisted what is matter is the scope chain (in other words the scope that variable is declared.)

// Outter enviroment only will be accessed if i dont have any variable declared iside the lexical enviroment.

// Other exemple -> 

function a () {
 function b () {
    console.log(myVar) // Now we have the value of 2 because b is chaned inside the lexical enviroment of function a, when the code runs and func a is called the engine will read the lexical enviroment and myVar is in the outter enviroment (func a) that means func b has access to this lexical context and the value of myVar will be 2.
}

  var myVar = 2

  b()
}

var myVar = 1

a()

///////////////////////// (SCOPE ES6 AND LET) \\\\\\\\\\\\\\\\\\\\\\\\\\

// Scope: where a variable is avaliable in your code. and if its truly the same variable, or a new copy.

// In es6 we have the let, the difence is let only can be access after the value assign, diferent the var that we can access before and get undefined.
// Let is block scope, only can be access in this block of code, that means we still can access in the outter enviroment.

///////////////////////// (ASYNCHRONOUS CALLBACKS) \\\\\\\\\\\\\\\\\\\\\\\\\\

// ASYNC: More than one at a time.

// Event queue -> all the events are store heare, and when the browser trigger these events the engine will runs the code that is atached on these events.
// The event queue only will run after the entire code rendered, that means JS still synchronous.

function waitThreeSeconds() {
    const ms = 3000 + new Date().getTime()
    while (new Date() < ms){}
    console.log('finished function')
}

function clickHandler () {
    console.log('Click Event')
}

document.addEventListener('click', clickHandler) // The click event only will be able to be called after the while loop is finished, because events only runs after the execution stack is empty.

waitThreeSeconds()