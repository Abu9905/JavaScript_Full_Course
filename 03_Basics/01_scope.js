// ========= Global and Local Scope =======//

// global scope

//var c = 300
// let a = 10
// const b = 20;
// var c = 30;

let a = 300;
if(true){
    let a = 10
    const b = 20; // block scope
    // var c = 30;
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);



// ==== scope level and mini hoisting in js ===//

function one(){
    const username = "abu"

    function two(){
        const website = 'youtube'
        console.log(username);
    }
    // console.log(website);

    // two()
}
// one()

if(true){
    const username = "sama"
    if(username === 'sama'){
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// =========== intersting =======//

// function declaration
// addOne(5)  // no Error
function addOne(num){
    return num + 1
}
// addOne(5)
// console.log(addOne(5));


// addTwo(5) // cann't access before initialization
// function Expression
const addTwo = function(num){
    return num + 2
}
// addTwo(5)