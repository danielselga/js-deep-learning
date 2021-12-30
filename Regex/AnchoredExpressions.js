// Anchored expressions

// Anchoring metacharacters

// ^ Anchors the match to the start of the line
// $ Anchors the match to the end of the line

// Word boundary
// \b Word Boundary - Pattern bounded by a non-word character
// \B Nonword boundary - Pattern bounded by a word character

// References position, not an actual character.
// Word characters: \w or [a-zA-Z0-9_] -> Underscore is a part of a word character

// Anchored only will match 5 digits
let re = /^[0-9]{5}$/

// Data set and achor combo to get USA zip code
let re = /^[0-9]{5}-[0-9]{4}$/

// Acurate regex rules
// When possible, define the quantity of repeated expressions
// Narrow the scope of repeated expressions
// Provide clear starting and ending points

// Exercise

let text1 = `Each and every Tuesday, at the beginning of the day, we hold a staff meeting. 
At the Tuesday staff meeting, you will need to make a report on the past weeks progress, 
and you will receive assignments for the following Tuesday. Just be aware that somedays this 
Tuesday meeting might not occur. When that happens, we will make an announcement.`

let reg = /\b[mtwfs][a-z]{1,4}[nsir]day\b/gi

let newText = text1.replace(reg, 'Monday')

console.log(newText)