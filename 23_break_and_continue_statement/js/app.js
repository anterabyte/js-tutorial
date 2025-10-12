// break, use to break from the loop

// assign a label in the JavaScript
// syntax - label_name : statement ;

// Ex -

outer : for (let i = 0; i < 10; i++) {
    console.log("Outer");
}

// Once you define a label, you can reference it in the break or continue statement.

/*
   The break statement prematurely terminates a loop such as for, do...while, and while loop, a switch, or a label statement. Here’s the syntax of the break statement:

   synatx - break label;

   In this syntax, the label is optional if you use the break statement in a loop or switch.
   synatx - break;
   
   However, if you use the break statement with a label statement, you need to specify it.

 */

for (let i = 0 ; i < 5; i++){
    for (let j =0; j < 5; j++){
	if (i + j == 4) {
	    break ;  // at every instance where i + j = 4, inner loop will break, ex - (0,4) , (1,3), (2,2) , (3,1), (4,0) 
	}
	console.log(i,j)
    }
}

// Ouput

/*
   0 0 
   0 1 
   0 2 
   0 3 
   1 0 
   1 1 
   1 2 
   2 0 
   2 1 
   3 0

 */

// but if - at i + j == 4 we want break from outer loop

outer : for (let i = 0 ; i < 5; i++){  // Add a label before for loop and let break use the label to break from the outer loop
    for (let j =0; j < 5; j++){
	if (i + j == 4) {
	    break outer ;  // at every instance where i + j = 4, inner loop will break, ex - (0,4) , (1,3), (2,2) , (3,1), (4,0) 
	}
	console.log(i,j)
    }
}



// Now for continue , instead of break the continuity and get out of loop used by break keyword, continue help to skip the current context due to conditions,

// similiarly continue has break like syntax -
// syntx => continue label_name ;

for (let i = 0 ; i < 5; i++){
    for (let j =0; j < 5; j++){
	if (i + j == 4) {
	    continue ;  // at every instance where i + j = 4, inner loop will break, ex - (0,4) , (1,3), (2,2) , (3,1), (4,0) 
	}
	console.log(i,j)
    }
}

/*
   0 0 
   0 1 
   0 2 
   0 3 
   1 0 
   1 1 
   1 2
   1 4
   2 0 
   2 1
   2 3
   2 4
   3 0
   3 2
   3 3
   3 4
   4 1
   4 2
   4 3
   4 4
 */

outer : for (let i = 0 ; i < 5; i++){
    for (let j =0; j < 5; j++){
	if (i + j == 4) {
	    continue outer ;  // at every instance where i + j = 4, inner loop will break, ex - (0,4) , (1,3), (2,2) , (3,1), (4,0) 
	}
	console.log(i,j)
    }
}
