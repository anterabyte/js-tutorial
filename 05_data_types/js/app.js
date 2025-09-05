alert("Hello World")


// 1st Data Type - number
let mynum1 = 23

alert(mynum1)
alert(typeof(mynum1))

let myfloat1 = 12.3 // can define float numbers too

let myfloat2 = 12.00 // JS will convert float numbers like these to integer as float numbers has bigger size as comapare to int and JS want to use less memory so 12.00 will become 12

let mysmallnum = Number.MIN_VALUE // to get smallest number in the number
let mylargenum = Number.MAX_VALUE // to get largest number

let posinfinity = Number.MAX_VALUE + Number.MAX_VALUE //create positive infinite number
let neginfinity = -Number.MAX_VALUE -Number.MAX_VALUE // creates negative infinite number

let nan = "a"/2 // since "a"/2 is not possible as "a" is string and 2 is int, so its type is NaN -> Not a Number. NaN has 2 properties "any Operation NaN with is equal to NaN" and "NaN and NaN is not equal".

console.log(NaN/2) // NaN
console.log(NaN == NaN) // false



// 2nd Data Type - string
let mystr1 = "Hello World" // In JS string is immutable

alert(mystr1)
alert(typeof(mystr1))

let mystr2 = "JS"
mystr2 = mystr2 + " has a String type"
console.log(str2) // Behind the scene, the JavaScript engine creates a new string that holds the new string 'JavaScript String' and destroys the original strings 'JavaScript' and ' String'.

let mystr3 = "Hello My Fellas"
mystr3[0] = "B"
console.log(mystr3) // Output will be same Hello My Fellas




// 3rd data type - boolean
let mybool1 = true
let mybool2 = false

alert(mybool1)
alert(typeof(mybool1))
alert(typeof(mybool2))

let newbool = Boolean(mystr1) // use Boolean() function convert any other value to the boolean type


/*

   The following table displays the conversion rules:
   
Type	            true	                   false
string	       non-empty string	                empty string
number	     non-zero number and Infinity	  0, NaN
object	       non-null object	                   null
undefined	 	                         undefined

 */


console.log(Boolean("")) // false
console.log(Boolean(mynum1)) // true
console.log(Boolean(posinfinity))  // true
console.log(Boolean(myundef)) // false - unclared variable is of type undefined

// 4th data type - undefined
// any value that has not been intiatilized
let myundefined1

console.log(typeof myundefined1)
console.log(typeof myundefined2) // type of any undeclared variable is also undefined

// 5th Data type - null
let mynull = null
console.log(typeof mynull) // type of null is object

console.log(null == undefined) // In JS null is equal to undefined

// 6th Data Type - Symbol type

let mysymbol = Symbol();

console.log(mysymbol)

console.log(Symbol() == Symbol()) // false - In JS Symbol function creates a new value every time you call it

// 7th Type - BigInt

let mybigint = 123n // for a number to be bigint append "n" at the end of the number

consol.log(typeof mybigint)

// 8th Data type - Object type

let myobj = {
    "first" : "James",
    "last": "Bond",
};

console.log(myobj.first)
console.log(myobj.last)
