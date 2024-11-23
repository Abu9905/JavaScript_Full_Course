// ===== number and maths =======//

// number:-

const score = 400;
// console.log(score);

const balance = new Number(100);
// console.log(balance);

// Methos:-
// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 123.885;
// console.log(otherNumber.toPrecision(3));
const hundreds = 10000000;
// console.log(hundreds.toLocaleString('en-IN'));

// =========== Maths ============//

// console.log(Math);
// console.log(Math.abs(-99));
// console.log(Math.round(4.3));
// console.log(Math.round(4.6));
// console.log(Math.ceil(3.2));
// console.log(Math.floor(5.9));
// console.log(Math.min(2,4,6,8,4,1,3));
// console.log(Math.max(2,4,6,8,4,1,3));

console.log(Math.random());
console.log(Math.floor(Math.random() * 10) + 1);

const min =  10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);