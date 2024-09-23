
let a = 300
if (true) {
    let a = 10
    const b = 20
    //var c = 300        // does not follow scope and also can redined with same name

    // console.log("INNER: ", a);
    
}



// console.log(a);   // a= 300 
// console.log(b);   // b is not defined 
// console.log(c);   // can access value c here also 


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){         // this type of function can defined after calling 
    return num + 1
}



addTwo(5)  //Cannot access 'addTwo' before initialization
const addTwo = function(num){   // but this must defined before call the function 
    return num + 2
}
