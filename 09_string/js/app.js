// String is a primary type and immutable like python
let stri = "Hi"
let other = "Good Morning"


// Concatination
let greeting = stri + other
let str2
str2 += greeting 

// template literal (Or similiar to string literal)
let literal = `HI, "${other}"`


// Use variable and expression in strings
let name1 = "Mukesh"
let greetings = "Hello ${name}"
let num = "Sum of 2 and 3 is ${2+3}"


// escape character
console.log('Hi,I\'m Ram!');


// length of string
console.log(name1.length);


// Accessing string
let str = "string"

console.log(str[0]) // "s"

console.log(str[str.length - 1]) // access the last element

// Comparing strings
let result = 'a' < 'b' // true

let result1 = 'a' < 'B' // False

// Converting values to string
// 1 - By String(n)
// 2 - '' + n
// 3 - n.toString() // doesnot work for undefined and null values
