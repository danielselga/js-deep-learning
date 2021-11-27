// History of Regex
// Concept developed in 1950.
// Became regulary used by Unix text processing utilities.
// Many diferents variations became standardized by the POSIX standard.
// A version of regular expressions was used in perl in the 80's.
// In 1997 Philip Hazel developed PCRE for use in many modern tools.

// Getting started

// Creating Regex in javascript
// Regex in Javascript are Objects.
// There two ways to create RegEx Objects:
// 1st way (not recomended to use)
const regex = new RegExp('hello')
// 2nd way
const regex1 = /hello/
const regex2 = /world/
// Once you have a Regex object, you can them use it with one of the methods on RegExp Constructor or the String Object wrapper.

const txt = 'Programing courses always sarts with a hello world example.'

// RegExp Methods

console.log(regex1.test(txt)) // Prototype method, that retuns a boolean checking the pattern is inside the text.
console.log(regex2.test(txt))

// Return one array which contains the index inside of the pattern inside the txt, the input and the groups.
console.log(regex1.exec(txt))
console.log(regex2.exec(txt))

// Retruns the same thing of exec.
console.log(txt.match(regex1))
console.log(txt.match(regex2))

// Returns the index of the pattern inside the txt.
console.log(txt.search(regex1))
console.log(txt.search(regex2))

// Replace allows us to swich values, the frist param is the placed that will be replaced and the second is the replace value.
// Retruns a NEW string modified (DONT CHANGE THE ACTUAL VARIABLE.
console.log(txt.replace(regex1, 'hi'))

// Will delete the hello (deliminator) and create an array with two values, the frist one is everything that is before the hello word, and the second is everything that is before.
console.log(txt.split(regex1))
// Most cummon usage of split with Regex
const regex3 = /\s/ // represent the pattern of a space value.
console.log(txt.split(regex3)) // Will separate every single word of the array.
