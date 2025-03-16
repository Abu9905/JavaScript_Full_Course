let myName = "abushama";

// console.log(myName.trim().length);

// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman", "ironman"];

let heroPwer = {
    thore : "hammer",
    spiderman : "sling",

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.abu = function(){
    console.log(`Abu is present in all objects`);
}
Array.prototype.heyAbu = function(){
    console.log(`Abu says hello`);
}
// myHeroPower.abu()
myHeros.heyAbu();
myHeros.heyAbu();
// heroPwer.heyAbu();

// Inheritance

const user = {
    name : "abu",
    email : "abu@gmail",
}

const Teacher = {
    makeVideo : true
}
const TeachingSupport = {
    isAvailable : true
}
const TAypport = {
    makeAssignment : "Js Notes",
    fullTime : true,
    __proto__ : TeachingSupport
}
Teacher.__proto__ = user;

// modern syntax:-
Object.setPrototypeOf(TAypport, TeachingSupport);

let anotherUserName = "chaiAurCode";

String.prototype.trueLength = function(){
    // console.log(`${this}`);
    // console.log(`this.name`);
    console.log(`True lenght is: ${this.trim().length}`);
}

anotherUserName.trueLength();
"Abu".trueLength();
"iceTea".trueLength();