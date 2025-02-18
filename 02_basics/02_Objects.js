// ========= Object ======//

// singleton
// Object.create

// object literal

const mySym = Symbol("key1")

const jsUser = {
    Fname : "abu",
    Lname : "shama",
    "full Name" : "Abu shama",
    age : 19,
    [mySym] : 1,
    location : "banglore",
    email : "abu@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Saturday"]
}
// console.log(typeof jsUser[mySym]);
// console.log(jsUser.isLoggedIn);
// console.log(jsUser["email"]);

// Object.freeze(jsUser)

// jsUser.email = "abc123@gmail.com";

// console.log(jsUser);
jsUser.greeting = function(){
    console.log(`Hello js user, ${this["full Name"]}`);
}
// console.log(jsUser.greeting());

// ======= Object-02 ========//

// const tinderUser = new Object();

const tinderUser = {}

tinderUser.id = "12212";
tinderUser.name = "abu";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email : "some@gmail.com",
    fullName : {
        usersfullName : {
            firstName : "abu",
            lastName : " shama"
        }
    }
}
// console.log(regularUser.fullName?.usersfullName.firstName);

const objOne = {1 : "a", 2: "b"}
const objTwo = {3 : "c", 4: "d"}

// const objThree = {objOne , objTwo}
// const objThree = Object.assign({}, objOne , objTwo)
const objThrere = {...objOne , ...objTwo}
// console.log(objThrere);

const users = [
    {
        id : 1,
        email : "abu@gmail.com"
    },
    {
        id : 2,
        email : "abc@mail.com"
    },
    {
        id : 3,
        email : "xyz@gmail.com"
    }
]
// users.map()
// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggin'));

// ====== Objects destructuring and JSION APIs =====//

const course = {
    coursename : "js in hindi",
    price : "999",
    courseInstructor : "abu"
}
// course.courseInstructor

const {courseInstructor : intsa } = course;
console.log(intsa);

// const navBar = ({company}) => {
// }
// navBar(company = "abu")

// ==== APIs == //
// {
//     "name" : "abu",
//     "coursename" : "hindi",
//     "price" : "free"
// }