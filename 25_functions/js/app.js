// Syntax -> function identifier(arg) { statement; }

function Hello(argument) {
    console.log(argument)
}

// with return

function Bolo(parameter) {
    return String(parameter)
}

// arguments is a object which can be used inside a function definiton body.
/*
   Inside a function, you can access an object called arguments that represents the named arguments of the function.
   The arguments object behaves like an array though it is not an instance of the Array type.
   For example, you can use the square bracket [] to access the arguments: arguments[0] returns the first argument, arguments[1] returns the second one, and so on.
   You can also use the length property of the arguments object to determine the number of arguments.
   The following example implements a generic add() function that calculates the sum of any number of arguments.
 */

function add() {
    let sum;
    for (let i = 0 ; i < arguments.length  ; i++) {
	sum = sum + arguments[0]
    }
    return sum 
}

console.log(add(1,2))

console.log(add(1,2,3,3))

// In JavaScript, you can use a function before declaring it.
// Function hoisting is a mechanism in which the JavaScript engine physically moves function declarations to the top of the code before executing them.
