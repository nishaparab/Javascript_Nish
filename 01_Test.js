// console.log("Nisha")

const accountId = 2310
let accountEmail = "nisha@google.com"
var accountPassword =" 12345"
accountCity = "Jaipur"


// accountId =2 // not allowed
accountEmail ="abc@gmail.com"
accountPassword ="222222"
accountCity = "Mumbai"
console.log(accountId);


// Prefer not to use var because 
// of issue in block scope and functional scope 

console.table([accountId, accountEmail, accountPassword, accountCity])