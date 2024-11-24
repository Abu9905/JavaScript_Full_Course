// ==== Date and Time in Js =====//

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); // object


// let myCreateDate = new Date(2024 , 0 , 4)
// let myCreateDate = new Date(2024 , 0 , 4 , 5 , 6)
// let myCreateDate = new Date("2024-01-15")
let myCreateDate = new Date("01-14-2024")
// console.log(myCreateDate.toDateString());
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now()/100));

let newDate = new Date()
console.log(newDate.getMonth() + 1);
console.log(newDate.getDate());

`${newDate.getDay()} and the time`

newDate.toLocaleDateString('default',{
    weekday : "long",
    timeZone : "zone"
})
