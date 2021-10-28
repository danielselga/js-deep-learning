const objectLiteral = {
	fristName: 'Daniel',
	isProgrammer: true
}

const objToJson = JSON.stringify(objectLiteral)
console.log(objToJson) // return a JSON
console.log(typeof objToJson) // String Type

const jsonToObj = JSON.parse(objToJson)
console.log(jsonToObj) // Return a JS Object
console.log(typeof jsonToObj) // Return a JS Object
