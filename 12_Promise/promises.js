// fetch('https://jsonplaceholder.typicode.com/todos/1').then().catch().finally()

// const promosiseOne = new Promise( (resolve, reject)=>{
//     // Do an async task
//     // DB calls, cryptography, network calls
//     setTimeout( ()=>{
//         console.log("Async task completed");
//         // resolve();
//     }, 1000);
// })

// promosiseOne.then( ()=>{
//     console.log("Promise resolved");
// })



// Combined promises:
// new Promise(function(resolve, reject){
//     setTimeout( ()=>{
//         console.log("Async Two task completed");
//         resolve();
//     },1000)
// }).then( ()=>{
//     console.log("Promise Two resolved");
// })

// Ex:-03
// const promosiseThree = new Promise( (resolve, reject)=>{
//     setTimeout( ()=>{
//         resolve({userName : "chai", email : "abc@gmail"});
//     }, 1000);
// })
// promosiseThree.then( (user)=>{
//     console.log(user);
// })

// Ex:-04
// const promisesFour = new Promise( (resolve, reject)=>{
//     setTimeout( ()=>{
//         let error = true;
//         if(!error){
//             resolve({userName : "chai", email : "abc@gmail"});
//         }else{
//             reject("Error: Something went wrong");
//         }
//     },1000)
// })
// promisesFour
// .then((user) =>{
//     console.log(user);
//     return user.userName;
// })
// .then((username)=>{
//     console.log();
//     console.log(username);
// })
// .catch( function(wrr){
//     console.log("hy error ");
// })
// .finally( function(finallyWork){
//     console.log("hy finally");
// })

// Ex:-05
// const promosiseFive = new Promise( (resolve, reject)=>{
//     setTimeout( ()=>{
//         let error = true;
//         if(!error){
//             resolve({username : "abu", password : "123"});
//         }else{
//             reject("Error: Something went wrong");
//         }
//     },1000)
// });

// async function runPromise(){
//     try{
//         const response =  await promosiseFive
//         console.log(response);
//     }catch(err){
//         console.log(err);
//     }
// }
// runPromise();

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response);
//         const data = await response.json()
//         console.log(data);
//     }catch(err){
//         console.log("E:", err);
//     }
// }
// getAllUsers()

// using catch and then:-
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => response.json())
.then((data) => console.log(data))
.catch((err) => console.log("E:", err));