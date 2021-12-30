// Working with alternates and groups

// | -> Pipe symbol means this can be other alternates

let re1 = /\bthuesday|monday\b/gi // Match Thuesday or Monday

// Gruping

let re2 = /[a-z][0-9]{5}/gi // This only will match a 1 letter and 5 numbers

// But with gruping you can match a 1 letter 1 number five times

// () -> gruping character

let re3 = /([a-z][0-9]){5}/ // This code will match a set of 1 letter 1 number 5 times.

// Boundaring a group

let re4 = /\b(segunda|terça|quarta)\b/gi

let reDate = /^(\d\d\d\d)[-./](\d{1,2})[-./](\d{1,2})$/ // Regex for match date 1997.06.25 1997-06-05...

let date = "1997-6-25"
let arr = reDate.exec(date)
let year, month, day

if (reDate.test(date)) {
    year = arr[1]
    month = arr[2]
    day = arr[3]
} else {
    console.log('Wrong format')
}

console.log(year, month, day)

// By default groups are capturing

// To uncapturing groups we use the (?:)
