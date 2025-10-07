// Comparison Operator - >,<,>=,<=,==,!=. A comparison operator takes two values. If the types of values are not comparable, the comparison operator converts them into values of comparable types according to specific rules.

// A comparison operator takes two values. If the types of values are not comparable, the comparison operator converts them into values of comparable types according to specific rules.

let r1 = 20 > 10 // true
let r2 = 10 == 10 // false
let r3 = 30 < 10 // false


// Compare the numbers

let a = 10,
    b = 20 ;

if (a>b) {
    console.log("It is true I have viewed the console")
}

console.log(a == b)

// Compare strings, based on ascii values

let a1 = "string1",
    b1 = "String2"

console.log(a1 > b1) // true as ascii of s is 115 and S is 83, so s > S

// Compare num with other type

console.log( 10 > '20') // false, in this case the comparison operator converts the string '20' into the number 20 and compares with the number 10. Here is an example

console.log(10 == '10') // true

// Compare an object against a non-object

// If a value is an object, the valueOf() method of that object is called to return the value for comparison. If the object doesn’t have the valueOf() method, the toString() method is called instead. For example:


let apple = {
    valueOf : function() {
	return 10
    },
    
    toString : function() {
	return 20
    }
}

console.log(apple > 10) // false

console.log(apple == 20) // true

// In this first comparison, the apple object has the valueOf() method that returns 10. Therefore, the comparison operator uses the number 10 for comparison. In the second comparison, JavaScript first calls the valueOf() method. However, the orange object doesn’t have the valueOf() method. So JavaScript calls the toString() method to get the returned value of 20 for comparison.




// Compare a Boolean with another value

/*
If a value is a Boolean value, JavaScript converts it to a number and compares the converted value with the other value; true is converted to 1 and false is converted to 0.In addition to the above rules, the equal (==) and not equal (!=) operators also have the following rules. For example:
 */

console.log(true > 1) //false
console.log(false < 1); // true
console.log(true > false); // true
console.log(false > true); // false
console.log(true >= true); // true
console.log(true <= true); // true
console.log(false <= false); // true
console.log(false >= false); // true





// Comparing the null and undefined

/*
   In JavaScript, null equals undefined. It means that the following expression returns true.
 */

console.log(null == undefined); // true




// Compare NaN with other values

console.log(NaN == 1) //false

console.log(NaN == NaN) // false

console.log(NaN != NaN) // true

console.log(NaN != 1) //true




// Strict equal (===) and not strict equal (!==)


/*
Besides the comparison operators above, JavaScript provides strict equal ( ===) and not strict equal  ( !==) operators.
Operator	Meaning
===	strict equal
!==	not strict equal
*/

// The strict equal and not strict equal operators behave like the equal and not equal operators except that they don’t convert the operand before comparison. See the following example:

console.log("10" == 10); // true
console.log("10" === 10); // false

/*
   In the first comparison, since we use the equality operator, JavaScript converts the string into a number and performs the comparison.However, in the second comparison, we use the strict equal operator (===), JavaScript doesn’t convert the string before comparison, therefore the result is false.
 */
