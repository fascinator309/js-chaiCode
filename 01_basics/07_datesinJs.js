// Dates

let myDate = new Date()
console.log(myDate.toString());
// Mon Sep 23 2024 18:51:14 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());
// Mon Sep 23 2024
console.log(myDate.toLocaleString());
// 23/9/2024, 6:51:14 pm
console.log(typeof myDate);
// object


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")  //MM-DD-YYYY
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.getTime());    //1673634600000
 
let myTimeStamp = Date.now()   

console.log(myTimeStamp);       //1727097999061
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);   //2024-09-23T13:28:43.539Z
console.log(newDate.getMonth() + 1);   //9
console.log(newDate.getDay());        //1

// `${newDate.getDay()} and the time `


// toLocaleString( define internationalation u want , property u want( press Ctrl + space in vs code to see list)) 

const fullWeekDay = newDate.toLocaleString('default', {
    weekday: "long",          // full name of weekdays

    
})
console.log(fullWeekDay)    //Monday

