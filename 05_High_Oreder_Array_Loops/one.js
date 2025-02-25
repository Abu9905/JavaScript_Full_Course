// for of loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello World";

for (const greet of greeting) {
    // console.log(greet);
}

// Maps

const map = new Map();
map.set("IN" , "India");
map.set("US" , "United States");
map.set("US" , "United States");
map.set("UK" , "United Kingdom");

// console.log(map);

for (const [key , value] of map) {
    // console.log(key, ":-" , value);
}

const myObj = {
    'Game1' : "NFS",
    'Game2' : "Pubg",
    'Game3' : "GTA"
}
// for of loop don't work on objects

// for (const [key , value] of myObj) {
//     console.log(key, ":-" , value);
// }


// for in loop:-
// ===> for in loop in objects.
const myNewObj = {
    'js' : 'JavaScript',
    'py' : 'Python',
    'rb' : 'Ruby',
    'cpp' : 'C++'
}

for (const key in myNewObj) {
    // console.log(`${key} shortcut is for ${myNewObj[key]}` );
}

// ===> for in loop in arrays.
const programming = ['js' , 'py' , 'rb' , 'cpp'];

for (const key in programming) {
    // console.log(programming[key]);
}
// ===> for in loop in maps.

const maps = new Map();
maps.set("IN" , "India");
maps.set("US" , "United States");
maps.set("US" , "United States");
maps.set("UK" , "United Kingdom");

for (const key in maps) {
    // console.log(key);
}


// ===== for Each Loop ===== //
// ===> for Each Loop in Arrays.

const coding = ['js' , 'py' , 'rb' , 'cpp'];

// coding.forEach( (element) =>{
//     console.log(element);
// })


//  ===== Or =====
// function printMe(element){
//     console.log(element);
// }
// coding.forEach(printMe);

// coding.forEach( (element , index, arr) => {
//     console.log(element , index , arr);
// })

const myCoding = [
    {
        "languageName" : "js",
        "file" : "JavaScript"
    },
    {
        "languageName" : "py",
        "file" : "Python"
    },
    {
        "languageName" : "rb",
        "file" : "Ruby"
    },
    {
        "languageName" : "cpp",
        "file" : "C++"
    }
]

myCoding.forEach ( (lang) => {
    console.log(lang.languageName , lang.file);
})