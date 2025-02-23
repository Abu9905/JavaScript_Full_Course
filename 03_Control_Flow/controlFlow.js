// if

const isUserLoggedIn = true;
const temperature = 39;

if(temperature > 40){
    // console.log("It's Hot Outside!!");
}else{
    // console.log("It's Cold Outside!!");
}
// console.log("My Name is ABU!!");
// < , > , <= , >= , == , === , != , !==

const score = 200;
if(score > 100){
    const power = "fly"
    // console.log(`user can ${power}!!`);
}
// console.log(`user can ${power}!!`); // error

// shorthand notation:

const balance = 1000;
// if(balance > 500) console.log("You can buy this item!!");

if(balance < 500){
    // console.log("Less than 500");
}else if(balance < 1000){
    // console.log("Less than 750");
}else if(balance < 900){
    // console.log("Less than 900");
}else{
    // console.log("less than 12000");
}

const isUserLoggedInfor = true;
const debitCard = true;
const loggedInFormGoogle = false;
const loggedInFormGmail = true;

if(isUserLoggedInfor && debitCard && balance){
    // console.log("User can purchase!!");
}else{
    // console.log("User can't purchase!!");
}

if(loggedInFormGoogle || loggedInFormGmail || gesstUser){
    // console.log("User can login!!");
}else{
    // console.log("User can't login!!");
}

// =========== Switch Case =========== //

const day = "monday";

switch(day){
    case "monday":
        // console.log("Today is Monday!!");
        break;
    case "tuesday":
        // console.log("Today is Tuesday!!");
        break;
    case "wednesday":
        // console.log("Today is Wednesday!!");
        break;
    case "thursday":
        // console.log("Today is Thursday!!");
        break;
    case "friday":
        // console.log("Today is Friday!!");
        break;
    case "saturday":
        // console.log("Today is Saturday!!");
        break;
    case "sunday":
        // console.log("Today is Sunday!!");
        break;
    default:
        // console.log("Invalid Day!!");
}

// ++++++ Or +++++++++ //

const month = 3;

switch(month){
    case 1:
        // console.log("January");
        break;
    case 2:
        // console.log("February");
        break;
    case 3:
        // console.log("March");
        break;
    case 5: 
        // console.log("May");
        break;
    default:
        // console.log("Invalid Month!!");
}

// ======= Truthy anf Falsy Values ========= //
// const userEmail = "Abu@gmail.com";
// const userEmail = "";
const userEmail = [];

if(userEmail){
    // console.log("Got User Email!!");
}else{
    // console.log("Don't have User Email!!");
}

// falsy values:-
    // false
    // 0
    // -0,
    // BigInt(0)
    // ""
    // null
    // undefined
    // NaN
// Example:-
const myName = false;
if(myName){
    // console.log("Condition is True");
}else{
    // console.log("Condition is False");
}

// Truthy values:-
    // true
    // "0"
    // "false"
    // " "
    // []
    // {}
    // function
    // -ve number

// Example:-
const myNameOne = "Abu";
if(myNameOne){
    // console.log("Condition is True");
}else{
    // console.log("Condition is False");
}

if(userEmail.length == 0){
    // console.log("Array is Empty");
}else{
    // console.log("Array is not Empty");
}


const emptyObj = {};
if(Object.keys(emptyObj).length == 0){
    // console.log("Object is Empty");
}

// Nullish Coalescing Operator: ??

let val1; 
// val1 = 5 ?? 10;
// val1 = null ?? 10;

// val1 = undefined ?? 15;
// val1 = null ?? 10 ?? 20;

// Terinary Operator:-

let age;
// (age > 18) ? console.log("You can Vote!!") : console.log("You can't Vote!!");

const iceTeaPrice = 100;
(iceTeaPrice >= 100) ? console.log("You can buy Ice Tea!!") : console.log("You can't buy Ice Tea!!");

