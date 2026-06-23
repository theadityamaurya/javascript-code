const accountId=1234
let accountEmail="adityamaurya712@gmail.com"
var accountPassword="1236"
accountCity="amethi"

//accountId=2  //not allowed

accountEmail="hffv@"
accountPassword="345"
accountCity="delhi"
let accountState;

console.log(accountId);


/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
