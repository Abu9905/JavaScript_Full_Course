// ====== Function =======//

// console.log('A');
// console.log('b');
// console.log('u');
// console.log('s');
// console.log('h');
// console.log('a');
// console.log('m');
// console.log('a');

// function defation:
function sayName(){
console.log('A');
console.log('b');
console.log('u');
console.log('s');
console.log('h');
console.log('a');
console.log('m');
console.log('a');
}
// call function
// sayName()

// function addTwoNum(num1 , num2){
//     console.log(num1 + num2);
// }
// const myNum = addTwoNum(8 , 9)
// console.log(myNum);

function addTwoNum(num1 , num2){
    // result = num1 + num2;
    // return result;

    // or 
    return num1 + num2

    console.log("hello World!");
}
const myNum = addTwoNum(8 , 9)
// console.log(myNum);

function logginUserMessage(username = 'same'){
    // if(username === 'undefined'){
    //     console.log("Plz Enter a username:");
    //     return
    // }

    if(!username){
        console.log("Plz Enter a username:");
        return
    }
    return `${username} just logged in`
}
// const userStatus = logginUserMessage("abu");

const userStatus = logginUserMessage('abu');
// console.log(userStatus);

