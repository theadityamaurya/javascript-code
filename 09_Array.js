// array

const myArr=[0,1,2,3,4,5,]
const myName=["aditya","himanshu","abhinav"]

const myArr2=new Array(1,2,3,4)
console.log(myArr[3]);
console.log(myName);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(8) // add value in starting
myArr.shift()

console.log(myArr.includes(9));
console.log(myArr.indexOf(9));

const newArr=myArr.join()

console.log(myArr);
console.log(newArr);// it changes the types of data
console.log(typeof newArr);

// slice, spice 

console.log("A",myArr);

const myn1=myArr.slice(1,3)// last range is not included

console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)//last range is included.it manipulates original array.it deleted the slice array from original array
console.log("C",myArr);
console.log(myn2);
