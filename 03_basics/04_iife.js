// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);           // defination + call 
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

