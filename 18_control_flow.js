// if statement

// const isuserLoggedin=true
// const temperature=45

// if(temperature<50){
//     console.log("temperature is less than 50");
// }else{
// console.log("temperature is greater than 50");
// }
// console.log("executed");



// < , > , <= , >= , == , != , ===(it also check type of data)



// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`user power:${power}`);
    
// }
// console.log(`user power:${power}`);
    


// const balance =1000

// if(balance > 500) console.log("test");

// if(balance < 500){
//     console.log("less than");
    
// }else if(balance < 750){
//     console.log("less than 750");
// }
// else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
    
// }




const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

if(userLoggedIn && debitCard && 2==3){
      console.log("allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in");
}

// Nullish Coalescing Operator(??): null undefined

let val1;
// val1=5 ?? 10
// val1=null ?? 10
// val1=undefined ?? 14
val1=null ?? 19 ?? 13

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice=100
iceTeaPrice<=80 ? console.log("less than 80"):console.log("more than 80");

