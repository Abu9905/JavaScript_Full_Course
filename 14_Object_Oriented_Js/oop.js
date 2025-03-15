// Object literal:-
const user = {
    userName : "abu",
    loginCount : 5,
    signedIn : true,

    getUserDetails : function(){
        // console.log("Got user details from the database");
        // console.log(`User Name is ${this.userName}`);
        console.log(this);
    }
}

// const userTwo = {
//     userName : "abu",
//     loginCount : 5,
//     signedIn : true,

//     getUserDetails : function(){
//         // console.log("Got user details from the database");
//         // console.log(`User Name is ${this.userName}`);
//         console.log(this);
//     }
// }

// ##### Constructor function:-

// const promiseOne = new Promise()
// const date = new Date();

function User(userName, loginCount, signedIn){
    this.userName = userName;
    this.loginCount = loginCount;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`WelCome ${this.userName}`);
    }

    return this
}

const userOne = new User("abu", 5, true);
const userTwo = new User("chai and code", 11, false);
console.log(userOne.constructor);
// console.log(userTwo);

// console.log(user.userName);
// console.log(user.getUserDetails());
// console.log(this);