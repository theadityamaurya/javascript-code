// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3

switch (month) {
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        
        break;
}

// TRUTHY VALUE

const userEmail=""

if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email");
    
}
// falsy values
// false,0,-0,BigInt,0n,"",null,undefined,NaN

// truty values
// "0", "false", " ", [], {}, funtion(){}

if(userEmail.length===0){
    console.log("Array is empty");   
}

const emptyObj={}

if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}
