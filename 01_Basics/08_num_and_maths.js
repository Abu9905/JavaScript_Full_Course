// ======= Number and Maths ========//

// Number:-
let score = 400;

const balance = new Number(100);
// console.log(balance);

// Methods:

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));
// console.log(balance.toFixed(1));

const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(3));
// console.log(otherNumber.toPrecision(4));

const hundred = 1000000;
// console.log(hundred.toLocaleString("en-IN"));


// === Methods === //
/* 
  [[Prototype]]
: 
Number
constructor
: 
ƒ Number()
toExponential
: 
ƒ toExponential()
toFixed
: 
ƒ toFixed()
toLocaleString
: 
ƒ toLocaleString()
toPrecision
: 
ƒ toPrecision()
toString
: 
ƒ toString()
valueOf
: 
ƒ valueOf()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
0
[[PrimitiveValue]]
: 
100
*/

// ++++++++++++++ Maths ++++++++++++++ //

console.log(Math);  
console.log(Math.abs(-4)); // neg to postive
console.log(Math.round(4.6)); // 5
console.log(Math.ceil(4.6)); // 5
console.log(Math.floor(4.6)); // 4
console.log(Math.min(4, 5, 6, 7, 8, 9)); // 4
console.log(Math.max(4, 5, 6, 7, 8, 9)); // 9

console.log(Math.random());
console.log(Math.floor(Math.random()*10) + 1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);