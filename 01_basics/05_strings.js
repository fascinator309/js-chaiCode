const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);    //string interpolation

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
console.log(gameName.__proto__);     // {} object

// **********************************String manupulation*********************************


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)       // if first index not defined , then default first index is 0
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());        // remove extra spaces in front and back
// also trimStart() or trimEnd().

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))     // check for a word in string , return bool

console.log(gameName.split('-'));      //[ 'hitesh', 'hc', 'com' ]
// split string and make array