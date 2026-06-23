// stack (primitive), heap(Non-Primitive)

let myName="aditya"

let anothername=myName
anothername="maurya"

console.log(myName);
console.log(anothername);

let userOne={
    email:"adityamaurya.com",
    upi:"8810979862ybl"
}

let userTwo=userOne

userTwo.email="aditya@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);