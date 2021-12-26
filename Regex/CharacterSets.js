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