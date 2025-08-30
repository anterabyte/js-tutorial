// JS Objects
let create = {} // syntax to create an object

let build = {
    firstName: "Rakesh",
    lastName: "Singh",
    age: 23,
    'state name': "Uttar pradesh", // In case if key is space seperated use '' rather than writing like other values 
};

// Access the object using dot notation
build.firstName

// Access the object using Array notation
build['lastName']

// field like 'state name' can be only accessed by array like notation
build['state name']

build.'state name' // will give syntax error


// Create new field in the object
build.country = "india";

// Access not create field
build.id // o/p -> undefined

// Deleting property in the object
delete build.country

// Check if field/property exist or not
lastName in build
