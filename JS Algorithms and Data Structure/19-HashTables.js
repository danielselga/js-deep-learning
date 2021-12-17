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
  let total = 0;

  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
}

hash("pink", 10);
hash("purple", 3);

// Refining our hash

// Only hashes strings (we wont worry about this)
// Not constant time - linear in key length
// Could be a little more random

// Hashing revisited
function hash2(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }

  return total;
}

// PRIME NUMBERS

// The prime number in the hash is helpful in spreading out the keys more uniformly.
// It's also helpful if the array that you're putting values into has a prime length.

// Dealing with colisions

// Even with a large array and great hash function, colisions are inevitable.

// There are many strategies for dealing with colisions, but we'll focus on two:
// Separate chaining.
// Linear probing.

// Separate chaining

// With separate chaining, at each index in our array we store values using a more sophisticable data structure.
// This allow us to store multiple key-value pairs at the same index.

// Linear probing

// With linear probing, when we find a collision, we search through the array to find the next empty slot.
// Unlike with separate chaining, this allows us to store a single key-value at each index.

// A hash table class

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }

    return total;
  }

  // Set

  // Accepts a key and a value
  // Hashes the key
  // Stores the key-value pair in the hash table array via separate chaining.

  set(key, value) {
    let index = this._hash(key);

    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }

    this.keyMap[index].push([key, value]);

    return index;
  }

  // Get

  // Accepts a key
  // Retrieves the key-value pair in the hash table.
  // Hashes the key

  get(key) {
    let index = this._hash(key);

    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }

    return undefined;
  }

  // Values

  // Loop thgough the hash table array and returns an array of values in the table.

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          valuesArr.push(this.keyMap[i][j]);
        }
      }
    }
    return valuesArr;
  }
}

let ht = new HashTable();

ht.set("Hello world", "goodbye");

// Keys and Values

// Keys
// Loop through the hash table array and returns an array of keys in the table.
