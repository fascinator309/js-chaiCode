const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);   // here this refer to current obj
    }

}

user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);    
/*
In Node.js :- At the top level of a file (outside of any functions), this refers to the module exports object, which is {} (an empty object) unless you've added something to exports.
Browser environment:- If the same code runs in a browser's global scope (non-strict mode), this refers to the global window object, not {}.
*/

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

const addTwo1 = (num1, num2) => {
    return num1 + num2                // use "return" when use {} curly braces 
}

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"})    // obj pass as argument


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()