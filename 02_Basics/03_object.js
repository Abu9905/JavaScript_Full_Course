// ======= Object ========//

// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const jsUser = {
    name : "abu",
    "full name" : "abu shama",
    location : 'Banglore',
    [mySym] : "mykey1",
    email : "abu56@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "saturady"]
}
// console.log(jsUser);
// console.log(jsUser.name);
// console.log(jsUser.location);
// console.log(jsUser["isLoggedIn"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

// chnage value
// jsUser.email = "abx@gamil.com"
// Object.freeze(jsUser)
// jsUser.email = "xyz@gmail.com"
// console.log(jsUser);

jsUser.greeting = function(){
    console.log("hlo js user");
}
jsUser.greetingTwo = function(){
    console.log(`hlo js user,${this.name}`);
}
console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());