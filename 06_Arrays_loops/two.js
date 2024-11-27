// 2.) for in loop:

// for in loop in object: 
const myObject = {
    js : 'javaScript',
    cpp : 'c++',
    py : 'python',
    rb : 'ruby'
}
for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    // console.log(`${key} shortcute is for ${myObject[key]}`);
}

// for in loop in Array:
// ---> only key aati hai

const programming = ["js" , "cpp", "py", "java", "rb"]

for (const key in programming) {
    // console.log(key);
    console.log(programming[key]);
}

