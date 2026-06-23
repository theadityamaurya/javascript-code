// for loop

for (let index = 0; index < 10; index++) {
    element = index;
    if(element==5){
        // console.log("5 is greater than 4");
        
    }
    // console.log(element);
}


for (let i = 0; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);
    for (let j = 0; j <=10; j++) {
       // console.log(`inner loop value: ${j} and inner loop : ${i}`);
       // console.log(i + '*' + j + '=' + i*j);
       
    } 
}


let myArray=["aditya","humanshu","abhinav"]
// console.log(myArray.length);

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
    
    
}


// break and continue keywords

for (let index = 0; index <=20; index++) {
    if(index==5){
        // console.log("detected 5");
        // break;
        continue;
    }
   // console.log(`value of i is ${index}`);
    
}


// while loop

let index=0
while (index<=10) {
    // console.log(`value of index is ${index}`);
    index=index+2
}


let myArr=["aditya","humanshu","abhinav"]
let arr=0
while (arr<myArr.length) {
    // console.log(`value is ${myArr[arr]}`);
    arr+=1
}



// do while loop

let score=11
do {
    console.log(`score is ${score}`);
    score++
} while (score<=10);
 
