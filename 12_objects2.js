//const tinderuser=new Object()

const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="aditya"
tinderUser.isLogged=false
// console.log(tinderUser);

const regularUser={
    email:"aditya@gmail.com",
    fullname:{
        userfullname:{
            firstname:"aditya",
            lastname:"maurya"
        }
    }
}

console.log(regularUser.fullname.userfullname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

// const obj3={obj1,obj2}
const obj3 =Object.assign({},obj1,obj2)
console.log(obj3);

const obj4={...obj1,...obj2}
console.log(obj4)

const users=[
    {
        id:1,
        email:"m@gmail.com"
    }

]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));