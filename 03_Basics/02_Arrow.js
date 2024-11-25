// ===== This And Arrow function ====//

// function declaration:
// function addtwo(num1 , num2){
//     return num1 + num2
// }
// const result = addtwo(8 , 9);
// console.log(result);

// function Expression:
// const addtwo = function(num1 , num2){
//     return num1 + num2
// }
// const result = addtwo(9 , 56);
// console.log(result);

// Arrow function:
// const addtwo = (num1 , num2) =>{
//     return num1 + num2
// }

// const addtwo = (num1 , num2) => num1 + num2
const addtwo = (num1 , num2) => (num1 + num2)

const result = addtwo(9 , 56);
// console.log(result);

// ============================================//
const user = {
    username : "abu",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website!!!`);
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = 'sam';
// user.welcomeMessage()

// console.log(this);

// ======== Arrow function ========//
// function chai(){
//     let username = "abu"
//     console.log(this.username);
// }
// chai()

// const chai = function (){
//     let username = 'abu'
//     console.log(this.username);
// }
// chai()

const chai = ()=>{
    let username = 'abu'
    // console.log(this.username);
    console.log(this);
}
// chai()

// const addNum = (num1 , num2) =>{
//     return num1 + num2
// }

// const addNum = (num1 , num2) => num1 + num2
// const addNum = (num1 , num2) => (num1 + num2)

const addNum = (num1 , num2) => ({username : 'abu'})
// console.log(addNum(9 , 6));

// const myArray = [2, 5, 7, 8]
// myArray.forEach(() =>{

// })

// ==== Immediately Invoked Function Expressions (IIFE) ==//
// ()()
(function chaiTwo(){
    console.log(`DB CONNECTED`);
})();

((user)=>{
    console.log(`${user} DB CONNECTED`);
})('abu')

