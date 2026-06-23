const myName=["aditya","himanshu","abhinav"]
const dc=["superman","flash"]

// myName.push(dc)

// console.log(myName);
// console.log(myName[3][0]);

// const all =myName.concat(dc)
// console.log(all);

// const allheroes=[...myName,...dc]
// console.log(allheroes);

const anotherArray=[1,2,3,[2,2,3],6,[7,7,8,[3,5]]]

const real_another_array=anotherArray.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("aditya"));
console.log(Array.from("aditya"));
console.log(Array.from({name:"aditya"}));

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));