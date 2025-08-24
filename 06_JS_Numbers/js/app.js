// Nums
// JS follows the IEEE-754 standard for storing integer and floating point number.

// storing int
let num1 = 23
console.log(num1)

// Octal and Hexadecimal numbers can also be assigned but JS will treat them as decimal
let numoct = 0o71 // 0o act as notation for octal number, and 0-7 is the range for the octal numbers, if the number is greater than 7 then JS will throw an error 
console.log(numoct)

let numhex = 0x1f // 0x or 0X act as the hexadecimal number notation same JS will treat them as a decimal
console.log(numhex) //o/p - 31,  0-9 and a-f used in hexadecimal 

// storing float
let num2 = 23.34 // atleast use 0 in front of a value less than 1 -> .08 = not good but valid, 0.08 = good and valid
console.log(num2)


// For very big numbers use e notation. Number after e servers as 10^.
let numlarge = 123e7 // 123x10^7
console.log(numlarge)

let numsmall = 23e-9 // 23x10^-9, Same for small numbers
console.log(numsmall)

// JS converts any floating with atleast with 6 place decimal into an e notation
let smallnum = 0.0000005
console.log(smallnum) // 5e-7

// Floating numbers are accurate upto 17 decimal places in the, so any arithmatic operation on the floating point nums will produce the approximate results -
let floatsum = 0.1 + 0.2
console.log(floatsum) // 0.30000000000000004

// Bigint - numners of size grater than 2^53-1
let numbig = 123n

