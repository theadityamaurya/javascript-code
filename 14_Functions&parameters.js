
function sayMyName(){
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
    console.log("e");

}

sayMyName()  // () used for execution

function addTwoNumbers(num1,num2){  //(num1,num2) is a parameter
    // let result =num1+num2
    // return result
    return num1+num2


}

// addTwoNumbers(3,5)  // (3,5) is arguments
// addTwoNumbers(3,"5")
// addTwoNumbers(3,null)

const result=addTwoNumbers(3,4)
console.log("result:",result);

function loginUserMessagge(username = "sam"){
    if(username === undefined){
        console.log("please enter a username");
        return 

    }
    return `${username} just logged in`
}

// console.log(loginUserMessagge("aditya"));
console.log(loginUserMessagge());


// Functions with Objects And  Array
 
function calculateCartPrice(val1,val2,...num1){
    return num1
}

console.log(calculateCartPrice(200,300,500,600))

const user={
    username:"aditya",
    price:200
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

// handleObject(user)
handleObject({
    username:"sam",
    price:277
})

const myNewArray=[100,200,300,400]

function returnsecondValue(getArray){
    return getArray[1]
}

console.log(returnsecondValue(myNewArray));