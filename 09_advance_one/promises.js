// promise -> future work 
// promise(callback function )

const promiseOne = new Promise(function(resolve, reject){    // making new instance of Promise object.
    //use case:-
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');    // async task
        resolve()   // connect resolve to .then
    }, 1000)
})

// use promise resolve response
promiseOne.then(function(){           // then -> when resolve // auto-matically get a parameter
    console.log("Promise consumed");
})

// *****************************************************************************

// short way of writting code
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})

// *****************************************************************************


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})    // usually resolve pass obj(data) . from any server ,ex
    }, 1000)
})

promiseThree.then(function(user){   // pass obj come in this fun.    
    console.log(user);
})

// *****************************************************************************


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')    // if promise not resolve
        }
    }, 1000)
})

 promiseFour
 .then((user) => {
    console.log(user);
    return user.username                  // return value goes to next .then
}).then((username) => {                  // chaining of .then
    console.log(username);
}).catch(function(error){                  // reject output comes here
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))  
 // .finally will difinately run either resolve or reject

// ***************************Async Await********************************************


const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

// through async and await  :- this asyncronous wait for resolve , but it doesn't handle reject (builtin) , using manually try -catch to handle reject
//await :- stop the result until work complete ( resolve or reject)
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()   // async fn call 

// .then and async await both use in use cases 
/* async await use when doesn't when work when reject , like user login for dB access , if access fail not give access  */

// *****************************************************************************


async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')  
        // earlier day fetch is a library to manually install , but now this is merge in js , so it is builtin obj.

        const data = await response.json()   // string to Json   // here await imp bcz string to json  takes time , if not use awsit it pass then line and no response will print
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

// **************************** Fetch() *******************************************
// best approach of this time

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()    // when this .then work over then go to next . then (means builtin await)
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// error like 404 , is not an error , it is an reponse  , error is this when doesn't send any response i.e failed to send response.

// promise.all
// yes this is also available, kuch reading aap b kro.

/* 

mdn copied 

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]

*/