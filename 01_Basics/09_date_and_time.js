// ===== date and time =====//
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate); // object

// New date declared:-

// let myCreateDate = new Date(2023, 0, 23);
// let myCreateDate = new Date(2023, 0, 23, 5, 3, 2, 1);
// let myCreateDate = new Date("2025-01-15");
let myCreateDate = new Date("01-15-2025");
// console.log(myCreateDate.toLocaleString());


let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`

newDate.toLocaleString("default", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
})
