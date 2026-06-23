const coading=['js','java','cpp','python']
// coading.forEach(function (item) {
//     console.log(item);
// })


// coading.forEach( (val) =>{
//     console.log(val);     // call back funtion
// })


// function printMe(item){
//     console.log(item);
// }
// coading.forEach(printMe)


// coading.forEach((item , index, arr)=>{
//     console.log(item,index,arr);
// })


const myCoading=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"python",
        languageFileName:"py"
    },
    {
        languageName:"cpp",
        languageFileName:"c++"
    },
    {
        languageName:"java",
        languageFileName:"java"
    }
]

myCoading.forEach((item)=>{
    console.log(item.languageName);
    
})