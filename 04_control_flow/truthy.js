const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// why to check array is empty or not
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}
// why to check object is empty or not
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??):-  

let val1;
// val1 = 5 ?? 10   //take 5
// val1 = null ?? 10   // take 10
// val1 = undefined ?? 15  // take 15
val1 = null ?? 10 ?? 20           // pick first defined value , take 10

console.log("val1: ",val1);


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")