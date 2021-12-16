/* HASH TABLES */

// What is a hash table?
// Hash tables are used to store key-value pairs. 
// They're like arrays but the keys are not ordered.
// Nerly every programming lang has some sort of hash table data structure.
// Because of their speed, hash tables are very cummonly used.

// The hash part
// To implement a hash table we'll be using an array.
// In order to look up values by keys, we need a way to convert keys into valid array indices.
// The function that performs this task is called a hash function.

// Intro to hash function

// What makes a good hash?
// Fast (i.e constant time)
// Doesn't cluster outputs at specific indices, but distribute uniformly.

// Hash function exemple (only works with strings)

function hash(key, arrayLen) {
    let total = 0
    for (let char of key) {
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrayLen
    }
}

hash("pink", 10)
hash("purple", 3)

// Refining our hash
// Only hashes strings (we wont worry about this)
// Not constant time - linear in key length
// Could be a little more random
