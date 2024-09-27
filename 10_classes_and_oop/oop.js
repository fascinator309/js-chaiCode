const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        
        //console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
    }
    
}
console.log(user.username)



//console.log(user.username)
//console.log(user.getUserDetails());
console.log(this);    // global context -> {}  , but in browser window obj


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

/* New keyword -> is a constructor function , that make new instance of object leterals(CLass) */

/* const userOne = User("hitesh", 12, true)
const userTwo = User("ChaiAurCode", 11, false) */   // this will over write User fun and change value when u print userone value then user two value will print , now , u undertand concept of new key in object for making new instance of object

/* 
## new key word working steps :
1. new instance of object(empty) created 
2. auto call constructor fun -> fill or pack properties and methods to new object 
3. by this keyword , argument give inject to object 
4. u got your new object 
*/

const userOne = new User("hitesh", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userTwo);

console.log( userOne instanceof User)    // true    // checking object instance to main object 