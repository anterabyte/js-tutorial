// SYNTAX
// conditon ? statement1 : statement2
// ? acts as if block, : acts as else block

let a = 18;

// One line assignment and one line conditon check with if else block
a >= 18 ? console.log("greater than or equal to 18") : console.log("not equal to 18");

// Similiarly
// syntax -> let variableName = condition ? statementIfTrue : statementIfFalse
let b = 12 > 18 ? console.log("Yees Yes it is grater") : console.log("No no")


// Using the JavaScript ternary operator to perform multiple statements
// The following example uses the ternary operator to perform multiple operations, where each operation is separated by a comma. For example:

let authenticated = true

let redirectURL = authenticated ? (alert("You will redirect to admin area"),"/admin") : (alert("You will be directed to login page"), "/login");

console.log(redirectURL) // 'admin'

// chained if - else if - else in the ternary operator

let speed = 120;

let detectSpeed = speed >= 120 ? "Too fast" : speed >= 80 ? "Fast" : "ok";
