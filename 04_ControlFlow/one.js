// if

// if(condition){
//     // when code condition true than code excut
// }else{
//     // when code condition false than code excut
// }

// const isUserLoggedIn = true;
const temperature = 41

// if( temperature < 40){
//     console.log("less than 50");
// }else{
//     console.log('Temperature is greater than 50');
// }

// < , > , <= , >= , == , === , != , !==

// const score = 200;

// if(score > 100){
//     const power = 'fly'
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`); // error

const balance = 1000;

// if(balance > 500)console.log('test'),console.log('test2');

// if(balance  < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");
// }else if(balance < 900){
//     console.log("less than 900");
// }else{
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// if(userLoggedIn && debitCard && 2 == 2){
//     console.log("Allow to shopping");
// }
// if(loggedInFromGoogle || loggedInFromEmail || true){
//     console.log("user login in");
// }

// ============ switch Case ===========//

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3;
// const month = "january";

// switch(month){
//     case 1 : 
//         console.log("January");
//         break;
//     case 2 :
//         console.log("feb");
//         break;
//     case 3 : 
//         console.log("mar");
//         break;
//     case 4 : 
//         console.log("apl");
//         break
//     default : 
//         console.log("No Month");    
// }

// ======== truty and falsy values =======//

// const userEmail = "abu@.ai"
// const userEmail = ""
const userEmail = []

if(userEmail){
    console.log("got user email");
}else{
    console.log("don't have user email");
}

// falsy value :
    // fasle , 0 , -0 , BigInt 0n , "" , null , undefined , NaN

// truthy value :
    // "0" , " " , 'false' , [] , {} , function(){}

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("object is empty");
}


// Nullish Coalescing Operator (??) : null undefined