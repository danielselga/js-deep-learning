'use strict'

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