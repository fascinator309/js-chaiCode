const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

console.log(balance.toString().length);    // make string to use length property
console.log(balance.toFixed(2));     //100.00    only display defined decimal points
console.log(balance.toFixed(1));
console.log(balance.toFixed(0));     // 100
// console.log(balance.toFixed(-1));    // toFixed() digits argument must be between 0 and 100

const otherNumber = 123.8966

// round off 
console.log(otherNumber.toPrecision(4));         //123.9
console.log(otherNumber.toPrecision(6));        //123.897
console.log(otherNumber.toPrecision(2));        //1.2e+2

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));   // make display like indian currecy count

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
console.log(Math.round(123.8966));    //124
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// make value for a range by computer 
console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

/*In JavaScript, Math.random() generates a floating-point number between:

Minimum value: 0 (inclusive)
Maximum value: 1 (exclusive)
So, it can return values from 0 up to but not including 1.*/