// for of loop

// ["","" ,""]
// [{},{},{}]

const arr=[1,2,3,4,5]

for (const val of arr) {
   //  console.log(val);
}

const greeting="aditya"
for (const greet of greeting) {
   // console.log(greet);
}

// Maps

const map=new Map()
map.set('IN',"India")
map.set('Fr',"France")

// console.log(map);

for (const [key,value] of map) {
    // console.log(key,':-', value);
}


const myObject={
    'game1':'NFS',
    'game2':'racing'
}

// for (const [key,value] of myObject) {
//     console.log(key,':-', value);  //give error because object is not iteratable
// }