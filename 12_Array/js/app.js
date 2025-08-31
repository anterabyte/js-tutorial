// Array

// Create an empty array
let arr = new Array() // In JS array is like list in python, dynamic can hold multiple type of values

// Create an fixed size array
let arr1 = Array(10) ;

// Array with some elements to intitialize
let arr2  = Array(1,2,3,4) ; // Note that if you use the Array() constructor to create an array and pass a number into it, you are creating an array with an initial size.

// Even without new we can create with help of an Array constructor
let arr3 = Array()

/*
   Note that if you use the Array() constructor to create an array and pass a number into it, you are creating an array with an initial size.


   However, when you pass a value of another type like string into the Array() constructor, you create an array with an element of that value. For example:

   let athletes = new Array(3); // creates an array with initial size 3
   let scores = new Array(1, 2, 3); // create an array with three numbers 1,2 3
   let signs = new Array('Red'); // creates an array with one element 'Red'
 */

// Another method to create an array

let arr4 = [1,2,3,4] ;

let empArray = []

// Access in Array

arr4[0]

// changes values in array

arr2[3] = 5

// length of array
console.log(arr2.length)

// Appending a value in Array
arr1.push(34)

// Adding an element on the beginning of the array
arr3.unshift(32)

// removing element from last
arr2.pop()

// removing an element from the beginning
arr2.shift()

// finding the index of the element
arr2.indexOf(3)

// Check if a variable is a array
console.log(Array.isArray(arr2)) ; 

