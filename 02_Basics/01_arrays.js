// ====== Array ========//

const myArr = [0 , 1, 3, 4, 5]
const myHeors = ['salman', 'sharuk', 'amir']

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1]);

// Methods:-
// myArr.push(7,8,9)
// myArr.push(45, 67,8,9)

// pup()
// myArr.pop()

// unshift
// myArr.unshift(9)

// shift
// myArr.shift()

// console.log(myArr.length);
// console.log(myArr.includes(10));
// console.log(myArr.indexOf(19));
// console.log(myArr.indexOf(3));

// const newArry = myArr.join()
// console.log(myArr);
// console.log(newArry);
// console.log( typeof newArry);

// slice , splice

console.log("A ", myArr);

const myn1 = myArr.slice(1 , 3);

console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1 , 3);
console.log(myn2);
console.log("c ", myArr);