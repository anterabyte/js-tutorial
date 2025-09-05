// Addtion
let sum = 2+3
console.log(2+3)

let add = 34+45,
    sum1 = 23 + 45 ;

// Concatenation
let str1 = "Operatio",
    str2 = "n";

add = str1 + str2 // Concatenation

// If 1 value is string and other value is num, then other value is converted to string
add = 21 + "str"
console.log(add)

/*
  First Value	Second Value	Result	    Explanation
   NaN		NaN	                    If either value is NaN, the result is NaN
  Infinity	Infinity	Infinity    Infinity + Infinity = Infinity
  -Infinity	-Infinity	-Infinity   -Infinity + ( -Infinity) = – Infinity
  Infinity	-Infinity	NaN	    Infinity + -Infinity = NaN
   +0	        +0	        +0	    +0 + (+0) = +0
  -0	        +0	        +0	    -0 + (+0) = +0
  -0	        -0	        -0	    -0 + (-0) = -0
 */


// Substraction Operator
let sub = 2-90
console.log(sub)

/*
   If a value is a string, a boolean, null, or undefined, the JavaScript engine will:
  
      First, convert the value to a number using the Number() function.
      Second, perform the subtraction.
  
   The following table shows how to use the subtraction operator with special values:
   
 First Value	Second Value	Result	   Explanation
  NaN		NaN	                   If either value is NaN, the result is NaN
  Infinity	Infinity	NaN	   Infinity – Infinity = NaN
  -Infinity	-Infinity	NaN        -Infinity – ( -Infinity) = NaN
  Infinity	-Infinity	Infinity   Infinity
  +0	        +0	        +0	   +0 – (+0) = 0
  +0	        -0	        -0	   +0 – (-0) = 0
  -0	        -0	        +0	   -0 – (-0) = 0
 */

// Multiplication

let multi = 2*67
console.log(multi)

// If either value is not a number, the JavaScript engine implicitly converts it into a number using the Number() function and perform the multiplication.
// For example:

let multi1 = "5"*2
console.log(multi1) // 10

// Divide
let div = 20/10
console.log(div)

// If either value is not a number, the JavaScript engine converts it into a number for division. For example:
div = "20"/10
console.log(div)

/*
The following table shows the divide operators’ behavior when applying to special values:

First Value	Second Value	     Result	  Explanation
NaN		NaN	                          If either value is NaN, the result is NaN
A number	0	             Infinity	  1/0 = Infinity
Infinity	Infinity	     NaN	  Infinity / Infinity = NaN
0	        0	             NaN	  0/0 = NaN
Infinity	A positive number    Infinity	  Infinity / 2 = Infinity
Infinity	A negative number    -Infinity	  Infinity / -2 = -Infinity

 */

// Using arithmaric operations for Object type

let energy = {
    valueOf() {
	return 100
    },
}

add = energy + 100

sub = energy - 10

multi = energy * 3

div = energy / 5

//If the object doesn’t have the valueOf() method but has the toString() method, the JavaScript engine will call the toString() method to get the value for calculation. For example:

let energy1 = {
  toString() {
    return 50;
  },
};

let currentEnergy = energy - 10;
console.log(currentEnergy);

currentEnergy = energy + 100;
console.log(currentEnergy);

currentEnergy = energy / 2;
console.log(currentEnergy);

currentEnergy = energy * 1.5;
console.log(currentEnergy);




// Remainder Operator

// Divident = divisor * quotient + remainder

let rem = 5 % 2
console.log(rem) // 1

rem = 5 % -2 // 1, Positive divident

rem = -5 % -2 // -1, negative dicident

rem = -5 % 3 // -2, negative divident


