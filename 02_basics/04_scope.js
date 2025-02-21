// let a = 10;
// const b = 20;
// var c = 30;

const a = 10;
if(true){
    let a = 10;
    const b = 20;
    var c = 30;
    // console.log("inter :", a);
}

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(a);
// console.log(b);
// console.log(c);

// ===== Scope level and mini hosting ===== //

function one(){
    const userName = "abu";

    function two(){
        const website = "google.com";
        console.log(userName);
    }
    // console.log(website);
    // two();
}
// one();

if(true){
    const userName = "saam";
    if(userName === "saam"){
        const website = "google.com";
        // console.log(userName + " " + website);
    }
    // console.log(website);
}
// console.log(userName);

// +++++++++++ intersting ++++++++++++++ //

// function Declaration:-
function addOne(num){
    return num + 1;
}
addOne(5)

addTwo(5)
//function Expression:-
const addTwo = function(num){
    return num + 2;
}
// addTwo(5)

addThree(5)
// Arrow function:-
const addThree = (num) => {
    return num + 3;
}
// addThree(5)