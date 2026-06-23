const name="aditya"
const repoCount=36

// console.log(name+repoCount+" value");

console.log('hello my name is ${name} and my repo count is ${repoCount}');

const gameName=new String("aditya--ac")

console.log(gameName[0]); 
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase()); 
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)
console.log(newString);

const anotherString=gameName.slice(-8,2)
console.log(anotherString);

const newStringOne="  aditya  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://aditya.com/aditya%20maurya"

console.log(url.replace('%20','_'));

console.log(url.includes('maurya'));

console.log(gameName.split('a'));