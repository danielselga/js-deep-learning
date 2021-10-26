
/************************* TYPES AND OPERATORS *************************/

///////////////////////// (TYPES AND JAVASCRIPT) \\\\\\\\\\\\\\\\\\\\\\\\\\

// DYNAMIC TYPING: You don't tell the engine what type of data a variable holds, if figures it out while your code is running.

// Variables can hold diferents types of values because its all figured out during the execution.

// The engine will understand what type of data is readed and indentify the type, this is called dynamic typing.

///////////////////////// (PRIMITIVES TYPES) \\\\\\\\\\\\\\\\\\\\\\\\\\

// PRIMITIVE TYPE: Type of data that represents a single value. thats not an object. JS has 6 types of primitive value.

// 1) Undefined -> represents lack of existence (you shouldnt set a variable to this.)
// 2) Null -> represents lack of existence (null was created to set an empty value to a varible)
// 3) Boolean -> True or False.
// 4) Number -> Floating point number (Theres always some decimals). Unlike other program languages, theres only one 'number' type... and it can make math weird.
// 5) String -> A sequence of caracters (both '' or "" can be used to represent.)
// 6) Symbol 

///////////////////////// (OPERATORS) \\\\\\\\\\\\\\\\\\\\\\\\\\

// OPERATORS: A special function that is syntactically (written) differently, generally operators get 2 params and return 1 result.

const a = 3 + 4 // This is a function running under the hood that returns one value and assing the variable.
+(3,4) 

const b = 3 - 4 

const c = 3 > 1 // Returns the value of true.

console.log(a, b, c)

///////////////////////// (OPERATOR PRECEDENCE AND ASSOCIATIVTY) \\\\\\\\\\\\\\\\\\\\\\\\\\

// OPERATOR PRECEDENCE: Wich operator function gets called frist. Functions are called in order of precedance (HIGHER precedance wins.)

// ASSOCIATIVIITY: What order operator functions get called in: Left-to-Right 

const e = 3 + 4 * 5 // This function will return 23 because multiplication have more precendence than addition.

const a = 2, b = 3, c = 4

a = b = c

console.log(a, b, c) // All the values will be for.

// That happens because of the associativity of the equal assignment that is right-to-left, so b recives c and a recive c, the value of c is 4 that means a and b will be 4 too.

const e = (3 + 4) * 5 // Parenthesis is in the top of precedence that means what in parenthesis will run frist.
// that means this value will be 35 instead 23.

///////////////////////// (COERSION) \\\\\\\\\\\\\\\\\\\\\\\\\\

// COERSION: Converting a value from one type to another.

// This happens quite often in javascript because its dinamicaly typed.

const a = 1 + '2' //Will return 12 but this value isnt a Number type this plus 2 will onvert 1 to a string and concat.

const a  = 1 + '2' // 12

const b = '1' + 2 // 12

const c = '1' + 2 // 12

const e = 1 + 2 // 4

///////////////////////// (COMPARISON OPERATORS) \\\\\\\\\\\\\\\\\\\\\\\\\\

console.log(1 < 2 < 3) // Returns true

console.log(3 < 2 < 1) // Also returns true that happens because the comparsion operator runs left-to-right so will run 3 < 2 frist and return false, after that we will have (false < 1) and then the coersion will convert false to 0 and true to 1, the comparsion will be 0 < 1 and will return true.
console.log(false < 1) // Converted
console.log(0 < 1) // Returns true

console.log(3 == 3) // True
console.log('3' == 3) // Doble-equals coerce types and check equality.
console.log(false == 0) // Returns true because false is coerce to 0
var a = false
console.log(a == 0) // Returns true.
null == 0 // False
null < 1 // True
"" == 0 // True
"" == false // True

// All of thease code can be fixed using triple-equals "===", this means is strict equals, types, values and dont coerce.
3 === 3 // True
"3" === "3" // True
"3" === 3 // False

///////////////////////// (EXISTANCE AND BOOLEANS) \\\\\\\\\\\\\\\\\\\\\\\\\\

Boolean(undefined) // False
Boolean(null) // False
Boolean('') // False

const a;

a = null // Nothing will happen
a = "hi" // Will run the code.
a = 0 // Dont run because Boolean(0) is false

 if(a || a === 0) { // If we set triple-equal the code will run, beacause a === 0 is true and triple-equal runs frist of ||
    console.log('Not undefined, null or empty string.')
}

///////////////////////// (DEFAULT VALUES) \\\\\\\\\\\\\\\\\\\\\\\\\\

function greet(name) {
    name = name || '<User>'
    console.log('Hello' + name)
}

greet('Daniel')
greet() // Will return hello undefined.
// JS automaticaly coerce an empty value to a string undefined

true || false // True

undefined || 'hello' // Return 'hello'
// The or method return the truth VALUE

// OPERATORS ARE FUNCTIONS THAT RETURN VALUES 
"" || 'Hello' // Return 'Hello'
null || 'Hello' // Return 'Hello'
undefined || 'Hello' // Return 'Hello'
false || 'Hello' // Return 'Hello'
0 || 1 // Return 1

///////////////////////// (FRAMEWORK ASSIDE: DEFAULT VALUES) \\\\\\\\\\\\\\\\\\\\\\\\\\
