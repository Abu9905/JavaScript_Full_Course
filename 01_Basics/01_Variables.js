// === Variable in Js ====//
// console.log('Hello World!');

const userId = 23455;
let userEmail = 'abu@gmail.com'
var userPassword = '1333133';
userCity = 'Banglore';
let userState;

// console.table([userId, userEmail, userPassword, userCity])

// change:-
// userId = 23456; // not allowed

// console.log(userId);

/*
    Prefer not user var
    becauser of issue in block scope and function scope.
*/

userEmail = 'abc@gmail.com';
userPassword = '778787';
userCity = 'Bihar';

console.table([userId, userEmail, userPassword, userCity , userState])
