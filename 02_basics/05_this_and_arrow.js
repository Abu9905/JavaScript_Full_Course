const user = {
    username : "abu",
    price : 999,

    welcomeMessage : function(){
        console.log(`Welcome ${this.username}`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "ali"
// user.welcomeMessage()

// console.log(this);

// ==== Arrow Function ==== //
// function chai(){
//     let username = "abu"
//     console.log(this.username);
// }
// chai()

// type of function:

// 1. function declaration:
function chai(){
    console.log("chai pe jeyega!");
}
// chai();
// 2. function expression:

const chai2 = function(){
    console.log("chai pe jeyega!");
}
// chai2();

// 3. arrow function:
// const chai3 = () => {
//     console.log("chai pe jeyega!");
// }

//    Or
// const chai3 = (num1 ,  num2) => {
//     return num1 + num2;
// }

// )   Or
// Implicit return
// const chai3 = (num1 ,  num2) => num1 + num2;
// const chai3 = (num1 , num2) => (num1 + num2);
// Object:
const chai3 = (num1 , num2) => ({name : "abu", age : 22});


console.log(chai3(4 , 5));

const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// myArray.forEach( (element) =>{
    
// })

// ========= Immediately Invoked Function Expression (IIFE) ========= //
(function chai4(){
    console.log(`DB connected!`);
})();

((num) => {
    console.log(`DB connected! ${num}`);
})(5);