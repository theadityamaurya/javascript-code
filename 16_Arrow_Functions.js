const user={
    username:"adittya",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

console.log(this);

// function one(){
//     let username="aditya"
//     console.log(this.username);
    
// }
// one()

// const two=function(){
//     let username="aditya"
//     console.log(this.username);
    
// }
// two()

const two=()=>{   // arrow function
    let username="aditya"
    console.log(this);
    
}
// two()

// const addTwo=(num1,num2)=>{  // WHEN CURLY BRACKETS IS USED THEN RETURN STATEMENT IS NESSESARY
//     return num1+num2         // EXPLICIT RRETURN
// }

// console.log(addTwo(4,5));

// const addTwo=(num1,num2)=> num1+num2
const addTwo=(num1,num2)=> (num1+num2)  // IMPLICIT RETURN

console.log(addTwo(4,5));

// const myArray=[2,3,4,5,6]

// myArray.forEach()
