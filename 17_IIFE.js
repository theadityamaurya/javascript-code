// Immediately Invoked Function Expressions(IIFE)


(function  one(){
    // named IIFE
    console.log(`DB CONNECTED`);
    
})();  // jab 2 IIFE likhenge toh semicolon(;) se closed karenge pehla wala

( (name)=>{
    // unnnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
    
})('aditya')