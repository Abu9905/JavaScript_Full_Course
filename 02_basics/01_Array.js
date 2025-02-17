// ==== Array ====//
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const myHeros = ["abu", "shama", "khan"];

const myArr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// access array:_
// console.log(myArray[0]);
// console.log(myArr2[3]);

// Methods:-
// console.log(myArray.length);

myArray.push(11);
// console.log(myArray); // add in last

myArray.pop();
// console.log(myArray); // remove in last

myArray.unshift(0);
// console.log(myArray); // add in first

myArray.shift();
// console.log(myArray); // remove in first

// console.log(myArray.includes(12));
// console.log(myArray.indexOf(2));


// const newArray = myArray.join();
// console.log(typeof newArray);

// splice and slice

// console.log("A", myArray);
const myn1 = myArray.splice(1, 3);
// console.log(myn1);

// console.log("B", myArray);

const myn2 = myArray.slice(1, 3);
// console.log(myn2);
// console.log("C", myArray);

// ========== Arrray-02 ==========//
const marvelHeros = ["thor", "ironman", "spiderman"];
const dcHeros = ["flash", "superman", "batman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);

const allHeros = marvelHeros.concat(dcHeros);
// const allHeros = [...marvelHeros, ...dcHeros];  
// console.log(allHeros);

const athorArray = [1 , 2, 3 ,[4, 5, 6, [7, 8, [9, 10]]]];
// console.log(athorArray.flat(Infinity));

// console.log(Array.isArray("abu"));
// console.log(Array.from("abu")); // convert string to array
// console.log(Array.from({name : "abu"}));// intersting

let scoreOne = 100;
let scoreTwo = 200;
let scoreThree = 300;

console.log(Array.of(scoreOne, scoreTwo, scoreThree)); // store in array
