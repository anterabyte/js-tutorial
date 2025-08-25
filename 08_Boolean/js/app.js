// Boolean

let right = true
let wrong = false

// Convert any value to the Boolean

right = Boolean("right")
console.log(right)

wrong = Boolean('')
console.log(wrong)

// If any value non-boolean used in switch statements cases, Boolean() will be used to convert any other type to boolean

let error = "an error occured"

if (error) {
    console.log(error)
}
