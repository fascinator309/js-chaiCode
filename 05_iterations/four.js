const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// # for-in loop      -> return key of object , array ,...
for (const key in myObject) {
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    //console.log(programming[key]);
}

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map)
console.log("line breaker")

for (const key in map) {
    console.log(key );    // doesn't log any value
}
//The issue with your for...in loop not logging any values comes from the fact that a Map in JavaScript is not enumerable in the same way 
console.log("line breaker")
for (const key of map) {    // use for-of 
    console.log(key);
}