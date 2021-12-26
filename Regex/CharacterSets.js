// Using character sets

// Matching exemples
// gray or grey

let re = /gr y/

// Returns all gray and greys
let re = /gr[ae]y/g

// Matching all characters inside the set
let re = /[abcd]/g

// Matching all words
let re = /a-z/g

// Mathcing all spaces and 'i'
let re = /[ i]/

// Combining sets
let re = /[rh][abcd][ i]/ // All 'd ' (d spaces) will match.

// Matching rules
let re = /[1234]/ // If we have all of these characters in our value will match 4 times.

// Specifying a range

//  1 to 4
let re = /[1-4]/g

// Special characters range
let re = /[\-.]/

// Range of letters
let re = /[a-e]/

// Combining number sets
let re = /[1-4][1-4]/ // This only match 2 numbers together ex: 42

// Upercase matching
let re = /[A-Z]/g

// Scaping ranges (ignore the hifen)
let re = /12\-5/g

// Each character set matchs a single character

// In sets matching we need to think a single numbler is a single set 

// Not work
let nt = /[10-20]/g
