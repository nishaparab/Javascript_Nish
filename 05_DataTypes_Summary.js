//premitive Data Types

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt


// Reference  (non-premitive ) DataTypes

// Array, Objects, Functions

//Array

const heros = ["shaktiman", "nagraj", "doga"];


//object
let myObj=
{
    name: "Arjun",
    age: 25,
}



//function 

const myFunction = function(){
    console.log("Hello World");
}



// *********************************************************

// stack (premitive), Heap (Non-premitive)

let myYoutubename = "nishaparab"

let anothername = myYoutubename
 anothername = "nish"

 console.log(myYoutubename);
 console.log(anothername);


 let userOne = {
    email:"user@google.com",
    upi: "user@ybl"
 }

 let userTwo = userOne

 userTwo.email = "nish@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 
