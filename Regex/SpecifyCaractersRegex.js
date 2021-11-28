// Understanding metacharacters

// Mathing exemples
const hello = /hello/
// here help hello
// Regex loops throught the characters trying to match with the pattern.

// Metacharacters
// ^$.*+?=!:|\/()[]{}

// Wildcard: '.' (dot) -> pattern which matches any single character.
// Exemple: h.t
// hot, h t, h!t, h3t... (can be any value inside 'h' and 't')

// Escaping Metacharacters
// Escape: \ -> will desconsiderate the other metacharacters and convert them to a real character;
// Exemple: /d.\/g
// Will match a value it is literaly 'd.' and desconsiderate the wildcard.

// Matching control characters

// Control characters
// \t tab
// \v vertical tab
// \n new line
// \r carriage return

// EXERCISE 1
// Return all numbers that start with 801 area code.
const phoneNums = ['801-766-9754', '801-545-5454', '435-666-1212', '801-796-8010', '435-555-9801', '801-009-0909', '435-222-8013', '801-777-6655']
const codeAreaPattern = /801-...-..../g

const txt = [...phoneNums].toString().replace(/,/g, ' ')

console.log(txt.match(codeAreaPattern))
