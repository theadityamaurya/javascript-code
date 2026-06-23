// singleton

// objects literals
// Object.create
const JsUser={
    name:"aditya",
    "fullName":"aditya maurya",
    age:20,
    location:"amethi",
    email:"adityamaurya712@gmail.com",
    lastLoginDays:["monday","saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser.fullName);

JsUser.email="aditya.com"
//Object.freeze(JsUser)
JsUser.email="aditya@gmail.com"
console.log(JsUser)

JsUser.greeting=function(){
    console.log("hello jsuser");
}
JsUser.greeting2=function(){
    console.log('hello jsuser ,${this.name}');
}


console.log(JsUser.greeting());
console.log(JsUser.greeting2());