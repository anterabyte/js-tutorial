// && is and operator , || is or operator, ! is not operator, !! is double negation, it acts Boolean() function.

// Logical Not (!)

let msg1 = "Hello",
    msg2 = "World";

console.log(msg1)
console.log(!msg2)

/*
   The logical ! operator works based on the following rules: 
   If a is undefined, the result is true.
   If a is null, the result is true.
   If a is a number other than 0, the result is false.
   If a is NaN, the result is true.
   If a is an object, the result is false.
   If a is an empty string, the result is true. If a is a non-empty string, the result is false
 */


// Double-negation (!!)

/*
Sometimes, you may see the double negation (!!) in the code. The !! uses the logical NOT operator (!) twice to convert a value to its real boolean value. The result is the same as using the Boolean() function.
 */

let counter = 10
console.log(!!counter) // true


// Logical And operator (&&)
let a = true ;
let b = false ;
let result = a && b;

// Now in && operator , result of the operation depends on the second or last variable, as if any value of the operands become false whole result will always be false. In above example If a is true, then result will depend upon b if b is false whole result is false and if b is true whole result will be true. But if a is false then whole result will always be false, regardless value of b.

// Now

let a1 = true

result = a1 && (1/0)

// In JS && operator will be depend on the second operand if first value is true. So

console.log(result) // result -> infinity

// But if

a1 = false

result = a1 && (1/0) // result -> false

// If there is chain of && operators

let b1 = a && a1 && msg1 // evalation will be done from left to right, so again if a become false whole result will be false but if result b1 has to be true till last value msg1 has to be true also. This procedure is known as short-circuit evaluation.

// If a value can be converted to true, it is called a truthy value. If a value can be converted to false, it is a called a falsey value.



// LOGICAL OR (||) operator -
let a3 = true
let b3 = false

result = a3 || b3

// Now the whole process for the || operator will be just opposite to the && operator. If first a3 is true then whole result is true. if a3 become false then whole result depends on the b3.

// Similiar to the short-circuit evaluation of the && operator, || operator just works in opposite way.

// Next

result = a1 || a2 || a3

// Chaining property of the || is similiar to the && operator, but if a1 become true whole result will be true, just opposite behaviour to the && operator.

// In logical operator precdence ! takes first place means higher order than && than ||.

