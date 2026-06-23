// var c=200
let a=300

if(true){
    let a=10
    const b=20
    c=23
    console.log("INNER:",a)
}

console.log(a);
// console.log(b);
console.log(c);


// Nested SCope

function one(){
    const username="aditya"

    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);

     two()
}

one()

if(true){
    const username="Hello"
    if(username==="Hello"){
        const website="whatsapp"
        console.log(username+website)
    }
    // console.log(website);
    // console.log(username);
}
// console.log(username);



//*******************interesting*******************

console.log(addone(5));
function addone(num){
    return num+1
}


addTwo(4)   // ReferenceError: Cannot access 'addTwo' before initialization
const addTwo=function(num){  // HOISTING
    return num+2
}
