// ======== Strings =========//
const name = "abu ";
const repoCount = 50;

// console.log(name + repoCount + " value");

// console.log(`my name is ${name} and my total repoCout is ${repoCount}`);

const gameName = new String('Abu-sham');
// console.log(gameName);

// Methods :-

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLowerCase());
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('b'));

const newString = gameName.substring(0 , 4)
console.log(newString);

const anotherString = gameName.slice(-7 , 4)
console.log(anotherString);

const newStringOne = '     abu        ';
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://abu.com/abu%20shama";
console.log(url.replace('%20', '_'));

console.log(url.includes('abu'));
console.log(url.includes('rohit'));

console.log(gameName.split('-'));
