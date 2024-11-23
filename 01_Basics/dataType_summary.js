// === dataType Summary =====//

// There are mainly two types of datatypes:-
// 1.) # Primitive dataType:-
// 7 types:- number , string , boolean , undefined , null , symble , bigInt.
// Example:-
let firstName = "abu";
let score = 100;
const scoreValue = 100.0;

const isLogginIn = false;
const outSideTemp = null;

let userEmail; 
// let userEmail = undefined

const id = Symbol('123');
const anotherId = Symbol('123')
// console.log(id === anotherId);

const bigNum = 1254884739588979280298n;
// const bigNum = BigInt(1234276695863928);



// 2.) # Non-Primitive/ Reference dataType:-
// 3 types:- Array , Object , Function.
// example:-

const heros = ['salman', 'sharuk', 'amir']

const userName = {
    firstName : 'abu',
    lastName : 'shama',
    email : 'abu23@gmail.com',
    hobbies : ['cricket', 'song', 'coding']
}

function sayHello(){
    console.log("Hello There !!");
}
// sayHello()

console.log(typeof sayHello);
console.log(typeof bigNum);
console.log(typeof userName);
console.log(typeof outSideTemp);
console.log(typeof scoreValue);