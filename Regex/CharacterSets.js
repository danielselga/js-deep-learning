// Using character sets

// Matching exemples
// gray or grey

// let re = /gr y/

// // Returns all gray and greys
// let re = /gr[ae]y/g

// // Matching all characters inside the set
// let re = /[abcd]/g

// // Matching all words
// let re = /a-z/g

// // Mathcing all spaces and 'i'
// let re = /[ i]/

// // Combining sets
// let re = /[rh][abcd][ i]/ // All 'd ' (d spaces) will match.

// // Matching rules
// let re = /[1234]/ // If we have all of these characters in our value will match 4 times.

// // Specifying a range

// //  1 to 4
// let re = /[1-4]/g

// // Special characters range
// let re = /[\-.]/

// // Range of letters
// let re = /[a-e]/

// // Combining number sets
// let re = /[1-4][1-4]/ // This only match 2 numbers together ex: 42

// // Upercase matching
// let re = /[A-Z]/g

// // Scaping ranges (ignore the hifen)
// let re = /12\-5/g

// // Each character set matchs a single character

// // In sets matching we need to think a single numbler is a single set 

// // Not work
// let nt = /[10-20]/g

// // Excluding a character set (^)
// let re = /[^0-9A-F]/ // If we use the ^ symbol will exclude (unmatch) all matches from the string.

// // Escaping the exclusion character
// let re = /[\^a-z]/

// Scaping metacharacters in a character set

// Metacharacters you may need to escape
// hifen -
// chapeuzin ^
// Hash simbol \ -> enter 2 of them
// Right bracket ]

// Character set shorthand
// \d [0-9] -> match all numbers
// \w [a-zA-Z0-9_] -> match all words
// \s [ \t\r\n] -> match all spaces

// Short hand uppercases
// \D [^0-9]
// \W [^a-zA-z0-9_]
// \S [^\t\s\n]

// Exercise

/*
Using the provided array, create a second array that only includes the numbers with the 801 area code. (The area code is the first 3 numbers.) Make sure that the phone numbers are valid (nnn-nnn-nnnn).
*/

let phoneNums = ["801-766-9754", "801-545-5454", "435-666-1212", "801-796-8010", "435-555-9801", "801-009-0909", "435-222-8013", "801-777-66553", "801-777-665-", "801-77A-6655", "801-778-665"];

let regEx = /801-\d\d\d-\d\d\d\d/g,
    newArray = [];

//let newArray = phoneNums.filter(elem => regEx.test(elem));

for (let i = 0; i < phoneNums.length; i++) {
    if (regEx.test(phoneNums[i])) {
        newArray.push(phoneNums[i]);
    }
}

console.log(newArray)
