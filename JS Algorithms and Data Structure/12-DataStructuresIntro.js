/* WHICH DATA STRUCTURE IS THE BEST */

// What do they do?
// Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

// Why so many???
// Diferent data structures excel at diferent things. Some are highly specialized, while others (like arrays) are more generally used.

// Why shoud care?
// The more time you spend as a developer, the more likely you'll need to use one fo these data structures.
// You've already worked with many of them unknowingly!

// THERE IS NO ONE BEST DATA STRUCUTURE
// They all do diferent things.
// They all excel in diferrent situations.

// Work with map/location data?
// USE A GRAPH!

// Need an ordered list with fast inserts/removals at the beginning and end?
// USE A LINKED LINK!

// Web scraping a nested HTML?
// USE A TREE!

// Need to write a scheduler?
// USE BINARY HEAP!

/* ES2015 CLASS SYNTAX OVERVIEW */

// What is a class?
// A blueprint for creating objects with pre-defined properties and methods.

// Why does we need to learn this?
// We're going to implement data strucutures as classes!

/* DATA STRUCUTRES: THE CLASS KEYWORDS */

// The syntax
class Student {
  constructor (fristName, lastName, year) {
    this.fristName = fristName
    this.lastName = lastName
    this.year = year
    this.tardies = 0
    this.scores = []
  }

  fullname () {
    return `Your fullname is ${this.fristName} ${this.lastName}`
  }

  markLate () {
    this.tardies++
    if (this.tardies >= 3) {
      return 'YOU ARE EXPELED!!!'
    }
    return `${this.fristName} ${this.lastName} has been late ${this.tardies}`
  }

  addScores (score) {
    this.scores.push(score)
    return this.scores
  }

  calculateAverage () {
    return this.scores.reduce((a, b) => (a + b) / this.scores.length)
  }
}

// The method to create new objects must be called constructor.
// The class keyword creates a constant so you can not redefine it. Watch out for the syntax as well.

const student1 = new Student('Daniel', 'Selga', 1997)
const student2 = new Student('Gege', 'Calil', 1998)

console.log(student1)
console.log(student2.fullname())

/* DATA STRUCTURES: ADDING INSTANCE METHODS */

console.log(student1.tardies)
console.log(student1.markLate())
console.log(student1.tardies)
console.log(student1.markLate())
console.log(student1.markLate())
console.log(student1.markLate())
console.log(student1.tardies)
console.log(student2.addScores(92))
console.log(student2.addScores(87))
console.log(student2.scores)
console.log(student2.calculateAverage())

/* DATA STRUCTURES: ADDING CLASS METHODS */
