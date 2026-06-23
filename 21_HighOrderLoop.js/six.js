const arr=[1,2,3]

// const myTotal=arr.reduce(function (acc ,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
    
//     return acc+currval
// },0)

// console.log(myTotal);


// const myNums=arr.reduce((acc,curr) => acc+curr,0)
// console.log(myNums);


const shoppingCard=[
    {
        itemName:"js",
        price:2999
    },
    {
        itemName:"java",
        price:5999
    },
    {
        itemName:"ios dev",
        price:12999
    },
]

const priceTopay=shoppingCard.reduce((acc,item) => acc+ item.price ,0)
console.log(priceTopay);




