// dates

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreateDate=new Date(2026,5,3)
// console.log(myCreateDate.toString());

let myCreateDate=new Date("2026-06-03")
console.log(myCreateDate.toLocaleString());

let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());// month start from zero
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekDay:"long"
})



 