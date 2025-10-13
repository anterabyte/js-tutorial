// Comma operator -> JavaScript uses a comma (,) to represent the comma operator. A comma operator takes two expressions, evaluates them from left to right, and returns the value of the right expression.

// flow of execution left --> to --> right
// syntx -> leftstatement, rightstatement

let x = (10, 10+20)

console.log(x) // 30, evaluate from 10 then 10+20  then return 10+20 = 30


let a = 10
let b = (a++, a+1)

console.log(a,b) // 10, 12, a = 10, b = (11 , 12), evaluate from left to right so, a++ -> 11 then a+1 -> 12, return right statement which is 12.

//  The primary purpose of the comma operator is to combine multiple expressions into one, evaluating each from left to right and returning the value of the last expression.
