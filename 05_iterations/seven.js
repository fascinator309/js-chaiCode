const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.

//  this is different from Map(object)
// this is used lke filter methods of array

const newNums = myNumers.map( (num) => { return num + 10})

console.log(newNums);

console.log("line breaker")


// chaining of methods
const newNums2 = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)             // multiple methods using '.' operator
                .filter( (num) => num >= 40);

console.log(newNums2);