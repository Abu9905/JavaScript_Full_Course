// ============== Arrays in Loops =========//
// 1.) for of loop
// 2.) for in loop
// 3.) forEach loop

// ["", "", ""]
// [{}, {}, {}]

// 1.) for of loop :
const arr = [1 , 2, 3, 4, 5];
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello world"
for (const greet of greeting) {
    // console.log(`each chat is ${greet}`);
}

// Maps:
// ---> Unique value or order 
const map = new Map()
map.set('IN' , "India")
map.set('USA' , "United States of America")
map.set('Fr' , "France")
map.set('IN' , "India")
// console.log(map);

// for og loop in map
for (const [key , value] of map) {
    console.log(key , " :-", value);
}

// for in loop in map
for (const key in map) {
    console.log(key);
}


const myObject = {
    'game1' : 'NFS',
    'game2' : 'spiderman'
}
for (const [key , value] of myObject) {
    console.log(key , ':- ', value);
}
// Note :- for of loop object pe kam nahi karega