const name = 'nish '
const repocount = 50 

// console.log(name+repocount+ " value ")

console.log(`Hello my name is ${name} my repo count is ${repocount}`);


const gameName = new String('nish-hc')

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));


const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-5,4)
console.log(anotherString);


const newStringOne = " nish "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://nisha.com/nish%20parab"

console.log(url.replace('%20','-'))

console.log(url.includes('nishaaa'))

console.log(url.includes('nish'))

console.log(gameName.split('-'));


