// for (initalize ; condtion; iterator) { statement; }

// total sum 
let total_sum = 0;

for (let i = 0; i < 10 ; i++){
    total_sum += 1

}

// infinite loop
for (;;){
    // statement
}


// for without intiator
let i = 0
total_sum = 0
for (; i < 9 ; i++){
    total_sum += i
}


// for without condition
total_sum = 0
for (let i = 0 ; ; i++){
    if (i < 10) {
	break ;
    }
    total_sum ++
}

// Using the JavaScript for loop without the loop body example
// JavaScript allows the for statement to have an empty statement. In this case, you place a semicolon (;) immediately after the for statement.
let sum = 0
for (let i = 0 ; i < 10 ; i++, sum += i);

