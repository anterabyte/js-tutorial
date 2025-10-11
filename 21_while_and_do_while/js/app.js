// syntax

// while (condition) {  statement ;  }

let a = 1 

while ( a <= 20) {
    consle.log("Yes it is lower")
    a += 1
}

// sum to hundred

let total_sum = 0,
    start = 0;

while (start < 100){
    total_sum += 1
    start += 1 
}

console.log(total_sum)

// infinite loop
while (true)  {
    //statement
}


// syntax - do while

// do { statement } while (condition)

total_sum = 0 
count = 0

while (count < 10) {
    total_sum += 1
    count += 1 
}

console.log(total_sum) // 10

total_sum = 0
count = 0

do {
    total_sum += 1 
    count += 1 
    
} while (count < 10)

console.log(total_sum) // 10
